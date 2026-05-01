import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["/platform", "/docs", "/pricing", "/changelog"],
    cta: "Start free →",
    badge: "v3.4 — Postgres Streaming GA",
    hero: {
      titleA: "Production data",
      titleB: "moves at thought speed.",
      body: "B2B teams ship data pipelines in a single line of code, run them in real time, and debug everything from one screen.",
      ctaPrimary: "Get started →",
      ctaSecondary: "View docs",
    },
    terminal: {
      label: "~/nexus-app",
      output: `> nx init checkout-pipeline
✓ Schema synced (4 tables)
✓ Connectors live (kafka, pg, s3)
✓ Realtime endpoint deployed

`,
      url: "https://api.nexus.lab/checkout",
    },
    logos: ["LINEAR", "VERCEL", "STRIPE", "NOTION", "FIGMA", "RAMP"],
    featureLabel: "// feature",
    features: [
      { title: "Realtime Pipeline", desc: "Sub-100ms latency over billions of events without breaking a sweat.", code: "$ nx pipe deploy --region us-east" },
      { title: "Native Observability", desc: "Metrics, traces, and logs — all in one dashboard, all queryable.", code: "nx.observe('checkout.flow')" },
      { title: "Zero-Config Auth", desc: "JWT, OAuth, SAML, passkeys — wire any of them up in one line.", code: "nx.auth.use(['oauth', 'passkey'])" },
    ],
    stats: [
      { v: "99.99%", l: "API uptime" },
      { v: "12B+", l: "Events / day" },
      { v: "47ms", l: "p99 latency" },
      { v: "180+", l: "Customers" },
    ],
    teamLabel: "// from the team",
    teamTitle: "Already running in production at modern SaaS teams.",
    teamBody: "Nexus is infrastructure operated 24/7 by 18 engineers. Every line of our core is open-source, and we ship a 99.99% SLA to enterprise customers.",
    teamCta: "Request a meeting →",
    footer: { copyright: "nexus.lab — © 2025 Nexus Systems Inc.", links: ["status", "security", "github"] },
  },
  ko: {
    nav: ["/platform", "/docs", "/pricing", "/changelog"],
    cta: "Start free →",
    badge: "v3.4 — Postgres Streaming GA",
    hero: {
      titleA: "Production data",
      titleB: "moves at thought speed.",
      body: "B2B 팀이 데이터 파이프라인을 코드 한 줄로 배포하고, 실시간으로 운영하고, 한 화면에서 디버그합니다.",
      ctaPrimary: "Get started →",
      ctaSecondary: "View docs",
    },
    terminal: {
      label: "~/nexus-app",
      output: `> nx init checkout-pipeline
✓ Schema synced (4 tables)
✓ Connectors live (kafka, pg, s3)
✓ Realtime endpoint deployed

`,
      url: "https://api.nexus.lab/checkout",
    },
    logos: ["TOSS", "당근", "리디", "카카오", "라인", "쿠팡"],
    featureLabel: "// feature",
    features: [
      { title: "Realtime Pipeline", desc: "100ms 이하 지연으로 수십억 이벤트를 안정적으로 처리합니다.", code: "$ nx pipe deploy --region kr" },
      { title: "Native Observability", desc: "메트릭, 트레이스, 로그를 단일 대시보드에서 추적합니다.", code: "nx.observe('checkout.flow')" },
      { title: "Zero-Config Auth", desc: "JWT, OAuth, SAML, 패스키까지 한 줄로 연결됩니다.", code: "nx.auth.use(['oauth', 'passkey'])" },
    ],
    stats: [
      { v: "99.99%", l: "API uptime" },
      { v: "12B+", l: "Events / day" },
      { v: "47ms", l: "p99 latency" },
      { v: "180+", l: "Customers" },
    ],
    teamLabel: "// from the team",
    teamTitle: "한국 SaaS 팀이 이미 쓰고 있습니다.",
    teamBody: "Nexus는 18명의 엔지니어가 24/7 운영하는 인프라입니다. 모든 코드는 오픈소스이며, 기업 고객 SLA는 99.99%를 약속합니다.",
    teamCta: "미팅 요청 →",
    footer: { copyright: "nexus.lab — © 2025 Nexus Systems Inc.", links: ["status", "security", "github"] },
  },
} as const;

export default function NexusLab({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-br from-[#7c5cff] to-[#22d3ee]" />
            nexus<span className="text-[#22d3ee]">.lab</span>
          </div>
          <nav className="hidden gap-8 font-mono text-xs text-white/60 md:flex">
            {t.nav.map((n) => (
              <a key={n}>{n}</a>
            ))}
          </nav>
          <a className="rounded-md bg-white px-4 py-2 font-mono text-xs font-bold text-black">
            {t.cta}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, #7c5cff33, transparent 40%), radial-gradient(circle at 80% 30%, #22d3ee33, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee]" />
            {t.badge}
          </span>
          <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            {t.hero.titleA}
            <br />
            <span className="bg-gradient-to-r from-[#7c5cff] via-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
              {t.hero.titleB}
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base text-white/60 md:text-lg">
            {t.hero.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a className="rounded-md bg-gradient-to-r from-[#7c5cff] to-[#22d3ee] px-6 py-3 font-mono text-sm font-bold text-black">
              {t.hero.ctaPrimary}
            </a>
            <a className="rounded-md border border-white/15 px-6 py-3 font-mono text-sm">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mx-auto mt-20 max-w-3xl rounded-xl border border-white/10 bg-black/60 p-6 text-left font-mono text-xs shadow-2xl shadow-[#7c5cff]/20">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-white/40">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3">{t.terminal.label}</span>
            </div>
            <pre className="mt-4 leading-7 text-white/80">
{t.terminal.output}<span className="text-[#22d3ee]">{t.terminal.url}</span>
            </pre>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 font-mono text-sm text-white/40">
          {t.logos.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-3 md:grid-cols-3">
          {t.features.map((f) => (
            <article
              key={f.title}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-[#22d3ee]/40"
            >
              <div className="font-mono text-[11px] text-[#22d3ee]">{t.featureLabel}</div>
              <h3 className="mt-2 text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{f.desc}</p>
              <pre className="mt-6 overflow-x-auto rounded-md bg-black/60 p-3 font-mono text-[11px] text-[#a78bfa]">
                {f.code}
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-transparent via-[#7c5cff]/5 to-transparent py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="bg-gradient-to-r from-[#7c5cff] to-[#22d3ee] bg-clip-text font-mono text-4xl font-black text-transparent md:text-5xl">
                  {s.v}
                </div>
                <div className="mt-2 font-mono text-xs text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop"
              alt="Nexus engineering team"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent" />
          </div>
          <div>
            <div className="font-mono text-[11px] text-[#22d3ee]">{t.teamLabel}</div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              {t.teamTitle}
            </h2>
            <p className="mt-5 text-white/60">
              {t.teamBody}
            </p>
            <a className="mt-8 inline-block rounded-md border border-white/20 px-5 py-2.5 font-mono text-sm">
              {t.teamCta}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 font-mono text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div>{t.footer.copyright}</div>
          <div className="flex gap-5">
            {t.footer.links.map((l) => (
              <a key={l}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
