"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPortfolios, getReviews } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-hidden className="text-accent-500">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
}

const STACK_POSITION = [
  "z-30 scale-100 rotate-0 translate-x-0 translate-y-0 opacity-100",
  "z-20 scale-[0.93] rotate-3 translate-x-6 translate-y-7 opacity-90 sm:translate-x-10 sm:translate-y-9",
  "z-10 scale-[0.87] -rotate-3 -translate-x-5 translate-y-12 opacity-80 sm:-translate-x-8 sm:translate-y-16",
];

function WebsiteFrame({
  image,
  alt,
  offset,
}: {
  image: string;
  alt: string;
  offset: number;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-[0_20px_45px_-15px_rgba(15,15,35,0.35)] ring-1 ring-ink-900/5 transition-all duration-[1200ms] ease-in-out ${STACK_POSITION[offset]}`}
    >
      <div className="flex items-center gap-1.5 border-b border-ink-100 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="relative aspect-[4/3] bg-ink-100">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function Hero({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const portfolios = getPortfolios(lang);
  const review = getReviews(lang).find((r) => r.id === "r1") ?? getReviews(lang)[0];

  const sites = [
    { site: portfolios.find((p) => p.id === "sbm-nationwide") ?? portfolios[0], shot: "/images/hero/sbm-nationwide-site.png" },
    { site: portfolios.find((p) => p.id === "daniel-math"), shot: "/images/hero/daniel-math-site.png" },
    { site: portfolios.find((p) => p.id === "cloudmaster-it"), shot: "/images/hero/cloudmaster-site.png" },
  ].filter((entry): entry is { site: NonNullable<(typeof entry)["site"]>; shot: string } => Boolean(entry.site));

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (sites.length < 2) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % sites.length);
    }, 3200);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sites.length]);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-100 via-brand-50/60 to-white" />
        <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-300/50 blur-3xl sm:-top-32 sm:left-[38%]" />
        <div className="absolute -right-16 top-16 h-80 w-80 rounded-full bg-accent-400/30 blur-3xl" />
        <div className="absolute inset-0 bg-hero-grid [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      </div>
      <div className="relative z-10 container-custom pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-20 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="h-display text-3xl sm:text-5xl lg:text-6xl">
              {lang === "en" ? (
                <>
                  {dict.hero.titleA}
                  <br />
                  <span className="text-brand-600">{dict.hero.titleHighlight}</span>{" "}
                  {dict.hero.titleB}{" "}
                  <span className="underline decoration-accent-500 decoration-[6px] underline-offset-4">
                    {dict.hero.titleBrandWord}
                  </span>
                </>
              ) : (
                <>
                  {dict.hero.titleA}
                  <span className="text-brand-600">{dict.hero.titleHighlight}</span>
                  {dict.hero.titleB.split("\n").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                  <span className="underline decoration-accent-500 decoration-[6px] underline-offset-4">
                    {dict.hero.titleBrandWord}
                  </span>
                  {dict.hero.titleC}
                </>
              )}
            </h1>

            <p className="mt-7 whitespace-pre-line text-base leading-relaxed text-ink-500 sm:text-lg">
              {dict.hero.body}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href={localePath(lang, "/contact")} className="btn-primary">
                {dict.cta.quote}
              </Link>
              <Link href={localePath(lang, "/portfolio")} className="btn-outline">
                {dict.cta.viewPortfolio}
              </Link>
            </div>

          </div>

          <div className="relative mx-auto w-full max-w-xl pt-8 pb-6 sm:pt-10 lg:max-w-none lg:pt-4">
            <div
              aria-hidden="true"
              className="absolute inset-x-16 bottom-2 z-0 h-10 rounded-full bg-ink-900/25 blur-xl sm:inset-x-24"
            />
            <div className="relative z-10 aspect-[4/3] motion-safe:animate-float-soft">
              {sites.map(({ site, shot }, i) => {
                const offset = (i - active + sites.length) % sites.length;
                return <WebsiteFrame key={site.id} image={shot} alt={site.client} offset={offset} />;
              })}
            </div>
            {sites.length > 1 && (
              <div className="relative z-40 mt-4 flex items-center justify-center gap-2 lg:justify-start">
                {sites.map(({ site }, i) => (
                  <button
                    key={site.id}
                    type="button"
                    aria-label={site.client}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-brand-600" : "w-1.5 bg-ink-200 hover:bg-ink-300"
                    }`}
                  />
                ))}
              </div>
            )}
            {review && (
              <div className="absolute -bottom-4 right-2 z-40 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 shadow-lg ring-1 ring-ink-900/5 backdrop-blur sm:right-6">
                <Stars rating={review.rating} />
                <span className="text-xs font-semibold text-ink-900">{review.client}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
