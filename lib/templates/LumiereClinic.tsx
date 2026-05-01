import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: "LUMIÈRE SKIN CLINIC",
    nav: { treatments: "Treatments", doctors: "Doctors", booking: "Booking", reviews: "Reviews", visit: "Visit" },
    bookCta: "Book Now",
    hero: {
      tag: "Board-Certified Dermatology",
      title: ["The start of radiant skin —"],
      titleAccent: "Lumière",
      titleEnd: ".",
      body: "A 1:1 plan built around your skin diagnosis. No upselling, no pressure — just results we can show you.",
      ctaPrimary: "Book Online",
      ctaSecondary: "Free Skin Assessment",
      stats: [
        { value: "14 yrs", label: "Specialist experience" },
        { value: "98%", label: "Return-visit rate" },
        { value: "3,200+", label: "Visits / month" },
      ],
    },
    treatmentsSection: { eyebrow: "TREATMENTS", title: "Signature Services" },
    treatments: [
      { title: "Hydrating Boost", desc: "Texture & moisture reset", price: "30 min · from $220" },
      { title: "Laser Toning", desc: "Dark spots & pigmentation", price: "20 min · from $180" },
      { title: "Lift & Contour", desc: "Firmness & jawline", price: "40 min · from $800" },
      { title: "Acne Care", desc: "Calm active breakouts", price: "30 min · from $120" },
    ],
    doctorsSection: { eyebrow: "DOCTORS", title: "Meet the Team" },
    doctors: [
      {
        name: "Dr. Lauren Park",
        role: "Founder · Board-Certified Dermatologist",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Dr. Marcus Chen",
        role: "Laser Lead",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Dr. Yuna Cho",
        role: "Lift & Contour Lead",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop",
      },
    ],
    booking: {
      eyebrow: "ONLINE BOOKING",
      title: "Book in under a minute",
      body: "Pick a treatment, time, and provider — confirm with a tap.",
      fields: [
        { label: "Treatment", value: "Hydrating Boost ▾" },
        { label: "Date & Time", value: "Aug 12, 2025 (Tue) · 2:30 PM" },
        { label: "Provider", value: "Dr. Lauren Park" },
        { label: "Phone", value: "(212) ***-****" },
      ],
      submit: "Confirm Booking →",
    },
    reviewsTitle: "Real patient reviews",
    reviews: [
      { rating: 5, text: "Booking and visit were both effortless, and the result speaks for itself.", who: "30s · Hydrating Boost" },
      { rating: 5, text: "They actually listened. No pressure to add anything I didn't need.", who: "40s · Lift & Contour" },
      { rating: 5, text: "Automatic reminders made my schedule painless to manage.", who: "20s · Toning" },
    ],
    footer: { address: "115 W 30th St, New York NY 10001 · (212) 555-0142", legal: "© 2025 Lumière Skin Clinic. Licensed dermatology practice." },
  },
  ko: {
    brand: "LUMIÈRE CLINIC",
    nav: { treatments: "시술안내", doctors: "의료진", booking: "예약", reviews: "후기", visit: "오시는 길" },
    bookCta: "예약하기",
    hero: {
      tag: "피부과 전문의 진료",
      title: ["빛나는 피부의 시작,"],
      titleAccent: "루미에르",
      titleEnd: "에서.",
      body: "개인 피부 진단 후 1:1로 설계되는 맞춤 시술. 무리한 권유 없이, 결과로 증명합니다.",
      ctaPrimary: "온라인 예약",
      ctaSecondary: "무료 피부 진단",
      stats: [
        { value: "14년", label: "전문의 경력" },
        { value: "98%", label: "재진료율" },
        { value: "3,200+", label: "월 평균 진료" },
      ],
    },
    treatmentsSection: { eyebrow: "TREATMENTS", title: "시그니처 시술" },
    treatments: [
      { title: "스킨 부스터", desc: "수분·결 회복", price: "30분 / 22만원~" },
      { title: "레이저 토닝", desc: "잡티·색소 케어", price: "20분 / 18만원~" },
      { title: "리프팅", desc: "탄력·윤곽 개선", price: "40분 / 80만원~" },
      { title: "여드름 케어", desc: "트러블 진정", price: "30분 / 12만원~" },
    ],
    doctorsSection: { eyebrow: "DOCTORS", title: "의료진 소개" },
    doctors: [
      {
        name: "이수진 원장",
        role: "대표원장 · 피부과 전문의",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "박민호 원장",
        role: "레이저 시술 전담의",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "정유나 원장",
        role: "리프팅 · 윤곽 전담의",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop",
      },
    ],
    booking: {
      eyebrow: "ONLINE BOOKING",
      title: "간편한 온라인 예약",
      body: "시술 선택부터 결제까지 1분이면 완료됩니다.",
      fields: [
        { label: "희망 시술", value: "스킨 부스터 ▾" },
        { label: "희망 일시", value: "2025-08-12 (화) 14:30" },
        { label: "담당 의료진", value: "이수진 원장" },
        { label: "연락처", value: "010-****-****" },
      ],
      submit: "예약 확정하기 →",
    },
    reviewsTitle: "실제 환자 후기",
    reviews: [
      { rating: 5, text: "예약부터 진료까지 너무 깔끔했어요. 결과도 만족스럽습니다.", who: "30대 여성 · 스킨부스터" },
      { rating: 5, text: "친절하게 상담해주시고 무리한 시술 권유가 없어 신뢰가 갑니다.", who: "40대 여성 · 리프팅" },
      { rating: 5, text: "노쇼 알림톡까지 자동으로 와서 일정 관리가 편했어요.", who: "20대 여성 · 토닝" },
    ],
    footer: { address: "서울특별시 강남구 테헤란로 ○○○ · 02-000-0000", legal: "© 2025 Lumière Clinic. 의료광고심의필 제2025-XXXXXX호" },
  },
} as const;

