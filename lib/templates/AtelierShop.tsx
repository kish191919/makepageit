import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook" },
    utility: { search: "Search", account: "Account", cart: "Cart (2)" },
    hero: {
      season: "Spring · Summer 2026",
      title: ["Soft hands,", "slow fashion."],
      cta: "Shop The Collection →",
    },
    featured: {
      title: "Featured",
      filters: ["All", "Outerwear", "Knit", "Accessories"],
      quickAdd: "Quick Add",
    },
    products: [
      { name: "Linen Wrap Coat", price: "$348", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80&auto=format&fit=crop" },
      { name: "Hand-stitched Tote", price: "$156", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80&auto=format&fit=crop" },
      { name: "Cotton Wide Trouser", price: "$138", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&q=80&auto=format&fit=crop" },
      { name: "Silk Scarf · Bloom", price: "$78", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80&auto=format&fit=crop" },
      { name: "Knit Vest · Ivory", price: "$118", image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=900&q=80&auto=format&fit=crop" },
      { name: "Wool Berét", price: "$62", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=80&auto=format&fit=crop" },
    ],
    story: {
      eyebrow: "Our Story",
      title: ["Twenty two", "careful hands."],
      body: "Each season, 22 makers pattern every piece by hand. We only make clothes that can't be made fast — about 19 hours of careful work go into a single garment before it reaches you.",
      cta: "Read the Journal →",
    },
    lookbook: { eyebrow: "Lookbook", title: "In Bloom" },
    newsletter: {
      eyebrow: "Newsletter",
      title: "Lookbook before launch",
      body: "Subscribers see new drops a full week before they go live.",
      placeholder: "Email address",
      submit: "Subscribe →",
    },
    footer: "© 2025 Atelier 22. Made by hand.",
  },
  ko: {
    nav: { newIn: "New In", outerwear: "Outerwear", accessories: "Accessories", lookbook: "Lookbook" },
    utility: { search: "Search", account: "Account", cart: "Cart (2)" },
    hero: {
      season: "Spring · Summer 2026",
      title: ["Soft hands,", "slow fashion."],
      cta: "Shop The Collection →",
    },
    featured: {
      title: "Featured",
      filters: ["All", "Outerwear", "Knit", "Accessories"],
      quickAdd: "Quick Add",
    },
    products: [
      { name: "Linen Wrap Coat", price: "428,000원", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80&auto=format&fit=crop" },
      { name: "Hand-stitched Tote", price: "192,000원", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80&auto=format&fit=crop" },
      { name: "Cotton Wide Trouser", price: "168,000원", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&q=80&auto=format&fit=crop" },
      { name: "Silk Scarf · Bloom", price: "98,000원", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80&auto=format&fit=crop" },
      { name: "Knit Vest · Ivory", price: "148,000원", image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=900&q=80&auto=format&fit=crop" },
      { name: "Wool Berét", price: "78,000원", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=80&auto=format&fit=crop" },
    ],
    story: {
      eyebrow: "Our Story",
      title: ["Twenty two", "careful hands."],
      body: "매 시즌 22명의 장인이 한 점씩 직접 패턴을 떴습니다. 우리는 빠르게 만들 수 없는 옷만 만듭니다. 한 벌이 손에 닿기까지 평균 19시간이 걸립니다.",
      cta: "Read the Journal →",
    },
    lookbook: { eyebrow: "Lookbook", title: "In Bloom" },
    newsletter: {
      eyebrow: "Newsletter",
      title: "먼저 받아보는 시즌 룩북",
      body: "신상 출시 1주 전, 가입자에게만 우선 안내드립니다.",
      placeholder: "이메일 주소",
      submit: "Subscribe →",
    },
    footer: "© 2025 Atelier 22. Crafted in Seoul.",
  },
} as const;

const lookbookImages = [
  "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1485518882345-15568b007407?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=900&q=80&auto=format&fit=crop",
];

export default function AtelierShop({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="bg-[#fafaf7] text-[#1f1d1a]">
      <header className="border-b border-[#ecead9] bg-[#fafaf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <nav className="hidden gap-6 text-xs font-medium uppercase tracking-[0.2em] md:flex">
            <a>{t.nav.newIn}</a>
            <a>{t.nav.outerwear}</a>
            <a>{t.nav.accessories}</a>
            <a>{t.nav.lookbook}</a>
          </nav>
          <div className="text-xl font-serif tracking-[0.4em]">ATELIER 22</div>
          <div className="flex gap-5 text-xs uppercase tracking-widest">
            <a>{t.utility.search}</a>
            <a>{t.utility.account}</a>
            <a className="font-semibold">{t.utility.cart}</a>
          </div>
        </div>
      </header>

      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&q=80&auto=format&fit=crop"
          alt="Atelier 22 Lookbook"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 text-white">
          <p className="text-xs uppercase tracking-[0.4em]">{t.hero.season}</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[1.05] md:text-7xl">
            {t.hero.title[0]}<br />{t.hero.title[1]}
          </h1>
          <a className="mt-10 inline-flex w-fit border-b-2 border-white pb-1 text-xs uppercase tracking-[0.3em]">
            {t.hero.cta}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-4xl">{t.featured.title}</h2>
          <div className="flex gap-3 text-xs uppercase tracking-widest">
            {t.featured.filters.map((f, i) => (
              <a key={f} className={i === 0 ? "border-b border-[#1f1d1a] pb-0.5" : "text-[#7a7770]"}>
                {f}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.map((p) => (
            <article key={p.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ecead9]">
                <Image src={p.image} alt={p.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest opacity-0 transition group-hover:opacity-100">
                  {t.featured.quickAdd}
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-serif text-lg">{p.name}</h3>
                <p className="text-sm tracking-wide">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1f1d1a] py-24 text-[#fafaf7]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop"
              alt="Story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#bcb8aa]">{t.story.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {t.story.title[0]}<br />{t.story.title[1]}
            </h2>
            <p className="mt-6 leading-relaxed text-[#d3cfc0]">
              {t.story.body}
            </p>
            <a className="mt-10 inline-flex border-b border-[#bcb8aa] pb-0.5 text-xs uppercase tracking-[0.3em]">
              {t.story.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-[#7a7770]">{t.lookbook.eyebrow}</p>
        <h2 className="mt-3 text-center font-serif text-4xl">{t.lookbook.title}</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {lookbookImages.map((src, i) => (
            <div key={i} className={`relative ${i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/5] md:translate-y-8"} overflow-hidden`}>
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#ecead9] bg-[#fafaf7] py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#7a7770]">{t.newsletter.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl">{t.newsletter.title}</h2>
          <p className="mt-3 text-sm text-[#5b5853]">{t.newsletter.body}</p>
          <form className="mt-8 flex border-b-2 border-[#1f1d1a]">
            <input
              placeholder={t.newsletter.placeholder}
              className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-[#7a7770]"
            />
            <button className="text-xs font-semibold uppercase tracking-[0.3em]">{t.newsletter.submit}</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#fafaf7] py-12 text-xs uppercase tracking-widest text-[#7a7770]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="font-serif text-base normal-case tracking-[0.4em] text-[#1f1d1a]">ATELIER 22</div>
          <div>{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
