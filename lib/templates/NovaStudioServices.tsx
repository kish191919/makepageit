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
    eyebrow: "Services",
    title: "What we shoot, in detail.",
    intro: "Every package includes a pre-shoot call, a full-resolution edited gallery, and a print-ready archive. Add-ons below cover the rest.",
    services: [
      {
        title: "Wedding",
        price: "from $2,400",
        duration: "Full ceremony + reception",
        includes: ["8 hours of coverage", "100+ fully edited frames", "Private online gallery", "Print release"],
      },
      {
        title: "Family",
        price: "from $480",
        duration: "1 hour, studio or location",
        includes: ["30 edited frames", "1 outfit change", "Online gallery within 5 days", "Optional pet add-on"],
      },
      {
        title: "Brand",
        price: "from $720",
        duration: "Half-day, headshots or product",
        includes: ["40 edited frames", "Studio or on-location", "Usage rights included", "Rush delivery available"],
      },
      {
        title: "Editorial",
        price: "from $1,200",
        duration: "Full day, concept shoot",
        includes: ["Concept + moodboard session", "60+ edited frames", "Styling coordination", "Magazine-ready retouching"],
      },
    ],
    addOnsTitle: "Add-ons",
    addOns: [
      { label: "Rush 48h delivery", price: "+$150" },
      { label: "Extra hour of coverage", price: "+$220" },
      { label: "Printed album", price: "+$340" },
      { label: "Second shooter", price: "+$400" },
    ],
    processTitle: "How it works",
    process: [
      { step: "01", title: "Inquiry", desc: "Send your date and concept — we reply within 24 hours." },
      { step: "02", title: "Consult", desc: "A short call to lock the shot list, location, and timeline." },
      { step: "03", title: "Shoot", desc: "We show up, keep it relaxed, and chase the light." },
      { step: "04", title: "Delivery", desc: "Edited gallery delivered within 5-10 business days." },
    ],
    ctaTitle: "Ready to book?",
    ctaBody: "Tell us the date and the concept — the details we'll figure out together.",
    ctaButton: "Start an inquiry →",
    footer: { copyright: "© 2025 Nova Studio · Brooklyn", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
  ko: {
    nav: { work: "Work", services: "Services", studio: "Studio", journal: "Journal" },
    bookCta: "Book",
    eyebrow: "Services",
    title: "촬영 안내, 자세히.",
    intro: "모든 패키지에는 사전 상담, 풀 해상도 보정본, 인화용 아카이브가 포함됩니다. 추가 옵션은 아래를 참고해주세요.",
    services: [
      {
        title: "Wedding",
        price: "1,200,000원~",
        duration: "본식 + 피로연",
        includes: ["8시간 촬영", "100컷 이상 보정", "온라인 갤러리 제공", "인화 사용 동의서"],
      },
      {
        title: "Family",
        price: "380,000원~",
        duration: "스튜디오 / 야외 1시간",
        includes: ["30컷 보정", "의상 1회 교체", "5일 내 갤러리 전달", "반려동물 촬영 추가 가능"],
      },
      {
        title: "Brand",
        price: "550,000원~",
        duration: "반나절, 프로필 / 상품",
        includes: ["40컷 보정", "스튜디오/현장 모두 가능", "상업적 사용 권한 포함", "긴급 보정 가능"],
      },
      {
        title: "Editorial",
        price: "880,000원~",
        duration: "종일, 컨셉 촬영",
        includes: ["컨셉/무드보드 상담", "60컷 이상 보정", "스타일링 코디네이션", "매거진 수준 리터칭"],
      },
    ],
    addOnsTitle: "추가 옵션",
    addOns: [
      { label: "48시간 긴급 보정", price: "+150,000원" },
      { label: "촬영 1시간 연장", price: "+220,000원" },
      { label: "인화 앨범", price: "+340,000원" },
      { label: "세컨드 촬영기사", price: "+400,000원" },
    ],
    processTitle: "진행 순서",
    process: [
      { step: "01", title: "문의", desc: "촬영 일정과 컨셉을 보내주시면 24시간 내 답장드립니다." },
      { step: "02", title: "상담", desc: "짧은 통화로 촬영 목록, 장소, 일정을 확정합니다." },
      { step: "03", title: "촬영", desc: "편안한 분위기에서 가장 좋은 빛을 따라 촬영합니다." },
      { step: "04", title: "전달", desc: "영업일 기준 5-10일 내 보정본을 전달합니다." },
    ],
    ctaTitle: "예약하시겠어요?",
    ctaBody: "촬영 일자와 컨셉만 알려주세요 — 나머지는 함께 만들어가요.",
    ctaButton: "문의 시작하기 →",
    footer: { copyright: "© 2025 Nova Studio · Seoul", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
} as const;

export default function NovaStudioServices({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/nova-studio");
  const workPath = localePath(lang, "/portfolio/nova-studio/work");
  const studioPath = localePath(lang, "/portfolio/nova-studio/studio");
  const journalPath = localePath(lang, "/portfolio/nova-studio/journal");

  return (
    <div className="bg-black text-white">
      <header ref={ref} className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href={home} className="text-2xl font-light tracking-[0.5em]">NOVA</Link>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.3em] text-white/80 md:flex">
            <Link href={workPath} className="transition hover:text-white/60">{t.nav.work}</Link>
            <span className="border-b border-white pb-1 text-white">{t.nav.services}</span>
            <Link href={studioPath} className="transition hover:text-white/60">{t.nav.studio}</Link>
            <Link href={journalPath} className="transition hover:text-white/60">{t.nav.journal}</Link>
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
              <span className="py-2 text-white">{t.nav.services}</span>
              <Link href={studioPath} onClick={() => setOpen(false)} className="py-2">{t.nav.studio}</Link>
              <Link href={journalPath} onClick={() => setOpen(false)} className="py-2">{t.nav.journal}</Link>
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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t.eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight break-keep text-balance md:text-7xl">{t.title}</h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2">
          {t.services.map((s) => (
            <div key={s.title} className="bg-black p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-3xl break-keep text-balance">{s.title}</h3>
                <span className="text-lg">{s.price}</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/40">{s.duration}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/60">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-white/30">—</span>
                    <span className="break-keep text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white py-20 text-black">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl break-keep text-balance">{t.addOnsTitle}</h2>
          <div className="mt-8 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {t.addOns.map((a) => (
              <div key={a.label} className="bg-white p-6">
                <p className="text-sm break-keep text-pretty">{a.label}</p>
                <p className="mt-3 text-lg">{a.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl break-keep text-balance">{t.processTitle}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map((p) => (
              <div key={p.step}>
                <span className="text-xs text-white/40">{p.step}</span>
                <h3 className="mt-2 font-serif text-xl break-keep text-balance">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 break-keep text-pretty">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-24">
        <Image
          src="https://images.unsplash.com/photo-1554080353-321e452ccf19?w=2000&q=70&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-4xl break-keep text-balance">{t.ctaTitle}</h2>
          <p className="mt-4 text-sm text-white/70 break-keep text-pretty">{t.ctaBody}</p>
          <Link
            href={`${home}#booking`}
            className="mt-8 inline-block rounded-none border border-white px-8 py-4 text-xs uppercase tracking-[0.4em] transition hover:bg-white hover:text-black"
          >
            {t.ctaButton}
          </Link>
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
