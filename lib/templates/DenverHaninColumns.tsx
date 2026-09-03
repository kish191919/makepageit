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
    label: "COLUMNS",
    title: "Voices from the community",
    intro: "Opinion and expert perspectives from local business owners, professionals, and long-time residents.",
    columns: [
      {
        author: "Grace Min",
        role: "Small Business Columnist",
        title: "Why Bilingual Signage Still Matters for Small Storefronts",
        excerpt: "A window sign in two languages does more than translate a name — it tells half the neighborhood they're welcome.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "David Yoon",
        role: "Real Estate Columnist",
        title: "Ask a Realtor: What Rising Rates Mean for First-Time Buyers",
        excerpt: "Three questions I'm getting from every client this fall, and how I'm answering them honestly.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "Sarah Han",
        role: "Family & Culture",
        title: "Raising Bilingual Kids in the Suburbs: One Parent's Notes",
        excerpt: "What worked, what didn't, and why we stopped worrying about a 'perfect' balance between the two languages.",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "Peter Cho",
        role: "Finance Columnist",
        title: "A Simple Framework for Family Businesses Passing to the Next Generation",
        excerpt: "The handoff usually fails on communication, not paperwork — here's where to start the conversation.",
        avatar: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=200&q=80&auto=format&fit=crop",
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
    label: "칼럼",
    title: "커뮤니티의 목소리",
    intro: "지역 업주, 전문가, 오랜 주민들이 전하는 오피니언과 전문가 시각.",
    columns: [
      {
        author: "그레이스 민",
        role: "스몰비즈니스 칼럼니스트",
        title: "작은 매장에도 이중언어 간판이 중요한 이유",
        excerpt: "두 언어로 쓰인 창문 간판은 단순한 번역이 아니라, 동네 절반에게 '환영합니다'라고 말하는 것입니다.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "데이빗 윤",
        role: "부동산 칼럼니스트",
        title: "부동산 상담: 금리 인상이 첫 주택구매자에게 미치는 영향",
        excerpt: "이번 가을 모든 고객에게 받는 세 가지 질문과, 제가 솔직하게 답하는 방법.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "사라 한",
        role: "가족 & 문화",
        title: "교외에서 이중언어로 아이 키우기: 한 학부모의 기록",
        excerpt: "무엇이 효과가 있었고 무엇이 아니었는지, 그리고 '완벽한 균형'에 대한 강박을 내려놓은 이유.",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop",
      },
      {
        author: "피터 조",
        role: "재무 칼럼니스트",
        title: "가업을 다음 세대에 넘기는 간단한 원칙",
        excerpt: "승계는 대개 서류가 아니라 소통에서 실패합니다 — 대화를 시작할 지점은 여기입니다.",
        avatar: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=200&q=80&auto=format&fit=crop",
      },
    ],
    footer: {
      address: "Denver Hanin Weekly · 콜로라도 오로라",
      legal: "© 2026 Denver Hanin Weekly. MAKEPAGE 포트폴리오 템플릿 — 실제 언론사가 아닌 가상의 매체입니다.",
    },
  },
} as const;

export default function DenverHaninColumns({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.culture} className="transition hover:text-[#16233f]">{t.nav.culture}</Link>
            <Link href={navPaths.columns} className="font-semibold text-[#16233f]">{t.nav.columns}</Link>
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
              <Link href={navPaths.columns} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#16233f]">{t.nav.columns}</Link>
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

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#d98e3f]">{t.label}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl break-keep text-balance">{t.title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 break-keep text-pretty">{t.intro}</p>

        <div className="mt-10 space-y-6">
          {t.columns.map((c) => (
            <article key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image src={c.avatar} alt={c.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{c.author}</p>
                  <p className="text-xs text-slate-500">{c.role}</p>
                </div>
              </div>
              <h2 className="mt-5 text-lg font-bold leading-snug break-keep text-balance">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 break-keep text-pretty">{c.excerpt}</p>
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
