import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: "HALO",
    nav: { features: "Features", plans: "Plans", community: "Community" },
    cta: "Get app ↓",
    hero: {
      eyebrow: "Plans",
      title: "Pick your pace.",
      body: "Start free. Upgrade whenever the AI Coach earns it — cancel anytime, no questions asked.",
    },
    tiers: [
      {
        name: "Free",
        price: "$0",
        unit: "/ forever",
        tag: "",
        cta: "Start free",
        features: ["Workout logging", "Basic recovery score", "Community feed access", "1 active challenge"],
      },
      {
        name: "Plus",
        price: "$9",
        unit: "/ month",
        tag: "Most popular",
        cta: "Start 7-day free trial",
        features: ["Everything in Free", "AI Coach daily adjustments", "Full heart · sleep · recovery sync", "Unlimited challenges", "Home screen widget"],
      },
      {
        name: "Pro",
        price: "$19",
        unit: "/ month",
        tag: "",
        cta: "Start 7-day free trial",
        features: ["Everything in Plus", "Personalized meal guidance", "Priority coach tuning", "Advanced training analytics", "1:1 monthly check-in"],
      },
    ],
    note: "7 days free on Plus and Pro. Cancel anytime, no card required to start.",
    footer: "© 2025 HALO Fitness. Built for the everyday athlete.",
  },
  ko: {
    brand: "HALO",
    nav: { features: "Features", plans: "Plans", community: "Community" },
    cta: "Get app ↓",
    hero: {
      eyebrow: "Plans",
      title: "나에게 맞는 속도로 시작하세요.",
      body: "무료로 시작하고, AI 코치가 필요해질 때 업그레이드하세요. 언제든 해지 가능합니다.",
    },
    tiers: [
      {
        name: "Free",
        price: "$0",
        unit: "/ 평생 무료",
        tag: "",
        cta: "무료로 시작하기",
        features: ["운동 기록", "기본 회복 점수", "커뮤니티 피드 열람", "챌린지 1개 참여"],
      },
      {
        name: "Plus",
        price: "$9",
        unit: "/ 월",
        tag: "가장 인기",
        cta: "7일 무료 체험 시작",
        features: ["Free 기능 전체", "AI 코치 일일 강도 조정", "심박·수면·회복 전체 연동", "챌린지 무제한 참여", "홈 화면 위젯"],
      },
      {
        name: "Pro",
        price: "$19",
        unit: "/ 월",
        tag: "",
        cta: "7일 무료 체험 시작",
        features: ["Plus 기능 전체", "맞춤 식단 가이드", "코치 우선 튜닝", "고급 트레이닝 분석", "월 1회 1:1 체크인"],
      },
    ],
    note: "Plus, Pro는 7일 무료 체험이 제공됩니다. 카드 등록 없이 시작, 언제든 해지 가능합니다.",
    footer: "© 2025 HALO Fitness. Built for the everyday athlete.",
  },
} as const;

export default function HaloFitnessPlans({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/halo-fitness");
  const featuresPath = localePath(lang, "/portfolio/halo-fitness/features");
  const plansPath = localePath(lang, "/portfolio/halo-fitness/plans");
  const communityPath = localePath(lang, "/portfolio/halo-fitness/community");

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2 text-lg font-black tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-[#ff3d8b] to-[#ffb44a]" />
            {t.brand}
          </Link>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <Link href={featuresPath} className="transition hover:text-white">{t.nav.features}</Link>
            <Link href={plansPath} className="font-semibold text-white">{t.nav.plans}</Link>
            <Link href={communityPath} className="transition hover:text-white">{t.nav.community}</Link>
          </nav>
          <Link href={`${home}#hero`} className="rounded-full bg-gradient-to-r from-[#ff3d8b] to-[#ffb44a] px-5 py-2 text-sm font-bold text-black">
            {t.cta}
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 10%, #6c5cff66, transparent 40%), radial-gradient(circle at 10% 30%, #ff3d8b66, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t.hero.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight md:text-6xl break-keep text-balance">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg text-white/70 break-keep text-pretty">{t.hero.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {t.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                tier.tag ? "border-[#ff3d8b]/60 bg-gradient-to-b from-[#ff3d8b]/10 to-transparent" : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {tier.tag && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-[#ff3d8b] to-[#ffb44a] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                  {tier.tag}
                </span>
              )}
              <h3 className="text-lg font-bold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black">{tier.price}</span>
                <span className="text-sm text-white/50">{tier.unit}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-white/70">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-[#ffb44a]">✓</span>
                    <span className="break-keep text-pretty">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-bold ${
                  tier.tag ? "bg-gradient-to-r from-[#ff3d8b] to-[#ffb44a] text-black" : "border border-white/30 text-white"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-white/40 break-keep text-pretty">{t.note}</p>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40 break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
