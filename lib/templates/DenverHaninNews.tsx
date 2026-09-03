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
    label: "NEWS",
    title: "Latest headlines from Denver's Korean-American community",
    intro: "Local business, policy, education, and community stories from across the Denver metro — updated every week.",
    filters: ["All", "Local Business", "Travel", "Policy", "Education", "Community"],
    articles: [
      {
        tag: "Local Business",
        title: "Colorado Korean Chamber Breaks Ground on New Aurora Business Center",
        excerpt: "A $4.2M development backed by 30 local business owners aims to give Korean-run shops a permanent home along Peoria Street.",
        date: "Aug 28, 2026",
        image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Travel",
        title: "Denver International Adds Direct Seoul Route Starting Spring 2027",
        excerpt: "The new nonstop cuts a full layover off the trip between Denver and Incheon.",
        date: "Aug 24, 2026",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Policy",
        title: "Colorado Legislature Passes Bilingual Ballot Expansion Bill",
        excerpt: "The bill adds Korean-language ballots in three more metro-area counties starting next election cycle.",
        date: "Aug 19, 2026",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Education",
        title: "Centennial Korean School Marks 30 Years of Saturday Classes",
        excerpt: "What started with 12 students in a church basement now serves over 400 kids across three campuses.",
        date: "Aug 12, 2026",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Community",
        title: "Aurora Night Market Draws Record 8,000 Visitors This Summer",
        excerpt: "Vendors are already asking organizers to add a second night for next season.",
        date: "Aug 5, 2026",
        image: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Community",
        title: "New Senior Center Opens Doors to Korean Elders in Federal Heights",
        excerpt: "The center offers meal service, health screenings, and Korean-language programming five days a week.",
        date: "Jul 29, 2026",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Local Business",
        title: "Colorado Korean-American Bar Association Launches Free Legal Clinic",
        excerpt: "Volunteer attorneys will offer walk-in consultations on housing, small business, and immigration questions.",
        date: "Jul 22, 2026",
        image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Community",
        title: "Rocky Mountain Kimchi Fest Returns to City Park in October",
        excerpt: "Last year's inaugural event sold out in four days — organizers have doubled vendor capacity for 2026.",
        date: "Jul 15, 2026",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80&auto=format&fit=crop",
      },
    ],
    footer: {
      sectionsLabel: "Sections",
      companyLabel: "Company",
      address: "Denver Hanin Weekly · Aurora, CO",
      legal: "© 2026 Denver Hanin Weekly. A portfolio template by MAKEPAGE — fictional publication, not a real news outlet.",
    },
  },
  ko: {
    brand: "덴버 한인 위클리",
    nav: { news: "뉴스", directory: "업소록", culture: "문화", columns: "칼럼", advertise: "광고문의" },
    advertiseCta: "광고 문의하기",
    label: "뉴스",
    title: "덴버 한인 커뮤니티의 최신 헤드라인",
    intro: "덴버 메트로 전역의 지역경제, 정책, 교육, 커뮤니티 소식을 매주 업데이트합니다.",
    filters: ["전체", "지역경제", "여행", "정책", "교육", "커뮤니티"],
    articles: [
      {
        tag: "지역경제",
        title: "콜로라도 한인상공회의소, 오로라 신규 비즈니스 센터 착공",
        excerpt: "지역 업주 30명이 함께 조성한 420만 달러 규모의 개발 사업으로, 피오리아 스트리트에 한인 업체들의 상설 공간이 마련됩니다.",
        date: "2026.08.28",
        image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "여행",
        title: "덴버국제공항, 2027년 봄부터 서울 직항 노선 신설",
        excerpt: "새 직항편으로 덴버-인천 구간 경유 시간이 크게 단축됩니다.",
        date: "2026.08.24",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "정책",
        title: "콜로라도 주의회, 이중언어 투표용지 확대 법안 통과",
        excerpt: "다음 선거부터 메트로 지역 3개 카운티가 한국어 투표용지를 추가 도입합니다.",
        date: "2026.08.19",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "교육",
        title: "센테니얼 한글학교, 토요 수업 30주년 맞아",
        excerpt: "교회 지하실 학생 12명으로 시작해 이제 3개 캠퍼스에서 400명 넘는 학생을 가르치고 있습니다.",
        date: "2026.08.12",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "커뮤니티",
        title: "오로라 나이트마켓, 올여름 방문객 8천 명 돌파",
        excerpt: "참가 업체들은 벌써 다음 시즌에 하루를 더 늘려달라고 요청하고 있습니다.",
        date: "2026.08.05",
        image: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "커뮤니티",
        title: "페더럴하이츠에 한인 어르신 위한 신규 시니어센터 개관",
        excerpt: "주 5일 식사 제공, 건강 검진, 한국어 프로그램을 운영합니다.",
        date: "2026.07.29",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "지역경제",
        title: "콜로라도 한인변호사협회, 무료 법률 상담 클리닉 시작",
        excerpt: "자원봉사 변호사들이 주거, 소상공인, 이민 관련 상담을 워크인으로 제공합니다.",
        date: "2026.07.22",
        image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "커뮤니티",
        title: "로키마운틴 김치 축제, 10월 시티파크에서 개최",
        excerpt: "지난해 첫 행사가 나흘 만에 매진되어, 올해는 참가 부스를 두 배로 늘렸습니다.",
        date: "2026.07.15",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80&auto=format&fit=crop",
      },
    ],
    footer: {
      sectionsLabel: "섹션",
      companyLabel: "회사 정보",
      address: "Denver Hanin Weekly · 콜로라도 오로라",
      legal: "© 2026 Denver Hanin Weekly. MAKEPAGE 포트폴리오 템플릿 — 실제 언론사가 아닌 가상의 매체입니다.",
    },
  },
} as const;

export default function DenverHaninNews({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.news} className="font-semibold text-[#16233f]">{t.nav.news}</Link>
            <Link href={navPaths.directory} className="transition hover:text-[#16233f]">{t.nav.directory}</Link>
            <Link href={navPaths.culture} className="transition hover:text-[#16233f]">{t.nav.culture}</Link>
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
              <Link href={navPaths.news} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#16233f]">{t.nav.news}</Link>
              <Link href={navPaths.directory} onClick={() => setOpen(false)} className="py-2">{t.nav.directory}</Link>
              <Link href={navPaths.culture} onClick={() => setOpen(false)} className="py-2">{t.nav.culture}</Link>
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

        <div className="mt-8 flex flex-wrap gap-2">
          {t.filters.map((f, i) => (
            <span
              key={f}
              className={
                i === 0
                  ? "rounded-full bg-[#16233f] px-4 py-1.5 text-xs font-semibold text-white"
                  : "rounded-full border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-600"
              }
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.articles.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={a.image} alt={a.title} fill className="object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#16233f]">
                  {a.tag}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-sm font-bold leading-snug break-keep text-balance">{a.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 break-keep text-pretty">{a.excerpt}</p>
                <p className="mt-4 text-[11px] text-slate-400">{a.date}</p>
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
