import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["/platform", "/docs", "/pricing", "/changelog"],
    cta: "Start free →",
    eyebrow: "// pricing",
    title: "Priced for the pipeline you're running today",
    intro: "Start free. Move to a paid tier when your event volume does, not before.",
    plans: [
      {
        name: "Hobby",
        price: "$0",
        suffix: "/mo",
        desc: "For side projects and proof-of-concepts.",
        features: ["1M events / month", "1 realtime endpoint", "Community support"],
      },
      {
        name: "Team",
        price: "$249",
        suffix: "/mo",
        desc: "For production pipelines with a small team.",
        features: ["50M events / month", "Unlimited endpoints", "Native observability dashboard", "Priority support"],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        suffix: "",
        desc: "For teams running at 99.99% SLA scale.",
        features: ["Unlimited events", "Dedicated infrastructure", "99.99% SLA", "Solutions engineer on call"],
      },
    ],
    footer: { copyright: "nexus.lab — © 2025 Nexus Systems Inc.", links: ["status", "security", "github"] },
  },
  ko: {
    nav: ["/platform", "/docs", "/pricing", "/changelog"],
    cta: "Start free →",
    eyebrow: "// pricing",
    title: "지금 운영하는 파이프라인에 맞는 가격",
    intro: "무료로 시작하세요. 이벤트 볼륨이 늘어날 때 유료 플랜으로 전환하면 됩니다.",
    plans: [
      {
        name: "Hobby",
        price: "$0",
        suffix: "/월",
        desc: "사이드 프로젝트와 PoC를 위한 플랜입니다.",
        features: ["월 100만 이벤트", "실시간 엔드포인트 1개", "커뮤니티 지원"],
      },
      {
        name: "Team",
        price: "$249",
        suffix: "/월",
        desc: "소규모 팀의 프로덕션 파이프라인을 위한 플랜입니다.",
        features: ["월 5천만 이벤트", "엔드포인트 무제한", "Native Observability 대시보드", "우선 지원"],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        suffix: "",
        desc: "99.99% SLA 규모로 운영하는 팀을 위한 플랜입니다.",
        features: ["이벤트 무제한", "전용 인프라", "99.99% SLA", "전담 솔루션 엔지니어"],
      },
    ],
    footer: { copyright: "nexus.lab — © 2025 Nexus Systems Inc.", links: ["status", "security", "github"] },
  },
} as const;

export default function NexusLabPricing({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/nexus-lab");
  const docsPath = localePath(lang, "/portfolio/nexus-lab/docs");
  const pricingPath = localePath(lang, "/portfolio/nexus-lab/pricing");
  const changelogPath = localePath(lang, "/portfolio/nexus-lab/changelog");
  const navHrefs = [`${home}#platform`, docsPath, pricingPath, changelogPath];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-br from-[#7c5cff] to-[#22d3ee]" />
            nexus<span className="text-[#22d3ee]">.lab</span>
          </Link>
          <nav className="hidden gap-8 font-mono text-xs text-white/60 md:flex">
            {t.nav.map((n, i) => (
              <Link key={n} href={navHrefs[i]} className={i === 2 ? "text-white" : "transition hover:text-white"}>
                {n}
              </Link>
            ))}
          </nav>
          <Link href={`${home}#overview`} className="rounded-md bg-white px-4 py-2 font-mono text-xs font-bold text-black">
            {t.cta}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="font-mono text-[11px] text-[#22d3ee]">{t.eyebrow}</div>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-white/60 break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-6 text-left md:grid-cols-3">
          {t.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                "highlighted" in plan && plan.highlighted
                  ? "border-[#22d3ee]/50 bg-gradient-to-b from-[#7c5cff]/10 to-transparent"
                  : "border-white/10"
              }`}
            >
              <h2 className="font-mono text-sm font-bold text-[#22d3ee]">{plan.name}</h2>
              <p className="mt-4 text-4xl font-black tracking-tight">
                {plan.price}
                <span className="ml-1 text-sm font-normal text-white/50">{plan.suffix}</span>
              </p>
              <p className="mt-3 text-sm text-white/60 break-keep text-pretty">{plan.desc}</p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-sm text-white/70">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-[#7c5cff]">✓</span>
                    <span className="break-keep text-pretty">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 font-mono text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div>{t.footer.copyright}</div>
          <div className="flex gap-5">
            {t.footer.links.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
