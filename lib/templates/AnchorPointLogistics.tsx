"use client";

import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "ANCHOR POINT", tag: "LOGISTICS & FREIGHT" },
    nav: { services: "Services", coverage: "Coverage", tracking: "Tracking", industries: "Industries", contact: "Contact" },
    quoteCta: "Get a Rate Quote",
    hero: {
      eyebrow: "FMCSA LICENSED · FULL FLEET INSURANCE",
      title: ["On time,", "every route."],
      body: "Anchor Point Logistics moves freight, warehouses inventory, and runs last-mile delivery across the Pacific Northwest — with live tracking on every load, from pickup to signature.",
      ctaPrimary: "Get a Rate Quote",
      ctaSecondary: "Track a Shipment",
    },
    stats: [
      { v: "98.4%", l: "On-time delivery" },
      { v: "140+", l: "Trucks in fleet" },
      { v: "6 states", l: "Regional coverage" },
      { v: "24/7", l: "Dispatch support" },
    ],
    servicesSection: { eyebrow: "SERVICES", title: "What we move" },
    services: [
      { title: "Full Truckload (FTL)", desc: "Dedicated trailers for time-sensitive, high-volume freight." },
      { title: "Less-Than-Truckload (LTL)", desc: "Consolidated shipping for smaller loads at lower cost." },
      { title: "Warehousing", desc: "Climate-controlled storage with real-time inventory visibility." },
      { title: "Last-Mile Delivery", desc: "Scheduled, white-glove delivery direct to the end customer." },
      { title: "Cold Chain", desc: "Temperature-monitored transport for perishable and pharma freight." },
      { title: "Cross-Docking", desc: "Fast transfer between inbound and outbound loads, no storage delay." },
    ],
    coverageSection: { eyebrow: "COVERAGE", title: "Where we run" },
    coverage: ["Oregon", "Washington", "Idaho", "Montana", "Northern California", "Nevada"],
    tracking: {
      eyebrow: "LIVE TRACKING",
      title: "Know exactly where your freight is",
      body: "Every load gets a tracking link the moment it's dispatched — GPS location, ETA, and proof of delivery, no phone calls needed.",
      fields: [
        { label: "Tracking Number", value: "APL-2026-889231" },
        { label: "Status", value: "In Transit · On Schedule" },
        { label: "Current Location", value: "I-84 near Pendleton, OR" },
        { label: "ETA", value: "Sep 2, 2026 · 3:40 PM" },
      ],
      submit: "Track Shipment →",
    },
    industriesSection: { eyebrow: "INDUSTRIES", title: "Who we serve" },
    industries: ["Manufacturing", "Retail & E-commerce", "Food & Beverage", "Healthcare & Pharma", "Construction Materials", "Agriculture"],
    consult: {
      eyebrow: "GET A RATE QUOTE",
      title: ["Tell us the lane.", "We'll send back a rate."],
      body: "Origin, destination, and freight type — most quotes go out within 2 business hours.",
      rows: [
        { label: "CALL", value: "(503) 555-0164" },
        { label: "EMAIL", value: "dispatch@anchorpointlogistics.com" },
        { label: "TERMINAL", value: "2210 Freight Way, Portland, OR 97218" },
      ],
      formTitle: "Request a Rate Quote",
      formNote: "Our dispatch team responds within 2 business hours.",
      placeholders: {
        company: "Company name",
        email: "Email address",
        lane: "Origin → Destination",
        type: { default: "Select freight type", t1: "Full Truckload", t2: "LTL", t3: "Cold Chain", t4: "Warehousing", t5: "Other" },
      },
      submit: "Request Quote",
    },
    footer: "© 2026 Anchor Point Logistics. FMCSA Licensed Carrier · DOT #3402187.",
  },
  ko: {
    brand: { name: "ANCHOR POINT", tag: "앵커포인트 물류" },
    nav: { services: "서비스", coverage: "운행 지역", tracking: "화물 추적", industries: "적용 산업", contact: "견적 문의" },
    quoteCta: "운임 견적 받기",
    hero: {
      eyebrow: "화물운송사업 등록 · 전 차량 보험 가입",
      title: ["정확한 시간,", "모든 노선에."],
      body: "앵커포인트 물류는 화물 운송, 창고 보관, 라스트마일 배송까지 태평양 북서부 전역에서 운영합니다. 픽업부터 서명 완료까지 모든 화물을 실시간으로 추적할 수 있습니다.",
      ctaPrimary: "운임 견적 받기",
      ctaSecondary: "화물 추적하기",
    },
    stats: [
      { v: "98.4%", l: "정시 배송률" },
      { v: "140대+", l: "보유 차량" },
      { v: "6개 주", l: "운행 권역" },
      { v: "24/7", l: "배차 지원" },
    ],
    servicesSection: { eyebrow: "SERVICES", title: "취급 화물" },
    services: [
      { title: "전세 화물(FTL)", desc: "시간에 민감한 대량 화물을 위한 전용 트레일러 운송." },
      { title: "혼적 화물(LTL)", desc: "소량 화물을 통합 운송해 비용을 절감합니다." },
      { title: "창고 보관", desc: "실시간 재고 확인이 가능한 항온·항습 보관 서비스." },
      { title: "라스트마일 배송", desc: "최종 고객까지 일정 예약형 프리미엄 배송." },
      { title: "콜드체인", desc: "신선식품·의약품을 위한 온도 모니터링 운송." },
      { title: "크로스도킹", desc: "보관 지연 없이 입고와 출고를 빠르게 연계합니다." },
    ],
    coverageSection: { eyebrow: "COVERAGE", title: "운행 지역" },
    coverage: ["오리건", "워싱턴", "아이다호", "몬태나", "북부 캘리포니아", "네바다"],
    tracking: {
      eyebrow: "실시간 추적",
      title: "화물 위치를 정확하게 확인하세요",
      body: "배차 즉시 추적 링크가 발급됩니다. GPS 위치, 도착 예정 시간, 배송 완료 서명까지 전화 없이 바로 확인 가능합니다.",
      fields: [
        { label: "운송장 번호", value: "APL-2026-889231" },
        { label: "상태", value: "운송 중 · 정상 진행" },
        { label: "현재 위치", value: "I-84 펜들턴 인근, OR" },
        { label: "도착 예정", value: "2026-09-02 15:40" },
      ],
      submit: "화물 추적하기 →",
    },
    industriesSection: { eyebrow: "INDUSTRIES", title: "적용 산업" },
    industries: ["제조업", "리테일·이커머스", "식음료", "헬스케어·제약", "건설자재", "농축산"],
    consult: {
      eyebrow: "운임 견적 문의",
      title: ["출발지와 도착지를 알려주세요.", "운임으로 답해드립니다."],
      body: "출발지, 도착지, 화물 유형만 알려주시면 영업일 기준 2시간 이내 견적을 보내드립니다.",
      rows: [
        { label: "전화", value: "02-XXX-XXXX" },
        { label: "이메일", value: "dispatch@anchorpointlogistics.com" },
        { label: "터미널", value: "인천광역시 서구 물류로 ○○○" },
      ],
      formTitle: "운임 견적 요청서",
      formNote: "배차팀이 영업일 기준 2시간 이내 회신드립니다.",
      placeholders: {
        company: "회사명",
        email: "이메일 주소",
        lane: "출발지 → 도착지",
        type: { default: "화물 유형 선택", t1: "전세 화물(FTL)", t2: "혼적 화물(LTL)", t3: "콜드체인", t4: "창고 보관", t5: "기타" },
      },
      submit: "견적 요청하기",
    },
    footer: "© 2026 Anchor Point Logistics. 화물자동차 운송사업 등록 · 사업자 #3402187.",
  },
} as const;

