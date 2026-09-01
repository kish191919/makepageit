"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "VISIT US",
    title: "Williamsburg Flagship",
    intro:
      "Our roastery and café share one room. You can drink the beans you just smelled coming out of the drum.",
    rows: [
      { label: "ADDRESS", value: "164 Wythe Avenue, Brooklyn NY 11249" },
      { label: "HOURS", value: "Daily 8am — 9pm (closed Mondays)" },
      { label: "CALL", value: "(718) 555-0188" },
    ],
    infoEyebrow: "GOOD TO KNOW",
    info: [
      { label: "SEATING", value: "24 seats inside, 8 at the roastery bar" },
      { label: "WIFI", value: "Free, ask at the counter" },
      { label: "DOGS", value: "Welcome on the patio" },
      { label: "PARKING", value: "Street parking on Wythe Avenue" },
    ],
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
  ko: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "VISIT US",
    title: "성수동 본점",
    intro: "로스터리 + 카페가 한 공간에 있는 본점에서, 갓 볶은 원두의 향을 그대로 마실 수 있습니다.",
    rows: [
      { label: "ADDRESS", value: "서울 성동구 성수이로 22길 14, 1층" },
      { label: "HOURS", value: "매일 08:00 — 21:00 (월요일 휴무)" },
      { label: "CALL", value: "02 555 8888" },
    ],
    infoEyebrow: "알아두면 좋은 것",
    info: [
      { label: "좌석", value: "실내 24석, 로스터리 바 8석" },
      { label: "WIFI", value: "무료, 카운터에서 안내" },
      { label: "반려동물", value: "테라스석 동반 가능" },
      { label: "주차", value: "성수이로 22길 인근 노상 주차" },
    ],
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
} as const;

export default function NobleCoffeeVisit({ lang }: { lang: Lang }) {
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
            <Link href={visitPath} className="text-[#2a221a]">
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
              <Link href={menuPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.coffee}
              </Link>
              <Link href={visitPath} onClick={() => setOpen(false)} className="py-2 text-[#2a221a]">
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
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.4em] text-[#7a6850]">{t.eyebrow}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl break-keep text-balance">
              {t.title}
            </h1>
            <p className="mt-6 leading-relaxed text-[#5b4b39] break-keep text-pretty">{t.intro}</p>
            <dl className="mt-10 space-y-4 border-t border-[#e7ddcc] pt-8 text-sm">
              {t.rows.map((r) => (
                <div key={r.label} className="flex gap-6">
                  <dt className="w-20 flex-none tracking-widest text-[#7a6850]">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80&auto=format&fit=crop"
              alt="Cafe interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#ece2d2] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.4em] text-[#7a6850]">{t.infoEyebrow}</p>
          <div className="mt-10 grid gap-8 border-t border-[#dccdb0] pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.info.map((i) => (
              <div key={i.label}>
                <div className="text-xs tracking-widest text-[#7a6850]">{i.label}</div>
                <p className="mt-2 text-sm leading-relaxed break-keep text-pretty">{i.value}</p>
              </div>
            ))}
          </div>
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
