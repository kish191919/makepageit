"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "LUMIÈRE SKIN CLINIC",
    nav: { treatments: "Treatments", doctors: "Doctors", booking: "Booking", reviews: "Reviews", visit: "Visit" },
    bookCta: "Book Now",
    label: "VISIT",
    title: "Find us in Chelsea, New York",
    address: "115 W 30th St, New York NY 10001",
    phone: "(212) 555-0142",
    hoursLabel: "Hours",
    hours: [
      ["Mon – Fri", "10:00 AM – 7:00 PM"],
      ["Saturday", "10:00 AM – 4:00 PM"],
      ["Sunday", "Closed"],
    ] as [string, string][],
    transitLabel: "Getting here",
    transit: "2 min walk from 28 St (1 train) or Herald Sq (B/D/F/M/N/Q/R/W)",
    parking: "Validated parking available at the W 30th St garage.",
    footer: { address: "115 W 30th St, New York NY 10001 · (212) 555-0142", legal: "© 2025 Lumière Skin Clinic. Licensed dermatology practice." },
  },
  ko: {
    brand: "LUMIÈRE CLINIC",
    nav: { treatments: "시술안내", doctors: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "오시는 길",
    title: "서울 강남에서 만나요",
    address: "서울특별시 강남구 테헤란로 415, 3층",
    phone: "02-547-3210",
    hoursLabel: "진료시간",
    hours: [
      ["평일", "10:00 – 19:00"],
      ["토요일", "10:00 – 16:00"],
      ["일요일", "휴진"],
    ] as [string, string][],
    transitLabel: "오시는 방법",
    transit: "지하철 2호선 강남역 3번 출구에서 도보 3분",
    parking: "건물 지하주차장 2시간 무료 발렛 제공.",
    footer: { address: "서울특별시 강남구 테헤란로 415, 3층 · 02-547-3210", legal: "© 2025 Lumière Clinic. 의료광고심의필 제2025-07-01234호" },
  },
} as const;

export default function LumiereClinicVisit({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/lumiere-clinic");
  const navPaths = {
    treatments: localePath(lang, "/portfolio/lumiere-clinic/treatments"),
    doctors: localePath(lang, "/portfolio/lumiere-clinic/doctors"),
    booking: localePath(lang, "/portfolio/lumiere-clinic/booking"),
    reviews: localePath(lang, "/portfolio/lumiere-clinic/reviews"),
    visit: localePath(lang, "/portfolio/lumiere-clinic/visit"),
  } as const;

  return (
    <div className="bg-white text-slate-900">
      <header ref={ref} className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9b6b4d] text-xs font-bold text-white">L</span>
            <span className="text-base font-semibold tracking-wide">{t.brand}</span>
          </Link>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <Link href={navPaths.treatments} className="transition hover:text-[#9b6b4d]">{t.nav.treatments}</Link>
            <Link href={navPaths.doctors} className="transition hover:text-[#9b6b4d]">{t.nav.doctors}</Link>
            <Link href={navPaths.booking} className="transition hover:text-[#9b6b4d]">{t.nav.booking}</Link>
            <Link href={navPaths.reviews} className="transition hover:text-[#9b6b4d]">{t.nav.reviews}</Link>
            <Link href={navPaths.visit} className="font-semibold text-[#9b6b4d]">{t.nav.visit}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={navPaths.booking} className="rounded-full bg-[#9b6b4d] px-5 py-2 text-xs font-semibold text-white">
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
              <Link href={navPaths.treatments} onClick={() => setOpen(false)} className="py-2">{t.nav.treatments}</Link>
              <Link href={navPaths.doctors} onClick={() => setOpen(false)} className="py-2">{t.nav.doctors}</Link>
              <Link href={navPaths.booking} onClick={() => setOpen(false)} className="py-2">{t.nav.booking}</Link>
              <Link href={navPaths.reviews} onClick={() => setOpen(false)} className="py-2">{t.nav.reviews}</Link>
              <Link href={navPaths.visit} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#9b6b4d]">{t.nav.visit}</Link>
            </nav>
            <Link
              href={navPaths.booking}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#9b6b4d] px-5 py-2 text-xs font-semibold text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#9b6b4d]">{t.label}</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#f9f3ee]">
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
              <p className="text-xs font-semibold tracking-[0.2em] text-[#9b6b4d]">{t.hoursLabel}</p>
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
              <p className="text-xs font-semibold tracking-[0.2em] text-[#9b6b4d]">{t.transitLabel}</p>
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
