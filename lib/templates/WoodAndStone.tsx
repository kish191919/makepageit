import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    hero: {
      season: "SPRING / 2025",
      titleA: "Furniture you'll keep",
      titleB: "made of honest material.",
      body: "We work only with materials that age well: wood, stone, linen. Wood & Stone makes furniture meant to be passed down, not consumed.",
      cta: "View Collection →",
    },
    featured: {
      eyebrow: "FEATURED",
      title: "This season's collection",
      viewAll: "VIEW ALL →",
    },
    collections: [
      { name: "OAK Dining Table", series: "FOREST series", price: "$1,790", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop" },
      { name: "STONE Side Lamp", series: "QUARRY series", price: "$295", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop" },
      { name: "LINEN Lounge Chair", series: "CALM series", price: "$1,180", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop" },
    ],
    materialsSection: { eyebrow: "MATERIALS", title: "Four materials, well kept." },
    materials: [
      ["WOOD", "Vermont red oak, 8-year air-dried"] as [string, string],
      ["STONE", "Hudson Valley granite, hand-finished"] as [string, string],
      ["LINEN", "French washed linen, stonewashed"] as [string, string],
      ["BRASS", "Patinated brass detailing"] as [string, string],
    ],
    showroom: {
      eyebrow: "SHOWROOM",
      titleA: "We'd rather",
      titleB: "you came and touched it.",
      rows: [
        { label: "ADDRESS", value: "88 Madison Ave, 1F, New York NY 10016" },
        { label: "HOURS", value: "Tue — Sun · 11am — 7pm (closed Monday)" },
        { label: "CALL", value: "(212) 555-3300" },
      ],
    },
    footer: "© 2025 wood & stone. Made in the USA.",
  },
  ko: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    hero: {
      season: "SPRING / 2025",
      titleA: "오래 곁에 두는,",
      titleB: "정직한 소재의 가구",
      body: "나무와 돌, 리넨처럼 시간이 지날수록 깊어지는 소재만을 사용합니다. 우드앤스톤은 소비되는 가구가 아니라 물려주는 가구를 만듭니다.",
      cta: "컬렉션 보기 →",
    },
    featured: {
      eyebrow: "FEATURED",
      title: "이번 시즌 컬렉션",
      viewAll: "VIEW ALL →",
    },
    collections: [
      { name: "OAK Dining Table", series: "FOREST 시리즈", price: "1,890,000원", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop" },
      { name: "STONE Side Lamp", series: "QUARRY 시리즈", price: "320,000원", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop" },
      { name: "LINEN Lounge Chair", series: "CALM 시리즈", price: "1,240,000원", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop" },
    ],
    materialsSection: { eyebrow: "MATERIALS", title: "우리가 다루는 네 가지 재료." },
    materials: [
      ["WOOD", "강원 적송, 8년 자연건조"] as [string, string],
      ["STONE", "이천 화강석, 수공 마감"] as [string, string],
      ["LINEN", "프랑스산 워싱 리넨"] as [string, string],
      ["BRASS", "산화 처리 황동 디테일"] as [string, string],
    ],
    showroom: {
      eyebrow: "SHOWROOM",
      titleA: "직접 만져보러",
      titleB: "오시기를 권합니다.",
      rows: [
        { label: "ADDRESS", value: "서울 용산구 한남대로 88, 1F" },
        { label: "HOURS", value: "화 — 일 11:00 — 19:00 (월요일 휴무)" },
        { label: "CALL", value: "02 555 3300" },
      ],
    },
    footer: "© 2025 wood & stone. Crafted in Korea.",
  },
} as const;

export default function WoodAndStone({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#2c2620]">
      <header className="border-b border-[#e1d8c8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="font-serif text-xl tracking-wide">
            wood<span className="text-[#a08260]"> · </span>stone
          </div>
          <nav className="hidden gap-8 text-xs font-medium tracking-[0.2em] text-[#5b4f3d] md:flex">
            {t.nav.map((n) => (
              <a key={n}>{n}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-xs text-[#5b4f3d]">
            {t.utility.map((u) => (
              <a key={u}>{u}</a>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-end md:py-24">
        <div>
          <p className="text-xs tracking-[0.4em] text-[#a08260]">{t.hero.season}</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight md:text-7xl">
            {t.hero.titleA}
            <br />
            <span className="italic text-[#7d6a4d]">{t.hero.titleB}</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-[#5b4f3d]">
            {t.hero.body}
          </p>
          <a className="mt-10 inline-block border border-[#2c2620] px-7 py-3 text-xs tracking-widest">
            {t.hero.cta}
          </a>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80&auto=format&fit=crop"
            alt="Wood & Stone living"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-[#e1d8c8] bg-[#ece4d3] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.4em] text-[#a08260]">{t.featured.eyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl">{t.featured.title}</h2>
            </div>
            <a className="hidden text-xs tracking-widest text-[#5b4f3d] md:inline">{t.featured.viewAll}</a>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {t.collections.map((c) => (
              <article key={c.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#dccdb1]">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[10px] tracking-[0.3em] text-[#a08260]">{c.series}</p>
                <h3 className="mt-2 font-serif text-2xl">{c.name}</h3>
                <p className="mt-3 text-sm tracking-wider text-[#5b4f3d]">{c.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1200&q=80&auto=format&fit=crop"
              alt="Materials"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-[#a08260]">{t.materialsSection.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              {t.materialsSection.title}
            </h2>
            <ul className="mt-10 divide-y divide-[#d8cdb6] border-y border-[#d8cdb6]">
              {t.materials.map(([k, v]) => (
                <li key={k} className="grid grid-cols-[120px_1fr] py-4 text-sm">
                  <span className="font-medium tracking-[0.3em] text-[#a08260]">{k}</span>
                  <span className="text-[#3d342a]">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#2c2620] py-20 text-[#f5f1ea]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-[#c4a47a]">{t.showroom.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {t.showroom.titleA}
              <br />
              {t.showroom.titleB}
            </h2>
          </div>
          <dl className="space-y-4 text-sm">
            {t.showroom.rows.map((r) => (
              <div key={r.label} className="flex gap-6 border-b border-white/10 pb-4">
                <dt className="w-24 tracking-widest text-[#c4a47a]">{r.label}</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="bg-[#f5f1ea] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-xs text-[#5b4f3d] md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-base text-[#2c2620]">wood · stone</div>
          <div>{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
