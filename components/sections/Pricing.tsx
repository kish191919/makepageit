"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { getPlans } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

function discountPercent(current: string, original: string) {
  const c = Number(current.replace(/[^0-9.]/g, ""));
  const o = Number(original.replace(/[^0-9.]/g, ""));
  if (!o) return 0;
  return Math.round((1 - c / o) * 100);
}

function savingsAmount(current: string, original: string) {
  const c = Number(current.replace(/[^0-9.]/g, ""));
  const o = Number(original.replace(/[^0-9.]/g, ""));
  if (!o) return "";
  return `$${Math.round(o - c)}`;
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M8.4 2H13a1 1 0 0 1 1 1v4.6a1 1 0 0 1-.3.7l-6 6a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 .7-.3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="10.5" cy="4.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M8.8 1.5 3 9.2h3.6L6.2 14.5 13 6.4H9.2L8.8 1.5Z" fill="currentColor" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 4.8V8l2.4 1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing({
  lang,
  hideHeading = false,
  eyebrowOnly = false,
}: {
  lang: Lang;
  hideHeading?: boolean;
  eyebrowOnly?: boolean;
}) {
  const dict = getDict(lang);
  const plans = getPlans(lang);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCanceled, setShowCanceled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("canceled") === "1") setShowCanceled(true);
  }, []);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-carousel-item]")
    );
    if (cards.length === 0) return;

    cards.forEach((el) => {
      el.style.minHeight = "";
    });

    let maxCard = 0;
    cards.forEach((el) => {
      if (el.offsetHeight > maxCard) maxCard = el.offsetHeight;
    });

    if (maxCard > 0) {
      cards.forEach((el) => {
        el.style.minHeight = `${maxCard}px`;
      });
    }
  }, [lang, plans.length]);

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
    <section className="section relative overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-grid opacity-40 [background-size:26px_26px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black,transparent)]" />
      </div>
      <div className="container-custom relative z-10">
        {showCanceled && (
          <div className="mb-8 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            {dict.pricing.canceledNotice}
          </div>
        )}
        {!hideHeading && !eyebrowOnly && (
          <SectionHeading
            align="center"
            theme="dark"
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
        {eyebrowOnly && (
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            {dict.pricing.eyebrow}
          </p>
        )}

        {plans.some((p) => p.pricing.originalOneTime) && (
          <div className="mx-auto mb-10 mt-6 max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-brand-400/30 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-6 py-8 text-center sm:px-10 sm:py-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-500/10 via-brand-500/10 to-transparent" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-accent-400 ring-1 ring-inset ring-accent-500/40 sm:text-sm">
                  <TagIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  {dict.pricing.promoBadge}
                </span>
                <p className="mt-4 break-keep text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {dict.pricing.promoHeadline.pre}
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>
                  <span className="text-accent-400">{dict.pricing.promoHeadline.highlight}</span>
                </p>
                <p className="mt-3 break-keep text-base text-white/70 sm:text-lg">
                  {dict.pricing.promoSub.pre}
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>
                  {dict.pricing.promoSub.post}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-inset ring-white/10 sm:text-sm">
                    <BoltIcon className="h-3.5 w-3.5 text-accent-400" />
                    {dict.pricing.promoAutoApply}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-inset ring-white/10 sm:text-sm">
                    <ClockIcon className="h-3.5 w-3.5 text-accent-400" />
                    {dict.pricing.promoDeadline}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          ref={scrollerRef}
          className={`mx-auto max-w-4xl ${
            hideHeading ? "" : eyebrowOnly ? "mt-6" : "mt-11"
          } -mx-4 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pb-2 pt-4 [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:grid-cols-2 md:gap-6 md:snap-none md:overflow-visible md:px-0 md:pb-0 md:pt-0`}
          style={{ scrollbarWidth: "none" }}
        >
          {plans.map((p) => (
            <article
              key={p.id}
              data-carousel-item
              className={`relative flex h-full flex-col rounded-3xl border transition duration-300 snap-center shrink-0 basis-[85%] md:shrink md:basis-auto ${
                p.best
                  ? "border-white/10 bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.6)]"
                  : "overflow-hidden border-brand-200 bg-white text-ink-900 shadow-[0_8px_24px_-14px_rgba(79,70,229,0.22)] hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_4px_8px_rgba(15,23,42,0.06),0_24px_48px_-16px_rgba(79,70,229,0.20)]"
              }`}
            >
              {p.best && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-1.5 text-sm font-bold uppercase tracking-[0.15em] text-brand-700 shadow-[0_4px_12px_rgba(0,0,0,0.18)] sm:text-base">
                  {p.badge ?? "BEST CHOICE"}
                </span>
              )}
              {p.pricing.originalOneTime && (
                <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_4px_12px_-2px_rgba(234,88,12,0.55)] ring-1 ring-inset ring-white/40 sm:text-sm">
                    <TagIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {discountPercent(p.pricing.oneTime, p.pricing.originalOneTime)}% OFF
                  </span>
                </div>
              )}
              <div className="relative z-10 flex flex-1 flex-col p-7 sm:p-9">
              <h3
                className={`pr-24 text-lg font-bold uppercase tracking-[0.2em] sm:pr-28 sm:text-xl ${
                  p.best ? "text-white" : "text-brand-700"
                }`}
              >
                {p.name}
              </h3>

              <p
                className={`text-base font-semibold ${
                  p.pricing.originalOneTime ? "mt-8 sm:mt-6" : "mt-2"
                } ${p.best ? "text-white" : "text-ink-900"}`}
              >
                {p.audience}
              </p>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1.5">
                {p.pricing.originalOneTime && (
                  <span
                    className={`text-xl font-semibold line-through decoration-2 sm:text-2xl ${
                      p.best ? "text-white/55 decoration-accent-300" : "text-ink-400 decoration-accent-500"
                    }`}
                  >
                    {p.pricing.originalOneTime}
                  </span>
                )}
                <span className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${p.best ? "text-white" : "text-ink-900"}`}>
                  {p.pricing.oneTime}
                </span>
                <span className={`text-sm ${p.best ? "text-ink-200" : "text-ink-400"}`}>
                  {p.pricing.oneTimeNote}
                </span>
                {p.pricing.originalOneTime && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-500 px-2.5 py-1 text-xs font-bold text-white shadow-[0_2px_8px_-1px_rgba(234,88,12,0.5)]">
                    {dict.pricing.saveLabel(savingsAmount(p.pricing.oneTime, p.pricing.originalOneTime))}
                  </span>
                )}
              </div>

              <div
                className={`mt-5 space-y-2.5 rounded-2xl border px-4 py-3.5 ${
                  p.best ? "border-white/15 bg-white/10" : "border-ink-100 bg-ink-50"
                }`}
              >
                <div>
                  <p className={`text-sm font-semibold ${p.best ? "text-white/90" : "text-brand-700"}`}>
                    {dict.pricing.monthlyFeeNote(p.pricing.monthly)}
                  </p>
                  <p className={`mt-0.5 text-xs ${p.best ? "text-white/60" : "text-ink-400"}`}>
                    {p.pricing.monthlyNote}
                  </p>
                </div>
                <div className={`h-px ${p.best ? "bg-white/15" : "bg-ink-200"}`} />
                <p className={`text-sm font-semibold ${p.best ? "text-white/90" : "text-brand-700"}`}>
                  {dict.pricing.annualFeeNote(p.pricing.annual)}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-4 text-sm">
                {p.features.map((f) => {
                  const isDetailed = typeof f !== "string";
                  const label = isDetailed ? f.text : f;
                  const sub = isDetailed ? f.sub : undefined;
                  return (
                    <li key={label} className={`flex items-start gap-2.5 leading-relaxed ${p.best ? "" : "text-ink-700"}`}>
                      <span
                        className={`mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full ${
                          p.best ? "bg-white text-brand-600" : "bg-brand-600 text-white"
                        }`}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>
                        <span className="block">{label}</span>
                        {sub && (
                          <span className={`mt-0.5 block text-xs font-normal ${p.best ? "text-white/60" : "text-ink-400"}`}>
                            {sub}
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Link
                href={localePath(lang, "/contact")}
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition sm:text-base ${
                  p.best
                    ? "bg-white text-brand-700 hover:bg-brand-50"
                    : "bg-brand-900 text-white hover:bg-brand-700"
                }`}
              >
                {dict.pricing.quoteCta}
              </Link>
              </div>
            </article>
          ))}
        </div>

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
                i === activeIndex ? "w-6 bg-brand-500" : "w-2 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
