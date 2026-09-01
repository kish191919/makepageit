"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "MERIDIAN WEALTH PARTNERS", tag: "FEE-ONLY FIDUCIARY ADVISORS" },
    nav: { services: "Services", approach: "Our Approach", advisors: "Advisors", insights: "Insights", contact: "Contact" },
    bookCta: "Schedule a Consultation",
    eyebrow: "SERVICES",
    title: "How we help",
    intro:
      "Six coordinated services, one standard: every recommendation is measured against your goals first, our revenue never. No commissions, no proprietary funds, no sales quotas.",
    stats: [
      { v: "$420M+", l: "Assets under advisement" },
      { v: "18 yrs", l: "Avg. advisor experience" },
      { v: "100%", l: "Fiduciary, fee-only" },
      { v: "600+", l: "Families served" },
    ],
    services: [
      {
        title: "Retirement Planning",
        desc: "Income modeling, Social Security timing, and withdrawal strategy built around the retirement you actually want.",
        detail:
          "We model your retirement income the way you'll actually live it — month by month, not as a single lump-sum projection. That means testing Social Security claiming ages, sequencing withdrawals across account types, and stress-testing the plan against a real down market, not an average one.",
        work: ["Retirement income & cash-flow modeling", "Social Security claiming strategy", "Withdrawal sequencing across account types"],
      },
      {
        title: "Wealth Management & Investing",
        desc: "Evidence-based portfolio construction, tax-aware rebalancing, and ongoing risk management.",
        detail:
          "Portfolios are built from asset-class research, not manager narratives, and rebalanced on thresholds rather than a calendar so trades happen because the market moved, not because it's Tuesday. Every position exists because of the role it plays in your plan.",
        work: ["Evidence-based portfolio construction", "Threshold-based tax-aware rebalancing", "Ongoing risk & drift monitoring"],
      },
      {
        title: "Estate & Legacy Planning",
        desc: "Coordinated trust and estate strategy that works alongside your attorney to protect what you've built.",
        detail:
          "We don't draft legal documents, but we make sure the plan your attorney writes and the assets you actually hold agree with each other — beneficiary designations, titling, and trust funding are reviewed together, not left for your heirs to discover.",
        work: ["Beneficiary & titling review", "Trust funding coordination", "Multi-generational transfer planning"],
      },
      {
        title: "Tax-Efficient Strategies",
        desc: "Asset location, Roth conversions, and charitable planning designed to minimize lifetime tax drag.",
        detail:
          "Tax planning happens every year, not just in April. We look for Roth conversion windows, harvest losses where they help, and place assets in the account type that taxes them least — decisions that compound the same way your investments do.",
        work: ["Roth conversion window analysis", "Tax-loss & tax-gain harvesting", "Asset location across account types"],
      },
      {
        title: "Insurance & Risk Planning",
        desc: "Independent review of life, disability, and liability coverage — no products sold, no commissions earned.",
        detail:
          "We review your existing coverage for gaps and overlaps the way an outside auditor would, because we have no product to sell you. If a policy is doing its job, we say so; if it isn't, we tell you exactly what's missing.",
        work: ["Life & disability coverage audit", "Liability & umbrella policy review", "Coverage-gap identification, no sales"],
      },
      {
        title: "Business Owner Planning",
        desc: "Exit planning, cash-flow structuring, and retirement-plan design for founders and partners.",
        detail:
          "Owner wealth is usually concentrated in the business itself. We work backward from your eventual exit — valuation readiness, retirement-plan design for the company, and personal cash-flow structuring that doesn't depend on a sale closing on schedule.",
        work: ["Exit & succession readiness", "Company retirement-plan design", "Owner cash-flow structuring"],
      },
    ],
    workLabel: "WHAT THIS INCLUDES",
    processSection: { eyebrow: "HOW WE WORK", title: "From first call to standing plan" },
    process: [
      { step: "01", title: "Discovery Call", desc: "A complimentary 30-minute call to understand your goals and confirm we're a fit." },
      { step: "02", title: "Plan Build", desc: "We build a written financial plan before recommending a single investment." },
      { step: "03", title: "Implementation", desc: "Accounts are opened, funded, and positioned according to the plan — no proprietary products." },
      { step: "04", title: "Ongoing Advice", desc: "Quarterly check-ins and unlimited access to your advisor as life and markets change." },
    ],
    cta: {
      title: "Not sure which service fits your situation?",
      body: "Tell us where you're starting from — we'll map the right services to your goals, free of charge.",
      button: "Schedule a Consultation",
    },
    footer: "© 2025 Meridian Wealth Partners.",
  },
  ko: {
    brand: { name: "메리디안 자산관리", tag: "수수료 기반 신의성실 자문사" },
    nav: { services: "서비스", approach: "운용 철학", advisors: "어드바이저", insights: "인사이트", contact: "상담 문의" },
    bookCta: "상담 예약",
    eyebrow: "SERVICES",
    title: "제공 서비스",
    intro:
      "6가지 서비스, 하나의 기준 — 모든 제안은 저희의 수익이 아니라 고객의 목표를 기준으로 판단합니다. 판매 수수료도, 자체 펀드도, 판매 목표도 없습니다.",
    stats: [
      { v: "$4,200억+", l: "자문 자산 규모" },
      { v: "18년", l: "평균 어드바이저 경력" },
      { v: "100%", l: "신의성실 · 수수료 기반" },
      { v: "600+", l: "고객 가문 수" },
    ],
    services: [
      {
        title: "은퇴 설계",
        desc: "은퇴 소득 모델링, 연금 수령 시점 설계, 인출 전략까지 원하는 은퇴 생활에 맞춰 설계합니다.",
        detail:
          "은퇴 후 소득을 실제 생활하는 방식 그대로 월 단위로 모델링합니다. 단순 예상치가 아니라 연금 수령 시점, 계좌 유형별 인출 순서, 평균이 아닌 실제 하락장을 가정한 스트레스 테스트까지 포함합니다.",
        work: ["은퇴 소득·현금흐름 모델링", "연금 수령 시점 전략", "계좌 유형별 인출 순서 설계"],
      },
      {
        title: "자산관리·투자운용",
        desc: "근거 기반 포트폴리오 구성, 세금을 고려한 리밸런싱, 지속적인 리스크 관리.",
        detail:
          "포트폴리오는 매니저의 스토리가 아니라 자산군 리서치를 근거로 구성하며, 정해진 날짜가 아니라 임계값 기준으로 리밸런싱합니다. 시장이 실제로 움직였을 때만 매매가 발생합니다.",
        work: ["근거 기반 포트폴리오 구성", "임계값 기반 세금 고려 리밸런싱", "리스크·이탈도 지속 모니터링"],
      },
      {
        title: "상속·유산 설계",
        desc: "고객의 변호사와 협업하여 신탁·상속 전략을 조율하고 일군 자산을 지켜냅니다.",
        detail:
          "법률 문서를 직접 작성하지는 않지만, 변호사가 작성한 계획과 실제 보유 자산이 서로 어긋나지 않도록 확인합니다. 수익자 지정, 명의, 신탁 자금 조달까지 함께 점검합니다.",
        work: ["수익자 지정·명의 점검", "신탁 자금 조달 조율", "세대 간 자산이전 설계"],
      },
      {
        title: "절세 전략",
        desc: "자산 배치, 로스 전환, 기부 계획을 통해 평생에 걸친 세금 부담을 최소화합니다.",
        detail:
          "절세 계획은 연말이 아니라 매년 이루어집니다. 로스 전환이 유리한 시기를 찾고, 도움이 되는 손실은 실현하며, 세금이 가장 적은 계좌 유형에 자산을 배치합니다 — 투자와 마찬가지로 시간이 지날수록 복리로 쌓이는 결정입니다.",
        work: ["로스 전환 시기 분석", "손익 실현 전략", "계좌 유형별 자산 배치"],
      },
      {
        title: "보험·리스크 설계",
        desc: "생명·소득보장·배상책임 보장을 독립적으로 점검합니다. 상품 판매나 수수료 없이.",
        detail:
          "판매할 상품이 없기 때문에 외부 감사처럼 기존 보장의 공백과 중복을 점검할 수 있습니다. 잘 갖춰져 있다면 그렇다고 말씀드리고, 부족하다면 정확히 무엇이 빠졌는지 알려드립니다.",
        work: ["생명·소득보장 보험 점검", "배상책임·우산보험 검토", "보장 공백 식별, 판매 없음"],
      },
      {
        title: "사업주 재무설계",
        desc: "창업자와 파트너를 위한 매각 설계, 현금흐름 구조화, 퇴직연금 플랜 설계.",
        detail:
          "사업주의 자산은 대부분 사업체 자체에 집중되어 있습니다. 향후 매각 시점을 기준으로 밸류에이션 준비, 회사 퇴직연금 설계, 매각 일정에 좌우되지 않는 개인 현금흐름 구조화를 함께 설계합니다.",
        work: ["매각·승계 준비도 점검", "회사 퇴직연금 설계", "사업주 개인 현금흐름 구조화"],
      },
    ],
    workLabel: "포함 내용",
    processSection: { eyebrow: "HOW WE WORK", title: "첫 상담부터 지속 플랜까지" },
    process: [
      { step: "01", title: "초기 상담", desc: "30분 무료 상담으로 목표를 파악하고, 저희가 맞는 파트너인지 확인합니다." },
      { step: "02", title: "플랜 수립", desc: "투자 상품을 추천하기 전, 문서화된 재무 플랜을 먼저 수립합니다." },
      { step: "03", title: "실행", desc: "계획에 따라 계좌를 개설·입금·배치합니다 — 자체 상품 없이." },
      { step: "04", title: "지속 자문", desc: "분기별 점검과 함께, 필요할 때 언제든 담당 어드바이저와 상담할 수 있습니다." },
    ],
    cta: {
      title: "어떤 서비스가 맞는지 확실치 않으신가요?",
      body: "현재 상황을 알려주시면 목표에 맞는 서비스를 무료로 안내해드립니다.",
      button: "상담 예약하기",
    },
    footer: "© 2025 메리디안 자산관리.",
  },
} as const;

