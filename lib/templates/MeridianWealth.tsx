"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { name: "MERIDIAN WEALTH PARTNERS", tag: "FEE-ONLY FIDUCIARY ADVISORS" },
    nav: { services: "Services", approach: "Our Approach", advisors: "Advisors", insights: "Insights", contact: "Contact" },
    bookCta: "Schedule a Consultation",
    hero: {
      eyebrow: "FEE-ONLY FIDUCIARY ADVISORS",
      title: ["Financial confidence, ", "built to last."],
      body: "Meridian Wealth Partners is an independent, fee-only advisory firm helping individuals and families plan, invest, and preserve wealth across generations. No commissions, no proprietary products — only advice aligned with your interests.",
      ctaPrimary: "Schedule a Consultation",
      ctaSecondary: "Our Approach",
    },
    stats: [
      { v: "$420M+", l: "Assets under advisement" },
      { v: "18 yrs", l: "Avg. advisor experience" },
      { v: "100%", l: "Fiduciary, fee-only" },
      { v: "600+", l: "Families served" },
    ],
    servicesSection: { eyebrow: "SERVICES", title: "How we help" },
    services: [
      { title: "Retirement Planning", desc: "Income modeling, Social Security timing, and withdrawal strategy built around the retirement you actually want." },
      { title: "Wealth Management & Investing", desc: "Evidence-based portfolio construction, tax-aware rebalancing, and ongoing risk management." },
      { title: "Estate & Legacy Planning", desc: "Coordinated trust and estate strategy that works alongside your attorney to protect what you've built." },
      { title: "Tax-Efficient Strategies", desc: "Asset location, Roth conversions, and charitable planning designed to minimize lifetime tax drag." },
      { title: "Insurance & Risk Planning", desc: "Independent review of life, disability, and liability coverage — no products sold, no commissions earned." },
      { title: "Business Owner Planning", desc: "Exit planning, cash-flow structuring, and retirement-plan design for founders and partners." },
    ],
    viewMore: "LEARN MORE →",
    advisorsSection: { eyebrow: "ADVISORS", title: "Your planning team" },
    advisors: [
      {
        name: "Margaret Wu",
        role: "CFP®, Managing Partner",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "David Alvarez",
        role: "CFA®, Chief Investment Officer",
        image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Rachel Kim",
        role: "CFP®, Senior Wealth Advisor",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&auto=format&fit=crop",
      },
    ],
    consult: {
      eyebrow: "CONTACT",
      title: ["Let's talk about", "where you're headed."],
      body: "A complimentary 30-minute introductory call, with no obligation. We'll walk through your goals and outline how a fee-only relationship would work.",
      rows: [
        { label: "CALL", value: "(617) 555-0142" },
        { label: "EMAIL", value: "hello@meridianwealthpartners.com" },
        { label: "OFFICE", value: "225 Franklin Street, Suite 1800, Boston, MA 02110" },
      ],
      formTitle: "Schedule a Free Consultation",
      formNote: "An advisor will respond within one business day.",
      placeholders: {
        name: "Full name",
        phone: "Phone number",
        area: { default: "Area of interest", a1: "Retirement Planning", a2: "Investment Management", a3: "Estate Planning" },
        details: "Tell us about your goals",
      },
      submit: "Request Consultation",
    },
    footer: "© 2025 Meridian Wealth Partners.",
    disclaimer: "Advisory services offered through Meridian Wealth Partners, a Registered Investment Advisor. Investing involves risk, including possible loss of principal.",
  },
  ko: {
    brand: { name: "메리디안 자산관리", tag: "수수료 기반 신의성실 자문사" },
    nav: { services: "서비스", approach: "운용 철학", advisors: "어드바이저", insights: "인사이트", contact: "상담 문의" },
    bookCta: "상담 예약",
    hero: {
      eyebrow: "수수료 기반 신의성실 자문사",
      title: ["흔들림 없는 재무 계획,", "오래가는 자산."],
      body: "메리디안 자산관리는 개인과 가족의 자산을 설계하고, 투자하고, 대를 이어 지켜나가는 독립계 자문사입니다. 판매 수수료도, 자체 상품도 없이 오직 고객의 이익에만 맞춘 자문을 제공합니다.",
      ctaPrimary: "상담 예약하기",
      ctaSecondary: "운용 철학 보기",
    },
    stats: [
      { v: "$4,200억+", l: "자문 자산 규모" },
      { v: "18년", l: "평균 어드바이저 경력" },
      { v: "100%", l: "신의성실 · 수수료 기반" },
      { v: "600+", l: "고객 가문 수" },
    ],
    servicesSection: { eyebrow: "SERVICES", title: "제공 서비스" },
    services: [
      { title: "은퇴 설계", desc: "은퇴 소득 모델링, 연금 수령 시점 설계, 인출 전략까지 원하는 은퇴 생활에 맞춰 설계합니다." },
      { title: "자산관리·투자운용", desc: "근거 기반 포트폴리오 구성, 세금을 고려한 리밸런싱, 지속적인 리스크 관리." },
      { title: "상속·유산 설계", desc: "고객의 변호사와 협업하여 신탁·상속 전략을 조율하고 일군 자산을 지켜냅니다." },
      { title: "절세 전략", desc: "자산 배치, 로스 전환, 기부 계획을 통해 평생에 걸친 세금 부담을 최소화합니다." },
      { title: "보험·리스크 설계", desc: "생명·소득보장·배상책임 보장을 독립적으로 점검합니다. 상품 판매나 수수료 없이." },
      { title: "사업주 재무설계", desc: "창업자와 파트너를 위한 매각 설계, 현금흐름 구조화, 퇴직연금 플랜 설계." },
    ],
    viewMore: "자세히 보기 →",
    advisorsSection: { eyebrow: "ADVISORS", title: "어드바이저 소개" },
    advisors: [
      {
        name: "우마가렛",
        role: "CFP®, 대표 파트너",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "데이비드 알바레즈",
        role: "CFA®, 최고투자책임자",
        image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "김레이첼",
        role: "CFP®, 수석 자산관리사",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&auto=format&fit=crop",
      },
    ],
    consult: {
      eyebrow: "CONTACT",
      title: ["지금의 자산이", "어디로 향할지, 함께 그려봅니다."],
      body: "30분 무료 초기 상담으로 목표를 함께 정리하고, 수수료 기반 자문 관계가 어떻게 이루어지는지 안내해 드립니다.",
      rows: [
        { label: "CALL", value: "02-XXX-XXXX" },
        { label: "EMAIL", value: "hello@meridianwealthpartners.com" },
        { label: "주소", value: "서울 강남구 테헤란로 ○○ 메리디안타워 18층" },
      ],
      formTitle: "무료 상담 신청",
      formNote: "담당 어드바이저가 1영업일 이내 연락드립니다.",
      placeholders: {
        name: "성함",
        phone: "연락처",
        area: { default: "관심 분야 선택", a1: "은퇴 설계", a2: "투자운용", a3: "상속·유산 설계" },
        details: "재무 목표를 간단히 알려주세요",
      },
      submit: "상담 신청하기",
    },
    footer: "© 2025 메리디안 자산관리.",
    disclaimer: "자문 서비스는 등록투자자문사인 메리디안 자산관리를 통해 제공됩니다. 투자에는 원금 손실을 포함한 위험이 따를 수 있습니다.",
  },
} as const;

