import Link from "next/link";
import { getDict, localePath, type Lang } from "@/lib/i18n";

export default function CheckoutSuccessView({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  return (
    <section className="section">
      <div className="container-custom flex flex-col items-center justify-center py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="mt-8 text-3xl font-extrabold text-ink-900 sm:text-4xl">
          {dict.pricing.successTitle}
        </h1>
        <p className="mt-4 max-w-xl text-base text-ink-600">{dict.pricing.successBody}</p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href={localePath(lang, "/")}
            className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {dict.pricing.successHomeCta}
          </Link>
          <Link
            href={localePath(lang, "/manage")}
            className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition hover:border-ink-300 hover:bg-ink-50"
          >
            {dict.manage.nav}
          </Link>
        </div>
      </div>
    </section>
  );
}