export default function MeridianWealthServices({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/meridian-wealth");
  const navPaths = {
    services: localePath(lang, "/portfolio/meridian-wealth/services"),
    approach: localePath(lang, "/portfolio/meridian-wealth/approach"),
    advisors: localePath(lang, "/portfolio/meridian-wealth/advisors"),
    insights: localePath(lang, "/portfolio/meridian-wealth/insights"),
    contact: localePath(lang, "/portfolio/meridian-wealth/contact"),
  } as const;

  return (
    <div className="bg-[#f7f6f2] text-[#1a2332]">
      <header ref={ref} className="border-b border-[#1a2332]/10 bg-[#f7f6f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2332] text-base font-semibold text-[#c99a3b]">M</span>
            <div>
              <div className="text-base font-semibold leading-none tracking-tight">{t.brand.name}</div>
              <div className="mt-1 text-[10px] tracking-[0.25em] text-[#1a2332]/50">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#1a2332]/75 md:flex">
            <Link href={navPaths.services} className="text-[#c99a3b]">{t.nav.services}</Link>
            <Link href={navPaths.approach} className="transition hover:text-[#c99a3b]">{t.nav.approach}</Link>
            <Link href={navPaths.advisors} className="transition hover:text-[#c99a3b]">{t.nav.advisors}</Link>
            <Link href={navPaths.insights} className="transition hover:text-[#c99a3b]">{t.nav.insights}</Link>
            <Link href={navPaths.contact} className="transition hover:text-[#c99a3b]">{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={navPaths.contact} className="hidden rounded-full bg-[#1a2332] px-5 py-2.5 text-xs font-semibold tracking-wide text-white sm:inline-block">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2332]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#1a2332]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#1a2332]/75">
              <Link href={navPaths.services} onClick={() => setOpen(false)} className="py-2 text-[#c99a3b]">{t.nav.services}</Link>
              <Link href={navPaths.approach} onClick={() => setOpen(false)} className="py-2">{t.nav.approach}</Link>
              <Link href={navPaths.advisors} onClick={() => setOpen(false)} className="py-2">{t.nav.advisors}</Link>
              <Link href={navPaths.insights} onClick={() => setOpen(false)} className="py-2">{t.nav.insights}</Link>
              <Link href={navPaths.contact} onClick={() => setOpen(false)} className="py-2">{t.nav.contact}</Link>
            </nav>
            <Link
              href={navPaths.contact}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#1a2332] px-5 py-2.5 text-xs font-semibold tracking-wide text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{t.intro}</p>
      </section>

      <section className="bg-[#1a2332] py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l} className="border-l border-[#c99a3b]/40 pl-6">
              <div className="text-4xl font-semibold tracking-tight">{s.v}</div>
              <div className="mt-2 text-xs tracking-[0.25em] text-white/60">{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-px overflow-hidden rounded-sm bg-[#1a2332]/10 md:grid-cols-2">
          {t.services.map((s) => (
            <div key={s.title} className="bg-[#f7f6f2] p-8">
              <h2 className="text-2xl font-semibold tracking-tight break-keep text-balance">{s.title}</h2>
              <p className="mt-2 text-sm font-semibold text-[#c99a3b] break-keep text-pretty">{s.desc}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{s.detail}</p>
              <div className="mt-6 border-t border-[#1a2332]/10 pt-5">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#1a2332]/50">{t.workLabel}</p>
                <ul className="mt-3 space-y-2 text-sm text-[#1a2332]/70">
                  {s.work.map((w) => (
                    <li key={w} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#c99a3b]" />
                      <span className="break-keep text-pretty">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.processSection.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl break-keep text-balance">{t.processSection.title}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map((p) => (
              <div key={p.step}>
                <div className="text-3xl font-semibold tracking-tight text-[#c99a3b]">{p.step}</div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight break-keep text-balance">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="rounded-sm bg-[#1a2332] px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl break-keep text-balance">{t.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70 break-keep text-pretty">{t.cta.body}</p>
          <Link
            href={navPaths.contact}
            className="mt-8 inline-block rounded-full bg-[#c99a3b] px-7 py-3.5 text-xs font-semibold tracking-[0.3em] text-[#1a2332]"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#1a2332]/10 bg-[#f7f6f2] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#1a2332]/50 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold tracking-tight text-[#1a2332]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
