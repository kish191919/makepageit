"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "Sunrise Bakery Co.",
    nav: { menu: "Full Menu", delivery: "Same-Day", story: "Story", visit: "Visit" },
    orderCta: "Order Now",
    eyebrow: "FULL MENU",
    title: "Everything we bake",
    intro: "Every loaf, pastry, and slice is baked fresh daily starting at 4 AM. Order by 2 PM for next-day delivery.",
    categories: [
      {
        name: "Breads",
        items: [
          { name: "Sourdough Country", desc: "5-day starter · 30% rye", price: "$11.00", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&auto=format&fit=crop" },
          { name: "Cheese Pullman", desc: "Gouda + mozzarella, generous", price: "$13.50", image: "https://images.unsplash.com/photo-1663904460424-91895028aa9e?w=900&q=80&auto=format&fit=crop" },
          { name: "Whole-wheat Bagel", desc: "Organic whole wheat · no sugar", price: "$3.50", image: "https://images.unsplash.com/photo-1687175452217-e4f8e523b5b5?w=900&q=80&auto=format&fit=crop" },
          { name: "Pumpkin Pullman", desc: "35% locally grown kabocha", price: "$9.50", image: "https://images.unsplash.com/photo-1696177723470-5063e94f555f?w=900&q=80&auto=format&fit=crop" },
        ],
      },
      {
        name: "Pastries",
        items: [
          { name: "Butter Croissant", desc: "24 layers of Isigny butter", price: "$4.50", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80&auto=format&fit=crop" },
          { name: "Pain au Chocolat", desc: "Two squares of Valrhona dark", price: "$5.00", image: "https://images.unsplash.com/photo-1597528662465-55ece5734101?w=900&q=80&auto=format&fit=crop" },
          { name: "Almond Croissant", desc: "Twice-baked, almond cream filled", price: "$5.50", image: "https://images.unsplash.com/photo-1710220988376-16dbd51fd1de?w=900&q=80&auto=format&fit=crop" },
        ],
      },
      {
        name: "Cakes & Sides",
        items: [
          { name: "Carrot Walnut Cake", desc: "Slice · cream cheese frosting", price: "$6.50", image: "https://images.unsplash.com/photo-1676300186098-9b5ae9916e3c?w=900&q=80&auto=format&fit=crop" },
          { name: "Morning Butter Bun", desc: "Soft milk bread, salted butter", price: "$3.00", image: "https://images.unsplash.com/photo-1679458219939-4f6347c55460?w=900&q=80&auto=format&fit=crop" },
        ],
      },
    ],
    footer: { brand: "Sunrise Bakery Co.", address: "31-12 30th Ave, Astoria NY 11102 · (718) 555-0188", legal: "© 2025 Sunrise Bakery Co. All rights reserved." },
  },
  ko: {
    brand: "서울 베이커리",
    nav: { menu: "전체 메뉴", delivery: "당일배송", story: "스토리", visit: "매장 안내" },
    orderCta: "주문하기",
    eyebrow: "FULL MENU",
    title: "서울 베이커리의 모든 빵",
    intro: "모든 빵과 디저트는 매일 새벽 4시부터 직접 굽습니다. 오후 2시까지 주문하시면 다음 날 새벽 배송됩니다.",
    categories: [
      {
        name: "빵",
        items: [
          { name: "발효종 캄파뉴", desc: "5일 천연발효종 · 호밀 30%", price: "9,800원", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&auto=format&fit=crop" },
          { name: "치즈 식빵", desc: "고다 + 모짜렐라 치즈 듬뿍", price: "12,500원", image: "https://images.unsplash.com/photo-1663904460424-91895028aa9e?w=900&q=80&auto=format&fit=crop" },
          { name: "통밀 베이글", desc: "유기농 통밀 · 무설탕", price: "3,500원", image: "https://images.unsplash.com/photo-1687175452217-e4f8e523b5b5?w=900&q=80&auto=format&fit=crop" },
          { name: "단호박 식빵", desc: "국산 단호박 35% 함유", price: "8,500원", image: "https://images.unsplash.com/photo-1696177723470-5063e94f555f?w=900&q=80&auto=format&fit=crop" },
        ],
      },
      {
        name: "페이스트리",
        items: [
          { name: "버터 크루아상", desc: "프랑스 이즈니 버터 24겹", price: "4,200원", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80&auto=format&fit=crop" },
          { name: "초콜릿 뺑오쇼콜라", desc: "발로나 다크 초콜릿 2조각", price: "4,800원", image: "https://images.unsplash.com/photo-1597528662465-55ece5734101?w=900&q=80&auto=format&fit=crop" },
          { name: "아몬드 크루아상", desc: "두 번 구운 아몬드 크림 필링", price: "4,800원", image: "https://images.unsplash.com/photo-1710220988376-16dbd51fd1de?w=900&q=80&auto=format&fit=crop" },
        ],
      },
      {
        name: "케이크 & 사이드",
        items: [
          { name: "당근 호두 케이크", desc: "조각 · 크림치즈 프로스팅", price: "6,500원", image: "https://images.unsplash.com/photo-1676300186098-9b5ae9916e3c?w=900&q=80&auto=format&fit=crop" },
          { name: "모닝 버터 번", desc: "부드러운 우유식빵, 가염버터", price: "2,800원", image: "https://images.unsplash.com/photo-1679458219939-4f6347c55460?w=900&q=80&auto=format&fit=crop" },
        ],
      },
    ],
    footer: { brand: "서울 베이커리", address: "서울 종로구 ○○로 ○○ · 02-000-0000", legal: "© 2025 Seoul Bakery. 사업자등록번호 000-00-00000" },
  },
} as const;

export default function SeoulBakeryMenu({ lang }: { lang: Lang }) {
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
            <Link href={menuPath} className="font-semibold text-[#c0681e]">{t.nav.menu}</Link>
            <Link href={deliveryPath} className="transition hover:text-[#c0681e]">{t.nav.delivery}</Link>
            <Link href={storyPath} className="transition hover:text-[#c0681e]">{t.nav.story}</Link>
            <Link href={visitPath} className="transition hover:text-[#c0681e]">{t.nav.visit}</Link>
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
              <Link href={menuPath} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#c0681e]">{t.nav.menu}</Link>
              <Link href={deliveryPath} onClick={() => setOpen(false)} className="py-2">{t.nav.delivery}</Link>
              <Link href={storyPath} onClick={() => setOpen(false)} className="py-2">{t.nav.story}</Link>
              <Link href={visitPath} onClick={() => setOpen(false)} className="py-2">{t.nav.visit}</Link>
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="text-xs font-bold tracking-[0.3em] text-[#c0681e]">{t.eyebrow}</span>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-[#5b3e2c] break-keep text-pretty">{t.intro}</p>

        {t.categories.map((cat) => (
          <div key={cat.name} className="mt-16">
            <h2 className="border-b border-[#e8d6bc] pb-3 text-2xl font-extrabold">{cat.name}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item) => (
                <article key={item.name} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#e8d6bc] transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f5e6d0]">
                    <Image src={item.image} alt={item.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold break-keep text-balance">{item.name}</h3>
                    <p className="mt-1 text-sm text-[#7a5a44] break-keep text-pretty">{item.desc}</p>
                    <div className="mt-4 text-lg font-extrabold text-[#c0681e]">{item.price}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="bg-[#3a2418] py-10 text-sm text-[#d4b896]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-bold text-white">{t.footer.brand}</div>
            <p className="mt-1 text-xs break-keep text-pretty">{t.footer.address}</p>
          </div>
          <p className="text-xs break-keep text-pretty">{t.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
