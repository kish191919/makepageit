"use client";

import Image from "next/image";
import { useState } from "react";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { name: "RIDGELINE", tag: "CONSTRUCTION & REMODELING" },
    nav: { services: "Services", projects: "Projects", process: "Process", reviews: "Reviews", contact: "Contact" },
    quoteCta: "Get a Free Estimate",
    hero: {
      eyebrow: "LICENSED · BONDED · INSURED",
      title: ["Built right,", "the first time."],
      body: "Ridgeline Construction & Remodeling handles kitchen and bath remodels, additions, and full custom builds — one crew, start to finish, with a fixed price before we break ground.",
      ctaPrimary: "Get a Free Estimate",
      ctaSecondary: "See Our Projects",
    },
    stats: [
      { v: "18 yrs", l: "In business" },
      { v: "540+", l: "Projects completed" },
      { v: "Lic. #CR-40921", l: "General contractor" },
      { v: "5-yr", l: "Workmanship warranty" },
    ],
    servicesSection: { eyebrow: "SERVICES", title: "What we build" },
    services: [
      { title: "Kitchen Remodels", desc: "Layout redesign, custom cabinetry, and full mechanical updates." },
      { title: "Bathroom Remodels", desc: "Tile, walk-in showers, and accessibility-friendly layouts." },
      { title: "Home Additions", desc: "Second stories, in-law suites, and permitted square footage." },
      { title: "Custom Builds", desc: "Ground-up residential builds, from design through final walkthrough." },
      { title: "Decks & Outdoor Living", desc: "Composite and cedar decks, pergolas, and outdoor kitchens." },
      { title: "Commercial Buildout", desc: "Tenant improvements and retail buildouts on tight timelines." },
    ],
    projectsSection: { eyebrow: "PROJECTS", title: "Recent work" },
    projects: [
      { title: "Maple Street Kitchen", tag: "Full remodel · 6 weeks" },
      { title: "Cedar Ridge Addition", tag: "620 sq ft second story" },
      { title: "Hillcrest Primary Bath", tag: "Full gut · 3 weeks" },
    ],
    processSection: { eyebrow: "PROCESS", title: "How a project runs" },
    process: [
      { step: "01", title: "Walkthrough & Estimate", desc: "We visit the site and hand you a fixed-price estimate within 5 business days." },
      { step: "02", title: "Design & Permitting", desc: "Finalize materials and layout, then pull permits — we handle the paperwork." },
      { step: "03", title: "Build", desc: "One dedicated crew and a weekly progress update, start to finish." },
      { step: "04", title: "Final Walkthrough", desc: "Punch-list sign-off together, backed by a 5-year workmanship warranty." },
    ],
    reviewsTitle: "What homeowners say",
    reviews: [
      { rating: 5, text: "Fixed price, no change-order surprises. Came in exactly on the timeline they gave us.", who: "Kitchen remodel, Maple Street" },
      { rating: 5, text: "Weekly photo updates meant we always knew where things stood, even mid-build.", who: "Addition, Cedar Ridge" },
      { rating: 5, text: "Cleaned up every single day. Genuinely felt like our house the whole time.", who: "Bathroom remodel, Hillcrest" },
    ],
    consult: {
      eyebrow: "GET A FREE ESTIMATE",
      title: ["Tell us about the project.", "We'll give you a real number."],
      body: "Share a few details and photos if you have them — most estimates go out within 5 business days of a site visit.",
      rows: [
        { label: "CALL", value: "(541) 555-0173" },
        { label: "EMAIL", value: "estimates@ridgelinebuilds.com" },
        { label: "OFFICE", value: "1120 Ridgeline Dr, Bend, OR 97701" },
      ],
      formTitle: "Request an Estimate",
      formNote: "We'll reach out within one business day to schedule a walkthrough.",
      placeholders: {
        name: "Full name",
        phone: "Phone number",
        type: { default: "Select project type", t1: "Kitchen Remodel", t2: "Bathroom Remodel", t3: "Addition", t4: "Custom Build", t5: "Other" },
        details: "Tell us about the project and rough timeline",
      },
      submit: "Request Estimate",
    },
    footer: "© 2026 Ridgeline Construction & Remodeling. Licensed General Contractor #CR-40921.",
  },
  ko: {
    brand: { name: "RIDGELINE", tag: "리지라인 건설·리모델링" },
    nav: { services: "시공 분야", projects: "시공 사례", process: "진행 절차", reviews: "고객 후기", contact: "견적 문의" },
    quoteCta: "무료 견적 받기",
    hero: {
      eyebrow: "정식 면허 · 보증보험 가입 시공사",
      title: ["한 번에 제대로,", "리지라인이 시공합니다."],
      body: "주방·욕실 리모델링부터 증축, 신축까지 한 팀이 처음부터 끝까지 책임집니다. 착공 전 확정 견적서를 먼저 드립니다.",
      ctaPrimary: "무료 견적 받기",
      ctaSecondary: "시공 사례 보기",
    },
    stats: [
      { v: "18년", l: "업력" },
      { v: "540건+", l: "누적 시공 건수" },
      { v: "면허 #CR-40921", l: "종합건설업 등록" },
      { v: "5년", l: "시공 보증기간" },
    ],
    servicesSection: { eyebrow: "SERVICES", title: "시공 분야" },
    services: [
      { title: "주방 리모델링", desc: "동선 재설계, 맞춤 캐비닛, 배관·전기 전면 교체." },
      { title: "욕실 리모델링", desc: "타일 시공, 워크인 샤워, 편의성을 고려한 구조 개선." },
      { title: "증축", desc: "2층 증축, 세컨하우스, 인허가까지 포함한 면적 확장." },
      { title: "신축", desc: "설계부터 최종 인도까지 책임지는 단독주택 신축." },
      { title: "데크 · 야외공간", desc: "합성목재·시더 데크, 퍼걸러, 야외 주방 시공." },
      { title: "상업공간 인테리어", desc: "촉박한 일정에도 대응하는 매장·사무공간 시공." },
    ],
    projectsSection: { eyebrow: "PROJECTS", title: "최근 시공 사례" },
    projects: [
      { title: "메이플 스트리트 주방", tag: "전체 리모델링 · 6주 소요" },
      { title: "시더릿지 증축", tag: "2층 증축 약 17평" },
      { title: "힐크레스트 안방 욕실", tag: "전체 철거 후 재시공 · 3주" },
    ],
    processSection: { eyebrow: "PROCESS", title: "진행 절차" },
    process: [
      { step: "01", title: "현장 방문 · 견적", desc: "현장 실사 후 영업일 기준 5일 이내 확정 견적서를 전달합니다." },
      { step: "02", title: "설계 · 인허가", desc: "자재와 도면을 확정하고 인허가 서류까지 저희가 직접 처리합니다." },
      { step: "03", title: "시공", desc: "전담팀이 배정되어 주간 단위로 진행 상황을 사진과 함께 공유합니다." },
      { step: "04", title: "최종 인도", desc: "하자 체크리스트를 함께 확인하며, 5년 시공 보증이 함께 제공됩니다." },
    ],
    reviewsTitle: "고객 후기",
    reviews: [
      { rating: 5, text: "처음 받은 견적 그대로 진행됐고, 약속한 일정에 정확히 끝났습니다.", who: "메이플 스트리트 주방 리모델링" },
      { rating: 5, text: "매주 사진으로 진행 상황을 공유해주셔서 공사 중에도 불안하지 않았어요.", who: "시더릿지 증축" },
      { rating: 5, text: "매일 정리정돈까지 깔끔하게 하고 가셔서 공사 중에도 생활이 크게 불편하지 않았습니다.", who: "힐크레스트 욕실 리모델링" },
    ],
    consult: {
      eyebrow: "무료 견적 문의",
      title: ["프로젝트를 알려주세요.", "정확한 견적으로 답해드립니다."],
      body: "간단한 내용과 사진을 남겨주시면, 현장 방문 후 영업일 기준 5일 이내 견적서를 보내드립니다.",
      rows: [
        { label: "전화", value: "02-XXX-XXXX" },
        { label: "이메일", value: "estimates@ridgelinebuilds.com" },
        { label: "사무실", value: "경기도 성남시 분당구 판교로 ○○○" },
      ],
      formTitle: "견적 요청서",
      formNote: "영업일 기준 1일 이내 연락드려 방문 일정을 잡습니다.",
      placeholders: {
        name: "성함",
        phone: "연락처",
        type: { default: "시공 분야 선택", t1: "주방 리모델링", t2: "욕실 리모델링", t3: "증축", t4: "신축", t5: "기타" },
        details: "시공 내용과 희망 일정을 알려주세요",
      },
      submit: "견적 요청하기",
    },
    footer: "© 2026 Ridgeline Construction & Remodeling. 종합건설업 면허 #CR-40921.",
  },
} as const;

