"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { getPlans } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

const CHECKOUT_PLAN_IDS = new Set(["portfolio-lite", "portfolio-pro"]);
const MAX_MAILBOXES = 5;
const MAX_EXTRA_PAGES = 10;

type CheckoutOptions = {
  monthly: boolean;
  monthlyMaintenance: boolean;
  hosting: boolean;
  database: boolean;
  domain: boolean;
  emailMailboxes: number;
  extraPages: number;
  booking: boolean;
  payment: boolean;
};
const DEFAULT_OPTIONS: CheckoutOptions = {
  monthly: true,
  monthlyMaintenance: true,
  hosting: true,
  database: true,
  domain: true,
  emailMailboxes: 0,
  extraPages: 0,
  booking: false,
  payment: false,
};

function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

export default function Pricing({ lang, hideHeading = false }: { lang: Lang; hideHeading?: boolean }) {
  const dict = getDict(lang);
  const plans = getPlans(lang);
  const monthlyLabel = lang === "en" ? " / mo" : " / 월";
  const yearlyLabel = lang === "en" ? " / yr" : " / 년";

  const scrollerRef = useRef<HTMLDivElement>(null);
  const customizePanelRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingPlan, setPendingPlan] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [showCanceled, setShowCanceled] = useState(false);
  const [planOptions, setPlanOptions] = useState<Record<string, CheckoutOptions>>({});
  const [customizeOpen, setCustomizeOpen] = useState(false);

  function getOptions(planId: string): CheckoutOptions {
    return planOptions[planId] ?? DEFAULT_OPTIONS;
  }

  function toggleCustomize() {
    setCustomizeOpen((prev) => !prev);
  }

  function setOption<K extends keyof CheckoutOptions>(
    planId: string,
    key: K,
    value: CheckoutOptions[K]
  ) {
    setPlanOptions((prev) => ({
      ...prev,
      [planId]: { ...getOptions(planId), [key]: value },
    }));
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("canceled") === "1") setShowCanceled(true);
  }, []);

  useLayoutEffect(() => {
    const panels: HTMLDivElement[] = [];
    customizePanelRefs.current.forEach((el) => {
      if (el) panels.push(el);
    });
    if (panels.length === 0) return;

    panels.forEach((el) => {
      el.style.minHeight = "";
    });

    if (!customizeOpen) return;

    let max = 0;
    panels.forEach((el) => {
      if (el.offsetHeight > max) max = el.offsetHeight;
    });

    if (max > 0) {
      panels.forEach((el) => {
        el.style.minHeight = `${max}px`;
      });
    }
  }, [customizeOpen, planOptions, lang]);

  async function handleCheckout(planId: string) {
    setCheckoutError(null);
    setPendingPlan(planId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, lang, options: getOptions(planId) }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.url) {
        throw new Error(data?.error || dict.pricing.checkoutError);
      }
      window.location.href = data.url as string;
    } catch (err) {
      setPendingPlan(null);
      setCheckoutError(err instanceof Error ? err.message : dict.pricing.checkoutError);
    }
  }

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-carousel-item]")
    );
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = cards.indexOf(visible.target as HTMLElement);
        if (idx >= 0) setActiveIndex(idx);
      },
      { root: scroller, threshold: [0.5, 0.75, 1] }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [plans.length]);

  function scrollToIndex(i: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelectorAll<HTMLElement>("[data-carousel-item]")[i];
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <section className="section relative overflow-hidden bg-ink-100">
      <div className="pointer-events-none absolute -right-32 top-24 hidden h-[400px] w-[400px] rounded-full bg-accent-400 opacity-20 blur-3xl md:block" />
      <div className="pointer-events-none absolute -left-32 bottom-16 hidden h-[420px] w-[420px] rounded-full bg-brand-200 opacity-30 blur-3xl md:block" />

      <div className="container-custom relative z-10">
        {showCanceled && (
          <div className="mb-8 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            {dict.pricing.canceledNotice}
          </div>
        )}
        {!hideHeading && (
          <SectionHeading
            align="center"
            eyebrow={dict.pricing.eyebrow}
            title={
              <>
                {dict.pricing.title.line1}
                <br className="hidden md:inline" />{" "}
                {dict.pricing.title.line2}
              </>
            }
            description={
              <>
                {dict.pricing.description.line1}
                <br className="hidden md:inline" />{" "}
                {dict.pricing.description.line2}
              </>
            }
          />
        )}

        <div
          ref={scrollerRef}
          className={`mx-auto max-w-4xl ${hideHeading ? "" : "mt-14"} -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:grid-cols-2 md:gap-6 md:snap-none md:overflow-visible md:px-0 md:pb-0`}
          style={{ scrollbarWidth: "none" }}
        >
          {plans.map((p) => {
            const opts = getOptions(p.id);
            const hasMonthlyBreakdown = p.amounts.monthlyMaintenance !== undefined;
            const monthlyPerMonth = hasMonthlyBreakdown
              ? (opts.monthlyMaintenance ? (p.amounts.monthlyMaintenance ?? 0) : 0) +
                (opts.hosting ? (p.amounts.hosting ?? 0) : 0) +
                (opts.database ? (p.amounts.database ?? 0) : 0)
              : opts.monthly ? p.amounts.monthly : 0;
            const monthlyAnnual = monthlyPerMonth * 12;
            const domainAnnual = opts.domain ? p.amounts.domain : 0;
            const emailAnnual = p.amounts.email * opts.emailMailboxes;
            const oneTimeAddons =
              p.amounts.extraPage * opts.extraPages +
              (opts.booking ? p.amounts.booking : 0) +
              (opts.payment ? p.amounts.payment : 0);
            const setupTotal = p.amounts.setup + oneTimeAddons;
            const annualRecurring = monthlyAnnual + domainAnnual + emailAnnual;
            const firstYearTotal = setupTotal + annualRecurring;
            const yearTwoOnward = annualRecurring;
            const isCustomizeOpen = customizeOpen;
            return (
            <article
              key={p.id}
              data-carousel-item
              className={`relative flex h-full flex-col rounded-3xl border transition duration-300 snap-center shrink-0 basis-[88%] md:shrink md:basis-auto ${
                p.best
                  ? "border-ink-900 bg-ink-900 text-white shadow-2xl"
                  : "overflow-hidden border-blue-500/60 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white shadow-[0_2px_4px_rgba(15,23,42,0.06),0_14px_32px_-12px_rgba(37,99,235,0.35)] hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_4px_8px_rgba(15,23,42,0.06),0_24px_48px_-16px_rgba(37,99,235,0.50)]"
              }`}
            >
              {p.best && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  {p.badge ?? "BEST CHOICE"}
                </span>
              )}
              {!p.best && (
                <>
                  <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-300/40 blur-3xl" />
                  <span aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-accent-500/20 blur-3xl" />
                </>
              )}
              <div className="relative z-10 flex flex-1 flex-col p-8">
              <h3
                className={`text-sm font-bold uppercase tracking-[0.25em] ${
                  p.best ? "text-accent-400" : "text-white"
                }`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-2 text-xs font-semibold uppercase tracking-wider ${
                  p.best ? "text-ink-200" : "text-white/60"
                }`}
              >
                {p.audience}
              </p>
              <p
                className={`mt-3 text-sm ${p.best ? "text-ink-200" : "text-white/80"}`}
              >
                {p.description}
              </p>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold sm:text-5xl">
                    {formatUsd(setupTotal)}
                  </span>
                  <span
                    className={`text-sm ${p.best ? "text-ink-200" : "text-white/70"}`}
                  >
                    {p.pricing.oneTimeNote}
                  </span>
                </div>
                <div
                  className={`mt-3 space-y-1 text-sm ${
                    p.best ? "text-ink-200" : "text-white/90"
                  }`}
                >
                  <p>
                    <span className="font-semibold">{p.pricing.monthly}{monthlyLabel}</span>
                    <span className={p.best ? "text-ink-200" : "text-white/60"}>
                      {" "}· {p.pricing.monthlyNote}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">{p.pricing.annual}{yearlyLabel}</span>
                    <span className={p.best ? "text-ink-200" : "text-white/60"}>
                      {" "}· {p.pricing.annualNote}
                    </span>
                  </p>
                </div>
              </div>

              <div
                className={`mt-5 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold ${
                  p.best
                    ? "bg-accent-500/20 text-white ring-1 ring-accent-400"
                    : "bg-white text-ink-900 ring-1 ring-white/40"
                }`}
              >
                <span className={p.best ? "text-ink-200" : "text-ink-500"}>
                  {dict.pricing.yearTotal}
                </span>
                <span
                  className={`text-lg font-extrabold ${
                    p.best ? "text-accent-400" : "text-blue-900"
                  }`}
                >
                  {formatUsd(firstYearTotal)}
                </span>
              </div>

              <div
                className={`mt-2 flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm ${
                  p.best
                    ? "bg-white/5 text-ink-200 ring-1 ring-white/10"
                    : "bg-white text-ink-500 ring-1 ring-white/40"
                }`}
              >
                <span className={p.best ? "text-ink-200" : "text-ink-500"}>
                  {dict.pricing.yearAfter}
                </span>
                <span
                  className={`text-base font-bold ${
                    p.best ? "text-accent-400" : "text-blue-900"
                  }`}
                >
                  {formatUsd(yearTwoOnward)}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full ${
                        p.best ? "bg-accent-500 text-white" : "bg-white text-blue-900"
                      }`}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {CHECKOUT_PLAN_IDS.has(p.id) ? (() => {
                const today =
                  setupTotal +
                  monthlyPerMonth +
                  (opts.domain ? p.amounts.domain : 0) +
                  p.amounts.email * opts.emailMailboxes;
                const isSubscription = monthlyPerMonth > 0 || opts.emailMailboxes > 0;
                const ctaLabel =
                  pendingPlan === p.id
                    ? dict.pricing.checkoutSubmitting
                    : isSubscription
                    ? dict.pricing.subscribeCta(formatUsd(today))
                    : dict.pricing.payOnceCta(formatUsd(today));
                return (
                  <div className="mt-9 space-y-3">
                    <div
                      ref={(el) => {
                        customizePanelRefs.current.set(p.id, el);
                      }}
                      className={`flex flex-col rounded-2xl p-4 ring-1 ${
                        p.best
                          ? "bg-white/5 ring-white/15"
                          : "bg-white/15 ring-white/30"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={toggleCustomize}
                        aria-expanded={isCustomizeOpen}
                        className={`flex w-full items-center justify-between gap-2 text-left ${
                          p.best ? "text-white/90" : "text-white"
                        }`}
                      >
                        <span
                          className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
                            p.best ? "text-white/70" : "text-white/90"
                          }`}
                        >
                          {dict.pricing.customizeTitle}
                        </span>
                        <span
                          className={`flex items-center gap-1 text-[11px] font-semibold ${
                            p.best ? "text-white/70" : "text-white/90"
                          }`}
                        >
                          {isCustomizeOpen
                            ? dict.pricing.customizeHideOptions
                            : dict.pricing.customizeShowOptions}
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            className={`transition-transform ${isCustomizeOpen ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          >
                            <path
                              d="M2 3.5l3 3 3-3"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                      {isCustomizeOpen && (
                        <div className="mt-3 space-y-2.5">
                          {hasMonthlyBreakdown ? (
                            <>
                              <ToggleRow
                                checked={opts.monthlyMaintenance}
                                onChange={(v) => setOption(p.id, "monthlyMaintenance", v)}
                                label={dict.pricing.customizeMonthlyLabel}
                                hint={dict.pricing.customizeMonthlyHint}
                                amount={`${formatUsd(p.amounts.monthlyMaintenance ?? 0)}${monthlyLabel}`}
                                dark={Boolean(p.best)}
                              />
                              <ToggleRow
                                checked={opts.hosting}
                                onChange={(v) => setOption(p.id, "hosting", v)}
                                label={dict.pricing.customizeHostingLabel}
                                hint={dict.pricing.customizeHostingHint}
                                amount={`${formatUsd(p.amounts.hosting ?? 0)}${monthlyLabel}`}
                                dark={Boolean(p.best)}
                              />
                              <ToggleRow
                                checked={opts.database}
                                onChange={(v) => setOption(p.id, "database", v)}
                                label={dict.pricing.customizeDatabaseLabel}
                                hint={dict.pricing.customizeDatabaseHint}
                                amount={`${formatUsd(p.amounts.database ?? 0)}${monthlyLabel}`}
                                dark={Boolean(p.best)}
                              />
                            </>
                          ) : (
                            <ToggleRow
                              checked={opts.monthly}
                              onChange={(v) => setOption(p.id, "monthly", v)}
                              label={dict.pricing.customizeMonthlyLabel}
                              hint={dict.pricing.customizeMonthlyHint}
                              amount={`${formatUsd(p.amounts.monthly)}${monthlyLabel}`}
                              dark={Boolean(p.best)}
                            />
                          )}
                          <ToggleRow
                            checked={opts.domain}
                            onChange={(v) => setOption(p.id, "domain", v)}
                            label={dict.pricing.customizeDomainLabel}
                            hint={dict.pricing.customizeDomainHint}
                            amount={`${formatUsd(p.amounts.domain)}${yearlyLabel}`}
                            dark={Boolean(p.best)}
                          />
                          <EmailRow
                            mailboxes={opts.emailMailboxes}
                            onChange={(v) => setOption(p.id, "emailMailboxes", v)}
                            label={dict.pricing.customizeEmailLabel}
                            hint={dict.pricing.customizeEmailHint}
                            mailboxesLabel={dict.pricing.customizeEmailMailboxesLabel}
                            amount={dict.pricing.customizeEmailPerMailbox(`${formatUsd(p.amounts.email)}${yearlyLabel}`)}
                            dark={Boolean(p.best)}
                          />
                          <ExtraPageRow
                            pages={opts.extraPages}
                            onChange={(v) => setOption(p.id, "extraPages", v)}
                            label={dict.pricing.customizeExtraPageLabel}
                            hint={dict.pricing.customizeExtraPageHint}
                            pagesLabel={dict.pricing.customizeExtraPagePagesLabel}
                            amount={dict.pricing.customizeExtraPagePerPage(formatUsd(p.amounts.extraPage))}
                            dark={Boolean(p.best)}
                          />
                          <ToggleRow
                            checked={opts.booking}
                            onChange={(v) => setOption(p.id, "booking", v)}
                            label={dict.pricing.customizeBookingLabel}
                            hint={dict.pricing.customizeBookingHint}
                            amount={`+${formatUsd(p.amounts.booking)}`}
                            dark={Boolean(p.best)}
                          />
                          <ToggleRow
                            checked={opts.payment}
                            onChange={(v) => setOption(p.id, "payment", v)}
                            label={dict.pricing.customizePaymentLabel}
                            hint={dict.pricing.customizePaymentHint}
                            amount={`+${formatUsd(p.amounts.payment)}`}
                            dark={Boolean(p.best)}
                          />
                        </div>
                      )}
                      <div
                        className={`mt-auto flex items-baseline justify-between border-t pt-3 text-sm ${
                          p.best ? "border-white/10" : "border-white/30"
                        }`}
                      >
                        <span className={p.best ? "text-white/70" : "text-white/90"}>
                          {dict.pricing.todayLabel}
                        </span>
                        <span className="text-2xl font-extrabold text-white">
                          {formatUsd(today)}
                        </span>
                      </div>
                      {monthlyPerMonth > 0 && (
                        <p
                          className={`mt-1 text-right text-[11px] ${
                            p.best ? "text-white/50" : "text-white/70"
                          }`}
                        >
                          {dict.pricing.monthlyAfterLabel(formatUsd(monthlyPerMonth))}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCheckout(p.id)}
                      disabled={pendingPlan === p.id}
                      className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-70 ${
                        p.best
                          ? "bg-white text-ink-900 hover:bg-accent-500 hover:text-white"
                          : "bg-ink-900 text-white hover:bg-blue-700"
                      }`}
                    >
                      {ctaLabel}
                    </button>
                    <Link
                      href={localePath(lang, "/contact")}
                      className={`block text-center text-xs font-semibold underline-offset-4 hover:underline ${
                        p.best ? "text-ink-200" : "text-white/80"
                      }`}
                    >
                      {dict.pricing.quoteCta}
                    </Link>
                  </div>
                );
              })() : (
                <Link
                  href={localePath(lang, "/contact")}
                  className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                    p.best
                      ? "bg-white text-ink-900 hover:bg-accent-500 hover:text-white"
                      : "bg-ink-900 text-white hover:bg-blue-700"
                  }`}
                >
                  {p.cta}
                </Link>
              )}
              </div>
            </article>
            );
          })}
        </div>

        {checkoutError && (
          <p className="mt-4 text-center text-sm font-medium text-red-600">{checkoutError}</p>
        )}

        <div className="mt-4 flex justify-center gap-2 md:hidden" role="tablist">
          {plans.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-label={p.name}
              aria-selected={i === activeIndex}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-blue-600" : "w-2 bg-ink-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToggleRow({
  checked,
  onChange,
  label,
  hint,
  amount,
  dark,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  hint: string;
  amount: string;
  dark: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 flex-none accent-accent-500"
      />
      <span className="flex flex-1 items-start justify-between gap-3 text-left">
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-white">{label}</span>
          <span className={`text-[11px] ${dark ? "text-white/50" : "text-white/70"}`}>{hint}</span>
        </span>
        <span className={`whitespace-nowrap text-xs font-semibold ${dark ? "text-white/70" : "text-white/90"}`}>
          {amount}
        </span>
      </span>
    </label>
  );
}

function EmailRow({
  mailboxes,
  onChange,
  label,
  hint,
  mailboxesLabel,
  amount,
  dark,
}: {
  mailboxes: number;
  onChange: (v: number) => void;
  label: string;
  hint: string;
  mailboxesLabel: string;
  amount: string;
  dark: boolean;
}) {
  const checked = mailboxes > 0;
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked ? 1 : 0)}
        className="mt-1 h-4 w-4 flex-none accent-accent-500"
        aria-label={label}
      />
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">{label}</span>
            <span className={`text-[11px] ${dark ? "text-white/50" : "text-white/70"}`}>{hint}</span>
          </div>
          <span className={`whitespace-nowrap text-xs font-semibold ${dark ? "text-white/70" : "text-white/90"}`}>
            {amount}
          </span>
        </div>
        {checked && (
          <label className="flex items-center gap-2">
            <span className={`text-[11px] ${dark ? "text-white/60" : "text-white/80"}`}>
              {mailboxesLabel}
            </span>
            <select
              value={mailboxes}
              onChange={(e) => onChange(Number(e.target.value))}
              className={`rounded-md px-2 py-1 text-xs font-semibold ${
                dark
                  ? "bg-white/10 text-white ring-1 ring-white/20"
                  : "bg-white/90 text-ink-900 ring-1 ring-white/40"
              }`}
            >
              {Array.from({ length: MAX_MAILBOXES }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
    </div>
  );
}

function ExtraPageRow({
  pages,
  onChange,
  label,
  hint,
  pagesLabel,
  amount,
  dark,
}: {
  pages: number;
  onChange: (v: number) => void;
  label: string;
  hint: string;
  pagesLabel: string;
  amount: string;
  dark: boolean;
}) {
  const checked = pages > 0;
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked ? 1 : 0)}
        className="mt-1 h-4 w-4 flex-none accent-accent-500"
        aria-label={label}
      />
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">{label}</span>
            <span className={`text-[11px] ${dark ? "text-white/50" : "text-white/70"}`}>{hint}</span>
          </div>
          <span className={`whitespace-nowrap text-xs font-semibold ${dark ? "text-white/70" : "text-white/90"}`}>
            {amount}
          </span>
        </div>
        {checked && (
          <label className="flex items-center gap-2">
            <span className={`text-[11px] ${dark ? "text-white/60" : "text-white/80"}`}>
              {pagesLabel}
            </span>
            <select
              value={pages}
              onChange={(e) => onChange(Number(e.target.value))}
              className={`rounded-md px-2 py-1 text-xs font-semibold ${
                dark
                  ? "bg-white/10 text-white ring-1 ring-white/20"
                  : "bg-white/90 text-ink-900 ring-1 ring-white/40"
              }`}
            >
              {Array.from({ length: MAX_EXTRA_PAGES }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
    </div>
  );
}
