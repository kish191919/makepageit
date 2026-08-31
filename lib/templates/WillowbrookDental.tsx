"use client";

import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "WILLOWBROOK DENTAL CARE",
    nav: { services: "Services", team: "Our Team", booking: "Booking", reviews: "Reviews", visit: "Visit" },
    bookCta: "Book a Visit",
    hero: {
      tag: "Family & Cosmetic Dentistry",
      title: ["A dental visit you'll"],
      titleAccent: "actually look forward to",
      titleEnd: ".",
      body: "Gentle, modern care for the whole family — from routine cleanings to same-day crowns. New patients are usually seen within the week.",
      ctaPrimary: "Book Online",
      ctaSecondary: "New Patient Special",
      stats: [
        { value: "22 yrs", label: "Serving this community" },
        { value: "4.9 / 5", label: "Patient rating" },
        { value: "Same-day", label: "Emergency slots" },
      ],
    },
    servicesSection: { eyebrow: "SERVICES", title: "Care for every stage" },
    services: [
      { title: "General & Preventive", desc: "Cleanings, exams, and digital X-rays", price: "Most insurance accepted" },
      { title: "Cosmetic Dentistry", desc: "Veneers, whitening, and bonding", price: "Free consult" },
      { title: "Invisalign®", desc: "Clear aligners for teens & adults", price: "0% APR financing" },
      { title: "Same-Day Crowns", desc: "CEREC same-visit restorations", price: "One visit, no temporary" },
    ],
    teamSection: { eyebrow: "OUR TEAM", title: "Meet your dentists" },
    team: [
      {
        name: "Dr. Emily Novak",
        role: "Founder · General & Cosmetic Dentistry",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Dr. Marcus Webb",
        role: "Restorative & Implant Dentistry",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Dr. Priya Anand",
        role: "Pediatric & Family Dentistry",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&q=80&auto=format&fit=crop",
      },
    ],
    booking: {
      eyebrow: "ONLINE BOOKING",
      title: "Book in under a minute",
      body: "Pick a service, a time that works, and we'll confirm by text.",
      fields: [
        { label: "Service", value: "Cleaning & Exam ▾" },
        { label: "Date & Time", value: "Sep 9, 2026 (Wed) · 10:00 AM" },
        { label: "Dentist", value: "Dr. Emily Novak" },
        { label: "Phone", value: "(503) ***-****" },
      ],
      submit: "Confirm Booking →",
    },
    reviewsTitle: "What patients say",
    reviews: [
      { rating: 5, text: "First dentist visit in years that didn't feel rushed. They walked me through everything.", who: "Patient since 2023" },
      { rating: 5, text: "Got my kid in same-day for a chipped tooth. Calm, kind, and quick.", who: "Parent of two" },
      { rating: 5, text: "Invisalign results were better than I expected, and the payment plan made it easy.", who: "Adult ortho patient" },
    ],
    footer: { address: "482 Willowbrook Ave, Portland OR 97214 · (503) 555-0148", legal: "© 2026 Willowbrook Dental Care. All rights reserved." },
  },
  ko: {
    brand: "WILLOWBROOK DENTAL",
    nav: { services: "진료안내", team: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    hero: {
      tag: "가족치과 · 심미치료 전문",
      title: ["부담 없이 찾아가는"],
      titleAccent: "윌로우브룩 치과",
      titleEnd: "입니다.",
      body: "정기검진부터 당일 크라운까지, 온 가족을 위한 따뜻하고 꼼꼼한 진료. 신환 예약도 대부분 일주일 내 가능합니다.",
      ctaPrimary: "온라인 예약",
      ctaSecondary: "신환 특가 안내",
      stats: [
        { value: "22년", label: "지역 진료 경력" },
        { value: "4.9 / 5", label: "환자 만족도" },
        { value: "당일", label: "응급 진료 가능" },
      ],
    },
    servicesSection: { eyebrow: "SERVICES", title: "전 연령을 위한 진료" },
    services: [
      { title: "일반 · 예방진료", desc: "스케일링, 검진, 디지털 X-ray", price: "대부분 보험 적용" },
      { title: "심미치료", desc: "라미네이트, 미백, 본딩", price: "무료 상담" },
      { title: "인비절라인", desc: "청소년·성인 투명교정", price: "무이자 할부 가능" },
      { title: "당일 크라운", desc: "CEREC 원데이 보철 치료", price: "임시치아 없이 한 번에" },
    ],
    teamSection: { eyebrow: "OUR TEAM", title: "의료진 소개" },
    team: [
      {
        name: "노박 원장",
        role: "대표원장 · 일반·심미치료",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "웹 원장",
        role: "보철 · 임플란트 전담의",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "아난드 원장",
        role: "소아 · 가족치과 전담의",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&q=80&auto=format&fit=crop",
      },
    ],
    booking: {
      eyebrow: "ONLINE BOOKING",
      title: "1분이면 끝나는 예약",
      body: "진료 항목과 원하는 시간을 선택하시면 문자로 확정 안내해드립니다.",
      fields: [
        { label: "희망 진료", value: "스케일링·검진 ▾" },
        { label: "희망 일시", value: "2026-09-09 (수) 10:00" },
        { label: "담당의", value: "노박 원장" },
        { label: "연락처", value: "010-****-****" },
      ],
      submit: "예약 확정하기 →",
    },
    reviewsTitle: "환자 후기",
    reviews: [
      { rating: 5, text: "몇 년 만에 치과를 갔는데 서두르지 않고 하나하나 설명해주셔서 좋았어요.", who: "2023년부터 방문" },
      { rating: 5, text: "아이 앞니가 깨져서 급하게 갔는데 당일에 바로 봐주셨어요. 차분하고 친절하세요.", who: "학부모" },
      { rating: 5, text: "인비절라인 결과가 기대 이상이고, 할부도 편하게 되어 있어서 부담이 적었습니다.", who: "성인 교정 환자" },
    ],
    footer: { address: "서울특별시 서초구 반포대로 ○○ · 02-000-0000", legal: "© 2026 Willowbrook Dental Care. 의료광고심의필 제2026-XXXXXX호" },
  },
} as const;

