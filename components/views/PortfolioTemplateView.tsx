import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import { getPortfolios } from "@/lib/data";
import { templates } from "@/lib/templates";
import { getDict, localePath, type Lang } from "@/lib/i18n";
import {
  breadcrumbSchema,
  jsonLdScriptProps,
  portfolioCaseSchema,
} from "@/lib/jsonld";

const copy = {
  en: {
    relatedHeading: "More homepages like this",
    viewMore: "View homepage",
  },
  ko: {
    relatedHeading: "다른 홈페이지 더 보기",
    viewMore: "홈페이지 보기",
  },
} as const;

export default function PortfolioTemplateView({ lang, id }: { lang: Lang; id: string }) {
  const items = getPortfolios(lang);
  const item = items.find((p) => p.id === id);
  const Template = templates[id];
  if (!item || !Template) notFound();

  const t = copy[lang];
  const dict = getDict(lang);
  const related = items
    .filter((p) => p.id !== id && p.category === item.category)
    .slice(0, 3);
  const fillers = items.filter((p) => p.id !== id && !related.includes(p));
  while (related.length < 3 && fillers.length) related.push(fillers.shift()!);

  const portfolioRoot = lang === "ko" ? "/ko/portfolio" : "/portfolio";
  const homeRoot = lang === "ko" ? "/ko" : "/";
  const ldData = [
    portfolioCaseSchema(item, lang),
    breadcrumbSchema([
      { name: lang === "ko" ? "홈" : "Home", path: homeRoot },
      { name: lang === "ko" ? "포트폴리오" : "Work", path: portfolioRoot },
      { name: item.client, path: `${portfolioRoot}/${item.id}` },
    ]),
  ];

  return (
    <>
      <script {...jsonLdScriptProps(ldData)} />
      <BackToPortfolio />

      <Template lang={lang} />

      {related.length > 0 && (
        <section className="border-t border-ink-200 bg-ink-50 py-16 sm:py-20">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">{t.relatedHeading}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={localePath(lang, `/portfolio/${p.id}`)}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                    <Image
                      src={p.image}
                      alt={`${p.client} — ${p.category}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm ${
                        p.url
                          ? "bg-brand-600 text-white"
                          : "bg-white/90 text-ink-600 ring-1 ring-inset ring-ink-200"
                      }`}
                    >
                      {p.url ? dict.portfolio.liveClientBadge : dict.portfolio.templateBadge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {p.category}
                    </span>
                    <h3 className="mt-4 text-lg font-bold leading-snug text-ink-900">
                      {p.client}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-ink-500">{p.description}</p>
                    <span className="mt-4 text-sm font-semibold text-brand-600">{t.viewMore} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
