import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { name: "IRONCLAD", tag: "INDUSTRIAL SUPPLY" },
    nav: { capabilities: "Capabilities", products: "Products", certifications: "Certifications", industries: "Industries", contact: "Contact" },
    quoteCta: "Request a Quote",
    hero: {
      eyebrow: "ISO 9001 CERTIFIED · US MANUFACTURING",
      title: ["Precision parts,", "built to spec."],
      body: "Ironclad Industrial Supply machines, fabricates, and assembles mission-critical components for aerospace, defense, and heavy-equipment OEMs — from prototype to production run, delivered on your tolerance and your timeline.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "View Capabilities",
    },
    stats: [
      { v: "40+ yrs", l: "In operation" },
      { v: "120,000 sq ft", l: "Manufacturing facility" },
      { v: "ISO 9001:2015", l: "Certified" },
      { v: "48-hr", l: "Quote turnaround" },
    ],
    capabilitiesSection: { eyebrow: "CAPABILITIES", title: "What we build" },
    capabilities: [
      { title: "CNC Machining", desc: "3- and 5-axis milling and turning to ±0.0005\" tolerance, in aluminum, steel, titanium, and exotic alloys." },
      { title: "Sheet Metal Fabrication", desc: "Laser cutting, press-brake forming, and welding for enclosures, brackets, and structural assemblies." },
      { title: "Custom Tooling", desc: "In-house jig, fixture, and die design to reduce cycle time on high-volume production runs." },
      { title: "Assembly & Kitting", desc: "Mechanical sub-assembly, hardware kitting, and pack-out to your BOM and work-instruction spec." },
      { title: "Quality Inspection", desc: "CMM dimensional inspection, first-article reports, and full material-certification traceability." },
      { title: "Logistics & Fulfillment", desc: "Domestic freight, JIT scheduling, and vendor-managed inventory programs for repeat orders." },
    ],
    certSection: { eyebrow: "CERTIFICATIONS", title: "Built to standard, proven on the floor" },
    certs: ["ISO 9001:2015", "AS9100D", "ITAR REGISTERED", "MADE IN USA"],
    consult: {
      eyebrow: "GET A QUOTE",
      title: ["Send us your specs.", "We'll send back a number."],
      body: "Upload a drawing or describe the job — our applications engineers respond with a formal quote within 48 hours, most jobs within 24.",
      rows: [
        { label: "CALL", value: "(614) 555-0142" },
        { label: "EMAIL", value: "quotes@ironcladindustrial.com" },
        { label: "FACILITY", value: "4820 Progress Parkway, Building C, Grove City, OH 43123" },
      ],
      formTitle: "Request a Quote",
      formNote: "An applications engineer will follow up within one business day.",
      placeholders: {
        company: "Company name",
        name: "Contact name",
        email: "Email address",
        type: { default: "Select project type", t1: "CNC Machining", t2: "Sheet Metal", t3: "Custom Tooling", t4: "Other" },
        details: "Specs, quantities, and target dates",
      },
      submit: "Submit Request",
    },
    footer: "© 2025 Ironclad Industrial Supply. All rights reserved.",
  },
  ko: {
    brand: { name: "IRONCLAD", tag: "아이언클래드 산업" },
    nav: { capabilities: "생산 역량", products: "제품", certifications: "인증", industries: "적용 산업", contact: "문의" },
    quoteCta: "견적 요청",
    hero: {
      eyebrow: "ISO 9001 인증 · 미국 현지 생산",
      title: ["도면대로 정확하게,", "정밀 부품 제작."],
      body: "아이언클래드 산업은 항공우주, 방산, 중장비 OEM을 위한 핵심 부품을 가공·제작·조립합니다. 시제품부터 양산까지, 요구 공차와 납기를 그대로 지킵니다.",
      ctaPrimary: "견적 요청하기",
      ctaSecondary: "생산 역량 보기",
    },
    stats: [
      { v: "40년+", l: "업력" },
      { v: "120,000 sq ft", l: "생산 시설 면적" },
      { v: "ISO 9001:2015", l: "인증 획득" },
      { v: "48시간", l: "견적 회신" },
    ],
    capabilitiesSection: { eyebrow: "CAPABILITIES", title: "생산 역량" },
    capabilities: [
      { title: "CNC 가공", desc: "알루미늄, 스틸, 티타늄 및 특수합금을 ±0.0005인치 공차로 3·5축 밀링·터닝 가공합니다." },
      { title: "판금 제작", desc: "레이저 절단, 프레스 브레이크 성형, 용접으로 인클로저·브래킷·구조물을 제작합니다." },
      { title: "맞춤 툴링", desc: "지그·픽스처·금형을 자체 설계해 대량 생산 시 사이클 타임을 단축합니다." },
      { title: "조립 · 키팅", desc: "BOM과 작업지시서에 맞춰 기계 조립, 하드웨어 키팅, 패키징을 수행합니다." },
      { title: "품질 검사", desc: "CMM 정밀 측정, 초도품 검사 보고서(FAI), 재료 인증서 이력관리까지 지원합니다." },
      { title: "물류 · 납품", desc: "국내 운송, JIT 일정관리, 반복 발주를 위한 VMI 재고관리 프로그램을 운영합니다." },
    ],
    certSection: { eyebrow: "CERTIFICATIONS", title: "인증된 기준, 현장에서 증명된 품질" },
    certs: ["ISO 9001:2015", "AS9100D", "ITAR 등록", "미국 현지 생산"],
    consult: {
      eyebrow: "견적 요청",
      title: ["도면을 보내주세요.", "견적으로 답하겠습니다."],
      body: "도면을 첨부하거나 작업 내용을 알려주시면, 담당 엔지니어가 48시간 이내(대부분 24시간 이내)에 정식 견적서를 회신합니다.",
      rows: [
        { label: "전화", value: "02-XXX-XXXX" },
        { label: "이메일", value: "quotes@ironcladindustrial.com" },
        { label: "생산시설", value: "경기도 화성시 산업로 482, C동" },
      ],
      formTitle: "견적 요청서",
      formNote: "담당 엔지니어가 영업일 기준 1일 내 연락드립니다.",
      placeholders: {
        company: "회사명",
        name: "담당자 성함",
        email: "이메일 주소",
        type: { default: "프로젝트 유형 선택", t1: "CNC 가공", t2: "판금 제작", t3: "맞춤 툴링", t4: "기타" },
        details: "사양, 수량, 희망 납기",
      },
      submit: "견적 요청하기",
    },
    footer: "© 2025 아이언클래드 산업. All rights reserved.",
  },
} as const;

