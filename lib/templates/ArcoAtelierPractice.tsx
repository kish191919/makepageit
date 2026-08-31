"use client";

import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: ["Work", "Practice", "Press", "Contact"],
    inquireCta: "Inquire",
    eyebrow: "Practice",
    title: ["To build", "is to think."],
    intro: "Arco is a small practice — twelve architects and four interior designers. We don't take on more than six projects a year.",
    statsTitle: "In numbers",
    stats: [
      { v: "2009", l: "Founded" },
      { v: "16", l: "People" },
      { v: "6", l: "Projects / year" },
      { v: "26", l: "Buildings built" },
    ],
    principlesTitle: "How we work",
    principles: [
      { n: "01", title: "Fewer projects, full attention", body: "We turn down more work than we take. Every project gets the same architect from first sketch to final walkthrough." },
      { n: "02", title: "Everything made in-house", body: "Every drawing is made in our office. Every model is built by hand in our office. That is how Arco handles time." },
      { n: "03", title: "Concrete as vocabulary", body: "We return to the same materials — concrete, glass, raw timber — because restraint is what lets a site speak first." },
      { n: "04", title: "Design with time, not against it", body: "A building should read differently at 7am and at dusk. We design for light before we design for form." },
    ],
    footer: {
      offices: [
        { label: "New York Office", lines: ["67 Mott Street, 3F, NY 10013", "+1 (212) 555-0099"] },
        { label: "Los Angeles Office", lines: ["188 Beverly Blvd, LA 90048", "+1 (213) 555-0099"] },
        { label: "Inquiries", lines: ["studio@arco-atelier.com"] },
      ],
      copyright: "© 2025 ARCO ATELIER — All works are copyright of the firm.",
    },
  },
  ko: {
    nav: ["Work", "Practice", "Press", "Contact"],
    inquireCta: "Inquire",
    eyebrow: "Practice",
    title: ["짓는 것은", "생각하는 것이다."],
    intro: "아르코는 12명의 건축가와 4명의 인테리어 디자이너로 구성된 작은 사무소입니다. 우리는 1년에 6개 이상의 프로젝트를 받지 않습니다.",
    statsTitle: "In Numbers",
    stats: [
      { v: "2009", l: "설립" },
      { v: "16", l: "인원" },
      { v: "6", l: "연간 프로젝트" },
      { v: "26", l: "완공 건물" },
    ],
    principlesTitle: "How We Work",
    principles: [
      { n: "01", title: "적은 프로젝트, 온전한 집중", body: "우리는 맡는 것보다 더 많은 의뢰를 거절합니다. 모든 프로젝트는 첫 스케치부터 마지막 인도까지 같은 건축가가 맡습니다." },
      { n: "02", title: "모든 것을 사무소 안에서", body: "모든 도면은 사무소 안에서, 모든 모형은 사무소 안에서 손으로 만들어집니다. 아르코는 그렇게 시간을 다루는 곳입니다." },
      { n: "03", title: "콘크리트라는 언어", body: "우리는 콘크리트, 유리, 원목 같은 재료로 돌아옵니다. 절제가 있어야 대지가 먼저 말할 수 있기 때문입니다." },
      { n: "04", title: "시간과 함께 설계하기", body: "건물은 오전 7시와 해질녘에 다르게 읽혀야 합니다. 우리는 형태보다 빛을 먼저 설계합니다." },
    ],
    footer: {
      offices: [
        { label: "Seoul Office", lines: ["서울 종로구 자하문로 67, 3F", "+82 2 555 0099"] },
        { label: "Daegu Office", lines: ["대구 중구 동덕로 188", "+82 53 555 0099"] },
        { label: "Inquiries", lines: ["studio@arco.kr"] },
      ],
      copyright: "© 2025 ARCO ATELIER — All works are copyright of the firm.",
    },
  },
} as const;

export default function ArcoAtelierPractice({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/arco-atelier");
  const workPath = localePath(lang, "/portfolio/arco-atelier/work");
  const practicePath = localePath(lang, "/portfolio/arco-atelier/practice");
  const pressPath = localePath(lang, "/portfolio/arco-atelier/press");
  const contactPath = localePath(lang, "/portfolio/arco-atelier/contact");
  const navPaths = [workPath, practicePath, pressPath, contactPath];

  return (
    <div className="min-h-screen bg-[#ededed] text-black">
      <header ref={ref} className="border-b-2 border-black bg-[#ededed]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href={home} className="text-2xl font-black tracking-tighter">ARCO/</Link>
          <nav className="hidden gap-10 text-xs font-bold uppercase tracking-widest md:flex">
            {t.nav.map((n, i) =>
              navPaths[i] === practicePath ? (
                <Link key={n} href={navPaths[i]} className="underline underline-offset-4">{n}</Link>
              ) : (
                <Link key={n} href={navPaths[i]}>{n}</Link>
              )
            )}
          </nav>
          <div className="flex items-center gap-3">
            <Link href={contactPath} className="border-2 border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#ededed]">
              {t.inquireCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center border-2 border-black md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t-2 border-black px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs font-bold uppercase tracking-widest">
              {t.nav.map((n, i) => (
                <Link
                  key={n}
                  href={navPaths[i]}
                  onClick={() => setOpen(false)}
                  className={navPaths[i] === practicePath ? "py-2 underline underline-offset-4" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <Link
              href={contactPath}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block border-2 border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#ededed]"
            >
              {t.inquireCta}
            </Link>
          </div>
        )}
      </header>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.4em]">{t.eyebrow}</p>
          <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight md:text-7xl break-keep text-balance">
            {t.title[0]}
            <br />
            {t.title[1]}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg break-keep text-pretty">{t.intro}</p>
        </div>
      </section>

      <section className="border-b-2 border-black bg-black text-[#ededed]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em]">{t.statsTitle}</p>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.l} className="border-t-2 border-white/30 pt-4">
                <div className="text-4xl font-black md:text-5xl">{s.v}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-black tracking-tight md:text-6xl break-keep text-balance">{t.principlesTitle}</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            {t.principles.map((p) => (
              <article key={p.n} className="border-t-2 border-black pt-6">
                <span className="font-mono text-sm">{p.n}</span>
                <h3 className="mt-3 text-2xl font-black leading-tight break-keep text-balance">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-black/70 break-keep text-pretty">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#ededed]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-4">
          <Link href={home} className="text-3xl font-black tracking-tighter">ARCO/</Link>
          {t.footer.offices.map((o) => (
            <div key={o.label} className="text-sm">
              <p className="font-bold uppercase tracking-widest">{o.label}</p>
              {o.lines.map((line, i) => (
                <p key={i} className={i === 0 ? "mt-2 text-black/60 break-keep text-pretty" : "text-black/60 break-keep text-pretty"}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t-2 border-black px-6 py-4 text-center font-mono text-[11px] break-keep text-pretty">
          {t.footer.copyright}
        </div>
      </footer>
    </div>
  );
}
