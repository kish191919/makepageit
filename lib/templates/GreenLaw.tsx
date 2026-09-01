"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "GREENE LAW", tag: "ATTORNEYS AT LAW" },
    nav: { areas: "Practice Areas", lawyers: "Attorneys", cases: "Notable Cases", insights: "Insights", visit: "Contact" },
    bookCta: "Book a Consult",
    hero: {
      eyebrow: "SINCE 2009",
      title: ["Trust earned ", "through outcomes."],
      body: "Greene Law Group is a boutique firm that has handled more than 1,200 corporate and individual matters across 16 years. We look first at how not to lose — then at how to win.",
      ctaPrimary: "Book a Consult",
      ctaSecondary: "Practice Areas",
    },
    stats: [
      { v: "1,200+", l: "Matters handled" },
      { v: "16 yrs", l: "Avg. experience" },
      { v: "98%", l: "Re-engagement rate" },
      { v: "12", l: "Senior attorneys" },
    ],
    areasSection: { eyebrow: "PRACTICE AREAS", title: "What we handle" },
    areas: [
      { title: "Corporate Counsel", desc: "Outside general counsel for startups and mid-market companies; M&A and investment-document review." },
      { title: "Intellectual Property", desc: "Patent and trademark disputes, license drafting, IP-portfolio management." },
      { title: "Employment & Labor", desc: "Employment agreements, wrongful termination, EEOC, labor-board matters." },
      { title: "Litigation", desc: "Civil and commercial litigation, attachments, injunctions, enforcement." },
      { title: "Antitrust & Trade", desc: "Advertising compliance, supplier disputes, franchise litigation." },
      { title: "White Collar", desc: "Corporate criminal defense, financial-fraud cases, investigation response." },
    ],
    viewMore: "VIEW MORE →",
    casesSection: { eyebrow: "NOTABLE CASES", title: "Results, not just billing hours" },
    cases: [
      {
        tag: "Corporate · M&A",
        title: "Series B down-round restructuring for a SaaS company",
        result: "Closed in 6 weeks",
        desc: "Renegotiated liquidation preferences across three investor classes without triggering a change-of-control clause.",
      },
      {
        tag: "Intellectual Property",
        title: "Trademark infringement — mid-market apparel brand",
        result: "Full win, no appeal",
        desc: "Secured a preliminary injunction within 30 days and a full judgment before the case reached discovery.",
      },
      {
        tag: "Employment & Labor",
        title: "Multi-plaintiff wrongful-termination defense",
        result: "Dismissed pre-trial",
        desc: "Built a documentation record that got all four claims dismissed on summary judgment.",
      },
      {
        tag: "White Collar",
        title: "Corporate fraud investigation response",
        result: "No charges filed",
        desc: "Ran the internal investigation and coordinated with regulators before any indictment was sought.",
      },
    ],
    lawyersSection: { eyebrow: "LAWYERS", title: "The team" },
    lawyers: [
      {
        name: "Jonathan Greene",
        role: "Managing Partner · Harvard Law",
        bio: "Leads the firm's corporate and M&A practice; former general counsel at two venture-backed startups.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Sarah Cho",
        role: "Corporate · 12 yrs",
        bio: "Structures financing rounds and M&A deals for founders who'd rather not learn deal terms the hard way.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Daniel Park",
        role: "Litigation · 9 yrs",
        bio: "Tries commercial disputes to verdict; has argued before three state appellate courts.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Sofia Lee",
        role: "Employment & Antitrust · 7 yrs",
        bio: "Rewrites employment agreements and advertising claims so they survive the next regulatory cycle.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
      },
    ],
    testimonialsSection: { eyebrow: "CLIENT NOTES", title: "What it's like to work with us" },
    testimonials: [
      {
        quote: "They told us in the first call which two clauses actually mattered. Everything else we could negotiate away.",
        attribution: "Founder, seed-stage SaaS company",
      },
      {
        quote: "Greene Law caught a non-compete gap in our employment agreements before it became a lawsuit, not after.",
        attribution: "COO, regional retail chain",
      },
      {
        quote: "Flat answers, no billing-hour theater. We knew the likely outcome before we decided to file.",
        attribution: "Managing partner, design studio",
      },
    ],
    consult: {
      eyebrow: "CONSULTATION",
      title: ["The fastest path", "is the right consult."],
      body: "A 30-minute initial consult, free of charge. We map the matter together — most cases get worse the longer they wait.",
      rows: [
        { label: "CALL", value: "(212) 555-0188" },
        { label: "EMAIL", value: "contact@greenelaw.com" },
        { label: "ADDRESS", value: "1290 Avenue of the Americas, 9th Fl, New York NY 10104" },
      ],
      mapQuery: "1290 Avenue of the Americas, New York, NY 10104",
      formTitle: "Request a Consultation",
      formNote: "An attorney will follow up within 24 hours.",
      placeholders: {
        name: "Full name",
        phone: "Phone number",
        area: { default: "Select practice area", a1: "Corporate Counsel", a2: "Intellectual Property" },
        details: "Brief case overview",
      },
      consent: "I consent to Greene Law Group collecting and using the information above to respond to my inquiry. Records are kept for up to 1 year after the matter closes.",
      submit: "Submit Request",
      submitting: "Sending...",
      successTitle: "Request received.",
      successBody: "An attorney will follow up within 24 hours. Need it sooner? Call (212) 555-0188.",
    },
    footer: "© 2025 Greene Law Group. Attorney advertising. NY Bar Attorney Advertising Review No. 2024-11087.",
  },
  ko: {
    brand: { name: "GREEN LAW", tag: "법률사무소" },
    nav: { areas: "업무 영역", lawyers: "구성원", cases: "주요 사례", insights: "인사이트", visit: "찾아오시는 길" },
    bookCta: "상담 예약",
    hero: {
      eyebrow: "SINCE 2009",
      title: ["결과로 신뢰를", "증명합니다."],
      body: "그린 법률사무소는 16년간 1,200여 건의 기업·개인 사건을 다뤄온 변호사들이 모인 부티크 로펌입니다. 우리는 이기는 법보다 잃지 않는 법을 먼저 봅니다.",
      ctaPrimary: "상담 예약하기",
      ctaSecondary: "업무 영역 보기",
    },
    stats: [
      { v: "1,200+", l: "누적 사건" },
      { v: "16년", l: "평균 경력" },
      { v: "98%", l: "재의뢰율" },
      { v: "12명", l: "전문 변호사" },
    ],
    areasSection: { eyebrow: "PRACTICE AREAS", title: "업무 영역" },
    areas: [
      { title: "기업 자문", desc: "스타트업 · 중견기업 상시 법률 자문, M&A, 투자계약 검토." },
      { title: "지식재산권", desc: "특허·상표 분쟁, 라이선스 계약, IP 포트폴리오 관리." },
      { title: "노동·인사", desc: "근로계약, 해고·징계, 노동위 사건, 부당해고 구제." },
      { title: "분쟁·소송", desc: "민사·상사 소송, 가압류·가처분, 강제집행." },
      { title: "공정거래", desc: "표시광고, 하도급, 가맹사업 분쟁 대응." },
      { title: "형사", desc: "기업 형사, 경제범죄, 수사 단계 변호." },
    ],
    viewMore: "VIEW MORE →",
    casesSection: { eyebrow: "NOTABLE CASES", title: "숫자가 아니라 결과로" },
    cases: [
      {
        tag: "기업 자문 · M&A",
        title: "중견 IT기업 투자유치 다운라운드 구조조정",
        result: "6주 만에 종결",
        desc: "투자자 3개 그룹의 우선청산권 조건을 경영권 변동 없이 재조정해 딜을 성사시켰습니다.",
      },
      {
        tag: "지식재산권",
        title: "패션 브랜드 상표권 침해 소송",
        result: "1심 전부 승소",
        desc: "제소 30일 만에 가처분 인용을 받아냈고, 본안 소송 없이 조기 종결로 이어졌습니다.",
      },
      {
        tag: "노동·인사",
        title: "집단 부당해고 구제 신청 대응",
        result: "전건 기각",
        desc: "해고 절차 기록을 체계적으로 정리해 4건의 청구를 노동위 단계에서 모두 기각시켰습니다.",
      },
      {
        tag: "형사",
        title: "기업 횡령·배임 내사 대응",
        result: "불기소 처분",
        desc: "내부 조사를 직접 수행하고 수사기관과 조율해 기소 전 단계에서 사건을 종결했습니다.",
      },
    ],
    lawyersSection: { eyebrow: "LAWYERS", title: "구성원" },
    lawyers: [
      {
        name: "한지훈 대표변호사",
        role: "사법연수원 39기 · 서울대 법대",
        bio: "기업 자문·M&A 총괄. 벤처투자사 2곳에서 사내변호사로 근무한 경험을 바탕으로 투자 계약을 봅니다.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "조서린 변호사",
        role: "기업법무 · 12년차",
        bio: "투자 라운드와 M&A 딜 구조를 설계합니다. 계약서 조항 하나가 나중에 어떻게 돌아오는지 압니다.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "윤재훈 변호사",
        role: "분쟁·소송 · 9년차",
        bio: "상사 소송을 판결까지 끌고 가는 소송 변호사. 항소심에서도 다수 승소 경험이 있습니다.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "임소연 변호사",
        role: "노동·공정거래 · 7년차",
        bio: "근로계약과 광고 표시 조항을 다음 심사 주기까지 버티도록 다시 씁니다.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
      },
    ],
    testimonialsSection: { eyebrow: "CLIENT NOTES", title: "함께 일해본 분들의 이야기" },
    testimonials: [
      {
        quote: "첫 상담에서 정말 중요한 조항 두 개만 짚어주셨어요. 나머지는 협상해도 되는 것들이었습니다.",
        attribution: "시드 단계 SaaS 스타트업 대표",
      },
      {
        quote: "근로계약서의 경업금지 조항 공백을 소송이 되기 전에 먼저 찾아주셨습니다.",
        attribution: "지역 유통 체인 COO",
      },
      {
        quote: "화려한 말 대신 결과를 먼저 보여주셨어요. 소송 여부를 결정하기 전에 이미 예상 결과를 알 수 있었습니다.",
        attribution: "디자인 스튜디오 대표",
      },
    ],
    consult: {
      eyebrow: "CONSULTATION",
      title: ["가장 빠른 길은,", "가장 정확한 상담입니다."],
      body: "30분 무료 초기 상담을 통해 사건의 큰 흐름을 함께 정리합니다. 시간이 지나면 손해가 되는 사건이 많습니다.",
      rows: [
        { label: "CALL", value: "02-6952-4871" },
        { label: "EMAIL", value: "contact@greenlaw.kr" },
        { label: "ADDRESS", value: "서울 서초구 법원로 15, 정림빌딩 8층" },
      ],
      mapQuery: "서울 서초구 법원로 15",
      formTitle: "상담 신청서",
      formNote: "담당 변호사가 24시간 내 연락드립니다.",
      placeholders: {
        name: "성함",
        phone: "연락처",
        area: { default: "사건 분야 선택", a1: "기업 자문", a2: "지식재산권" },
        details: "간단한 사건 개요",
      },
      consent: "개인정보 수집·이용에 동의합니다. (수집 항목: 성함, 연락처 / 보유기간: 상담 종료 후 1년)",
      submit: "상담 신청하기",
      submitting: "접수 중...",
      successTitle: "상담 신청이 접수되었습니다",
      successBody: "담당 변호사가 24시간 내 연락드립니다. 급하신 경우 02-6952-4871로 전화 주세요.",
    },
    footer: "© 2025 그린 법률사무소. 변호사 광고 심의필. 대한변호사협회 광고심사 제2024-000123호.",
  },
} as const;

