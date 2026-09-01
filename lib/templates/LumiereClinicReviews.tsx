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
    label: "REVIEWS",
    title: "Real patient reviews",
    average: "4.9",
    basedOn: "Based on 312 reviews",
    list: [
      { rating: 5, text: "Booking and visit were both effortless, and the result speaks for itself.", who: "30s · Hydrating Boost" },
      { rating: 5, text: "They actually listened. No pressure to add anything I didn't need.", who: "40s · Lift & Contour" },
      { rating: 5, text: "Automatic reminders made my schedule painless to manage.", who: "20s · Toning" },
      { rating: 5, text: "My skin has never looked this even. Six months in and still glowing.", who: "30s · Laser Toning" },
      { rating: 4, text: "Great results, just wish evening slots were easier to book.", who: "20s · Acne Care" },
      { rating: 5, text: "Dr. Park explained every step before starting. Felt safe the whole time.", who: "40s · Hydrating Boost" },
    ],
    footer: { address: "115 W 30th St, New York NY 10001 · (212) 555-0142", legal: "© 2025 Lumière Skin Clinic. Licensed dermatology practice." },
  },
  ko: {
    brand: "LUMIÈRE CLINIC",
    nav: { treatments: "시술안내", doctors: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "REVIEWS",
    title: "실제 환자 후기",
    average: "4.9",
    basedOn: "후기 312개 기준",
    list: [
      { rating: 5, text: "예약부터 진료까지 너무 깔끔했어요. 결과도 만족스럽습니다.", who: "30대 여성 · 스킨부스터" },
      { rating: 5, text: "친절하게 상담해주시고 무리한 시술 권유가 없어 신뢰가 갑니다.", who: "40대 여성 · 리프팅" },
      { rating: 5, text: "노쇼 알림톡까지 자동으로 와서 일정 관리가 편했어요.", who: "20대 여성 · 토닝" },
      { rating: 5, text: "6개월째 다니고 있는데 피부 톤이 확실히 균일해졌어요.", who: "30대 여성 · 레이저토닝" },
      { rating: 4, text: "결과는 만족하는데 저녁 시간대 예약이 조금 어려워요.", who: "20대 여성 · 여드름케어" },
      { rating: 5, text: "시술 전에 원장님이 하나하나 설명해주셔서 안심하고 받았어요.", who: "40대 여성 · 스킨부스터" },
    ],
    footer: { address: "서울특별시 강남구 테헤란로 ○○○ · 02-000-0000", legal: "© 2025 Lumière Clinic. 의료광고심의필 제2025-XXXXXX호" },
  },
} as const;

export default function LumiereClinicReviews({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.reviews} className="font-semibold text-[#9b6b4d]">{t.nav.reviews}</Link>
            <Link href={navPaths.visit} className="transition hover:text-[#9b6b4d]">{t.nav.visit}</Link>
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
              <Link href={navPaths.reviews} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#9b6b4d]">{t.nav.reviews}</Link>
              <Link href={navPaths.visit} onClick={() => setOpen(false)} className="py-2">{t.nav.visit}</Link>
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
        <div className="mt-3 flex flex-wrap items-end gap-4">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#9b6b4d]">{t.average}</span>
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
