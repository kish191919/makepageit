"use client";

import Image from "next/image";
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
      eyebrow: "Our Director",
      name: "Dr. K., M.D.",
      title: "Medical Director, Contour Wellness Clinic",
      quote: "“Sustainable weight loss isn't about willpower — it's about a plan your body and your life can actually keep.”",
    },
    credentials: [
      "M.D., Board Certified in Family Medicine",
      "Certified Obesity Medicine Physician",
      "12+ years treating metabolic and weight-related conditions",
      "1:1 consult on every single patient, every single week",
    ],
    bodyTitle: "Why 1:1, every week",
    body: "Most weight-loss clinics rotate patients through whichever staff member is free. Here, every one of the 12,400+ patients we've treated has been seen weekly by the same director — because a plan that isn't adjusted as your body changes stops working within a month.",
    footer: "Licensed wellness clinic NYC · Contour Wellness Clinic · Director: Dr. K.",
  },
  ko: {
    brand: { left: "DR.", right: "SLIM" },
    nav: { program: "프로그램", doctor: "원장 소개", location: "오시는길" },
    cta: "☎ 무료 상담 1:1",
    hero: {
      eyebrow: "원장 소개",
      name: "김OO 원장",
      title: "닥터슬림 의원 대표원장",
      quote: "“다이어트는 의지의 문제가 아니라, 내 몸과 생활이 실제로 유지할 수 있는 계획인가의 문제입니다.”",
    },
    credentials: [
      "의학박사 · 가정의학과 전문의",
      "대한비만학회 인증의",
      "대사·체중 질환 진료 경력 12년 이상",
      "환자 전원 매주 1:1 직접 진료 원칙",
    ],
    bodyTitle: "왜 매주 1:1 진료인가",
    body: "대부분의 다이어트 클리닉은 그때그때 비어있는 직원이 상담을 진행합니다. 닥터슬림에서는 지금까지 진료한 12,400명 이상의 환자 전원을 매주 같은 원장이 직접 확인합니다 — 몸이 변하는 속도에 맞춰 처방을 조정하지 않으면, 계획은 한 달도 안 되어 무너지기 때문입니다.",
    footer: "의료광고 사전심의필 제2025-1234호 · 닥터슬림 의원 · 대표원장 김OO",
  },
} as const;

export default function DrSlimClinicDoctor({ lang }: { lang: Lang }) {
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
            <Link href={doctorPath} className="text-[#0091ff]">{t.nav.doctor}</Link>
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
              <Link href={programPath} onClick={() => setOpen(false)} className="py-2">{t.nav.program}</Link>
              <Link href={doctorPath} onClick={() => setOpen(false)} className="py-2 text-[#0091ff]">{t.nav.doctor}</Link>
              <Link href={locationPath} onClick={() => setOpen(false)} className="py-2">{t.nav.location}</Link>
            </nav>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80&auto=format&fit=crop"
              alt={t.hero.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0091ff]">{t.hero.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-black md:text-4xl break-keep text-balance">{t.hero.name}</h1>
            <p className="mt-1 text-sm font-semibold text-slate-500">{t.hero.title}</p>
            <p className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm leading-relaxed text-slate-700 break-keep text-pretty">
              {t.hero.quote}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              {t.credentials.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-[#0091ff]">✓</span>
                  <span className="break-keep text-pretty">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-black md:text-3xl break-keep text-balance">{t.bodyTitle}</h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-600 break-keep text-pretty">{t.body}</p>
        </div>
      </section>

      <footer className="bg-slate-900 py-6 text-center text-[11px] text-slate-400 break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
