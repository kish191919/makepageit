"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "OUR STORY",
    title: ["We start with", "the origin."],
    intro:
      "Santa Bárbara in Guatemala. Yirgacheffe Kochere in Ethiopia. Each year we visit the hands the cup begins in. Roast profiles are redrawn every season — and we drink the difference at the bar with our guests.",
    stats: [
      { value: "12", label: "FARMS" },
      { value: "7DAYS", label: "FRESH" },
      { value: "2018", label: "EST." },
    ],
    timelineEyebrow: "MILESTONES",
    timeline: [
      { year: "2018", body: "Opened the Williamsburg roastery with a single drum roaster and six tables." },
      { year: "2020", body: "Doubled roasting capacity and started sourcing direct from three founding farms." },
      { year: "2022", body: "Signed multi-year contracts with growers in Guatemala, Ethiopia, Colombia, and Kenya." },
      { year: "2024", body: "Opened a second bar in Seoul, roasting the same weekly lots for both cities." },
    ],
    farmsEyebrow: "FARM PARTNERS",
    farmsTitle: "The hands behind the cup",
    farms: [
      {
        name: "Santa Bárbara, Guatemala",
        body: "High-altitude washed lots from a family farm we've bought from since year one.",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&q=80&auto=format&fit=crop",
      },
      {
        name: "Yirgacheffe Kochere, Ethiopia",
        body: "Heirloom varietals, natural-processed, picked by hand across a single hillside.",
        image: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=1000&q=80&auto=format&fit=crop",
      },
      {
        name: "Huila, Colombia",
        body: "Pink Bourbon lots fermented on-site under the grower's own protocol.",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=1000&q=80&auto=format&fit=crop",
      },
      {
        name: "Kiambu, Kenya",
        body: "AA-grade lots from a cooperative of smallholder farms we visit every harvest.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
  ko: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "OUR STORY",
    title: ["우리는 커피의", "‘처음’을 다룹니다."],
    intro:
      "과테말라의 산타바바라 농장, 에티오피아의 예가체프 코지. 우리가 마시는 한 잔이 어떤 손에서 시작되었는지를 매년 직접 확인합니다. 로스팅 프로파일은 매 시즌 다시 설계되고, 카페에서 우리는 그 차이를 손님과 함께 마십니다.",
    stats: [
      { value: "12", label: "FARMS" },
      { value: "7DAYS", label: "FRESH" },
      { value: "2018", label: "EST." },
    ],
    timelineEyebrow: "MILESTONES",
    timeline: [
      { year: "2018", body: "드럼 로스터 한 대와 테이블 여섯 개로 윌리엄스버그 로스터리를 열었습니다." },
      { year: "2020", body: "로스팅 용량을 두 배로 늘리고, 창립 농장 세 곳과 직거래를 시작했습니다." },
      { year: "2022", body: "과테말라, 에티오피아, 콜롬비아, 케냐의 농장과 다년 계약을 체결했습니다." },
      { year: "2024", body: "서울에 두 번째 매장을 열어, 같은 주간 로트를 두 도시에서 함께 로스팅합니다." },
    ],
    farmsEyebrow: "FARM PARTNERS",
    farmsTitle: "한 잔 뒤에 있는 손길",
    farms: [
      {
        name: "과테말라, 산타바바라",
        body: "창립 첫해부터 거래해온 가족 농장의 고지대 워시드 로트.",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&q=80&auto=format&fit=crop",
      },
      {
        name: "에티오피아, 예가체프 코지",
        body: "한 언덕에서 손으로 수확한 에어룸 품종, 내추럴 프로세스.",
        image: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=1000&q=80&auto=format&fit=crop",
      },
      {
        name: "콜롬비아, 우일라",
        body: "농장 자체 프로토콜로 현장에서 발효한 핑크 버번 로트.",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=1000&q=80&auto=format&fit=crop",
      },
      {
        name: "케냐, 키암부",
        body: "매 수확기마다 방문하는 소농 협동조합의 AA 등급 로트.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
} as const;

export default function NobleCoffeeStory({ lang }: { lang: Lang }) {
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
            <Link href={storyPath} className="text-[#2a221a]">
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
              <Link href={storyPath} onClick={() => setOpen(false)} className="py-2 text-[#2a221a]">
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
          {t.title[0]}<br className="hidden md:block" />{t.title[1]}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#5b4b39] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#e7ddcc] pt-10 text-center md:max-w-md">
          {t.stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl">{s.value}</div>
              <div className="mt-1 text-xs tracking-widest text-[#7a6850]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#ece2d2] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.4em] text-[#7a6850]">{t.timelineEyebrow}</p>
          <div className="mt-10 grid gap-10 border-t border-[#dccdb0] pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.timeline.map((m) => (
              <div key={m.year}>
                <div className="font-serif text-2xl">{m.year}</div>
                <p className="mt-3 text-sm leading-relaxed text-[#5b4b39] break-keep text-pretty">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs tracking-[0.4em] text-[#7a6850]">{t.farmsEyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl break-keep text-balance">{t.farmsTitle}</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {t.farms.map((f) => (
            <article key={f.name} className="flex gap-6">
              <div className="relative aspect-square w-28 flex-none overflow-hidden rounded-sm">
                <Image src={f.image} alt={f.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-lg break-keep text-balance">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b4b39] break-keep text-pretty">{f.body}</p>
              </div>
            </article>
          ))}
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