export default function LumiereClinic({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9b6b4d] text-xs font-bold text-white">L</span>
            <span className="text-base font-semibold tracking-wide">{t.brand}</span>
          </div>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <a>{t.nav.treatments}</a>
            <a>{t.nav.doctors}</a>
            <a>{t.nav.booking}</a>
            <a>{t.nav.reviews}</a>
            <a>{t.nav.visit}</a>
          </nav>
          <a className="rounded-full bg-[#9b6b4d] px-5 py-2 text-xs font-semibold text-white">
            {t.bookCta}
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#f9f3ee] via-white to-[#f5ebe2]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-block rounded-full bg-[#9b6b4d]/10 px-3 py-1 text-xs font-semibold text-[#9b6b4d]">
              {t.hero.tag}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              {t.hero.title[0]}<br />
              <span className="text-[#9b6b4d]">{t.hero.titleAccent}</span>{t.hero.titleEnd}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                {t.hero.ctaPrimary}
              </a>
              <a className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-6">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop"
              alt="Clinic"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#9b6b4d]">{t.treatmentsSection.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.treatmentsSection.title}</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.treatments.map((tr) => (
            <div key={tr.title} className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#9b6b4d] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f9f3ee] text-[#9b6b4d]">✦</div>
              <h3 className="mt-5 text-lg font-bold">{tr.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{tr.desc}</p>
              <p className="mt-6 text-sm font-semibold text-[#9b6b4d]">{tr.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#9b6b4d]">{t.doctorsSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.doctorsSection.title}</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.doctors.map((d) => (
              <div key={d.name} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image src={d.image} alt={d.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{d.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{d.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#9b6b4d] to-[#7a4f35] p-10 text-white md:p-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/70">{t.booking.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t.booking.title}</h2>
          <p className="mt-3 max-w-md text-white/80">{t.booking.body}</p>
          <div className="mt-10 grid gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur sm:grid-cols-2">
            {t.booking.fields.map((f) => (
              <label key={f.label} className="block">
                <span className="text-xs text-white/70">{f.label}</span>
                <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">{f.value}</div>
              </label>
            ))}
          </div>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            {t.booking.submit}
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl font-bold md:text-3xl">{t.reviewsTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-[#f0a04b]">{"★".repeat(r.rating)}</div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">“{r.text}”</p>
              <p className="mt-5 text-xs text-slate-500">— {r.who}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-slate-900 py-10 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-white">{t.brand}</div>
            <p className="mt-1 text-xs">{t.footer.address}</p>
          </div>
          <p className="text-xs">{t.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
