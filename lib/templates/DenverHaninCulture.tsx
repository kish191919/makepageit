"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "DENVER HANIN WEEKLY",
    nav: { news: "News", directory: "Directory", culture: "Culture", columns: "Columns", advertise: "Advertise" },
    advertiseCta: "Advertise With Us",
    label: "CULTURE & LIFESTYLE",
    title: "Beyond the headlines",
    intro: "Events, food, entertainment, and the people shaping Korean-American life in Denver.",
    articles: [
      {
        tag: "Food & Events",
        title: "Weekend Guide: Fall Food Truck Rally Hits Stapleton",
        excerpt: "Fourteen vendors, live music, and a kids' zone — here's what to expect this Saturday.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Entertainment",
        title: "Streaming Now: Five Korean Dramas Trending in the US This Month",
        excerpt: "From workplace comedies to slow-burn mysteries — our picks for your next binge.",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "People",
        title: "Profile: The Aurora Chef Reinventing Hanok-Style Comfort Food",
        excerpt: "How one home cook turned a weekend pop-up into one of Aurora's most-booked tasting menus.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Music",
        title: "Local Choir Prepares Bilingual Program for Fall Concert Series",
        excerpt: "The 40-voice ensemble will perform in both English and Korean at three venues this November.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Sports",
        title: "Youth Taekwondo Club Sends Six Athletes to Regional Championship",
        excerpt: "The Aurora-based club has grown from 15 to 90 members in just two years.",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Travel",
        title: "Day Trip Guide: Where Denver Locals Go for a Taste of Home",
        excerpt: "From H-Mart runs to mountain picnics, five ways to spend a Saturday outside the city.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80&auto=format&fit=crop",
      },
    ],
    footer: {
      address: "Denver Hanin Weekly · Aurora, CO",
      legal: "© 2026 Denver Hanin Weekly. A portfolio template by MAKEPAGE — fictional publication, not a real news outlet.",
    },
  },
  ko: {
    brand: "덴버 한인 위클리",
    nav: { news: "뉴스", directory: "업소록", culture: "문화", columns: "칼럼", advertise: "광고문의" },
    advertiseCta: "광고 문의하기",
    label: "문화 & 라이프스타일",
    title: "헤드라인 너머의 이야기",
    intro: "덴버 한인 커뮤니티의 이벤트, 음식, 엔터테인먼트, 그리고 사람들의 이야기를 전합니다.",
    articles: [
      {
        tag: "푸드&이벤트",
        title: "주말 가이드: 스테이플턴 가을 푸드트럭 랠리",
        excerpt: "14개 부스와 라이브 음악, 키즈존까지 — 이번 주 토요일 놓치지 마세요.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "엔터테인먼트",
        title: "지금 스트리밍: 이번 달 미국에서 인기 있는 한국 드라마 5",
        excerpt: "오피스 코미디부터 잔잔한 미스터리까지 — 에디터가 고른 추천작.",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "피플",
        title: "인물: 한옥 감성의 컴포트푸드를 재해석하는 오로라 셰프",
        excerpt: "주말 팝업으로 시작해 오로라에서 가장 예약이 어려운 테이스팅 메뉴가 되기까지.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "음악",
        title: "지역 합창단, 가을 콘서트 시리즈 위한 이중언어 프로그램 준비",
        excerpt: "40명 규모의 합창단이 오는 11월 세 곳에서 영어와 한국어로 무대에 오릅니다.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "스포츠",
        title: "청소년 태권도 클럽, 지역 챔피언십에 선수 6명 출전",
        excerpt: "오로라 소재 클럽은 단 2년 만에 회원 15명에서 90명으로 성장했습니다.",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "여행",
        title: "당일치기 가이드: 덴버 한인들이 찾는 고향의 맛",
        excerpt: "H마트 장보기부터 산속 피크닉까지, 도심 밖에서 즐기는 토요일 다섯 가지 방법.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80&auto=format&fit=crop",
      },
    ],
    footer: {
      address: "Denver Hanin Weekly · 콜로라도 오로라",
      legal: "© 2026 Denver Hanin Weekly. MAKEPAGE 포트폴리오 템플릿 — 실제 언론사가 아닌 가상의 매체입니다.",
    },
  },
} as const;

export default function DenverHaninCulture({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/denver-hanin");
  const navPaths = {
    news: localePath(lang, "/portfolio/denver-hanin/news"),
    directory: localePath(lang, "/portfolio/denver-hanin/directory"),
    culture: localePath(lang, "/portfolio/denver-hanin/culture"),
    columns: localePath(lang, "/portfolio/denver-hanin/columns"),
    advertise: localePath(lang, "/portfolio/denver-hanin/advertise"),
  } as const;

  return (
    <div className="bg-[#faf8f5] text-slate-900">
      <header ref={ref} className="sticky top-0 z-30 border-b border-slate-200 bg-[#faf8f5]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16233f] text-xs font-bold text-white">D</span>
            <span className="text-sm font-bold tracking-wide">{t.brand}</span>
          </Link>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <Link href={navPaths.news} className="transition hover:text-[#16233f]">{t.nav.news}</Link>
            <Link href={navPaths.directory} className="transition hover:text-[#16233f]">{t.nav.directory}</Link>
            <Link href={navPaths.culture} className="font-semibold text-[#16233f]">{t.nav.culture}</Link>
            <Link href={navPaths.columns} className="transition hover:text-[#16233f]">{t.nav.columns}</Link>
            <Link href={navPaths.advertise} className="transition hover:text-[#16233f]">{t.nav.advertise}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={navPaths.advertise} className="hidden rounded-full bg-[#d98e3f] px-5 py-2 text-xs font-semibold text-white sm:inline-block">
              {t.advertiseCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-200 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm text-slate-600">
              <Link href={navPaths.news} onClick={() => setOpen(false)} className="py-2">{t.nav.news}</Link>
              <Link href={navPaths.directory} onClick={() => setOpen(false)} className="py-2">{t.nav.directory}</Link>
              <Link href={navPaths.culture} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#16233f]">{t.nav.culture}</Link>
              <Link href={navPaths.columns} onClick={() => setOpen(false)} className="py-2">{t.nav.columns}</Link>
              <Link href={navPaths.advertise} onClick={() => setOpen(false)} className="py-2">{t.nav.advertise}</Link>
            </nav>
            <Link
              href={navPaths.advertise}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#d98e3f] px-5 py-2 text-xs font-semibold text-white"
            >
              {t.advertiseCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#d98e3f]">{t.label}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl break-keep text-balance">{t.title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 break-keep text-pretty">{t.intro}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.articles.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={a.image} alt={a.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-[#d98e3f]">{a.tag}</p>
                <h2 className="mt-2 text-sm font-bold leading-snug break-keep text-balance">{a.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 break-keep text-pretty">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10 text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-slate-900">{t.brand}</div>
            <p className="mt-1 text-xs break-keep text-pretty">{t.footer.address}</p>
          </div>
          <p className="text-xs break-keep text-pretty">{t.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
