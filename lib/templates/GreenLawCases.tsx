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
    eyebrow: "NOTABLE CASES",
    title: "Results, not just billing hours",
    intro: "A sample of matters we've closed across corporate, IP, employment, and white-collar defense — the challenge, our approach, and how it ended.",
    stats: [
      { v: "$40M+", l: "Deal value closed" },
      { v: "60+", l: "Trials & hearings" },
      { v: "0", l: "Adverse verdicts, 5 yrs" },
      { v: "94%", l: "Pre-trial resolution rate" },
    ],
    labels: { challenge: "CHALLENGE", approach: "APPROACH", result: "RESULT" },
    cases: [
      {
        tag: "Corporate · M&A",
        title: "Series B down-round restructuring for a SaaS company",
        result: "Closed in 6 weeks",
        challenge: "A down round threatened to trigger a change-of-control clause that would have handed the board to a single investor class.",
        approach: "We renegotiated liquidation preferences across three investor classes in parallel, structuring the round to preserve founder control.",
        outcome: "The round closed in six weeks without triggering the clause, and the founding team retained board majority.",
      },
      {
        tag: "Intellectual Property",
        title: "Trademark infringement — mid-market apparel brand",
        result: "Full win, no appeal",
        challenge: "A competitor launched a near-identical mark weeks before our client's national retail rollout.",
        approach: "We filed for a preliminary injunction within days and built a consumer-confusion record ahead of the hearing.",
        outcome: "A preliminary injunction was granted within 30 days, followed by full judgment before the case reached discovery.",
      },
      {
        tag: "Employment & Labor",
        title: "Multi-plaintiff wrongful-termination defense",
        result: "Dismissed pre-trial",
        challenge: "Four former employees filed coordinated wrongful-termination claims following a reduction in force.",
        approach: "We reconstructed the documentation trail behind each termination decision and cross-referenced it against company policy.",
        outcome: "All four claims were dismissed on summary judgment before any claim reached trial.",
      },
      {
        tag: "White Collar",
        title: "Corporate fraud investigation response",
        result: "No charges filed",
        challenge: "A regulator opened an inquiry into financial reporting irregularities flagged by an external auditor.",
        approach: "We ran the internal investigation in parallel with regulator outreach, controlling disclosure timing and scope.",
        outcome: "The matter closed with no charges filed and no consent order, before any indictment was sought.",
      },
      {
        tag: "Corporate · Litigation",
        title: "Post-acquisition earnout dispute",
        result: "Settled above floor",
        challenge: "An acquirer disputed an earnout payment, arguing the target had missed performance milestones by a technicality.",
        approach: "We audited the underlying performance data and built a damages model that reframed the technicality as immaterial.",
        outcome: "The dispute settled above the contractual floor without proceeding to arbitration.",
      },
      {
        tag: "Antitrust & Trade",
        title: "Franchise-agreement termination dispute",
        result: "Franchise retained",
        challenge: "A franchisor attempted to terminate a multi-unit franchise agreement over a disputed compliance issue.",
        approach: "We challenged the termination notice on procedural grounds while negotiating a cure period in parallel.",
        outcome: "The franchise agreement was retained and the compliance issue resolved without loss of territory.",
      },
    ],
    cta: {
      title: "Facing something similar?",
      body: "Every case above started with a 30-minute call. Yours can too.",
      button: "Book a Consult",
    },
    footer: "© 2025 Greene Law Group. Attorney advertising. NY Bar Attorney Advertising Review No. 2024-11087.",
  },
  ko: {
    brand: { name: "GREEN LAW", tag: "법률사무소" },
    nav: { areas: "업무 영역", lawyers: "구성원", cases: "주요 사례", insights: "인사이트", visit: "찾아오시는 길" },
    bookCta: "상담 예약",
    eyebrow: "NOTABLE CASES",
    title: "숫자가 아니라 결과로",
    intro: "기업, 지식재산권, 노동, 형사 분야에서 저희가 마무리한 사건 중 일부입니다 — 어떤 문제였고, 어떻게 접근했으며, 어떻게 끝났는지 정리했습니다.",
    stats: [
      { v: "400억+", l: "누적 거래 규모" },
      { v: "60+", l: "재판·심문 수행" },
      { v: "0", l: "최근 5년 패소 판결" },
      { v: "94%", l: "재판 전 종결률" },
    ],
    labels: { challenge: "문제 상황", approach: "대응 전략", result: "결과" },
    cases: [
      {
        tag: "기업 자문 · M&A",
        title: "중견 IT기업 투자유치 다운라운드 구조조정",
        result: "6주 만에 종결",
        challenge: "다운라운드로 인해 특정 투자자 그룹에 이사회 경영권이 넘어갈 수 있는 경영권 변동 조항이 발동될 위기였습니다.",
        approach: "투자자 3개 그룹의 우선청산권 조건을 동시에 재조정하며, 창업팀의 경영권을 유지하는 방향으로 딜 구조를 설계했습니다.",
        outcome: "6주 만에 딜을 종결하며 조항 발동을 막았고, 창업팀은 이사회 과반을 유지했습니다.",
      },
      {
        tag: "지식재산권",
        title: "패션 브랜드 상표권 침해 소송",
        result: "1심 전부 승소",
        challenge: "전국 유통 출시를 앞두고 경쟁사가 거의 동일한 상표를 먼저 출시했습니다.",
        approach: "심문 며칠 전 가처분을 신청하고, 소비자 혼동 가능성에 대한 증거 자료를 심문 전까지 구축했습니다.",
        outcome: "제소 30일 만에 가처분이 인용됐고, 본안 소송 없이 조기 종결로 이어졌습니다.",
      },
      {
        tag: "노동·인사",
        title: "집단 부당해고 구제 신청 대응",
        result: "전건 기각",
        challenge: "구조조정 이후 전 직원 4명이 공동으로 부당해고 구제 신청을 제기했습니다.",
        approach: "각 해고 결정의 근거 문서를 재구성하고, 회사 내규와 대조해 절차적 정당성을 정리했습니다.",
        outcome: "4건의 청구 모두 노동위 단계에서 기각되어 본안 심리로 가지 않았습니다.",
      },
      {
        tag: "형사",
        title: "기업 횡령·배임 내사 대응",
        result: "불기소 처분",
        challenge: "외부 감사에서 지적된 재무 보고 이상 징후로 수사기관이 내사를 개시했습니다.",
        approach: "내부 조사를 직접 수행하며 수사기관 대응을 병행해, 자료 공개 시점과 범위를 저희가 통제했습니다.",
        outcome: "기소 전 단계에서 불기소로 사건이 종결됐습니다.",
      },
      {
        tag: "기업 자문 · 소송",
        title: "M&A 이후 어닝아웃 정산 분쟁",
        result: "하한선 이상 합의",
        challenge: "인수사가 목표 실적 미달을 이유로 어닝아웃 지급을 거부했습니다.",
        approach: "실제 성과 데이터를 검증하고, 쟁점이 된 기술적 미달 사유가 중요하지 않음을 보여주는 손해 모델을 구축했습니다.",
        outcome: "중재로 가지 않고 계약상 하한선 이상의 금액으로 합의했습니다.",
      },
      {
        tag: "공정거래",
        title: "가맹계약 해지 통보 분쟁",
        result: "가맹점 유지",
        challenge: "가맹본부가 컴플라이언스 위반을 이유로 다점포 가맹계약 해지를 통보했습니다.",
        approach: "해지 통보의 절차적 하자를 다투는 동시에, 시정 기간 부여를 병행 협상했습니다.",
        outcome: "가맹계약을 유지했고, 상권 손실 없이 컴플라이언스 이슈를 해결했습니다.",
      },
    ],
    cta: {
      title: "비슷한 상황이신가요?",
      body: "위 모든 사건은 30분 상담에서 시작했습니다. 지금 상담을 시작해보세요.",
      button: "상담 예약하기",
    },
    footer: "© 2025 그린 법률사무소. 변호사 광고 심의필. 대한변호사협회 광고심사 제2024-000123호.",
  },
} as const;