export default function AnchorPointLogistics({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.coverage, href: "#coverage" },
    { label: t.nav.tracking, href: "#tracking" },
    { label: t.nav.industries, href: "#industries" },
    { label: t.nav.contact, href: "#contact" },
  ];
  return (
    <div className="bg-[#0f1b2d] text-[#eef2f7]">
      <header ref={ref} className="border-b border-white/10 bg-[#0a1420]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#3d8bff] font-black text-base text-[#0a1420]">A</span>
            <div>
              <div className="font-black text-lg uppercase leading-none tracking-tight">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-white/50">{t.brand.tag}</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-semibold uppercase tracking-wide text-white/70 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">{item.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden bg-[#3d8bff] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#0a1420] sm:inline-block">
              {t.quoteCta}
            </a>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center border border-white/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wide text-white/70">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="py-2">
                  {item.label}
                </a>
              ))}
            </nav>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-3 inline-block bg-[#3d8bff] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#0a1420]">
              {t.quoteCta}
            </a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 md:grid-cols-[1.15fr_1fr] md:items-center md:py-32">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3d8bff]">{t.hero.eyebrow}</p>
            <h1 className="mt-6 font-black uppercase leading-[1.05] tracking-tight text-4xl md:text-6xl break-keep text-balance">
              {t.hero.title[0]} <br className="hidden md:block" />{t.hero.title[1]}
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-white/70 break-keep text-pretty">
              {t.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="bg-[#3d8bff] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0a1420]">
                {t.hero.ctaPrimary}
              </a>
              <a className="border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80&auto=format&fit=crop"
              alt="Anchor Point Logistics"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#3d8bff] py-14 text-[#0a1420]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l} className="border-l-2 border-[#0a1420]/30 pl-6">
              <div className="font-black text-3xl uppercase tracking-tight md:text-4xl">{s.v}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0a1420]/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3d8bff]">{t.servicesSection.eyebrow}</p>
        <h2 className="mt-3 font-black uppercase tracking-tight text-4xl md:text-5xl break-keep text-balance">{t.servicesSection.title}</h2>
        <div className="mt-14 grid gap-px overflow-hidden bg-white/10 md:grid-cols-3">
          {t.services.map((s) => (
            <div key={s.title} className="bg-[#0f1b2d] p-8 transition hover:bg-[#152437]">
              <h3 className="font-black uppercase tracking-tight text-xl break-keep text-balance">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60 break-keep text-pretty">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="coverage" className="scroll-mt-24 border-y border-white/10 bg-[#0a1420] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3d8bff]">{t.coverageSection.eyebrow}</p>
          <h2 className="mt-3 font-black uppercase tracking-tight text-3xl md:text-5xl break-keep text-balance">{t.coverageSection.title}</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.coverage.map((c) => (
              <span key={c} className="border border-[#3d8bff]/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#3d8bff]">
                {c}
              </span>
            ))}
          </div>
          <p id="industries" className="mt-8 scroll-mt-24 text-xs font-bold uppercase tracking-[0.3em] text-[#3d8bff]">{t.industriesSection.eyebrow}</p>
          <h3 className="mt-2 font-black uppercase tracking-tight text-xl break-keep text-balance">{t.industriesSection.title}</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {t.industries.map((c) => (
              <span key={c} className="border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="tracking" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#3d8bff] to-[#1c5fc7] p-10 text-[#0a1420] md:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0a1420]/70">{t.tracking.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl break-keep text-balance">{t.tracking.title}</h2>
          <p className="mt-3 max-w-md text-[#0a1420]/80 break-keep text-pretty">{t.tracking.body}</p>
          <div className="mt-10 grid gap-4 rounded-2xl bg-white/20 p-6 backdrop-blur sm:grid-cols-2">
            {t.tracking.fields.map((f) => (
              <div key={f.label} className="block">
                <span className="text-xs font-semibold text-[#0a1420]/60">{f.label}</span>
                <div className="mt-2 rounded-lg bg-white/60 px-4 py-3 text-sm font-semibold">{f.value}</div>
              </div>
            ))}
          </div>
          <button className="mt-6 rounded-full bg-[#0a1420] px-6 py-3 text-sm font-semibold text-white">
            {t.tracking.submit}
          </button>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-[#0a1420] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3d8bff]">{t.consult.eyebrow}</p>
              <h2 className="mt-3 font-black uppercase leading-tight tracking-tight text-3xl md:text-5xl break-keep text-balance">
                {t.consult.title[0]} <br className="hidden md:block" />{t.consult.title[1]}
              </h2>
              <p className="mt-6 leading-relaxed text-white/70 break-keep text-pretty">
                {t.consult.body}
              </p>
              <dl className="mt-10 space-y-3 border-t border-white/10 pt-8 text-sm">
                {t.consult.rows.map((r) => (
                  <div key={r.label} className="flex gap-6">
                    <dt className="w-24 font-bold uppercase tracking-widest text-white/50">{r.label}</dt>
                    <dd className="text-white/80">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <form className="border border-[#3d8bff]/40 bg-[#0f1b2d] p-6 sm:p-10">
              <h3 className="font-black uppercase tracking-tight text-2xl break-keep text-balance">{t.consult.formTitle}</h3>
              <p className="mt-2 text-xs text-white/50 break-keep text-pretty">{t.consult.formNote}</p>
              <div className="mt-8 space-y-4">
                <input placeholder={t.consult.placeholders.company} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
                <input placeholder={t.consult.placeholders.email} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
                <input placeholder={t.consult.placeholders.lane} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
                <select className="w-full border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none">
                  <option className="text-[#0a1420]">{t.consult.placeholders.type.default}</option>
                  <option className="text-[#0a1420]">{t.consult.placeholders.type.t1}</option>
                  <option className="text-[#0a1420]">{t.consult.placeholders.type.t2}</option>
                  <option className="text-[#0a1420]">{t.consult.placeholders.type.t3}</option>
                  <option className="text-[#0a1420]">{t.consult.placeholders.type.t4}</option>
                  <option className="text-[#0a1420]">{t.consult.placeholders.type.t5}</option>
                </select>
              </div>
              <button className="mt-8 w-full bg-[#3d8bff] py-3.5 text-xs font-bold uppercase tracking-[0.3em] text-[#0a1420]">
                {t.consult.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0a1420] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div className="font-black uppercase tracking-tight text-sm text-white">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
