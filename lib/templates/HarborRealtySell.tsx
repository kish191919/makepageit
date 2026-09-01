"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "HARBOR & VALE", tag: "REALTY" },
    nav: { listings: "Listings", neighborhoods: "Neighborhoods", sell: "Sell With Us", agents: "Agents", contact: "Contact" },
    bookCta: "Schedule a Showing",
    eyebrow: "SELL WITH US",
    title: ["A smoother path", "to a stronger offer."],
    intro: "We price to sell in the first 30 days, stage every listing professionally, and negotiate every offer like it's the only one you'll get.",
    benefits: [
      { v: "22 days", l: "Avg. time to offer" },
      { v: "101%", l: "Avg. sale-to-list ratio" },
      { v: "$180M+", l: "In closed sales" },
      { v: "14 yrs", l: "Avg. agent experience" },
    ],
    processTitle: "Our process",
    process: [
      { step: "01", title: "Free Valuation", desc: "We walk the property and pull comps to set a price that sells fast without leaving money on the table." },
      { step: "02", title: "Prep & Staging", desc: "Professional photography, staging recommendations, and minor-repair guidance to get every room show-ready." },
      { step: "03", title: "List & Show", desc: "Your home goes live across the MLS and our buyer network, with private showings scheduled around your calendar." },
      { step: "04", title: "Negotiate & Close", desc: "We field every offer, negotiate terms on your behalf, and manage the paperwork through to closing day." },
    ],
    ctaTitle: "Curious what your home is worth?",
    ctaBody: "Request a complimentary valuation — our team typically responds within a few hours.",
    ctaButton: "Get a Free Valuation",
    footer: "© 2025 Harbor & Vale Realty. Equal Housing Opportunity.",
  },
  ko: {
    brand: { name: "하버앤베일", tag: "부동산" },
    nav: { listings: "매물", neighborhoods: "지역 안내", sell: "매도 상담", agents: "에이전트", contact: "문의" },
    bookCta: "쇼잉 예약하기",
    eyebrow: "매도 상담",
    title: ["더 순조로운 매도,", "더 좋은 오퍼로."],
    intro: "저희는 30일 안에 팔리도록 가격을 책정하고, 모든 매물을 전문적으로 스테이징하며, 들어오는 모든 오퍼를 마지막 기회처럼 협상합니다.",
    benefits: [
      { v: "22일", l: "평균 오퍼 소요기간" },
      { v: "101%", l: "평균 매도가 비율" },
      { v: "$180M+", l: "누적 거래액" },
      { v: "14년", l: "평균 에이전트 경력" },
    ],
    processTitle: "매도 프로세스",
    process: [
      { step: "01", title: "무료 가치평가", desc: "직접 방문 후 인근 실거래가를 분석해, 손해 없이 빠르게 팔릴 가격을 산정합니다." },
      { step: "02", title: "준비 및 스테이징", desc: "전문 사진 촬영, 스테이징 제안, 간단한 수리 가이드까지 — 모든 공간을 보여줄 준비를 마칩니다." },
      { step: "03", title: "매물 등록 및 쇼잉", desc: "MLS와 저희 바이어 네트워크에 즉시 노출되며, 고객님 일정에 맞춰 프라이빗 쇼잉을 진행합니다." },
      { step: "04", title: "협상 및 클로징", desc: "들어오는 모든 오퍼를 검토하고 조건을 대신 협상하며, 클로징까지 서류 절차를 관리합니다." },
    ],
    ctaTitle: "내 집의 가치가 궁금하신가요?",
    ctaBody: "무료 가치평가를 요청해보세요 — 대부분 몇 시간 내로 답변드립니다.",
    ctaButton: "무료 가치평가 받기",
    footer: "© 2025 하버앤베일 부동산. Equal Housing Opportunity.",
  },
} as const;

export default function HarborRealtySell({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.sell} className="font-semibold">{t.nav.sell}</Link>
            <Link href={navPaths.agents}>{t.nav.agents}</Link>
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
              <Link href={navPaths.sell} onClick={() => setOpen(false)} className="py-2 font-semibold">{t.nav.sell}</Link>
              <Link href={navPaths.agents} onClick={() => setOpen(false)} className="py-2">{t.nav.agents}</Link>
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
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl break-keep text-balance">
          {t.title[0]}
          <br className="hidden md:block" />
          {t.title[1]}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#1c3829]/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-8 border-t border-[#1c3829]/10 pt-10 sm:grid-cols-4">
          {t.benefits.map((b) => (
            <div key={b.l}>
              <div className="font-serif text-3xl">{b.v}</div>
              <div className="mt-2 text-xs tracking-[0.2em] text-[#1c3829]/50">{b.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f2ead9] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl md:text-4xl break-keep text-balance">{t.processTitle}</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map((p) => (
              <div key={p.step}>
                <div className="font-serif text-4xl text-[#b08d57]">{p.step}</div>
                <h3 className="mt-4 font-serif text-xl break-keep text-balance">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1c3829]/70 break-keep text-pretty">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-24">
        <h2 className="font-serif text-3xl md:text-4xl break-keep text-balance">{t.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-[#1c3829]/70 break-keep text-pretty">{t.ctaBody}</p>
        <Link
          href={navPaths.contact}
          className="mt-8 inline-block rounded-full bg-[#b08d57] px-7 py-3.5 text-sm font-semibold text-white"
        >
          {t.ctaButton}
        </Link>
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
