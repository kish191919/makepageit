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
    eyebrow: "OUR APPROACH",
    title: "How we think about your money",
    intro:
      "Not every advisor works the same way. Ours is built around four commitments that don't change when markets do, and a process that treats the plan as the product — the portfolio just follows from it.",
    stats: [
      { v: "$420M+", l: "Assets under advisement" },
      { v: "18 yrs", l: "Avg. advisor experience" },
      { v: "100%", l: "Fiduciary, fee-only" },
      { v: "600+", l: "Families served" },
    ],
    pillarsSection: { eyebrow: "PRINCIPLES", title: "Four commitments that don't move" },
    pillars: [
      {
        title: "Fee-Only, Always",
        desc: "We're paid only by you, on a transparent fee schedule — never by commission, and never by a fund company for putting you into their product.",
      },
      {
        title: "Fiduciary by Default",
        desc: "Every recommendation is held to a fiduciary standard, not a suitability standard. If it isn't in your best interest, we don't recommend it.",
      },
      {
        title: "Plan First, Invest Second",
        desc: "We write the financial plan before we open a single account. The portfolio exists to fund the plan, not the other way around.",
      },
      {
        title: "Evidence Over Prediction",
        desc: "Portfolios are built on decades of asset-pricing research, not on forecasting where the market goes next month. Nobody knows that reliably — including us.",
      },
    ],
    processSection: { eyebrow: "INVESTMENT PROCESS", title: "From goals to a portfolio built to hold" },
    process: [
      { step: "01", title: "Define the Goal", desc: "Every dollar is assigned a job — retirement income, a home purchase, a legacy gift — before it's assigned an investment." },
      { step: "02", title: "Set the Risk Budget", desc: "We size risk to the goal's timeline and your ability to stay invested through a real drawdown, not a risk-tolerance quiz score." },
      { step: "03", title: "Build the Portfolio", desc: "Low-cost, broadly diversified funds selected for the role they play — no proprietary products, no fund-company kickbacks." },
      { step: "04", title: "Rebalance on Bands", desc: "We trade when allocations drift past a set threshold, not on a calendar — fewer, more meaningful trades, more tax-loss opportunities captured." },
    ],
    feeSection: {
      eyebrow: "FEE TRANSPARENCY",
      title: "You'll always know exactly what you pay",
      body: "Our fee is a simple percentage of assets under advisement, billed quarterly, visible on every statement. There are no loads, no 12b-1 fees, no surrender charges, and no hidden revenue from the funds we recommend — because we don't recommend our own.",
    },
    cta: {
      title: "Want to see the approach applied to your plan?",
      body: "Bring your current statements to a free 30-minute call — we'll show you exactly how this process would work for you.",
      button: "Schedule a Consultation",
    },
    footer: "© 2025 Meridian Wealth Partners.",
  },
  ko: {
    brand: { name: "메리디안 자산관리", tag: "수수료 기반 신의성실 자문사" },
    nav: { services: "서비스", approach: "운용 철학", advisors: "어드바이저", insights: "인사이트", contact: "상담 문의" },
    bookCta: "상담 예약",
    eyebrow: "OUR APPROACH",
    title: "자산을 바라보는 저희의 방식",
    intro:
      "모든 자문사가 같은 방식으로 일하지는 않습니다. 저희는 시장 상황과 무관하게 지켜지는 4가지 원칙과, 포트폴리오가 아니라 플랜을 결과물로 삼는 프로세스를 기준으로 움직입니다.",
    stats: [
      { v: "$4,200억+", l: "자문 자산 규모" },
      { v: "18년", l: "평균 어드바이저 경력" },
      { v: "100%", l: "신의성실 · 수수료 기반" },
      { v: "600+", l: "고객 가문 수" },
    ],
    pillarsSection: { eyebrow: "PRINCIPLES", title: "흔들리지 않는 4가지 원칙" },
    pillars: [
      {
        title: "언제나 수수료 기반",
        desc: "저희는 오직 고객으로부터, 투명한 요율로만 보수를 받습니다. 판매 수수료도, 특정 상품에 가입시켜 받는 운용사 리베이트도 없습니다.",
      },
      {
        title: "기본값은 신의성실 의무",
        desc: "모든 제안은 적합성 기준이 아니라 신의성실 기준으로 판단합니다. 고객의 이익에 부합하지 않으면 제안하지 않습니다.",
      },
      {
        title: "플랜이 먼저, 투자는 그다음",
        desc: "계좌를 개설하기 전에 재무 플랜을 먼저 작성합니다. 포트폴리오는 플랜을 실현하기 위한 수단이지, 그 반대가 아닙니다.",
      },
      {
        title: "예측보다 근거",
        desc: "포트폴리오는 다음 달 시장을 예측한 결과가 아니라 수십 년간 축적된 자산가격 연구를 근거로 구성합니다. 그 누구도 시장을 정확히 예측할 수 없습니다 — 저희도 마찬가지입니다.",
      },
    ],
    processSection: { eyebrow: "INVESTMENT PROCESS", title: "목표에서 지켜낼 수 있는 포트폴리오까지" },
    process: [
      { step: "01", title: "목표 정의", desc: "은퇴 소득, 주택 구입, 상속 등 모든 자금에는 투자 방식을 정하기 전에 먼저 목적이 부여됩니다." },
      { step: "02", title: "리스크 예산 설정", desc: "위험 성향 설문 점수가 아니라, 목표의 시간 지평과 실제 하락장을 버틸 수 있는 능력을 기준으로 리스크 크기를 정합니다." },
      { step: "03", title: "포트폴리오 구성", desc: "역할이 명확한 저비용 분산 펀드로 구성합니다. 자체 상품도, 운용사로부터 받는 리베이트도 없습니다." },
      { step: "04", title: "밴드 기준 리밸런싱", desc: "정해진 날짜가 아니라 배분 비중이 임계값을 벗어날 때만 거래합니다 — 거래는 줄고, 손실 실현 기회는 늘어납니다." },
    ],
    feeSection: {
      eyebrow: "FEE TRANSPARENCY",
      title: "얼마를 지불하는지 항상 정확히 알 수 있습니다",
      body: "보수는 자문 자산 대비 단순한 비율로 산정되어 분기마다 청구되며, 모든 명세서에 표시됩니다. 판매 수수료, 숨겨진 운용 보수, 중도해지 위약금이 없고, 추천하는 펀드에서 발생하는 숨은 수익도 없습니다 — 자체 상품을 추천하지 않기 때문입니다.",
    },
    cta: {
      title: "이 접근 방식을 내 플랜에 적용해보고 싶으신가요?",
      body: "현재 보유하신 계좌 명세서를 가지고 30분 무료 상담을 신청해보세요 — 실제로 어떻게 적용되는지 보여드립니다.",
      button: "상담 예약하기",
    },
    footer: "© 2025 메리디안 자산관리.",
  },
} as const;

