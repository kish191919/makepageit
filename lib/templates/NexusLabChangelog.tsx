import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["/platform", "/docs", "/pricing", "/changelog"],
    cta: "Start free →",
    eyebrow: "// changelog",
    title: "What shipped",
    intro: "Every release, in order. We ship weekly and tag breaking changes in bold.",
    entries: [
      {
        version: "v3.4",
        date: "MAR 2025",
        title: "Postgres Streaming (GA)",
        items: [
          "Postgres logical-replication connector is now generally available",
          "Schema-change detection now auto-migrates downstream tables",
          "p99 pipeline latency down from 84ms to 47ms",
        ],
      },
      {
        version: "v3.3",
        date: "JAN 2025",
        title: "Native Observability dashboard",
        items: [
          "Metrics, traces, and logs unified into one queryable view",
          "New nx.observe() helper for custom span tracking",
          "Breaking: the legacy /metrics/v1 endpoint is now deprecated",
        ],
      },
      {
        version: "v3.2",
        date: "NOV 2024",
        title: "Zero-Config Auth",
        items: [
          "OAuth, SAML, and passkey providers configurable in one line",
          "JWT rotation now handled automatically on the platform side",
          "S3 connector throughput improved roughly 3x",
        ],
      },
    ],
    footer: { copyright: "nexus.lab — © 2025 Nexus Systems Inc.", links: ["status", "security", "github"] },
  },
  ko: {
    nav: ["/platform", "/docs", "/pricing", "/changelog"],
    cta: "Start free →",
    eyebrow: "// changelog",
    title: "릴리스 기록",
    intro: "모든 릴리스를 순서대로 기록합니다. 매주 배포하며, 호환성이 깨지는 변경은 굵게 표시합니다.",
    entries: [
      {
        version: "v3.4",
        date: "2025.03",
        title: "Postgres Streaming 정식 출시",
        items: [
          "Postgres 논리 복제 커넥터가 정식 출시되었습니다",
          "스키마 변경 감지 시 하위 테이블을 자동으로 마이그레이션합니다",
          "파이프라인 p99 지연시간이 84ms에서 47ms로 개선되었습니다",
        ],
      },
      {
        version: "v3.3",
        date: "2025.01",
        title: "Native Observability 대시보드",
        items: [
          "메트릭, 트레이스, 로그를 하나의 조회 가능한 화면으로 통합했습니다",
          "커스텀 스팬 추적을 위한 nx.observe() 헬퍼가 추가되었습니다",
          "Breaking: 레거시 /metrics/v1 엔드포인트가 지원 종료되었습니다",
        ],
      },
      {
        version: "v3.2",
        date: "2024.11",
        title: "Zero-Config Auth",
        items: [
          "OAuth, SAML, 패스키 제공자를 한 줄로 설정할 수 있습니다",
          "JWT 로테이션을 플랫폼에서 자동으로 처리합니다",
          "S3 커넥터 처리량이 약 3배 개선되었습니다",
        ],
      },
    ],
    footer: { copyright: "nexus.lab — © 2025 Nexus Systems Inc.", links: ["status", "security", "github"] },
  },
} as const;

export default function NexusLabChangelog({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/nexus-lab");
  const changelogPath = localePath(lang, "/portfolio/nexus-lab/changelog");
  const navHrefs = [`${home}#platform`, `${home}#overview`, `${home}#team`, changelogPath];

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
              <Link key={n} href={navHrefs[i]} className={i === 3 ? "text-white" : "transition hover:text-white"}>
                {n}
              </Link>
            ))}
          </nav>
          <Link href={`${home}#overview`} className="rounded-md bg-white px-4 py-2 font-mono text-xs font-bold text-black">
            {t.cta}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="font-mono text-[11px] text-[#22d3ee]">{t.eyebrow}</div>
        <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-white/60 break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 space-y-14 border-t border-white/10 pt-14">
          {t.entries.map((entry) => (
            <article key={entry.version}>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs text-[#22d3ee]">
                  {entry.version}
                </span>
                <span className="font-mono text-xs text-white/40">{entry.date}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold break-keep text-balance">{entry.title}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/70">
                {entry.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#7c5cff]">·</span>
                    <span className="break-keep text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
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
