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
    eyebrow: "SERVICES",
    title: "Design support for wherever your project is.",
    intro: "From a single room to a whole-house renovation, every service includes direct access to the same two-person design team from first walkthrough to final styling day.",
    services: [
      {
        title: "Full Home Design",
        price: "from $18,000",
        duration: "3–6 months, whole house",
        includes: ["Room-by-room concept & floor plans", "3D renders for every space", "Furniture, fixture & material sourcing", "Trade coordination & installation", "Final styling day"],
      },
      {
        title: "Single Room Refresh",
        price: "from $6,500",
        duration: "4–8 weeks, one room",
        includes: ["Concept boards & layout plan", "Furniture & fixture sourcing", "One install day", "One follow-up visit"],
      },
      {
        title: "New Construction & Renovation",
        price: "from $22,000",
        duration: "Runs alongside your build",
        includes: ["Finish & material selections", "Lighting & fixture plans", "Coordination with architect & contractor", "Punch-list walkthrough"],
      },
      {
        title: "Styling & Sourcing Only",
        price: "from $3,200",
        duration: "2–3 weeks",
        includes: ["Furniture & decor sourcing", "Art & textile curation", "One styling day", "Photography-ready finish"],
      },
    ],
    pricingNote: {
      title: "How pricing works",
      body: "Every engagement starts with a fixed-fee design phase, quoted after a short walkthrough — you'll always know the number before we start. Furnishings and materials are billed separately, at cost.",
    },
    ctaTitle: "Not sure which service fits?",
    ctaBody: "Tell us a little about your space and we'll recommend a starting point.",
    ctaButton: "Start Your Project",
    footer: "© 2025 Solstice Interiors. All rights reserved.",
  },
  ko: {
    brand: { name: "솔스티스 인테리어", tag: "레지덴셜 디자인 스튜디오" },
    nav: { portfolio: "포트폴리오", services: "서비스", process: "프로세스", about: "소개", contact: "문의" },
    bookCta: "디자인 상담 예약",
    eyebrow: "SERVICES",
    title: "프로젝트가 지금 어느 단계에 있든, 함께합니다.",
    intro: "단일 공간부터 집 전체 리모델링까지, 모든 서비스는 첫 방문부터 마지막 스타일링 데이까지 동일한 2인 디자인 팀이 직접 진행합니다.",
    services: [
      {
        title: "풀 홈 디자인",
        price: "$18,000~",
        duration: "3~6개월, 집 전체",
        includes: ["공간별 컨셉 및 평면도", "전 공간 3D 렌더링", "가구·조명·마감재 소싱", "시공 조율 및 설치", "최종 스타일링 데이"],
      },
      {
        title: "단일 공간 리프레시",
        price: "$6,500~",
        duration: "4~8주, 방 1개",
        includes: ["컨셉 보드 및 레이아웃 플랜", "가구·조명 소싱", "설치 1일", "사후 방문 1회"],
      },
      {
        title: "신축 & 리모델링",
        price: "$22,000~",
        duration: "시공 일정에 맞춰 진행",
        includes: ["마감재 및 자재 선정", "조명·픽스처 플랜", "건축가·시공사와 조율", "펀치리스트 최종 점검"],
      },
      {
        title: "스타일링 & 소싱 전용",
        price: "$3,200~",
        duration: "2~3주",
        includes: ["가구·소품 소싱", "아트 및 텍스타일 큐레이션", "스타일링 1일", "촬영 가능한 완성도"],
      },
    ],
    pricingNote: {
      title: "비용은 이렇게 진행됩니다",
      body: "모든 프로젝트는 짧은 방문 상담 후 고정 견적의 디자인 단계로 시작합니다 — 시작 전에 항상 정확한 금액을 안내드립니다. 가구와 자재 비용은 실비로 별도 청구됩니다.",
    },
    ctaTitle: "어떤 서비스가 맞을지 모르시겠나요?",
    ctaBody: "공간에 대해 간단히 알려주시면 알맞은 시작점을 제안드립니다.",
    ctaButton: "프로젝트 시작하기",
    footer: "© 2025 솔스티스 인테리어. All rights reserved.",
  },
} as const;

export default function SolsticeInteriorsServices({ lang }: { lang: Lang }) {
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
            <Link href={portfolioPath} className="transition hover:text-[#c1652f]">{t.nav.portfolio}</Link>
            <Link href={servicesPath} className="text-[#c1652f]">{t.nav.services}</Link>
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
              <Link href={portfolioPath} onClick={() => setOpen(false)} className="py-2">{t.nav.portfolio}</Link>
              <Link href={servicesPath} onClick={() => setOpen(false)} className="py-2 text-[#c1652f]">{t.nav.services}</Link>
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

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-[#2b241d]/10 sm:grid-cols-2">
          {t.services.map((s) => (
            <div key={s.title} className="bg-[#f7f0e6] p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl break-keep text-balance">{s.title}</h3>
                <span className="whitespace-nowrap text-sm text-[#c1652f]">{s.price}</span>
              </div>
              <p className="mt-2 text-xs font-semibold tracking-widest text-[#2b241d]/50">{s.duration.toUpperCase()}</p>
              <ul className="mt-6 space-y-2 text-sm text-[#2b241d]/70">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#c1652f]">—</span>
                    <span className="break-keep text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#efe4d2] py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80&auto=format&fit=crop"
              alt={t.brand.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl break-keep text-balance">{t.pricingNote.title}</h2>
            <p className="mt-4 leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{t.pricingNote.body}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
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
