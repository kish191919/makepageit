import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["STORY", "MENU", "WINE", "PRESS"],
    reserveCta: "RESERVE",
    hero: {
      eyebrow: "— TUSCANY IN MANHATTAN · SINCE 2011",
      titleA: "Slow meals,",
      titleB: "long talks,",
      titleC: "darker wine.",
    },
    editorial: {
      eyebrow: "— EDITORIAL N°042",
      titleA: "Slowness,",
      titleB: "the deepest seasoning.",
      body: "At Villa Toscana, dinner runs about two and a half hours. We start the next course only when you have finished this one. Every pasta is rolled by hand after you order. Every wine is decanted just before pouring. To us, dinner is not a service — it is an essay.",
      stats: [
        { v: "14 yrs", l: "SINCE 2011" },
        { v: "★★★", l: "MICHELIN" },
        { v: "320+", l: "WINES" },
      ],
    },
    courses: {
      eyebrow: "— DEGUSTAZIONE",
      title: "7-Course Tasting Menu",
      footer: "Tasting Menu — $198 / per person · Wine pairing + $120",
      list: [
        {
          name: "Antipasti",
          items: ["Burrata di Andria · Tomato confit", "Vitello Tonnato · veal tenderloin"],
        },
        {
          name: "Primi Piatti",
          items: ["Tagliolini al Tartufo Bianco", "Risotto Milanese · 24-month saffron"],
        },
        {
          name: "Secondi",
          items: ["Bistecca Fiorentina T-Bone", "Branzino al Forno · whole roast"],
        },
      ],
    },
    reservation: {
      eyebrow: "— RESERVATION",
      title: "Just 14 seats per night.",
      body: "We seat only 14 guests at a time. Choose your date and hour — a manager will confirm by email within 24 hours.",
      labels: { date: "DATE", time: "TIME", party: "PARTY SIZE" },
      partySizes: ["2 guests", "4 guests", "6 guests"],
      submit: "REQUEST RESERVATION",
    },
    footer: { address: "22 East 14th St, New York NY 10003 · (212) 555-1011", copyright: "© 2025 — Cucina Toscana, NYC" },
  },
  ko: {
    nav: ["STORY", "MENU", "WINE", "PRESS"],
    reserveCta: "RESERVE",
    hero: {
      eyebrow: "— TUSCANY IN SEOUL · SINCE 2011",
      titleA: "느린 식사,",
      titleB: "긴 대화,",
      titleC: "짙은 와인.",
    },
    editorial: {
      eyebrow: "— EDITORIAL N°042",
      titleA: "‘느림’이라는,",
      titleB: "가장 진한 양념.",
      body: "빌라 토스카나는 평균 식사 시간이 두 시간 반입니다. 우리는 손님이 한 코스를 끝낼 때마다 다음 코스를 준비합니다. 모든 파스타는 주문 후 손으로 밀고, 모든 와인은 마시기 직전에 디켄팅됩니다. 우리에게 식사는 ‘서비스’가 아니라 한 편의 글입니다.",
      stats: [
        { v: "14년", l: "SINCE 2011" },
        { v: "★★★", l: "BLUE RIBBON" },
        { v: "320+", l: "WINES" },
      ],
    },
    courses: {
      eyebrow: "— DEGUSTAZIONE",
      title: "7-Course Tasting Menu",
      footer: "Tasting Menu — ₩ 198,000 / per person · 와인 페어링 + ₩ 120,000",
      list: [
        {
          name: "Antipasti",
          items: ["Burrata di Andria · 토마토 콘피", "Vitello Tonnato · 송아지 안심"],
        },
        {
          name: "Primi Piatti",
          items: ["Tagliolini al Tartufo Bianco", "Risotto Milanese · 사프란 24개월"],
        },
        {
          name: "Secondi",
          items: ["Bistecca Fiorentina T-Bone", "Branzino al Forno · 통오븐구이"],
        },
      ],
    },
    reservation: {
      eyebrow: "— RESERVATION",
      title: "테이블은 매일 14석.",
      body: "저희는 동시에 14분의 손님만 모십니다. 원하시는 날짜와 시간을 골라 주세요. 24시간 안에 매니저가 컨시어지 메일로 답변드립니다.",
      labels: { date: "DATE", time: "TIME", party: "PARTY SIZE" },
      partySizes: ["2인", "4인", "6인"],
      submit: "REQUEST RESERVATION",
    },
    footer: { address: "서울 종로구 북촌로 14길 22 · 02 555 1011", copyright: "© 2025 — Cucina Toscana, Seoul" },
  },
} as const;

