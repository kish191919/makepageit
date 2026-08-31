"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { work: "Work", services: "Services", studio: "Studio", journal: "Journal" },
    bookCta: "Book",
    eyebrow: "Selected Work",
    title: "The full archive.",
    intro: "Weddings, families, brands, editorials — every set is shot on film-first instinct and printed the way it was seen through the lens.",
    categories: [
      { label: "Wedding", count: "42 weddings" },
      { label: "Family", count: "68 sessions" },
      { label: "Brand", count: "35 campaigns" },
      { label: "Editorial", count: "19 stories" },
    ],
    footer: { copyright: "© 2025 Nova Studio · Brooklyn", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
  ko: {
    nav: { work: "Work", services: "Services", studio: "Studio", journal: "Journal" },
    bookCta: "Book",
    eyebrow: "Selected Work",
    title: "지금까지의 기록.",
    intro: "웨딩, 가족, 브랜드, 에디토리얼 — 모든 촬영은 필름의 감각으로 찍고, 렌즈로 본 그대로 인화합니다.",
    categories: [
      { label: "Wedding", count: "42건" },
      { label: "Family", count: "68건" },
      { label: "Brand", count: "35건" },
      { label: "Editorial", count: "19건" },
    ],
    footer: { copyright: "© 2025 Nova Studio · Seoul", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
} as const;

const gallery = [
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-square" },
];

export default function NovaStudioWork({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/nova-studio");
  const servicesPath = localePath(lang, "/portfolio/nova-studio/services");
  const studioPath = localePath(lang, "/portfolio/nova-studio/studio");
  const journalPath = localePath(lang, "/portfolio/nova-studio/journal");

  return (
    <div className="bg-black text-white">
      <header ref={ref} className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href={home} className="text-2xl font-light tracking-[0.5em]">NOVA</Link>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.3em] text-white/80 md:flex">
            <span className="border-b border-white pb-1 text-white">{t.nav.work}</span>
            <Link href={servicesPath} className="transition hover:text-white/60">{t.nav.services}</Link>
            <Link href={studioPath} className="transition hover:text-white/60">{t.nav.studio}</Link>
            <Link href={journalPath} className="transition hover:text-white/60">{t.nav.journal}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={`${home}#booking`} className="hidden rounded-none border-b-2 border-white pb-1 text-xs uppercase tracking-[0.3em] sm:inline-block">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center border border-white/30 text-white md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-white/80">
              <span className="py-2 text-white">{t.nav.work}</span>
              <Link href={servicesPath} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={studioPath} onClick={() => setOpen(false)} className="py-2">{t.nav.studio}</Link>
              <Link href={journalPath} onClick={() => setOpen(false)} className="py-2">{t.nav.journal}</Link>
            </nav>
            <Link
              href={`${home}#booking`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-none border-b-2 border-white pb-1 text-xs uppercase tracking-[0.3em]"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t.eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight break-keep text-balance md:text-7xl">{t.title}</h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 break-keep text-pretty">{t.intro}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.categories.map((c) => (
            <div key={c.label} className="border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
              {c.label} <span className="text-white/40">— {c.count}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 columns-2 gap-3 md:columns-4">
          {gallery.map((g, i) => (
            <div key={i} className={`relative mb-3 overflow-hidden ${g.aspect} break-inside-avoid`}>
              <Image src={g.src} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs uppercase tracking-[0.3em] text-white/40 md:flex-row">
          <Link href={home} className="text-base font-light tracking-[0.5em] text-white/80">NOVA</Link>
          <div>{t.footer.copyright}</div>
          <div className="flex gap-5">
            <a>{t.footer.links.instagram}</a>
            <a>{t.footer.links.vimeo}</a>
            <a>{t.footer.links.mail}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
