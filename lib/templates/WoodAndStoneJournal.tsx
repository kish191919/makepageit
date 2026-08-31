"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    eyebrow: "JOURNAL",
    title: "Notes on material and time",
    intro: "Short essays on the four materials we build with, and why we chose them.",
    entries: [
      {
        name: "WOOD",
        title: "Eight years before it touches a blade",
        desc: "Our red oak comes from a single sawmill in Vermont that air-dries every board for eight years before it's cut. Kiln-dried lumber moves less predictably over decades; air-dried wood settles into itself, which is why our tables don't crack at the joints the way cheaper furniture does.",
        image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "STONE",
        title: "Two stonemasons, one quarry",
        desc: "Every slab of granite in our QUARRY series comes from the same Hudson Valley quarry and is finished by hand by two stonemasons who've worked with us since we opened. No two pieces are identical — the veining is the point, not a flaw to hide.",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "LINEN",
        title: "Softer with every wash",
        desc: "We use French washed linen that's already been stonewashed once before it reaches our upholsterers, so it arrives with the lived-in texture most fabric takes years to earn. It's also the reason our CALM seating is built to be reupholstered, not replaced.",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "BRASS",
        title: "Letting the finish change on purpose",
        desc: "The brass hardware across our collections is left unlacquered on purpose, so it patinas with handling the way old door hardware does. It's a small detail, but it's the one people notice first when they visit the showroom.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 wood & stone. Made in the USA.",
  },
  ko: {
    nav: ["SHOP", "COLLECTIONS", "JOURNAL", "SHOWROOM"],
    utility: ["SEARCH", "BAG (0)"],
    eyebrow: "JOURNAL",
    title: "소재와 시간에 관한 기록",
    intro: "우리가 다루는 네 가지 소재, 그리고 그것을 선택한 이유에 대한 짧은 글입니다.",
    entries: [
      {
        name: "WOOD",
        title: "날이 닿기까지 걸리는 8년",
        desc: "저희가 쓰는 적송은 강원도의 한 제재소에서 8년간 자연 건조를 거칩니다. 건조기로 말린 목재는 수십 년에 걸쳐 예측하기 어렵게 뒤틀리지만, 자연 건조된 나무는 스스로 자리를 잡습니다. 저희 테이블의 이음새가 쉽게 갈라지지 않는 이유입니다.",
        image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "STONE",
        title: "한 채석장, 두 명의 석공",
        desc: "QUARRY 시리즈에 쓰이는 화강석은 모두 이천의 같은 채석장에서 나오며, 스튜디오 개소 때부터 함께해온 두 명의 석공이 손으로 마감합니다. 무늬가 완전히 같은 제품은 없습니다 — 그 결이 감춰야 할 흠이 아니라 핵심입니다.",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "LINEN",
        title: "세탁할수록 부드러워지는 소재",
        desc: "저희는 업홀스터리에 들어가기 전 이미 한 차례 스톤워싱을 거친 프랑스산 워싱 리넨을 사용합니다. 그래서 처음부터 오래 써온 듯한 질감을 가지고 있으며, 이는 CALM 라인의 소파와 의자를 교체가 아니라 재상판을 전제로 설계한 이유이기도 합니다.",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "BRASS",
        title: "일부러 변하도록 둔 마감",
        desc: "저희 컬렉션 전반에 쓰이는 황동 하드웨어는 일부러 코팅하지 않아, 오래된 도어 손잡이처럼 손이 닿을수록 자연스럽게 산화됩니다. 작은 디테일이지만, 쇼룸을 방문한 분들이 가장 먼저 알아보는 부분입니다.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 wood & stone. Crafted in Korea.",
  },
} as const;

export default function WoodAndStoneJournal({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/wood-and-stone");
  const shopPath = localePath(lang, "/portfolio/wood-and-stone/shop");
  const collectionsPath = localePath(lang, "/portfolio/wood-and-stone/collections");
  const journalPath = localePath(lang, "/portfolio/wood-and-stone/journal");
  const showroomPath = localePath(lang, "/portfolio/wood-and-stone/showroom");
  const navHrefs = [shopPath, collectionsPath, journalPath, showroomPath];

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#2c2620]">
      <header ref={ref} className="border-b border-[#e1d8c8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href={home} className="font-serif text-xl tracking-wide">
            wood<span className="text-[#a08260]"> · </span>stone
          </Link>
          <nav className="hidden gap-8 text-xs font-medium tracking-[0.2em] text-[#5b4f3d] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 2 ? "text-[#a08260]" : "transition hover:text-[#a08260]"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4 text-xs text-[#5b4f3d]">
              {t.utility.map((u) => (
                <span key={u}>{u}</span>
              ))}
            </div>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2c2620]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#e1d8c8] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs font-medium tracking-[0.2em] text-[#5b4f3d]">
              {t.nav.map((n, i) => (
                <Link
                  key={n}
                  href={navHrefs[i]}
                  onClick={() => setOpen(false)}
                  className={i === 2 ? "py-2 text-[#a08260]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-xs tracking-[0.4em] text-[#a08260]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5b4f3d] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-16 border-t border-[#e1d8c8] pt-16">
          {t.entries.map((e, i) => (
            <article key={e.name} className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image src={e.image} alt={e.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs tracking-[0.4em] text-[#a08260]">{e.name}</p>
                <h2 className="mt-4 font-serif text-3xl tracking-tight break-keep text-balance">{e.title}</h2>
                <p className="mt-4 leading-relaxed text-[#5b4f3d] break-keep text-pretty">{e.desc}</p>
              </div>
            </article>
          ))}
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