export default function WillowbrookDental({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  return (
    <div className="bg-white text-slate-900">
      <header ref={ref} className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2f7d6b] text-xs font-bold text-white">W</span>
            <span className="text-base font-semibold tracking-wide">{t.brand}</span>
          </div>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-[#2f7d6b]">{t.nav.services}</a>
            <a href="#team" className="transition hover:text-[#2f7d6b]">{t.nav.team}</a>
            <a href="#booking" className="transition hover:text-[#2f7d6b]">{t.nav.booking}</a>
            <a href="#reviews" className="transition hover:text-[#2f7d6b]">{t.nav.reviews}</a>
            <a href="#visit" className="transition hover:text-[#2f7d6b]">{t.nav.visit}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#booking" className="rounded-full bg-[#2f7d6b] px-5 py-2 text-xs font-semibold text-white">
              {t.bookCta}
            </a>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm text-slate-600">
              <a href="#services" onClick={() => setOpen(false)} className="py-2">{t.nav.services}</a>
              <a href="#team" onClick={() => setOpen(false)} className="py-2">{t.nav.team}</a>
              <a href="#booking" onClick={() => setOpen(false)} className="py-2">{t.nav.booking}</a>
              <a href="#reviews" onClick={() => setOpen(false)} className="py-2">{t.nav.reviews}</a>
              <a href="#visit" onClick={() => setOpen(false)} className="py-2">{t.nav.visit}</a>
            </nav>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#2f7d6b] px-5 py-2 text-xs font-semibold text-white"
            >
              {t.bookCta}
            </a>
          </div>
        )}
      </header>

      <section className="bg-gradient-to-br from-[#eef6f2] via-white to-[#e6f1ec]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-block rounded-full bg-[#2f7d6b]/10 px-3 py-1 text-xs font-semibold text-[#2f7d6b]">
              {t.hero.tag}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl break-keep text-balance">
              {t.hero.title[0]}<br className="hidden md:block" />
              <span className="text-[#2f7d6b]">{t.hero.titleAccent}</span>{t.hero.titleEnd}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 break-keep text-pretty">
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                {t.hero.ctaPrimary}
              </a>
              <a className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-6">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80&auto=format&fit=crop"
              alt="Dental clinic"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#2f7d6b]">{t.servicesSection.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl break-keep text-balance">{t.servicesSection.title}</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#2f7d6b] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6f2] text-[#2f7d6b]">✦</div>
              <h3 className="mt-5 text-lg font-bold break-keep text-balance">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-500 break-keep text-pretty">{s.desc}</p>
              <p className="mt-6 text-sm font-semibold text-[#2f7d6b]">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="team" className="scroll-mt-24 bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#2f7d6b]">{t.teamSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl break-keep text-balance">{t.teamSection.title}</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.team.map((d) => (
              <div key={d.name} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image src={d.image} alt={d.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold break-keep text-balance">{d.name}</h3>
                  <p className="mt-1 text-sm text-slate-500 break-keep text-pretty">{d.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#2f7d6b] to-[#1f5b4d] p-10 text-white md:p-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/70">{t.booking.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl break-keep text-balance">{t.booking.title}</h2>
          <p className="mt-3 max-w-md text-white/80 break-keep text-pretty">{t.booking.body}</p>
          <div className="mt-10 grid gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur sm:grid-cols-2">
            {t.booking.fields.map((f) => (
              <label key={f.label} className="block">
                <span className="text-xs text-white/70">{f.label}</span>
                <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">{f.value}</div>
              </label>
            ))}
          </div>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            {t.booking.submit}
          </button>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24">
        <h2 className="text-2xl font-bold md:text-3xl break-keep text-balance">{t.reviewsTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-[#f0a04b]">{"★".repeat(r.rating)}</div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 break-keep text-pretty">“{r.text}”</p>
              <p className="mt-5 text-xs text-slate-500">— {r.who}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="visit" className="scroll-mt-24 border-t border-slate-100 bg-slate-900 py-10 text-slate-400">
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
