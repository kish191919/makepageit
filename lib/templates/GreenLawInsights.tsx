import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { name: "GREENE LAW", tag: "ATTORNEYS AT LAW" },
    nav: { areas: "Practice Areas", lawyers: "Attorneys", cases: "Notable Cases", insights: "Insights", visit: "Contact" },
    bookCta: "Book a Consult",
    eyebrow: "INSIGHTS",
    title: "Notes from the firm",
    intro: "Plain-language explainers on the corporate, IP, and employment questions that land on our desk most often.",
    posts: [
      {
        date: "MAR 2025",
        title: "What a Term Sheet Actually Locks In (and What It Doesn't)",
        excerpt:
          "Founders often treat a signed term sheet as the deal. It isn't — most terms are non-binding, and knowing which few clauses do bind you changes how you negotiate.",
      },
      {
        date: "JAN 2025",
        title: "The Non-Compete Rules Are Changing State by State",
        excerpt:
          "Several states have narrowed or banned non-competes in the last two years. If your employment agreements haven't been reviewed since, they may already be unenforceable.",
      },
      {
        date: "NOV 2024",
        title: "Trademark First, Launch Second",
        excerpt:
          "We still see companies build a brand for a year before running a clearance search. Here's the two-week process that avoids a rename after launch.",
      },
    ],
    footer: "© 2025 Greene Law Group. Attorney advertising.",
  },
  ko: {
    brand: { name: "GREEN LAW", tag: "법률사무소" },
    nav: { areas: "업무 영역", lawyers: "구성원", cases: "주요 사례", insights: "인사이트", visit: "찾아오시는 길" },
    bookCta: "상담 예약",
    eyebrow: "INSIGHTS",
    title: "그린 법률사무소의 기록",
    intro: "기업, 지식재산권, 노동 분야에서 저희가 가장 자주 받는 질문들을 쉬운 언어로 정리했습니다.",
    posts: [
      {
        date: "2025.03",
        title: "텀시트에 서명하면 정말 그 조건대로 확정될까?",
        excerpt:
          "많은 창업자가 서명된 텀시트를 곧 계약으로 여깁니다. 하지만 대부분의 조항은 법적 구속력이 없으며, 어떤 몇몇 조항만 실제로 구속력을 갖는지 아는 것이 협상의 방향을 바꿉니다.",
      },
      {
        date: "2025.01",
        title: "지역별로 달라지는 경업금지 규정",
        excerpt:
          "최근 2년간 여러 지역에서 경업금지 조항의 효력이 좁아지거나 무효화됐습니다. 근로계약을 다시 검토하지 않았다면, 이미 실효성을 잃었을 수 있습니다.",
      },
      {
        date: "2024.11",
        title: "브랜드보다 상표 조사가 먼저입니다",
        excerpt:
          "1년간 브랜드를 만든 뒤에야 상표 조사를 하는 회사를 여전히 자주 봅니다. 출시 후 리네이밍을 피하는 2주짜리 사전 절차를 소개합니다.",
      },
    ],
    footer: "© 2025 그린 법률사무소. 변호사 광고 심의필.",
  },
} as const;

export default function GreenLawInsights({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/green-law");
  const insightsPath = localePath(lang, "/portfolio/green-law/insights");

  return (
    <div className="bg-white text-[#0b1a2a]">
      <header className="border-b border-[#0b1a2a]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0b1a2a] font-serif text-base text-white">
              G
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#0b1a2a]/60">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#0b1a2a]/80 md:flex">
            <Link href={`${home}#areas`}>{t.nav.areas}</Link>
            <Link href={`${home}#lawyers`}>{t.nav.lawyers}</Link>
            <Link href={`${home}#cases`}>{t.nav.cases}</Link>
            <Link href={insightsPath} className="text-[#0b1a2a]">
              {t.nav.insights}
            </Link>
            <Link href={`${home}#contact`}>{t.nav.visit}</Link>
          </nav>
          <Link
            href={`${home}#contact`}
            className="rounded-sm bg-[#0b1a2a] px-5 py-2.5 text-xs font-semibold tracking-widest text-white"
          >
            {t.bookCta}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-[#0b1a2a]/10 md:grid-cols-3">
          {t.posts.map((post) => (
            <article key={post.title} className="bg-white p-8">
              <p className="text-xs font-semibold tracking-widest text-[#0b1a2a]/50">{post.date}</p>
              <h2 className="mt-4 font-serif text-xl leading-snug break-keep text-balance">{post.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#0b1a2a]/10 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#0b1a2a]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#0b1a2a]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
