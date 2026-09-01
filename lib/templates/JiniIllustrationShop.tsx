"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "jenna",
    nav: ["works", "about", "shop", "contact"],
    cta: "Hire me ✏️",
    label: "Shop",
    title: "Goods, printed in small batches.",
    intro: "Prints, sticker sheets, and postcards from the studio — restocked every season.",
    soldOutBadge: "Sold out",
    products: [
      { name: "Moon and Cat print", price: "$28", color: "#ffd166", tag: "A4 giclée print", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80&auto=format&fit=crop", soldOut: false },
      { name: "Birds of the City sticker sheet", price: "$9", color: "#118ab2", tag: "6 vinyl stickers", img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=900&q=80&auto=format&fit=crop", soldOut: false },
      { name: "Slice of Summer postcard set", price: "$14", color: "#ef476f", tag: "Set of 6", img: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=900&q=80&auto=format&fit=crop", soldOut: true },
      { name: "Small Weather zine", price: "$16", color: "#06d6a0", tag: "32-page riso zine", img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=900&q=80&auto=format&fit=crop", soldOut: false },
      { name: "Paper Kitchen tea towel", price: "$22", color: "#ffd166", tag: "Cotton, screen-printed", img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&q=80&auto=format&fit=crop", soldOut: false },
      { name: "Bustling Library tote", price: "$24", color: "#06d6a0", tag: "Canvas, hand-inked design", img: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=900&q=80&auto=format&fit=crop", soldOut: false },
    ],
    note: "All goods ship from Portland within 3–5 business days. Email for wholesale inquiries.",
    footer: "© 2025 Jenna Cole Illustration · drawn by hand, sent kindly 🌱",
  },
  ko: {
    brand: "jini",
    nav: ["works", "about", "shop", "contact"],
    cta: "의뢰하기 ✏️",
    label: "숍",
    title: "소량으로 찍어내는 굿즈들.",
    intro: "프린트, 스티커 시트, 엽서까지 — 계절마다 새로 채워집니다.",
    soldOutBadge: "품절",
    products: [
      { name: "달과 고양이 프린트", price: "35,000원", color: "#ffd166", tag: "A4 지클레 프린트", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80&auto=format&fit=crop", soldOut: false },
      { name: "도시의 새들 스티커 시트", price: "12,000원", color: "#118ab2", tag: "비닐 스티커 6매", img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=900&q=80&auto=format&fit=crop", soldOut: false },
      { name: "여름 한 조각 엽서 세트", price: "18,000원", color: "#ef476f", tag: "6매 세트", img: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=900&q=80&auto=format&fit=crop", soldOut: true },
      { name: "작은 날씨 진(zine)", price: "20,000원", color: "#06d6a0", tag: "32페이지 리소 진", img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=900&q=80&auto=format&fit=crop", soldOut: false },
      { name: "종이 부엌 티타월", price: "28,000원", color: "#ffd166", tag: "면, 실크스크린 인쇄", img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&q=80&auto=format&fit=crop", soldOut: false },
      { name: "북적북적 도서관 에코백", price: "30,000원", color: "#06d6a0", tag: "캔버스, 손그림 디자인", img: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=900&q=80&auto=format&fit=crop", soldOut: false },
    ],
    note: "모든 굿즈는 영업일 기준 3~5일 내 발송됩니다. 도매 문의는 메일로 남겨주세요.",
    footer: "© 2025 jini illustration · 손으로 그려서, 다정하게 보냅니다 🌱",
  },
} as const;

export default function JiniIllustrationShop({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/jini-illustration");
  const worksPath = localePath(lang, "/portfolio/jini-illustration/works");
  const aboutPath = localePath(lang, "/portfolio/jini-illustration/about");
  const shopPath = localePath(lang, "/portfolio/jini-illustration/shop");
  const contactPath = localePath(lang, "/portfolio/jini-illustration/contact");
  const navPaths: Record<string, string> = { works: worksPath, about: aboutPath, shop: shopPath, contact: contactPath };

  return (
    <div
      className="min-h-screen text-[#3a2e2a]"
      style={{
        backgroundColor: "#fff8ec",
        backgroundImage:
          "radial-gradient(#e9dec5 1px, transparent 1px), radial-gradient(#e9dec5 1px, #fff8ec 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <header ref={ref} className="border-b-2 border-dashed border-[#3a2e2a]/20 bg-[#fff8ec]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2 text-2xl font-black tracking-tight">
            <span>🖍️</span> {t.brand}
            <span className="text-[#ef476f]">.</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-bold md:flex">
            {t.nav.map((n) => (
              <Link
                key={n}
                href={navPaths[n]}
                className={n === "shop" ? "rounded-full bg-[#ffd166] px-3 py-1" : "transition hover:opacity-70"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href={contactPath} className="rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]">
              {t.cta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#3a2e2a] md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t-2 border-dashed border-[#3a2e2a]/20 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-bold">
              {t.nav.map((n) => (
                <Link
                  key={n}
                  href={navPaths[n]}
                  onClick={() => setOpen(false)}
                  className={n === "shop" ? "py-2 text-[#ef476f]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <Link
              href={contactPath}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]"
            >
              {t.cta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <span className="inline-block rotate-[-2deg] rounded-full bg-[#06d6a0] px-3 py-1 text-xs font-bold text-white">
          {t.label}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.15] md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-md text-base text-[#5b4a44] break-keep text-pretty">{t.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {t.products.map((p) => (
            <article
              key={p.name}
              className="relative overflow-hidden rounded-3xl border-4 border-[#3a2e2a] bg-white shadow-[6px_6px_0_#3a2e2a] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#3a2e2a]"
            >
              <div className="relative aspect-square" style={{ backgroundColor: p.color }}>
                <Image src={p.img} alt={p.name} fill className="object-cover mix-blend-multiply" />
                {p.soldOut && (
                  <span className="absolute right-3 top-3 rotate-[4deg] rounded-full bg-[#3a2e2a] px-3 py-1 text-xs font-bold text-white">
                    {t.soldOutBadge}
                  </span>
                )}
              </div>
              <div className="border-t-4 border-[#3a2e2a] bg-[#fff8ec] p-5">
                <h3 className="text-base font-black break-keep text-balance">{p.name}</h3>
                <p className="mt-1 text-xs font-bold text-[#5b4a44]">{p.tag}</p>
                <p className="mt-3 text-lg font-black">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-xl text-xs text-[#5b4a44] break-keep text-pretty">{t.note}</p>
      </section>

      <footer className="border-t-2 border-dashed border-[#3a2e2a]/20 py-8 text-center text-xs text-[#5b4a44] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
