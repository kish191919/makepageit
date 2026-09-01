"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    domain: "kade.works",
    nav: ["index", "work", "about", "contact"],
    contactEmail: "hello@kade.works",
    label: "03 — ABOUT",
    name: "Kade",
    role: "Product designer",
    location: "Brooklyn / 2017 — Now",
    bio: [
      "Over the past seven years I've worked with 12 companies, including Stripe, Linear, Notion, and Riot Games — shipping 48 products across onboarding flows, internal consoles, and editorial tools.",
      "I care about interfaces that disappear into the task at hand: fewer decisions, clearer defaults, less noise. Most projects start with a messy flow and end as a handful of calm screens.",
      "I work alone by design — one project at a time, direct with the team, no hand-offs in between.",
    ],
    statsLabel: "AT A GLANCE",
    stats: [
      ["12", "Companies"],
      ["48", "Shipped products"],
      ["7y", "Practice"],
      ["1", "Person studio"],
    ] as [string, string][],
    servicesLabel: "SERVICES",
    services: [
      ["UX Research", "Interview · Diary Study · Synthesis"],
      ["Product Design", "Flow · UI · Component System"],
      ["Design Systems", "Token · Documentation · Governance"],
      ["Prototyping", "Figma · Framer · ProtoPie"],
    ] as [string, string][],
    footer: { stamp: "kade.works · last updated 2025-04-27", links: ["read.cv", "are.na", "linkedin"] },
  },
  ko: {
    domain: "kitt.works",
    nav: ["index", "work", "about", "contact"],
    contactEmail: "hello@kitt.works",
    label: "03 — ABOUT",
    name: "Kitt",
    role: "프로덕트 디자이너",
    location: "Seoul / 2017 — Now",
    bio: [
      "지난 7년 동안 토스, 카카오, 쿠팡, Riot Games 등 12개 회사와 함께 일하며 온보딩, 사내 콘솔, 에디토리얼 도구까지 48개의 제품을 출시했습니다.",
      "저는 인터페이스가 하려는 일 자체에 자연스럽게 녹아드는 것을 중요하게 생각합니다 — 더 적은 결정, 더 명확한 기본값, 더 적은 소음. 대부분의 프로젝트는 복잡한 플로우로 시작해 몇 개의 차분한 화면으로 끝납니다.",
      "의도적으로 혼자 일합니다 — 한 번에 하나의 프로젝트, 팀과 직접 소통하며, 중간 전달 없이.",
    ],
    statsLabel: "AT A GLANCE",
    stats: [
      ["12", "Companies"],
      ["48", "Shipped products"],
      ["7y", "Practice"],
      ["1", "Person studio"],
    ] as [string, string][],
    servicesLabel: "SERVICES",
    services: [
      ["UX Research", "Interview · Diary Study · Synthesis"],
      ["Product Design", "Flow · UI · Component System"],
      ["Design Systems", "Token · Documentation · Governance"],
      ["Prototyping", "Figma · Framer · ProtoPie"],
    ] as [string, string][],
    footer: { stamp: "kitt.works · last updated 2025-04-27", links: ["read.cv", "are.na", "linkedin"] },
  },
} as const;

export default function KittWorksAbout({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/kitt-works");
  const workPath = localePath(lang, "/portfolio/kitt-works/work");
  const aboutPath = localePath(lang, "/portfolio/kitt-works/about");
  const contactPath = localePath(lang, "/portfolio/kitt-works/contact");
  const navPaths: Record<string, string> = { index: home, work: workPath, about: aboutPath, contact: contactPath };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header ref={ref} className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="font-mono text-sm">
            {t.domain}
          </Link>
          <nav className="hidden gap-8 font-mono text-xs text-neutral-500 md:flex">
            {t.nav.map((n) => (
              <Link
                key={n}
                href={navPaths[n]}
                className={n === "about" ? "text-neutral-900" : "transition hover:text-neutral-900"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href={contactPath} className="font-mono text-xs underline decoration-dotted underline-offset-4">
              {t.contactEmail}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center border border-neutral-300 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-neutral-200 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 font-mono text-xs text-neutral-500">
              {t.nav.map((n) => (
                <Link
                  key={n}
                  href={navPaths[n]}
                  onClick={() => setOpen(false)}
                  className={n === "about" ? "py-2 text-neutral-900" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <Link
              href={contactPath}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block font-mono text-xs underline decoration-dotted underline-offset-4"
            >
              {t.contactEmail}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="font-mono text-xs text-neutral-500 md:col-span-3">
            {t.label} <br />
            <span className="text-neutral-400">{t.location}</span>
          </p>
          <div className="md:col-span-9">
            <h1 className="text-4xl leading-[1.15] tracking-tight md:text-6xl break-keep text-balance">
              {t.name} <span className="text-neutral-400">— {t.role}</span>
            </h1>
            <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-neutral-600 break-keep text-pretty">
              {t.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-neutral-200 md:grid-cols-4">
          {t.stats.map(([v, l]) => (
            <div key={l} className="bg-white px-6 py-10">
              <div className="font-mono text-3xl">{v}</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="font-mono text-xs text-neutral-500 md:col-span-3">{t.servicesLabel}</p>
          <div className="md:col-span-9">
            <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
              {t.services.map(([k, v]) => (
                <li key={k} className="grid grid-cols-[180px_1fr] gap-6 py-5 text-sm">
                  <span className="font-mono uppercase tracking-widest text-neutral-500">{k}</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 font-mono text-[11px] text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div className="break-keep text-pretty">{t.footer.stamp}</div>
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
