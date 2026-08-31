"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "WAYFARER",
    nav: ["STAY", "DINE", "SPA", "JOURNAL"],
    eyebrow: "— JOURNAL",
    title: "Field notes from the cliff",
    intro: "Seasonal rituals, staff traditions, and the small details that shape a stay at the Wayfarer.",
    posts: [
      {
        date: "MAR 2025",
        title: "The Butler Rotation No One Notices",
        excerpt:
          "Guests never see the handoff between morning and evening butlers — that's the point. A look at the quiet choreography behind our 1:1 service.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "JAN 2025",
        title: "What the Cellar Sommelier Pours in Winter",
        excerpt:
          "Storm season on the cliffs calls for different bottles than August. Notes from this year's winter list, chosen for fog and firelight.",
        image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "NOV 2024",
        title: "Thirty-Eight Years, One View",
        excerpt:
          "A short history of the property — why the Wayfarer has never added a room, moved a wall, or changed the angle of the pool.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 THE WAYFARER HOTEL & RESORT — BIG SUR, CALIFORNIA",
  },
  ko: {
    brand: "MOAI",
    nav: ["STAY", "DINE", "SPA", "JOURNAL"],
    eyebrow: "— JOURNAL",
    title: "절벽에서 보내는 기록",
    intro: "계절의 의식, 스태프들의 전통, 그리고 모아이에서의 머무름을 완성하는 작은 디테일들.",
    posts: [
      {
        date: "2025.03",
        title: "손님은 모르는 매니저 교대",
        excerpt:
          "아침 담당과 저녁 담당 매니저의 교대는 손님 눈에 띄지 않습니다. 그것이 핵심이죠. 1:1 서비스 뒤에 숨은 조용한 안무를 들여다봅니다.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "2025.01",
        title: "겨울, 셀러 소믈리에가 고르는 와인",
        excerpt:
          "절벽의 폭풍우 시즌은 8월과는 다른 와인을 부릅니다. 안개와 벽난로 불빛에 어울리도록 고른 올해 겨울 리스트를 소개합니다.",
        image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "2024.11",
        title: "38년, 하나의 풍경",
        excerpt:
          "왜 모아이는 객실을 늘리지도, 벽을 옮기지도, 풀의 각도를 바꾸지도 않았는지 — 이 공간의 짧은 역사를 전합니다.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 MOAI HOTEL & RESORT — JEJU, KOREA",
  },
} as const;

export default function MoaiHotelJournal({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/moai-hotel");
  const dinePath = localePath(lang, "/portfolio/moai-hotel/dine");
  const spaPath = localePath(lang, "/portfolio/moai-hotel/spa");
  const journalPath = localePath(lang, "/portfolio/moai-hotel/journal");
  const navHrefs = [`${home}#rooms`, dinePath, spaPath, journalPath];

  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f0e9d6]">
      <header ref={ref} className="border-b border-[#d4af37]/20 bg-[#0d0c0a]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href={home} className="font-serif text-xl tracking-[0.5em] text-[#d4af37]">
            {t.brand}
          </Link>
          <nav className="hidden gap-10 text-[11px] font-medium tracking-[0.3em] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 3 ? "text-[#d4af37]" : "transition hover:text-[#d4af37]"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-[#d4af37]/50 text-[#d4af37] md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
        {open && (
          <div className="border-t border-[#d4af37]/20 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-[11px] font-medium tracking-[0.3em]">
              {t.nav.map((n, i) => (
                <Link
                  key={n}
                  href={navHrefs[i]}
                  onClick={() => setOpen(false)}
                  className={i === 3 ? "py-2 text-[#d4af37]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-[11px] tracking-[0.4em] text-[#d4af37]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#c9bfa6] break-keep text-pretty md:text-base">
          {t.intro}
        </p>

        <div className="mt-16 grid gap-16 border-t border-[#d4af37]/20 pt-16">
          {t.posts.map((post) => (
            <article key={post.title} className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <p className="text-[11px] tracking-widest text-[#d4af37]">{post.date}</p>
                <h2 className="mt-4 font-serif text-2xl leading-snug md:text-3xl break-keep text-balance">
                  {post.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[#c9bfa6] break-keep text-pretty">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d4af37]/20 py-10 text-center text-[10px] tracking-[0.4em] text-[#9b9277] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
