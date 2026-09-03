"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "WILLOWBROOK DENTAL CARE",
    nav: { services: "Services", team: "Our Team", booking: "Booking", reviews: "Reviews", visit: "Visit" },
    bookCta: "Book a Visit",
    label: "OUR TEAM",
    title: "The dentists behind every visit",
    intro:
      "Three dentists, three specialties, one shared rule: explain everything before we start, and never recommend a treatment you don't need.",
    list: [
      {
        name: "Dr. Emily Novak",
        role: "Founder · General & Cosmetic Dentistry",
        bio:
          "Dr. Novak founded Willowbrook 22 years ago after training at Oregon Health & Science University. She still takes new-patient exams herself, and built the practice's same-week scheduling policy so no one waits a month for a first visit.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Dr. Marcus Webb",
        role: "Restorative & Implant Dentistry",
        bio:
          "Dr. Webb leads same-day crowns and implant work, with over 1,200 CEREC restorations placed since joining the practice. He trained at the University of Washington and completed an advanced implant fellowship in Seattle.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Dr. Priya Anand",
        role: "Pediatric & Family Dentistry",
        bio:
          "Dr. Anand focuses on making first dental visits easy for kids and anxious adults alike. She holds a pediatric dentistry certificate from Boston University and runs the practice's Saturday family-block hours.",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&q=80&auto=format&fit=crop",
      },
    ],
    footer: { address: "482 Willowbrook Ave, Portland OR 97214 · (503) 555-0148", legal: "© 2026 Willowbrook Dental Care. All rights reserved." },
  },
  ko: {
    brand: "WILLOWBROOK DENTAL",
    nav: { services: "진료안내", team: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "OUR TEAM",
    title: "모든 진료를 책임지는 의료진",
    intro: "세 명의 원장, 세 가지 전문 분야, 그러나 원칙은 하나입니다 — 시작 전에 모두 설명하고, 불필요한 치료는 권하지 않습니다.",
    list: [
      {
        name: "노박 원장",
        role: "대표원장 · 일반·심미치료",
        bio: "노박 원장은 22년 전 오리건 보건과학대학교에서 수련을 마친 뒤 윌로우브룩을 개원했습니다. 지금도 신환 검진을 직접 진행하며, 첫 방문까지 한 달을 기다리지 않도록 당일·주내 예약 체계를 만들었습니다.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "웹 원장",
        role: "보철 · 임플란트 전담의",
        bio: "웹 원장은 당일 크라운과 임플란트를 전담하며, 입사 이후 1,200건 이상의 CEREC 보철을 시술했습니다. 워싱턴대학교에서 수련했고 시애틀에서 임플란트 전문 펠로우십을 마쳤습니다.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "아난드 원장",
        role: "소아 · 가족치과 전담의",
        bio: "아난드 원장은 아이와 진료를 두려워하는 성인 모두가 편하게 첫 진료를 받을 수 있도록 돕습니다. 보스턴대학교 소아치과 자격을 보유했으며, 토요일 가족 진료 시간대를 운영하고 있습니다.",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&q=80&auto=format&fit=crop",
      },
    ],
    footer: { address: "서울특별시 서초구 반포대로 ○○ · 02-000-0000", legal: "© 2026 Willowbrook Dental Care. 의료광고심의필 제2026-XXXXXX호" },
  },
} as const;

export default function WillowbrookDentalTeam({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/willowbrook-dental");
  const navPaths = {
    services: localePath(lang, "/portfolio/willowbrook-dental/services"),
    team: localePath(lang, "/portfolio/willowbrook-dental/team"),
    booking: localePath(lang, "/portfolio/willowbrook-dental/booking"),
    reviews: localePath(lang, "/portfolio/willowbrook-dental/reviews"),
    visit: localePath(lang, "/portfolio/willowbrook-dental/visit"),
  } as const;

  return (
    <div className="bg-white text-slate-900">
      <header ref={ref} className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2f7d6b] text-xs font-bold text-white">W</span>
            <span className="text-base font-semibold tracking-wide">{t.brand}</span>
          </Link>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <Link href={navPaths.services} className="transition hover:text-[#2f7d6b]">{t.nav.services}</Link>
            <Link href={navPaths.team} className="font-semibold text-[#2f7d6b]">{t.nav.team}</Link>
            <Link href={navPaths.booking} className="transition hover:text-[#2f7d6b]">{t.nav.booking}</Link>
            <Link href={navPaths.reviews} className="transition hover:text-[#2f7d6b]">{t.nav.reviews}</Link>
            <Link href={navPaths.visit} className="transition hover:text-[#2f7d6b]">{t.nav.visit}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={navPaths.booking} className="rounded-full bg-[#2f7d6b] px-5 py-2 text-xs font-semibold text-white">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-100 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm text-slate-600">
              <Link href={navPaths.services} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={navPaths.team} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#2f7d6b]">{t.nav.team}</Link>
              <Link href={navPaths.booking} onClick={() => setOpen(false)} className="py-2">{t.nav.booking}</Link>
              <Link href={navPaths.reviews} onClick={() => setOpen(false)} className="py-2">{t.nav.reviews}</Link>
              <Link href={navPaths.visit} onClick={() => setOpen(false)} className="py-2">{t.nav.visit}</Link>
            </nav>
            <Link
              href={navPaths.booking}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#2f7d6b] px-5 py-2 text-xs font-semibold text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#2f7d6b]">{t.label}</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {t.list.map((d) => (
            <div key={d.name} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
              <div className="relative aspect-[3/4]">
                <Image src={d.image} alt={d.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold break-keep text-balance">{d.name}</h2>
                <p className="mt-1 text-sm text-slate-500 break-keep text-pretty">{d.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 break-keep text-pretty">{d.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-slate-900 py-10 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-white">{t.brand}</div>
            <p className="mt-1 text-xs break-keep text-pretty">{t.footer.address}</p>
          </div>
          <p className="text-xs break-keep text-pretty">{t.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
