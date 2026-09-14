"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { getPlans } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

export default function Pricing({ lang, hideHeading = false }: { lang: Lang; hideHeading?: boolean }) {
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
        {!hideHeading && (
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

        <div
          ref={scrollerRef}
          className={`mx-auto max-w-4xl ${hideHeading ? "" : "mt-11"} -mx-4 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pb-2 pt-4 [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:grid-cols-2 md:gap-6 md:snap-none md:overflow-visible md:px-0 md:pb-0 md:pt-0`}
          style={{ scrollbarWidth: "none" }}
        >
          {plans.map((p) => (
            <article
              key={p.id}
              data-carousel-item
              className={`relative flex h-full flex-col rounded-3xl border transition duration-300 snap-center shrink-0 basis-[85%] md:shrink md:basis-auto ${
                p.best
                  ? "border-white/10 bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.6)]"
                  : "overflow-hidden border-ink-200 bg-white text-ink-900 shadow-[0_2px_4px_rgba(15,23,42,0.04),0_14px_32px_-12px_rgba(15,23,42,0.10)] hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_4px_8px_rgba(15,23,42,0.06),0_24px_48px_-16px_rgba(79,70,229,0.20)]"
              }`}
            >
              {p.best && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-700 shadow-[0_4px_12px_rgba(0,0,0,0.18)]">
                  {p.badge ?? "BEST CHOICE"}
                </span>
              )}
              <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-8">
              <h3
                className={`text-sm font-bold uppercase tracking-[0.25em] ${
                  p.best ? "text-white" : "text-brand-700"
                }`}
              >
                {p.name}
              </h3>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className={`text-4xl font-extrabold sm:text-5xl ${p.best ? "text-white" : "text-ink-900"}`}>
                  {p.pricing.oneTime}
                </span>
                <span className={`text-sm ${p.best ? "text-ink-200" : "text-ink-400"}`}>
                  {p.pricing.oneTimeNote}
                </span>
              </div>
              <p className={`mt-1.5 text-sm font-semibold ${p.best ? "text-white/90" : "text-brand-700"}`}>
                {dict.pricing.monthlyFeeNote(p.pricing.monthly)}
              </p>
              <p className={`mt-1.5 text-sm font-semibold ${p.best ? "text-white/90" : "text-brand-700"}`}>
                {dict.pricing.annualFeeNote(p.pricing.annual)}
              </p>

              <p className={`mt-3 text-base font-semibold ${p.best ? "text-white" : "text-ink-900"}`}>
                {p.audience}
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 ${p.best ? "" : "text-ink-700"}`}>
                    <span
                      className={`mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full ${
                        p.best ? "bg-white text-brand-600" : "bg-brand-600 text-white"
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
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700 sm:text-base"
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
