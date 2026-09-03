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
    hero: {
      tag: "Denver & Colorado · Korean-American Community",
      badge: "Local Business",
      title: "Colorado Korean Chamber Breaks Ground on New Aurora Business Center",
      body: "A $4.2M development backed by 30 local business owners aims to give Korean-run shops a permanent home along Peoria Street.",
      byline: "DHW News Desk · Aug 28, 2026",
      readMore: "Read the story",
      spotlightLabel: "THIS WEEK",
      spotlightTitle: "Colorado's First Korean-Language Immersion Program Opens in Aurora Schools",
      spotlightByline: "Aug 24, 2026",
    },
    pressLabel: "AS FEATURED IN",
    press: ["Front Range Weekly", "5280 Voice", "Peak Community News", "Mountain Times"],
    headlinesSection: { eyebrow: "TODAY'S HEADLINES", title: "What's happening around Denver", viewAll: "View all news" },
    headlines: [
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
    ],
    cultureSection: { eyebrow: "CULTURE & LIFESTYLE", title: "Beyond the headlines", viewAll: "View culture & lifestyle" },
    culture: [
      {
        tag: "Food & Events",
        title: "Weekend Guide: Fall Food Truck Rally Hits Stapleton",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "Entertainment",
        title: "Streaming Now: Five Korean Dramas Trending in the US This Month",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "People",
        title: "Profile: The Aurora Chef Reinventing Hanok-Style Comfort Food",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
      },
    ],
    columnsSection: { eyebrow: "COLUMNS", title: "Voices from the community", viewAll: "Read all columns" },
    columns: [
      {
        author: "Grace Min",
        role: "Small Business Columnist",
        title: "Why Bilingual Signage Still Matters for Small Storefronts",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "David Yoon",
        role: "Real Estate Columnist",
        title: "Ask a Realtor: What Rising Rates Mean for First-Time Buyers",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "Sarah Han",
        role: "Family & Culture",
        title: "Raising Bilingual Kids in the Suburbs: One Parent's Notes",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop",
      },
    ],
    directorySection: {
      eyebrow: "BUSINESS DIRECTORY",
      title: "Find a trusted local business",
      body: "Browse listings by category, or search for a business by name.",
      viewAll: "Browse the full directory",
      getListed: "Own a business? Get listed →",
    },
    directoryCategories: [
      { name: "Legal & Immigration", count: "18 listings" },
      { name: "Health & Wellness", count: "24 listings" },
      { name: "Real Estate", count: "15 listings" },
      { name: "Restaurants & Cafés", count: "31 listings" },
      { name: "Home Services", count: "20 listings" },
      { name: "Professional Services", count: "22 listings" },
    ],
    footer: {
      sectionsLabel: "Sections",
      companyLabel: "Company",
      backLabel: "Back to portfolio",
      address: "Denver Hanin Weekly · Aurora, CO",
      legal: "© 2026 Denver Hanin Weekly. A portfolio template by MAKEPAGE — fictional publication, not a real news outlet.",
    },
  },
  ko: {
    brand: "덴버 한인 위클리",
    nav: { news: "뉴스", directory: "업소록", culture: "문화", columns: "칼럼", advertise: "광고문의" },
    advertiseCta: "광고 문의하기",
    hero: {
      tag: "덴버 · 콜로라도 한인 커뮤니티",
      badge: "지역경제",
      title: "콜로라도 한인상공회의소, 오로라 신규 비즈니스 센터 착공",
      body: "지역 업주 30명이 함께 조성한 420만 달러 규모의 개발 사업으로, 피오리아 스트리트에 한인 업체들의 상설 공간이 마련됩니다.",
      byline: "DHW 취재팀 · 2026.08.28",
      readMore: "기사 전체 보기",
      spotlightLabel: "이번 주 화제",
      spotlightTitle: "콜로라도 최초 한국어 몰입 교육 프로그램, 오로라 공립학교에 개설",
      spotlightByline: "2026.08.24",
    },
    pressLabel: "이런 매체에 소개되었습니다",
    press: ["Front Range Weekly", "5280 Voice", "Peak Community News", "Mountain Times"],
    headlinesSection: { eyebrow: "오늘의 헤드라인", title: "덴버 지역 소식", viewAll: "뉴스 전체 보기" },
    headlines: [
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
    ],
    cultureSection: { eyebrow: "문화 & 라이프스타일", title: "헤드라인 너머의 이야기", viewAll: "문화 소식 전체 보기" },
    culture: [
      {
        tag: "푸드&이벤트",
        title: "주말 가이드: 스테이플턴 가을 푸드트럭 랠리",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "엔터테인먼트",
        title: "지금 스트리밍: 이번 달 미국에서 인기 있는 한국 드라마 5",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=900&q=80&auto=format&fit=crop",
      },
      {
        tag: "피플",
        title: "인물: 한옥 감성의 컴포트푸드를 재해석하는 오로라 셰프",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
      },
    ],
    columnsSection: { eyebrow: "칼럼", title: "커뮤니티의 목소리", viewAll: "칼럼 전체 보기" },
    columns: [
      {
        author: "그레이스 민",
        role: "스몰비즈니스 칼럼니스트",
        title: "작은 매장에도 이중언어 간판이 중요한 이유",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "데이빗 윤",
        role: "부동산 칼럼니스트",
        title: "부동산 상담: 금리 인상이 첫 주택구매자에게 미치는 영향",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "사라 한",
        role: "가족 & 문화",
        title: "교외에서 이중언어로 아이 키우기: 한 학부모의 기록",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop",
      },
    ],
    directorySection: {
      eyebrow: "업소록",
      title: "믿을 수 있는 지역 업체 찾기",
      body: "카테고리별로 둘러보거나 업체명으로 검색해 보세요.",
      viewAll: "업소록 전체 보기",
      getListed: "업체 등록을 원하시나요? 광고문의 →",
    },
    directoryCategories: [
      { name: "법률 & 이민", count: "18개 업체" },
      { name: "건강 & 웰니스", count: "24개 업체" },
      { name: "부동산", count: "15개 업체" },
      { name: "음식점 & 카페", count: "31개 업체" },
      { name: "홈서비스", count: "20개 업체" },
      { name: "전문서비스", count: "22개 업체" },
    ],
    footer: {
      sectionsLabel: "섹션",
      companyLabel: "회사 정보",
      backLabel: "포트폴리오로 돌아가기",
      address: "Denver Hanin Weekly · 콜로라도 오로라",
      legal: "© 2026 Denver Hanin Weekly. MAKEPAGE 포트폴리오 템플릿 — 실제 언론사가 아닌 가상의 매체입니다.",
    },
  },
} as const;

