"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { short: "FORM & FLOW", full: "FORM & FLOW PILATES" },
    nav: { programs: "Programs", trainers: "Trainers", membership: "Membership" },
    bookCta: "Book a Class",
    hero: {
      eyebrow: "Membership",
      title: "Pay only for what you use.",
      body: "Three plans, one simple rule — no long contracts, no auto-renew surprises. Compare sessions and pick what fits how often you actually come in.",
    },
    plans: [
      { name: "1:1 Private", price: "10 sessions · $890", features: ["Dedicated trainer", "Priority scheduling", "Free intake assessment"] },
      { name: "Group Reformer", price: "Unlimited · $260 / mo", features: ["2× per week", "One free no-show pass", "Pick any trainer"], highlight: true },
      { name: "Morning Mat", price: "10 sessions · $170", features: ["Weekday 6:30 / 7:30 AM", "Use within 6 months", "Bring a friend once, free"] },
    ],
    chooseCta: "Choose Plan",
    footer: "© 2025 FORM & FLOW · Brooklyn",
  },
  ko: {
    brand: { short: "MOA", full: "MOA PILATES" },
    nav: { programs: "Programs", trainers: "Trainers", membership: "Membership" },
    bookCta: "Book a Class",
    hero: {
      eyebrow: "Membership",
      title: "필요한 만큼만, 정직하게.",
      body: "세 가지 플랜, 규칙은 하나 — 장기 약정도, 자동 결제 걱정도 없습니다. 얼마나 자주 오는지에 따라 요금을 비교하고 선택하세요.",
    },
    plans: [
      { name: "1:1 프라이빗", price: "10회 / 95만원", features: ["전담 강사", "개인 일정 우선 예약", "상담 + 진단 무료"] },
      { name: "그룹 리포머", price: "월 정기 / 28만원", features: ["주 2회 무제한", "노쇼 1회 면제", "강사 자유 선택"], highlight: true },
      { name: "모닝 매트", price: "10회 / 18만원", features: ["평일 06:30/07:30", "사용 기한 6개월", "친구 1회 동반 무료"] },
    ],
    chooseCta: "Choose Plan",
    footer: "© 2025 MOA · Seoul Seongsu",
  },
} as const;

export default function MoaPilatesMembership({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/moa-pilates");
  const programsPath = localePath(lang, "/portfolio/moa-pilates/programs");
  const trainersPath = localePath(lang, "/portfolio/moa-pilates/trainers");
  const membershipPath = localePath(lang, "/portfolio/moa-pilates/membership");

  return (
    <div className="bg-[#0e0d0c] text-white">
      <header ref={ref} className="border-b border-white/10 bg-[#0e0d0c]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="text-xl font-bold tracking-[0.3em]">{t.brand.short}</Link>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-white/70 md:flex">
            <Link href={programsPath} className="transition hover:text-white">{t.nav.programs}</Link>
            <Link href={trainersPath} className="transition hover:text-white">{t.nav.trainers}</Link>
            <Link href={membershipPath} className="font-semibold text-white">{t.nav.membership}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={`${home}#booking`} className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-widest">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs uppercase tracking-widest text-white/70">
              <Link href={programsPath} onClick={() => setOpen(false)} className="py-2">{t.nav.programs}</Link>
              <Link href={trainersPath} onClick={() => setOpen(false)} className="py-2">{t.nav.trainers}</Link>
              <Link href={membershipPath} onClick={() => setOpen(false)} className="py-2 font-semibold text-white">{t.nav.membership}</Link>
            </nav>
            <Link
              href={`${home}#booking`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full border border-white px-5 py-2 text-xs uppercase tracking-widest"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t.hero.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-light md:text-5xl break-keep text-balance">{t.hero.title}</h1>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/70 break-keep text-pretty">{t.hero.body}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {t.plans.map((p) => {
            const highlight = "highlight" in p && p.highlight;
            return (
              <div
                key={p.name}
                className={`rounded-3xl p-8 ring-1 ${
                  highlight ? "bg-white text-[#0e0d0c] ring-transparent" : "bg-white/[0.04] ring-white/10"
                }`}
              >
                <h3 className="text-lg uppercase tracking-widest break-keep text-balance">{p.name}</h3>
                <p className="mt-6 text-3xl font-light">{p.price}</p>
                <ul className={`mt-8 space-y-2 text-sm ${highlight ? "text-black/70" : "text-white/70"}`}>
                  {p.features.map((f) => (
                    <li key={f}>· {f}</li>
                  ))}
                </ul>
                <a
                  className={`mt-10 block rounded-full px-5 py-3 text-center text-xs uppercase tracking-widest ${
                    highlight ? "bg-[#0e0d0c] text-white" : "border border-white/30"
                  }`}
                >
                  {t.chooseCta}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-xs uppercase tracking-widest text-white/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <Link href={home} className="font-bold text-white/80 tracking-[0.3em]">{t.brand.full}</Link>
          <div>{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
