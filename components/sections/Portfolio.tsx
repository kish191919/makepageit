import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { getPortfolios } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

export default function Portfolio({ lang, limit = 6 }: { lang: Lang; limit?: number }) {
  const dict = getDict(lang);
  const items = getPortfolios(lang).slice(0, limit);

  return (
    <section className="section bg-brand-50">
      <div className="container-custom">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={dict.portfolio.eyebrow}
            title={dict.portfolio.title}
            description={dict.portfolio.description}
          />
          <Link href={localePath(lang, "/portfolio")} className="btn-outline self-start lg:self-auto">
            {dict.portfolio.seeAll}
          </Link>
        </div>

        <div className="mt-14 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.id}
              href={localePath(lang, `/portfolio/${p.id}`)}
              className="group block w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl sm:w-auto"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                <Image
                  src={p.image}
                  alt={p.client}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 opacity-0 transition group-hover:bg-ink-900/40 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink-900 shadow-lg">
                    {dict.portfolio.viewTemplate}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {p.category}
                  </span>
                  <span className="text-xs text-ink-400">{p.year}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-900">{p.client}</h3>
                <p className="mt-1 text-sm text-ink-500">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-ink-200 px-2 py-0.5 text-[11px] text-ink-500"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
