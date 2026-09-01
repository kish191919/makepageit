"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "GREENE LAW", tag: "ATTORNEYS AT LAW" },
    nav: { areas: "Practice Areas", lawyers: "Attorneys", cases: "Notable Cases", insights: "Insights", visit: "Contact" },
    bookCta: "Book a Consult",
    eyebrow: "PRACTICE AREAS",
    title: "What we handle",
    intro: "Six practice groups, one standard: know how not to lose before you look at how to win. Every matter is led by a senior attorney from the first call.",
    stats: [
      { v: "6", l: "Practice groups" },
      { v: "1,200+", l: "Matters handled" },
      { v: "16 yrs", l: "Avg. experience" },
      { v: "150+", l: "Active clients" },
    ],
    areas: [
      {
        title: "Corporate Counsel",
        desc: "Outside general counsel for startups and mid-market companies; M&A and investment-document review.",
        detail:
          "We act as embedded counsel for companies that don't yet need — or want — a full legal department. From cap-table cleanup to closing a Series C, we sit close enough to the business to catch issues before they reach a term sheet.",
        work: ["Seed through Series C financing rounds", "Asset and stock purchase agreements", "Vendor, SaaS, and licensing contract review"],
      },
      {
        title: "Intellectual Property",
        desc: "Patent and trademark disputes, license drafting, IP-portfolio management.",
        detail:
          "We handle IP the way we handle litigation — assuming it will be contested. Clearance searches, prosecution, and licensing are built to survive a fight, not just clear a filing.",
        work: ["Trademark clearance and prosecution", "Patent and trade-secret litigation", "IP licensing and portfolio audits"],
      },
      {
        title: "Employment & Labor",
        desc: "Employment agreements, wrongful termination, EEOC, labor-board matters.",
        detail:
          "Most employment claims are decided by documentation created months before anyone called a lawyer. We rewrite the agreements and policies that create that record, and defend the ones that already exist.",
        work: ["Employment agreements and handbooks", "Wrongful-termination and EEOC defense", "Non-compete and non-solicit enforcement"],
      },
      {
        title: "Litigation",
        desc: "Civil and commercial litigation, attachments, injunctions, enforcement.",
        detail:
          "We try cases to verdict, which changes how we negotiate every case we don't. Opposing counsel knows the difference between a firm that settles by default and one that doesn't.",
        work: ["Commercial and contract disputes", "Preliminary injunctions and attachments", "Judgment enforcement and collection"],
      },
      {
        title: "Antitrust & Trade",
        desc: "Advertising compliance, supplier disputes, franchise litigation.",
        detail:
          "Advertising and franchise rules shift faster than most compliance calendars track. We review claims and agreements against current enforcement priorities, not last year's.",
        work: ["Advertising and labeling compliance review", "Supplier and distributor disputes", "Franchise agreement drafting and litigation"],
      },
      {
        title: "White Collar",
        desc: "Corporate criminal defense, financial-fraud cases, investigation response.",
        detail:
          "When a regulator calls, the first 48 hours set the tone for everything after. We run the internal investigation and manage the outside contact so the company controls its own narrative.",
        work: ["Internal investigations", "Regulator and prosecutor coordination", "Financial-fraud and compliance defense"],
      },
    ],
    workLabel: "REPRESENTATIVE WORK",
    processSection: { eyebrow: "HOW WE WORK", title: "From first call to standing counsel" },
    process: [
      { step: "01", title: "Initial Consult", desc: "A 30-minute call to understand the matter and confirm whether it's a fit." },
      { step: "02", title: "Scope & Fee", desc: "We define what's in scope and quote a flat fee or capped estimate before work starts." },
      { step: "03", title: "Engagement", desc: "A senior attorney is assigned from day one — not handed off after intake." },
      { step: "04", title: "Ongoing Counsel", desc: "Most matters continue into a standing relationship, not a one-time transaction." },
    ],
    cta: {
      title: "Not sure which practice group fits?",
      body: "Tell us what's happening — we'll route it to the right attorney, free of charge.",
      button: "Book a Consult",
    },
    footer: "© 2025 Greene Law Group. Attorney advertising. NY Bar Attorney Advertising Review No. 2024-11087.",
  },
  ko: {
    brand: { name: "GREEN LAW", tag: "법률사무소" },
    nav: { areas: "업무 영역", lawyers: "구성원", cases: "주요 사례", insights: "인사이트", visit: "찾아오시는 길" },
    bookCta: "상담 예약",
    eyebrow: "PRACTICE AREAS",
    title: "업무 영역",
    intro: "6개 전문 분야, 하나의 기준 — 이기는 법보다 잃지 않는 법을 먼저 봅니다. 모든 사건은 첫 통화부터 담당 파트너가 직접 맡습니다.",
    stats: [
      { v: "6", l: "전문 분야" },
      { v: "1,200+", l: "누적 사건" },
      { v: "16년", l: "평균 경력" },
      { v: "150+", l: "진행 중인 고객사" },
    ],
    areas: [
      {
        title: "기업 자문",
        desc: "스타트업 · 중견기업 상시 법률 자문, M&A, 투자계약 검토.",
        detail:
          "아직 사내 법무팀이 필요 없거나 두기 애매한 회사를 위해 외부 법무팀 역할을 합니다. 캡테이블 정리부터 시리즈 C 클로징까지, 텀시트에 도달하기 전에 문제를 먼저 짚어냅니다.",
        work: ["시드~시리즈 C 투자 라운드", "자산·주식 양수도 계약", "SaaS·벤더 계약 및 라이선스 검토"],
      },
      {
        title: "지식재산권",
        desc: "특허·상표 분쟁, 라이선스 계약, IP 포트폴리오 관리.",
        detail: "지식재산권은 다툼이 생길 것을 전제로 처리합니다. 상표 조사, 출원, 라이선스 모두 서류 통과가 아니라 분쟁을 견디도록 설계합니다.",
        work: ["상표 조사 및 출원", "특허·영업비밀 소송", "IP 라이선스 및 포트폴리오 진단"],
      },
      {
        title: "노동·인사",
        desc: "근로계약, 해고·징계, 노동위 사건, 부당해고 구제.",
        detail:
          "대부분의 노동 분쟁은 변호사를 찾기 몇 달 전에 만들어진 기록으로 판가름 납니다. 그 기록을 만드는 근로계약과 취업규칙을 다시 쓰고, 이미 발생한 분쟁은 방어합니다.",
        work: ["근로계약서·취업규칙 정비", "부당해고·차별 분쟁 대응", "경업금지·전직금지 조항 집행"],
      },
      {
        title: "분쟁·소송",
        desc: "민사·상사 소송, 가압류·가처분, 강제집행.",
        detail: "판결까지 가는 소송을 직접 수행하기 때문에, 합의로 끝나는 사건의 협상 방식도 달라집니다. 상대방 변호사도 그 차이를 압니다.",
        work: ["상사·계약 분쟁", "가압류·가처분", "판결 집행 및 채권 회수"],
      },
      {
        title: "공정거래",
        desc: "표시광고, 하도급, 가맹사업 분쟁 대응.",
        detail:
          "표시광고와 가맹 규정은 컴플라이언스 체크리스트보다 빠르게 바뀝니다. 작년 기준이 아니라 최근 심사 동향에 맞춰 광고 문구와 계약을 검토합니다.",
        work: ["표시광고·라벨링 규정 검토", "공급업체·대리점 분쟁", "가맹계약 작성 및 분쟁 대응"],
      },
      {
        title: "형사",
        desc: "기업 형사, 경제범죄, 수사 단계 변호.",
        detail:
          "수사기관 연락을 받은 첫 48시간이 이후 전체 국면을 결정합니다. 내부 조사를 직접 수행하고 외부 접촉을 관리해, 회사가 스스로 상황을 통제하도록 돕습니다.",
        work: ["내부 조사", "수사기관·검찰 대응 조율", "금융범죄·컴플라이언스 방어"],
      },
    ],
    workLabel: "주요 처리 업무",
    processSection: { eyebrow: "HOW WE WORK", title: "첫 상담부터 지속 자문까지" },
    process: [
      { step: "01", title: "초기 상담", desc: "30분 통화로 사건 개요를 파악하고, 저희가 맡을 사건인지 확인합니다." },
      { step: "02", title: "범위·비용 확정", desc: "착수 전에 업무 범위를 정하고, 정액 또는 상한 견적을 안내합니다." },
      { step: "03", title: "수임", desc: "인턴이 아니라 담당 파트너가 처음부터 사건을 맡습니다." },
      { step: "04", title: "지속 자문", desc: "대부분의 사건은 1회성 거래가 아니라 지속적인 자문 관계로 이어집니다." },
    ],
    cta: {
      title: "어느 분야인지 확실치 않으신가요?",
      body: "상황을 알려주시면 담당 변호사를 무료로 연결해드립니다.",
      button: "상담 예약하기",
    },
    footer: "© 2025 그린 법률사무소. 변호사 광고 심의필. 대한변호사협회 광고심사 제2024-000123호.",
  },
} as const;

