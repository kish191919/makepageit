import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["features", "plans", "community"],
    cta: "Get app ↓",
    hero: {
      tag: "⭐ 4.8 · 120K downloads",
      titleA: "The strongest version",
      titleB: "of you, in 30 days",
      body: "An AI trainer that learns your body every day. Start the 30-day challenge — change you can actually see.",
      app1: "⌘ App Store",
      app2: "▶ Google Play",
      socialProof: "12,408 people started the challenge this week",
    },
    appCard: {
      label: "Today's mission",
      xp: "+150 XP",
      mission: "HIIT 25 min — hold heart-rate zone 4",
    },
    features: [
      { icon: "⚡", title: "AI Coach", desc: "Adjusts every workout's intensity to how your body actually feels today" },
      { icon: "📊", title: "Heart · Sleep · Recovery", desc: "Watch sync, with a recovery score that's actually useful" },
      { icon: "🎯", title: "30-Day Challenge", desc: "Daily check-ins with the friends you started with" },
    ],
    realPeopleTitle: "People who actually changed",
    testimonials: [
      { handle: "@suhyun.run", text: "5K from 26 to 22 minutes in three months. First real change I've ever felt.", img: 12 },
      { handle: "@minji.lift", text: "Even on rest days the recovery score keeps me locked in.", img: 32 },
      { handle: "@kevin.hiit", text: "Started with four friends. We all stuck with it. Lol.", img: 47 },
    ],
    bottomCta: {
      titleA: "Today is",
      titleB: "Day 1.",
      body: "7 days free. Cancel anytime. No card needed to start.",
      button: "Start Free →",
    },
    footer: "© 2025 HALO Fitness. Built for the everyday athlete.",
  },
  ko: {
    nav: ["features", "plans", "community"],
    cta: "Get app ↓",
    hero: {
      tag: "⭐ 4.8 · 12만 다운로드",
      titleA: "가장 강한",
      titleB: "30일 후의 나",
      body: "AI 트레이너가 내 몸 상태를 매일 학습합니다. 30일 챌린지로 진짜 변화를 시작하세요.",
      app1: "⌘ App Store",
      app2: "▶ Google Play",
      socialProof: "이번 주 12,408명이 챌린지 시작",
    },
    appCard: {
      label: "오늘의 미션",
      xp: "+150 XP",
      mission: "HIIT 25분 — 심박존 4 유지",
    },
    features: [
      { icon: "⚡", title: "AI 코치", desc: "내 몸 상태에 맞춰 매일 운동 강도를 자동 조정" },
      { icon: "📊", title: "심박·수면·회복", desc: "워치 연동으로 회복까지 점수화" },
      { icon: "🎯", title: "30일 챌린지", desc: "함께 시작한 친구와 매일 인증" },
    ],
    realPeopleTitle: "진짜로 바꾼 사람들",
    testimonials: [
      { handle: "@suhyun_run", text: "3개월 만에 5km 26분 → 22분. 처음 본 변화에요.", img: 12 },
      { handle: "@minji.lift", text: "운동 안 하던 날도 회복 점수가 보여서 동기부여 만렙.", img: 32 },
      { handle: "@kevin_hiit", text: "친구 4명이랑 같이 시작했는데 다 살아남음 ㅋㅋ", img: 47 },
    ],
    bottomCta: {
      titleA: "오늘이,",
      titleB: "챌린지 1일차.",
      body: "7일 무료. 언제든 해지. 카드 등록 없이 시작하세요.",
      button: "무료로 시작하기 →",
    },
    footer: "© 2025 HALO Fitness. Built for the everyday athlete.",
  },
} as const;

export default function HaloFitness({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-black tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-[#ff3d8b] to-[#ffb44a]" />
            HALO
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            {t.nav.map((n) => (
              <a key={n}>{n}</a>
            ))}
          </nav>
          <a className="rounded-full bg-gradient-to-r from-[#ff3d8b] to-[#ffb44a] px-5 py-2 text-sm font-bold text-black">
            {t.cta}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #ff3d8b66, transparent 40%), radial-gradient(circle at 80% 60%, #ffb44a66, transparent 40%), radial-gradient(circle at 50% 90%, #6c5cff66, transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs">
              {t.hero.tag}
            </span>
            <h1 className="mt-7 text-5xl font-black leading-[1] tracking-tight md:text-7xl">
              {t.hero.titleA}
              <br />
              <span className="bg-gradient-to-r from-[#ff3d8b] via-[#ffb44a] to-[#6c5cff] bg-clip-text text-transparent">
                {t.hero.titleB}
              </span>
            </h1>
            <p className="mt-7 max-w-md text-lg text-white/70">
              {t.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-black">
                {t.hero.app1}
              </a>
              <a className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-bold">
                {t.hero.app2}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 text-xs text-white/50">
              <div className="flex -space-x-2">
                {[12, 32, 47, 58].map((i) => (
                  <Image
                    key={i}
                    src={`https://i.pravatar.cc/80?img=${i}`}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full border-2 border-black object-cover"
                  />
                ))}
              </div>
              {t.hero.socialProof}
            </div>
          </div>
          <div className="relative mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-[2.5rem] border-[6px] border-white/10 shadow-2xl shadow-[#ff3d8b]/40">
            <Image
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80&auto=format&fit=crop"
              alt="Halo app"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-black/80 p-4 backdrop-blur">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/60">{t.appCard.label}</span>
                <span className="rounded-full bg-[#ffb44a] px-2 py-0.5 text-[10px] font-bold text-black">{t.appCard.xp}</span>
              </div>
              <p className="mt-2 font-bold">{t.appCard.mission}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#ff3d8b] to-[#ffb44a]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {t.features.map((f) => (
            <article
              key={f.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-sm text-white/60">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-transparent via-[#ff3d8b]/5 to-transparent py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-black md:text-5xl">{t.realPeopleTitle}</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.testimonials.map((tt) => (
              <div key={tt.handle} className="rounded-3xl bg-white/5 p-6 backdrop-blur">
                <Image
                  src={`https://i.pravatar.cc/120?img=${tt.img}`}
                  alt={tt.handle}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="mt-5 text-sm leading-relaxed text-white/80">“{tt.text}”</p>
                <p className="mt-5 text-xs text-[#ffb44a]">{tt.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-4xl font-black leading-tight md:text-6xl">
          {t.bottomCta.titleA}
          <br />
          <span className="bg-gradient-to-r from-[#ff3d8b] to-[#ffb44a] bg-clip-text text-transparent">
            {t.bottomCta.titleB}
          </span>
        </h2>
        <p className="mt-6 text-white/60">{t.bottomCta.body}</p>
        <a className="mt-10 inline-block rounded-full bg-gradient-to-r from-[#ff3d8b] to-[#ffb44a] px-10 py-4 text-base font-black text-black">
          {t.bottomCta.button}
        </a>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        {t.footer}
      </footer>
    </div>
  );
}