export default function DenverHanin({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
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
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16233f] text-xs font-bold text-white">D</span>
            <span className="text-sm font-bold tracking-wide">{t.brand}</span>
          </div>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <Link href={navPaths.news} className="transition hover:text-[#16233f]">{t.nav.news}</Link>
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
              <Link href={navPaths.news} onClick={() => setOpen(false)} className="py-2">{t.nav.news}</Link>
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

      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#d98e3f]">{t.hero.tag}</p>
            <Link href={navPaths.news} className="mt-6 block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=1200&q=80&auto=format&fit=crop"
                  alt={t.hero.title}
                  fill
                  priority
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#16233f] px-3 py-1 text-xs font-semibold text-white">
                  {t.hero.badge}
                </span>
              </div>
            </Link>
            <h1 className="mt-5 text-2xl font-bold leading-tight md:text-4xl break-keep text-balance">
              <Link href={navPaths.news} className="hover:underline">{t.hero.title}</Link>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 break-keep text-pretty">{t.hero.body}</p>
            <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
              <span>{t.hero.byline}</span>
              <Link href={navPaths.news} className="font-semibold text-[#16233f] hover:underline">{t.hero.readMore} →</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#16233f]">{t.hero.spotlightLabel}</p>
            <Link href={navPaths.culture} className="mt-4 block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=800&q=80&auto=format&fit=crop"
                  alt={t.hero.spotlightTitle}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <h2 className="mt-4 text-base font-bold leading-snug break-keep text-balance">
              <Link href={navPaths.culture} className="hover:underline">{t.hero.spotlightTitle}</Link>
            </h2>
            <p className="mt-2 text-xs text-slate-500">{t.hero.spotlightByline}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-[10px] font-semibold tracking-[0.3em] text-slate-400">{t.pressLabel}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {t.press.map((name) => (
              <span key={name} className="text-sm font-semibold tracking-wide text-slate-400">{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#d98e3f]">{t.headlinesSection.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl break-keep text-balance">{t.headlinesSection.title}</h2>
          </div>
          <Link href={navPaths.news} className="hidden shrink-0 text-sm font-semibold text-[#16233f] hover:underline sm:inline">
            {t.headlinesSection.viewAll} →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.headlines.map((h) => (
            <Link
              key={h.title}
              href={navPaths.news}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-[#16233f] hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={h.image} alt={h.title} fill className="object-cover transition group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#16233f]">
                  {h.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold leading-snug break-keep text-balance">{h.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 break-keep text-pretty">{h.excerpt}</p>
                <p className="mt-4 text-[11px] text-slate-400">{h.date}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link href={navPaths.news} className="mt-8 inline-block text-sm font-semibold text-[#16233f] hover:underline sm:hidden">
          {t.headlinesSection.viewAll} →
        </Link>
      </section>

      <section id="culture" className="scroll-mt-24 bg-[#16233f] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#d98e3f]">{t.cultureSection.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl break-keep text-balance">{t.cultureSection.title}</h2>
            </div>
            <Link href={navPaths.culture} className="hidden shrink-0 text-sm font-semibold text-white/80 hover:text-white sm:inline">
              {t.cultureSection.viewAll} →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.culture.map((c) => (
              <Link key={c.title} href={navPaths.culture} className="group overflow-hidden rounded-2xl bg-white/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={c.image} alt={c.title} fill className="object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-[#d98e3f]">{c.tag}</p>
                  <h3 className="mt-2 text-sm font-bold leading-snug break-keep text-balance">{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="columns" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#d98e3f]">{t.columnsSection.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl break-keep text-balance">{t.columnsSection.title}</h2>
          </div>
          <Link href={navPaths.columns} className="hidden shrink-0 text-sm font-semibold text-[#16233f] hover:underline sm:inline">
            {t.columnsSection.viewAll} →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.columns.map((c) => (
            <Link key={c.title} href={navPaths.columns} className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#16233f] hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={c.avatar} alt={c.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{c.author}</p>
                  <p className="text-xs text-slate-500">{c.role}</p>
                </div>
              </div>
              <h3 className="mt-4 text-sm font-bold leading-snug break-keep text-balance">{c.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section id="directory" className="scroll-mt-24 bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#d98e3f]">{t.directorySection.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl break-keep text-balance">{t.directorySection.title}</h2>
              <p className="mt-2 max-w-md text-sm text-slate-600 break-keep text-pretty">{t.directorySection.body}</p>
            </div>
            <Link href={navPaths.advertise} className="text-sm font-semibold text-[#16233f] hover:underline">
              {t.directorySection.getListed}
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.directoryCategories.map((c) => (
              <Link
                key={c.name}
                href={navPaths.directory}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-[#16233f] hover:shadow-sm"
              >
                <div>
                  <p className="text-sm font-bold break-keep text-balance">{c.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{c.count}</p>
                </div>
                <span className="text-[#d98e3f]">→</span>
              </Link>
            ))}
          </div>
          <Link
            href={navPaths.directory}
            className="mt-8 inline-block rounded-full bg-[#16233f] px-6 py-3 text-sm font-semibold text-white"
          >
            {t.directorySection.viewAll}
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-12 text-slate-500">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#16233f] text-[10px] font-bold text-white">D</span>
              <span className="text-sm font-bold text-slate-900">{t.brand}</span>
            </div>
            <p className="mt-3 text-xs break-keep text-pretty">{t.footer.address}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-slate-400">{t.footer.sectionsLabel}</p>
            <nav className="mt-3 flex flex-col gap-2 text-sm">
              <Link href={navPaths.news} className="hover:text-slate-900">{t.nav.news}</Link>
              <Link href={navPaths.directory} className="hover:text-slate-900">{t.nav.directory}</Link>
              <Link href={navPaths.culture} className="hover:text-slate-900">{t.nav.culture}</Link>
              <Link href={navPaths.columns} className="hover:text-slate-900">{t.nav.columns}</Link>
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-slate-400">{t.footer.companyLabel}</p>
            <nav className="mt-3 flex flex-col gap-2 text-sm">
              <Link href={navPaths.advertise} className="hover:text-slate-900">{t.nav.advertise}</Link>
            </nav>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-6 text-xs break-keep text-pretty">{t.footer.legal}</p>
      </footer>
    </div>
  );
}