export default function GreenLawAreas({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/green-law");
  const navPaths = {
    areas: localePath(lang, "/portfolio/green-law/areas"),
    cases: localePath(lang, "/portfolio/green-law/cases"),
    lawyers: localePath(lang, "/portfolio/green-law/lawyers"),
    insights: localePath(lang, "/portfolio/green-law/insights"),
    visit: localePath(lang, "/portfolio/green-law/visit"),
  } as const;

  return (
    <div className="bg-white text-[#0b1a2a]">
      <header ref={ref} className="border-b border-[#0b1a2a]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0b1a2a] font-serif text-sm text-white">
              GL
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#0b1a2a]/60">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#0b1a2a]/80 md:flex">
            <Link href={navPaths.areas} className="text-[#0b1a2a]">{t.nav.areas}</Link>
            <Link href={navPaths.cases} className="transition hover:text-[#0b1a2a]">{t.nav.cases}</Link>
            <Link href={navPaths.lawyers} className="transition hover:text-[#0b1a2a]">{t.nav.lawyers}</Link>
            <Link href={navPaths.insights} className="transition hover:text-[#0b1a2a]">{t.nav.insights}</Link>
            <Link href={navPaths.visit} className="transition hover:text-[#0b1a2a]">{t.nav.visit}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={navPaths.visit}
              className="rounded-sm bg-[#0b1a2a] px-5 py-2.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#152a42]"
            >
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
              <Link href={navPaths.areas} onClick={() => setOpen(false)} className="py-2 text-[#0b1a2a]">{t.nav.areas}</Link>
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

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{t.intro}</p>
      </section>

      <section className="bg-[#0b1a2a] py-14 text-white">
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
        <div className="grid gap-px overflow-hidden rounded-sm bg-[#0b1a2a]/10 md:grid-cols-2">
          {t.areas.map((a) => (
            <div key={a.title} className="bg-white p-8">
              <h2 className="font-serif text-2xl break-keep text-balance">{a.title}</h2>
              <p className="mt-2 text-sm font-semibold text-[#7c8c47] break-keep text-pretty">{a.desc}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{a.detail}</p>
              <div className="mt-6 border-t border-[#0b1a2a]/10 pt-5">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#0b1a2a]/50">{t.workLabel}</p>
                <ul className="mt-3 space-y-2 text-sm text-[#0b1a2a]/70">
                  {a.work.map((w) => (
                    <li key={w} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#7c8c47]" />
                      <span className="break-keep text-pretty">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f4ee] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.processSection.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl break-keep text-balance">{t.processSection.title}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map((p) => (
              <div key={p.step}>
                <div className="font-serif text-3xl text-[#7c8c47]">{p.step}</div>
                <h3 className="mt-3 font-serif text-lg break-keep text-balance">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-sm bg-[#0b1a2a] px-8 py-14 text-center text-white md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl break-keep text-balance">{t.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70 break-keep text-pretty">{t.cta.body}</p>
          <Link
            href={navPaths.visit}
            className="mt-8 inline-block rounded-sm bg-white px-7 py-3.5 text-xs font-semibold tracking-widest text-[#0b1a2a] transition hover:bg-white/90"
          >
            {t.cta.button}
          </Link>
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
