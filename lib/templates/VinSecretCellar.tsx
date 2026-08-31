"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: ["CELLAR", "CLUB", "JOURNAL", "SOMMELIER"],
    eyebrow: "— THIS MONTH",
    title: "April's cellar",
    intro:
      "Every bottle here was picked by our sommelier this month — boutique wineries that don't make it to American shelves, chosen for members before anyone else sees them.",
    wines: [
      { name: "Château Lavigne 2018", region: "Bordeaux, France", notes: "Black currant · Cedar · Leather", price: "$135", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&auto=format&fit=crop" },
      { name: "Allegro Brunello 2017", region: "Tuscany, Italy", notes: "Cherry · Tobacco · Earth", price: "$185", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=900&q=80&auto=format&fit=crop" },
      { name: "Rias Albariño 2022", region: "Galicia, Spain", notes: "Peach · Mineral · Citrus", price: "$62", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=900&q=80&auto=format&fit=crop" },
      { name: "Domaine Roret Chardonnay 2021", region: "Burgundy, France", notes: "Green apple · Butter · Flint", price: "$98", image: "https://images.unsplash.com/photo-1566995541428-f2246c9d0bd6?w=900&q=80&auto=format&fit=crop" },
      { name: "Vale do Sol Rosé 2023", region: "Douro, Portugal", notes: "Wild strawberry · Rose petal", price: "$48", image: "https://images.unsplash.com/photo-1558346489-19413928158b?w=900&q=80&auto=format&fit=crop" },
      { name: "Kestrel Ridge Pinot Noir 2020", region: "Willamette, USA", notes: "Red cherry · Clove · Forest floor", price: "$115", image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 VIN SECRET — Licensed wine retailer NY",
  },
  ko: {
    nav: ["CELLAR", "CLUB", "JOURNAL", "SOMMELIER"],
    eyebrow: "— THIS MONTH",
    title: "4월의 셀러",
    intro:
      "이번 달 소믈리에가 고른 여섯 병입니다. 국내에 들어오지 않은 부티크 와이너리를 회원들에게 가장 먼저 선보입니다.",
    wines: [
      { name: "Château Lavigne 2018", region: "Bordeaux, France", notes: "블랙커런트 · 시더 · 가죽", price: "₩ 145,000", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&auto=format&fit=crop" },
      { name: "Allegro Brunello 2017", region: "Tuscany, Italy", notes: "체리 · 담배잎 · 흙", price: "₩ 198,000", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=900&q=80&auto=format&fit=crop" },
      { name: "Rias Albariño 2022", region: "Galicia, Spain", notes: "복숭아 · 미네랄 · 시트러스", price: "₩ 68,000", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=900&q=80&auto=format&fit=crop" },
      { name: "Domaine Roret Chardonnay 2021", region: "Burgundy, France", notes: "청사과 · 버터 · 부싯돌", price: "₩ 108,000", image: "https://images.unsplash.com/photo-1566995541428-f2246c9d0bd6?w=900&q=80&auto=format&fit=crop" },
      { name: "Vale do Sol Rosé 2023", region: "Douro, Portugal", notes: "산딸기 · 장미꽃잎", price: "₩ 55,000", image: "https://images.unsplash.com/photo-1558346489-19413928158b?w=900&q=80&auto=format&fit=crop" },
      { name: "Kestrel Ridge Pinot Noir 2020", region: "Willamette, USA", notes: "체리 · 정향 · 낙엽", price: "₩ 128,000", image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 VIN SECRET — 국세청 통신판매업 제2025-서울-XXXX호",
  },
} as const;

export default function VinSecretCellar({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/vin-secret");
  const cellarPath = localePath(lang, "/portfolio/vin-secret/cellar");
  const clubPath = localePath(lang, "/portfolio/vin-secret/club");
  const journalPath = localePath(lang, "/portfolio/vin-secret/journal");
  const sommelierPath = localePath(lang, "/portfolio/vin-secret/sommelier");
  const navHrefs = [cellarPath, clubPath, journalPath, sommelierPath];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();

  return (
    <div className="min-h-screen bg-[#1a0d10] text-[#f3e7d7]">
      <header ref={ref} className="border-b border-[#3a1f25] bg-[#1a0d10]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="font-serif text-xl italic tracking-wide text-[#d4a574]">
            Vin Secret
          </Link>
          <nav className="hidden gap-8 text-xs tracking-[0.3em] text-[#c8b896] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 0 ? "text-[#d4a574]" : "transition hover:text-[#d4a574]"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4a574]/40 text-[#d4a574] md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
        {open && (
          <div className="border-t border-[#3a1f25] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs tracking-[0.3em] text-[#c8b896]">
              {t.nav.map((n, i) => (
                <Link
                  key={n}
                  href={navHrefs[i]}
                  onClick={() => setOpen(false)}
                  className={i === 0 ? "py-2 text-[#d4a574]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-[11px] tracking-[0.5em] text-[#d4a574]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-base text-[#c8b896] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-10 border-t border-[#3a1f25] pt-16 sm:grid-cols-2 lg:grid-cols-3">
          {t.wines.map((w) => (
            <article key={w.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#3a1f25]">
                <Image src={w.image} alt={w.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-6 font-serif text-xl break-keep text-balance">{w.name}</h3>
              <p className="mt-2 text-[11px] tracking-widest text-[#d4a574]">{w.region}</p>
              <p className="mt-3 text-sm text-[#c8b896] break-keep text-pretty">{w.notes}</p>
              <p className="mt-5 text-sm tracking-widest">{w.price}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#3a1f25] py-10 text-center text-[10px] tracking-[0.4em] text-[#7a6a55] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