const slots = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

export default function VillaToscana({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="min-h-screen bg-[#f4ede1] text-[#2b1d12]">
      <header className="border-b border-[#d8c8a9]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="font-serif text-2xl italic tracking-wide">Villa Toscana</div>
          <nav className="hidden gap-8 text-[11px] font-medium tracking-[0.3em] text-[#7a6248] md:flex">
            {t.nav.map((n) => (
              <a key={n}>{n}</a>
            ))}
          </nav>
          <a className="border border-[#7d2c1a] bg-[#7d2c1a] px-5 py-2 text-[11px] tracking-[0.3em] text-[#f4ede1]">
            {t.reserveCta}
          </a>
        </div>
      </header>

      <section className="relative h-[78vh] min-h-[520px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=80&auto=format&fit=crop"
          alt="Villa Toscana"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#f4ede1]" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-16 text-[#f4ede1]">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.5em]">{t.hero.eyebrow}</p>
            <h1 className="mt-6 font-serif text-5xl italic leading-[1.1] md:text-7xl">
              {t.hero.titleA}
              <br />{t.hero.titleB}
              <br />{t.hero.titleC}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-[1fr_2fr]">
          <p className="text-[11px] tracking-[0.4em] text-[#7d2c1a]">{t.editorial.eyebrow}</p>
          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              <span className="italic">{t.editorial.titleA}</span>
              <br />
              {t.editorial.titleB}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-[#5b4a36]">
              {t.editorial.body}
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-[#d8c8a9] py-6 text-center">
              {t.editorial.stats.map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl">{s.v}</div>
                  <div className="mt-1 text-[10px] tracking-widest text-[#7a6248]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8c8a9] bg-[#ebe0c8] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[11px] tracking-[0.4em] text-[#7d2c1a]">{t.courses.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl">{t.courses.title}</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {t.courses.list.map((c) => (
              <article key={c.name}>
                <h3 className="border-b border-[#7d2c1a] pb-3 font-serif text-2xl italic text-[#7d2c1a]">
                  {c.name}
                </h3>
                <ul className="mt-5 space-y-4 text-sm leading-relaxed text-[#3d3022]">
                  {c.items.map((it) => (
                    <li key={it}>· {it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-14 text-center font-serif text-base italic text-[#7a6248]">
            {t.courses.footer}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop"
              alt="Reservation"
              fill
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <p className="text-[11px] tracking-[0.4em] text-[#7d2c1a]">{t.reservation.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              {t.reservation.title}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#5b4a36]">
              {t.reservation.body}
            </p>

            <div className="mt-8 space-y-4 rounded-sm border border-[#d8c8a9] bg-white/60 p-6">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[#7a6248]">{t.reservation.labels.date}</p>
                <input type="date" className="mt-2 w-full border-b border-[#7a6248]/40 bg-transparent py-2 font-serif text-lg" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[#7a6248]">{t.reservation.labels.time}</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="border border-[#7a6248]/40 py-2 text-sm tracking-widest hover:border-[#7d2c1a] hover:text-[#7d2c1a]"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] text-[#7a6248]">{t.reservation.labels.party}</p>
                <select className="mt-2 w-full border-b border-[#7a6248]/40 bg-transparent py-2 font-serif text-lg">
                  {t.reservation.partySizes.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <button className="mt-4 w-full bg-[#7d2c1a] py-3 text-xs tracking-[0.4em] text-[#f4ede1]">
                {t.reservation.submit}
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d8c8a9] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-[11px] tracking-[0.3em] text-[#7a6248] md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-base italic text-[#2b1d12]">Villa Toscana</div>
          <div>{t.footer.address}</div>
          <div>{t.footer.copyright}</div>
        </div>
      </footer>
    </div>
  );
}
