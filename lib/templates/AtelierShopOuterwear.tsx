"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "Outerwear",
    title: "Coats built for repeat wear",
    intro:
      "Structured but soft — cut from natural-fiber cloth meant to be worn hundreds of times, not stored in a closet. Every coat is hand-finished by the same maker from first cut to final button.",
    products: [
      {
        name: "Linen Wrap Coat",
        price: "$348",
        desc: "A single-layer wrap coat in heavyweight Belgian linen. Ties at the waist, drapes past the knee.",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Wool Herringbone Coat",
        price: "$298",
        desc: "Double-breasted and fully lined, cut from a Yorkshire wool herringbone that softens with wear.",
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Quilted Field Jacket",
        price: "$228",
        desc: "A lightweight quilted layer for in-between weather, with deep pockets and a stand collar.",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Atelier 22. Made by hand.",
  },
  ko: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "Outerwear",
    title: "오래, 자주 입도록 만든 코트",
    intro:
      "각 잡혀 있지만 부드럽습니다. 수백 번 입어도 옷장 안이 아니라 몸 위에 있어야 할 원단만 사용합니다. 한 벌의 코트를 재단부터 마지막 단추까지 한 명의 장인이 완성합니다.",
    products: [
      {
        name: "Linen Wrap Coat",
        price: "428,000원",
        desc: "두꺼운 벨기에산 리넨으로 만든 싱글 레이어 랩 코트. 허리에서 묶어 무릎 아래까지 떨어집니다.",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Wool Herringbone Coat",
        price: "368,000원",
        desc: "요크셔산 헤링본 울로 만든 더블 브레스트 코트. 안감을 전체 마감해 입을수록 부드러워집니다.",
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Quilted Field Jacket",
        price: "278,000원",
        desc: "환절기용 경량 퀼팅 재킷. 깊은 포켓과 스탠드 카라 디테일.",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Atelier 22. Crafted in Seoul.",
  },
} as const;

export default function AtelierShopOuterwear({ lang }: { lang: Lang }) {
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
            <Link href={outerwearPath} className="font-semibold">
              {t.nav.outerwear}
            </Link>
            <Link href={accessoriesPath}>{t.nav.accessories}</Link>
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
              <Link href={outerwearPath} onClick={() => setOpen(false)} className="py-2 font-semibold">
                {t.nav.outerwear}
              </Link>
              <Link href={accessoriesPath} onClick={() => setOpen(false)} className="py-2">
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
