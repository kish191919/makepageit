import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: "WAYFARER",
    nav: ["STAY", "DINE", "SPA", "JOURNAL"],
    eyebrow: "— DINE",
    title: "A cellar, a fire, and the sea beyond it",
    intro: "Three ways to eat at the Wayfarer, each built around the same view — seated among 350 labels, at a chef's counter, or on a terrace lit by the cliff at dusk.",
    venues: [
      {
        name: "The Cellar",
        length: "18:00 – 22:00",
        desc: "Dinner inside a 350-label wine cellar carved into the cliff rock, with a nightly tasting menu built around what the sommelier opened that afternoon.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Chef's Counter",
        length: "8 seats · by reservation",
        desc: "Eight seats facing the open kitchen for a nine-course counter menu drawn from the morning's catch and the garden terrace above.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Terrace at Dusk",
        length: "17:00 – 20:00",
        desc: "A shorter, lighter menu served cliffside as the light changes — the same sunset every guest asks about, with a glass in hand.",
        image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 THE WAYFARER HOTEL & RESORT — BIG SUR, CALIFORNIA",
  },
  ko: {
    brand: "MOAI",
    nav: ["STAY", "DINE", "SPA", "JOURNAL"],
    eyebrow: "— DINE",
    title: "와인 셀러, 벽난로, 그 너머의 바다",
    intro: "모아이에서 식사하는 세 가지 방법 — 350종의 와인 사이, 셰프의 카운터 앞, 혹은 절벽 위 노을이 지는 테라스에서. 모두 같은 풍경 위에 놓여 있습니다.",
    venues: [
      {
        name: "더 셀러",
        length: "18:00 – 22:00",
        desc: "절벽 암반을 파내어 만든 350종 와인 셀러에서의 저녁 식사. 그날 오후 소믈리에가 연 와인을 중심으로 매일 메뉴가 새롭게 구성됩니다.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "셰프스 카운터",
        length: "8석 · 예약제",
        desc: "오픈 키친을 마주한 8개의 좌석에서 즐기는 9코스 메뉴. 그날 아침 잡은 재료와 상단 텃밭에서 딴 재료로 구성됩니다.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "노을의 테라스",
        length: "17:00 – 20:00",
        desc: "빛이 바뀌는 절벽 위에서 즐기는 짧고 가벼운 메뉴. 손님들이 늘 묻는 바로 그 노을을, 잔을 든 채로 마주합니다.",
        image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 MOAI HOTEL & RESORT — JEJU, KOREA",
  },
} as const;

export default function MoaiHotelDine({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/moai-hotel");
  const dinePath = localePath(lang, "/portfolio/moai-hotel/dine");
  const spaPath = localePath(lang, "/portfolio/moai-hotel/spa");
  const journalPath = localePath(lang, "/portfolio/moai-hotel/journal");
  const navHrefs = [`${home}#rooms`, dinePath, spaPath, journalPath];

  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f0e9d6]">
      <header className="border-b border-[#d4af37]/20 bg-[#0d0c0a]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href={home} className="font-serif text-xl tracking-[0.5em] text-[#d4af37]">
            {t.brand}
          </Link>
          <nav className="hidden gap-10 text-[11px] font-medium tracking-[0.3em] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 1 ? "text-[#d4af37]" : "transition hover:text-[#d4af37]"}
              >
                {n}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-[11px] tracking-[0.4em] text-[#d4af37]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#c9bfa6] break-keep text-pretty md:text-base">
          {t.intro}
        </p>

        <div className="mt-16 grid gap-16 border-t border-[#d4af37]/20 pt-16">
          {t.venues.map((v) => (
            <article key={v.name} className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={v.image} alt={v.name} fill className="object-cover" />
              </div>
              <div>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-serif text-2xl break-keep text-balance">{v.name}</h2>
                  <span className="text-[11px] tracking-widest text-[#d4af37]">{v.length}</span>
                </div>
                <p className="mt-4 leading-relaxed text-[#c9bfa6] break-keep text-pretty">{v.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d4af37]/20 py-10 text-center text-[10px] tracking-[0.4em] text-[#9b9277] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
