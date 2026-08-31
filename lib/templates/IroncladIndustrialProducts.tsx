"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "IRONCLAD", tag: "INDUSTRIAL SUPPLY" },
    nav: { capabilities: "Capabilities", products: "Products", certifications: "Certifications", industries: "Industries", contact: "Contact" },
    quoteCta: "Request a Quote",
    eyebrow: "PRODUCTS",
    title: "What comes off the floor",
    intro: "A sample of the part families we run in production — every line item ships with full material certification.",
    products: [
      {
        name: "Precision-Machined Housings",
        spec: "Aluminum & titanium, ±0.0005\" tolerance",
        desc: "5-axis milled enclosures for avionics and sensor assemblies, finished to Class 1 surface spec.",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Structural Brackets & Weldments",
        spec: "Laser-cut steel, TIG welded",
        desc: "Load-rated brackets and welded assemblies for heavy-equipment frames and mounting structures.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Fastener & Hardware Kits",
        spec: "Custom BOM, vendor-managed inventory",
        desc: "Pre-kitted hardware sets matched to your assembly line's work instructions, replenished on a JIT schedule.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Ironclad Industrial Supply. All rights reserved.",
  },
  ko: {
    brand: { name: "IRONCLAD", tag: "아이언클래드 산업" },
    nav: { capabilities: "생산 역량", products: "제품", certifications: "인증", industries: "적용 산업", contact: "문의" },
    quoteCta: "견적 요청",
    eyebrow: "PRODUCTS",
    title: "생산 라인에서 나오는 제품들",
    intro: "실제 양산 중인 부품군 일부입니다. 모든 품목은 재료 인증서와 함께 출고됩니다.",
    products: [
      {
        name: "정밀 가공 하우징",
        spec: "알루미늄 · 티타늄, ±0.0005인치 공차",
        desc: "항공전자 및 센서 조립체용 5축 밀링 인클로저, Class 1 표면 사양으로 마감합니다.",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "구조용 브래킷 · 용접 조립품",
        spec: "레이저 절단 스틸, TIG 용접",
        desc: "중장비 프레임과 마운팅 구조물을 위한 하중 등급 브래킷 및 용접 조립품입니다.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "체결 부품 · 하드웨어 키트",
        spec: "맞춤 BOM, VMI 재고관리",
        desc: "고객사 작업지시서에 맞춘 하드웨어 세트를 사전 키팅해 JIT 일정으로 보충합니다.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 아이언클래드 산업. All rights reserved.",
  },
} as const;

export default function IroncladIndustrialProducts({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/ironclad-industrial");
  const productsPath = localePath(lang, "/portfolio/ironclad-industrial/products");
  const industriesPath = localePath(lang, "/portfolio/ironclad-industrial/industries");
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();

  return (
    <div className="bg-[#23272e] text-[#f2f1ec]">
      <header ref={ref} className="border-b border-white/10 bg-[#1b1e24]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#ff6a13] font-black text-base text-[#1b1e24]">
              I
            </span>
            <div>
              <div className="font-black text-lg uppercase leading-none tracking-tight">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-white/50">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-semibold uppercase tracking-wide text-white/70 md:flex">
            <Link href={`${home}#capabilities`} className="transition hover:text-[#ff6a13]">{t.nav.capabilities}</Link>
            <Link href={productsPath} className="text-[#ff6a13]">{t.nav.products}</Link>
            <Link href={`${home}#certifications`} className="transition hover:text-[#ff6a13]">{t.nav.certifications}</Link>
            <Link href={industriesPath} className="transition hover:text-[#ff6a13]">{t.nav.industries}</Link>
            <Link href={`${home}#contact`} className="transition hover:text-[#ff6a13]">{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={`${home}#contact`}
              className="hidden bg-[#ff6a13] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1b1e24] sm:inline-block"
            >
              {t.quoteCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center border border-white/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wide text-white/70">
              <Link href={`${home}#capabilities`} onClick={() => setOpen(false)} className="py-2">{t.nav.capabilities}</Link>
              <Link href={productsPath} onClick={() => setOpen(false)} className="py-2 text-[#ff6a13]">{t.nav.products}</Link>
              <Link href={`${home}#certifications`} onClick={() => setOpen(false)} className="py-2">{t.nav.certifications}</Link>
              <Link href={industriesPath} onClick={() => setOpen(false)} className="py-2">{t.nav.industries}</Link>
              <Link href={`${home}#contact`} onClick={() => setOpen(false)} className="py-2">{t.nav.contact}</Link>
            </nav>
            <Link
              href={`${home}#contact`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block bg-[#ff6a13] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1b1e24]"
            >
              {t.quoteCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6a13]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-black uppercase leading-tight tracking-tight text-4xl md:text-5xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-white/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-16 border-t border-white/10 pt-16">
          {t.products.map((p) => (
            <article key={p.name} className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-black uppercase tracking-tight text-2xl break-keep text-balance">{p.name}</h2>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#ff6a13]">{p.spec}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/70 break-keep text-pretty">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#1b1e24] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div className="font-black uppercase tracking-tight text-sm text-white">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
