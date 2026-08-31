import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: { skincare: "Skincare", bodycare: "Bodycare", lip: "Lip", sets: "Sets" },
    login: "Sign in",
    cart: "Cart (0)",
    eyebrow: "Lip",
    title: "Color that loves your lips back",
    intro:
      "Velvet balms, tints, and glosses made with nourishing oils instead of drying waxes. Refillable bullets, cruelty-free pigments.",
    products: [
      { name: "Velvet Matte Lip Balm", tag: "BEST", price: "$18", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80&auto=format&fit=crop" },
      { name: "Sheer Tint · Rosewood", tag: "NEW", price: "$16", image: "https://images.unsplash.com/photo-1631214499500-2e34edcaccfe?w=900&q=80&auto=format&fit=crop" },
      { name: "Glass Gloss · Petal", tag: "VEGAN", price: "$15", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80&auto=format&fit=crop" },
      { name: "Overnight Lip Mask", tag: "REFILL", price: "$17", image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=900&q=80&auto=format&fit=crop" },
      { name: "Lip Liner · Blush", tag: "NEW", price: "$14", image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=900&q=80&auto=format&fit=crop" },
      { name: "Matte Lip Duo Set", tag: "SET", price: "$30", image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 BLOOM Cosmetics. All rights reserved.",
  },
  ko: {
    nav: { skincare: "Skincare", bodycare: "Bodycare", lip: "Lip", sets: "Set" },
    login: "로그인",
    cart: "장바구니 (0)",
    eyebrow: "Lip",
    title: "입술을 위하는 컬러",
    intro:
      "건조한 왁스 대신 영양 오일로 만든 벨벳 밤, 틴트, 글로스. 리필 가능한 용기와 크루얼티 프리 안료를 사용합니다.",
    products: [
      { name: "벨벳 매트 립밤", tag: "BEST", price: "18,000원", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80&auto=format&fit=crop" },
      { name: "시어 틴트 · 로즈우드", tag: "NEW", price: "16,000원", image: "https://images.unsplash.com/photo-1631214499500-2e34edcaccfe?w=900&q=80&auto=format&fit=crop" },
      { name: "글래스 글로스 · 페탈", tag: "VEGAN", price: "15,000원", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80&auto=format&fit=crop" },
      { name: "오버나이트 립 마스크", tag: "리필", price: "17,000원", image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=900&q=80&auto=format&fit=crop" },
      { name: "립 라이너 · 블러쉬", tag: "NEW", price: "14,000원", image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=900&q=80&auto=format&fit=crop" },
      { name: "매트 립 듀오 세트", tag: "SET", price: "30,000원", image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 BLOOM Cosmetics. 사업자 110-22-XXXXX",
  },
} as const;

export default function BloomCosmeticsLip({ lang }: { lang: Lang }) {
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
            <Link href={lipPath} className="text-[#c44569] font-semibold">{t.nav.lip}</Link>
            <Link href={setsPath}>{t.nav.sets}</Link>
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
