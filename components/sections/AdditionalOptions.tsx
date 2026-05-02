"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { getDict, type Lang } from "@/lib/i18n";

export default function AdditionalOptions({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const options = dict.additionalOptions.options;
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
  }, [options.length]);

  function scrollToIndex(i: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelectorAll<HTMLElement>("[data-carousel-item]")[i];
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-3xl shadow-xl lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                alt={dict.additionalOptions.badge}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-600 shadow-lg backdrop-blur">
              {dict.additionalOptions.badge}
            </span>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow={dict.additionalOptions.eyebrow}
              title={dict.additionalOptions.title}
              description={dict.additionalOptions.description}
            />

            <div
              ref={scrollerRef}
              className="mt-8 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0"
              style={{ scrollbarWidth: "none" }}
            >
              {options.map((o) => (
                <div
                  key={o.title}
                  data-carousel-item
                  className="snap-center shrink-0 basis-[82%] rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-600 hover:shadow-lg sm:shrink sm:basis-auto"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-xl">
                    {o.icon}
                  </div>
                  <p className="mt-4 text-sm font-semibold text-ink-900">{o.title}</p>
                  <p className="mt-1 text-2xl font-extrabold text-brand-600">
                    {o.price}
                    <span className="ml-1 text-sm font-medium text-ink-500">{o.unit}</span>
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-500">{o.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2 sm:hidden" role="tablist">
              {options.map((o, i) => (
                <button
                  key={o.title}
                  type="button"
                  role="tab"
                  aria-label={o.title}
                  aria-selected={i === activeIndex}
                  onClick={() => scrollToIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex ? "w-6 bg-brand-600" : "w-2 bg-ink-300"
                  }`}
                />
              ))}
            </div>

            <p className="mt-6 text-sm text-ink-500">{dict.additionalOptions.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
