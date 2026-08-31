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
      eyebrow: "WILLIAMSBURG · SINCE 2021",
      title: ["Move quietly,", "stand stronger."],
      body: "A six-mat studio on a quiet Brooklyn block. Same room, same hands — your posture changes one session at a time.",
    },
    programsTeaser: {
      eyebrow: "Programs",
      title: "Three ways to train",
      body: "Group Reformer, 1:1 Private, or Morning Mat — pick the format that fits your schedule.",
      cta: "View Programs →",
    },
    trainersTeaser: {
      eyebrow: "Trainers",
      title: "Meet the team",
      body: "Three trainers, one small studio — every class is taught by someone who already knows your body.",
      cta: "View Trainers →",
    },
    membershipTeaser: {
      eyebrow: "Membership",
      title: "Pay only for what you use.",
      body: "Compare three simple plans — no long contracts, no auto-renew surprises.",
      cta: "View Membership →",
    },
    bottomCta: {
      title: "Your first class is on us.",
      body: "One 1:1 intake — together we'll figure out which class fits.",
      button: "Book a Free Trial →",
    },
    footer: "© 2025 FORM & FLOW · Brooklyn",
  },
  ko: {
    brand: { short: "MOA", full: "MOA PILATES" },
    nav: { programs: "Programs", trainers: "Trainers", membership: "Membership" },
    bookCta: "Book a Class",
    hero: {
      eyebrow: "SEONGSU · SINCE 2021",
      title: ["Move quietly,", "stand stronger."],
      body: "성수의 작은 골목, 6인 정원 스튜디오. 매일 같은 자리에서 한 사람의 자세가 달라집니다.",
    },
    programsTeaser: {
      eyebrow: "Programs",
      title: "당신에게 맞는 클래스",
      body: "그룹 리포머, 1:1 프라이빗, 모닝 매트 — 지금 컨디션과 일정에 맞는 클래스를 선택하세요.",
      cta: "View Programs →",
    },
    trainersTeaser: {
      eyebrow: "Trainers",
      title: "우리의 강사들",
      body: "작은 스튜디오, 세 명의 전담 강사 — 내 몸을 이미 알고 있는 강사와 매번 만납니다.",
      cta: "View Trainers →",
    },
    membershipTeaser: {
      eyebrow: "Membership",
      title: "필요한 만큼만, 정직하게.",
      body: "장기 약정 없이, 자주 오는 만큼만 결제하는 세 가지 플랜을 비교해보세요.",
      cta: "View Membership →",
    },
    bottomCta: {
      title: "첫 수업, 무료입니다.",
      body: "한 번의 1:1 진단으로 어떤 클래스가 맞을지 함께 정해드립니다.",
      button: "무료 체험 예약 →",
    },
    footer: "© 2025 MOA · Seoul Seongsu",
  },
} as const;

export default function MoaPilates({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const programsPath = localePath(lang, "/portfolio/moa-pilates/programs");
  const trainersPath = localePath(lang, "/portfolio/moa-pilates/trainers");
  const membershipPath = localePath(lang, "/portfolio/moa-pilates/membership");
  return (
    <div className="bg-[#0e0d0c] text-white">
      <header ref={ref} className="border-b border-white/10 bg-[#0e0d0c]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold tracking-[0.3em]">{t.brand.short}</div>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-white/70 md:flex">
            <Link href={programsPath} className="transition hover:text-white">{t.nav.programs}</Link>
            <Link href={trainersPath} className="transition hover:text-white">{t.nav.trainers}</Link>
            <Link href={membershipPath} className="transition hover:text-white">{t.nav.membership}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#booking" className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-widest">
              {t.bookCta}
            </a>
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
              <Link href={programsPath} onClick={() => setOpen(false)} className="py-2">{t.nav.programs}</Link>
              <Link href={trainersPath} onClick={() => setOpen(false)} className="py-2">{t.nav.trainers}</Link>
              <Link href={membershipPath} onClick={() => setOpen(false)} className="py-2">{t.nav.membership}</Link>
            </nav>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full border border-white px-5 py-2 text-xs uppercase tracking-widest"
            >
              {t.bookCta}
            </a>
          </div>
        )}
      </header>

      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1800&q=80&auto=format&fit=crop"
          alt={t.brand.full}
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-[#0e0d0c]/40 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">{t.hero.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-light leading-[1.15] md:text-7xl md:leading-[1.05] break-keep text-balance">
            {t.hero.title[0]}<br className="hidden md:block" />
            <span className="italic font-serif">{t.hero.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-md text-white/70 break-keep text-pretty">
            {t.hero.body}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { ...t.programsTeaser, href: programsPath },
            { ...t.trainersTeaser, href: trainersPath },
            { ...t.membershipTeaser, href: membershipPath },
          ].map((teaser) => (
            <div key={teaser.eyebrow}>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{teaser.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-light break-keep text-balance">{teaser.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60 break-keep text-pretty">{teaser.body}</p>
              <Link href={teaser.href} className="mt-6 inline-block text-xs uppercase tracking-[0.3em] text-white/80 transition hover:text-white">
                {teaser.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="scroll-mt-24 border-t border-white/10 bg-[#0e0d0c] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-light md:text-5xl break-keep text-balance">{t.bottomCta.title}</h2>
          <p className="mt-4 text-white/60 break-keep text-pretty">{t.bottomCta.body}</p>
          <a className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0e0d0c]">
            {t.bottomCta.button}
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-xs uppercase tracking-widest text-white/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <div className="font-bold text-white/80 tracking-[0.3em]">{t.brand.full}</div>
          <div>{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
