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
    eyebrow: "— OUR STORY",
    title: "Fourteen years of not rushing",
    intro:
      "Villa Toscana opened in 2011 with one rule that hasn't changed since: nothing leaves the kitchen before it's ready, and no course arrives before the last one is finished.",
    profile: {
      label: "Chef & Owner",
      name: "Chef Marco Bellini",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80&auto=format&fit=crop",
      bio: "Marco trained in Florence and Bologna before moving to New York, where he spent nine years cooking in other people's kitchens before opening his own. He still rolls the first tagliolini of every service himself.",
    },
    timeline: [
      { year: "2011", label: "Villa Toscana opens on East 14th Street with 14 seats and a single tasting menu." },
      { year: "2015", label: "The wine cellar grows past 200 labels, sourced directly from small Tuscan producers." },
      { year: "2019", label: "Awarded three stars in the Michelin Guide, unchanged in every edition since." },
      { year: "2025", label: "Still 14 seats a night. Still one tasting menu. Still no rush." },
    ],
    closing: {
      eyebrow: "— PHILOSOPHY",
      titleA: "Slowness,",
      titleB: "the deepest seasoning.",
      body: "At Villa Toscana, dinner runs about two and a half hours. We start the next course only when you have finished this one. Every pasta is rolled by hand after you order. Every wine is decanted just before pouring. To us, dinner is not a service — it is an essay.",
    },
    footer: { address: "22 East 14th St, New York NY 10003 · (212) 555-1011", copyright: "© 2025 — Cucina Toscana, NYC" },
  },
  ko: {
    nav: ["STORY", "MENU", "WINE", "PRESS"],
    reserveCta: "RESERVE",
    eyebrow: "— OUR STORY",
    title: "서두르지 않은 14년",
    intro:
      "빌라 토스카나는 2011년, 지금까지 변하지 않은 단 하나의 원칙으로 문을 열었습니다. 준비되지 않은 요리는 주방을 떠나지 않고, 앞 코스가 끝나기 전에는 다음 코스가 나오지 않습니다.",
    profile: {
      label: "셰프 & 오너",
      name: "마르코 벨리니 셰프",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80&auto=format&fit=crop",
      bio: "마르코는 피렌체와 볼로냐에서 요리를 배운 뒤 뉴욕으로 건너와 9년간 다른 주방에서 일했습니다. 그 후에야 자신의 레스토랑을 열었고, 지금도 매 서비스의 첫 탈리올리니는 직접 밉니다.",
    },
    timeline: [
      { year: "2011", label: "이스트 14번가에서 14석, 단 하나의 테이스팅 메뉴로 빌라 토스카나가 문을 엽니다." },
      { year: "2015", label: "토스카나의 소규모 생산자에게서 직접 들여온 와인이 200종을 넘습니다." },
      { year: "2019", label: "미쉐린 가이드 별 세 개를 받았고, 이후 모든 에디션에서 유지되고 있습니다." },
      { year: "2025", label: "여전히 하루 14석, 여전히 하나의 테이스팅 메뉴, 여전히 서두르지 않습니다." },
    ],
    closing: {
      eyebrow: "— PHILOSOPHY",
      titleA: "‘느림’이라는,",
      titleB: "가장 진한 양념.",
      body: "빌라 토스카나는 평균 식사 시간이 두 시간 반입니다. 우리는 손님이 한 코스를 끝낼 때마다 다음 코스를 준비합니다. 모든 파스타는 주문 후 손으로 밀고, 모든 와인은 마시기 직전에 디켄팅됩니다. 우리에게 식사는 ‘서비스’가 아니라 한 편의 글입니다.",
    },
    footer: { address: "서울 종로구 북촌로 14길 22 · 02 555 1011", copyright: "© 2025 — Cucina Toscana, Seoul" },
  },
} as const;

export default function VillaToscanaStory({ lang }: { lang: Lang }) {
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
                className={i === 0 ? "text-[#7d2c1a]" : "transition hover:text-[#7d2c1a]"}
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
                  className={i === 0 ? "py-2 text-[#7d2c1a]" : "py-2"}
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

        <div className="mt-16 grid gap-10 border-t border-[#d8c8a9] pt-16 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={t.profile.image} alt={t.profile.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-[11px] tracking-widest text-[#7a6248]">{t.profile.label.toUpperCase()}</p>
            <h2 className="mt-2 font-serif text-2xl italic break-keep text-balance">{t.profile.name}</h2>
            <p className="mt-4 leading-relaxed text-[#5b4a36] break-keep text-pretty">{t.profile.bio}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-[#d8c8a9] pt-16">
          <ul className="space-y-8">
            {t.timeline.map((item) => (
              <li key={item.year} className="grid gap-2 md:grid-cols-[120px_1fr] md:gap-8">
                <span className="font-serif text-2xl italic text-[#7d2c1a]">{item.year}</span>
                <span className="leading-relaxed text-[#3d3022] break-keep text-pretty">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-[#d8c8a9] pt-16">
          <p className="text-[11px] tracking-[0.4em] text-[#7d2c1a]">{t.closing.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl break-keep text-balance">
            <span className="italic">{t.closing.titleA}</span>
            <br className="hidden md:block" />
            {t.closing.titleB}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#5b4a36] break-keep text-pretty">
            {t.closing.body}
          </p>
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
