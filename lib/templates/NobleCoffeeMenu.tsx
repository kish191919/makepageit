"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "THE MENU",
    title: "What's brewing",
    intro: "Single-origin filter, a small espresso bar, and a short list of things baked upstairs each morning.",
    singleOriginEyebrow: "SINGLE-ORIGIN · THIS WEEK",
    singleOrigin: [
      {
        name: "Ethiopia Yirgacheffe",
        notes: "Jasmine · Bergamot · Lemon",
        price: "$5.50",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "Colombia Pink Bourbon",
        notes: "Peach · Brown Sugar · Dark Chocolate",
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "Kenya AA Kiambu",
        notes: "Black Currant · Wine · Caramel",
        price: "$5.75",
        image: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=900&q=80&auto=format&fit=crop",
      },
    ],
    espressoEyebrow: "ESPRESSO BAR",
    espresso: [
      { name: "Espresso", notes: "Double shot, house blend", price: "$3.50" },
      { name: "Cortado", notes: "Espresso, steamed milk, 4oz", price: "$4.50" },
      { name: "Flat White", notes: "Double ristretto, microfoam", price: "$5.00" },
      { name: "Iced Latte", notes: "Double shot over milk and ice", price: "$5.50" },
    ],
    bakeryEyebrow: "FROM THE OVEN",
    bakery: [
      { name: "Brown Butter Croissant", notes: "Baked upstairs every morning", price: "$4.75" },
      { name: "Olive Oil Cake", notes: "Rosemary, sea salt", price: "$5.25" },
      { name: "Sourdough Toast", notes: "Cultured butter, flaky salt", price: "$6.00" },
    ],
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
  ko: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "THE MENU",
    title: "지금 내리는 커피",
    intro: "싱글 오리진 필터 커피, 작은 에스프레소 바, 그리고 매일 아침 2층에서 구워내는 몇 가지 베이커리.",
    singleOriginEyebrow: "SINGLE-ORIGIN · 이번 주",
    singleOrigin: [
      {
        name: "에티오피아 예가체프",
        notes: "자스민 · 베르가못 · 레몬",
        price: "8,500원",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "콜롬비아 핑크 버번",
        notes: "복숭아 · 흑설탕 · 다크초콜릿",
        price: "9,500원",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=900&q=80&auto=format&fit=crop",
      },
      {
        name: "케냐 AA 키암부",
        notes: "블랙커런트 · 와인 · 캐러멜",
        price: "8,800원",
        image: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=900&q=80&auto=format&fit=crop",
      },
    ],
    espressoEyebrow: "ESPRESSO BAR",
    espresso: [
      { name: "에스프레소", notes: "더블 샷, 하우스 블렌드", price: "5,000원" },
      { name: "코르타도", notes: "에스프레소 + 스팀 밀크 120ml", price: "6,000원" },
      { name: "플랫 화이트", notes: "더블 리스트레토, 미세 거품", price: "6,500원" },
      { name: "아이스 라떼", notes: "더블 샷 + 우유 + 얼음", price: "7,000원" },
    ],
    bakeryEyebrow: "베이커리",
    bakery: [
      { name: "브라운 버터 크루아상", notes: "매일 아침 2층에서 구워냅니다", price: "6,500원" },
      { name: "올리브 오일 케이크", notes: "로즈마리, 소금", price: "7,000원" },
      { name: "사워도우 토스트", notes: "발효 버터, 플레이크 소금", price: "8,000원" },
    ],
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
} as const;

export default function NobleCoffeeMenu({ lang }: { lang: Lang }) {
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
            <Link href={menuPath} className="text-[#2a221a]">
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
              className="hidden rounded-full border border-[#2a221a] px-4 py-2 text-xs tracking-widest sm:inline-block"
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
              <Link href={menuPath} onClick={() => setOpen(false)} className="py-2 text-[#2a221a]">
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
              className="mt-3 inline-block rounded-full border border-[#2a221a] px-4 py-2 text-xs tracking-widest"
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
      </section>

      <section className="bg-[#ece2d2] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.4em] text-[#7a6850]">{t.singleOriginEyebrow}</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {t.singleOrigin.map((m) => (
              <article key={m.name} className="group">
                <div className="relative aspect-square overflow-hidden bg-[#d9cdb8]">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl break-keep text-balance">{m.name}</h3>
                <p className="mt-2 text-sm text-[#7a6850] break-keep text-pretty">{m.notes}</p>
                <p className="mt-3 text-sm tracking-widest">{m.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs tracking-[0.4em] text-[#7a6850]">{t.espressoEyebrow}</p>
        <dl className="mt-8 divide-y divide-[#e7ddcc] border-t border-[#e7ddcc]">
          {t.espresso.map((item) => (
            <div key={item.name} className="flex items-baseline justify-between gap-6 py-4">
              <div>
                <dt className="font-serif text-lg break-keep text-balance">{item.name}</dt>
                <dd className="mt-1 text-sm text-[#7a6850] break-keep text-pretty">{item.notes}</dd>
              </div>
              <div className="flex-none text-sm tracking-widest">{item.price}</div>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="text-xs tracking-[0.4em] text-[#7a6850]">{t.bakeryEyebrow}</p>
        <dl className="mt-8 divide-y divide-[#e7ddcc] border-t border-[#e7ddcc]">
          {t.bakery.map((item) => (
            <div key={item.name} className="flex items-baseline justify-between gap-6 py-4">
              <div>
                <dt className="font-serif text-lg break-keep text-balance">{item.name}</dt>
                <dd className="mt-1 text-sm text-[#7a6850] break-keep text-pretty">{item.notes}</dd>
              </div>
              <div className="flex-none text-sm tracking-widest">{item.price}</div>
            </div>
          ))}
        </dl>
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