export default function MeridianWealthApproach({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.services} className="transition hover:text-[#c99a3b]">{t.nav.services}</Link>
            <Link href={navPaths.approach} className="text-[#c99a3b]">{t.nav.approach}</Link>
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
              <Link href={navPaths.services} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={navPaths.approach} onClick={() => setOpen(false)} className="py-2 text-[#c99a3b]">{t.nav.approach}</Link>
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
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.pillarsSection.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl break-keep text-balance">{t.pillarsSection.title}</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-[#1a2332]/10 sm:grid-cols-2">
          {t.pillars.map((p) => (
            <div key={p.title} className="bg-white p-8">
              <h3 className="text-xl font-semibold tracking-tight break-keep text-balance">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{p.desc}</p>
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
        <div className="rounded-sm bg-[#1a2332] px-8 py-14 text-white md:px-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.feeSection.eyebrow}</p>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight md:text-3xl break-keep text-balance">{t.feeSection.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 break-keep text-pretty">{t.feeSection.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
        <div className="rounded-sm border border-[#1a2332]/10 bg-white px-8 py-14 text-center md:px-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl break-keep text-balance">{t.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{t.cta.body}</p>
          <Link
            href={navPaths.contact}
            className="mt-8 inline-block rounded-full bg-[#1a2332] px-7 py-3.5 text-xs font-semibold tracking-[0.3em] text-white"
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
