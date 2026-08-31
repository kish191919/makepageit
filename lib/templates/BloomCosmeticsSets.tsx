import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: { skincare: "Skincare", bodycare: "Bodycare", lip: "Lip", sets: "Sets" },
    login: "Sign in",
    cart: "Cart (0)",
    eyebrow: "Sets",
    title: "Bundled rituals, better value",
    intro:
      "Our bestsellers, packed together and priced to save. The easiest way to try Bloom across skin, body, and lip.",
    products: [
      { name: "Glow Starter Set", tag: "SAVE 15%", price: "$58", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80&auto=format&fit=crop" },
      { name: "Vegan Essentials Trio", tag: "BEST", price: "$64", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=900&q=80&auto=format&fit=crop" },
      { name: "Head-to-Toe Care Kit", tag: "SAVE 20%", price: "$72", image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=900&q=80&auto=format&fit=crop" },
      { name: "Lip Duo Gift Set", tag: "GIFT", price: "$30", image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=900&q=80&auto=format&fit=crop" },
      { name: "Refill Bundle · Skin", tag: "REFILL", price: "$46", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80&auto=format&fit=crop" },
      { name: "Travel Minis Set", tag: "NEW", price: "$28", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 BLOOM Cosmetics. All rights reserved.",
  },
  ko: {
    nav: { skincare: "Skincare", bodycare: "Bodycare", lip: "Lip", sets: "Set" },
    login: "로그인",
    cart: "장바구니 (0)",
    eyebrow: "Set",
    title: "더 알뜰하게, 묶음으로",
    intro:
      "인기 제품을 세트로 구성해 더 알뜰한 가격에 만나보세요. 스킨, 바디, 립까지 블룸을 한 번에 경험하는 가장 쉬운 방법입니다.",
    products: [
      { name: "글로우 스타터 세트", tag: "15% 할인", price: "58,000원", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80&auto=format&fit=crop" },
      { name: "비건 에센셜 트리오", tag: "BEST", price: "64,000원", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=900&q=80&auto=format&fit=crop" },
      { name: "헤드투토우 케어 키트", tag: "20% 할인", price: "72,000원", image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=900&q=80&auto=format&fit=crop" },
      { name: "립 듀오 선물세트", tag: "GIFT", price: "30,000원", image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=900&q=80&auto=format&fit=crop" },
      { name: "리필 번들 · 스킨", tag: "리필", price: "46,000원", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80&auto=format&fit=crop" },
      { name: "트래블 미니 세트", tag: "NEW", price: "28,000원", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 BLOOM Cosmetics. 사업자 110-22-XXXXX",
  },
} as const;

export default function BloomCosmeticsSets({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/bloom-cosmetics");
  const skincarePath = localePath(lang, "/portfolio/bloom-cosmetics/skincare");
  const bodycarePath = localePath(lang, "/portfolio/bloom-cosmetics/bodycare");
  const lipPath = localePath(lang, "/portfolio/bloom-cosmetics/lip");
  const setsPath = localePath(lang, "/portfolio/bloom-cosmetics/sets");

  return (
    <div className="min-h-screen bg-[#fff5f3] text-[#3a2530]">
      <header className="bg-[#fff5f3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="text-2xl font-bold tracking-tight">
            bloom<span className="text-[#ff8aa3]">·</span>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            <Link href={skincarePath}>{t.nav.skincare}</Link>
            <Link href={bodycarePath}>{t.nav.bodycare}</Link>
            <Link href={lipPath}>{t.nav.lip}</Link>
            <Link href={setsPath} className="text-[#c44569] font-semibold">{t.nav.sets}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden text-xs text-[#7a5f6a] md:inline">{t.login}</a>
            <a className="rounded-full bg-[#ff8aa3] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-[#ff8aa3]/30">
              {t.cart}
            </a>
          </div>
        </div>
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
