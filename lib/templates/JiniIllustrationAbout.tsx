"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "jenna",
    nav: ["works", "about", "shop", "contact"],
    cta: "Hire me ✏️",
    label: "About",
    name: "Jenna Cole",
    role: "Illustrator & essayist",
    location: "Portland, OR",
    bio: [
      "I've been drawing professionally for eight years — 42 book covers, 60 café and brand packaging projects, and 200 editorial pieces, all sketched by hand before moving to the screen.",
      "My work leans warm and a little imperfect on purpose: visible pencil lines, uneven ink, paper texture left in. I think illustration should feel like a person made it.",
      "Outside commissions, I write a weekly newsletter about slow mornings and keep a stack of sketchbooks that never quite empty out.",
    ],
    statsLabel: "At a glance",
    stats: [
      ["8y", "In practice"],
      ["42", "Book covers"],
      ["200+", "Editorial pieces"],
      ["6", "Commissions / quarter"],
    ] as [string, string][],
    toolsLabel: "Tools & process",
    tools: [
      ["✏️", "Pencil sketch", "Every piece starts on paper, usually three or four thumbnails."],
      ["🖋️", "Ink pass", "Line work is inked by hand with a dip pen or brush pen."],
      ["📷", "Scan & clean", "Scanned at high res, then cleaned up without losing the texture."],
      ["🎨", "Digital color", "Colored and finished in Procreate, keeping the hand-drawn line."],
    ] as [string, string, string][],
    footer: "© 2025 Jenna Cole Illustration · drawn by hand, sent kindly 🌱",
  },
  ko: {
    brand: "jini",
    nav: ["works", "about", "shop", "contact"],
    cta: "의뢰하기 ✏️",
    label: "소개",
    name: "지니 (jini)",
    role: "일러스트레이터 & 에세이스트",
    location: "서울",
    bio: [
      "8년째 그림을 그리고 있습니다. 단행본 표지 42권, 카페·브랜드 패키지 60건, 에디토리얼 200컷까지 — 모두 손으로 스케치한 뒤 디지털로 옮깁니다.",
      "제 그림은 따뜻하고 조금은 일부러 완벽하지 않게 남겨둡니다: 보이는 연필선, 고르지 않은 잉크, 종이 질감까지. 사람이 그린 그림처럼 느껴지길 바라거든요.",
      "의뢰 작업 외에는 느린 아침에 관한 뉴스레터를 매주 쓰고, 다 채우지 못한 스케치북을 계속 쌓아가고 있어요.",
    ],
    statsLabel: "한눈에 보기",
    stats: [
      ["8년", "작업 경력"],
      ["42권", "단행본 표지"],
      ["200컷+", "에디토리얼"],
      ["6건", "분기당 의뢰"],
    ] as [string, string][],
    toolsLabel: "작업 도구 & 과정",
    tools: [
      ["✏️", "연필 스케치", "모든 작업은 종이 스케치에서 시작해요. 보통 섬네일 3~4개를 그립니다."],
      ["🖋️", "펜선 작업", "딥펜이나 붓펜으로 손 펜선을 올립니다."],
      ["📷", "스캔 & 정리", "고해상도로 스캔한 뒤, 질감은 살리고 잡티만 정리해요."],
      ["🎨", "디지털 채색", "프로크리에이트로 채색하며 손그림 선을 그대로 유지합니다."],
    ] as [string, string, string][],
    footer: "© 2025 jini illustration · 손으로 그려서, 다정하게 보냅니다 🌱",
  },
} as const;

export default function JiniIllustrationAbout({ lang }: { lang: Lang }) {
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
                className={n === "about" ? "rounded-full bg-[#ffd166] px-3 py-1" : "transition hover:opacity-70"}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href={contactPath} className="rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]">
              {t.cta}
            </Link>
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
                  className={n === "about" ? "py-2 text-[#ef476f]" : "py-2"}
                >
                  {n}
                </Link>
              ))}
            </nav>
            <Link
              href={contactPath}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]"
            >
              {t.cta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-block rotate-[-2deg] rounded-full bg-[#06d6a0] px-3 py-1 text-xs font-bold text-white">
              {t.label}
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.15] md:text-6xl break-keep text-balance">
              {t.name}
            </h1>
            <p className="mt-2 text-base font-bold text-[#5b4a44]">{t.role} · {t.location}</p>
            <div className="mt-6 max-w-xl space-y-4 text-base text-[#5b4a44] break-keep text-pretty">
              {t.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-64 w-64 rotate-[6deg] rounded-3xl bg-[#118ab2]" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-[#3a2e2a] shadow-[8px_8px_0_#3a2e2a]">
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop"
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-sm font-black uppercase tracking-widest text-[#5b4a44]">{t.statsLabel}</h2>
        <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
          {t.stats.map(([v, l]) => (
            <div
              key={l}
              className="rounded-3xl border-4 border-[#3a2e2a] bg-white p-6 text-center shadow-[4px_4px_0_#3a2e2a]"
            >
              <div className="text-3xl font-black">{v}</div>
              <div className="mt-2 text-xs font-bold text-[#5b4a44] break-keep text-pretty">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-sm font-black uppercase tracking-widest text-[#5b4a44]">{t.toolsLabel}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          {t.tools.map(([icon, title, d]) => (
            <div
              key={title}
              className="rounded-3xl border-4 border-[#3a2e2a] bg-white p-6 shadow-[4px_4px_0_#3a2e2a]"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-4 text-base font-black break-keep text-balance">{title}</h3>
              <p className="mt-2 text-xs text-[#5b4a44] break-keep text-pretty">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-dashed border-[#3a2e2a]/20 py-8 text-center text-xs text-[#5b4a44] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