export default function IroncladIndustrial({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="bg-[#23272e] text-[#f2f1ec]">
      <header className="border-b border-white/10 bg-[#1b1e24]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#ff6a13] font-black text-base text-[#1b1e24]">I</span>
            <div>
              <div className="font-black text-lg uppercase leading-none tracking-tight">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-white/50">{t.brand.tag}</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-semibold uppercase tracking-wide text-white/70 md:flex">
            <a>{t.nav.capabilities}</a>
            <a>{t.nav.products}</a>
            <a>{t.nav.certifications}</a>
            <a>{t.nav.industries}</a>
            <a>{t.nav.contact}</a>
          </nav>
          <a className="bg-[#ff6a13] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1b1e24]">
            {t.quoteCta}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.15fr_1fr] md:items-center md:py-32">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6a13]">{t.hero.eyebrow}</p>
            <h1 className="mt-6 font-black uppercase leading-[1.05] tracking-tight text-4xl md:text-6xl">
              {t.hero.title[0]}<br className="hidden md:block" />{t.hero.title[1]}
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-white/70">
              {t.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="bg-[#ff6a13] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#1b1e24]">
                {t.hero.ctaPrimary}
              </a>
              <a className="border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop"
              alt="Ironclad Industrial Supply"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#ff6a13] py-14 text-[#1b1e24]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l} className="border-l-2 border-[#1b1e24]/30 pl-6">
              <div className="font-black text-3xl uppercase tracking-tight md:text-4xl">{s.v}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1b1e24]/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6a13]">{t.capabilitiesSection.eyebrow}</p>
        <h2 className="mt-3 font-black uppercase tracking-tight text-4xl md:text-5xl">{t.capabilitiesSection.title}</h2>
        <div className="mt-14 grid gap-px overflow-hidden bg-white/10 md:grid-cols-3">
          {t.capabilities.map((c) => (
            <div key={c.title} className="bg-[#23272e] p-8 transition hover:bg-[#2b3038]">
              <h3 className="font-black uppercase tracking-tight text-xl">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1e24] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6a13]">{t.certSection.eyebrow}</p>
          <h2 className="mt-3 font-black uppercase tracking-tight text-3xl md:text-5xl">{t.certSection.title}</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {t.certs.map((c) => (
              <span key={c} className="border border-[#ff6a13]/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#ff6a13]">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop"
                alt="Precision machining floor"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop"
                alt="Industrial fabrication"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6a13]">{t.consult.eyebrow}</p>
            <h2 className="mt-3 font-black uppercase leading-tight tracking-tight text-3xl md:text-5xl">
              {t.consult.title[0]}<br className="hidden md:block" />{t.consult.title[1]}
            </h2>
            <p className="mt-6 leading-relaxed text-white/70">
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
          <form className="border border-[#ff6a13]/40 bg-[#1b1e24] p-10">
            <h3 className="font-black uppercase tracking-tight text-2xl">{t.consult.formTitle}</h3>
            <p className="mt-2 text-xs text-white/50">{t.consult.formNote}</p>
            <div className="mt-8 space-y-4">
              <input placeholder={t.consult.placeholders.company} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
              <input placeholder={t.consult.placeholders.name} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
              <input placeholder={t.consult.placeholders.email} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
              <select className="w-full border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none">
                <option className="text-[#1b1e24]">{t.consult.placeholders.type.default}</option>
                <option className="text-[#1b1e24]">{t.consult.placeholders.type.t1}</option>
                <option className="text-[#1b1e24]">{t.consult.placeholders.type.t2}</option>
                <option className="text-[#1b1e24]">{t.consult.placeholders.type.t3}</option>
                <option className="text-[#1b1e24]">{t.consult.placeholders.type.t4}</option>
              </select>
              <textarea rows={3} placeholder={t.consult.placeholders.details} className="w-full border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/40 outline-none" />
            </div>
            <button className="mt-8 w-full bg-[#ff6a13] py-3.5 text-xs font-bold uppercase tracking-[0.3em] text-[#1b1e24]">
              {t.consult.submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#1b1e24] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div className="font-black uppercase tracking-tight text-sm text-white">{t.brand.name}</div>
          <div>{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
