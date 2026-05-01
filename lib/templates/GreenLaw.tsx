import Image from "next/image";
import type { Lang } from "@/lib/i18n";

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
    lawyersSection: { eyebrow: "LAWYERS", title: "The team" },
    lawyers: [
      {
        name: "Jonathan Greene",
        role: "Managing Partner · Harvard Law",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Sarah Cho",
        role: "Corporate · 12 yrs",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Daniel Park",
        role: "Litigation · 9 yrs",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Sofia Lee",
        role: "Employment & Antitrust · 7 yrs",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
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
      formTitle: "Request a Consultation",
      formNote: "An attorney will follow up within 24 hours.",
      placeholders: {
        name: "Full name",
        phone: "Phone number",
        area: { default: "Select practice area", a1: "Corporate Counsel", a2: "Intellectual Property" },
        details: "Brief case overview",
      },
      submit: "Submit Request",
    },
    footer: "© 2025 Greene Law Group. Attorney advertising.",
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
    lawyersSection: { eyebrow: "LAWYERS", title: "구성원" },
    lawyers: [
      {
        name: "한지훈 대표변호사",
        role: "사법연수원 39기 · 서울대 법대",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "조서린 변호사",
        role: "기업법무 · 12년차",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "윤재훈 변호사",
        role: "분쟁·소송 · 9년차",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "임소연 변호사",
        role: "노동·공정거래 · 7년차",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
      },
    ],
    consult: {
      eyebrow: "CONSULTATION",
      title: ["가장 빠른 길은,", "가장 정확한 상담입니다."],
      body: "30분 무료 초기 상담을 통해 사건의 큰 흐름을 함께 정리합니다. 시간이 지나면 손해가 되는 사건이 많습니다.",
      rows: [
        { label: "CALL", value: "02-XXX-XXXX" },
        { label: "EMAIL", value: "contact@greenlaw.kr" },
        { label: "ADDRESS", value: "서울 서초구 법원로 ○○ 그린빌딩 9층" },
      ],
      formTitle: "상담 신청서",
      formNote: "담당 변호사가 24시간 내 연락드립니다.",
      placeholders: {
        name: "성함",
        phone: "연락처",
        area: { default: "사건 분야 선택", a1: "기업 자문", a2: "지식재산권" },
        details: "간단한 사건 개요",
      },
      submit: "상담 신청하기",
    },
    footer: "© 2025 그린 법률사무소. 변호사 광고 심의필.",
  },
} as const;

export default function GreenLaw({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="bg-white text-[#0b1a2a]">
      <header className="border-b border-[#0b1a2a]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0b1a2a] font-serif text-base text-white">G</span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#0b1a2a]/60">{t.brand.tag}</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-medium text-[#0b1a2a]/80 md:flex">
            <a>{t.nav.areas}</a>
            <a>{t.nav.lawyers}</a>
            <a>{t.nav.cases}</a>
            <a>{t.nav.insights}</a>
            <a>{t.nav.visit}</a>
          </nav>
          <a className="rounded-sm bg-[#0b1a2a] px-5 py-2.5 text-xs font-semibold tracking-widest text-white">
            {t.bookCta}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f4ee]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center md:py-32">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.hero.eyebrow}</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.15] md:text-6xl">
              {t.hero.title[0]}<br />{t.hero.title[1]}
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-[#0b1a2a]/70">
              {t.hero.body}
            </p>
            <div className="mt-10 flex gap-4">
              <a className="rounded-sm bg-[#0b1a2a] px-7 py-3.5 text-sm font-semibold text-white">
                {t.hero.ctaPrimary}
              </a>
              <a className="rounded-sm border border-[#0b1a2a] px-7 py-3.5 text-sm font-semibold">
                {t.hero.ctaSecondary}
              </a>
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

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.areasSection.eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">{t.areasSection.title}</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-[#0b1a2a]/10 md:grid-cols-3">
          {t.areas.map((a) => (
            <div key={a.title} className="bg-white p-8 transition hover:bg-[#f5f4ee]">
              <h3 className="font-serif text-2xl">{a.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#0b1a2a]/70">{a.desc}</p>
              <div className="mt-6 text-xs font-semibold tracking-widest text-[#7c8c47]">{t.viewMore}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f4ee] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.lawyersSection.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">{t.lawyersSection.title}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.lawyers.map((l) => (
              <div key={l.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0b1a2a]/5">
                  <Image src={l.image} alt={l.name} fill className="object-cover grayscale" />
                </div>
                <h3 className="mt-5 font-serif text-xl">{l.name}</h3>
                <p className="mt-1 text-xs text-[#0b1a2a]/60">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.consult.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              {t.consult.title[0]}<br />{t.consult.title[1]}
            </h2>
            <p className="mt-6 leading-relaxed text-[#0b1a2a]/70">
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
          </div>
          <form className="rounded-sm bg-[#0b1a2a] p-10 text-white">
            <h3 className="font-serif text-2xl">{t.consult.formTitle}</h3>
            <p className="mt-2 text-xs text-white/60">{t.consult.formNote}</p>
            <div className="mt-8 space-y-4">
              <input placeholder={t.consult.placeholders.name} className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none" />
              <input placeholder={t.consult.placeholders.phone} className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none" />
              <select className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none">
                <option className="text-[#0b1a2a]">{t.consult.placeholders.area.default}</option>
                <option className="text-[#0b1a2a]">{t.consult.placeholders.area.a1}</option>
                <option className="text-[#0b1a2a]">{t.consult.placeholders.area.a2}</option>
              </select>
              <textarea rows={3} placeholder={t.consult.placeholders.details} className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none" />
            </div>
            <button className="mt-8 w-full bg-white py-3.5 text-xs font-semibold tracking-[0.3em] text-[#0b1a2a]">
              {t.consult.submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#0b1a2a]/10 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#0b1a2a]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#0b1a2a]">{t.brand.name}</div>
          <div>{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
