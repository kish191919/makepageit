import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: "Sunrise Bakery Co.",
    nav: { menu: "Full Menu", delivery: "Same-Day", story: "Story", visit: "Visit" },
    orderCta: "Order Now",
    eyebrow: "SAME-DAY DELIVERY",
    title: "Order by 2, baked at dawn, on your doorstep by 8.",
    intro: "We built our whole schedule around one idea: bread tastes best within hours of coming out of the oven. Here's exactly how that works.",
    steps: [
      { n: "01", title: "Order by 2 PM", body: "Place your order online any time before 2 PM for next-morning delivery." },
      { n: "02", title: "Baked at 4 AM", body: "Your bread goes into the oven at 4 AM, using the same starter and process we've used for 20 years." },
      { n: "03", title: "Delivered by 8 AM", body: "Out of the oven and onto a delivery route — every order arrives by 8 AM, still fragrant." },
    ],
    zonesTitle: "Delivery zones",
    zones: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island", "Select ZIP codes in Nassau & Westchester"],
    pricingTitle: "Delivery pricing",
    pricing: [
      { label: "Orders over $40", value: "Free delivery" },
      { label: "Orders under $40", value: "$5.99 flat delivery fee" },
      { label: "Delivery window", value: "6:00 AM – 8:00 AM, next day" },
    ],
    faqTitle: "Delivery FAQ",
    faq: [
      { q: "When exactly will my order arrive?", a: "All next-day orders arrive between 6 and 8 AM. You'll get a text when your driver is 15 minutes out." },
      { q: "Can I pick a delivery window?", a: "Not yet — every order ships in the same early-morning batch so your bread is always fresh, not sitting in a warehouse overnight." },
      { q: "What if I'm not home?", a: "We'll leave your order at the door in an insulated bag. Let us know delivery notes at checkout." },
    ],
  },
  ko: {
    brand: "서울 베이커리",
    nav: { menu: "전체 메뉴", delivery: "당일배송", story: "스토리", visit: "매장 안내" },
    orderCta: "주문하기",
    eyebrow: "당일 새벽 배송",
    title: "오후 2시 주문, 새벽 4시 굽기, 아침 7시 도착.",
    intro: "빵은 오븐에서 나온 직후 몇 시간이 가장 맛있다는 생각으로 배송 일정을 설계했습니다. 정확한 과정을 안내드립니다.",
    steps: [
      { n: "01", title: "오후 2시까지 주문", body: "오후 2시 이전에 온라인으로 주문하시면 다음 날 아침 배송됩니다." },
      { n: "02", title: "새벽 4시 굽기", body: "20년째 이어온 동일한 발효종과 공정으로, 새벽 4시에 오븐에 들어갑니다." },
      { n: "03", title: "아침 7시 도착", body: "오븐에서 나오자마자 배송 경로에 실려, 모든 주문이 아침 7시까지 도착합니다." },
    ],
    zonesTitle: "배송 가능 지역",
    zones: ["서울 전 지역", "성남시", "과천시", "하남시", "그 외 지역은 상담 후 안내"],
    pricingTitle: "배송비 안내",
    pricing: [
      { label: "5만원 이상 주문", value: "무료배송" },
      { label: "5만원 미만 주문", value: "배송비 4,500원" },
      { label: "배송 시간대", value: "다음 날 06:00 – 08:00" },
    ],
    faqTitle: "배송 자주 묻는 질문",
    faq: [
      { q: "정확히 언제 도착하나요?", a: "다음 날 아침 6시에서 8시 사이 도착합니다. 배송 기사님이 15분 전 도착 시 문자로 안내드립니다." },
      { q: "배송 시간을 지정할 수 있나요?", a: "아직은 어렵습니다. 모든 주문을 새벽 한 배치로 배송해, 빵이 창고에 밤새 머무르지 않고 항상 신선하게 도착하도록 하고 있어요." },
      { q: "부재중이면 어떻게 되나요?", a: "보온 배송 가방에 담아 문 앞에 놓아드립니다. 주문 시 배송 메모에 남겨주세요." },
    ],
  },
} as const;

export default function SeoulBakeryDelivery({ lang }: { lang: Lang }) {
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
            <Link href={deliveryPath} className="font-semibold text-[#c0681e]">{t.nav.delivery}</Link>
            <Link href={storyPath} className="transition hover:text-[#c0681e]">{t.nav.story}</Link>
            <Link href={visitPath} className="transition hover:text-[#c0681e]">{t.nav.visit}</Link>
          </nav>
          <Link href={menuPath} className="rounded-full bg-[#c0681e] px-5 py-2 text-sm font-bold text-white">
            {t.orderCta}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <span className="text-xs font-bold tracking-[0.3em] text-[#c0681e]">{t.eyebrow}</span>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-[#5b3e2c] break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {t.steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#e8d6bc]">
              <span className="text-2xl font-extrabold text-[#c0681e]">{s.n}</span>
              <h3 className="mt-3 font-bold break-keep text-balance">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b3e2c] break-keep text-pretty">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold">{t.zonesTitle}</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#5b3e2c]">
              {t.zones.map((z) => (
                <li key={z} className="flex items-center gap-2">
                  <span className="text-[#c0681e]">•</span>
                  {z}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-extrabold">{t.pricingTitle}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {t.pricing.map((p) => (
                <div key={p.label} className="flex items-center justify-between border-b border-[#e8d6bc] pb-2">
                  <dt className="text-[#5b3e2c]">{p.label}</dt>
                  <dd className="font-bold">{p.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-extrabold">{t.faqTitle}</h2>
          <div className="mt-6 space-y-6">
            {t.faq.map((f) => (
              <div key={f.q} className="rounded-2xl bg-[#fff3df] p-6">
                <h3 className="font-bold break-keep text-balance">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3e2c] break-keep text-pretty">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#3a2418] py-10 text-center text-sm text-[#d4b896]">
        <Link href={home} className="font-bold text-white">{t.brand}</Link>
      </footer>
    </div>
  );
}
