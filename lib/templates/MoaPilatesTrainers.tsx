import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { short: "FORM & FLOW", full: "FORM & FLOW PILATES" },
    nav: { programs: "Programs", trainers: "Trainers", membership: "Membership" },
    bookCta: "Book a Class",
    hero: {
      eyebrow: "Trainers",
      title: "The people behind every session",
      body: "Three trainers, one small studio. Every class is taught by someone who already knows your body — not whoever's free that hour.",
    },
    trainers: [
      { name: "Yuna", role: "Founder · 8 yrs", image: "https://images.unsplash.com/photo-1685342744654-3cd3f48060e4?w=600&q=80&auto=format&fit=crop" },
      { name: "Soo", role: "Reformer Lead · 6 yrs", image: "https://images.unsplash.com/photo-1542996966-2e31c00bae31?w=600&q=80&auto=format&fit=crop" },
      { name: "Hana", role: "Rehab Specialist · 7 yrs", image: "https://images.unsplash.com/photo-1682917265558-f3dbf6507e5b?w=600&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 FORM & FLOW · Brooklyn",
  },
  ko: {
    brand: { short: "MOA", full: "MOA PILATES" },
    nav: { programs: "Programs", trainers: "Trainers", membership: "Membership" },
    bookCta: "Book a Class",
    hero: {
      eyebrow: "Trainers",
      title: "매 수업을 함께하는 사람들",
      body: "작은 스튜디오, 세 명의 전담 강사. 그날그날 배정되는 강사가 아니라 내 몸을 이미 알고 있는 강사와 매번 만납니다.",
    },
    trainers: [
      { name: "Yuna", role: "원장 · 8년차", image: "https://images.unsplash.com/photo-1685342744654-3cd3f48060e4?w=600&q=80&auto=format&fit=crop" },
      { name: "Soo", role: "리포머 전담 · 6년차", image: "https://images.unsplash.com/photo-1542996966-2e31c00bae31?w=600&q=80&auto=format&fit=crop" },
      { name: "Hana", role: "재활 전문 · 7년차", image: "https://images.unsplash.com/photo-1682917265558-f3dbf6507e5b?w=600&q=80&auto=format&fit=crop" },
    ],
    footer: "© 2025 MOA · Seoul Seongsu",
  },
} as const;

export default function MoaPilatesTrainers({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/moa-pilates");
  const programsPath = localePath(lang, "/portfolio/moa-pilates/programs");
  const trainersPath = localePath(lang, "/portfolio/moa-pilates/trainers");
  const membershipPath = localePath(lang, "/portfolio/moa-pilates/membership");

  return (
    <div className="bg-[#0e0d0c] text-white">
      <header className="border-b border-white/10 bg-[#0e0d0c]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="text-xl font-bold tracking-[0.3em]">{t.brand.short}</Link>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-white/70 md:flex">
            <Link href={programsPath} className="transition hover:text-white">{t.nav.programs}</Link>
            <Link href={trainersPath} className="font-semibold text-white">{t.nav.trainers}</Link>
            <Link href={membershipPath} className="transition hover:text-white">{t.nav.membership}</Link>
          </nav>
          <Link href={`${home}#booking`} className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-widest">
            {t.bookCta}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t.hero.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-light md:text-5xl break-keep text-balance">{t.hero.title}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-white/70 break-keep text-pretty">{t.hero.body}</p>
      </section>

      <section className="bg-white py-24 text-[#0e0d0c]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {t.trainers.map((tr) => (
              <div key={tr.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-black/5">
                  <Image src={tr.image} alt={tr.name} fill className="object-cover" />
                </div>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="text-2xl break-keep text-balance">{tr.name}</h3>
                  <span className="text-xs uppercase tracking-wide text-black/50">{tr.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-xs uppercase tracking-widest text-white/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <Link href={home} className="font-bold text-white/80 tracking-[0.3em]">{t.brand.full}</Link>
          <div>{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
