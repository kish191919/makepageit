import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: "Sunrise Bakery Co.",
    nav: { menu: "Full Menu", delivery: "Same-Day", story: "Story", visit: "Visit" },
    orderCta: "Order Now",
    eyebrow: "OUR STORY",
    title: ["A small bakery,", "twenty years on."],
    intro: "We opened a tiny shop in Astoria back in 2005. Twenty years later, every morning still starts at 4 AM, in one set of hands. Same flour, same proofing time, same oven. The unchanged things are what brought us here.",
    quote: "“I never wanted to franchise. I wanted to know every regular by name, and every loaf by feel.”",
    quoteBy: "— Founder, Sunrise Bakery Co.",
    valuesTitle: "What hasn't changed",
    values: [
      { icon: "🌾", title: "100% organic flour", desc: "Sourced directly from the same three certified family farms since day one." },
      { icon: "✋", title: "Shaped by hand, daily", desc: "No machines touch the dough. Every loaf is scored and shaped the same way it was in 2005." },
      { icon: "🔥", title: "One oven, one recipe", desc: "We've never changed ovens or shortcuts. Consistency is the whole point." },
    ],
    timelineTitle: "Twenty years, in brief",
    timeline: [
      { y: "2005", t: "Opened a 200-square-foot shop in Astoria with one oven and one recipe." },
      { y: "2010", t: "Started the sourdough starter we still bake with today." },
      { y: "2015", t: "Moved into our current storefront on 30th Ave." },
      { y: "2020", t: "Launched next-day delivery to keep serving regulars who'd moved further out." },
      { y: "2025", t: "Marked 20 years — same oven, same hands, same 4 AM start." },
    ],
  },
  ko: {
    brand: "서울 베이커리",
    nav: { menu: "전체 메뉴", delivery: "당일배송", story: "스토리", visit: "매장 안내" },
    orderCta: "주문하기",
    eyebrow: "OUR STORY",
    title: ["한 사람의 빵집,", "20년이 지났습니다."],
    intro: "2005년 종로의 작은 빵집에서 시작한 서울 베이커리는, 매일 새벽 4시 한 사람의 손에서 시작됩니다. 빵의 재료, 발효 시간, 굽는 온도. 변하지 않은 것이 우리를 여기까지 데려왔습니다.",
    quote: "“프랜차이즈를 하고 싶지 않았습니다. 단골 손님의 이름과, 빵 반죽의 감촉을 모두 기억하고 싶었어요.”",
    quoteBy: "— 서울 베이커리 대표",
    valuesTitle: "변하지 않은 것들",
    values: [
      { icon: "🌾", title: "국산 통밀 100%", desc: "처음부터 함께해온 세 곳의 유기농 인증 농가에서 직접 받아옵니다." },
      { icon: "✋", title: "매일 손으로 성형", desc: "반죽에 기계가 닿지 않습니다. 2005년과 같은 방식으로 하나하나 손으로 빚습니다." },
      { icon: "🔥", title: "같은 오븐, 같은 레시피", desc: "오븐도, 지름길도 바꾼 적이 없습니다. 한결같은 맛이 전부입니다." },
    ],
    timelineTitle: "20년, 간략히",
    timeline: [
      { y: "2005", t: "오븐 하나, 레시피 하나로 종로에 6.6㎡ 작은 빵집을 열었습니다." },
      { y: "2010", t: "지금까지 사용하는 천연발효종을 처음 배양했습니다." },
      { y: "2015", t: "현재 매장으로 확장 이전했습니다." },
      { y: "2020", t: "멀리 이사한 단골 손님들을 위해 당일 새벽 배송을 시작했습니다." },
      { y: "2025", t: "20주년을 맞았습니다 — 같은 오븐, 같은 손, 같은 새벽 4시." },
    ],
  },
} as const;

export default function SeoulBakeryStory({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/seoul-bakery");
  const menuPath = localePath(lang, "/portfolio/seoul-bakery/menu");
  const deliveryPath = localePath(lang, "/portfolio/seoul-bakery/delivery");
  const storyPath = localePath(lang, "/portfolio/seoul-bakery/story");
  const visitPath = localePath(lang, "/portfolio/seoul-bakery/visit");

  return (
    <div className="bg-[#fffaf2] text-[#3a2418]">
      <header className="border-b border-[#e8d6bc] bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2">
            <span className="text-2xl">🥐</span>
            <span className="text-lg font-bold">{t.brand}</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link href={menuPath} className="transition hover:text-[#c0681e]">{t.nav.menu}</Link>
            <Link href={deliveryPath} className="transition hover:text-[#c0681e]">{t.nav.delivery}</Link>
            <Link href={storyPath} className="font-semibold text-[#c0681e]">{t.nav.story}</Link>
            <Link href={visitPath} className="transition hover:text-[#c0681e]">{t.nav.visit}</Link>
          </nav>
          <Link href={menuPath} className="rounded-full bg-[#c0681e] px-5 py-2 text-sm font-bold text-white">
            {t.orderCta}
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] text-[#c0681e]">{t.eyebrow}</span>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl break-keep text-balance">
              {t.title[0]}<br className="hidden md:block" />{t.title[1]}
            </h1>
            <p className="mt-6 leading-relaxed text-[#5b3e2c] break-keep text-pretty">{t.intro}</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1200&q=80&auto=format&fit=crop"
              alt={t.brand}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#3a2418] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xl font-medium leading-relaxed break-keep text-pretty md:text-2xl">{t.quote}</p>
          <p className="mt-4 text-sm text-[#d4b896]">{t.quoteBy}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-extrabold">{t.valuesTitle}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {t.values.map((v) => (
            <div key={v.title} className="rounded-3xl bg-[#fff3df] p-6">
              <div className="text-3xl">{v.icon}</div>
              <h3 className="mt-3 font-bold break-keep text-balance">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b3e2c] break-keep text-pretty">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="text-2xl font-extrabold">{t.timelineTitle}</h2>
        <div className="mt-8 space-y-6 border-l-2 border-[#e8d6bc] pl-6">
          {t.timeline.map((m) => (
            <div key={m.y} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#c0681e]" />
              <span className="text-sm font-extrabold text-[#c0681e]">{m.y}</span>
              <p className="mt-1 text-sm leading-relaxed text-[#5b3e2c] break-keep text-pretty">{m.t}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#3a2418] py-10 text-center text-sm text-[#d4b896]">
        <Link href={home} className="font-bold text-white">{t.brand}</Link>
      </footer>
    </div>
  );
}