export default function GreenLawCases({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.areas} className="transition hover:text-[#0b1a2a]">{t.nav.areas}</Link>
            <Link href={navPaths.cases} className="text-[#0b1a2a]">{t.nav.cases}</Link>
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
              <Link href={navPaths.areas} onClick={() => setOpen(false)} className="py-2">{t.nav.areas}</Link>
              <Link href={navPaths.cases} onClick={() => setOpen(false)} className="py-2 text-[#0b1a2a]">{t.nav.cases}</Link>
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
        <div className="grid gap-6 md:grid-cols-2">
          {t.cases.map((c) => (
            <div key={c.title} className="rounded-sm border border-[#0b1a2a]/10 bg-white p-8">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold tracking-widest text-[#7c8c47]">{c.tag}</p>
                <span className="shrink-0 rounded-full bg-[#0b1a2a] px-3 py-1 text-[10px] font-semibold tracking-widest text-white">
                  {c.result}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-xl leading-snug break-keep text-balance">{c.title}</h2>
              <dl className="mt-5 space-y-4 border-t border-[#0b1a2a]/10 pt-5 text-sm">
                <div>
                  <dt className="text-[10px] font-semibold tracking-[0.2em] text-[#0b1a2a]/50">{t.labels.challenge}</dt>
                  <dd className="mt-1.5 leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{c.challenge}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold tracking-[0.2em] text-[#0b1a2a]/50">{t.labels.approach}</dt>
                  <dd className="mt-1.5 leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{c.approach}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold tracking-[0.2em] text-[#7c8c47]">{t.labels.result}</dt>
                  <dd className="mt-1.5 leading-relaxed text-[#0b1a2a] break-keep text-pretty">{c.outcome}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
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
