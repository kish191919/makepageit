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
    eyebrow: "INSIGHTS",
    title: "Planning notes for long-term investors",
    intro: "Short, fee-only perspectives on the decisions that actually move a plan forward.",
    posts: [
      {
        date: "MAR 2025",
        title: "The Roth Conversion Window Most People Miss",
        excerpt:
          "The years between retirement and required withdrawals are often the cheapest time to convert. Waiting past 73 usually costs more in lifetime tax than it saves.",
      },
      {
        date: "JAN 2025",
        title: "Why We Rebalance on Bands, Not Dates",
        excerpt:
          "A calendar rebalance ignores what the market actually did. Threshold-based rebalancing trades less, harvests more losses, and keeps risk where you set it.",
      },
      {
        date: "NOV 2024",
        title: "Social Security: The Case for Waiting Until 70",
        excerpt:
          "Claiming early feels safer, but for most married couples the survivor-benefit math favors the higher earner delaying as long as possible.",
      },
    ],
    footer: "© 2025 Meridian Wealth Partners.",
  },
  ko: {
    brand: { name: "메리디안 자산관리", tag: "수수료 기반 신의성실 자문사" },
    nav: { services: "서비스", approach: "운용 철학", advisors: "어드바이저", insights: "인사이트", contact: "상담 문의" },
    bookCta: "상담 예약",
    eyebrow: "INSIGHTS",
    title: "장기 투자자를 위한 플래닝 노트",
    intro: "계획을 실제로 앞으로 나아가게 하는 결정들에 대한 짧은, 수수료 기반의 관점.",
    posts: [
      {
        date: "2025.03",
        title: "많은 분들이 놓치는 로스 전환 시기",
        excerpt:
          "은퇴와 의무 인출 사이의 몇 년은 종종 전환하기 가장 유리한 시기입니다. 73세 이후로 미루면 대개 절약하는 것보다 평생 세금 부담이 더 커집니다.",
      },
      {
        date: "2025.01",
        title: "날짜가 아닌 밴드 기준으로 리밸런싱하는 이유",
        excerpt:
          "달력 기준 리밸런싱은 시장이 실제로 어떻게 움직였는지를 무시합니다. 임계값 기반 리밸런싱은 거래를 줄이고, 손실을 더 활용하며, 리스크를 설정한 수준으로 유지합니다.",
      },
      {
        date: "2024.11",
        title: "국민연금(사회보장) 70세까지 늦춰야 하는 이유",
        excerpt:
          "조기 수령이 더 안전하게 느껴지지만, 대부분의 부부에게는 유족 급여 계산상 고소득 배우자가 최대한 늦게 수령하는 편이 유리합니다.",
      },
    ],
    footer: "© 2025 메리디안 자산관리.",
  },
} as const;

export default function MeridianWealthInsights({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/meridian-wealth");
  const insightsPath = localePath(lang, "/portfolio/meridian-wealth/insights");
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();

  return (
    <div className="bg-[#f7f6f2] text-[#1a2332]">
      <header ref={ref} className="border-b border-[#1a2332]/10 bg-[#f7f6f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2332] text-base font-semibold text-[#c99a3b]">
              M
            </span>
            <div>
              <div className="text-base font-semibold leading-none tracking-tight">{t.brand.name}</div>
              <div className="mt-1 text-[10px] tracking-[0.25em] text-[#1a2332]/50">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#1a2332]/75 md:flex">
            <Link href={`${home}#services`} className="transition hover:text-[#c99a3b]">{t.nav.services}</Link>
            <Link href={`${home}#approach`} className="transition hover:text-[#c99a3b]">{t.nav.approach}</Link>
            <Link href={`${home}#advisors`} className="transition hover:text-[#c99a3b]">{t.nav.advisors}</Link>
            <Link href={insightsPath} className="text-[#c99a3b]">{t.nav.insights}</Link>
            <Link href={`${home}#contact`} className="transition hover:text-[#c99a3b]">{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={`${home}#contact`}
              className="hidden rounded-full bg-[#1a2332] px-5 py-2.5 text-xs font-semibold tracking-wide text-white sm:inline-block"
            >
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
              <Link href={`${home}#services`} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={`${home}#approach`} onClick={() => setOpen(false)} className="py-2">{t.nav.approach}</Link>
              <Link href={`${home}#advisors`} onClick={() => setOpen(false)} className="py-2">{t.nav.advisors}</Link>
              <Link href={insightsPath} onClick={() => setOpen(false)} className="py-2 text-[#c99a3b]">{t.nav.insights}</Link>
              <Link href={`${home}#contact`} onClick={() => setOpen(false)} className="py-2">{t.nav.contact}</Link>
            </nav>
            <Link
              href={`${home}#contact`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#1a2332] px-5 py-2.5 text-xs font-semibold tracking-wide text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-[#1a2332]/10 md:grid-cols-3">
          {t.posts.map((post) => (
            <article key={post.title} className="bg-[#f7f6f2] p-8">
              <p className="text-xs font-semibold tracking-widest text-[#1a2332]/50">{post.date}</p>
              <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight break-keep text-balance">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{post.excerpt}</p>
            </article>
          ))}
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
