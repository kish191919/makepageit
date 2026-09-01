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
    eyebrow: "PROCESS",
    title: "How a project comes together.",
    intro: "Every project moves through the same four stages — paced to your home, not a template. Here's what to expect at each one.",
    process: [
      {
        n: "01",
        title: "Discover",
        duration: "1–2 weeks",
        desc: "We walk your home, listen to how you actually live, and set a scope and budget together.",
        detail: "This starts with an in-home walkthrough and a candid conversation about how each room is really used — not how it looks in photos. We leave with a shared scope, a realistic budget range, and a project timeline before any design work begins.",
      },
      {
        n: "02",
        title: "Design",
        duration: "3–6 weeks",
        desc: "Concept boards, floor plans, and 3D renders — refined with you until every room feels right.",
        detail: "You'll see concept boards, layout options, and photoreal 3D renders for every space. We typically go through two rounds of revisions, so nothing gets ordered until you've seen exactly how it will look.",
      },
      {
        n: "03",
        title: "Source",
        duration: "4–10 weeks",
        desc: "We source furnishings, fixtures, and materials, and manage trades and installation start to finish.",
        detail: "This stage runs largely behind the scenes — sourcing furniture and fixtures, tracking lead times, and coordinating any trades your project needs. You get a running order tracker so you always know what's arrived and what's still in transit.",
      },
      {
        n: "04",
        title: "Reveal",
        duration: "1 day, plus a follow-up",
        desc: "Styling day: the final layer of art, textiles, and objects that make the space feel finished.",
        detail: "On reveal day, our team installs everything and adds the final layer — art, textiles, and objects — while you're out of the house. We return for a follow-up visit a few weeks later to fine-tune anything that needs it.",
      },
    ],
    faqTitle: "Common questions",
    faq: [
      { q: "How long does a full home take?", a: "Most whole-house projects run three to six months from first walkthrough to reveal day, depending on scope and how much construction is involved." },
      { q: "Do you work with our contractor?", a: "Yes — we regularly partner with clients' existing architects and contractors, or can recommend trades we've worked with before." },
      { q: "What if I already own furniture I love?", a: "We design around pieces you want to keep. Every project starts by identifying what stays before we source what's new." },
    ],
    ctaTitle: "Ready to start Discover?",
    ctaBody: "The first step is a short conversation about your home and your goals.",
    ctaButton: "Book a Consult",
    footer: "© 2025 Solstice Interiors. All rights reserved.",
  },
  ko: {
    brand: { name: "솔스티스 인테리어", tag: "레지덴셜 디자인 스튜디오" },
    nav: { portfolio: "포트폴리오", services: "서비스", process: "프로세스", about: "소개", contact: "문의" },
    bookCta: "디자인 상담 예약",
    eyebrow: "PROCESS",
    title: "프로젝트는 이렇게 진행됩니다.",
    intro: "모든 프로젝트는 동일한 4단계를 거치지만, 속도는 정형화된 틀이 아니라 각 집에 맞춰 조절됩니다. 각 단계에서 무엇을 기대할 수 있는지 안내합니다.",
    process: [
      {
        n: "01",
        title: "발견",
        duration: "1~2주",
        desc: "댁을 직접 둘러보고 실제 생활 방식을 들으며, 함께 범위와 예산을 정합니다.",
        detail: "사진에 보이는 모습이 아니라 실제로 각 공간을 어떻게 쓰고 계신지에 대한 솔직한 대화로 시작합니다. 디자인 작업에 들어가기 전에 함께 정한 범위와 현실적인 예산, 프로젝트 일정을 먼저 확정합니다.",
      },
      {
        n: "02",
        title: "디자인",
        duration: "3~6주",
        desc: "컨셉 보드, 평면도, 3D 렌더링을 통해 모든 공간이 마음에 들 때까지 함께 다듬습니다.",
        detail: "모든 공간에 대해 컨셉 보드, 레이아웃 옵션, 실사에 가까운 3D 렌더링을 보여드립니다. 보통 2회의 수정 과정을 거치며, 정확히 어떤 모습이 될지 확인하기 전까지는 아무것도 주문하지 않습니다.",
      },
      {
        n: "03",
        title: "소싱",
        duration: "4~10주",
        desc: "가구·조명·마감재를 소싱하고, 시공부터 설치까지 전 과정을 책임지고 관리합니다.",
        detail: "대부분 눈에 보이지 않는 곳에서 진행됩니다 — 가구와 픽스처를 소싱하고, 입고 일정을 추적하며, 필요한 시공 업체를 조율합니다. 실시간 주문 현황표를 통해 무엇이 도착했고 무엇이 오는 중인지 항상 확인하실 수 있습니다.",
      },
      {
        n: "04",
        title: "완성",
        duration: "1일 + 사후 방문",
        desc: "마지막 스타일링 데이가 되면, 소품과 아트, 텍스타일로 공간에 완성의 숨결을 더합니다.",
        detail: "완성일에는 고객님이 잠시 자리를 비우신 사이 저희 팀이 모든 것을 설치하고, 아트·텍스타일·소품까지 마지막 레이어를 더합니다. 몇 주 후 다시 방문해 세부적으로 다듬을 부분을 마무리합니다.",
      },
    ],
    faqTitle: "자주 묻는 질문",
    faq: [
      { q: "집 전체 프로젝트는 얼마나 걸리나요?", a: "대부분의 집 전체 프로젝트는 범위와 시공 여부에 따라 첫 방문부터 완성일까지 3~6개월이 소요됩니다." },
      { q: "저희 시공사와도 함께 진행할 수 있나요?", a: "네, 고객님이 이미 협업 중인 건축가·시공사와 함께 진행하는 경우가 많으며, 저희가 함께 작업해온 업체를 추천드릴 수도 있습니다." },
      { q: "이미 마음에 드는 가구가 있다면요?", a: "남기고 싶은 가구를 중심으로 디자인합니다. 모든 프로젝트는 새로 소싱할 것을 정하기 전에, 먼저 무엇을 남길지부터 확인합니다." },
    ],
    ctaTitle: "발견 단계를 시작할 준비가 되셨나요?",
    ctaBody: "첫 걸음은 댁과 목표에 대한 짧은 대화입니다.",
    ctaButton: "상담 예약하기",
    footer: "© 2025 솔스티스 인테리어. All rights reserved.",
  },
} as const;

