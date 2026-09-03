"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "WILLOWBROOK DENTAL CARE",
    nav: { services: "Services", team: "Our Team", booking: "Booking", reviews: "Reviews", visit: "Visit" },
    bookCta: "Book a Visit",
    label: "SERVICES",
    title: "Care for every stage, explained up front",
    intro:
      "No surprise treatment plans. We walk you through what's involved, how long it takes, and what it costs before you ever sit in the chair.",
    list: [
      {
        title: "General & Preventive",
        desc: "Cleanings, exams, and digital X-rays",
        detail:
          "Twice-a-year cleanings, a full exam, and low-radiation digital X-rays to catch problems early — the foundation of every visit here.",
        duration: "45 min",
        price: "Most insurance accepted",
      },
      {
        title: "Cosmetic Dentistry",
        desc: "Veneers, whitening, and bonding",
        detail:
          "Porcelain veneers, in-office whitening, and tooth-colored bonding to fix chips, gaps, and discoloration without a full smile makeover.",
        duration: "60–90 min",
        price: "Free consult",
      },
      {
        title: "Invisalign®",
        desc: "Clear aligners for teens & adults",
        detail:
          "A 3D scan maps your full treatment before you commit, so you see the final result before the first aligner ships.",
        duration: "12–18 months",
        price: "0% APR financing",
      },
      {
        title: "Same-Day Crowns",
        desc: "CEREC same-visit restorations",
        detail:
          "In-office milling means a custom porcelain crown is designed, made, and placed in one appointment — no temporary, no second visit.",
        duration: "90 min",
        price: "One visit, no temporary",
      },
      {
        title: "Teeth Whitening",
        desc: "Professional in-office brightening",
        detail:
          "A stronger, faster whitening gel than store shelves carry, applied under supervision for even results with minimal sensitivity.",
        duration: "60 min",
        price: "from $249",
      },
      {
        title: "Root Canal Therapy",
        desc: "Save the tooth, stop the pain",
        detail:
          "Modern rotary instruments and local anesthesia make root canals far more comfortable than their reputation suggests — most patients say it felt like a filling.",
        duration: "60–90 min",
        price: "Most insurance accepted",
      },
      {
        title: "Emergency Dental Care",
        desc: "Same-day relief for urgent issues",
        detail:
          "Chipped tooth, lost filling, or sudden pain — call before 2 PM and we'll typically see you the same day.",
        duration: "Varies",
        price: "Same-day slots held daily",
      },
    ],
    footer: { address: "482 Willowbrook Ave, Portland OR 97214 · (503) 555-0148", legal: "© 2026 Willowbrook Dental Care. All rights reserved." },
  },
  ko: {
    brand: "WILLOWBROOK DENTAL",
    nav: { services: "진료안내", team: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "SERVICES",
    title: "미리 설명해 드리는, 전 연령을 위한 진료",
    intro: "예상치 못한 치료 계획은 없습니다. 진료 전에 내용, 소요 시간, 비용을 먼저 안내해 드립니다.",
    list: [
      {
        title: "일반 · 예방진료",
        desc: "스케일링, 검진, 디지털 X-ray",
        detail: "연 2회 스케일링과 정밀 검진, 저선량 디지털 X-ray로 문제를 조기에 발견합니다 — 모든 진료의 기본입니다.",
        duration: "45분",
        price: "대부분 보험 적용",
      },
      {
        title: "심미치료",
        desc: "라미네이트, 미백, 본딩",
        detail: "라미네이트, 전문 미백, 치아색 본딩으로 큰 시술 없이 깨짐·틈새·변색을 개선합니다.",
        duration: "60~90분",
        price: "무료 상담",
      },
      {
        title: "인비절라인",
        desc: "청소년·성인 투명교정",
        detail: "3D 스캔으로 치료 전체 과정을 미리 시뮬레이션해, 첫 장치를 받기 전에 최종 결과를 확인할 수 있습니다.",
        duration: "12~18개월",
        price: "무이자 할부 가능",
      },
      {
        title: "당일 크라운",
        desc: "CEREC 원데이 보철 치료",
        detail: "원내 밀링 장비로 맞춤 세라믹 크라운을 한 번의 방문에서 설계·제작·장착합니다 — 임시치아도, 재방문도 없습니다.",
        duration: "90분",
        price: "임시치아 없이 한 번에",
      },
      {
        title: "치아 미백",
        desc: "전문 원내 미백 시술",
        detail: "일반 제품보다 강력한 미백제를 전문의 관리 하에 시술하여, 자극은 최소화하고 결과는 고르게 만듭니다.",
        duration: "60분",
        price: "29만원~",
      },
      {
        title: "신경치료",
        desc: "치아를 살리는 통증 치료",
        detail: "회전형 신경치료 기구와 국소마취로 예전보다 훨씬 편안합니다 — 많은 환자분들이 충전치료 정도로 느낍니다.",
        duration: "60~90분",
        price: "대부분 보험 적용",
      },
      {
        title: "응급 진료",
        desc: "당일 통증·파손 대응",
        detail: "치아 파절, 보철물 탈락, 갑작스런 통증 — 오후 2시 이전 연락 주시면 대부분 당일 진료가 가능합니다.",
        duration: "상황에 따라 상이",
        price: "매일 당일 진료 슬롯 확보",
      },
    ],
    footer: { address: "서울특별시 서초구 반포대로 ○○ · 02-000-0000", legal: "© 2026 Willowbrook Dental Care. 의료광고심의필 제2026-XXXXXX호" },
  },
} as const;

