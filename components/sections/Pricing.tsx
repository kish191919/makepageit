"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { getPlans } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

export default function Pricing({ lang, hideHeading = false }: { lang: Lang; hideHeading?: boolean }) {
  const dict = getDict(lang);
  const plans = getPlans(lang);
  const monthlyLabel = lang === "en" ? " / mo" : " / 월";
  const yearlyLabel = lang === "en" ? " / yr" : " / 년";

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section className="section relative overflow-hidden bg-ink-50">
      <div className="pointer-events-none absolute -right-32 top-24 hidden h-[400px] w-[400px] rounded-full bg-accent-400 opacity-20 blur-3xl md:block" />
      <div className="pointer-events-none absolute -left-32 bottom-16 hidden h-[420px] w-[420px] rounded-full bg-brand-200 opacity-30 blur-3xl md:block" />

      <div className="container-custom relative z-10">
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
          {plans.map((p) => (
            <article
              key={p.id}
              data-carousel-item
              className={`relative flex flex-col rounded-3xl border transition duration-300 snap-center shrink-0 basis-[88%] md:shrink md:basis-auto ${
                p.best
                  ? "border-ink-900 bg-ink-900 text-white shadow-2xl lg:scale-[1.03]"
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
                    {p.pricing.oneTime}
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
                  {p.pricing.yearTotal}
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
                  {p.pricing.yearlyAfter}
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
                i === activeIndex ? "w-6 bg-blue-600" : "w-2 bg-ink-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
