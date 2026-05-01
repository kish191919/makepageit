import Link from "next/link";
import { site } from "@/lib/site";
import { getDict, localePath, type Lang } from "@/lib/i18n";

export default function CTA({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[32px] bg-ink-900 px-8 py-16 text-center sm:px-16 sm:py-24">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-600 opacity-30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500 opacity-30 blur-3xl"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-400">
            {dict.cta_section.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            {dict.cta_section.title.line1}
            <br />
            {dict.cta_section.title.line2}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-ink-200 sm:text-lg">
            {dict.cta_section.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={localePath(lang, "/contact")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:bg-accent-500 hover:text-white sm:text-base"
            >
              {dict.cta.quote}
            </Link>
            <a
              href={`tel:${site.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              {dict.cta.callPhone(site.phone)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
