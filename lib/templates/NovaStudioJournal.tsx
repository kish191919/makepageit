"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { work: "Work", services: "Services", studio: "Studio", journal: "Journal" },
    bookCta: "Book",
    eyebrow: "Journal",
    title: "Notes from behind the camera.",
    intro: "Field notes, behind-the-scenes, and the odd piece of gear advice — updated after most shoots.",
    posts: [
      {
        date: "Aug 12, 2025",
        title: "Chasing the last hour of light at a rooftop wedding",
        excerpt: "Golden hour lasted eleven minutes. Here's how we planned the whole reception around it.",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "Jul 2, 2025",
        title: "Why we still shoot family sessions on one lens",
        excerpt: "Fewer choices on set means more attention on the people in front of the camera.",
        img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "May 19, 2025",
        title: "Inside a brand shoot: from moodboard to delivery",
        excerpt: "A full breakdown of a two-day product campaign, start to finish.",
        img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "Mar 4, 2025",
        title: "The one piece of gear we never travel without",
        excerpt: "It isn't a lens. A short note on what actually saves a shoot.",
        img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "Jan 21, 2025",
        title: "Editorial concepting: turning a moodboard into a shot list",
        excerpt: "How a single reference image became a six-look magazine story.",
        img: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "Nov 8, 2024",
        title: "What six years in one studio has taught us about light",
        excerpt: "The same window, every season — notes on watching light change over years, not days.",
        img: "https://images.unsplash.com/photo-1554080353-321e452ccf19?w=900&q=80&auto=format&fit=crop",
      },
    ],
    footer: { copyright: "© 2025 Nova Studio · Brooklyn", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
  ko: {
    nav: { work: "Work", services: "Services", studio: "Studio", journal: "Journal" },
    bookCta: "Book",
    eyebrow: "Journal",
    title: "카메라 뒤에서 남기는 기록.",
    intro: "촬영 현장의 기록, 비하인드, 가끔은 장비 이야기까지 — 촬영이 끝날 때마다 업데이트합니다.",
    posts: [
      {
        date: "2025.08.12",
        title: "루프탑 웨딩, 마지막 11분의 빛을 쫓다",
        excerpt: "골든아워는 단 11분이었습니다. 그 시간을 중심으로 피로연 전체 촬영을 어떻게 설계했는지.",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "2025.07.02",
        title: "가족 촬영을 여전히 렌즈 하나로 찍는 이유",
        excerpt: "현장에서 선택이 적을수록, 카메라 앞의 사람들에게 더 집중할 수 있습니다.",
        img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "2025.05.19",
        title: "브랜드 촬영 안쪽: 무드보드부터 전달까지",
        excerpt: "2일간 진행된 제품 캠페인 촬영의 전 과정을 공유합니다.",
        img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "2025.03.04",
        title: "촬영 때마다 빠짐없이 챙기는 장비 하나",
        excerpt: "렌즈가 아닙니다. 현장을 살리는 실제 장비에 대한 짧은 이야기.",
        img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "2025.01.21",
        title: "에디토리얼 기획: 무드보드에서 촬영 리스트까지",
        excerpt: "레퍼런스 이미지 한 장이 6컷짜리 매거진 스토리가 되기까지.",
        img: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=900&q=80&auto=format&fit=crop",
      },
      {
        date: "2024.11.08",
        title: "한 스튜디오에서 보낸 6년이 알려준 빛에 관한 것들",
        excerpt: "같은 창문, 계절마다 다른 빛 — 하루가 아닌 몇 년에 걸쳐 관찰한 기록.",
        img: "https://images.unsplash.com/photo-1554080353-321e452ccf19?w=900&q=80&auto=format&fit=crop",
      },
    ],
    footer: { copyright: "© 2025 Nova Studio · Seoul", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
} as const;

export default function NovaStudioJournal({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/nova-studio");
  const workPath = localePath(lang, "/portfolio/nova-studio/work");
  const servicesPath = localePath(lang, "/portfolio/nova-studio/services");
  const studioPath = localePath(lang, "/portfolio/nova-studio/studio");

  return (
    <div className="bg-black text-white">
      <header ref={ref} className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href={home} className="text-2xl font-light tracking-[0.5em]">NOVA</Link>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.3em] text-white/80 md:flex">
            <Link href={workPath} className="transition hover:text-white/60">{t.nav.work}</Link>
            <Link href={servicesPath} className="transition hover:text-white/60">{t.nav.services}</Link>
            <Link href={studioPath} className="transition hover:text-white/60">{t.nav.studio}</Link>
            <span className="border-b border-white pb-1 text-white">{t.nav.journal}</span>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={`${home}#booking`} className="hidden rounded-none border-b-2 border-white pb-1 text-xs uppercase tracking-[0.3em] sm:inline-block">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center border border-white/30 text-white md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-white/80">
              <Link href={workPath} onClick={() => setOpen(false)} className="py-2">{t.nav.work}</Link>
              <Link href={servicesPath} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={studioPath} onClick={() => setOpen(false)} className="py-2">{t.nav.studio}</Link>
              <span className="py-2 text-white">{t.nav.journal}</span>
            </nav>
            <Link
              href={`${home}#booking`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-none border-b-2 border-white pb-1 text-xs uppercase tracking-[0.3em]"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t.eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight break-keep text-balance md:text-7xl">{t.title}</h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.posts.map((p) => (
            <article key={p.title}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={p.img} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">{p.date}</p>
              <h2 className="mt-2 font-serif text-xl leading-snug break-keep text-balance">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60 break-keep text-pretty">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs uppercase tracking-[0.3em] text-white/40 md:flex-row">
          <Link href={home} className="text-base font-light tracking-[0.5em] text-white/80">NOVA</Link>
          <div>{t.footer.copyright}</div>
          <div className="flex gap-5">
            <a>{t.footer.links.instagram}</a>
            <a>{t.footer.links.vimeo}</a>
            <a>{t.footer.links.mail}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
