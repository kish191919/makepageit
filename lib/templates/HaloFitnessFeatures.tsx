"use client";

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
      eyebrow: "Features",
      title: "Everything you need to actually change.",
      body: "HALO isn't a workout log — it's a coach that adjusts to your body every single day, and a community that keeps you showing up.",
    },
    features: [
      { icon: "⚡", title: "AI Coach", desc: "Adjusts every workout's intensity to how your body actually feels today, using your recovery score and recent training load." },
      { icon: "📊", title: "Heart · Sleep · Recovery", desc: "Watch sync across Apple Health and Google Fit, with a single recovery score that's actually useful — not just a number." },
      { icon: "🎯", title: "30-Day Challenge", desc: "Daily check-ins with the friends you started with. Miss a day and the group knows — in a good way." },
      { icon: "🍽️", title: "Meal Guidance", desc: "Simple, flexible nutrition targets that move with your training — no rigid meal plans to fail at." },
      { icon: "🏆", title: "Streaks & XP", desc: "Every session earns XP toward your level. Streaks are protected with one free rest day per week." },
      { icon: "📱", title: "Home Screen Widget", desc: "Today's mission, your recovery score, and your streak — visible before you even open the app." },
    ],
    footer: "© 2025 HALO Fitness. Built for the everyday athlete.",
  },
  ko: {
    brand: "HALO",
    nav: { features: "Features", plans: "Plans", community: "Community" },
    cta: "Get app ↓",
    hero: {
      eyebrow: "Features",
      title: "진짜 변화를 위해 필요한 모든 것.",
      body: "HALO는 단순한 운동 기록 앱이 아닙니다. 매일 내 몸 상태에 맞춰 조정되는 AI 코치와, 계속 나올 수밖에 없게 만드는 커뮤니티입니다.",
    },
    features: [
      { icon: "⚡", title: "AI 코치", desc: "회복 점수와 최근 훈련량을 기반으로 오늘 내 몸 상태에 맞춰 운동 강도를 자동 조정합니다." },
      { icon: "📊", title: "심박·수면·회복", desc: "Apple Health, Google Fit 워치 연동으로 회복 점수 하나로 오늘 컨디션을 한눈에 확인하세요." },
      { icon: "🎯", title: "30일 챌린지", desc: "함께 시작한 친구와 매일 인증. 하루라도 빠지면 바로 티가 나서 오히려 도움이 됩니다." },
      { icon: "🍽️", title: "식단 가이드", desc: "훈련량에 맞춰 유동적으로 조정되는 간단한 영양 목표. 지키기 어려운 빡빡한 식단표는 없습니다." },
      { icon: "🏆", title: "스트릭 · XP", desc: "모든 운동이 레벨업으로 이어지는 XP가 됩니다. 주 1회 무료 휴식일로 스트릭을 지킬 수 있어요." },
      { icon: "📱", title: "홈 화면 위젯", desc: "앱을 열기 전에도 오늘의 미션, 회복 점수, 스트릭을 바로 확인하세요." },
    ],
    footer: "© 2025 HALO Fitness. Built for the everyday athlete.",
  },
} as const;

export default function HaloFitnessFeatures({ lang }: { lang: Lang }) {
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
            <Link href={featuresPath} className="font-semibold text-white">{t.nav.features}</Link>
            <Link href={plansPath} className="transition hover:text-white">{t.nav.plans}</Link>
            <Link href={communityPath} className="transition hover:text-white">{t.nav.community}</Link>
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
              <Link href={featuresPath} onClick={() => setOpen(false)} className="py-2 font-semibold text-white">{t.nav.features}</Link>
              <Link href={plansPath} onClick={() => setOpen(false)} className="py-2">{t.nav.plans}</Link>
              <Link href={communityPath} onClick={() => setOpen(false)} className="py-2">{t.nav.community}</Link>
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

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #ff3d8b66, transparent 40%), radial-gradient(circle at 80% 40%, #ffb44a66, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.hero.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight md:text-6xl break-keep text-balance">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 break-keep text-pretty">{t.hero.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {t.features.map((f) => (
            <article
              key={f.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-5 text-xl font-bold break-keep text-balance">{f.title}</h3>
              <p className="mt-3 text-sm text-white/60 break-keep text-pretty">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40 break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
