"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "MERIDIAN WEALTH PARTNERS", tag: "FEE-ONLY FIDUCIARY ADVISORS" },
    nav: { services: "Services", approach: "Our Approach", advisors: "Advisors", insights: "Insights", contact: "Contact" },
    bookCta: "Schedule a Consultation",
    eyebrow: "ADVISORS",
    title: "Your planning team",
    intro:
      "Three senior advisors, one shared standard: every client works directly with a partner, from the first call through every review after.",
    principles: [
      { title: "Partner-Led", desc: "A senior advisor owns your relationship from day one — no hand-offs to an associate you've never met." },
      { title: "CFP® / CFA® Credentialed", desc: "Every advisor holds a fiduciary credential and completes ongoing continuing education." },
      { title: "One-Business-Day Response", desc: "Questions between reviews get a direct reply from your advisor, usually the same day." },
    ],
    advisors: [
      {
        name: "Margaret Wu",
        role: "CFP®, Managing Partner",
        credentials: "CFP®, Boston University · 22 years practice",
        bio: "Leads the firm's retirement-planning practice and has guided more than 250 households through the transition into retirement. Before founding Meridian, Margaret spent nine years at a wirehouse and left when she decided she'd rather build financial plans than sales quotas. She still takes every new client's first call herself.",
        focus: ["Retirement Planning", "Social Security Strategy", "Client Relationships"],
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "David Alvarez",
        role: "CFA®, Chief Investment Officer",
        credentials: "CFA®, University of Chicago · 16 years practice",
        bio: "Oversees portfolio construction and the firm's investment committee. David spent six years researching factor investing at an institutional asset manager before deciding client portfolios deserved the same discipline as pension-fund mandates. He designed Meridian's threshold-based rebalancing process.",
        focus: ["Portfolio Construction", "Risk Management", "Tax-Aware Investing"],
        image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Rachel Kim",
        role: "CFP®, Senior Wealth Advisor",
        credentials: "CFP®, NYU Stern · 11 years practice",
        bio: "Works primarily with business owners and executives on equity compensation, exit planning, and cash-flow structuring. Rachel spent four years in corporate finance before moving to advisory, which shows in how she reads a stock-option grant — for what it's actually worth after tax, not just what the offer letter says.",
        focus: ["Business Owner Planning", "Equity Compensation", "Tax Strategy"],
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&auto=format&fit=crop",
      },
    ],
    cta: {
      title: "Want to work with a specific advisor?",
      body: "Tell us about your situation and we'll match you with the right partner directly.",
      button: "Schedule a Consultation",
    },
    footer: "© 2025 Meridian Wealth Partners.",
  },
  ko: {
    brand: { name: "메리디안 자산관리", tag: "수수료 기반 신의성실 자문사" },
    nav: { services: "서비스", approach: "운용 철학", advisors: "어드바이저", insights: "인사이트", contact: "상담 문의" },
    bookCta: "상담 예약",
    eyebrow: "ADVISORS",
    title: "어드바이저 소개",
    intro: "세 명의 시니어 어드바이저가 같은 기준으로 일합니다 — 모든 고객은 첫 상담부터 이후 모든 리뷰까지 담당 파트너와 직접 소통합니다.",
    principles: [
      { title: "파트너 직접 담당", desc: "시니어 어드바이저가 첫날부터 관계를 직접 책임집니다 — 처음 보는 어소시에이트에게 넘기지 않습니다." },
      { title: "CFP® / CFA® 자격 보유", desc: "모든 어드바이저는 신의성실 관련 자격을 보유하고 있으며, 지속적으로 교육을 이수합니다." },
      { title: "1영업일 이내 응답", desc: "정기 리뷰 사이의 문의도 담당 어드바이저가 대부분 당일 직접 답변드립니다." },
    ],
    advisors: [
      {
        name: "우마가렛",
        role: "CFP®, 대표 파트너",
        credentials: "CFP® · 보스턴대학교 · 경력 22년",
        bio: "은퇴 설계 부문을 총괄하며 250여 가구의 은퇴 전환을 함께해왔습니다. 메리디안을 설립하기 전 대형 증권사에서 9년간 근무했고, 판매 목표보다 재무 플랜을 만드는 일을 하고 싶어 독립했습니다. 지금도 신규 고객의 첫 상담은 직접 진행합니다.",
        focus: ["은퇴 설계", "연금 수령 전략", "고객 관계"],
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "데이비드 알바레즈",
        role: "CFA®, 최고투자책임자",
        credentials: "CFA® · 시카고대학교 · 경력 16년",
        bio: "포트폴리오 구성과 투자위원회를 총괄합니다. 기관 자산운용사에서 6년간 팩터 투자를 연구한 뒤, 고객 포트폴리오도 연기금 수준의 규율을 적용해야 한다는 확신으로 자문업으로 옮겼습니다. 메리디안의 임계값 기반 리밸런싱 프로세스를 설계했습니다.",
        focus: ["포트폴리오 구성", "리스크 관리", "세금 고려 투자"],
        image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "김레이첼",
        role: "CFP®, 수석 자산관리사",
        credentials: "CFP® · NYU 스턴경영대학원 · 경력 11년",
        bio: "주로 사업주와 임원 고객을 대상으로 주식보상, 매각 설계, 현금흐름 구조화를 담당합니다. 기업 재무 부서에서 4년간 근무한 경험이 스톡옵션을 분석하는 방식에 그대로 드러납니다 — 제안서에 적힌 숫자가 아니라 세후 실제 가치를 기준으로 봅니다.",
        focus: ["사업주 재무설계", "주식보상", "절세 전략"],
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&auto=format&fit=crop",
      },
    ],
    cta: {
      title: "특정 어드바이저와 상담을 원하시나요?",
      body: "현재 상황을 알려주시면 담당 파트너를 바로 연결해드립니다.",
      button: "상담 예약하기",
    },
    footer: "© 2025 메리디안 자산관리.",
  },
} as const;

export default function MeridianWealthAdvisors({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.approach} className="transition hover:text-[#c99a3b]">{t.nav.approach}</Link>
            <Link href={navPaths.advisors} className="text-[#c99a3b]">{t.nav.advisors}</Link>
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
              <Link href={navPaths.approach} onClick={() => setOpen(false)} className="py-2">{t.nav.approach}</Link>
              <Link href={navPaths.advisors} onClick={() => setOpen(false)} className="py-2 text-[#c99a3b]">{t.nav.advisors}</Link>
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

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-[#1a2332]/10 sm:grid-cols-3">
          {t.principles.map((p) => (
            <div key={p.title} className="bg-white p-6">
              <h2 className="text-lg font-semibold tracking-tight break-keep text-balance">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.advisors.map((a) => (
            <div key={a.name}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#1a2332]/5">
                <Image src={a.image} alt={a.name} fill className="object-cover" />
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight break-keep text-balance">{a.name}</h2>
              <p className="mt-1 text-xs font-semibold text-[#c99a3b]">{a.role}</p>
              <p className="mt-1 text-[11px] text-[#1a2332]/50 break-keep text-pretty">{a.credentials}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{a.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {a.focus.map((f) => (
                  <span key={f} className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#1a2332]/70">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
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
