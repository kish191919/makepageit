"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Cadence = "one_time" | "monthly" | "yearly";

type LineItem = { description: string; quantity: number; unitDollars: number };

type Result =
  | { kind: "one_time"; invoiceId: string; hostedUrl: string | null; number: string | null }
  | { kind: "subscription"; checkoutUrl: string; emailSent: boolean };

export default function NewInvoiceForm({
  customerOptions,
  initialCustomerId,
}: {
  customerOptions: { id: string; label: string }[];
  initialCustomerId?: string;
}) {
  const [customerId, setCustomerId] = useState(initialCustomerId ?? "");
  const [lang, setLang] = useState<"en" | "ko">("en");
  const [cadence, setCadence] = useState<Cadence>("one_time");
  const [daysUntilDue, setDaysUntilDue] = useState(7);
  const [memo, setMemo] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { description: "", quantity: 1, unitDollars: 0 },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!customerId) {
      setError("Pick a customer.");
      return;
    }
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

    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/invoices", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          customerId,
          lang,
          cadence,
          daysUntilDue,
          memo: memo.trim() || undefined,
          lineItems,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      const body = (await res.json()) as Result;
      setResult(body);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to issue invoice");
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="space-y-4 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-lg font-semibold text-emerald-900">
          {result.kind === "one_time"
            ? "Invoice sent — Stripe is emailing the customer."
            : "Checkout link emailed to customer."}
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

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-slate-700">Line items</legend>
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-12 gap-2">
            <input
              placeholder="Description"
              value={item.description}
              onChange={(e) => patchItem(i, { description: e.target.value })}
              className="col-span-7 rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
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

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-slate-700">Payment cadence</legend>
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              { v: "one_time", label: "One-time" },
              { v: "monthly", label: "Monthly" },
              { v: "yearly", label: "Yearly" },
            ] as const
          ).map((opt) => (
            <label
              key={opt.v}
              className={
                cadence === opt.v
                  ? "rounded-md border border-slate-900 bg-slate-900 text-white px-3 py-2 text-sm text-center cursor-pointer"
                  : "rounded-md border border-slate-300 bg-white text-slate-700 px-3 py-2 text-sm text-center cursor-pointer hover:bg-slate-50"
              }
            >
              <input
                type="radio"
                name="cadence"
                value={opt.v}
                checked={cadence === opt.v}
                onChange={() => setCadence(opt.v)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      {cadence === "one_time" && (
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

      <div className="flex items-center justify-between rounded-md bg-slate-100 px-4 py-3">
        <span className="text-sm text-slate-700">
          {cadence === "one_time"
            ? "Total due"
            : cadence === "monthly"
              ? "Per month"
              : "Per year"}
        </span>
        <span className="font-mono text-lg font-semibold text-slate-900">
          ${(total / 100).toFixed(2)} USD
        </span>
      </div>

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
        {submitting ? "Issuing…" : cadence === "one_time" ? "Send invoice" : "Send checkout link"}
      </button>
    </form>
  );
}
