import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { name: "Solstice Interiors", tag: "RESIDENTIAL DESIGN STUDIO" },
    nav: { portfolio: "Portfolio", services: "Services", process: "Process", about: "About", contact: "Contact" },
    bookCta: "Book a Design Consult",
    eyebrow: "ABOUT",
    title: "A studio built around how you actually live",
    body: [
      "Solstice Interiors was founded in Austin in 2016 by lead designer Maren Ellis, after a decade designing for hospitality clients taught her that the best rooms are the ones built for real, specific habits — not for a photo.",
      "The studio takes on a small number of residential projects each year, from single-room refreshes to whole-house renovations, so every client works directly with the same two-person design team from first walkthrough to final styling day.",
      "We believe a well-designed home should feel more like you a year in than it did on move-in day — which is why every project ends with a return visit, not just a handoff.",
    ],
    stats: [
      { v: "9 yrs", l: "Studio founded" },
      { v: "60+", l: "Homes completed" },
      { v: "2", l: "Person design team" },
    ],
    footer: "© 2025 Solstice Interiors. All rights reserved.",
  },
  ko: {
    brand: { name: "솔스티스 인테리어", tag: "레지덴셜 디자인 스튜디오" },
    nav: { portfolio: "포트폴리오", services: "서비스", process: "프로세스", about: "소개", contact: "문의" },
    bookCta: "디자인 상담 예약",
    eyebrow: "ABOUT",
    title: "실제로 사는 방식에서 출발하는 스튜디오",
    body: [
      "솔스티스 인테리어는 2016년, 리드 디자이너 마렌 엘리스가 오스틴에서 설립했습니다. 십 년간 호스피탈리티 공간을 디자인하며, 가장 좋은 공간은 사진을 위한 공간이 아니라 실제 습관에 맞춘 공간이라는 것을 배웠습니다.",
      "스튜디오는 매년 소수의 주거 프로젝트만 맡습니다. 단일 공간 리프레시부터 집 전체 리모델링까지, 모든 클라이언트는 첫 방문부터 마지막 스타일링 데이까지 같은 2인 디자인 팀과 함께합니다.",
      "잘 디자인된 집은 입주 첫날보다 1년 후에 더 당신다워야 한다고 믿습니다. 그래서 모든 프로젝트는 인도로 끝나지 않고, 다시 한번 방문하는 것으로 마무리됩니다.",
    ],
    stats: [
      { v: "9년", l: "스튜디오 운영" },
      { v: "60+", l: "완성한 집" },
      { v: "2인", l: "디자인 팀" },
    ],
    footer: "© 2025 솔스티스 인테리어. All rights reserved.",
  },
} as const;

export default function SolsticeInteriorsAbout({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/solstice-interiors");
  const aboutPath = localePath(lang, "/portfolio/solstice-interiors/about");

  return (
    <div className="bg-[#f7f0e6] text-[#2b241d]">
      <header className="border-b border-[#2b241d]/10 bg-[#f7f0e6]">
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
            <Link href={`${home}#portfolio`} className="transition hover:text-[#c1652f]">{t.nav.portfolio}</Link>
            <Link href={`${home}#services`} className="transition hover:text-[#c1652f]">{t.nav.services}</Link>
            <Link href={`${home}#process`} className="transition hover:text-[#c1652f]">{t.nav.process}</Link>
            <Link href={aboutPath} className="text-[#c1652f]">{t.nav.about}</Link>
            <Link href={`${home}#contact`} className="transition hover:text-[#c1652f]">{t.nav.contact}</Link>
          </nav>
          <Link
            href={`${home}#contact`}
            className="hidden rounded-full bg-[#c1652f] px-5 py-2.5 text-xs font-semibold tracking-wide text-white sm:inline-block"
          >
            {t.bookCta}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80&auto=format&fit=crop"
              alt={t.brand.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c1652f]">{t.eyebrow}</p>
            <h1 className="mt-4 font-serif text-3xl leading-tight md:text-5xl break-keep text-balance">{t.title}</h1>
            <div className="mt-6 space-y-4 leading-relaxed text-[#2b241d]/70 break-keep text-pretty">
              {t.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#2b241d]/15 pt-8 text-center">
              {t.stats.map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl text-[#c1652f]">{s.v}</div>
                  <div className="mt-1 text-xs tracking-widest text-[#2b241d]/50">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2b241d]/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#2b241d]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#2b241d]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
