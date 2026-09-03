import Image from "next/image";
import Link from "next/link";
import { getPortfolios, getStats } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

function BrowserFrame({
  image,
  alt,
  className,
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-white ring-1 ring-ink-900/5 ${className ?? ""}`}>
      <div className="flex items-center gap-1.5 border-b border-ink-100 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="relative aspect-[4/3] bg-ink-100">
        <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
      </div>
    </div>
  );
}

export default function Hero({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const portfolios = getPortfolios(lang);
  const front = portfolios.find((p) => p.id === "lumiere-clinic") ?? portfolios[0];
  const back = portfolios.find((p) => p.id === "noble-coffee") ?? portfolios[1];
  const stats = getStats(lang).slice(0, 3);

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-white" />
      <div
        aria-hidden
        className="absolute inset-0 bg-hero-grid [background-size:24px_24px] opacity-60"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full bg-brand-200 opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full bg-accent-400/30 blur-3xl"
      />

      <div className="relative z-10 container-custom pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-24 lg:pb-32">
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

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-baseline gap-1.5 ${i > 0 ? "border-l border-ink-200 pl-6" : ""}`}
                >
                  <span className="text-lg font-bold text-ink-900">{s.value}</span>
                  <span className="text-sm text-ink-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md pt-6 lg:max-w-none lg:pt-0">
            {back && (
              <BrowserFrame
                image={back.image}
                alt={back.client}
                className="absolute -right-4 -top-6 hidden w-3/4 rotate-6 shadow-xl animate-float sm:block"
              />
            )}
            {front && <BrowserFrame image={front.image} alt={front.client} className="relative shadow-2xl" />}
          </div>
        </div>
      </div>
    </section>
  );
}