export default function SolsticeInteriorsProcess({ lang }: { lang: Lang }) {
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
            <Link href={processPath} className="text-[#c1652f]">{t.nav.process}</Link>
            <Link href={aboutPath} className="transition hover:text-[#c1652f]">{t.nav.about}</Link>
            <Link href={contactPath} className="transition hover:text-[#c1652f]">{t.nav.contact}</Link>
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
              <Link href={processPath} onClick={() => setOpen(false)} className="py-2 text-[#c1652f]">{t.nav.process}</Link>
              <Link href={aboutPath} onClick={() => setOpen(false)} className="py-2">{t.nav.about}</Link>
              <Link href={contactPath} onClick={() => setOpen(false)} className="py-2">{t.nav.contact}</Link>
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
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c1652f]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">{t.title}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 space-y-14">
          {t.process.map((p) => (
            <div key={p.n} className="grid gap-4 border-t border-[#2b241d]/15 pt-8 md:grid-cols-[auto_1fr] md:gap-10">
              <div className="flex items-baseline gap-4 md:flex-col md:items-start md:gap-2">
                <span className="font-serif text-4xl text-[#c1652f]">{p.n}</span>
                <span className="text-xs font-semibold tracking-widest text-[#2b241d]/50">{p.duration.toUpperCase()}</span>
              </div>
              <div>
                <h2 className="font-serif text-2xl break-keep text-balance">{p.title}</h2>
                <p className="mt-2 text-sm font-medium text-[#2b241d]/80 break-keep text-pretty">{p.desc}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#efe4d2] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl md:text-4xl break-keep text-balance">{t.faqTitle}</h2>
          <div className="mt-10 space-y-8">
            {t.faq.map((f) => (
              <div key={f.q} className="border-t border-[#2b241d]/15 pt-6">
                <h3 className="font-serif text-lg break-keep text-balance">{f.q}</h3>
                <p className="mt-2 leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl break-keep text-balance">{t.ctaTitle}</h2>
          <p className="mt-4 leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{t.ctaBody}</p>
          <Link
            href={contactPath}
            className="mt-8 inline-block rounded-full bg-[#c1652f] px-8 py-3.5 text-sm font-semibold text-white"
          >
            {t.ctaButton}
          </Link>
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
