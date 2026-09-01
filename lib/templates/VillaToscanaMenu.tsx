"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: ["STORY", "MENU", "WINE", "PRESS"],
    reserveCta: "RESERVE",
    eyebrow: "— DEGUSTAZIONE",
    title: "The complete tasting menu",
    intro:
      "Seven courses, served over roughly two and a half hours. Every dish is available on its own request during service, but we recommend the full menu — it's how it's meant to be read.",
    footer1: "Tasting Menu — $198 / per person · Wine pairing + $120",
    winePathLabel: "See the full wine list →",
    courses: [
      {
        name: "Antipasti",
        items: [
          { name: "Burrata di Andria · Tomato confit", price: "$26" },
          { name: "Vitello Tonnato · veal tenderloin", price: "$28" },
          { name: "Carpaccio di Manzo · aged parmesan, arugula", price: "$24" },
        ],
      },
      {
        name: "Primi Piatti",
        items: [
          { name: "Tagliolini al Tartufo Bianco", price: "$42" },
          { name: "Risotto Milanese · 24-month saffron", price: "$34" },
          { name: "Tortellini in Brodo · Parmigiano broth", price: "$32" },
        ],
      },
      {
        name: "Secondi",
        items: [
          { name: "Bistecca Fiorentina T-Bone", price: "$68" },
          { name: "Branzino al Forno · whole roast", price: "$44" },
          { name: "Osso Buco alla Milanese", price: "$46" },
        ],
      },
      {
        name: "Dolci",
        items: [
          { name: "Tiramisu della Casa", price: "$16" },
          { name: "Panna Cotta al Caffè", price: "$14" },
        ],
      },
    ],
    footer: { address: "22 East 14th St, New York NY 10003 · (212) 555-1011", copyright: "© 2025 — Cucina Toscana, NYC" },
  },
  ko: {
    nav: ["STORY", "MENU", "WINE", "PRESS"],
    reserveCta: "RESERVE",
    eyebrow: "— DEGUSTAZIONE",
    title: "전체 테이스팅 메뉴",
    intro:
      "일곱 코스, 약 두 시간 반에 걸쳐 서빙됩니다. 서비스 중 각 요리를 개별 주문하실 수도 있지만, 전체 메뉴로 즐기시길 권해드립니다 — 그렇게 설계되었습니다.",
    footer1: "Tasting Menu — ₩ 198,000 / per person · 와인 페어링 + ₩ 120,000",
    winePathLabel: "전체 와인 리스트 보기 →",
    courses: [
      {
        name: "Antipasti",
        items: [
          { name: "Burrata di Andria · 토마토 콘피", price: "₩ 34,000" },
          { name: "Vitello Tonnato · 송아지 안심", price: "₩ 36,000" },
          { name: "Carpaccio di Manzo · 숙성 파르메산, 루꼴라", price: "₩ 32,000" },
        ],
      },
      {
        name: "Primi Piatti",
        items: [
          { name: "Tagliolini al Tartufo Bianco", price: "₩ 55,000" },
          { name: "Risotto Milanese · 사프란 24개월", price: "₩ 44,000" },
          { name: "Tortellini in Brodo · 파르미지아노 브로스", price: "₩ 42,000" },
        ],
      },
      {
        name: "Secondi",
        items: [
          { name: "Bistecca Fiorentina T-Bone", price: "₩ 89,000" },
          { name: "Branzino al Forno · 통오븐구이", price: "₩ 58,000" },
          { name: "Osso Buco alla Milanese", price: "₩ 60,000" },
        ],
      },
      {
        name: "Dolci",
        items: [
          { name: "Tiramisu della Casa", price: "₩ 21,000" },
          { name: "Panna Cotta al Caffè", price: "₩ 18,000" },
        ],
      },
    ],
    footer: { address: "서울 종로구 북촌로 14길 22 · 02 555 1011", copyright: "© 2025 — Cucina Toscana, Seoul" },
  },
} as const;

export default function VillaToscanaMenu({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/villa-toscana");
  const storyPath = localePath(lang, "/portfolio/villa-toscana/story");
  const menuPath = localePath(lang, "/portfolio/villa-toscana/menu");
  const winePath = localePath(lang, "/portfolio/villa-toscana/wine");
  const pressPath = localePath(lang, "/portfolio/villa-toscana/press");
  const navHrefs = [storyPath, menuPath, winePath, pressPath];

  return (
    <div className="min-h-screen bg-[#f4ede1] text-[#2b1d12]">
      <header ref={ref} className="border-b border-[#d8c8a9]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href={home} className="font-serif text-2xl italic tracking-wide">
            Villa Toscana
          </Link>
          <nav className="hidden gap-8 text-[11px] font-medium tracking-[0.3em] text-[#7a6248] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 1 ? "text-[#7d2c1a]" : "transition hover:text-[#7d2c1a]"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={`${home}#reservation`}
              className="border border-[#7d2c1a] bg-[#7d2c1a] px-5 py-2 text-[11px] tracking-[0.3em] text-[#f4ede1]"
            >
              {t.reserveCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b1d12]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#d8c8a9] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-[11px] font-medium tracking-[0.3em] text-[#7a6248]">
              {t.nav.map((n, i) => (
                <Link
                  key={n}
                  href={navHrefs[i]}
                  onClick={() => setOpen(false)}
                  className={i === 1 ? "py-2 text-[#7d2c1a]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <Link
              href={`${home}#reservation`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block border border-[#7d2c1a] bg-[#7d2c1a] px-5 py-2 text-[11px] tracking-[0.3em] text-[#f4ede1]"
            >
              {t.reserveCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-[11px] tracking-[0.4em] text-[#7d2c1a]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl italic leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5b4a36] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-14 border-t border-[#d8c8a9] pt-16 md:grid-cols-2">
          {t.courses.map((c) => (
            <article key={c.name}>
              <h2 className="border-b border-[#7d2c1a] pb-3 font-serif text-2xl italic text-[#7d2c1a] break-keep text-balance">
                {c.name}
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#3d3022]">
                {c.items.map((it) => (
                  <li key={it.name} className="flex items-baseline justify-between gap-4">
                    <span className="break-keep text-pretty">{it.name}</span>
                    <span className="shrink-0 tracking-widest text-[#7a6248]">{it.price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-14 text-center font-serif text-base italic text-[#7a6248] break-keep text-pretty">
          {t.footer1}
        </p>
        <p className="mt-4 text-center">
          <Link href={winePath} className="text-[11px] tracking-[0.3em] text-[#7d2c1a] hover:underline">
            {t.winePathLabel}
          </Link>
        </p>
      </section>

      <footer className="border-t border-[#d8c8a9] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-[11px] tracking-[0.3em] text-[#7a6248] md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-base italic text-[#2b1d12]">Villa Toscana</div>
          <div className="break-keep text-pretty">{t.footer.address}</div>
          <div className="break-keep text-pretty">{t.footer.copyright}</div>
        </div>
      </footer>
    </div>
  );
}
