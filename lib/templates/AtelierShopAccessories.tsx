"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "Accessories",
    title: "Small pieces, worn daily",
    intro:
      "The details that carry a look through a season — a tote that softens with use, a scarf that goes everywhere, a hat that never feels precious.",
    products: [
      {
        name: "Hand-stitched Tote",
        price: "$156",
        desc: "Vegetable-tanned leather, saddle-stitched by hand. Holds its shape better the longer you carry it.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Silk Scarf · Bloom",
        price: "$78",
        desc: "A hand-rolled edge on 100% mulberry silk, printed with an original floral study from our archive.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Wool Berét",
        price: "$62",
        desc: "Felted merino wool, shaped by hand over a wooden block. One size, sits soft rather than structured.",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Atelier 22. Made by hand.",
  },
  ko: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "Accessories",
    title: "매일 곁에 두는 작은 것들",
    intro: "한 시즌의 룩을 완성하는 디테일 — 쓸수록 부드러워지는 토트백, 어디에나 어울리는 스카프, 부담 없이 매일 쓰는 모자.",
    products: [
      {
        name: "Hand-stitched Tote",
        price: "192,000원",
        desc: "식물성 탄닌 가죽을 새들 스티치로 손바느질했습니다. 오래 들수록 더 좋은 모양을 잡아갑니다.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Silk Scarf · Bloom",
        price: "98,000원",
        desc: "100% 멀버리 실크에 아카이브 속 플로럴 드로잉을 프린트하고, 가장자리를 손으로 말아 마감했습니다.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Wool Berét",
        price: "78,000원",
        desc: "메리노 울을 펠팅해 나무 블록으로 손수 모양을 잡았습니다. 프리사이즈, 딱딱하지 않고 부드럽게 앉습니다.",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Atelier 22. Crafted in Seoul.",
  },
} as const;

export default function AtelierShopAccessories({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/atelier-shop");
  const newInPath = localePath(lang, "/portfolio/atelier-shop/new-in");
  const outerwearPath = localePath(lang, "/portfolio/atelier-shop/outerwear");
  const accessoriesPath = localePath(lang, "/portfolio/atelier-shop/accessories");
  const lookbookPath = localePath(lang, "/portfolio/atelier-shop/lookbook");
  const journalPath = localePath(lang, "/portfolio/atelier-shop/journal");

  return (
    <div className="bg-[#fafaf7] text-[#1f1d1a]">
      <header ref={ref} className="border-b border-[#ecead9] bg-[#fafaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <nav className="hidden gap-6 text-xs font-medium uppercase tracking-[0.2em] md:flex">
            <Link href={newInPath}>{t.nav.newIn}</Link>
            <Link href={outerwearPath}>{t.nav.outerwear}</Link>
            <Link href={accessoriesPath} className="font-semibold">
              {t.nav.accessories}
            </Link>
            <Link href={lookbookPath}>{t.nav.lookbook}</Link>
            <Link href={journalPath}>{t.nav.journal}</Link>
          </nav>
          <Link href={home} className="text-xl font-serif tracking-[0.4em]">
            ATELIER 22
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden w-[120px] md:block" aria-hidden />
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1f1d1a]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#ecead9] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs font-medium uppercase tracking-[0.2em]">
              <Link href={newInPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.newIn}
              </Link>
              <Link href={outerwearPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.outerwear}
              </Link>
              <Link href={accessoriesPath} onClick={() => setOpen(false)} className="py-2 font-semibold">
                {t.nav.accessories}
              </Link>
              <Link href={lookbookPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.lookbook}
              </Link>
              <Link href={journalPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.journal}
              </Link>
            </nav>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#7a7770]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#5b5853] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-x-6 gap-y-16 border-t border-[#ecead9] pt-16 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.map((p) => (
            <article key={p.name}>
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ecead9]">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-serif text-lg break-keep text-balance">{p.name}</h3>
                <p className="text-sm tracking-wide">{p.price}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#5b5853] break-keep text-pretty">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#fafaf7] py-12 text-xs uppercase tracking-widest text-[#7a7770]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <Link href={home} className="font-serif text-base normal-case tracking-[0.4em] text-[#1f1d1a]">
            ATELIER 22
          </Link>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
