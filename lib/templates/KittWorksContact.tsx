"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    domain: "kade.works",
    nav: ["index", "work", "about", "contact"],
    contactEmail: "hello@kade.works",
    label: "04 — CONTACT",
    titlePre: "Currently on ",
    titleAccent: "two engagements.",
    titlePost: "Taking one slot for the second half.",
    directLabel: "DIRECT",
    ctaSecondary: "Schedule a 30-min call →",
    note: "Replies within 2 business days.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Email",
      emailPlaceholder: "jane@company.com",
      messageLabel: "Project",
      messagePlaceholder: "A line or two about the project, timeline, and budget.",
      submit: "Send inquiry →",
    },
    footer: { stamp: "kade.works · last updated 2025-04-27", links: ["read.cv", "are.na", "linkedin"] },
  },
  ko: {
    domain: "kitt.works",
    nav: ["index", "work", "about", "contact"],
    contactEmail: "hello@kitt.works",
    label: "04 — CONTACT",
    titlePre: "지금 진행 중인 의뢰는 ",
    titleAccent: "2건.",
    titlePost: "하반기 1자리 받습니다.",
    directLabel: "DIRECT",
    ctaSecondary: "Schedule a 30-min call →",
    note: "영업일 기준 2일 이내 회신드립니다.",
    form: {
      nameLabel: "이름",
      namePlaceholder: "홍길동",
      emailLabel: "이메일",
      emailPlaceholder: "jane@company.com",
      messageLabel: "프로젝트",
      messagePlaceholder: "프로젝트 개요, 일정, 예산을 간단히 적어주세요.",
      submit: "문의 보내기 →",
    },
    footer: { stamp: "kitt.works · last updated 2025-04-27", links: ["read.cv", "are.na", "linkedin"] },
  },
} as const;

export default function KittWorksContact({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/kitt-works");
  const workPath = localePath(lang, "/portfolio/kitt-works/work");
  const aboutPath = localePath(lang, "/portfolio/kitt-works/about");
  const contactPath = localePath(lang, "/portfolio/kitt-works/contact");
  const navPaths: Record<string, string> = { index: home, work: workPath, about: aboutPath, contact: contactPath };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header ref={ref} className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="font-mono text-sm">
            {t.domain}
          </Link>
          <nav className="hidden gap-8 font-mono text-xs text-neutral-500 md:flex">
            {t.nav.map((n) => (
              <Link
                key={n}
                href={navPaths[n]}
                className={n === "contact" ? "text-neutral-900" : "transition hover:text-neutral-900"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={`mailto:${t.contactEmail}`} className="font-mono text-xs underline decoration-dotted underline-offset-4">
              {t.contactEmail}
            </a>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center border border-neutral-300 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-neutral-200 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 font-mono text-xs text-neutral-500">
              {t.nav.map((n) => (
                <Link
                  key={n}
                  href={navPaths[n]}
                  onClick={() => setOpen(false)}
                  className={n === "contact" ? "py-2 text-neutral-900" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <a
              href={`mailto:${t.contactEmail}`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block font-mono text-xs underline decoration-dotted underline-offset-4"
            >
              {t.contactEmail}
            </a>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="font-mono text-xs text-neutral-500 md:col-span-3">{t.label}</p>
          <div className="md:col-span-9">
            <h1 className="text-3xl leading-tight md:text-5xl break-keep text-balance">
              {t.titlePre}
              <span className="text-neutral-400">{t.titleAccent}</span>
              <br className="hidden md:block" />
              {t.titlePost}
            </h1>

            <form className="mt-14 grid gap-6 border-t border-neutral-200 pt-14 md:max-w-xl">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                  {t.form.nameLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.form.namePlaceholder}
                  className="mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-neutral-900"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                  {t.form.emailLabel}
                </label>
                <input
                  type="email"
                  placeholder={t.form.emailPlaceholder}
                  className="mt-2 w-full border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-neutral-900"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                  {t.form.messageLabel}
                </label>
                <textarea
                  rows={4}
                  placeholder={t.form.messagePlaceholder}
                  className="mt-2 w-full resize-none border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-neutral-900"
                />
              </div>
              <button
                type="button"
                className="mt-2 w-fit border border-neutral-900 px-5 py-3 font-mono text-xs uppercase tracking-widest"
              >
                {t.form.submit}
              </button>
              <p className="font-mono text-[11px] text-neutral-400">{t.note}</p>
            </form>

            <div className="mt-14 grid gap-4 border-t border-neutral-200 pt-14 md:max-w-md">
              <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">{t.directLabel}</p>
              <a
                href={`mailto:${t.contactEmail}`}
                className="border border-neutral-900 px-5 py-3 text-center font-mono text-xs uppercase tracking-widest"
              >
                {t.contactEmail}
              </a>
              <a className="border border-neutral-300 px-5 py-3 text-center font-mono text-xs uppercase tracking-widest text-neutral-600">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 font-mono text-[11px] text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div className="break-keep text-pretty">{t.footer.stamp}</div>
          <div className="flex gap-5">
            {t.footer.links.map((l) => (
              <a key={l}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
