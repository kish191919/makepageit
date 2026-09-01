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
    label: "ONLINE BOOKING",
    title: "Book your visit in under a minute",
    intro: "Choose a treatment, pick a time, and we'll confirm by text within one business hour.",
    form: {
      name: { label: "Name", placeholder: "Jane Doe" },
      phone: { label: "Phone", placeholder: "(212) 000-0000" },
      treatment: { label: "Treatment", value: "Hydrating Boost ▾" },
      datetime: { label: "Date & Time", value: "Aug 12, 2025 (Tue) · 2:30 PM ▾" },
      provider: { label: "Provider", value: "Dr. Lauren Park ▾" },
      submit: "Confirm Booking →",
    },
    note: "Free cancellation up to 24 hours before your appointment.",
    footer: { address: "115 W 30th St, New York NY 10001 · (212) 555-0142", legal: "© 2025 Lumière Skin Clinic. Licensed dermatology practice." },
  },
  ko: {
    brand: "LUMIÈRE CLINIC",
    nav: { treatments: "시술안내", doctors: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "온라인 예약",
    title: "1분이면 예약이 끝나요",
    intro: "시술과 원하는 시간을 선택하시면, 영업시간 기준 1시간 이내 문자로 확정해드립니다.",
    form: {
      name: { label: "이름", placeholder: "홍길동" },
      phone: { label: "연락처", placeholder: "010-0000-0000" },
      treatment: { label: "희망 시술", value: "스킨 부스터 ▾" },
      datetime: { label: "희망 일시", value: "2025-08-12 (화) 14:30 ▾" },
      provider: { label: "담당 의료진", value: "이수진 원장 ▾" },
      submit: "예약 확정하기 →",
    },
    note: "예약 24시간 전까지 취소 시 위약금이 없습니다.",
    footer: { address: "서울특별시 강남구 테헤란로 ○○○ · 02-000-0000", legal: "© 2025 Lumière Clinic. 의료광고심의필 제2025-XXXXXX호" },
  },
} as const;

export default function LumiereClinicBooking({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.booking} className="font-semibold text-[#9b6b4d]">{t.nav.booking}</Link>
            <Link href={navPaths.reviews} className="transition hover:text-[#9b6b4d]">{t.nav.reviews}</Link>
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
              <Link href={navPaths.booking} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#9b6b4d]">{t.nav.booking}</Link>
              <Link href={navPaths.reviews} onClick={() => setOpen(false)} className="py-2">{t.nav.reviews}</Link>
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

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#9b6b4d]">{t.label}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 break-keep text-pretty">{t.intro}</p>

        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#9b6b4d] to-[#7a4f35] p-8 text-white md:p-12">
          <form className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs text-white/70">{t.form.name.label}</span>
              <input
                type="text"
                placeholder={t.form.name.placeholder}
                className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
              />
            </label>
            <label className="block">
              <span className="text-xs text-white/70">{t.form.phone.label}</span>
              <input
                type="tel"
                placeholder={t.form.phone.placeholder}
                className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
              />
            </label>
            <label className="block">
              <span className="text-xs text-white/70">{t.form.treatment.label}</span>
              <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">{t.form.treatment.value}</div>
            </label>
            <label className="block">
              <span className="text-xs text-white/70">{t.form.provider.label}</span>
              <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">{t.form.provider.value}</div>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs text-white/70">{t.form.datetime.label}</span>
              <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">{t.form.datetime.value}</div>
            </label>
            <button
              type="button"
              className="mt-2 w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 sm:col-span-2"
            >
              {t.form.submit}
            </button>
          </form>
          <p className="mt-5 text-xs text-white/70 break-keep text-pretty">{t.note}</p>
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
