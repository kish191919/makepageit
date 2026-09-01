"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "HARBOR & VALE", tag: "REALTY" },
    nav: { listings: "Listings", neighborhoods: "Neighborhoods", sell: "Sell With Us", agents: "Agents", contact: "Contact" },
    bookCta: "Schedule a Showing",
    eyebrow: "ALL LISTINGS",
    title: "Homes on the market",
    intro: "Every active listing across our coastal territory, updated as offers come in. Reach out to any agent for a private showing.",
    specsLabel: { beds: "bd", baths: "ba", sqft: "sqft" },
    listings: [
      {
        address: "14 Cliffside Lane",
        neighborhood: "Harbor Point",
        price: "$2,450,000",
        beds: 4,
        baths: 3,
        sqft: "3,200",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "228 Willowmere Rd",
        neighborhood: "Vale Heights",
        price: "$1,180,000",
        beds: 3,
        baths: 2,
        sqft: "2,050",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "9 Anchor Way",
        neighborhood: "Bayview Cove",
        price: "$3,675,000",
        beds: 5,
        baths: 4,
        sqft: "4,400",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "62 Meadowlark Ct",
        neighborhood: "Vale Heights",
        price: "$895,000",
        beds: 3,
        baths: 2,
        sqft: "1,780",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "3 Lighthouse Pointe",
        neighborhood: "Harbor Point",
        price: "$4,120,000",
        beds: 5,
        baths: 5,
        sqft: "5,100",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "417 Bayshore Dr",
        neighborhood: "Bayview Cove",
        price: "$2,890,000",
        beds: 4,
        baths: 3,
        sqft: "3,650",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "88 Orchard Hill Rd",
        neighborhood: "Vale Heights",
        price: "$1,450,000",
        beds: 4,
        baths: 3,
        sqft: "2,600",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "5 Tidewater Ln",
        neighborhood: "Bayview Cove",
        price: "$1,975,000",
        beds: 4,
        baths: 3,
        sqft: "3,000",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Harbor & Vale Realty. Equal Housing Opportunity.",
  },
  ko: {
    brand: { name: "하버앤베일", tag: "부동산" },
    nav: { listings: "매물", neighborhoods: "지역 안내", sell: "매도 상담", agents: "에이전트", contact: "문의" },
    bookCta: "쇼잉 예약하기",
    eyebrow: "전체 매물",
    title: "지금 나와 있는 매물",
    intro: "저희가 담당하는 해안가 전 지역의 활성 매물입니다. 오퍼가 들어오는 대로 업데이트되며, 개인 쇼잉을 원하시면 담당 에이전트에게 연락 주세요.",
    specsLabel: { beds: "침실", baths: "욕실", sqft: "sqft" },
    listings: [
      {
        address: "14 Cliffside Lane",
        neighborhood: "Harbor Point",
        price: "$2,450,000",
        beds: 4,
        baths: 3,
        sqft: "3,200",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "228 Willowmere Rd",
        neighborhood: "Vale Heights",
        price: "$1,180,000",
        beds: 3,
        baths: 2,
        sqft: "2,050",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "9 Anchor Way",
        neighborhood: "Bayview Cove",
        price: "$3,675,000",
        beds: 5,
        baths: 4,
        sqft: "4,400",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "62 Meadowlark Ct",
        neighborhood: "Vale Heights",
        price: "$895,000",
        beds: 3,
        baths: 2,
        sqft: "1,780",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "3 Lighthouse Pointe",
        neighborhood: "Harbor Point",
        price: "$4,120,000",
        beds: 5,
        baths: 5,
        sqft: "5,100",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "417 Bayshore Dr",
        neighborhood: "Bayview Cove",
        price: "$2,890,000",
        beds: 4,
        baths: 3,
        sqft: "3,650",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "88 Orchard Hill Rd",
        neighborhood: "Vale Heights",
        price: "$1,450,000",
        beds: 4,
        baths: 3,
        sqft: "2,600",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80&auto=format&fit=crop",
      },
      {
        address: "5 Tidewater Ln",
        neighborhood: "Bayview Cove",
        price: "$1,975,000",
        beds: 4,
        baths: 3,
        sqft: "3,000",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 하버앤베일 부동산. Equal Housing Opportunity.",
  },
} as const;

export default function HarborRealtyListings({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/harbor-realty");
  const navPaths = {
    listings: localePath(lang, "/portfolio/harbor-realty/listings"),
    neighborhoods: localePath(lang, "/portfolio/harbor-realty/neighborhoods"),
    sell: localePath(lang, "/portfolio/harbor-realty/sell"),
    agents: localePath(lang, "/portfolio/harbor-realty/agents"),
    contact: localePath(lang, "/portfolio/harbor-realty/contact"),
  } as const;

  return (
    <div className="bg-[#faf7f2] text-[#1c3829]">
      <header ref={ref} className="border-b border-[#1c3829]/10 bg-[#faf7f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c3829] font-serif text-base text-[#faf7f2]">
              H
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#1c3829]/60">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#1c3829]/80 md:flex">
            <Link href={navPaths.listings} className="font-semibold">{t.nav.listings}</Link>
            <Link href={navPaths.neighborhoods}>{t.nav.neighborhoods}</Link>
            <Link href={navPaths.sell}>{t.nav.sell}</Link>
            <Link href={navPaths.agents}>{t.nav.agents}</Link>
            <Link href={navPaths.contact}>{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={navPaths.contact}
              className="hidden rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white sm:inline-block"
            >
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c3829]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#1c3829]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#1c3829]/80">
              <Link href={navPaths.listings} onClick={() => setOpen(false)} className="py-2 font-semibold">{t.nav.listings}</Link>
              <Link href={navPaths.neighborhoods} onClick={() => setOpen(false)} className="py-2">{t.nav.neighborhoods}</Link>
              <Link href={navPaths.sell} onClick={() => setOpen(false)} className="py-2">{t.nav.sell}</Link>
              <Link href={navPaths.agents} onClick={() => setOpen(false)} className="py-2">{t.nav.agents}</Link>
              <Link href={navPaths.contact} onClick={() => setOpen(false)} className="py-2">{t.nav.contact}</Link>
            </nav>
            <Link
              href={navPaths.contact}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#b08d57]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#1c3829]/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.listings.map((item) => (
            <div key={item.address}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1c3829]/5">
                <Image src={item.image} alt={item.address} fill className="object-cover" />
                <div className="absolute right-3 top-3 rounded-full bg-[#b08d57] px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
                  {item.price}
                </div>
              </div>
              <h3 className="mt-5 font-serif text-xl break-keep text-balance">{item.address}</h3>
              <p className="mt-1 text-xs tracking-[0.2em] text-[#1c3829]/50">{item.neighborhood.toUpperCase()}</p>
              <p className="mt-3 text-sm text-[#1c3829]/70">
                {item.beds} {t.specsLabel.beds} &middot; {item.baths} {t.specsLabel.baths} &middot; {item.sqft} {t.specsLabel.sqft}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#1c3829]/10 bg-[#faf7f2] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#1c3829]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#1c3829]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
