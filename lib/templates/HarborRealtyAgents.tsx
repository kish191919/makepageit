"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "HARBOR & VALE", tag: "REALTY" },
    nav: { listings: "Listings", neighborhoods: "Neighborhoods", sell: "Sell With Us", agents: "Agents", contact: "Contact" },
    bookCta: "Schedule a Showing",
    eyebrow: "OUR TEAM",
    title: "Meet the agents",
    intro: "Every agent on our team lives in the neighborhoods they sell — ask them anything, they've probably walked the street.",
    agents: [
      {
        name: "Meredith Hale",
        role: "Founding Broker · 15 yrs",
        bio: "Started the firm in 2011 after a decade at a national brokerage. Specializes in Harbor Point's waterfront estates.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Owen Castillo",
        role: "Senior Agent · 9 yrs",
        bio: "Closed over $60M in Bayview Cove new-construction sales. Knows every builder's timeline by heart.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Priya Anand",
        role: "Listing Specialist · 6 yrs",
        bio: "Handles staging and photography for every listing personally — her homes average 4 fewer days on market.",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Marcus Reyes",
        role: "Buyer's Agent · 8 yrs",
        bio: "Guides first-time buyers through Vale Heights, from pre-approval to the final walkthrough.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Elena Voss",
        role: "Relocation Specialist · 5 yrs",
        bio: "Coordinates out-of-state and international moves — school districts, commute times, the whole picture.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Daniel Cho",
        role: "Agent · 4 yrs",
        bio: "Grew up in Harbor Point and knows which streets flood, which don't, and which schools are worth the drive.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Harbor & Vale Realty. Equal Housing Opportunity.",
  },
  ko: {
    brand: { name: "하버앤베일", tag: "부동산" },
    nav: { listings: "매물", neighborhoods: "지역 안내", sell: "매도 상담", agents: "에이전트", contact: "문의" },
    bookCta: "쇼잉 예약하기",
    eyebrow: "우리 팀",
    title: "에이전트 소개",
    intro: "저희 팀의 모든 에이전트는 직접 담당하는 지역에 거주하고 있습니다. 무엇이든 물어보세요, 아마 그 거리를 직접 걸어보셨을 겁니다.",
    agents: [
      {
        name: "메러디스 헤일",
        role: "설립 파트너 · 15년차",
        bio: "대형 중개사에서 10년 근무 후 2011년 회사를 설립했습니다. Harbor Point 수변 저택 전문입니다.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "오웬 카스티요",
        role: "시니어 에이전트 · 9년차",
        bio: "Bayview Cove 신축 매물로 누적 $60M 이상 거래를 성사시켰습니다. 모든 시공사의 일정을 꿰고 있습니다.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "프리야 아난드",
        role: "리스팅 전문 · 6년차",
        bio: "모든 매물의 스테이징과 사진 촬영을 직접 챙깁니다. 평균 매도 기간이 4일 더 짧습니다.",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "마커스 레예스",
        role: "매수 전문 · 8년차",
        bio: "사전 승인부터 최종 워크스루까지, Vale Heights 첫 주택 구매자를 안내합니다.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "엘레나 보스",
        role: "이주 전문 · 5년차",
        bio: "타주·해외 이주를 조율합니다 — 학군, 통근 시간까지 전체 그림을 함께 봅니다.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "다니엘 조",
        role: "에이전트 · 4년차",
        bio: "Harbor Point에서 자라, 어느 거리가 침수되는지, 어느 학교가 통학할 가치가 있는지 잘 압니다.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 하버앤베일 부동산. Equal Housing Opportunity.",
  },
} as const;

export default function HarborRealtyAgents({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/harbor-realty");
  const navPaths = {
    listings: localePath(lang, "/portfolio/harbor-realty/listings"),
    neighborhoods: localePath(lang, "/portfolio/harbor-realty/neighborhoods"),
    sell: localePath(lang, "/portfolio/harbor-realty/sell"),
    agents: localePath(lang, "/portfolio/harbor-realty/agents"),
    contact: localePath(lang, "/portfolio/harbor-realty/contact"),
  } as const;

  return (
    <div className="bg-[#faf7f2] text-[#1c3829]">
      <header ref={ref} className="border-b border-[#1c3829]/10 bg-[#faf7f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c3829] font-serif text-base text-[#faf7f2]">
              H
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#1c3829]/60">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#1c3829]/80 md:flex">
            <Link href={navPaths.listings}>{t.nav.listings}</Link>
            <Link href={navPaths.neighborhoods}>{t.nav.neighborhoods}</Link>
            <Link href={navPaths.sell}>{t.nav.sell}</Link>
            <Link href={navPaths.agents} className="font-semibold">{t.nav.agents}</Link>
            <Link href={navPaths.contact}>{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={navPaths.contact}
              className="hidden rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white sm:inline-block"
            >
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c3829]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#1c3829]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#1c3829]/80">
              <Link href={navPaths.listings} onClick={() => setOpen(false)} className="py-2">{t.nav.listings}</Link>
              <Link href={navPaths.neighborhoods} onClick={() => setOpen(false)} className="py-2">{t.nav.neighborhoods}</Link>
              <Link href={navPaths.sell} onClick={() => setOpen(false)} className="py-2">{t.nav.sell}</Link>
              <Link href={navPaths.agents} onClick={() => setOpen(false)} className="py-2 font-semibold">{t.nav.agents}</Link>
              <Link href={navPaths.contact} onClick={() => setOpen(false)} className="py-2">{t.nav.contact}</Link>
            </nav>
            <Link
              href={navPaths.contact}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#b08d57]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#1c3829]/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.agents.map((a) => (
            <div key={a.name} className="text-center">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full bg-[#1c3829]/5 md:w-48">
                <Image src={a.image} alt={a.name} fill className="object-cover" />
              </div>
              <h3 className="mt-5 font-serif text-xl break-keep text-balance">{a.name}</h3>
              <p className="mt-1 text-xs tracking-wide text-[#b08d57]">{a.role}</p>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#1c3829]/70 break-keep text-pretty">{a.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#1c3829]/10 bg-[#faf7f2] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#1c3829]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#1c3829]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
