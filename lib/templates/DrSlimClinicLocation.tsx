"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { left: "CONTOUR", right: "WELLNESS" },
    nav: { program: "Program", doctor: "Our Director", location: "Visit Us" },
    cta: "☎ Free 1:1 Call",
    hero: {
      eyebrow: "Visit Us",
      title: "Come in for your free assessment.",
      body: "One intake visit — body composition, a 1:1 consult with the director, and a plan you can start the same day.",
    },
    info: [
      { label: "Address", value: "412 5th Ave, Suite 8B, New York, NY 10018" },
      { label: "Hours", value: "Mon–Fri 9:00 AM – 8:00 PM · Sat 10:00 AM – 4:00 PM · Closed Sun" },
      { label: "Phone", value: "(212) 555-0148" },
      { label: "Subway", value: "5 min walk from 34th St–Herald Sq (B/D/F/M/N/Q/R/W)" },
    ],
    cardTitle: "📋 30-second free assessment",
    placeholders: { name: "Full name", phone: "Phone (last 4)" },
    submit: "Send",
    note: "* A care manager will text within 1 minute.",
    footer: "Licensed wellness clinic NYC · Contour Wellness Clinic · Director: Dr. K.",
  },
  ko: {
    brand: { left: "DR.", right: "SLIM" },
    nav: { program: "프로그램", doctor: "원장 소개", location: "오시는길" },
    cta: "☎ 무료 상담 1:1",
    hero: {
      eyebrow: "오시는길",
      title: "무료 체질 진단, 방문 한 번으로 시작하세요.",
      body: "체성분 검사부터 원장 1:1 상담까지, 첫 방문 당일 바로 계획을 받아가실 수 있습니다.",
    },
    info: [
      { label: "주소", value: "서울 강남구 테헤란로 123, 8층" },
      { label: "진료시간", value: "평일 9:00 – 20:00 · 토요일 10:00 – 16:00 · 일요일 휴진" },
      { label: "전화", value: "02-555-0148" },
      { label: "오시는길", value: "강남역 3번 출구 도보 5분" },
    ],
    cardTitle: "📋 30초 무료 체질 진단",
    placeholders: { name: "성함", phone: "연락처 뒷자리" },
    submit: "진단 받기",
    note: "* 1분 안에 매니저가 카톡으로 연락드립니다.",
    footer: "의료광고 사전심의필 제2025-1234호 · 닥터슬림 의원 · 대표원장 김OO",
  },
} as const;

export default function DrSlimClinicLocation({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/dr-slim-clinic");
  const programPath = localePath(lang, "/portfolio/dr-slim-clinic/program");
  const doctorPath = localePath(lang, "/portfolio/dr-slim-clinic/doctor");
  const locationPath = localePath(lang, "/portfolio/dr-slim-clinic/location");

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header ref={ref} className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href={home} className="text-xl font-black tracking-tight">
            {t.brand.left}<span className="text-[#0091ff]">{t.brand.right}</span>
          </Link>
          <nav className="hidden gap-7 text-sm font-semibold text-slate-600 md:flex">
            <Link href={programPath} className="transition hover:text-[#0091ff]">{t.nav.program}</Link>
            <Link href={doctorPath} className="transition hover:text-[#0091ff]">{t.nav.doctor}</Link>
            <Link href={locationPath} className="text-[#0091ff]">{t.nav.location}</Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#assessment"
              className="rounded-full bg-[#0091ff] px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-[#0091ff]/30 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {t.cta}
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
          <div className="border-t border-slate-100 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-semibold text-slate-600">
              <Link href={programPath} onClick={() => setOpen(false)} className="py-2">{t.nav.program}</Link>
              <Link href={doctorPath} onClick={() => setOpen(false)} className="py-2">{t.nav.doctor}</Link>
              <Link href={locationPath} onClick={() => setOpen(false)} className="py-2 text-[#0091ff]">{t.nav.location}</Link>
            </nav>
          </div>
        )}
      </header>

      <section className="bg-gradient-to-br from-[#e7f4ff] via-white to-[#fff7e6] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0091ff]">{t.hero.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-black leading-tight md:text-4xl break-keep text-balance">{t.hero.title}</h1>
            <p className="mt-5 text-slate-600 break-keep text-pretty">{t.hero.body}</p>

            <dl className="mt-10 space-y-5">
              {t.info.map((i) => (
                <div key={i.label} className="border-b border-slate-100 pb-4">
                  <dt className="text-xs font-bold uppercase tracking-widest text-slate-400">{i.label}</dt>
                  <dd className="mt-1 text-sm text-slate-700 break-keep text-pretty">{i.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex aspect-[16/9] items-center justify-center rounded-2xl bg-slate-100 text-sm text-slate-400">
              Map
            </div>
          </div>

          <div id="assessment" className="scroll-mt-24 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-100">
            <p className="text-sm font-bold">{t.cardTitle}</p>
            <form className="mt-4 grid gap-2">
              <input
                placeholder={t.placeholders.name}
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0091ff]"
              />
              <input
                placeholder={t.placeholders.phone}
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0091ff]"
              />
              <button className="rounded-lg bg-[#0091ff] px-5 py-3 text-sm font-bold text-white">
                {t.submit}
              </button>
            </form>
            <p className="mt-2 text-[11px] text-slate-400 break-keep text-pretty">{t.note}</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-6 text-center text-[11px] text-slate-400 break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
