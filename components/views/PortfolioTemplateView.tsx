import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import { getPortfolios } from "@/lib/data";
import { templates } from "@/lib/templates";
import { localePath, type Lang } from "@/lib/i18n";
import {
  breadcrumbSchema,
  jsonLdScriptProps,
  portfolioCaseSchema,
} from "@/lib/jsonld";

const copy = {
  en: {
    caseStudy: "Case study",
    overviewHeading: "Project overview",
    industryLabel: "Industry",
    categoryLabel: "Project type",
    yearLabel: "Year",
    tagsLabel: "Highlights",
    livePreviewLabel: "Live design preview below",
    scrollHint: "Scroll to view the template",
    aboutHeading: (client: string) => `About the ${client} project`,
    relatedHeading: "More work like this",
    viewMore: "View case",
    summary: (client: string, category: string, description: string) =>
      `${client} partnered with MAKEPAGE to ship a ${category.toLowerCase()} that turned digital traffic into real customers. ${description} The build covered visual identity, mobile-responsive layout, on-page SEO, and analytics so the team could measure what's working from day one.`,
    bullets: (tags: string[]) => [
      `Designed around ${tags[0] ?? "the brand"} so the look and feel matches the business in the real world.`,
      `Mobile-first layout that loads fast on phones — where most small-business traffic actually lands.`,
      `On-page SEO baked in: clean URLs, structured data, image alt text, and a ready-to-submit sitemap.`,
      `Owner-friendly admin: edit copy, swap photos, and publish updates without calling an agency.`,
    ],
  },
  ko: {
    caseStudy: "제작 사례",
    overviewHeading: "프로젝트 개요",
    industryLabel: "업종",
    categoryLabel: "프로젝트 유형",
    yearLabel: "오픈 연도",
    tagsLabel: "주요 키워드",
    livePreviewLabel: "실제 디자인 미리보기는 아래에서 확인하세요",
    scrollHint: "아래로 스크롤하면 템플릿이 보입니다",
    aboutHeading: (client: string) => `${client} 홈페이지 제작 이야기`,
    relatedHeading: "비슷한 사례 더 보기",
    viewMore: "사례 보기",
    summary: (client: string, category: string, description: string) =>
      `${client}는 메이크페이지와 함께 ${category} 홈페이지를 새롭게 오픈했습니다. ${description} 디자인뿐만 아니라 모바일 최적화, 검색엔진 노출, 운영 도구까지 한 번에 마련해 사장님이 본업에 집중할 수 있게 만들었습니다.`,
    bullets: (tags: string[]) => [
      `${tags[0] ?? "브랜드"} 컨셉을 그대로 살린 디자인으로, 매장과 온라인의 인상이 일치합니다.`,
      `스마트폰에서 빠르게 열리는 모바일 우선 구조 — 소상공인 트래픽의 80% 이상이 모바일에서 발생합니다.`,
      `구글·네이버 검색 노출을 위한 SEO 기본기 (URL 구조, 구조화 데이터, alt 텍스트, sitemap 제출)를 처음부터 적용했습니다.`,
      `사장님이 직접 글과 사진을 수정할 수 있는 관리자 페이지 제공 — 매번 외주 비용을 들일 필요가 없습니다.`,
    ],
  },
} as const;

export default function PortfolioTemplateView({ lang, id }: { lang: Lang; id: string }) {
  const items = getPortfolios(lang);
  const item = items.find((p) => p.id === id);
  const Template = templates[id];
  if (!item || !Template) notFound();

  const t = copy[lang];
  const related = items
    .filter((p) => p.id !== id && p.category === item.category)
    .slice(0, 3);
  const fillers = items.filter((p) => p.id !== id && !related.includes(p));
  while (related.length < 3 && fillers.length) related.push(fillers.shift()!);

  const summary = t.summary(item.client, item.category, item.description);
  const bullets = t.bullets(item.tags);

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

      <article className="bg-white">
        <header className="border-b border-ink-200 bg-ink-50 pt-24 pb-14 sm:pt-28 sm:pb-16">
          <div className="container-custom max-w-4xl">
            <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {t.caseStudy}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-ink-900 sm:text-5xl">
              {item.client} — {item.category}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
              {summary}
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-400">{t.categoryLabel}</dt>
                <dd className="mt-1 font-semibold text-ink-900">{item.category}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-400">{t.yearLabel}</dt>
                <dd className="mt-1 font-semibold text-ink-900">{item.year}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-400">{t.tagsLabel}</dt>
                <dd className="mt-1 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink-200 bg-white px-2.5 py-0.5 text-xs font-medium text-ink-700"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="container-custom max-w-4xl py-14 sm:py-16">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
            {t.aboutHeading(item.client)}
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-ink-700 sm:text-lg">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-400">{t.scrollHint} ↓</p>
        </section>
      </article>

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