export default function RidgelineConstruction({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.contact, href: "#contact" },
  ];
  return (
    <div className="bg-[#211f1c] text-[#f4f1ea]">
      <header className="border-b border-white/10 bg-[#1a1815]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#d97f2e] font-black text-base text-[#1a1815]">R</span>
            <div>
              <div className="font-black text-lg uppercase leading-none tracking-tight">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-white/50">{t.brand.tag}</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-semibold uppercase tracking-wide text-white/70 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden bg-[#d97f2e] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1a1815] sm:inline-block">
              {t.quoteCta}
            </a>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center border border-white/20 md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wide text-white/70">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="py-2" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-block bg-[#d97f2e] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1a1815]"
            >
              {t.quoteCta}
            </a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 md:grid-cols-[1.15fr_1fr] md:items-center md:py-32">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d97f2e]">{t.hero.eyebrow}</p>
            <h1 className="mt-6 font-black uppercase leading-[1.05] tracking-tight text-4xl md:text-6xl break-keep text-balance">
              {t.hero.title[0]} <br className="hidden md:block" />{t.hero.title[1]}
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-white/70 break-keep text-pretty">
              {t.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="bg-[#d97f2e] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#1a1815]">
                {t.hero.ctaPrimary}
              </a>
              <a className="border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop"
              alt="Ridgeline Construction & Remodeling"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#d97f2e] py-14 text-[#1a1815]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l} className="border-l-2 border-[#1a1815]/30 pl-6">
              <div className="font-black text-3xl uppercase tracking-tight md:text-4xl">{s.v}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1a1815]/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d97f2e]">{t.servicesSection.eyebrow}</p>
        <h2 className="mt-3 font-black uppercase tracking-tight text-4xl md:text-5xl break-keep text-balance">{t.servicesSection.title}</h2>
        <div className="mt-14 grid gap-px overflow-hidden bg-white/10 md:grid-cols-3">
          {t.services.map((s) => (
            <div key={s.title} className="bg-[#211f1c] p-8 transition hover:bg-[#2a2722]">
              <h3 className="font-black uppercase tracking-tight text-xl break-keep text-balance">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60 break-keep text-pretty">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-y border-white/10 bg-[#1a1815] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d97f2e]">{t.projectsSection.eyebrow}</p>
          <h2 className="mt-3 font-black uppercase tracking-tight text-3xl md:text-5xl break-keep text-balance">{t.projectsSection.title}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&auto=format&fit=crop",
            ].map((src, i) => (
              <div key={src} className="overflow-hidden border border-white/10">
                <div className="relative aspect-[4/3]">
                  <Image src={src} alt={t.projects[i].title} fill className="object-cover" />
                </div>
                <div className="bg-[#211f1c] p-5">
                  <h3 className="font-black uppercase tracking-tight text-base break-keep text-balance">{t.projects[i].title}</h3>
                  <p className="mt-1 text-xs text-white/50 break-keep text-pretty">{t.projects[i].tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d97f2e]">{t.processSection.eyebrow}</p>
        <h2 className="mt-3 font-black uppercase tracking-tight text-3xl md:text-5xl break-keep text-balance">{t.processSection.title}</h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.map((p) => (
            <div key={p.step}>
              <div className="font-black text-3xl text-[#d97f2e]">{p.step}</div>
              <h3 className="mt-4 font-black uppercase tracking-tight text-lg break-keep text-balance">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60 break-keep text-pretty">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 border-y border-white/10 bg-[#1a1815] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-black uppercase tracking-tight text-2xl md:text-3xl break-keep text-balance">{t.reviewsTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.reviews.map((r, i) => (
              <div key={i} className="border border-white/10 p-6">
                <div className="text-[#d97f2e]">{"★".repeat(r.rating)}</div>
                <p className="mt-4 text-sm leading-relaxed text-white/70 break-keep text-pretty">“{r.text}”</p>
                <p className="mt-5 text-xs text-white/40">— {r.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d97f2e]">{t.consult.eyebrow}</p>
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
          <form className="border border-[#d97f2e]/40 bg-[#1a1815] p-6 sm:p-10">
            <h3 className="font-black uppercase tracking-tight text-2xl break-keep text-balance">{t.consult.formTitle}</h3>
            <p className="mt-2 text-xs text-white/50 break-keep text-pretty">{t.consult.formNote}</p>
            <div className="mt-8 space-y-4">
              <input placeholder={t.consult.placeholders.name} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
              <input placeholder={t.consult.placeholders.phone} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
              <select className="w-full border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none">
                <option className="text-[#1a1815]">{t.consult.placeholders.type.default}</option>
                <option className="text-[#1a1815]">{t.consult.placeholders.type.t1}</option>
                <option className="text-[#1a1815]">{t.consult.placeholders.type.t2}</option>
                <option className="text-[#1a1815]">{t.consult.placeholders.type.t3}</option>
                <option className="text-[#1a1815]">{t.consult.placeholders.type.t4}</option>
                <option className="text-[#1a1815]">{t.consult.placeholders.type.t5}</option>
              </select>
              <textarea rows={3} placeholder={t.consult.placeholders.details} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
            </div>
            <button className="mt-8 w-full bg-[#d97f2e] py-3.5 text-xs font-bold uppercase tracking-[0.3em] text-[#1a1815]">
              {t.consult.submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#1a1815] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div className="font-black uppercase tracking-tight text-sm text-white">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
