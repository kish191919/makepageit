"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    domain: "kade.works",
    nav: ["index", "work", "about", "contact"],
    contactEmail: "hello@kade.works",
    label: "02 — SELECTED WORK",
    title: "Seven years, twelve companies, one calm interface at a time.",
    intro:
      "A closer look at four recent projects — what the brief was, what shipped, and what changed for the people using it.",
    list: [
      {
        no: "01",
        name: "Stripe — Onboarding",
        cat: "Product · UX",
        year: "2024",
        summary:
          "Redesigned the merchant onboarding flow end to end, cutting signup drop-off nearly in half by trimming a nine-step form down to three.",
        img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80&auto=format&fit=crop",
      },
      {
        no: "02",
        name: "Lyft — Driver App",
        cat: "Mobile · Service",
        year: "2024",
        summary:
          "Simplified the driver home screen from six competing modules to two, so drivers can see what matters in a single glance between rides.",
        img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80&auto=format&fit=crop",
      },
      {
        no: "03",
        name: "Linear — Internal Console",
        cat: "Enterprise · DS",
        year: "2023",
        summary:
          "Built a token-based component system now shared across four internal tools, replacing four inconsistent one-off UIs.",
        img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80&auto=format&fit=crop",
      },
      {
        no: "04",
        name: "Riot Games — Patch Notes",
        cat: "Editorial · Web",
        year: "2023",
        summary:
          "Turned dense, engineering-authored patch data into a scannable weekly editorial format read by millions of players.",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: { stamp: "kade.works · last updated 2025-04-27", links: ["read.cv", "are.na", "linkedin"] },
  },
  ko: {
    domain: "kitt.works",
    nav: ["index", "work", "about", "contact"],
    contactEmail: "hello@kitt.works",
    label: "02 — SELECTED WORK",
    title: "지난 7년, 12개 회사, 그리고 조용히 작동하는 인터페이스들.",
    intro: "최근 진행한 네 개 프로젝트를 더 자세히 소개합니다 — 어떤 문제였고, 무엇을 만들었고, 무엇이 달라졌는지.",
    list: [
      {
        no: "01",
        name: "Toss Securities — Onboarding",
        cat: "Product · UX",
        year: "2024",
        summary: "가입 온보딩 플로우를 9단계에서 3단계로 줄여, 중도 이탈률을 절반 가까이 낮췄습니다.",
        img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80&auto=format&fit=crop",
      },
      {
        no: "02",
        name: "Kakao Mobility — Driver App",
        cat: "Mobile · Service",
        year: "2024",
        summary: "기사용 홈 화면을 6개의 경쟁하는 모듈에서 2개로 정리해, 운행 사이 한눈에 필요한 정보만 보이도록 만들었습니다.",
        img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80&auto=format&fit=crop",
      },
      {
        no: "03",
        name: "Coupang — Internal Console",
        cat: "Enterprise · DS",
        year: "2023",
        summary: "토큰 기반 컴포넌트 시스템을 구축해, 제각각이던 4개 사내 도구의 UI를 하나로 통합했습니다.",
        img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80&auto=format&fit=crop",
      },
      {
        no: "04",
        name: "Riot Games — Patch Notes",
        cat: "Editorial · Web",
        year: "2023",
        summary: "개발자 중심의 밀도 높은 패치 데이터를, 수백만 플레이어가 매주 읽는 에디토리얼 포맷으로 재구성했습니다.",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: { stamp: "kitt.works · last updated 2025-04-27", links: ["read.cv", "are.na", "linkedin"] },
  },
} as const;

export default function KittWorksWork({ lang }: { lang: Lang }) {
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
                className={n === "work" ? "text-neutral-900" : "transition hover:text-neutral-900"}
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
                  className={n === "work" ? "py-2 text-neutral-900" : "py-2"}
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
          <p className="font-mono text-xs text-neutral-500 md:col-span-3">{t.label}</p>
          <div className="md:col-span-9">
            <h1 className="text-3xl leading-[1.15] tracking-tight md:text-5xl break-keep text-balance">{t.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 break-keep text-pretty">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <ul className="divide-y divide-neutral-200">
            {t.list.map((w) => (
              <li key={w.no} className="py-12">
                <div className="grid gap-4 md:grid-cols-[40px_1fr_auto] md:items-start md:gap-6">
                  <span className="font-mono text-xs text-neutral-400">{w.no}</span>
                  <div>
                    <div className="text-lg">{w.name}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                      {w.cat}
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 break-keep text-pretty">
                      {w.summary}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">{w.year}</span>
                </div>
                <div className="relative mt-6 aspect-[16/9] overflow-hidden bg-neutral-100">
                  <Image
                    src={w.img}
                    alt={w.name}
                    fill
                    className="object-cover grayscale transition duration-500 hover:grayscale-0"
                  />
                </div>
              </li>
            ))}
          </ul>
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
