"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    eyebrow: "SHOP",
    title: "The full collection",
    intro: "Every piece we make, across all three series. Nothing arrives until it's ready — most pieces ship in 6–10 weeks.",
    products: [
      { name: "OAK Dining Table", series: "FOREST series", price: "$1,790", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop" },
      { name: "OAK Console", series: "FOREST series", price: "$980", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop" },
      { name: "STONE Side Lamp", series: "QUARRY series", price: "$295", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop" },
      { name: "STONE Floor Lamp", series: "QUARRY series", price: "$410", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop" },
      { name: "LINEN Lounge Chair", series: "CALM series", price: "$1,180", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop" },
      { name: "LINEN Sofa", series: "CALM series", price: "$2,450", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 wood & stone. Made in the USA.",
  },
  ko: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    eyebrow: "SHOP",
    title: "전체 컬렉션",
    intro: "세 시리즈를 아우르는 모든 제품입니다. 준비가 끝나기 전엔 출고하지 않으며, 대부분 6~10주 내 제작됩니다.",
    products: [
      { name: "OAK Dining Table", series: "FOREST 시리즈", price: "1,890,000원", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop" },
      { name: "OAK Console", series: "FOREST 시리즈", price: "1,050,000원", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop" },
      { name: "STONE Side Lamp", series: "QUARRY 시리즈", price: "320,000원", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop" },
      { name: "STONE Floor Lamp", series: "QUARRY 시리즈", price: "440,000원", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop" },
      { name: "LINEN Lounge Chair", series: "CALM 시리즈", price: "1,240,000원", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop" },
      { name: "LINEN Sofa", series: "CALM 시리즈", price: "2,650,000원", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 wood & stone. Crafted in Korea.",
  },
} as const;

export default function WoodAndStoneShop({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/wood-and-stone");
  const shopPath = localePath(lang, "/portfolio/wood-and-stone/shop");
  const collectionsPath = localePath(lang, "/portfolio/wood-and-stone/collections");
  const journalPath = localePath(lang, "/portfolio/wood-and-stone/journal");
  const showroomPath = localePath(lang, "/portfolio/wood-and-stone/showroom");
  const navHrefs = [shopPath, collectionsPath, journalPath, showroomPath];

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#2c2620]">
      <header ref={ref} className="border-b border-[#e1d8c8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href={home} className="font-serif text-xl tracking-wide">
            wood<span className="text-[#a08260]"> · </span>stone
          </Link>
          <nav className="hidden gap-8 text-xs font-medium tracking-[0.2em] text-[#5b4f3d] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 0 ? "text-[#a08260]" : "transition hover:text-[#a08260]"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4 text-xs text-[#5b4f3d]">
              {t.utility.map((u) => (
                <span key={u}>{u}</span>
              ))}
            </div>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2c2620]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#e1d8c8] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs font-medium tracking-[0.2em] text-[#5b4f3d]">
              {t.nav.map((n, i) => (
                <Link
                  key={n}
                  href={navHrefs[i]}
                  onClick={() => setOpen(false)}
                  className={i === 0 ? "py-2 text-[#a08260]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-xs tracking-[0.4em] text-[#a08260]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5b4f3d] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-10 border-t border-[#e1d8c8] pt-14 md:grid-cols-3">
          {t.products.map((p, i) => (
            <article key={`${p.name}-${i}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#dccdb1]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[10px] tracking-[0.3em] text-[#a08260]">{p.series}</p>
              <h3 className="mt-2 font-serif text-2xl break-keep text-balance">{p.name}</h3>
              <p className="mt-3 text-sm tracking-wider text-[#5b4f3d]">{p.price}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#f5f1ea] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-xs text-[#5b4f3d] md:flex-row md:items-center md:justify-between">
          <Link href={home} className="font-serif text-base text-[#2c2620]">
            wood · stone
          </Link>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
