import Image from "next/image";
import Link from "next/link";
import { getDict, localePath, type Lang } from "@/lib/i18n";

export default function Hero({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
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

      <div className="relative z-10 container-custom pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="h-display">
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

          <p className="mt-7 text-base leading-relaxed text-ink-500 sm:text-lg">
            {dict.hero.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href={localePath(lang, "/contact")} className="btn-primary">
              {dict.cta.quote} →
            </Link>
            <Link href={localePath(lang, "/portfolio")} className="btn-outline">
              {dict.cta.viewPortfolio}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
