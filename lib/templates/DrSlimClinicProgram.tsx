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
      eyebrow: "Program",
      title: "One system, four steps.",
      body: "Every patient goes through the same validated path — body composition analysis, weekly 1:1 director visits, real-food meal coaching, and a maintenance track built to prevent rebound.",
    },
    steps: [
      {
        n: "01",
        title: "Body Composition Analysis",
        desc: "InBody scan plus a full metabolic intake — we map muscle, fat, and water before writing a single recommendation.",
      },
      {
        n: "02",
        title: "Weekly 1:1 Director Visits",
        desc: "The medical director — not a rotating staff — reviews your progress and adjusts the plan every single week.",
      },
      {
        n: "03",
        title: "Real-Food Meal Coaching",
        desc: "No starving. A livable meal plan built around food you already eat, with weekly check-ins to keep it honest.",
      },
      {
        n: "04",
        title: "Maintenance Track",
        desc: "Three months of structured follow-up after your goal weight, specifically designed to prevent rebound.",
      },
    ],
    cta2: {
      title: "Start with the 30-second assessment.",
      body: "See which step of the program fits your body today.",
      button: "Get My Free Assessment →",
    },
    footer: "Licensed wellness clinic NYC · Contour Wellness Clinic · Director: Dr. K.",
  },
  ko: {
    brand: { left: "DR.", right: "SLIM" },
    nav: { program: "프로그램", doctor: "원장 소개", location: "오시는길" },
    cta: "☎ 무료 상담 1:1",
    hero: {
      eyebrow: "프로그램 안내",
      title: "하나의 시스템, 네 단계.",
      body: "모든 환자는 동일한 검증된 과정을 거칩니다. 체성분 정밀 분석, 매주 1:1 원장 진료, 굶지 않는 한식 식단 코칭, 그리고 요요를 막는 유지관리 프로그램까지.",
    },
    steps: [
      {
        n: "01",
        title: "체성분 정밀 분석",
        desc: "인바디 검사와 대사 상태 문진을 함께 진행해, 근육·체지방·수분 밸런스를 먼저 파악한 뒤 계획을 세웁니다.",
      },
      {
        n: "02",
        title: "매주 1:1 원장 진료",
        desc: "돌아가며 상담하는 직원이 아니라, 원장이 매주 직접 경과를 확인하고 처방을 조정합니다.",
      },
      {
        n: "03",
        title: "굶지 않는 한식 식단 코칭",
        desc: "무리한 절식 없이, 이미 먹던 음식을 기반으로 짠 식단을 매주 점검하며 실천 가능하게 유지합니다.",
      },
      {
        n: "04",
        title: "유지관리 프로그램",
        desc: "목표 체중 도달 후 3개월간 이어지는 관리 과정으로, 요요를 원천 차단하도록 설계되어 있습니다.",
      },
    ],
    cta2: {
      title: "30초 무료 진단부터 시작하세요.",
      body: "지금 내 몸 상태가 프로그램의 어느 단계에 해당하는지 확인해보세요.",
      button: "무료 진단 받기 →",
    },
    footer: "의료광고 사전심의필 제2025-1234호 · 닥터슬림 의원 · 대표원장 김OO",
  },
} as const;

export default function DrSlimClinicProgram({ lang }: { lang: Lang }) {
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
            <Link href={programPath} className="text-[#0091ff]">{t.nav.program}</Link>
            <Link href={doctorPath} className="transition hover:text-[#0091ff]">{t.nav.doctor}</Link>
            <Link href={locationPath} className="transition hover:text-[#0091ff]">{t.nav.location}</Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={`${home}#assessment`}
              className="rounded-full bg-[#0091ff] px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-[#0091ff]/30 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {t.cta}
            </Link>
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
              <Link href={programPath} onClick={() => setOpen(false)} className="py-2 text-[#0091ff]">{t.nav.program}</Link>
              <Link href={doctorPath} onClick={() => setOpen(false)} className="py-2">{t.nav.doctor}</Link>
              <Link href={locationPath} onClick={() => setOpen(false)} className="py-2">{t.nav.location}</Link>
            </nav>
          </div>
        )}
      </header>

      <section className="bg-gradient-to-br from-[#e7f4ff] via-white to-[#fff7e6] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0091ff]">{t.hero.eyebrow}</p>
          <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl break-keep text-balance">{t.hero.title}</h1>
          <p className="mt-5 text-slate-600 break-keep text-pretty">{t.hero.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {t.steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-100">
              <div className="text-3xl font-black text-[#0091ff]/30">{s.n}</div>
              <h3 className="mt-3 text-xl font-bold break-keep text-balance">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 break-keep text-pretty">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0091ff] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black md:text-5xl break-keep text-balance">{t.cta2.title}</h2>
          <p className="mt-4 text-white/90 break-keep text-pretty">{t.cta2.body}</p>
          <Link
            href={`${home}#assessment`}
            className="mt-8 inline-block rounded-full bg-white px-10 py-4 text-base font-black text-[#0091ff] shadow-2xl"
          >
            {t.cta2.button}
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 py-6 text-center text-[11px] text-slate-400 break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
