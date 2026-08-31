"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "HALO",
    nav: { features: "Features", plans: "Plans", community: "Community" },
    cta: "Get app ↓",
    hero: {
      eyebrow: "Community",
      title: "You don't change alone.",
      body: "Every HALO challenge runs in small groups. Real people, real streaks, real accountability — here's what they're saying.",
    },
    stats: [
      { n: "12,408", label: "people started a challenge this week" },
      { n: "120K+", label: "downloads and counting" },
      { n: "4.8 / 5", label: "average app store rating" },
    ],
    testimonials: [
      { handle: "@suhyun.run", text: "5K from 26 to 22 minutes in three months. First real change I've ever felt.", img: 12 },
      { handle: "@minji.lift", text: "Even on rest days the recovery score keeps me locked in.", img: 32 },
      { handle: "@kevin.hiit", text: "Started with four friends. We all stuck with it. Lol.", img: 47 },
      { handle: "@jamie.strong", text: "The AI Coach actually backed off when I was overtraining. That's when I trusted it.", img: 21 },
      { handle: "@noah.moves", text: "My group chat checks the leaderboard every morning before coffee.", img: 8 },
      { handle: "@ellalifts", text: "First app that made a 30-day streak feel doable instead of stressful.", img: 44 },
    ],
    footer: "© 2025 HALO Fitness. Built for the everyday athlete.",
  },
  ko: {
    brand: "HALO",
    nav: { features: "Features", plans: "Plans", community: "Community" },
    cta: "Get app ↓",
    hero: {
      eyebrow: "Community",
      title: "혼자가 아니라서 계속할 수 있어요.",
      body: "모든 HALO 챌린지는 소그룹으로 진행됩니다. 진짜 사람들의 진짜 스트릭과 진짜 서로의 응원 — 직접 들어보세요.",
    },
    stats: [
      { n: "12,408명", label: "이번 주 챌린지 시작" },
      { n: "12만+", label: "누적 다운로드" },
      { n: "4.8 / 5", label: "앱스토어 평균 평점" },
    ],
    testimonials: [
      { handle: "@suhyun_run", text: "3개월 만에 5km 26분 → 22분. 처음 본 변화에요.", img: 12 },
      { handle: "@minji.lift", text: "운동 안 하던 날도 회복 점수가 보여서 동기부여 만렙.", img: 32 },
      { handle: "@kevin_hiit", text: "친구 4명이랑 같이 시작했는데 다 살아남음 ㅋㅋ", img: 47 },
      { handle: "@jamie_strong", text: "오버트레이닝일 때 AI 코치가 강도를 낮춰줘서 그때부터 믿게 됐어요.", img: 21 },
      { handle: "@noah_moves", text: "저희 단톡방은 아침마다 리더보드부터 확인해요.", img: 8 },
      { handle: "@ellalifts", text: "30일 스트릭이 부담스럽지 않고 할 만하다고 느낀 첫 앱이에요.", img: 44 },
    ],
    footer: "© 2025 HALO Fitness. Built for the everyday athlete.",
  },
} as const;

export default function HaloFitnessCommunity({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/halo-fitness");
  const featuresPath = localePath(lang, "/portfolio/halo-fitness/features");
  const plansPath = localePath(lang, "/portfolio/halo-fitness/plans");
  const communityPath = localePath(lang, "/portfolio/halo-fitness/community");

  return (
    <div className="min-h-screen bg-black text-white">
      <header ref={ref} className="border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2 text-lg font-black tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-[#ff3d8b] to-[#ffb44a]" />
            {t.brand}
          </Link>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <Link href={featuresPath} className="transition hover:text-white">{t.nav.features}</Link>
            <Link href={plansPath} className="transition hover:text-white">{t.nav.plans}</Link>
            <Link href={communityPath} className="font-semibold text-white">{t.nav.community}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={`${home}#hero`} className="rounded-full bg-gradient-to-r from-[#ff3d8b] to-[#ffb44a] px-5 py-2 text-sm font-bold text-black">
              {t.cta}
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
            <nav className="flex flex-col gap-1 text-sm text-white/70">
              <Link href={featuresPath} onClick={() => setOpen(false)} className="py-2">{t.nav.features}</Link>
              <Link href={plansPath} onClick={() => setOpen(false)} className="py-2">{t.nav.plans}</Link>
              <Link href={communityPath} onClick={() => setOpen(false)} className="py-2 font-semibold text-white">{t.nav.community}</Link>
            </nav>
            <Link
              href={`${home}#hero`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-gradient-to-r from-[#ff3d8b] to-[#ffb44a] px-5 py-2 text-sm font-bold text-black"
            >
              {t.cta}
            </Link>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-[#ff3d8b]/5 to-transparent">
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.hero.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight md:text-6xl break-keep text-balance">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 break-keep text-pretty">{t.hero.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {t.stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <div className="text-3xl font-black md:text-4xl">{s.n}</div>
              <p className="mt-2 text-sm text-white/60 break-keep text-pretty">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {t.testimonials.map((tt) => (
            <div key={tt.handle} className="rounded-3xl bg-white/5 p-6 backdrop-blur">
              <Image
                src={`https://i.pravatar.cc/120?img=${tt.img}`}
                alt={tt.handle}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <p className="mt-5 text-sm leading-relaxed text-white/80 break-keep text-pretty">"{tt.text}"</p>
              <p className="mt-5 text-xs text-[#ffb44a]">{tt.handle}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40 break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