export default function MeridianWealth({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const insightsPath = localePath(lang, "/portfolio/meridian-wealth/insights");
  const navItems: [string, string][] = [
    [t.nav.services, "#services"],
    [t.nav.approach, "#approach"],
    [t.nav.advisors, "#advisors"],
    [t.nav.insights, insightsPath],
    [t.nav.contact, "#contact"],
  ];
  return (
    <div className="bg-[#f7f6f2] text-[#1a2332]">
      <header className="border-b border-[#1a2332]/10 bg-[#f7f6f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2332] text-base font-semibold text-[#c99a3b]">M</span>
            <div>
              <div className="text-base font-semibold leading-none tracking-tight">{t.brand.name}</div>
              <div className="mt-1 text-[10px] tracking-[0.25em] text-[#1a2332]/50">{t.brand.tag}</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-medium text-[#1a2332]/75 md:flex">
            <a href="#services" className="transition hover:text-[#c99a3b]">{t.nav.services}</a>
            <a href="#approach" className="transition hover:text-[#c99a3b]">{t.nav.approach}</a>
            <a href="#advisors" className="transition hover:text-[#c99a3b]">{t.nav.advisors}</a>
            <Link href={insightsPath} className="transition hover:text-[#c99a3b]">{t.nav.insights}</Link>
            <a href="#contact" className="transition hover:text-[#c99a3b]">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full bg-[#1a2332] px-5 py-2.5 text-xs font-semibold tracking-wide text-white sm:inline-block">
              {t.bookCta}
            </a>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2332]/20 md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-[#1a2332]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#1a2332]/75">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)} className="py-2">
                  {label}
                </a>
              ))}
            </nav>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-3 inline-block rounded-full bg-[#1a2332] px-5 py-2.5 text-xs font-semibold tracking-wide text-white">
              {t.bookCta}
            </a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-[#f7f6f2]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 md:grid-cols-[1.15fr_1fr] md:items-center md:py-32">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.hero.eyebrow}</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl break-keep text-balance">
              {t.hero.title[0]} <br className="hidden md:block" />{t.hero.title[1]}
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-[#1a2332]/70 break-keep text-pretty">
              {t.hero.body}
            </p>
            <div className="mt-10 flex gap-4">
              <a className="rounded-full bg-[#1a2332] px-7 py-3.5 text-sm font-semibold text-white">
                {t.hero.ctaPrimary}
              </a>
              <a className="rounded-full border border-[#1a2332] px-7 py-3.5 text-sm font-semibold">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <svg viewBox="0 0 320 80" className="mt-12 h-16 w-full max-w-sm text-[#c99a3b]" fill="none">
              <polyline
                points="0,64 40,58 80,62 120,42 160,46 200,24 240,30 280,10 320,16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="320" cy="16" r="4" fill="currentColor" />
            </svg>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop"
              alt="Meridian Wealth Partners"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 bg-[#1a2332] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l} className="border-l border-[#c99a3b]/40 pl-6">
              <div className="text-4xl font-semibold tracking-tight">{s.v}</div>
              <div className="mt-2 text-xs tracking-[0.25em] text-white/60">{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.servicesSection.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl break-keep text-balance">{t.servicesSection.title}</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-[#1a2332]/10 md:grid-cols-3">
          {t.services.map((a) => (
            <div key={a.title} className="bg-[#f7f6f2] p-8 transition hover:bg-white">
              <h3 className="text-xl font-semibold tracking-tight break-keep text-balance">{a.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{a.desc}</p>
              <div className="mt-6 text-xs font-semibold tracking-widest text-[#c99a3b]">{t.viewMore}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="advisors" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.advisorsSection.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl break-keep text-balance">{t.advisorsSection.title}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.advisors.map((l) => (
              <div key={l.name}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#1a2332]/5">
                  <Image src={l.image} alt={l.name} fill className="object-cover" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight break-keep text-balance">{l.name}</h3>
                <p className="mt-1 text-xs text-[#1a2332]/60 break-keep text-pretty">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.consult.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl break-keep text-balance">
              {t.consult.title[0]} <br className="hidden md:block" />{t.consult.title[1]}
            </h2>
            <p className="mt-6 leading-relaxed text-[#1a2332]/70 break-keep text-pretty">
              {t.consult.body}
            </p>
            <dl className="mt-10 space-y-3 border-t border-[#1a2332]/10 pt-8 text-sm">
              {t.consult.rows.map((r) => (
                <div key={r.label} className="flex gap-6">
                  <dt className="w-24 font-semibold tracking-widest text-[#1a2332]/60">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <form className="rounded-sm bg-[#1a2332] p-6 text-white sm:p-10">
            <h3 className="text-2xl font-semibold tracking-tight break-keep text-balance">{t.consult.formTitle}</h3>
            <p className="mt-2 text-xs text-white/60 break-keep text-pretty">{t.consult.formNote}</p>
            <div className="mt-8 space-y-4">
              <input placeholder={t.consult.placeholders.name} className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none" />
              <input placeholder={t.consult.placeholders.phone} className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none" />
              <select className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none">
                <option className="text-[#1a2332]">{t.consult.placeholders.area.default}</option>
                <option className="text-[#1a2332]">{t.consult.placeholders.area.a1}</option>
                <option className="text-[#1a2332]">{t.consult.placeholders.area.a2}</option>
                <option className="text-[#1a2332]">{t.consult.placeholders.area.a3}</option>
              </select>
              <textarea rows={3} placeholder={t.consult.placeholders.details} className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none" />
            </div>
            <button className="mt-8 w-full bg-[#c99a3b] py-3.5 text-xs font-semibold tracking-[0.3em] text-[#1a2332]">
              {t.consult.submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#1a2332]/10 bg-[#f7f6f2] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#1a2332]/50 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold tracking-tight text-[#1a2332]">{t.brand.name}</div>
          <div className="max-w-xl md:text-right break-keep text-pretty">{t.footer} {t.disclaimer}</div>
        </div>
      </footer>
    </div>
  );
}
