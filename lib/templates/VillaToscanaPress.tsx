"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: ["STORY", "MENU", "WINE", "PRESS"],
    reserveCta: "RESERVE",
    eyebrow: "— PRESS",
    title: "In the press",
    intro: "A selection of what critics and guides have written about Villa Toscana since 2011.",
    mentions: [
      {
        outlet: "The New York Times",
        date: "2024",
        quote:
          "A dining room that refuses to be rushed — and, fourteen years in, still one of the few tables in the city willing to make you wait for the good part.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
      },
      {
        outlet: "Michelin Guide",
        date: "2023",
        quote:
          "Three stars, unchanged since our first visit. The tagliolini al tartufo alone justifies the two-and-a-half-hour seating.",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&q=80&auto=format&fit=crop",
      },
      {
        outlet: "Eater NY",
        date: "2022",
        quote:
          "Fourteen seats a night sounds like a gimmick until you're sitting in one of them, watching pasta get rolled to order.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: { address: "22 East 14th St, New York NY 10003 · (212) 555-1011", copyright: "© 2025 — Cucina Toscana, NYC" },
  },
  ko: {
    nav: ["STORY", "MENU", "WINE", "PRESS"],
    reserveCta: "RESERVE",
    eyebrow: "— PRESS",
    title: "언론 속 빌라 토스카나",
    intro: "2011년 개업 이후 평론가와 가이드북이 빌라 토스카나에 대해 남긴 기록들입니다.",
    mentions: [
      {
        outlet: "조선일보",
        date: "2024",
        quote:
          "서두르기를 거부하는 다이닝. 14년이 지난 지금도, 좋은 순간을 위해 손님이 기다리게 만드는 몇 안 되는 테이블이다.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
      },
      {
        outlet: "블루리본 서베이",
        date: "2023",
        quote:
          "첫 방문 이후 변함없는 별 세 개. 화이트 트러플 탈리올리니 하나만으로도 두 시간 반의 좌석을 정당화한다.",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&q=80&auto=format&fit=crop",
      },
      {
        outlet: "매거진 B",
        date: "2022",
        quote:
          "하루 14석이라는 숫자는 마케팅처럼 들리지만, 실제로 그 자리에 앉아 손으로 파스타를 미는 모습을 지켜보면 이야기가 달라진다.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: { address: "서울 종로구 북촌로 14길 22 · 02 555 1011", copyright: "© 2025 — Cucina Toscana, Seoul" },
  },
} as const;

export default function VillaToscanaPress({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/villa-toscana");
  const winePath = localePath(lang, "/portfolio/villa-toscana/wine");
  const pressPath = localePath(lang, "/portfolio/villa-toscana/press");
  const navHrefs = [`${home}#story`, `${home}#menu`, winePath, pressPath];

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
                className={i === 3 ? "text-[#7d2c1a]" : "transition hover:text-[#7d2c1a]"}
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
                  className={i === 3 ? "py-2 text-[#7d2c1a]" : "py-2"}
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

        <div className="mt-16 grid gap-16 border-t border-[#d8c8a9] pt-16">
          {t.mentions.map((m) => (
            <article key={m.outlet + m.date} className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={m.image} alt={m.outlet} fill className="object-cover" />
              </div>
              <div>
                <p className="font-serif text-lg italic text-[#7d2c1a]">
                  {m.outlet} <span className="text-[#7a6248]">— {m.date}</span>
                </p>
                <p className="mt-5 font-serif text-2xl leading-snug break-keep text-pretty">“{m.quote}”</p>
              </div>
            </article>
          ))}
        </div>
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
