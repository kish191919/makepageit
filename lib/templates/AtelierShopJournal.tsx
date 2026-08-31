"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "Journal",
    title: "Notes from the workroom",
    intro:
      "Pattern drafts, fabric sourcing trips, and short profiles of the makers behind every piece. Updated after every season.",
    posts: [
      {
        date: "MAR 2025",
        title: "Meet Soo-jin, Our Head Patternmaker",
        excerpt:
          "Soo-jin has cut every core pattern in the collection since 2019. She still drapes the first sample of a new silhouette by hand before it ever touches a machine — 'the fabric tells you what it wants before the pattern does.'",
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "JAN 2025",
        title: "Sourcing Linen in Gyeongju",
        excerpt:
          "We spent three days at a family-run mill outside Gyeongju that has woven linen the same way for four generations. The Wrap Coat's fabric comes from a loom that's older than most of our team.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "NOV 2024",
        title: "Why We Only Make 22 Pieces Per Drop",
        excerpt:
          "Each of our 22 makers finishes one to two garments per week, start to finish. We could scale that up, but the seams start to show it. We'd rather sell out than cut corners.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Atelier 22. Made by hand.",
  },
  ko: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook", journal: "Journal" },
    eyebrow: "Journal",
    title: "공방의 기록",
    intro: "패턴 초안, 원단을 찾아 떠난 여정, 그리고 한 벌 한 벌을 만드는 장인들의 이야기를 매 시즌 기록합니다.",
    posts: [
      {
        date: "2025.03",
        title: "수석 패턴사 수진 님을 소개합니다",
        excerpt:
          "수진 님은 2019년부터 컬렉션의 모든 코어 패턴을 직접 재단해왔습니다. 새로운 실루엣의 첫 샘플은 지금도 재봉틀에 앉기 전, 손으로 먼저 드레이핑합니다. \"패턴보다 원단이 먼저 말해줍니다.\"",
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "2025.01",
        title: "경주에서 리넨을 찾다",
        excerpt:
          "4대째 같은 방식으로 리넨을 짜는 경주 외곽의 가족 직물 공방에서 사흘을 보냈습니다. Wrap Coat의 원단은 저희 팀 그 누구보다도 오래된 베틀에서 나옵니다.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "2024.11",
        title: "매 시즌 22벌만 만드는 이유",
        excerpt:
          "22명의 장인은 각자 일주일에 한두 벌을 처음부터 끝까지 완성합니다. 생산량을 더 늘릴 수도 있지만, 그러면 바느질 선에서 티가 나기 시작합니다. 저희는 완판이 될지언정 대충 만들지는 않습니다.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Atelier 22. Crafted in Seoul.",
  },
} as const;

export default function AtelierShopJournal({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/atelier-shop");
  const newInPath = localePath(lang, "/portfolio/atelier-shop/new-in");
  const outerwearPath = localePath(lang, "/portfolio/atelier-shop/outerwear");
  const accessoriesPath = localePath(lang, "/portfolio/atelier-shop/accessories");
  const lookbookPath = localePath(lang, "/portfolio/atelier-shop/lookbook");
  const journalPath = localePath(lang, "/portfolio/atelier-shop/journal");

  return (
    <div className="bg-[#fafaf7] text-[#1f1d1a]">
      <header ref={ref} className="border-b border-[#ecead9] bg-[#fafaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <nav className="hidden gap-6 text-xs font-medium uppercase tracking-[0.2em] md:flex">
            <Link href={newInPath}>{t.nav.newIn}</Link>
            <Link href={outerwearPath}>{t.nav.outerwear}</Link>
            <Link href={accessoriesPath}>{t.nav.accessories}</Link>
            <Link href={lookbookPath}>{t.nav.lookbook}</Link>
            <Link href={journalPath} className="font-semibold">
              {t.nav.journal}
            </Link>
          </nav>
          <Link href={home} className="text-xl font-serif tracking-[0.4em]">
            ATELIER 22
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden w-[120px] md:block" aria-hidden />
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1f1d1a]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#ecead9] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs font-medium uppercase tracking-[0.2em]">
              <Link href={newInPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.newIn}
              </Link>
              <Link href={outerwearPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.outerwear}
              </Link>
              <Link href={accessoriesPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.accessories}
              </Link>
              <Link href={lookbookPath} onClick={() => setOpen(false)} className="py-2">
                {t.nav.lookbook}
              </Link>
              <Link href={journalPath} onClick={() => setOpen(false)} className="py-2 font-semibold">
                {t.nav.journal}
              </Link>
            </nav>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#7a7770]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#5b5853] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-16 border-t border-[#ecead9] pt-16">
          {t.posts.map((post) => (
            <article key={post.title} className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#7a7770]">{post.date}</p>
                <h2 className="mt-3 font-serif text-2xl leading-snug md:text-3xl break-keep text-balance">
                  {post.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[#5b5853] break-keep text-pretty">{post.excerpt}</p>
              </div>
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
