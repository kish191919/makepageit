"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "jenna",
    nav: ["works", "about", "shop", "contact"],
    cta: "Hire me ✏️",
    label: "Contact",
    title: "Inquiries by email!",
    body: "I take six commissions per quarter — book covers, packaging, and editorial. I reply within a week.",
    email: "jenna@jennacoleillustration.com",
    directLabel: "Direct",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Email",
      emailPlaceholder: "jane@company.com",
      messageLabel: "Project",
      messagePlaceholder: "A line or two about the project, timeline, and budget.",
      submit: "Send inquiry →",
    },
    note: "Replies within a week. Currently booking for next quarter.",
    footer: "© 2025 Jenna Cole Illustration · drawn by hand, sent kindly 🌱",
  },
  ko: {
    brand: "jini",
    nav: ["works", "about", "shop", "contact"],
    cta: "의뢰하기 ✏️",
    label: "문의",
    title: "의뢰는 메일로 받아요!",
    body: "분기별로 6건만 받습니다 — 단행본 표지, 패키지, 에디토리얼. 1주일 안에 회신드려요.",
    email: "jini@illustration.kr",
    directLabel: "다이렉트",
    form: {
      nameLabel: "이름",
      namePlaceholder: "홍길동",
      emailLabel: "이메일",
      emailPlaceholder: "jane@company.com",
      messageLabel: "프로젝트",
      messagePlaceholder: "프로젝트 개요, 일정, 예산을 간단히 적어주세요.",
      submit: "문의 보내기 →",
    },
    note: "1주일 안에 회신드려요. 다음 분기 예약을 받고 있습니다.",
    footer: "© 2025 jini illustration · 손으로 그려서, 다정하게 보냅니다 🌱",
  },
} as const;

export default function JiniIllustrationContact({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/jini-illustration");
  const worksPath = localePath(lang, "/portfolio/jini-illustration/works");
  const aboutPath = localePath(lang, "/portfolio/jini-illustration/about");
  const shopPath = localePath(lang, "/portfolio/jini-illustration/shop");
  const contactPath = localePath(lang, "/portfolio/jini-illustration/contact");
  const navPaths: Record<string, string> = { works: worksPath, about: aboutPath, shop: shopPath, contact: contactPath };

  return (
    <div
      className="min-h-screen text-[#3a2e2a]"
      style={{
        backgroundColor: "#fff8ec",
        backgroundImage:
          "radial-gradient(#e9dec5 1px, transparent 1px), radial-gradient(#e9dec5 1px, #fff8ec 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <header ref={ref} className="border-b-2 border-dashed border-[#3a2e2a]/20 bg-[#fff8ec]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2 text-2xl font-black tracking-tight">
            <span>🖍️</span> {t.brand}
            <span className="text-[#ef476f]">.</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-bold md:flex">
            {t.nav.map((n) => (
              <Link
                key={n}
                href={navPaths[n]}
                className={n === "contact" ? "rounded-full bg-[#ffd166] px-3 py-1" : "transition hover:opacity-70"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={`mailto:${t.email}`} className="rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]">
              {t.cta}
            </a>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#3a2e2a] md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t-2 border-dashed border-[#3a2e2a]/20 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-bold">
              {t.nav.map((n) => (
                <Link
                  key={n}
                  href={navPaths[n]}
                  onClick={() => setOpen(false)}
                  className={n === "contact" ? "py-2 text-[#ef476f]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <a
              href={`mailto:${t.email}`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]"
            >
              {t.cta}
            </a>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <span className="inline-block rotate-[-2deg] rounded-full bg-[#06d6a0] px-3 py-1 text-xs font-bold text-white">
          {t.label}
        </span>
        <h1 className="mt-6 text-4xl font-black leading-[1.15] md:text-6xl break-keep text-balance">{t.title}</h1>
        <p className="mt-6 max-w-xl text-base text-[#5b4a44] break-keep text-pretty">{t.body}</p>

        <form className="mt-10 grid gap-5 rounded-3xl border-4 border-[#3a2e2a] bg-white p-6 shadow-[8px_8px_0_#3a2e2a] md:p-8">
          <div>
            <label className="text-xs font-black uppercase tracking-widest text-[#5b4a44]">{t.form.nameLabel}</label>
            <input
              type="text"
              placeholder={t.form.namePlaceholder}
              className="mt-2 w-full rounded-xl border-2 border-[#3a2e2a]/30 bg-[#fff8ec] px-4 py-2.5 text-sm outline-none focus:border-[#3a2e2a]"
            />
          </div>
          <div>
            <label className="text-xs font-black uppercase tracking-widest text-[#5b4a44]">{t.form.emailLabel}</label>
            <input
              type="email"
              placeholder={t.form.emailPlaceholder}
              className="mt-2 w-full rounded-xl border-2 border-[#3a2e2a]/30 bg-[#fff8ec] px-4 py-2.5 text-sm outline-none focus:border-[#3a2e2a]"
            />
          </div>
          <div>
            <label className="text-xs font-black uppercase tracking-widest text-[#5b4a44]">{t.form.messageLabel}</label>
            <textarea
              rows={4}
              placeholder={t.form.messagePlaceholder}
              className="mt-2 w-full resize-none rounded-xl border-2 border-[#3a2e2a]/30 bg-[#fff8ec] px-4 py-2.5 text-sm outline-none focus:border-[#3a2e2a]"
            />
          </div>
          <button
            type="button"
            className="mt-2 w-fit rounded-full bg-[#ef476f] px-6 py-3 text-sm font-bold text-white"
          >
            {t.form.submit}
          </button>
          <p className="text-xs text-[#5b4a44]">{t.note}</p>
        </form>

        <div className="mt-10 rounded-3xl border-4 border-[#3a2e2a] bg-[#ffd166] p-6 text-center shadow-[6px_6px_0_#3a2e2a]">
          <p className="text-xs font-black uppercase tracking-widest text-[#3a2e2a]/70">{t.directLabel}</p>
          <a href={`mailto:${t.email}`} className="mt-2 block text-lg font-black break-keep text-pretty">
            {t.email} ✉️
          </a>
        </div>
      </section>

      <footer className="border-t-2 border-dashed border-[#3a2e2a]/20 py-8 text-center text-xs text-[#5b4a44] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
