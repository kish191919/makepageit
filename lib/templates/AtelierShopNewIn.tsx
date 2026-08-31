import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "New In",
    title: "Just landed",
    intro:
      "This week's arrivals, in one place — coats, knits, and the small pieces that finish a look. Everything here is fresh off the workroom table.",
    products: [
      {
        name: "Linen Wrap Coat",
        price: "$348",
        desc: "A single-layer wrap coat in heavyweight Belgian linen. Ties at the waist, drapes past the knee.",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Hand-stitched Tote",
        price: "$156",
        desc: "Vegetable-tanned leather, saddle-stitched by hand. Holds its shape better the longer you carry it.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Cotton Wide Trouser",
        price: "$138",
        desc: "A relaxed, high-rise trouser in washed cotton twill. Cut wide through the leg for full range of motion.",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Silk Scarf · Bloom",
        price: "$78",
        desc: "A hand-rolled edge on 100% mulberry silk, printed with an original floral study from our archive.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Knit Vest · Ivory",
        price: "$118",
        desc: "A cropped, ribbed vest in undyed merino wool. Layers over a blouse or straight against the skin.",
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Wool Berét",
        price: "$62",
        desc: "Felted merino wool, shaped by hand over a wooden block. One size, sits soft rather than structured.",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Atelier 22. Made by hand.",
  },
  ko: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "New In",
    title: "이번 주 신상",
    intro:
      "이번 주에 도착한 신상품을 한자리에 모았습니다 — 코트, 니트, 그리고 룩을 완성하는 작은 아이템까지, 모두 공방에서 막 나온 것들입니다.",
    products: [
      {
        name: "Linen Wrap Coat",
        price: "428,000원",
        desc: "두꺼운 벨기에산 리넨으로 만든 싱글 레이어 랩 코트. 허리에서 묶어 무릎 아래까지 떨어집니다.",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Hand-stitched Tote",
        price: "192,000원",
        desc: "식물성 탄닌 가죽을 새들 스티치로 손바느질했습니다. 오래 들수록 더 좋은 모양을 잡아갑니다.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Cotton Wide Trouser",
        price: "168,000원",
        desc: "워싱 코튼 트윌로 만든 하이라이즈 와이드 팬츠. 다리를 넓게 재단해 움직임이 편합니다.",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Silk Scarf · Bloom",
        price: "98,000원",
        desc: "100% 멀버리 실크에 아카이브 속 플로럴 드로잉을 프린트하고, 가장자리를 손으로 말아 마감했습니다.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Knit Vest · Ivory",
        price: "148,000원",
        desc: "무염색 메리노 울로 짠 크롭 리브 베스트. 블라우스 위에 겹쳐 입거나 맨살에 바로 입을 수 있습니다.",
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Wool Berét",
        price: "78,000원",
        desc: "메리노 울을 펠팅해 나무 블록으로 손수 모양을 잡았습니다. 프리사이즈, 딱딱하지 않고 부드럽게 앉습니다.",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Atelier 22. Crafted in Seoul.",
  },
} as const;

export default function AtelierShopNewIn({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/atelier-shop");
  const newInPath = localePath(lang, "/portfolio/atelier-shop/new-in");
  const outerwearPath = localePath(lang, "/portfolio/atelier-shop/outerwear");
  const accessoriesPath = localePath(lang, "/portfolio/atelier-shop/accessories");
  const lookbookPath = localePath(lang, "/portfolio/atelier-shop/lookbook");
  const journalPath = localePath(lang, "/portfolio/atelier-shop/journal");

  return (
    <div className="bg-[#fafaf7] text-[#1f1d1a]">
      <header className="border-b border-[#ecead9] bg-[#fafaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <nav className="hidden gap-6 text-xs font-medium uppercase tracking-[0.2em] md:flex">
            <Link href={newInPath} className="font-semibold">
              {t.nav.newIn}
            </Link>
            <Link href={outerwearPath}>{t.nav.outerwear}</Link>
            <Link href={accessoriesPath}>{t.nav.accessories}</Link>
            <Link href={lookbookPath}>{t.nav.lookbook}</Link>
            <Link href={journalPath}>{t.nav.journal}</Link>
          </nav>
          <Link href={home} className="text-xl font-serif tracking-[0.4em]">
            ATELIER 22
          </Link>
          <div className="w-[120px]" aria-hidden />
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#7a7770]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#5b5853] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-x-6 gap-y-16 border-t border-[#ecead9] pt-16 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.map((p) => (
            <article key={p.name}>
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ecead9]">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-serif text-lg break-keep text-balance">{p.name}</h3>
                <p className="text-sm tracking-wide">{p.price}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#5b5853] break-keep text-pretty">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#fafaf7] py-12 text-xs uppercase tracking-widest text-[#7a7770]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <Link href={home} className="font-serif text-base normal-case tracking-[0.4em] text-[#1f1d1a]">
            ATELIER 22
          </Link>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
