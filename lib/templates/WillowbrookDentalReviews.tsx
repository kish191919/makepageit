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
    label: "REVIEWS",
    title: "What patients say",
    average: "4.9",
    basedOn: "Based on 480 reviews",
    list: [
      { rating: 5, text: "First dentist visit in years that didn't feel rushed. They walked me through everything.", who: "Patient since 2023" },
      { rating: 5, text: "Got my kid in same-day for a chipped tooth. Calm, kind, and quick.", who: "Parent of two" },
      { rating: 5, text: "Invisalign results were better than I expected, and the payment plan made it easy.", who: "Adult ortho patient" },
      { rating: 5, text: "Same-day crown saved me a second trip. In and out in about 90 minutes.", who: "Patient since 2021" },
      { rating: 4, text: "Great care overall — just wish there were more evening appointment slots.", who: "Working parent" },
      { rating: 5, text: "Dr. Novak explained my treatment plan clearly before recommending anything. Never felt upsold.", who: "New patient" },
    ],
    footer: { address: "482 Willowbrook Ave, Portland OR 97214 · (503) 555-0148", legal: "© 2026 Willowbrook Dental Care. All rights reserved." },
  },
  ko: {
    brand: "WILLOWBROOK DENTAL",
    nav: { services: "진료안내", team: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "REVIEWS",
    title: "환자 후기",
    average: "4.9",
    basedOn: "후기 480개 기준",
    list: [
      { rating: 5, text: "몇 년 만에 치과를 갔는데 서두르지 않고 하나하나 설명해주셔서 좋았어요.", who: "2023년부터 방문" },
      { rating: 5, text: "아이 앞니가 깨져서 급하게 갔는데 당일에 바로 봐주셨어요. 차분하고 친절하세요.", who: "학부모" },
      { rating: 5, text: "인비절라인 결과가 기대 이상이고, 할부도 편하게 되어 있어서 부담이 적었습니다.", who: "성인 교정 환자" },
      { rating: 5, text: "당일 크라운 덕분에 재방문 없이 90분 만에 끝났어요.", who: "2021년부터 방문" },
      { rating: 4, text: "전반적으로 만족하지만 저녁 예약 슬롯이 조금 더 있었으면 좋겠어요.", who: "직장인 학부모" },
      { rating: 5, text: "노박 원장님이 시술 전에 계획을 명확히 설명해주셔서 불필요한 진료 권유가 없다는 느낌을 받았어요.", who: "신환" },
    ],
    footer: { address: "서울특별시 서초구 반포대로 ○○ · 02-000-0000", legal: "© 2026 Willowbrook Dental Care. 의료광고심의필 제2026-XXXXXX호" },
  },
} as const;

export default function WillowbrookDentalReviews({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.services} className="transition hover:text-[#2f7d6b]">{t.nav.services}</Link>
            <Link href={navPaths.team} className="transition hover:text-[#2f7d6b]">{t.nav.team}</Link>
            <Link href={navPaths.booking} className="transition hover:text-[#2f7d6b]">{t.nav.booking}</Link>
            <Link href={navPaths.reviews} className="font-semibold text-[#2f7d6b]">{t.nav.reviews}</Link>
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
              <Link href={navPaths.services} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={navPaths.team} onClick={() => setOpen(false)} className="py-2">{t.nav.team}</Link>
              <Link href={navPaths.booking} onClick={() => setOpen(false)} className="py-2">{t.nav.booking}</Link>
              <Link href={navPaths.reviews} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#2f7d6b]">{t.nav.reviews}</Link>
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
        <div className="mt-3 flex flex-wrap items-end gap-4">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#2f7d6b]">{t.average}</span>
            <span className="text-[#f0a04b]">★★★★★</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-slate-500">{t.basedOn}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.list.map((r, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-[#f0a04b]">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 break-keep text-pretty">“{r.text}”</p>
              <p className="mt-5 text-xs text-slate-500">— {r.who}</p>
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
