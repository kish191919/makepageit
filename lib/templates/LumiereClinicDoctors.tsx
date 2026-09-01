"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "LUMIÈRE SKIN CLINIC",
    nav: { treatments: "Treatments", doctors: "Doctors", booking: "Booking", reviews: "Reviews", visit: "Visit" },
    bookCta: "Book Now",
    label: "DOCTORS",
    title: "Meet the team behind your results",
    intro: "Board-certified, sub-specialized, and never rushed — every provider owns one area of care end to end.",
    list: [
      {
        name: "Dr. Lauren Park",
        role: "Founder · Board-Certified Dermatologist",
        bio: "14 years specializing in medical and cosmetic dermatology. Trained at NYU Langone, Dr. Park built Lumière around one rule: no treatment without a clear diagnosis first.",
        image: "/images/lumiere/lee-sujin.jpg",
      },
      {
        name: "Dr. Marcus Chen",
        role: "Laser Lead",
        bio: "Focuses exclusively on laser toning and resurfacing, with a caseload of over 3,000 pigmentation treatments.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Dr. Yuna Cho",
        role: "Lift & Contour Lead",
        bio: "Specializes in non-surgical lifting and contouring, combining ultrasound and radiofrequency for natural-looking results.",
        image: "/images/lumiere/jung-yuna.jpg",
      },
    ],
    footer: { address: "115 W 30th St, New York NY 10001 · (212) 555-0142", legal: "© 2025 Lumière Skin Clinic. Licensed dermatology practice." },
  },
  ko: {
    brand: "LUMIÈRE CLINIC",
    nav: { treatments: "시술안내", doctors: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "DOCTORS",
    title: "결과를 만드는 의료진을 소개합니다",
    intro: "전문의 자격, 세부 분야 전담제, 그리고 서두르지 않는 진료 — 각 의료진이 한 분야를 끝까지 책임집니다.",
    list: [
      {
        name: "이수진 원장",
        role: "대표원장 · 피부과 전문의",
        bio: "14년간 메디컬·피부미용 피부과 진료를 전문으로 해왔습니다. NYU 랑곤에서 수련했으며, '정확한 진단 없이는 시술 없다'는 원칙으로 루미에르를 설립했습니다.",
        image: "/images/lumiere/lee-sujin.jpg",
      },
      {
        name: "박민호 원장",
        role: "레이저 시술 전담의",
        bio: "레이저 토닝과 리서페이싱만을 전담하며, 3,000건 이상의 색소 치료 경험을 보유하고 있습니다.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "정유나 원장",
        role: "리프팅 · 윤곽 전담의",
        bio: "초음파와 고주파 기술을 결합한 비수술 리프팅·윤곽 시술을 전문으로, 자연스러운 결과를 만듭니다.",
        image: "/images/lumiere/jung-yuna.jpg",
      },
    ],
    footer: { address: "서울특별시 강남구 테헤란로 415, 3층 · 02-547-3210", legal: "© 2025 Lumière Clinic. 의료광고심의필 제2025-07-01234호" },
  },
} as const;

export default function LumiereClinicDoctors({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/lumiere-clinic");
  const navPaths = {
    treatments: localePath(lang, "/portfolio/lumiere-clinic/treatments"),
    doctors: localePath(lang, "/portfolio/lumiere-clinic/doctors"),
    booking: localePath(lang, "/portfolio/lumiere-clinic/booking"),
    reviews: localePath(lang, "/portfolio/lumiere-clinic/reviews"),
    visit: localePath(lang, "/portfolio/lumiere-clinic/visit"),
  } as const;

  return (
    <div className="bg-white text-slate-900">
      <header ref={ref} className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9b6b4d] text-xs font-bold text-white">L</span>
            <span className="text-base font-semibold tracking-wide">{t.brand}</span>
          </Link>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <Link href={navPaths.treatments} className="transition hover:text-[#9b6b4d]">{t.nav.treatments}</Link>
            <Link href={navPaths.doctors} className="font-semibold text-[#9b6b4d]">{t.nav.doctors}</Link>
            <Link href={navPaths.booking} className="transition hover:text-[#9b6b4d]">{t.nav.booking}</Link>
            <Link href={navPaths.reviews} className="transition hover:text-[#9b6b4d]">{t.nav.reviews}</Link>
            <Link href={navPaths.visit} className="transition hover:text-[#9b6b4d]">{t.nav.visit}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={navPaths.booking} className="rounded-full bg-[#9b6b4d] px-5 py-2 text-xs font-semibold text-white">
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
              <Link href={navPaths.treatments} onClick={() => setOpen(false)} className="py-2">{t.nav.treatments}</Link>
              <Link href={navPaths.doctors} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#9b6b4d]">{t.nav.doctors}</Link>
              <Link href={navPaths.booking} onClick={() => setOpen(false)} className="py-2">{t.nav.booking}</Link>
              <Link href={navPaths.reviews} onClick={() => setOpen(false)} className="py-2">{t.nav.reviews}</Link>
              <Link href={navPaths.visit} onClick={() => setOpen(false)} className="py-2">{t.nav.visit}</Link>
            </nav>
            <Link
              href={navPaths.booking}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#9b6b4d] px-5 py-2 text-xs font-semibold text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#9b6b4d]">{t.label}</p>
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
