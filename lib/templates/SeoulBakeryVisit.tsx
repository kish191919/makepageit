"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "Sunrise Bakery Co.",
    nav: { menu: "Full Menu", delivery: "Same-Day", story: "Story", visit: "Visit" },
    orderCta: "Order Now",
    eyebrow: "VISIT US",
    title: "Come by for a warm one.",
    intro: "The shop opens at 6 AM, right as the first batch comes out of the oven. Best selection is before 9 AM.",
    hoursTitle: "Store hours",
    hours: [
      { d: "Monday – Friday", h: "6:00 AM – 7:00 PM" },
      { d: "Saturday – Sunday", h: "7:00 AM – 6:00 PM" },
    ],
    infoTitle: "Find us",
    address: "31-12 30th Ave, Astoria, NY 11102",
    phone: "(718) 555-0188",
    directions: "Parking available on 30th Ave after 6 PM and on weekends. Two blocks from the Astoria-Ditmars Blvd subway station.",
    mapLabel: "Map",
  },
  ko: {
    brand: "서울 베이커리",
    nav: { menu: "전체 메뉴", delivery: "당일배송", story: "스토리", visit: "매장 안내" },
    orderCta: "주문하기",
    eyebrow: "매장 안내",
    title: "갓 구운 빵, 매장에서 만나보세요.",
    intro: "매장은 오전 6시, 첫 번째 빵이 오븐에서 나오는 시간에 문을 엽니다. 오전 9시 이전 방문 시 가장 다양하게 고르실 수 있어요.",
    hoursTitle: "매장 운영시간",
    hours: [
      { d: "평일", h: "06:00 – 19:00" },
      { d: "주말", h: "07:00 – 18:00" },
    ],
    infoTitle: "오시는 길",
    address: "서울 종로구 ○○로 ○○",
    phone: "02-000-0000",
    directions: "매장 앞 도로는 오후 6시 이후와 주말에 주차 가능합니다. ○○역 3번 출구에서 도보 5분 거리입니다.",
    mapLabel: "지도",
  },
} as const;

export default function SeoulBakeryVisit({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/seoul-bakery");
  const menuPath = localePath(lang, "/portfolio/seoul-bakery/menu");
  const deliveryPath = localePath(lang, "/portfolio/seoul-bakery/delivery");
  const storyPath = localePath(lang, "/portfolio/seoul-bakery/story");
  const visitPath = localePath(lang, "/portfolio/seoul-bakery/visit");

  return (
    <div className="bg-[#fffaf2] text-[#3a2418]">
      <header ref={ref} className="border-b border-[#e8d6bc] bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2">
            <span className="text-2xl">🥐</span>
            <span className="text-lg font-bold">{t.brand}</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link href={menuPath} className="transition hover:text-[#c0681e]">{t.nav.menu}</Link>
            <Link href={deliveryPath} className="transition hover:text-[#c0681e]">{t.nav.delivery}</Link>
            <Link href={storyPath} className="transition hover:text-[#c0681e]">{t.nav.story}</Link>
            <Link href={visitPath} className="font-semibold text-[#c0681e]">{t.nav.visit}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={menuPath} className="rounded-full bg-[#c0681e] px-5 py-2 text-sm font-bold text-white">
              {t.orderCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3a2418]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#e8d6bc] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium">
              <Link href={menuPath} onClick={() => setOpen(false)} className="py-2">{t.nav.menu}</Link>
              <Link href={deliveryPath} onClick={() => setOpen(false)} className="py-2">{t.nav.delivery}</Link>
              <Link href={storyPath} onClick={() => setOpen(false)} className="py-2">{t.nav.story}</Link>
              <Link href={visitPath} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#c0681e]">{t.nav.visit}</Link>
            </nav>
            <Link
              href={menuPath}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#c0681e] px-5 py-2 text-sm font-bold text-white"
            >
              {t.orderCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <span className="text-xs font-bold tracking-[0.3em] text-[#c0681e]">{t.eyebrow}</span>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-[#5b3e2c] break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-[#f5e6d0] ring-1 ring-[#e8d6bc]">
            <div className="text-center text-[#9a7a5c]">
              <div className="text-4xl">📍</div>
              <div className="mt-2 text-sm font-bold">{t.mapLabel}</div>
              <div className="mt-1 text-xs">{t.address}</div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-extrabold">{t.hoursTitle}</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {t.hours.map((h) => (
                  <div key={h.d} className="flex items-center justify-between border-b border-[#e8d6bc] pb-2">
                    <dt className="text-[#5b3e2c]">{h.d}</dt>
                    <dd className="font-bold">{h.h}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-xl font-extrabold">{t.infoTitle}</h2>
              <p className="mt-4 text-sm font-bold">{t.address}</p>
              <p className="mt-1 text-sm text-[#5b3e2c]">{t.phone}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#5b3e2c] break-keep text-pretty">{t.directions}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#3a2418] py-10 text-center text-sm text-[#d4b896]">
        <Link href={home} className="font-bold text-white">{t.brand}</Link>
      </footer>
    </div>
  );
}
