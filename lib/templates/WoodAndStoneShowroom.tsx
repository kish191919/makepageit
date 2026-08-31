import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    eyebrow: "SHOWROOM",
    titleA: "We'd rather",
    titleB: "you came and touched it.",
    intro: "Photos don't show weight, grain, or how a stone lamp actually sits on a table. Come by — no appointment needed for browsing, but book ahead if you'd like a member of the studio to walk you through the collections.",
    rows: [
      { label: "ADDRESS", value: "88 Madison Ave, 1F, New York NY 10016" },
      { label: "HOURS", value: "Tue — Sun · 11am — 7pm (closed Monday)" },
      { label: "CALL", value: "(212) 555-3300" },
      { label: "EMAIL", value: "showroom@woodandstone.example" },
    ],
    footer: "© 2025 wood & stone. Made in the USA.",
  },
  ko: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    eyebrow: "SHOWROOM",
    titleA: "직접 만져보러",
    titleB: "오시기를 권합니다.",
    intro: "사진으로는 무게감과 결, 스톤 램프가 테이블 위에 놓였을 때의 느낌을 전할 수 없습니다. 예약 없이 편하게 둘러보셔도 좋고, 스튜디오 스태프의 안내를 원하시면 미리 예약해 주세요.",
    rows: [
      { label: "ADDRESS", value: "서울 용산구 한남대로 88, 1F" },
      { label: "HOURS", value: "화 — 일 11:00 — 19:00 (월요일 휴무)" },
      { label: "CALL", value: "02 555 3300" },
      { label: "EMAIL", value: "showroom@woodandstone.example" },
    ],
    footer: "© 2025 wood & stone. Crafted in Korea.",
  },
} as const;

export default function WoodAndStoneShowroom({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/wood-and-stone");
  const shopPath = localePath(lang, "/portfolio/wood-and-stone/shop");
  const collectionsPath = localePath(lang, "/portfolio/wood-and-stone/collections");
  const journalPath = localePath(lang, "/portfolio/wood-and-stone/journal");
  const showroomPath = localePath(lang, "/portfolio/wood-and-stone/showroom");
  const navHrefs = [shopPath, collectionsPath, journalPath, showroomPath];

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#2c2620]">
      <header className="border-b border-[#e1d8c8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href={home} className="font-serif text-xl tracking-wide">
            wood<span className="text-[#a08260]"> · </span>stone
          </Link>
          <nav className="hidden gap-8 text-xs font-medium tracking-[0.2em] text-[#5b4f3d] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 3 ? "text-[#a08260]" : "transition hover:text-[#a08260]"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-xs text-[#5b4f3d]">
            {t.utility.map((u) => (
              <span key={u}>{u}</span>
            ))}
          </div>
        </div>
      </header>

      <section className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1800&q=80&auto=format&fit=crop"
          alt="Wood & Stone showroom"
          fill
          priority
          className="object-cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-xs tracking-[0.4em] text-[#a08260]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.titleA} {t.titleB}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5b4f3d] break-keep text-pretty">{t.intro}</p>
      </section>

      <section className="bg-[#2c2620] py-20 text-[#f5f1ea]">
        <div className="mx-auto max-w-7xl px-6">
          <dl className="mx-auto max-w-xl space-y-4 text-sm">
            {t.rows.map((r) => (
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
          <Link href={home} className="font-serif text-base text-[#2c2620]">
            wood · stone
          </Link>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
