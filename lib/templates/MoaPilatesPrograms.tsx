"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { short: "FORM & FLOW", full: "FORM & FLOW PILATES" },
    nav: { programs: "Programs", trainers: "Trainers", membership: "Membership" },
    bookCta: "Book a Class",
    hero: {
      eyebrow: "Programs",
      title: "Three ways to train",
      body: "Group Reformer, 1:1 Private, or Morning Mat — pick the format that fits your schedule and where you are today. Every class runs in the same six-mat room, with the same small team.",
    },
    programs: [
      {
        title: "Group Reformer",
        duration: "50 min",
        desc: "Up to 6 students per class. Built around posture correction and a stronger core.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1000&q=80&auto=format&fit=crop",
      },
      {
        title: "1:1 Private",
        duration: "50 min",
        desc: "A program designed around your body and pain points, with a dedicated trainer.",
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1000&q=80&auto=format&fit=crop",
      },
      {
        title: "Morning Mat",
        duration: "40 min",
        desc: "6:30 AM mat work — a quiet, full-body start before the day begins.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 FORM & FLOW · Brooklyn",
  },
  ko: {
    brand: { short: "MOA", full: "MOA PILATES" },
    nav: { programs: "Programs", trainers: "Trainers", membership: "Membership" },
    bookCta: "Book a Class",
    hero: {
      eyebrow: "Programs",
      title: "당신에게 맞는 클래스",
      body: "그룹 리포머, 1:1 프라이빗, 모닝 매트 — 지금 컨디션과 일정에 맞는 클래스를 선택하세요. 모든 수업은 같은 6인 정원 스튜디오, 같은 팀이 진행합니다.",
    },
    programs: [
      {
        title: "그룹 리포머",
        duration: "50분",
        desc: "최대 6인 소수정예 리포머 클래스. 자세 교정과 코어 강화에 최적.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1000&q=80&auto=format&fit=crop",
      },
      {
        title: "1:1 프라이빗",
        duration: "50분",
        desc: "개인 체형·통증에 맞춘 완전 맞춤 수업. 전담 강사 배정.",
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1000&q=80&auto=format&fit=crop",
      },
      {
        title: "모닝 매트",
        duration: "40분",
        desc: "출근 전 6시 30분, 하루를 가볍게 시작하는 매트 클래스.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 MOA · Seoul Seongsu",
  },
} as const;

export default function MoaPilatesPrograms({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/moa-pilates");
  const programsPath = localePath(lang, "/portfolio/moa-pilates/programs");
  const trainersPath = localePath(lang, "/portfolio/moa-pilates/trainers");
  const membershipPath = localePath(lang, "/portfolio/moa-pilates/membership");

  return (
    <div className="bg-[#0e0d0c] text-white">
      <header ref={ref} className="border-b border-white/10 bg-[#0e0d0c]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="text-xl font-bold tracking-[0.3em]">{t.brand.short}</Link>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-white/70 md:flex">
            <Link href={programsPath} className="font-semibold text-white">{t.nav.programs}</Link>
            <Link href={trainersPath} className="transition hover:text-white">{t.nav.trainers}</Link>
            <Link href={membershipPath} className="transition hover:text-white">{t.nav.membership}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={`${home}#booking`} className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-widest">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs uppercase tracking-widest text-white/70">
              <Link href={programsPath} onClick={() => setOpen(false)} className="py-2 font-semibold text-white">{t.nav.programs}</Link>
              <Link href={trainersPath} onClick={() => setOpen(false)} className="py-2">{t.nav.trainers}</Link>
              <Link href={membershipPath} onClick={() => setOpen(false)} className="py-2">{t.nav.membership}</Link>
            </nav>
            <Link
              href={`${home}#booking`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full border border-white px-5 py-2 text-xs uppercase tracking-widest"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t.hero.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-light md:text-5xl break-keep text-balance">{t.hero.title}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-white/70 break-keep text-pretty">{t.hero.body}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {t.programs.map((p) => (
            <article key={p.title} className="group overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="text-xl break-keep text-balance">{p.title}</h3>
                <span className="text-xs uppercase tracking-widest text-white/50">{p.duration}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60 break-keep text-pretty">{p.desc}</p>
            </article>
          ))}
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