export default function WillowbrookDentalServices({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/willowbrook-dental");
  const navPaths = {
    services: localePath(lang, "/portfolio/willowbrook-dental/services"),
    team: localePath(lang, "/portfolio/willowbrook-dental/team"),
    booking: localePath(lang, "/portfolio/willowbrook-dental/booking"),
    reviews: localePath(lang, "/portfolio/willowbrook-dental/reviews"),
    visit: localePath(lang, "/portfolio/willowbrook-dental/visit"),
  } as const;

  return (
    <div className="bg-white text-slate-900">
      <header ref={ref} className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2f7d6b] text-xs font-bold text-white">W</span>
            <span className="text-base font-semibold tracking-wide">{t.brand}</span>
          </Link>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <Link href={navPaths.services} className="font-semibold text-[#2f7d6b]">{t.nav.services}</Link>
            <Link href={navPaths.team} className="transition hover:text-[#2f7d6b]">{t.nav.team}</Link>
            <Link href={navPaths.booking} className="transition hover:text-[#2f7d6b]">{t.nav.booking}</Link>
            <Link href={navPaths.reviews} className="transition hover:text-[#2f7d6b]">{t.nav.reviews}</Link>
            <Link href={navPaths.visit} className="transition hover:text-[#2f7d6b]">{t.nav.visit}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={navPaths.booking} className="rounded-full bg-[#2f7d6b] px-5 py-2 text-xs font-semibold text-white">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-100 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm text-slate-600">
              <Link href={navPaths.services} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#2f7d6b]">{t.nav.services}</Link>
              <Link href={navPaths.team} onClick={() => setOpen(false)} className="py-2">{t.nav.team}</Link>
              <Link href={navPaths.booking} onClick={() => setOpen(false)} className="py-2">{t.nav.booking}</Link>
              <Link href={navPaths.reviews} onClick={() => setOpen(false)} className="py-2">{t.nav.reviews}</Link>
              <Link href={navPaths.visit} onClick={() => setOpen(false)} className="py-2">{t.nav.visit}</Link>
            </nav>
            <Link
              href={navPaths.booking}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#2f7d6b] px-5 py-2 text-xs font-semibold text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#2f7d6b]">{t.label}</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.list.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-7 transition hover:border-[#2f7d6b] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6f2] text-[#2f7d6b]">✦</div>
              <h2 className="mt-5 text-xl font-bold break-keep text-balance">{s.title}</h2>
              <p className="mt-1 text-sm text-slate-500 break-keep text-pretty">{s.desc}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 break-keep text-pretty">{s.detail}</p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
                <span className="text-slate-500">{s.duration}</span>
                <span className="font-semibold text-[#2f7d6b]">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-slate-900 py-10 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-white">{t.brand}</div>
            <p className="mt-1 text-xs break-keep text-pretty">{t.footer.address}</p>
          </div>
          <p className="text-xs break-keep text-pretty">{t.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
