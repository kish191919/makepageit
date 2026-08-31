"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: ["STORY", "MENU", "WINE", "PRESS"],
    reserveCta: "RESERVE",
    eyebrow: "— WINE LIST",
    title: "320 labels, chosen to be poured",
    intro: "Our sommelier builds the list around what's in season on the menu — not the other way around. A few of the bottles guests ask for by name.",
    wines: [
      {
        name: "Barolo Cannubi, Piedmont",
        pairing: "Paired with Bistecca Fiorentina",
        note: "Tannic and structured — decanted 90 minutes before service to soften into the char of the steak.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Vermentino di Gallura, Sardinia",
        pairing: "Paired with Branzino al Forno",
        note: "Sharp acidity and a saline finish that keeps up with the whole roast fish rather than disappearing under it.",
        image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Brunello di Montalcino Riserva",
        pairing: "Paired with Tagliolini al Tartufo Bianco",
        note: "Held back a vintage longer than most lists dare, so the truffle doesn't have to compete with young tannin.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: { address: "22 East 14th St, New York NY 10003 · (212) 555-1011", copyright: "© 2025 — Cucina Toscana, NYC" },
  },
  ko: {
    nav: ["STORY", "MENU", "WINE", "PRESS"],
    reserveCta: "RESERVE",
    eyebrow: "— WINE LIST",
    title: "320종, 오직 따르기 위해 고른 와인",
    intro: "저희 소믈리에는 그날 메뉴에 오른 계절 재료를 기준으로 와인 리스트를 구성합니다. 손님들이 이름으로 찾는 대표적인 몇 병을 소개합니다.",
    wines: [
      {
        name: "Barolo Cannubi, Piedmont",
        pairing: "비스테카 피오렌티나와 페어링",
        note: "탄닌이 강하고 구조감 있는 와인. 서빙 90분 전 디캔팅하여 스테이크의 그을린 풍미와 부드럽게 어우러지도록 합니다.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Vermentino di Gallura, Sardinia",
        pairing: "브란지노 알 포르노와 페어링",
        note: "날카로운 산미와 짭조름한 여운으로, 통오븐구이 생선의 풍미에 묻히지 않고 끝까지 함께 갑니다.",
        image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Brunello di Montalcino Riserva",
        pairing: "화이트 트러플 탈리올리니와 페어링",
        note: "대부분의 리스트보다 한 빈티지 더 숙성시켜, 어린 탄닌이 트러플의 향과 경쟁하지 않도록 했습니다.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: { address: "서울 종로구 북촌로 14길 22 · 02 555 1011", copyright: "© 2025 — Cucina Toscana, Seoul" },
  },
} as const;

export default function VillaToscanaWine({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/villa-toscana");
  const winePath = localePath(lang, "/portfolio/villa-toscana/wine");
  const pressPath = localePath(lang, "/portfolio/villa-toscana/press");
  const navHrefs = [`${home}#story`, `${home}#menu`, winePath, pressPath];

  return (
    <div className="min-h-screen bg-[#f4ede1] text-[#2b1d12]">
      <header ref={ref} className="border-b border-[#d8c8a9]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href={home} className="font-serif text-2xl italic tracking-wide">
            Villa Toscana
          </Link>
          <nav className="hidden gap-8 text-[11px] font-medium tracking-[0.3em] text-[#7a6248] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 2 ? "text-[#7d2c1a]" : "transition hover:text-[#7d2c1a]"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={`${home}#reservation`}
              className="border border-[#7d2c1a] bg-[#7d2c1a] px-5 py-2 text-[11px] tracking-[0.3em] text-[#f4ede1]"
            >
              {t.reserveCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b1d12]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#d8c8a9] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-[11px] font-medium tracking-[0.3em] text-[#7a6248]">
              {t.nav.map((n, i) => (
                <Link
                  key={n}
                  href={navHrefs[i]}
                  onClick={() => setOpen(false)}
                  className={i === 2 ? "py-2 text-[#7d2c1a]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <Link
              href={`${home}#reservation`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block border border-[#7d2c1a] bg-[#7d2c1a] px-5 py-2 text-[11px] tracking-[0.3em] text-[#f4ede1]"
            >
              {t.reserveCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-[11px] tracking-[0.4em] text-[#7d2c1a]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl italic leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5b4a36] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-16 border-t border-[#d8c8a9] pt-16">
          {t.wines.map((w) => (
            <article key={w.name} className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={w.image} alt={w.name} fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-2xl italic break-keep text-balance">{w.name}</h2>
                <p className="mt-2 text-[11px] tracking-widest text-[#7a6248]">{w.pairing.toUpperCase()}</p>
                <p className="mt-4 leading-relaxed text-[#5b4a36] break-keep text-pretty">{w.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d8c8a9] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-[11px] tracking-[0.3em] text-[#7a6248] md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-base italic text-[#2b1d12]">Villa Toscana</div>
          <div className="break-keep text-pretty">{t.footer.address}</div>
          <div className="break-keep text-pretty">{t.footer.copyright}</div>
        </div>
      </footer>
    </div>
  );
}
