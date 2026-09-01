"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "ONLINE SHOP",
    title: "Beans, shipped fresh",
    intro:
      "We roast to order twice a week and ship the same day. Every bag lists the farm, the process, and the roast date.",
    beans: [
      {
        name: "Ethiopia Yirgacheffe",
        detail: "12oz whole bean · washed",
        price: "$21",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "Colombia Pink Bourbon",
        detail: "12oz whole bean · natural",
        price: "$23",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "Kenya AA Kiambu",
        detail: "12oz whole bean · washed",
        price: "$22",
        image: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "House Blend",
        detail: "12oz whole bean · blend",
        price: "$18",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80&auto=format&fit=crop",
      },
    ],
    subscriptionEyebrow: "SUBSCRIPTION",
    subscriptionTitle: "Beans, on repeat",
    subscriptionBody:
      "Pick a bag, pick a rhythm — every two or four weeks — and we'll roast and ship it automatically. Pause or swap the origin any time.",
    subscriptionCta: "Every 2 weeks · from $19/bag",
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
  ko: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "ONLINE SHOP",
    title: "갓 볶아 보내드립니다",
    intro: "주 2회 주문 로스팅 후 당일 발송합니다. 모든 봉투에는 농장, 프로세스, 로스팅 날짜를 표기합니다.",
    beans: [
      {
        name: "에티오피아 예가체프",
        detail: "340g 홀빈 · 워시드",
        price: "28,000원",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "콜롬비아 핑크 버번",
        detail: "340g 홀빈 · 내추럴",
        price: "30,000원",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "케냐 AA 키암부",
        detail: "340g 홀빈 · 워시드",
        price: "29,000원",
        image: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "하우스 블렌드",
        detail: "340g 홀빈 · 블렌드",
        price: "24,000원",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80&auto=format&fit=crop",
      },
    ],
    subscriptionEyebrow: "SUBSCRIPTION",
    subscriptionTitle: "정기적으로, 계속해서",
    subscriptionBody:
      "원두를 고르고, 2주 또는 4주 주기를 선택하세요. 로스팅부터 발송까지 자동으로 이어집니다. 언제든 일시정지하거나 원산지를 바꿀 수 있습니다.",
    subscriptionCta: "2주마다 · 봉투당 22,000원부터",
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
} as const;

export default function NobleCoffeeShop({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/noble-coffee");
  const storyPath = localePath(lang, "/portfolio/noble-coffee/story");
  const menuPath = localePath(lang, "/portfolio/noble-coffee/menu");
  const visitPath = localePath(lang, "/portfolio/noble-coffee/visit");
  const journalPath = localePath(lang, "/portfolio/noble-coffee/journal");
  const shopPath = localePath(lang, "/portfolio/noble-coffee/shop");
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();

  return (
    <div className="bg-[#f6f1ea] text-[#2a221a]">
      <header ref={ref} className="border-b border-[#e7ddcc] bg-[#f6f1ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="text-lg font-serif tracking-[0.4em]">
            NOBLE
          </Link>
          <nav className="hidden gap-8 text-xs font-medium tracking-[0.2em] text-[#5b4b39] md:flex">
            <Link href={storyPath} className="transition hover:text-[#2a221a]">
              {t.nav.story}
            </Link>
            <Link href={menuPath} className="transition hover:text-[#2a221a]">
              {t.nav.coffee}
            </Link>
            <Link href={visitPath} className="transition hover:text-[#2a221a]">
              {t.nav.visit}
            </Link>
            <Link href={journalPath} className="transition hover:text-[#2a221a]">
              {t.nav.journal}
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={shopPath}
              className="hidden rounded-full border border-[#2a221a] bg-[#2a221a] px-4 py-2 text-xs tracking-widest text-white sm:inline-block"
            >
              {t.nav.shop}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2a221a]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#e7ddcc] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs font-medium tracking-[0.2em] text-[#5b4b39]">
              <Link href={storyPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.story}
              </Link>
              <Link href={menuPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.coffee}
              </Link>
              <Link href={visitPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.visit}
              </Link>
              <Link href={journalPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.journal}
              </Link>
            </nav>
            <Link
              href={shopPath}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full border border-[#2a221a] bg-[#2a221a] px-4 py-2 text-xs tracking-widest text-white"
            >
              {t.nav.shop}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs tracking-[0.4em] text-[#7a6850]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#5b4b39] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.beans.map((b) => (
            <article key={b.name} className="group">
              <div className="relative aspect-square overflow-hidden bg-[#d9cdb8]">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-serif text-lg break-keep text-balance">{b.name}</h3>
              <p className="mt-2 text-sm text-[#7a6850] break-keep text-pretty">{b.detail}</p>
              <p className="mt-3 text-sm tracking-widest">{b.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#2a221a] py-20 text-[#d9cdb8]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.4em] text-[#9c8a6f]">{t.subscriptionEyebrow}</p>
          <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-white break-keep text-balance">
            {t.subscriptionTitle}
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed break-keep text-pretty">{t.subscriptionBody}</p>
          <p className="mt-8 inline-block rounded-full border border-[#9c8a6f] px-5 py-2 text-xs tracking-widest">
            {t.subscriptionCta}
          </p>
        </div>
      </section>

      <footer className="border-t border-[#e7ddcc] bg-[#2a221a] py-12 text-[#d9cdb8]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <Link href={home} className="text-lg font-serif tracking-[0.4em] text-white">
            NOBLE
          </Link>
          <p className="text-xs tracking-widest text-[#9c8a6f] break-keep text-pretty">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
