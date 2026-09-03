"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "WILLOWBROOK DENTAL CARE",
    nav: { services: "Services", team: "Our Team", booking: "Booking", reviews: "Reviews", visit: "Visit" },
    bookCta: "Book a Visit",
    label: "ONLINE BOOKING",
    title: "Book your visit in under a minute",
    intro: "Choose a service, pick a time, and we'll confirm by text within one business hour.",
    form: {
      name: { label: "Name", placeholder: "Jane Doe" },
      phone: { label: "Phone", placeholder: "(503) 000-0000" },
      service: { label: "Service", placeholder: "Select a service" },
      dentist: { label: "Dentist", placeholder: "Select a dentist" },
      date: { label: "Date" },
      time: { label: "Time" },
      submit: "Confirm Booking →",
    },
    serviceOptions: ["General & Preventive", "Cosmetic Dentistry", "Invisalign®", "Same-Day Crowns", "Teeth Whitening", "Root Canal Therapy", "Emergency Dental Care"],
    dentistOptions: ["Dr. Emily Novak", "Dr. Marcus Webb", "Dr. Priya Anand"],
    note: "Free cancellation up to 24 hours before your appointment.",
    confirmation: {
      title: "Booking request received",
      body: "We'll confirm your appointment by text within one business hour.",
      summaryLabel: "Your request",
      again: "Book another appointment",
    },
    footer: { address: "482 Willowbrook Ave, Portland OR 97214 · (503) 555-0148", legal: "© 2026 Willowbrook Dental Care. All rights reserved." },
  },
  ko: {
    brand: "WILLOWBROOK DENTAL",
    nav: { services: "진료안내", team: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "ONLINE BOOKING",
    title: "1분이면 끝나는 예약",
    intro: "진료 항목과 원하는 시간을 선택하시면, 영업시간 기준 1시간 이내 문자로 확정 안내해드립니다.",
    form: {
      name: { label: "이름", placeholder: "홍길동" },
      phone: { label: "연락처", placeholder: "010-0000-0000" },
      service: { label: "희망 진료", placeholder: "진료 항목을 선택하세요" },
      dentist: { label: "담당의", placeholder: "담당의를 선택하세요" },
      date: { label: "희망 날짜" },
      time: { label: "희망 시간" },
      submit: "예약 확정하기 →",
    },
    serviceOptions: ["일반 · 예방진료", "심미치료", "인비절라인", "당일 크라운", "치아 미백", "신경치료", "응급 진료"],
    dentistOptions: ["노박 원장", "웹 원장", "아난드 원장"],
    note: "예약 24시간 전까지 취소 시 위약금이 없습니다.",
    confirmation: {
      title: "예약 요청이 접수되었습니다",
      body: "영업시간 기준 1시간 이내 문자로 예약을 확정해드립니다.",
      summaryLabel: "예약 요청 내용",
      again: "다른 예약 신청하기",
    },
    footer: { address: "서울특별시 서초구 반포대로 ○○ · 02-000-0000", legal: "© 2026 Willowbrook Dental Care. 의료광고심의필 제2026-XXXXXX호" },
  },
} as const;

const emptyValues = { name: "", phone: "", service: "", dentist: "", date: "", time: "" };

export default function WillowbrookDentalBooking({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/willowbrook-dental");
  const [values, setValues] = useState(emptyValues);
  const [submitted, setSubmitted] = useState(false);
  const todayStr = new Date().toISOString().slice(0, 10);

  function handleChange<K extends keyof typeof emptyValues>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }
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
            <Link href={navPaths.booking} className="font-semibold text-[#2f7d6b]">{t.nav.booking}</Link>
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
              <Link href={navPaths.services} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={navPaths.team} onClick={() => setOpen(false)} className="py-2">{t.nav.team}</Link>
              <Link href={navPaths.booking} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#2f7d6b]">{t.nav.booking}</Link>
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

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#2f7d6b]">{t.label}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 break-keep text-pretty">{t.intro}</p>

        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#2f7d6b] to-[#1f5b4d] p-8 text-white md:p-12">
          {submitted ? (
            <div>
              <h2 className="text-2xl font-bold break-keep text-balance">{t.confirmation.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80 break-keep text-pretty">{t.confirmation.body}</p>
              <dl className="mt-6 space-y-3 rounded-2xl bg-white/10 p-5 text-sm">
                <p className="text-xs font-semibold tracking-[0.2em] text-white/60">{t.confirmation.summaryLabel}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <dt className="text-white/70">{t.form.name.label}</dt>
                  <dd className="font-medium">{values.name}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-white/70">{t.form.phone.label}</dt>
                  <dd className="font-medium">{values.phone}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-white/70">{t.form.service.label}</dt>
                  <dd className="font-medium">{values.service}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-white/70">{t.form.dentist.label}</dt>
                  <dd className="font-medium">{values.dentist}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-white/70">{t.form.date.label} / {t.form.time.label}</dt>
                  <dd className="font-medium">{values.date} · {values.time}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setValues(emptyValues);
                }}
                className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
              >
                {t.confirmation.again}
              </button>
            </div>
          ) : (
            <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-xs text-white/70">{t.form.name.label}</span>
                <input
                  type="text"
                  required
                  value={values.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder={t.form.name.placeholder}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-xs text-white/70">{t.form.phone.label}</span>
                <input
                  type="tel"
                  required
                  value={values.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder={t.form.phone.placeholder}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-xs text-white/70">{t.form.service.label}</span>
                <select
                  required
                  value={values.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white outline-none [&>option]:text-slate-900"
                >
                  <option value="" disabled>{t.form.service.placeholder}</option>
                  {t.serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs text-white/70">{t.form.dentist.label}</span>
                <select
                  required
                  value={values.dentist}
                  onChange={(e) => handleChange("dentist", e.target.value)}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white outline-none [&>option]:text-slate-900"
                >
                  <option value="" disabled>{t.form.dentist.placeholder}</option>
                  {t.dentistOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs text-white/70">{t.form.date.label}</span>
                <input
                  type="date"
                  required
                  min={todayStr}
                  value={values.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white outline-none [color-scheme:dark]"
                />
              </label>
              <label className="block">
                <span className="text-xs text-white/70">{t.form.time.label}</span>
                <input
                  type="time"
                  required
                  value={values.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white outline-none [color-scheme:dark]"
                />
              </label>
              <button
                type="submit"
                className="mt-2 w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 sm:col-span-2"
              >
                {t.form.submit}
              </button>
            </form>
          )}
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
