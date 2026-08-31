"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { skincare: "Skincare", bodycare: "Bodycare", lip: "Lip", sets: "Sets" },
    login: "Sign in",
    cart: "Cart (0)",
    eyebrow: "Bodycare",
    title: "Soft skin, head to toe",
    intro:
      "Whipped body butters, gentle scrubs, and fragrance-free lotions in refillable jars. Made for the whole body, not just the face.",
    products: [
      { name: "Whipped Shea Body Butter", tag: "BEST", price: "$26", image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=900&q=80&auto=format&fit=crop" },
      { name: "Sugar Polish Scrub", tag: "NEW", price: "$22", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=80&auto=format&fit=crop" },
      { name: "Fragrance-Free Body Lotion", tag: "SENSITIVE", price: "$19", image: "https://images.unsplash.com/photo-1597931752949-98c74b5b159f?w=900&q=80&auto=format&fit=crop" },
      { name: "Vegan Hand Cream", tag: "REFILL", price: "$14", image: "https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?w=900&q=80&auto=format&fit=crop" },
      { name: "Soothing Bath Soak", tag: "NEW", price: "$18", image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&q=80&auto=format&fit=crop" },
      { name: "Rosewater Body Mist", tag: "VEGAN", price: "$20", image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 BLOOM Cosmetics. All rights reserved.",
  },
  ko: {
    nav: { skincare: "Skincare", bodycare: "Bodycare", lip: "Lip", sets: "Set" },
    login: "로그인",
    cart: "장바구니 (0)",
    eyebrow: "Bodycare",
    title: "머리부터 발끝까지 부드럽게",
    intro:
      "휘핑 바디 버터, 순한 스크럽, 무향 로션까지 리필 가능한 용기에 담았습니다. 얼굴뿐 아니라 온몸을 위한 케어입니다.",
    products: [
      { name: "휘핑 시어 바디 버터", tag: "BEST", price: "26,000원", image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=900&q=80&auto=format&fit=crop" },
      { name: "슈가 폴리시 스크럽", tag: "NEW", price: "22,000원", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=80&auto=format&fit=crop" },
      { name: "무향 바디 로션", tag: "민감성", price: "19,000원", image: "https://images.unsplash.com/photo-1597931752949-98c74b5b159f?w=900&q=80&auto=format&fit=crop" },
      { name: "비건 핸드크림", tag: "리필", price: "14,000원", image: "https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?w=900&q=80&auto=format&fit=crop" },
      { name: "릴렉싱 배스 솔트", tag: "NEW", price: "18,000원", image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&q=80&auto=format&fit=crop" },
      { name: "로즈워터 바디 미스트", tag: "VEGAN", price: "20,000원", image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 BLOOM Cosmetics. 사업자 110-22-XXXXX",
  },
} as const;

export default function BloomCosmeticsBodycare({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/bloom-cosmetics");
  const skincarePath = localePath(lang, "/portfolio/bloom-cosmetics/skincare");
  const bodycarePath = localePath(lang, "/portfolio/bloom-cosmetics/bodycare");
  const lipPath = localePath(lang, "/portfolio/bloom-cosmetics/lip");
  const setsPath = localePath(lang, "/portfolio/bloom-cosmetics/sets");

  return (
    <div className="min-h-screen bg-[#fff5f3] text-[#3a2530]">
      <header ref={ref} className="bg-[#fff5f3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="text-2xl font-bold tracking-tight">
            bloom<span className="text-[#ff8aa3]">·</span>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            <Link href={skincarePath}>{t.nav.skincare}</Link>
            <Link href={bodycarePath} className="text-[#c44569] font-semibold">{t.nav.bodycare}</Link>
            <Link href={lipPath}>{t.nav.lip}</Link>
            <Link href={setsPath}>{t.nav.sets}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden text-xs text-[#7a5f6a] md:inline">{t.login}</a>
            <a className="rounded-full bg-[#ff8aa3] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-[#ff8aa3]/30">
              {t.cart}
            </a>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3a2530]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#ffd6e0] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium">
              <Link href={skincarePath} onClick={() => setOpen(false)} className="py-2">{t.nav.skincare}</Link>
              <Link href={bodycarePath} onClick={() => setOpen(false)} className="py-2 text-[#c44569] font-semibold">{t.nav.bodycare}</Link>
              <Link href={lipPath} onClick={() => setOpen(false)} className="py-2">{t.nav.lip}</Link>
              <Link href={setsPath} onClick={() => setOpen(false)} className="py-2">{t.nav.sets}</Link>
            </nav>
            <a
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#ff8aa3] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-[#ff8aa3]/30"
            >
              {t.cart}
            </a>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="inline-block rounded-full bg-[#ffd6e0] px-3 py-1 text-[11px] font-bold text-[#c44569]">
          {t.eyebrow}
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-md text-base text-[#7a5f6a] break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.map((p) => (
            <article
              key={p.name}
              className="group rounded-3xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#ffe8e0]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#ff8aa3] px-2.5 py-0.5 text-[10px] font-bold text-white">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-5 px-2 text-base font-semibold break-keep text-balance">{p.name}</h3>
              <div className="mt-2 flex items-center justify-between px-2 pb-2">
                <span className="text-sm font-bold">{p.price}</span>
                <button className="rounded-full bg-[#ffd6e0] p-2 text-[#c44569]">＋</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-[#7a5f6a] md:flex-row">
          <Link href={home} className="text-base font-bold text-[#3a2530]">bloom·</Link>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
