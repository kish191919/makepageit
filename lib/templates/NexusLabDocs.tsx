"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: ["/platform", "/docs", "/pricing", "/changelog"],
    cta: "Start free →",
    eyebrow: "// docs",
    title: "Everything you need to ship",
    intro: "Guides for getting a pipeline from zero to production, plus reference docs for every module.",
    sections: [
      {
        title: "Getting Started",
        items: ["Install the CLI", "Initialize your first pipeline", "Connect a data source", "Deploy to production"],
      },
      {
        title: "Core Concepts",
        items: ["Pipelines and connectors", "Schema sync and migrations", "Realtime endpoints", "Retry and backpressure handling"],
      },
      {
        title: "API Reference",
        items: ["nx.pipe — pipeline lifecycle", "nx.observe — metrics and traces", "nx.auth — identity providers", "REST & gRPC endpoints"],
      },
    ],
    footer: { copyright: "nexus.lab — © 2025 Nexus Systems Inc.", links: ["status", "security", "github"] },
  },
  ko: {
    nav: ["/platform", "/docs", "/pricing", "/changelog"],
    cta: "Start free →",
    eyebrow: "// docs",
    title: "배포에 필요한 모든 것",
    intro: "파이프라인을 처음부터 프로덕션까지 올리는 가이드와, 모든 모듈에 대한 레퍼런스 문서입니다.",
    sections: [
      {
        title: "시작하기",
        items: ["CLI 설치하기", "첫 파이프라인 초기화", "데이터 소스 연결", "프로덕션 배포"],
      },
      {
        title: "핵심 개념",
        items: ["파이프라인과 커넥터", "스키마 동기화와 마이그레이션", "실시간 엔드포인트", "재시도와 백프레셔 처리"],
      },
      {
        title: "API 레퍼런스",
        items: ["nx.pipe — 파이프라인 라이프사이클", "nx.observe — 메트릭과 트레이스", "nx.auth — 인증 제공자", "REST & gRPC 엔드포인트"],
      },
    ],
    footer: { copyright: "nexus.lab — © 2025 Nexus Systems Inc.", links: ["status", "security", "github"] },
  },
} as const;

export default function NexusLabDocs({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/nexus-lab");
  const docsPath = localePath(lang, "/portfolio/nexus-lab/docs");
  const pricingPath = localePath(lang, "/portfolio/nexus-lab/pricing");
  const changelogPath = localePath(lang, "/portfolio/nexus-lab/changelog");
  const navHrefs = [`${home}#platform`, docsPath, pricingPath, changelogPath];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header ref={ref} className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-br from-[#7c5cff] to-[#22d3ee]" />
            nexus<span className="text-[#22d3ee]">.lab</span>
          </Link>
          <nav className="hidden gap-8 font-mono text-xs text-white/60 md:flex">
            {t.nav.map((n, i) => (
              <Link key={n} href={navHrefs[i]} className={i === 1 ? "text-white" : "transition hover:text-white"}>
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href={`${home}#overview`} className="rounded-md bg-white px-4 py-2 font-mono text-xs font-bold text-black">
              {t.cta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 font-mono text-xs text-white/60">
              {t.nav.map((n, i) => (
                <Link
                  key={n}
                  href={navHrefs[i]}
                  onClick={() => setOpen(false)}
                  className={i === 1 ? "py-2 text-white" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <Link
              href={`${home}#overview`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-md bg-white px-4 py-2 font-mono text-xs font-bold text-black"
            >
              {t.cta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="font-mono text-[11px] text-[#22d3ee]">{t.eyebrow}</div>
        <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-white/60 break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {t.sections.map((section) => (
            <div key={section.title} className="bg-[#0a0a0f] p-6">
              <h2 className="text-sm font-bold text-[#22d3ee]">{section.title}</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                {section.items.map((item) => (
                  <li key={item} className="break-keep text-pretty">{item}</li>
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
