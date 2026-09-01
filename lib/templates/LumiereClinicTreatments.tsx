"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "LUMIÈRE SKIN CLINIC",
    nav: { treatments: "Treatments", doctors: "Doctors", booking: "Booking", reviews: "Reviews", visit: "Visit" },
    bookCta: "Book Now",
    label: "TREATMENTS",
    title: "Signature services, built around your diagnosis",
    intro:
      "Every treatment starts with a 1:1 skin assessment — we only recommend what actually fits your skin, never a package.",
    list: [
      {
        title: "Hydrating Boost",
        desc: "Texture & moisture reset",
        detail:
          "A multi-layer hyaluronic injection that restores hydration from within, smoothing fine lines and restoring a dewy glow.",
        duration: "30 min",
        price: "from $220",
      },
      {
        title: "Laser Toning",
        desc: "Dark spots & pigmentation",
        detail: "Low-fluence laser passes break down pigment gradually for an even, brighter tone with no downtime.",
        duration: "20 min",
        price: "from $180",
      },
      {
        title: "Lift & Contour",
        desc: "Firmness & jawline",
        detail: "Focused ultrasound energy lifts and tightens the jawline and cheeks — no surgery, no recovery time.",
        duration: "40 min",
        price: "from $800",
      },
      {
        title: "Acne Care",
        desc: "Calm active breakouts",
        detail: "A calming protocol combining LED therapy and targeted extraction to clear breakouts without irritation.",
        duration: "30 min",
        price: "from $120",
      },
    ],
    footer: { address: "115 W 30th St, New York NY 10001 · (212) 555-0142", legal: "© 2025 Lumière Skin Clinic. Licensed dermatology practice." },
  },
  ko: {
    brand: "LUMIÈRE CLINIC",
    nav: { treatments: "시술안내", doctors: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    label: "TREATMENTS",
    title: "정확한 진단 위에 설계된 시그니처 시술",
    intro: "모든 시술은 1:1 피부 진단에서 시작합니다 — 패키지가 아니라, 지금 피부에 맞는 것만 권합니다.",
    list: [
      {
        title: "스킨 부스터",
        desc: "수분·결 회복",
        detail: "히알루론산을 다층으로 주입해 피부 속부터 수분을 채우고 잔주름을 완화해 촉촉한 광채를 되찾아줍니다.",
        duration: "30분",
        price: "22만원~",
      },
      {
        title: "레이저 토닝",
        desc: "잡티·색소 케어",
        detail: "저출력 레이저를 여러 차례 조사해 색소를 서서히 분해, 다운타임 없이 균일하고 밝은 톤을 만듭니다.",
        duration: "20분",
        price: "18만원~",
      },
      {
        title: "리프팅",
        desc: "탄력·윤곽 개선",
        detail: "집속 초음파 에너지로 수술이나 회복기간 없이 턱선과 볼을 탄탄하게 리프팅합니다.",
        duration: "40분",
        price: "80만원~",
      },
      {
        title: "여드름 케어",
        desc: "트러블 진정",
        detail: "LED 테라피와 정밀 압출을 결합한 진정 프로토콜로 자극 없이 트러블을 정리합니다.",
        duration: "30분",
        price: "12만원~",
      },
    ],
    footer: { address: "서울특별시 강남구 테헤란로 415, 3층 · 02-547-3210", legal: "© 2025 Lumière Clinic. 의료광고심의필 제2025-07-01234호" },
  },
} as const;

export default function LumiereClinicTreatments({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.treatments} className="font-semibold text-[#9b6b4d]">{t.nav.treatments}</Link>
            <Link href={navPaths.doctors} className="transition hover:text-[#9b6b4d]">{t.nav.doctors}</Link>
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
              <Link href={navPaths.treatments} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#9b6b4d]">{t.nav.treatments}</Link>
              <Link href={navPaths.doctors} onClick={() => setOpen(false)} className="py-2">{t.nav.doctors}</Link>
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.list.map((tr) => (
            <div key={tr.title} className="rounded-2xl border border-slate-200 p-7 transition hover:border-[#9b6b4d] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f9f3ee] text-[#9b6b4d]">✦</div>
              <h2 className="mt-5 text-xl font-bold break-keep text-balance">{tr.title}</h2>
              <p className="mt-1 text-sm text-slate-500 break-keep text-pretty">{tr.desc}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 break-keep text-pretty">{tr.detail}</p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
                <span className="text-slate-500">{tr.duration}</span>
                <span className="font-semibold text-[#9b6b4d]">{tr.price}</span>
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
