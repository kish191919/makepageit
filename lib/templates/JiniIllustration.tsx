import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["works", "about", "shop", "contact"],
    cta: "Hire me ✏️",
    hero: {
      tag: "✦ Illustrator / essayist",
      titleA: "One drawing a day,",
      titleAccent: "a little kinder.",
      titleB: "",
      body: "42 book covers, 60 café and brand packaging projects, and 200 editorial pieces over the past eight years. Drawn by hand, then taken digital.",
      ctaPrimary: "View Portfolio →",
      ctaSecondary: "Shop (goods)",
    },
    recentTitle: "Recent work ✨",
    viewAll: "See all →",
    works: [
      { title: "Bustling Library", client: "Penguin Young Readers", year: "2024", color: "#ffd166", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80&auto=format&fit=crop" },
      { title: "A Slice of Summer", client: "Blue Bottle packaging", year: "2024", color: "#ef476f", img: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=900&q=80&auto=format&fit=crop" },
      { title: "Moon and Cat", client: "Communication Arts", year: "2023", color: "#06d6a0", img: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=900&q=80&auto=format&fit=crop" },
      { title: "Birds of the City", client: "NYC Parks campaign", year: "2023", color: "#118ab2", img: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=900&q=80&auto=format&fit=crop" },
    ],
    servicesTitle: "What I make",
    services: [
      ["📖", "Book covers", "Cover illustration for fiction, essays, and children's books"] as [string, string, string],
      ["☕", "Packaging", "Café and food labels, packaging series"] as [string, string, string],
      ["🗞️", "Editorial", "Single illustrations for magazines and newspapers"] as [string, string, string],
      ["🎨", "Characters", "Brand mascots and character design"] as [string, string, string],
    ],
    contact: {
      title: "Inquiries by email!",
      body: "I take six commissions per quarter. I reply within a week.",
      email: "jini@jini-illustrations.com ✉️",
    },
    footer: "© 2025 jini illustration · drawn by hand, sent kindly 🌱",
  },
  ko: {
    nav: ["works", "about", "shop", "contact"],
    cta: "의뢰하기 ✏️",
    hero: {
      tag: "✦ 일러스트레이터 / 에세이스트",
      titleA: "하루 한 장,",
      titleAccent: "조금 다정한 그림",
      titleB: "그립니다.",
      body: "지난 8년간 단행본 42권, 카페 / 브랜드 패키지 60건, 에디토리얼 200컷. 손으로 그려서 디지털로 옮깁니다.",
      ctaPrimary: "포트폴리오 보기 →",
      ctaSecondary: "숍 (굿즈)",
    },
    recentTitle: "최근 작업 ✨",
    viewAll: "전체 보기 →",
    works: [
      { title: "북적북적 도서관", client: "창비 어린이", year: "2024", color: "#ffd166", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80&auto=format&fit=crop" },
      { title: "여름 한 조각", client: "마쓰무라 카페 패키지", year: "2024", color: "#ef476f", img: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=900&q=80&auto=format&fit=crop" },
      { title: "달과 고양이", client: "월간 디자인", year: "2023", color: "#06d6a0", img: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=900&q=80&auto=format&fit=crop" },
      { title: "도시의 새들", client: "서울시 캠페인", year: "2023", color: "#118ab2", img: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=900&q=80&auto=format&fit=crop" },
    ],
    servicesTitle: "이런 작업을 해요",
    services: [
      ["📖", "단행본 표지", "동화·에세이·소설 표지 일러스트"] as [string, string, string],
      ["☕", "패키지", "카페·식품 라벨 및 패키지"] as [string, string, string],
      ["🗞️", "에디토리얼", "잡지·신문 1컷 일러스트"] as [string, string, string],
      ["🎨", "캐릭터", "브랜드 캐릭터 디자인"] as [string, string, string],
    ],
    contact: {
      title: "의뢰는 메일로 받아요!",
      body: "분기별로 6건만 받습니다. 1주일 안에 회신드려요.",
      email: "jini@illustration.kr ✉️",
    },
    footer: "© 2025 jini illustration · 손으로 그려서, 다정하게 보냅니다 🌱",
  },
} as const;

export default function JiniIllustration({ lang }: { lang: Lang }) {
  const t = copy[lang];
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
      <header className="border-b-2 border-dashed border-[#3a2e2a]/20 bg-[#fff8ec]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-2xl font-black tracking-tight">
            <span>🖍️</span> jini
            <span className="text-[#ef476f]">.</span>
          </div>
          <nav className="hidden gap-6 text-sm font-bold md:flex">
            {t.nav.map((n, i) => (
              <a key={n} className={i === 0 ? "rounded-full bg-[#ffd166] px-3 py-1" : ""}>
                {n}
              </a>
            ))}
          </nav>
          <a className="rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]">
            {t.cta}
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-block rotate-[-2deg] rounded-full bg-[#06d6a0] px-3 py-1 text-xs font-bold text-white">
              {t.hero.tag}
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] md:text-7xl">
              {t.hero.titleA}
              <br />
              <span className="bg-[#ffd166] px-2">{t.hero.titleAccent}</span>
              {t.hero.titleB && (
                <>
                  <br />
                  {t.hero.titleB}
                </>
              )}
            </h1>
            <p className="mt-6 max-w-md text-base text-[#5b4a44]">
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-[#ef476f] px-6 py-3 text-sm font-bold text-white">
                {t.hero.ctaPrimary}
              </a>
              <a className="rounded-full border-2 border-[#3a2e2a] bg-white px-6 py-3 text-sm font-bold">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-72 w-72 rotate-[-6deg] rounded-3xl bg-[#ffd166]" />
            <div className="absolute right-0 bottom-0 h-40 w-40 rotate-[8deg] rounded-3xl bg-[#06d6a0]" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-[#3a2e2a] shadow-[8px_8px_0_#3a2e2a]">
              <Image
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80&auto=format&fit=crop"
                alt="Jini illustration"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-black md:text-4xl">{t.recentTitle}</h2>
          <a className="text-sm font-bold underline">{t.viewAll}</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {t.works.map((w) => (
            <article
              key={w.title}
              className="overflow-hidden rounded-3xl border-4 border-[#3a2e2a] bg-white shadow-[6px_6px_0_#3a2e2a] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#3a2e2a]"
            >
              <div className="relative aspect-[4/3]" style={{ backgroundColor: w.color }}>
                <Image src={w.img} alt={w.title} fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="flex items-center justify-between border-t-4 border-[#3a2e2a] bg-[#fff8ec] p-5">
                <div>
                  <h3 className="text-xl font-black">{w.title}</h3>
                  <p className="mt-1 text-sm text-[#5b4a44]">{w.client}</p>
                </div>
                <span className="rounded-full bg-[#3a2e2a] px-3 py-1 text-xs font-bold text-white">
                  {w.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-black md:text-4xl">{t.servicesTitle}</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {t.services.map(([icon, title, d]) => (
            <div
              key={title}
              className="rounded-3xl border-4 border-[#3a2e2a] bg-white p-6 text-center shadow-[4px_4px_0_#3a2e2a]"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-4 text-base font-black">{title}</h3>
              <p className="mt-2 text-xs text-[#5b4a44]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="rotate-[-1deg] rounded-3xl border-4 border-[#3a2e2a] bg-[#ef476f] p-10 text-center text-white shadow-[10px_10px_0_#3a2e2a]">
          <h2 className="text-3xl font-black md:text-4xl">{t.contact.title}</h2>
          <p className="mt-3 text-white/90">{t.contact.body}</p>
          <a className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-black text-[#ef476f]">
            {t.contact.email}
          </a>
        </div>
      </section>

      <footer className="border-t-2 border-dashed border-[#3a2e2a]/20 py-8 text-center text-xs text-[#5b4a44]">
        {t.footer}
      </footer>
    </div>
  );
}
