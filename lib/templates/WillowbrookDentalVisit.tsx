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
    label: "VISIT",
    title: "Find us in Portland",
    address: "482 Willowbrook Ave, Portland OR 97214",
    phone: "(503) 555-0148",
    hoursLabel: "Hours",
    hours: [
      ["Mon – Thu", "8:00 AM – 6:00 PM"],
      ["Friday", "8:00 AM – 3:00 PM"],
      ["Saturday", "9:00 AM – 1:00 PM (by appointment)"],
      ["Sunday", "Closed"],
    ] as [string, string][],
    transitLabel: "Getting here",
    transit: "5 min walk from the Buckman/Willowbrook stop on the 15 bus line.",
    parking: "Free on-site parking lot behind the building, entrance on SE 20th Ave.",
    footer: { address: "482 Willowbrook Ave, Portland OR 97214 · (503) 555-0148", legal: "© 2026 Willowbrook Dental Care. All rights reserved." },
  },
  ko: {
    brand: "WILLOWBROOK DENTAL",
    nav: { services: "진료안내", team: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "오시는 길",
    title: "서울 서초에서 만나요",
    address: "서울특별시 서초구 반포대로 ○○",
    phone: "02-000-0000",
    hoursLabel: "진료시간",
    hours: [
      ["월 – 목", "09:00 – 18:00"],
      ["금요일", "09:00 – 15:00"],
      ["토요일", "09:00 – 13:00 (예약제)"],
      ["일요일", "휴진"],
    ] as [string, string][],
    transitLabel: "오시는 방법",
    transit: "지하철 3·7·9호선 고속터미널역 8번 출구에서 도보 5분.",
    parking: "건물 내 방문 고객용 무료 주차 2시간 제공.",
    footer: { address: "서울특별시 서초구 반포대로 ○○ · 02-000-0000", legal: "© 2026 Willowbrook Dental Care. 의료광고심의필 제2026-XXXXXX호" },
  },
} as const;

export default function WillowbrookDentalVisit({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.reviews} className="transition hover:text-[#2f7d6b]">{t.nav.reviews}</Link>
            <Link href={navPaths.visit} className="font-semibold text-[#2f7d6b]">{t.nav.visit}</Link>
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
              <Link href={navPaths.reviews} onClick={() => setOpen(false)} className="py-2">{t.nav.reviews}</Link>
              <Link href={navPaths.visit} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#2f7d6b]">{t.nav.visit}</Link>
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

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#eef6f2]">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(t.address)}&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.address}
            />
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-slate-900">{t.address}</p>
              <p className="mt-1 text-sm text-slate-500">{t.phone}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#2f7d6b]">{t.hoursLabel}</p>
              <dl className="mt-3 divide-y divide-slate-100 border-y border-slate-100 text-sm">
                {t.hours.map(([day, hrs]) => (
                  <div key={day} className="flex items-center justify-between py-3">
                    <dt className="text-slate-500">{day}</dt>
                    <dd className="font-medium">{hrs}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#2f7d6b]">{t.transitLabel}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 break-keep text-pretty">{t.transit}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 break-keep text-pretty">{t.parking}</p>
            </div>
          </div>
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
