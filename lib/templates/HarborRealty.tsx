"use client";

import Image from "next/image";
import { useState } from "react";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { name: "HARBOR & VALE", tag: "REALTY" },
    nav: { listings: "Listings", neighborhoods: "Neighborhoods", sell: "Sell With Us", agents: "Agents", contact: "Contact" },
    bookCta: "Schedule a Showing",
    hero: {
      eyebrow: "TRUSTED SINCE 2011",
      title: ["Find home.", "Sell with confidence."],
      body: "Harbor & Vale Realty is a boutique brokerage serving the coast's most sought-after neighborhoods. From first showing to closing day, our agents guide you with equal parts warmth and expertise.",
      ctaPrimary: "Browse Listings",
      ctaSecondary: "Get a Free Valuation",
    },
    stats: [
      { v: "$180M+", l: "In closed sales" },
      { v: "14 yrs", l: "Avg. agent experience" },
      { v: "22 days", l: "Avg. time to offer" },
      { v: "98%", l: "Client satisfaction" },
    ],
    listingsSection: { eyebrow: "FEATURED LISTINGS", title: "Homes on the market" },
    listings: [
      {
        address: "14 Cliffside Lane",
        neighborhood: "Harbor Point",
        price: "$2,450,000",
        beds: 4,
        baths: 3,
        sqft: "3,200",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "228 Willowmere Rd",
        neighborhood: "Vale Heights",
        price: "$1,180,000",
        beds: 3,
        baths: 2,
        sqft: "2,050",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "9 Anchor Way",
        neighborhood: "Bayview Cove",
        price: "$3,675,000",
        beds: 5,
        baths: 4,
        sqft: "4,400",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    specsLabel: { beds: "bd", baths: "ba", sqft: "sqft" },
    agentsSection: { eyebrow: "OUR TEAM", title: "Meet the agents" },
    agents: [
      {
        name: "Meredith Hale",
        role: "Founding Broker · 15 yrs",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Owen Castillo",
        role: "Senior Agent · 9 yrs",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Priya Anand",
        role: "Listing Specialist · 6 yrs",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&q=80&auto=format&fit=crop",
      },
    ],
    contact: {
      eyebrow: "GET IN TOUCH",
      title: ["Curious what your", "home is worth?"],
      body: "Request a complimentary valuation or schedule a private tour — our team typically responds within a few hours.",
      rows: [
        { label: "CALL", value: "(203) 555-0142" },
        { label: "EMAIL", value: "hello@harborandvale.com" },
        { label: "OFFICE", value: "48 Harbor Street, Suite 2, Millbrook Harbor, CT 06355" },
      ],
      formTitle: "Request a Free Home Valuation",
      formNote: "An agent will follow up within one business day.",
      placeholders: {
        name: "Full name",
        phone: "Phone number",
        interest: { default: "I'm interested in...", buying: "Buying", selling: "Selling", both: "Both" },
        message: "Tell us about your home or your search",
      },
      submit: "Request Valuation",
    },
    footer: "© 2025 Harbor & Vale Realty. Equal Housing Opportunity.",
  },
  ko: {
    brand: { name: "하버앤베일", tag: "부동산" },
    nav: { listings: "매물", neighborhoods: "지역 안내", sell: "매도 상담", agents: "에이전트", contact: "문의" },
    bookCta: "쇼잉 예약하기",
    hero: {
      eyebrow: "2011년부터 함께해온",
      title: ["살고 싶은 집을 찾다,", "믿고 맡기는 매도."],
      body: "하버앤베일 부동산은 해안가 인기 주거지역을 전문으로 하는 부티크 중개사입니다. 첫 방문부터 클로징까지, 저희 에이전트가 전문성과 세심함으로 함께합니다.",
      ctaPrimary: "매물 둘러보기",
      ctaSecondary: "무료 가치평가 받기",
    },
    stats: [
      { v: "$180M+", l: "누적 거래액" },
      { v: "14년", l: "평균 에이전트 경력" },
      { v: "22일", l: "평균 오퍼 소요기간" },
      { v: "98%", l: "고객 만족도" },
    ],
    listingsSection: { eyebrow: "대표 매물", title: "지금 나와 있는 매물" },
    listings: [
      {
        address: "14 Cliffside Lane",
        neighborhood: "Harbor Point",
        price: "$2,450,000",
        beds: 4,
        baths: 3,
        sqft: "3,200",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "228 Willowmere Rd",
        neighborhood: "Vale Heights",
        price: "$1,180,000",
        beds: 3,
        baths: 2,
        sqft: "2,050",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "9 Anchor Way",
        neighborhood: "Bayview Cove",
        price: "$3,675,000",
        beds: 5,
        baths: 4,
        sqft: "4,400",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    specsLabel: { beds: "침실", baths: "욕실", sqft: "sqft" },
    agentsSection: { eyebrow: "우리 팀", title: "에이전트 소개" },
    agents: [
      {
        name: "메러디스 헤일",
        role: "설립 파트너 · 15년차",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "오웬 카스티요",
        role: "시니어 에이전트 · 9년차",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "프리야 아난드",
        role: "리스팅 전문 · 6년차",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&q=80&auto=format&fit=crop",
      },
    ],
    contact: {
      eyebrow: "문의하기",
      title: ["내 집의 가치가", "궁금하신가요?"],
      body: "무료 가치평가를 요청하거나 프라이빗 투어를 예약해보세요. 대부분 몇 시간 내로 답변드립니다.",
      rows: [
        { label: "CALL", value: "(203) 555-0142" },
        { label: "EMAIL", value: "hello@harborandvale.com" },
        { label: "OFFICE", value: "48 Harbor Street, Suite 2, Millbrook Harbor, CT 06355" },
      ],
      formTitle: "무료 가치평가 신청",
      formNote: "영업일 기준 1일 이내 에이전트가 연락드립니다.",
      placeholders: {
        name: "성함",
        phone: "연락처",
        interest: { default: "희망 사항을 선택하세요", buying: "매수", selling: "매도", both: "매수·매도 모두" },
        message: "보유하신 매물 또는 찾으시는 조건을 알려주세요",
      },
      submit: "가치평가 신청하기",
    },
    footer: "© 2025 하버앤베일 부동산. Equal Housing Opportunity.",
  },
} as const;

export default function HarborRealty({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [t.nav.listings, t.nav.neighborhoods, t.nav.sell, t.nav.agents, t.nav.contact];
  return (
    <div className="bg-[#faf7f2] text-[#1c3829]">
      <header className="border-b border-[#1c3829]/10 bg-[#faf7f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c3829] font-serif text-base text-[#faf7f2]">
              H
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#1c3829]/60">{t.brand.tag}</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-medium text-[#1c3829]/80 md:flex">
            <a>{t.nav.listings}</a>
            <a>{t.nav.neighborhoods}</a>
            <a>{t.nav.sell}</a>
            <a>{t.nav.agents}</a>
            <a>{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white sm:inline-block">
              {t.bookCta}
            </a>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c3829]/20 md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-[#1c3829]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#1c3829]/80">
              {navItems.map((label) => (
                <a key={label} className="py-2">
                  {label}
                </a>
              ))}
            </nav>
            <a className="mt-3 inline-block rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white">
              {t.bookCta}
            </a>
          </div>
        )}
      </header>

      <section className="relative flex min-h-[80vh] items-end overflow-hidden md:min-h-[88vh]">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop"
          alt={t.brand.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c3829]/95 via-[#1c3829]/45 to-[#1c3829]/5" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pb-24">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#e3c795]">{t.hero.eyebrow}</p>
          <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.15] text-white md:text-6xl">
            {t.hero.title[0]} <br className="hidden md:block" />
            {t.hero.title[1]}
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-white/80">{t.hero.body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-full bg-[#b08d57] px-7 py-3.5 text-sm font-semibold text-white">
              {t.hero.ctaPrimary}
            </a>
            <a className="rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#1c3829] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l} className="border-l border-white/20 pl-6">
              <div className="font-serif text-4xl">{s.v}</div>
              <div className="mt-2 text-xs tracking-[0.3em] text-white/60">{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#b08d57]">{t.listingsSection.eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">{t.listingsSection.title}</h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {t.listings.map((item) => (
            <div key={item.address}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1c3829]/5">
                <Image src={item.image} alt={item.address} fill className="object-cover" />
                <div className="absolute right-3 top-3 rounded-full bg-[#b08d57] px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
                  {item.price}
                </div>
              </div>
              <h3 className="mt-5 font-serif text-xl">{item.address}</h3>
              <p className="mt-1 text-xs tracking-[0.2em] text-[#1c3829]/50">{item.neighborhood.toUpperCase()}</p>
              <p className="mt-3 text-sm text-[#1c3829]/70">
                {item.beds} {t.specsLabel.beds} &middot; {item.baths} {t.specsLabel.baths} &middot; {item.sqft} {t.specsLabel.sqft}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f2ead9] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#b08d57]">{t.agentsSection.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">{t.agentsSection.title}</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {t.agents.map((a) => (
              <div key={a.name} className="text-center">
                <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full bg-[#1c3829]/5 md:w-48">
                  <Image src={a.image} alt={a.name} fill className="object-cover" />
                </div>
                <h3 className="mt-5 font-serif text-xl">{a.name}</h3>
                <p className="mt-1 text-xs tracking-wide text-[#b08d57]">{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#b08d57]">{t.contact.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl">
              {t.contact.title[0]}
              <br className="hidden md:block" />
              {t.contact.title[1]}
            </h2>
            <p className="mt-6 leading-relaxed text-[#1c3829]/70">{t.contact.body}</p>
            <dl className="mt-10 space-y-3 border-t border-[#1c3829]/10 pt-8 text-sm">
              {t.contact.rows.map((r) => (
                <div key={r.label} className="flex gap-6">
                  <dt className="w-24 font-semibold tracking-widest text-[#1c3829]/60">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <form className="rounded-sm bg-[#1c3829] p-6 text-white sm:p-10">
            <h3 className="font-serif text-2xl">{t.contact.formTitle}</h3>
            <p className="mt-2 text-xs text-white/60">{t.contact.formNote}</p>
            <div className="mt-8 space-y-4">
              <input
                placeholder={t.contact.placeholders.name}
                className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
              />
              <input
                placeholder={t.contact.placeholders.phone}
                className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
              />
              <select className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none">
                <option className="text-[#1c3829]">{t.contact.placeholders.interest.default}</option>
                <option className="text-[#1c3829]">{t.contact.placeholders.interest.buying}</option>
                <option className="text-[#1c3829]">{t.contact.placeholders.interest.selling}</option>
                <option className="text-[#1c3829]">{t.contact.placeholders.interest.both}</option>
              </select>
              <textarea
                rows={3}
                placeholder={t.contact.placeholders.message}
                className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
              />
            </div>
            <button className="mt-8 w-full bg-[#b08d57] py-3.5 text-xs font-semibold tracking-[0.3em] text-white">
              {t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#1c3829]/10 bg-[#faf7f2] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#1c3829]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#1c3829]">{t.brand.name}</div>
          <div>{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
