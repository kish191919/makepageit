"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "Solstice Interiors", tag: "RESIDENTIAL DESIGN STUDIO" },
    nav: { portfolio: "Portfolio", services: "Services", process: "Process", about: "About", contact: "Contact" },
    bookCta: "Book a Design Consult",
    eyebrow: "SELECTED WORK",
    title: "Every project, one story: a home that fits.",
    intro: "A look at recent full-home renovations, single-room refreshes, and new builds — each one shaped around how the family actually lives.",
    ctaTitle: "See something close to your project?",
    ctaBody: "Tell us about your space and we'll follow up within two business days.",
    ctaButton: "Start Your Project",
    footer: "© 2025 Solstice Interiors. All rights reserved.",
    projects: [
      {
        name: "The Cedar Park Kitchen",
        desc: "A dated galley kitchen opened into a warm, sociable heart of the home.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "A Sunlit Reading Nook",
        desc: "A wasted stair landing turned into the most-used seat in the house.",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "The Lakeview Primary Suite",
        desc: "A calm, textural retreat built around morning light and quiet materials.",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "The Elm Street Living Room",
        desc: "Layered vintage and custom pieces around a fireplace the family actually gathers at.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "The Zilker Dining Room",
        desc: "A once-formal dining room made for actual weeknight dinners, with a custom banquette and warm plaster walls.",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "The Rosedale Primary Bath",
        desc: "A cramped 1970s bathroom reworked into a quiet, spa-like retreat with zellige tile and a freestanding tub.",
        image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1200&q=80&auto=format&fit=crop",
      },
    ],
  },
  ko: {
    brand: { name: "솔스티스 인테리어", tag: "레지덴셜 디자인 스튜디오" },
    nav: { portfolio: "포트폴리오", services: "서비스", process: "프로세스", about: "소개", contact: "문의" },
    bookCta: "디자인 상담 예약",
    eyebrow: "SELECTED WORK",
    title: "모든 프로젝트는 결국 하나의 이야기, 꼭 맞는 집.",
    intro: "최근 진행한 집 전체 리모델링, 단일 공간 리프레시, 신축 프로젝트를 소개합니다. 각 공간은 그 가족이 실제로 살아가는 방식에 맞춰 디자인되었습니다.",
    ctaTitle: "비슷한 프로젝트가 있으신가요?",
    ctaBody: "공간에 대해 알려주시면 영업일 기준 2일 이내에 연락드립니다.",
    ctaButton: "프로젝트 시작하기",
    footer: "© 2025 솔스티스 인테리어. All rights reserved.",
    projects: [
      {
        name: "시더파크의 주방",
        desc: "답답했던 일자형 주방을, 가족이 자연스레 모이는 온기 있는 공간으로.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "볕이 드는 독서 코너",
        desc: "버려져 있던 계단참을, 집에서 가장 사랑받는 자리로 바꿨습니다.",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "레이크뷰 안방",
        desc: "아침 햇살과 차분한 소재만으로 완성한 조용한 휴식의 공간.",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "엘름 스트리트 거실",
        desc: "빈티지 가구와 맞춤 제작 가구를 겹겹이 더해, 온 가족이 벽난로 앞에 진짜로 모이는 거실로.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "질커 다이닝룸",
        desc: "격식만 차리던 다이닝룸을, 평일 저녁에도 자연스레 모이는 공간으로. 맞춤 벤치 시트와 따뜻한 플라스터 벽이 어우러집니다.",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "로즈데일 안방 욕실",
        desc: "좁고 낡은 1970년대 욕실을, 젤리제 타일과 독립형 욕조가 있는 조용한 스파 같은 공간으로.",
        image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1200&q=80&auto=format&fit=crop",
      },
    ],
  },
} as const;

export default function SolsticeInteriorsPortfolio({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/solstice-interiors");
  const portfolioPath = localePath(lang, "/portfolio/solstice-interiors/portfolio");
  const servicesPath = localePath(lang, "/portfolio/solstice-interiors/services");
  const processPath = localePath(lang, "/portfolio/solstice-interiors/process");
  const aboutPath = localePath(lang, "/portfolio/solstice-interiors/about");
  const contactPath = localePath(lang, "/portfolio/solstice-interiors/contact");

  return (
    <div className="bg-[#f7f0e6] text-[#2b241d]">
      <header ref={ref} className="border-b border-[#2b241d]/10 bg-[#f7f0e6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c1652f] font-serif text-base text-white">
              S
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#2b241d]/50">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#2b241d]/75 md:flex">
            <Link href={portfolioPath} className="text-[#c1652f]">{t.nav.portfolio}</Link>
            <Link href={servicesPath} className="transition hover:text-[#c1652f]">{t.nav.services}</Link>
            <Link href={processPath} className="transition hover:text-[#c1652f]">{t.nav.process}</Link>
            <Link href={aboutPath} className="transition hover:text-[#c1652f]">{t.nav.about}</Link>
            <Link href={contactPath} className="transition hover:text-[#c1652f]">{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={contactPath}
              className="hidden rounded-full bg-[#c1652f] px-5 py-2.5 text-xs font-semibold tracking-wide text-white sm:inline-block"
            >
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b241d]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#2b241d]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#2b241d]/75">
              <Link href={portfolioPath} onClick={() => setOpen(false)} className="py-2 text-[#c1652f]">{t.nav.portfolio}</Link>
              <Link href={servicesPath} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={processPath} onClick={() => setOpen(false)} className="py-2">{t.nav.process}</Link>
              <Link href={aboutPath} onClick={() => setOpen(false)} className="py-2">{t.nav.about}</Link>
              <Link href={contactPath} onClick={() => setOpen(false)} className="py-2">{t.nav.contact}</Link>
            </nav>
            <Link
              href={contactPath}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#c1652f] px-5 py-2.5 text-xs font-semibold tracking-wide text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c1652f]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">{t.title}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.map((p) => (
            <div key={p.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl break-keep text-balance">{p.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#efe4d2] py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl break-keep text-balance">{t.ctaTitle}</h2>
          <p className="mt-4 leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{t.ctaBody}</p>
          <Link
            href={contactPath}
            className="mt-8 inline-block rounded-full bg-[#c1652f] px-8 py-3.5 text-sm font-semibold text-white"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#2b241d]/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#2b241d]/50 md:flex-row md:items-center md:justify-between">
          <Link href={home} className="font-serif text-sm tracking-wide text-[#2b241d]">{t.brand.name}</Link>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
