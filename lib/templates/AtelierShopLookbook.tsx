import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "Lookbook",
    title: "In Bloom",
    intro: "Spring · Summer 2026 — shot over three days in the studio and out along the coast.",
    footer: "© 2025 Atelier 22. Made by hand.",
  },
  ko: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "Lookbook",
    title: "In Bloom",
    intro: "2026 봄·여름 — 스튜디오와 해안가에서 사흘에 걸쳐 촬영했습니다.",
    footer: "© 2025 Atelier 22. Crafted in Seoul.",
  },
} as const;

const lookbookImages = [
  "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=1000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485518882345-15568b007407?w=1000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=1000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1000&q=80&auto=format&fit=crop",
];

export default function AtelierShopLookbook({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/atelier-shop");
  const outerwearPath = localePath(lang, "/portfolio/atelier-shop/outerwear");
  const accessoriesPath = localePath(lang, "/portfolio/atelier-shop/accessories");
  const lookbookPath = localePath(lang, "/portfolio/atelier-shop/lookbook");
  const journalPath = localePath(lang, "/portfolio/atelier-shop/journal");

  return (
    <div className="bg-[#fafaf7] text-[#1f1d1a]">
      <header className="border-b border-[#ecead9] bg-[#fafaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <nav className="hidden gap-6 text-xs font-medium uppercase tracking-[0.2em] md:flex">
            <Link href={home}>{t.nav.newIn}</Link>
            <Link href={outerwearPath}>{t.nav.outerwear}</Link>
            <Link href={accessoriesPath}>{t.nav.accessories}</Link>
            <Link href={lookbookPath} className="font-semibold">
              {t.nav.lookbook}
            </Link>
            <Link href={journalPath}>{t.nav.journal}</Link>
          </nav>
          <Link href={home} className="text-xl font-serif tracking-[0.4em]">
            ATELIER 22
          </Link>
          <div className="w-[120px]" aria-hidden />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-[#7a7770]">{t.eyebrow}</p>
        <h1 className="mt-3 text-center font-serif text-4xl md:text-6xl break-keep text-balance">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-[#5b5853] break-keep text-pretty">
          {t.intro}
        </p>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3">
          {lookbookImages.map((src, i) => (
            <div key={i} className={`relative ${i % 3 === 1 ? "aspect-[3/5] md:translate-y-8" : "aspect-[3/4]"} overflow-hidden`}>
              <Image src={src} alt="" fill className="object-cover" />
            </div>
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
