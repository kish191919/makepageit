import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: "Seoul Bakery NYC",
    nav: { menu: "Full Menu", delivery: "Same-Day", story: "Story", visit: "Visit" },
    orderCta: "Order Now",
    hero: {
      tag: "🚚 Order today, on your doorstep tomorrow",
      titlePre: "Baked at dawn,",
      titleAccent: "delivered by 8.",
      titlePost: "",
      body: "Order by 2 PM today, your bread arrives tomorrow morning by 8 — because bread is best before it cools.",
      ctaPrimary: "See Today's Bakes →",
      ctaSecondary: "Delivery Areas",
    },
    benefits: [
      { icon: "🌾", title: "100% organic flour", desc: "Direct from certified family farms" },
      { icon: "🌙", title: "Baked at 4 AM daily", desc: "Out of the oven, into your bag" },
      { icon: "🚚", title: "Next-day NYC delivery", desc: "All five boroughs, by 8 AM" },
    ],
    todays: {
      eyebrow: "TODAY'S BREAD",
      title: "Today's bakes",
      viewAll: "See all →",
      badge: "BAKED TODAY",
      addToCart: "Add",
    },
    breads: [
      { name: "Butter Croissant", desc: "24 layers of Isigny butter", price: "$4.50", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80&auto=format&fit=crop" },
      { name: "Sourdough Country", desc: "5-day starter · 30% rye", price: "$11.00", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&auto=format&fit=crop" },
      { name: "Pain au Chocolat", desc: "Two squares of Valrhona dark", price: "$5.00", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&q=80&auto=format&fit=crop" },
      { name: "Cheese Pullman", desc: "Gouda + mozzarella, generous", price: "$13.50", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&auto=format&fit=crop" },
      { name: "Whole-wheat Bagel", desc: "Organic whole wheat · no sugar", price: "$3.50", image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=900&q=80&auto=format&fit=crop" },
      { name: "Pumpkin Pullman", desc: "35% locally grown kabocha", price: "$9.50", image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=900&q=80&auto=format&fit=crop" },
    ],
    story: {
      eyebrow: "OUR STORY",
      title: ["A small bakery,", "twenty years on."],
      body: "We opened a tiny shop in Astoria back in 2005. Twenty years later, every morning still starts at 4 AM, in one set of hands. Same flour, same proofing time, same oven. The unchanged things are what brought us here.",
      cta: "Behind the counter →",
    },
    bottomCta: {
      titlePre: "Warm bread,",
      titleAccent: "tomorrow morning.",
      body: "Free delivery across NYC on orders over $40.",
      button: "Order Now →",
    },
    footer: { brand: "Seoul Bakery NYC", address: "31-12 30th Ave, Astoria NY 11102 · (718) 555-0188", legal: "© 2025 Seoul Bakery NYC. All rights reserved." },
  },
  ko: {
    brand: "서울 베이커리",
    nav: { menu: "전체 메뉴", delivery: "당일배송", story: "스토리", visit: "매장 안내" },
    orderCta: "주문하기",
    hero: {
      tag: "🚚 오늘 새벽 배송 가능",
      titlePre: "새벽에 굽고,",
      titleAccent: "아침에 도착",
      titlePost: "합니다.",
      body: "오후 2시 주문까지 다음 날 아침 7시 도착. 빵은 식기 전이 가장 맛있으니까요.",
      ctaPrimary: "오늘의 빵 보기 →",
      ctaSecondary: "배송 가능 지역",
    },
    benefits: [
      { icon: "🌾", title: "국산 통밀 100%", desc: "유기농 인증 농가 직거래" },
      { icon: "🌙", title: "새벽 4시 굽기", desc: "매일 오븐에서 갓 나온 빵" },
      { icon: "🚚", title: "당일 새벽 배송", desc: "서울 전 지역 7시 도착" },
    ],
    todays: {
      eyebrow: "TODAY'S BREAD",
      title: "오늘 구운 빵",
      viewAll: "전체 보기 →",
      badge: "오늘 구움",
      addToCart: "담기",
    },
    breads: [
      { name: "버터 크루아상", desc: "프랑스 이즈니 버터 24겹", price: "4,200원", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80&auto=format&fit=crop" },
      { name: "발효종 캄파뉴", desc: "5일 천연발효종 · 호밀 30%", price: "9,800원", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&auto=format&fit=crop" },
      { name: "초콜릿 뺑오쇼콜라", desc: "발로나 다크 초콜릿 2조각", price: "4,800원", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&q=80&auto=format&fit=crop" },
      { name: "치즈 식빵", desc: "고다 + 모짜렐라 치즈 듬뿍", price: "12,500원", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&auto=format&fit=crop" },
      { name: "통밀 베이글", desc: "유기농 통밀 · 무설탕", price: "3,500원", image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=900&q=80&auto=format&fit=crop" },
      { name: "단호박 식빵", desc: "국산 단호박 35% 함유", price: "8,500원", image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=900&q=80&auto=format&fit=crop" },
    ],
    story: {
      eyebrow: "OUR STORY",
      title: ["한 사람의 빵집,", "20년이 지났습니다."],
      body: "2005년 종로의 작은 빵집에서 시작한 서울 베이커리는, 매일 새벽 4시 한 사람의 손에서 시작됩니다. 빵의 재료, 발효 시간, 굽는 온도. 변하지 않은 것이 우리를 여기까지 데려왔습니다.",
      cta: "제작 과정 보기 →",
    },
    bottomCta: {
      titlePre: "오늘 새벽, 따뜻한 빵을",
      titleAccent: "받아보세요.",
      body: "서울 전 지역 무료배송 · 5만원 이상 주문 시",
      button: "지금 주문하기 →",
    },
    footer: { brand: "서울 베이커리", address: "서울 종로구 ○○로 ○○ · 02-000-0000", legal: "© 2025 Seoul Bakery. 사업자등록번호 000-00-00000" },
  },
} as const;

export default function SeoulBakery({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="bg-[#fffaf2] text-[#3a2418]">
      <header className="border-b border-[#e8d6bc] bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥐</span>
            <span className="text-lg font-bold">{t.brand}</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a>{t.nav.menu}</a>
            <a>{t.nav.delivery}</a>
            <a>{t.nav.story}</a>
            <a>{t.nav.visit}</a>
          </nav>
          <div className="flex items-center gap-3">
            <a className="rounded-full bg-[#c0681e] px-5 py-2 text-sm font-bold text-white">
              {t.orderCta}
            </a>
            <span className="rounded-full bg-[#3a2418] px-3 py-1.5 text-xs font-bold text-white">
              🛒 2
            </span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-block rounded-full bg-[#c0681e]/10 px-4 py-1.5 text-xs font-bold text-[#c0681e]">
              {t.hero.tag}
            </span>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.1] md:text-6xl">
              {t.hero.titlePre}<br />
              <span className="text-[#c0681e]">{t.hero.titleAccent}</span>{t.hero.titlePost}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#5b3e2c]">
              {t.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a className="rounded-full bg-[#3a2418] px-7 py-3.5 text-sm font-bold text-white">
                {t.hero.ctaPrimary}
              </a>
              <a className="rounded-full border-2 border-[#3a2418] px-7 py-3.5 text-sm font-bold">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[40%_60%_55%_45%/55%_45%_55%_45%]">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop"
              alt="Seoul Bakery"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#3a2418] py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-3">
          {t.benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="text-4xl">{b.icon}</div>
              <h3 className="mt-3 font-bold">{b.title}</h3>
              <p className="mt-1 text-sm text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] text-[#c0681e]">{t.todays.eyebrow}</span>
            <h2 className="mt-2 text-4xl font-extrabold">{t.todays.title}</h2>
          </div>
          <div className="hidden text-sm font-semibold text-[#c0681e] md:block">{t.todays.viewAll}</div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.breads.map((b) => (
            <article key={b.name} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#e8d6bc] transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f5e6d0]">
                <Image src={b.image} alt={b.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-[#c0681e] px-2.5 py-1 text-[10px] font-bold text-white">
                  {t.todays.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{b.name}</h3>
                <p className="mt-1 text-sm text-[#7a5a44]">{b.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-[#c0681e]">{b.price}</span>
                  <button className="rounded-full bg-[#3a2418] px-4 py-1.5 text-xs font-bold text-white">
                    {t.todays.addToCart}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fff3df] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&q=80&auto=format&fit=crop"
              alt="Story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-bold tracking-[0.3em] text-[#c0681e]">{t.story.eyebrow}</span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight">
              {t.story.title[0]}<br />{t.story.title[1]}
            </h2>
            <p className="mt-6 leading-relaxed text-[#5b3e2c]">
              {t.story.body}
            </p>
            <a className="mt-8 inline-block font-bold text-[#c0681e] underline">{t.story.cta}</a>
          </div>
        </div>
      </section>

      <section className="bg-[#c0681e] py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
            {t.bottomCta.titlePre}<br />{t.bottomCta.titleAccent}
          </h2>
          <p className="mt-4 text-white/90">{t.bottomCta.body}</p>
          <a className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-base font-extrabold text-[#c0681e]">
            {t.bottomCta.button}
          </a>
        </div>
      </section>

      <footer className="bg-[#3a2418] py-10 text-sm text-[#d4b896]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-bold text-white">{t.footer.brand}</div>
            <p className="mt-1 text-xs">{t.footer.address}</p>
          </div>
          <p className="text-xs">{t.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
