"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Mode = "single_one_time" | "single_monthly" | "single_yearly" | "quote";

type LineItem = { description: string; quantity: number; unitDollars: number };

type QuoteCadenceState = {
  enabled: boolean;
  totalDollars: number;
  daysUntilDue?: number;
};

type Result =
  | { kind: "one_time"; invoiceId: string; hostedUrl: string | null; number: string | null }
  | { kind: "subscription"; checkoutUrl: string; emailSent: boolean }
  | { kind: "quote"; quoteUrl: string; emailSent: boolean };

export default function NewInvoiceForm({
  customerOptions,
  initialCustomerId,
}: {
  customerOptions: { id: string; label: string }[];
  initialCustomerId?: string;
}) {
  const [customerId, setCustomerId] = useState(initialCustomerId ?? "");
  const [lang, setLang] = useState<"en" | "ko">("en");
  const [mode, setMode] = useState<Mode>("quote");
  const [daysUntilDue, setDaysUntilDue] = useState(7);
  const [memo, setMemo] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { description: "", quantity: 1, unitDollars: 0 },
  ]);
  const [quoteCadences, setQuoteCadences] = useState<{
    one_time: QuoteCadenceState;
    monthly: QuoteCadenceState;
    yearly: QuoteCadenceState;
  }>({
    one_time: { enabled: true, totalDollars: 0, daysUntilDue: 7 },
    monthly: { enabled: false, totalDollars: 0 },
    yearly: { enabled: false, totalDollars: 0 },
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);

  const isQuote = mode === "quote";
  const singleCadence = isQuote ? null : (mode.replace("single_", "") as "one_time" | "monthly" | "yearly");

  const total = useMemo(
    () =>
      items.reduce(
        (sum, it) => sum + Math.round(it.unitDollars * 100) * Math.max(1, it.quantity),
        0
      ),
    [items]
  );

  function patchItem(i: number, patch: Partial<LineItem>) {
    setItems((arr) => arr.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }

  function patchQuoteCadence(
    key: "one_time" | "monthly" | "yearly",
    patch: Partial<QuoteCadenceState>
  ) {
    setQuoteCadences((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!customerId) {
      setError("Pick a customer.");
      return;
    }

    let bodyPayload: Record<string, unknown>;

    if (isQuote) {
      const lineItemDescriptions = items
        .filter((it) => it.description.trim())
        .map((it) => ({ description: it.description.trim() }));
      if (lineItemDescriptions.length === 0) {
        setError("Add at least one line item description.");
        return;
      }
      const cadences: Record<string, { totalCents: number; daysUntilDue?: number }> = {};
      if (quoteCadences.one_time.enabled) {
        if (quoteCadences.one_time.totalDollars <= 0) {
          setError("Enter a one-time total greater than $0.");
          return;
        }
        cadences.one_time = {
          totalCents: Math.round(quoteCadences.one_time.totalDollars * 100),
          daysUntilDue: Math.min(60, Math.max(1, Math.floor(quoteCadences.one_time.daysUntilDue ?? 7))),
        };
      }
      if (quoteCadences.monthly.enabled) {
        if (quoteCadences.monthly.totalDollars <= 0) {
          setError("Enter a monthly total greater than $0.");
          return;
        }
        cadences.monthly = { totalCents: Math.round(quoteCadences.monthly.totalDollars * 100) };
      }
      if (quoteCadences.yearly.enabled) {
        if (quoteCadences.yearly.totalDollars <= 0) {
          setError("Enter a yearly total greater than $0.");
          return;
        }
        cadences.yearly = { totalCents: Math.round(quoteCadences.yearly.totalDollars * 100) };
      }
      if (Object.keys(cadences).length === 0) {
        setError("Enable at least one payment option.");
        return;
      }

      bodyPayload = {
        mode: "quote",
        customerId,
        lang,
        memo: memo.trim() || undefined,
        lineItems: lineItemDescriptions,
        cadences,
      };
    } else {
      const lineItems = items
        .filter((it) => it.description.trim() && it.unitDollars > 0)
        .map((it) => ({
          description: it.description.trim(),
          quantity: Math.max(1, Math.floor(it.quantity)),
          unitAmount: Math.round(it.unitDollars * 100),
        }));
      if (lineItems.length === 0) {
        setError("Add at least one line item with a description and amount.");
        return;
      }
      bodyPayload = {
        mode: "single",
        customerId,
        lang,
        cadence: singleCadence,
        daysUntilDue,
        memo: memo.trim() || undefined,
        lineItems,
      };
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/invoices", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bodyPayload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      const body = (await res.json()) as Result;
      setResult(body);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to issue");
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    const isQuoteResult = result.kind === "quote";
    return (
      <div className="space-y-4 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-lg font-semibold text-emerald-900">
          {result.kind === "one_time"
            ? "Invoice sent — Stripe is emailing the customer."
            : result.kind === "subscription"
              ? "Checkout link emailed to customer."
              : `Quote ready${result.emailSent ? " — emailed to customer." : "."}`}
        </h2>
        {result.kind === "one_time" && result.hostedUrl && (
          <p className="text-sm text-emerald-800">
            <a
              href={result.hostedUrl}
              target="_blank"
              rel="noreferrer"
              className="underline font-medium"
            >
              Open hosted invoice ({result.number ?? result.invoiceId}) ↗
            </a>
          </p>
        )}
        {isQuoteResult && (
          <>
            <div className="rounded-md border border-emerald-300 bg-white px-4 py-3 text-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Quote URL</p>
              <p className="mt-1 break-all font-mono text-slate-900">{result.quoteUrl}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={result.quoteUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Open quote ↗
              </a>
              <button
                type="button"
                onClick={async () => {
                  await navigator.clipboard.writeText(result.quoteUrl);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {copied ? "Copied!" : "Copy URL"}
              </button>
            </div>
          </>
        )}
        {result.kind === "subscription" && (
          <p className="text-sm text-emerald-800 break-all">
            Checkout URL:{" "}
            <a href={result.checkoutUrl} className="underline font-medium" target="_blank" rel="noreferrer">
              {result.checkoutUrl}
            </a>
          </p>
        )}
        <div className="flex gap-3 pt-2">
          <Link
            href="/admin/invoices"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Back to invoices
          </Link>
          <button
            type="button"
            onClick={() => {
              setResult(null);
              setItems([{ description: "", quantity: 1, unitDollars: 0 }]);
              setMemo("");
            }}
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Issue another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-lg border border-slate-200 bg-white p-6">
      <div>
        <label htmlFor="customerId" className="block text-sm font-medium text-slate-700">
          Customer <span className="text-red-500">*</span>
        </label>
        <select
          id="customerId"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="">Select a customer…</option>
          {customerOptions.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-slate-500">
          Don&apos;t see them?{" "}
          <Link href="/admin/customers/new" className="underline">
            Create a new customer
          </Link>
          .
        </p>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-slate-700">Mode</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {(
            [
              { v: "quote", label: "Quote (customer chooses)" },
              { v: "single_one_time", label: "Send One-time" },
              { v: "single_monthly", label: "Send Monthly" },
              { v: "single_yearly", label: "Send Yearly" },
            ] as const
          ).map((opt) => (
            <label
              key={opt.v}
              className={
                mode === opt.v
                  ? "rounded-md border border-slate-900 bg-slate-900 text-white px-3 py-2 text-xs text-center cursor-pointer"
                  : "rounded-md border border-slate-300 bg-white text-slate-700 px-3 py-2 text-xs text-center cursor-pointer hover:bg-slate-50"
              }
            >
              <input
                type="radio"
                name="mode"
                value={opt.v}
                checked={mode === opt.v}
                onChange={() => setMode(opt.v)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          {isQuote
            ? "Quote mode sends one email with a single link; the customer picks a payment option on the quote page."
            : "Single mode issues the invoice immediately for the chosen cadence."}
        </p>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-slate-700">
          Line items {isQuote && <span className="text-xs font-normal text-slate-500">(displayed on quote page only — totals come from cadence section below)</span>}
        </legend>
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-12 gap-2">
            <input
              placeholder="Description"
              value={item.description}
              onChange={(e) => patchItem(i, { description: e.target.value })}
              className={isQuote ? "col-span-11 rounded-md border border-slate-300 px-3 py-2 text-sm" : "col-span-7 rounded-md border border-slate-300 px-3 py-2 text-sm"}
            />
            {!isQuote && (
              <>
                <input
                  type="number"
                  min="1"
                  step="1"
                  placeholder="Qty"
                  value={item.quantity}
                  onChange={(e) => patchItem(i, { quantity: Number(e.target.value) || 1 })}
                  className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Unit USD"
                  value={item.unitDollars}
                  onChange={(e) => patchItem(i, { unitDollars: Number(e.target.value) || 0 })}
                  className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
              </>
            )}
            <button
              type="button"
              onClick={() => setItems((arr) => arr.filter((_, idx) => idx !== i))}
              className="col-span-1 rounded-md text-slate-400 hover:text-red-600"
              aria-label="Remove line"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setItems((arr) => [...arr, { description: "", quantity: 1, unitDollars: 0 }])
          }
          className="text-xs font-medium text-slate-600 hover:text-slate-900"
        >
          + Add line
        </button>
      </fieldset>

      {isQuote ? (
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-slate-700">Cadence options</legend>
          <p className="text-xs text-slate-500">
            Enable at least one. Each price represents the total customer will be charged at that cadence.
          </p>

          <CadenceRow
            label="One-time"
            suffix=""
            state={quoteCadences.one_time}
            onChange={(p) => patchQuoteCadence("one_time", p)}
            withDueDays
          />
          <CadenceRow
            label="Monthly"
            suffix="/ month"
            state={quoteCadences.monthly}
            onChange={(p) => patchQuoteCadence("monthly", p)}
          />
          <CadenceRow
            label="Yearly"
            suffix="/ year"
            state={quoteCadences.yearly}
            onChange={(p) => patchQuoteCadence("yearly", p)}
          />
        </fieldset>
      ) : (
        singleCadence === "one_time" && (
          <div>
            <label htmlFor="dueDays" className="block text-sm font-medium text-slate-700">
              Due in (days)
            </label>
            <input
              id="dueDays"
              type="number"
              min="1"
              max="60"
              value={daysUntilDue}
              onChange={(e) => setDaysUntilDue(Number(e.target.value) || 7)}
              className="mt-1 w-32 rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
        )
      )}

      <div>
        <label htmlFor="lang" className="block text-sm font-medium text-slate-700">
          Email language
        </label>
        <select
          id="lang"
          value={lang}
          onChange={(e) => setLang(e.target.value as "en" | "ko")}
          className="mt-1 w-32 rounded-md border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="en">English</option>
          <option value="ko">한국어</option>
        </select>
      </div>

      <div>
        <label htmlFor="memo" className="block text-sm font-medium text-slate-700">
          Memo (optional)
        </label>
        <textarea
          id="memo"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          placeholder="Quote reference, project name, terms note, etc."
        />
      </div>

      {!isQuote && (
        <div className="flex items-center justify-between rounded-md bg-slate-100 px-4 py-3">
          <span className="text-sm text-slate-700">
            {singleCadence === "one_time"
              ? "Total due"
              : singleCadence === "monthly"
                ? "Per month"
                : "Per year"}
          </span>
          <span className="font-mono text-lg font-semibold text-slate-900">
            ${(total / 100).toFixed(2)} USD
          </span>
        </div>
      )}

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 disabled:opacity-60"
      >
        {submitting
          ? "Working…"
          : isQuote
            ? "Send quote"
            : singleCadence === "one_time"
              ? "Send invoice"
              : "Send checkout link"}
      </button>
    </form>
  );
}

function CadenceRow({
  label,
  suffix,
  state,
  onChange,
  withDueDays = false,
}: {
  label: string;
  suffix: string;
  state: QuoteCadenceState;
  onChange: (patch: Partial<QuoteCadenceState>) => void;
  withDueDays?: boolean;
}) {
  return (
    <div className="rounded-md border border-slate-200 p-3">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={state.enabled}
          onChange={(e) => onChange({ enabled: e.target.checked })}
          className="h-4 w-4 rounded border-slate-400"
        />
        <span className="text-sm font-medium text-slate-900 w-20">{label}</span>
        <span className="text-slate-500">$</span>
        <input
          type="number"
          min="0"
          step="0.01"
          value={state.totalDollars}
          onChange={(e) => onChange({ totalDollars: Number(e.target.value) || 0 })}
          disabled={!state.enabled}
          className="w-32 rounded-md border border-slate-300 px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-400"
        />
        <span className="text-sm text-slate-500">USD {suffix}</span>
        {withDueDays && (
          <>
            <span className="text-sm text-slate-500 ml-4">due in</span>
            <input
              type="number"
              min="1"
              max="60"
              value={state.daysUntilDue ?? 7}
              onChange={(e) => onChange({ daysUntilDue: Number(e.target.value) || 7 })}
              disabled={!state.enabled}
              className="w-20 rounded-md border border-slate-300 px-3 py-2 text-sm disabled:bg-slate-50 disabled:text-slate-400"
            />
            <span className="text-sm text-slate-500">days</span>
          </>
        )}
      </label>
    </div>
  );
}
