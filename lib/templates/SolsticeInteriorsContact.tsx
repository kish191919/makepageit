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
    eyebrow: "START A PROJECT",
    title: ["Let's talk about", "your space."],
    body: "Every project starts with a short conversation about how you live and what isn't working yet. We'll follow up within two business days with next steps.",
    rows: [
      { label: "CALL", value: "(512) 555-0173" },
      { label: "EMAIL", value: "hello@solsticeinteriors.com" },
      { label: "STUDIO", value: "1804 Barton Springs Rd, Studio 3, Austin TX 78704" },
      { label: "HOURS", value: "Mon–Fri, 9am–5pm CT" },
    ],
    formTitle: "Start Your Project",
    formNote: "Tell us a little about your home — a designer will reach out to schedule your consult.",
    placeholders: {
      name: "Full name",
      phone: "Phone number",
      type: { default: "Project type", t1: "Full Home", t2: "Single Room", t3: "New Construction" },
      budget: { default: "Budget range", b1: "$25k – $75k", b2: "$75k – $150k", b3: "$150k+" },
      message: "Tell us about your space and goals",
    },
    submit: "Request Your Consult",
    footer: "© 2025 Solstice Interiors. All rights reserved.",
  },
  ko: {
    brand: { name: "솔스티스 인테리어", tag: "레지덴셜 디자인 스튜디오" },
    nav: { portfolio: "포트폴리오", services: "서비스", process: "프로세스", about: "소개", contact: "문의" },
    bookCta: "디자인 상담 예약",
    eyebrow: "START A PROJECT",
    title: ["당신의 공간에 대해", "이야기 나눠요."],
    body: "모든 프로젝트는 지금 어떻게 지내고 계신지, 무엇이 아직 아쉬운지에 대한 짧은 대화에서 시작합니다. 영업일 기준 2일 이내에 다음 단계를 안내드립니다.",
    rows: [
      { label: "CALL", value: "(512) 555-0173" },
      { label: "EMAIL", value: "hello@solsticeinteriors.com" },
      { label: "STUDIO", value: "1804 Barton Springs Rd, Studio 3, Austin TX 78704" },
      { label: "HOURS", value: "월–금, 오전 9시–오후 5시 (중부시간)" },
    ],
    formTitle: "프로젝트 시작하기",
    formNote: "지금 살고 계신 공간에 대해 간단히 알려주시면, 디자이너가 상담 일정을 잡기 위해 연락드립니다.",
    placeholders: {
      name: "성함",
      phone: "연락처",
      type: { default: "프로젝트 유형", t1: "집 전체", t2: "단일 공간", t3: "신축" },
      budget: { default: "예산 범위", b1: "$25k – $75k", b2: "$75k – $150k", b3: "$150k 이상" },
      message: "공간과 원하시는 방향을 알려주세요",
    },
    submit: "상담 신청하기",
    footer: "© 2025 솔스티스 인테리어. All rights reserved.",
  },
} as const;

export default function SolsticeInteriorsContact({ lang }: { lang: Lang }) {
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
            <Link href={servicesPath} className="transition hover:text-[#c1652f]">{t.nav.services}</Link>
            <Link href={processPath} className="transition hover:text-[#c1652f]">{t.nav.process}</Link>
            <Link href={aboutPath} className="transition hover:text-[#c1652f]">{t.nav.about}</Link>
            <Link href={contactPath} className="text-[#c1652f]">{t.nav.contact}</Link>
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
              <Link href={servicesPath} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={processPath} onClick={() => setOpen(false)} className="py-2">{t.nav.process}</Link>
              <Link href={aboutPath} onClick={() => setOpen(false)} className="py-2">{t.nav.about}</Link>
              <Link href={contactPath} onClick={() => setOpen(false)} className="py-2 text-[#c1652f]">{t.nav.contact}</Link>
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
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c1652f]">{t.eyebrow}</p>
            <h1 className="mt-3 font-serif text-3xl leading-tight md:text-5xl break-keep text-balance">
              {t.title[0]}
              <br className="hidden md:block" />
              {t.title[1]}
            </h1>
            <p className="mt-6 leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{t.body}</p>
            <dl className="mt-10 space-y-3 border-t border-[#2b241d]/10 pt-8 text-sm">
              {t.rows.map((r) => (
                <div key={r.label} className="flex gap-6">
                  <dt className="w-20 font-semibold tracking-widest text-[#2b241d]/50">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop"
                alt={t.brand.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <form className="rounded-2xl bg-[#c1652f] p-6 text-white sm:p-10">
            <h2 className="font-serif text-2xl break-keep text-balance">{t.formTitle}</h2>
            <p className="mt-2 text-xs text-white/70 break-keep text-pretty">{t.formNote}</p>
            <div className="mt-8 space-y-4">
              <input
                placeholder={t.placeholders.name}
                className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/60 outline-none"
              />
              <input
                placeholder={t.placeholders.phone}
                className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/60 outline-none"
              />
              <select className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/80 outline-none">
                <option className="text-[#2b241d]">{t.placeholders.type.default}</option>
                <option className="text-[#2b241d]">{t.placeholders.type.t1}</option>
                <option className="text-[#2b241d]">{t.placeholders.type.t2}</option>
                <option className="text-[#2b241d]">{t.placeholders.type.t3}</option>
              </select>
              <select className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/80 outline-none">
                <option className="text-[#2b241d]">{t.placeholders.budget.default}</option>
                <option className="text-[#2b241d]">{t.placeholders.budget.b1}</option>
                <option className="text-[#2b241d]">{t.placeholders.budget.b2}</option>
                <option className="text-[#2b241d]">{t.placeholders.budget.b3}</option>
              </select>
              <textarea
                rows={3}
                placeholder={t.placeholders.message}
                className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/60 outline-none"
              />
            </div>
            <button className="mt-8 w-full rounded-full bg-white py-3.5 text-xs font-semibold tracking-[0.3em] text-[#c1652f]">
              {t.submit}
            </button>
          </form>
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
