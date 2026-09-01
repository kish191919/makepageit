"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "jenna",
    nav: ["works", "about", "shop", "contact"],
    cta: "Hire me ✏️",
    label: "Selected work",
    title: "Eight years of book covers, packaging, and editorial art.",
    intro:
      "A closer look at recent commissions — the brief, what shipped, and who it was for.",
    works: [
      { title: "Bustling Library", client: "Penguin Young Readers", year: "2024", color: "#ffd166", summary: "A twelve-book chapter series about a library that comes alive after closing time.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80&auto=format&fit=crop" },
      { title: "A Slice of Summer", client: "Blue Bottle packaging", year: "2024", color: "#ef476f", summary: "Limited-run cold brew cans and sleeves for a summer seasonal release.", img: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=900&q=80&auto=format&fit=crop" },
      { title: "Moon and Cat", client: "Communication Arts", year: "2023", color: "#06d6a0", summary: "A featured editorial spread on quiet-hour routines, hand-inked and colored digitally.", img: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=900&q=80&auto=format&fit=crop" },
      { title: "Birds of the City", client: "NYC Parks campaign", year: "2023", color: "#118ab2", summary: "A poster series for a city-wide urban-wildlife awareness campaign.", img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=900&q=80&auto=format&fit=crop" },
      { title: "Paper Kitchen", client: "Maison Ferme cookbook", year: "2023", color: "#ffd166", summary: "Chapter openers and forty recipe spot illustrations for a farmhouse cookbook.", img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&q=80&auto=format&fit=crop" },
      { title: "Small Weather", client: "Self-published zine", year: "2022", color: "#ef476f", summary: "A personal zine about noticing tiny seasonal changes, sold at three print fairs.", img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 Jenna Cole Illustration · drawn by hand, sent kindly 🌱",
  },
  ko: {
    brand: "jini",
    nav: ["works", "about", "shop", "contact"],
    cta: "의뢰하기 ✏️",
    label: "작업 모음",
    title: "8년간 그려온 단행본 표지, 패키지, 에디토리얼.",
    intro: "최근 의뢰받은 작업들을 더 자세히 소개합니다 — 어떤 의뢰였고, 무엇을 만들었는지.",
    works: [
      { title: "북적북적 도서관", client: "창비 어린이", year: "2024", color: "#ffd166", summary: "문을 닫으면 살아 움직이는 도서관을 그린 12권짜리 챕터북 시리즈.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80&auto=format&fit=crop" },
      { title: "여름 한 조각", client: "마쓰무라 카페 패키지", year: "2024", color: "#ef476f", summary: "여름 한정판 콜드브루 캔과 슬리브 패키지 일러스트.", img: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=900&q=80&auto=format&fit=crop" },
      { title: "달과 고양이", client: "월간 디자인", year: "2023", color: "#06d6a0", summary: "조용한 시간에 관한 에디토리얼 스프레드, 손으로 펜선을 잡고 디지털로 채색.", img: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=900&q=80&auto=format&fit=crop" },
      { title: "도시의 새들", client: "서울시 캠페인", year: "2023", color: "#118ab2", summary: "도시 생태계 인식 개선 캠페인을 위한 포스터 시리즈.", img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=900&q=80&auto=format&fit=crop" },
      { title: "종이 부엌", client: "메종 페름 요리책", year: "2023", color: "#ffd166", summary: "농가 요리책의 챕터 표지와 레시피 삽화 40컷.", img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&q=80&auto=format&fit=crop" },
      { title: "작은 날씨", client: "자체 제작 진(zine)", year: "2022", color: "#ef476f", summary: "계절의 작은 변화를 기록한 개인 진, 북페어 세 곳에서 판매.", img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 jini illustration · 손으로 그려서, 다정하게 보냅니다 🌱",
  },
} as const;

export default function JiniIllustrationWorks({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/jini-illustration");
  const worksPath = localePath(lang, "/portfolio/jini-illustration/works");
  const aboutPath = localePath(lang, "/portfolio/jini-illustration/about");
  const shopPath = localePath(lang, "/portfolio/jini-illustration/shop");
  const contactPath = localePath(lang, "/portfolio/jini-illustration/contact");
  const navPaths: Record<string, string> = { works: worksPath, about: aboutPath, shop: shopPath, contact: contactPath };

  return (
    <div
      className="min-h-screen text-[#3a2e2a]"
      style={{
        backgroundColor: "#fff8ec",
        backgroundImage:
          "radial-gradient(#e9dec5 1px, transparent 1px), radial-gradient(#e9dec5 1px, #fff8ec 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <header ref={ref} className="border-b-2 border-dashed border-[#3a2e2a]/20 bg-[#fff8ec]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2 text-2xl font-black tracking-tight">
            <span>🖍️</span> {t.brand}
            <span className="text-[#ef476f]">.</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-bold md:flex">
            {t.nav.map((n) => (
              <Link
                key={n}
                href={navPaths[n]}
                className={n === "works" ? "rounded-full bg-[#ffd166] px-3 py-1" : "transition hover:opacity-70"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href={contactPath} className="rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]">
              {t.cta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#3a2e2a] md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t-2 border-dashed border-[#3a2e2a]/20 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-bold">
              {t.nav.map((n) => (
                <Link
                  key={n}
                  href={navPaths[n]}
                  onClick={() => setOpen(false)}
                  className={n === "works" ? "py-2 text-[#ef476f]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <Link
              href={contactPath}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]"
            >
              {t.cta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <span className="inline-block rotate-[-2deg] rounded-full bg-[#06d6a0] px-3 py-1 text-xs font-bold text-white">
          {t.label}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.15] md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-md text-base text-[#5b4a44] break-keep text-pretty">{t.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {t.works.map((w) => (
            <article
              key={w.title}
              className="overflow-hidden rounded-3xl border-4 border-[#3a2e2a] bg-white shadow-[6px_6px_0_#3a2e2a] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#3a2e2a]"
            >
              <div className="relative aspect-[4/3]" style={{ backgroundColor: w.color }}>
                <Image src={w.img} alt={w.title} fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="border-t-4 border-[#3a2e2a] bg-[#fff8ec] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black break-keep text-balance">{w.title}</h3>
                  <span className="rounded-full bg-[#3a2e2a] px-3 py-1 text-xs font-bold text-white">{w.year}</span>
                </div>
                <p className="mt-1 text-sm font-bold text-[#5b4a44]">{w.client}</p>
                <p className="mt-3 text-sm text-[#5b4a44] break-keep text-pretty">{w.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-dashed border-[#3a2e2a]/20 py-8 text-center text-xs text-[#5b4a44] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
