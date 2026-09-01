"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "JOURNAL",
    title: "Notes from the roastery",
    intro: "Cupping notes, roast-curve experiments, and dispatches from the farms we visit. Updated after every harvest.",
    posts: [
      {
        date: "MAR 2025",
        title: "Cupping Notes: Ethiopia Yirgacheffe, Spring Harvest",
        excerpt:
          "This lot arrived brighter than last year's — more jasmine up front, less of the usual stone fruit. We re-ran the cupping table three times before we trusted our own notes.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "JAN 2025",
        title: "Why We Redraw the Roast Curve Every Season",
        excerpt:
          "A profile that worked in October can taste flat by February. Green coffee keeps changing after it lands, so we treat every roast curve as a draft, not a recipe.",
        image: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "NOV 2024",
        title: "Six Days in Santa Bárbara",
        excerpt:
          "We timed the trip for peak harvest, when the whole farm smells like fermenting cherry. Watching a lot get depulped by hand changes how you weigh out a cup back home.",
        image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
  ko: {
    nav: { story: "STORY", coffee: "COFFEE", visit: "VISIT", journal: "JOURNAL", shop: "ONLINE SHOP" },
    eyebrow: "JOURNAL",
    title: "로스터리의 기록",
    intro: "커핑 노트, 로스팅 커브 실험, 그리고 농장 방문기를 매 수확 시즌마다 업데이트합니다.",
    posts: [
      {
        date: "2025.03",
        title: "커핑 노트 — 에티오피아 예가체프, 봄 수확",
        excerpt:
          "작년보다 훨씬 밝은 산미로 도착했습니다. 자스민 향이 앞서고, 익숙한 스톤프루트 뉘앙스는 줄었죠. 우리 스스로의 노트를 믿기까지 커핑 테이블을 세 번이나 다시 돌렸습니다.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "2025.01",
        title: "매 시즌 로스팅 커브를 다시 그리는 이유",
        excerpt:
          "10월에 맞던 프로파일이 2월엔 밋밋해질 수 있습니다. 생두는 도착 이후에도 계속 변하기 때문에, 우리는 로스팅 커브를 정답이 아니라 초안으로 다룹니다.",
        image: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "2024.11",
        title: "산타바바라에서의 엿새",
        excerpt:
          "수확이 절정에 달하는 시기에 맞춰 방문했습니다. 농장 전체가 발효 중인 체리 향으로 가득하던 그때, 손으로 펄핑되는 로트를 지켜본 경험은 커피를 계량하는 방식마저 바꿔놓았습니다.",
        image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 NOBLE COFFEE ROASTERS",
  },
} as const;

export default function NobleCoffeeJournal({ lang }: { lang: Lang }) {
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
            <Link href={journalPath} className="text-[#2a221a]">
              {t.nav.journal}
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={shopPath}
              className="rounded-full border border-[#2a221a] px-4 py-2 text-xs tracking-widest"
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
              <Link href={journalPath} onClick={() => setOpen(false)} className="py-2 text-[#2a221a]">
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

        <div className="mt-16 grid gap-16 border-t border-[#e7ddcc] pt-16">
          {t.posts.map((post) => (
            <article key={post.title} className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs tracking-widest text-[#7a6850]">{post.date}</p>
                <h2 className="mt-3 font-serif text-2xl leading-snug md:text-3xl break-keep text-balance">
                  {post.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[#5b4b39] break-keep text-pretty">{post.excerpt}</p>
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
