import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    eyebrow: "COLLECTIONS",
    title: "Three series, one philosophy",
    intro: "Each collection is built around a single material, refined until there's nothing left to remove.",
    series: [
      {
        name: "FOREST",
        desc: "Vermont red oak, air-dried for eight years before it ever touches a blade. Dining tables and case goods meant to outlast the house they're delivered to.",
        piece: "OAK Dining Table · $1,790",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "QUARRY",
        desc: "Hudson Valley granite, hand-finished by two stonemasons who've worked with us since the studio opened. Lighting and small tables with real weight to them.",
        piece: "STONE Side Lamp · $295",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "CALM",
        desc: "French washed linen, stonewashed until it softens like something already lived-in. Upholstered seating built to be reupholstered, not replaced.",
        piece: "LINEN Lounge Chair · $1,180",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 wood & stone. Made in the USA.",
  },
  ko: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    eyebrow: "COLLECTIONS",
    title: "세 개의 시리즈, 하나의 철학",
    intro: "각 컬렉션은 단 하나의 소재를 중심으로, 더 이상 덜어낼 것이 없을 때까지 다듬어집니다.",
    series: [
      {
        name: "FOREST",
        desc: "강원도 적송을, 날이 닿기 전 8년간 자연 건조합니다. 배송된 집보다 오래 남기 위해 만드는 다이닝 테이블과 가구입니다.",
        piece: "OAK Dining Table · 1,890,000원",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "QUARRY",
        desc: "이천 화강석을, 스튜디오 개소 때부터 함께해온 두 명의 석공이 손으로 마감합니다. 무게감 있는 조명과 소형 테이블 라인입니다.",
        piece: "STONE Side Lamp · 320,000원",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "CALM",
        desc: "프랑스산 워싱 리넨을, 이미 오래 써온 듯한 질감이 될 때까지 스톤워싱합니다. 교체가 아니라 재상판을 전제로 만드는 업홀스터리 라인입니다.",
        piece: "LINEN Lounge Chair · 1,240,000원",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 wood & stone. Crafted in Korea.",
  },
} as const;

export default function WoodAndStoneCollections({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/wood-and-stone");
  const collectionsPath = localePath(lang, "/portfolio/wood-and-stone/collections");
  const navHrefs = [`${home}#shop`, collectionsPath, `${home}#journal`, `${home}#showroom`];

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
                className={i === 1 ? "text-[#a08260]" : "transition hover:text-[#a08260]"}
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

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-xs tracking-[0.4em] text-[#a08260]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5b4f3d] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-16 border-t border-[#e1d8c8] pt-16">
          {t.series.map((s) => (
            <article key={s.name} className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={s.image} alt={s.name} fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-3xl tracking-tight break-keep text-balance">{s.name}</h2>
                <p className="mt-4 leading-relaxed text-[#5b4f3d] break-keep text-pretty">{s.desc}</p>
                <p className="mt-5 text-sm tracking-widest text-[#a08260]">{s.piece}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#f5f1ea] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-xs text-[#5b4f3d] md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-base text-[#2c2620]">wood · stone</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
