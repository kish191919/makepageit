"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import type { VerifiedQuote } from "@/lib/quote-token";

type Cadence = "one_time" | "monthly" | "yearly";

const strings = {
  en: {
    eyebrow: "Quote",
    title: "Choose your payment option",
    subtitle: "Pick how you'd like to pay. You'll be redirected to Stripe to complete the payment securely.",
    itemsLabel: "Quote items",
    optionsLabel: "Payment options",
    cadenceTitles: {
      one_time: "One-time payment",
      monthly: "Monthly subscription",
      yearly: "Yearly subscription",
    },
    cadenceDescriptions: {
      one_time: "Pay once and you're done.",
      monthly: "Billed every month, cancel anytime.",
      yearly: "Billed once a year — best for stable budgets.",
    },
    cadenceCtas: {
      one_time: (amt: string) => `Pay ${amt} once`,
      monthly: (amt: string) => `Subscribe — ${amt}/month`,
      yearly: (amt: string) => `Subscribe — ${amt}/year`,
    },
    submitting: "Redirecting…",
    error: "Couldn't start checkout. Please try again or contact support.",
    footer: "Secure payment via Stripe. We never see your card details.",
  },
  ko: {
    eyebrow: "견적서",
    title: "결제 방식을 선택해 주세요",
    subtitle: "원하시는 결제 방식을 선택하시면 Stripe 결제 페이지로 안전하게 이동합니다.",
    itemsLabel: "견적 항목",
    optionsLabel: "결제 옵션",
    cadenceTitles: {
      one_time: "한 번에 결제",
      monthly: "매월 정기결제",
      yearly: "매년 정기결제",
    },
    cadenceDescriptions: {
      one_time: "한 번 결제하시면 끝입니다.",
      monthly: "매달 자동 청구되며 언제든 해지 가능합니다.",
      yearly: "1년에 한 번 결제 — 안정적인 예산 운영에 적합합니다.",
    },
    cadenceCtas: {
      one_time: (amt: string) => `${amt} 한 번에 결제`,
      monthly: (amt: string) => `${amt}/월 구독 시작`,
      yearly: (amt: string) => `${amt}/년 구독 시작`,
    },
    submitting: "이동 중…",
    error: "결제를 시작하지 못했습니다. 잠시 후 다시 시도하거나 문의해 주세요.",
    footer: "Stripe를 통한 안전 결제입니다. 카드 정보는 저장되지 않습니다.",
  },
} as const;

function formatMoney(cents: number, currency: string): string {
  const value = (cents / 100).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `$${value} ${currency.toUpperCase()}`;
}

export default function QuotePageView({
  lang,
  token,
  quote,
}: {
  lang: Lang;
  token: string;
  quote: VerifiedQuote;
}) {
  const t = strings[lang];
  const [submitting, setSubmitting] = useState<Cadence | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onChoose(cadence: Cadence) {
    setError(null);
    setSubmitting(cadence);
    try {
      const res = await fetch(
        `/api/quote/${encodeURIComponent(token)}/checkout`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ cadence }),
        }
      );
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? t.error);
      }
      const data = (await res.json()) as { url: string };
      if (!data.url) throw new Error(t.error);
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : t.error);
      setSubmitting(null);
    }
  }

  const cadenceOrder: Cadence[] = ["one_time", "monthly", "yearly"];
  const enabledCadences = cadenceOrder.filter((c) => quote.cadences[c]);

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-2xl px-6">
        <p className="text-xs uppercase tracking-wider text-slate-500">{t.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">{t.title}</h1>
        <p className="mt-3 text-base text-slate-600">{t.subtitle}</p>

        {quote.memo && (
          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">Memo</p>
            <p className="mt-1 whitespace-pre-wrap text-slate-700">{quote.memo}</p>
          </div>
        )}

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-slate-900">{t.itemsLabel}</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {quote.lineItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                <span>{item.description}</span>
              </li>
            ))}
            {quote.lineItems.length === 0 && (
              <li className="text-slate-500">—</li>
            )}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-semibold text-slate-900">{t.optionsLabel}</h2>
          <div className="mt-3 space-y-3">
            {enabledCadences.map((cadence) => {
              const cfg = quote.cadences[cadence]!;
              const amount = formatMoney(cfg.totalCents, quote.currency);
              const isLoading = submitting === cadence;
              const ctaText = isLoading ? t.submitting : t.cadenceCtas[cadence](amount);
              return (
                <button
                  key={cadence}
                  type="button"
                  onClick={() => onChoose(cadence)}
                  disabled={submitting !== null}
                  className="group block w-full rounded-lg border border-slate-200 bg-white p-5 text-left transition hover:border-slate-900 disabled:opacity-60"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-base font-semibold text-slate-900">
                      {t.cadenceTitles[cadence]}
                    </span>
                    <span className="font-mono text-lg text-slate-900">{amount}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    {t.cadenceDescriptions[cadence]}
                  </p>
                  <span className="mt-3 inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white group-hover:bg-slate-700">
                    {ctaText} →
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {error && (
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <p className="mt-8 text-center text-xs text-slate-500">{t.footer}</p>
      </div>
    </main>
  );
}
