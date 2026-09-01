"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "HARBOR & VALE", tag: "REALTY" },
    nav: { listings: "Listings", neighborhoods: "Neighborhoods", sell: "Sell With Us", agents: "Agents", contact: "Contact" },
    bookCta: "Schedule a Showing",
    eyebrow: "NEIGHBORHOODS",
    title: "Where our listings live",
    intro: "Every neighborhood we cover along the coast — what makes each one different, and who tends to fall for it.",
    neighborhoods: [
      {
        name: "Harbor Point",
        desc: "Cliffside estates with private water access. Popular with buyers upgrading from a starter home to their forever house.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Vale Heights",
        desc: "Walkable streets, good schools, a strong sense of block-party community. Our most active neighborhood for first-time buyers.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Bayview Cove",
        desc: "New construction and larger lots a short drive from downtown. The pick for buyers who want space without leaving the coast.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Harbor & Vale Realty. Equal Housing Opportunity.",
  },
  ko: {
    brand: { name: "하버앤베일", tag: "부동산" },
    nav: { listings: "매물", neighborhoods: "지역 안내", sell: "매도 상담", agents: "에이전트", contact: "문의" },
    bookCta: "쇼잉 예약하기",
    eyebrow: "NEIGHBORHOODS",
    title: "우리 매물이 있는 지역",
    intro: "저희가 담당하는 해안가 지역들 — 각 지역이 어떻게 다르고, 어떤 분들이 특히 좋아하시는지 소개합니다.",
    neighborhoods: [
      {
        name: "Harbor Point",
        desc: "개인 수변 접근이 가능한 절벽 위 저택 단지. 첫 집에서 평생 살 집으로 옮기려는 분들에게 인기입니다.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Vale Heights",
        desc: "걷기 좋은 거리, 좋은 학군, 끈끈한 이웃 문화가 있는 곳. 첫 주택 구매자에게 가장 활발한 지역입니다.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Bayview Cove",
        desc: "다운타운에서 가까우면서도 신축과 넓은 대지가 많은 지역. 해안을 떠나지 않으면서 여유로운 공간을 원하는 분들의 선택입니다.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 하버앤베일 부동산. Equal Housing Opportunity.",
  },
} as const;

export default function HarborRealtyNeighborhoods({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/harbor-realty");
  const navPaths = {
    listings: localePath(lang, "/portfolio/harbor-realty/listings"),
    neighborhoods: localePath(lang, "/portfolio/harbor-realty/neighborhoods"),
    sell: localePath(lang, "/portfolio/harbor-realty/sell"),
    agents: localePath(lang, "/portfolio/harbor-realty/agents"),
    contact: localePath(lang, "/portfolio/harbor-realty/contact"),
  } as const;

  return (
    <div className="bg-[#faf7f2] text-[#1c3829]">
      <header ref={ref} className="border-b border-[#1c3829]/10 bg-[#faf7f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c3829] font-serif text-base text-[#faf7f2]">
              H
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#1c3829]/60">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#1c3829]/80 md:flex">
            <Link href={navPaths.listings}>{t.nav.listings}</Link>
            <Link href={navPaths.neighborhoods} className="font-semibold">{t.nav.neighborhoods}</Link>
            <Link href={navPaths.sell}>{t.nav.sell}</Link>
            <Link href={navPaths.agents}>{t.nav.agents}</Link>
            <Link href={navPaths.contact}>{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={navPaths.contact}
              className="hidden rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white sm:inline-block"
            >
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c3829]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#1c3829]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#1c3829]/80">
              <Link href={navPaths.listings} onClick={() => setOpen(false)} className="py-2">{t.nav.listings}</Link>
              <Link href={navPaths.neighborhoods} onClick={() => setOpen(false)} className="py-2 font-semibold">{t.nav.neighborhoods}</Link>
              <Link href={navPaths.sell} onClick={() => setOpen(false)} className="py-2">{t.nav.sell}</Link>
              <Link href={navPaths.agents} onClick={() => setOpen(false)} className="py-2">{t.nav.agents}</Link>
              <Link href={navPaths.contact} onClick={() => setOpen(false)} className="py-2">{t.nav.contact}</Link>
            </nav>
            <Link
              href={navPaths.contact}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#b08d57]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#1c3829]/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-16 border-t border-[#1c3829]/10 pt-16">
          {t.neighborhoods.map((n) => (
            <article key={n.name} className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src={n.image} alt={n.name} fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-3xl break-keep text-balance">{n.name}</h2>
                <p className="mt-4 leading-relaxed text-[#1c3829]/70 break-keep text-pretty">{n.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#1c3829]/10 bg-[#faf7f2] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#1c3829]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#1c3829]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