export default function GreenLaw({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const navPaths = {
    areas: localePath(lang, "/portfolio/green-law/areas"),
    cases: localePath(lang, "/portfolio/green-law/cases"),
    lawyers: localePath(lang, "/portfolio/green-law/lawyers"),
    insights: localePath(lang, "/portfolio/green-law/insights"),
    visit: localePath(lang, "/portfolio/green-law/visit"),
  } as const;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleConsultSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <div className="bg-white text-[#0b1a2a]">
      <header ref={ref} className="border-b border-[#0b1a2a]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0b1a2a] font-serif text-sm text-white">GL</span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#0b1a2a]/60">{t.brand.tag}</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-medium text-[#0b1a2a]/80 md:flex">
            <Link href={navPaths.areas} className="transition hover:text-[#0b1a2a]">{t.nav.areas}</Link>
            <Link href={navPaths.cases} className="transition hover:text-[#0b1a2a]">{t.nav.cases}</Link>
            <Link href={navPaths.lawyers} className="transition hover:text-[#0b1a2a]">{t.nav.lawyers}</Link>
            <Link href={navPaths.insights} className="transition hover:text-[#0b1a2a]">{t.nav.insights}</Link>
            <Link href={navPaths.visit} className="transition hover:text-[#0b1a2a]">{t.nav.visit}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={navPaths.visit} className="rounded-sm bg-[#0b1a2a] px-5 py-2.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#152a42]">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#0b1a2a]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#0b1a2a]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#0b1a2a]/80">
              <Link href={navPaths.areas} onClick={() => setOpen(false)} className="py-2">{t.nav.areas}</Link>
              <Link href={navPaths.cases} onClick={() => setOpen(false)} className="py-2">{t.nav.cases}</Link>
              <Link href={navPaths.lawyers} onClick={() => setOpen(false)} className="py-2">{t.nav.lawyers}</Link>
              <Link href={navPaths.insights} onClick={() => setOpen(false)} className="py-2">{t.nav.insights}</Link>
              <Link href={navPaths.visit} onClick={() => setOpen(false)} className="py-2">{t.nav.visit}</Link>
            </nav>
            <Link
              href={navPaths.visit}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-sm bg-[#0b1a2a] px-5 py-2.5 text-xs font-semibold tracking-widest text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f4ee]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center md:py-32">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.hero.eyebrow}</p>
            <h1 className="mt-6 font-serif text-4xl leading-[1.15] md:text-6xl break-keep text-balance">
              {t.hero.title[0]}<br className="hidden md:block" />{t.hero.title[1]}
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">
              {t.hero.body}
            </p>
            <div className="mt-10 flex gap-4">
              <Link href={navPaths.visit} className="rounded-sm bg-[#0b1a2a] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#152a42]">
                {t.hero.ctaPrimary}
              </Link>
              <Link href={navPaths.areas} className="rounded-sm border border-[#0b1a2a] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#0b1a2a] hover:text-white">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80&auto=format&fit=crop"
              alt="Greene Law"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0b1a2a] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l} className="border-l border-white/20 pl-6">
              <div className="font-serif text-4xl">{s.v}</div>
              <div className="mt-2 text-xs tracking-[0.3em] text-white/60">{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="areas" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.areasSection.eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl break-keep text-balance">{t.areasSection.title}</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-[#0b1a2a]/10 md:grid-cols-3">
          {t.areas.map((a) => (
            <div key={a.title} className="bg-white p-8 transition hover:bg-[#f5f4ee]">
              <h3 className="font-serif text-2xl break-keep text-balance">{a.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{a.desc}</p>
              <div className="mt-6 text-xs font-semibold tracking-widest text-[#7c8c47]">{t.viewMore}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" className="scroll-mt-24 bg-[#f5f4ee] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.casesSection.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl break-keep text-balance">{t.casesSection.title}</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {t.cases.map((c) => (
              <div key={c.title} className="rounded-sm border border-[#0b1a2a]/10 bg-white p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold tracking-widest text-[#7c8c47]">{c.tag}</p>
                  <span className="shrink-0 rounded-full bg-[#0b1a2a] px-3 py-1 text-[10px] font-semibold tracking-widest text-white">
                    {c.result}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-snug break-keep text-balance">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lawyers" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.lawyersSection.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl break-keep text-balance">{t.lawyersSection.title}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.lawyers.map((l) => (
              <div key={l.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0b1a2a]/5">
                  <Image src={l.image} alt={l.name} fill className="object-cover grayscale" />
                </div>
                <h3 className="mt-5 font-serif text-xl break-keep text-balance">{l.name}</h3>
                <p className="mt-1 text-xs text-[#0b1a2a]/60">{l.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-[#0b1a2a]/60 break-keep text-pretty">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f4ee] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.testimonialsSection.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl break-keep text-balance">{t.testimonialsSection.title}</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.testimonials.map((q) => (
              <figure key={q.attribution} className="rounded-sm bg-white p-8">
                <blockquote className="font-serif text-lg leading-snug break-keep text-balance">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-5 text-xs font-semibold tracking-widest text-[#0b1a2a]/60">
                  {q.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.consult.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl break-keep text-balance">
              {t.consult.title[0]}<br className="hidden md:block" />{t.consult.title[1]}
            </h2>
            <p className="mt-6 leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">
              {t.consult.body}
            </p>
            <dl className="mt-10 space-y-3 border-t border-[#0b1a2a]/10 pt-8 text-sm">
              {t.consult.rows.map((r) => (
                <div key={r.label} className="flex gap-6">
                  <dt className="w-24 font-semibold tracking-widest text-[#0b1a2a]/60">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 aspect-video overflow-hidden rounded-sm border border-[#0b1a2a]/10">
              <iframe
                title={t.consult.rows[2].value}
                src={`https://www.google.com/maps?q=${encodeURIComponent(t.consult.mapQuery)}&output=embed`}
                className="h-full w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          {submitted ? (
            <div className="rounded-sm bg-[#0b1a2a] p-10 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c8c47] text-xl">✓</div>
              <h3 className="mt-6 font-serif text-2xl break-keep text-balance">{t.consult.successTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 break-keep text-pretty">{t.consult.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleConsultSubmit} className="rounded-sm bg-[#0b1a2a] p-10 text-white">
              <h3 className="font-serif text-2xl break-keep text-balance">{t.consult.formTitle}</h3>
              <p className="mt-2 text-xs text-white/60 break-keep text-pretty">{t.consult.formNote}</p>
              <div className="mt-8 space-y-4">
                <input
                  required
                  name="name"
                  placeholder={t.consult.placeholders.name}
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder={t.consult.placeholders.phone}
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
                />
                <select
                  required
                  name="area"
                  defaultValue=""
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none"
                >
                  <option value="" disabled className="text-[#0b1a2a]">{t.consult.placeholders.area.default}</option>
                  <option className="text-[#0b1a2a]">{t.consult.placeholders.area.a1}</option>
                  <option className="text-[#0b1a2a]">{t.consult.placeholders.area.a2}</option>
                </select>
                <textarea
                  required
                  rows={3}
                  name="details"
                  placeholder={t.consult.placeholders.details}
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
                />
              </div>
              <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-white/60">
                <input required type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 border-white/30 bg-transparent" />
                <span>{t.consult.consent}</span>
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full bg-white py-3.5 text-xs font-semibold tracking-[0.3em] text-[#0b1a2a] transition hover:bg-white/90 disabled:cursor-wait disabled:opacity-70"
              >
                {submitting ? t.consult.submitting : t.consult.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-[#0b1a2a]/10 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#0b1a2a]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#0b1a2a]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
