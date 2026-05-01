import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["Work", "Practice", "Press", "Contact"],
    inquireCta: "Inquire",
    hero: {
      eyebrow: "Est. 2009 — New York · Los Angeles",
      brand: "ARCO",
      brandSub: "ATELIER",
      statementLabel: "Statement",
      statement: "Architecture isn't carving up a landscape — it's becoming part of it. We are a practice that works with concrete and light, shadow and time.",
    },
    selected: { title: "SELECTED WORK", years: "2021 — 2024" },
    projects: [
      { name: "House on the Slope", place: "Hudson Valley, NY", year: "2024", image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1400&q=80&auto=format&fit=crop" },
      { name: "Concrete Library", place: "Austin, TX", year: "2023", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format&fit=crop" },
      { name: "Black Pavilion", place: "Joshua Tree, CA", year: "2023", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop" },
    ],
    projectLabels: { place: "Place", year: "Year", numberLabel: "No." },
    awardsTitle: "AWARDS & PRESS",
    awards: [
      ["2024", "AIA New York Honor Award — Architecture"],
      ["2023", "AR Emerging Architecture, Shortlist"],
      ["2022", "Wallpaper* Design Award — Building of the Year"],
      ["2021", "Architectural Record — Design Vanguard"],
    ] as [string, string][],
    studio: {
      eyebrow: "Studio",
      title: ["To build", "is to think."],
      bodyA: "Arco is a small practice — twelve architects and four interior designers. We don't take on more than six projects a year.",
      bodyB: "Every drawing is made in our office. Every model is built by hand in our office. That is how Arco handles time.",
    },
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
    hero: {
      eyebrow: "Est. 2009 — Seoul · Daegu",
      brand: "ARCO",
      brandSub: "ATELIER",
      statementLabel: "Statement",
      statement: "건축은 풍경을 자르는 일이 아니라 풍경의 일부가 되는 일입니다. 우리는 콘크리트와 빛, 그림자와 시간을 다루는 사무소입니다.",
    },
    selected: { title: "SELECTED WORK", years: "2021 — 2024" },
    projects: [
      { name: "House on the Slope", place: "Yangpyeong, KR", year: "2024", image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1400&q=80&auto=format&fit=crop" },
      { name: "Concrete Library", place: "Daegu, KR", year: "2023", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format&fit=crop" },
      { name: "Black Pavilion", place: "Jeju, KR", year: "2023", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop" },
    ],
    projectLabels: { place: "Place", year: "Year", numberLabel: "No." },
    awardsTitle: "AWARDS & PRESS",
    awards: [
      ["2024", "Korea Architecture Award — Gold"],
      ["2023", "AR Emerging Architecture, Shortlist"],
      ["2022", "Wallpaper* Design Award — Building of the Year"],
      ["2021", "Seoul Public Architecture Prize"],
    ] as [string, string][],
    studio: {
      eyebrow: "Studio",
      title: ["짓는 것은", "생각하는 것이다."],
      bodyA: "아르코는 12명의 건축가와 4명의 인테리어 디자이너로 구성된 작은 사무소입니다. 우리는 1년에 6개 이상의 프로젝트를 받지 않습니다.",
      bodyB: "모든 도면은 사무소 안에서, 모든 모형은 사무소 안에서 손으로 만들어집니다. 아르코는 그렇게 시간을 다루는 곳입니다.",
    },
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

export default function ArcoAtelier({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="min-h-screen bg-[#ededed] text-black">
      <header className="border-b-2 border-black bg-[#ededed]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black tracking-tighter">ARCO/</div>
          <nav className="hidden gap-10 text-xs font-bold uppercase tracking-widest md:flex">
            {t.nav.map((n) => (
              <a key={n}>{n}</a>
            ))}
          </nav>
          <a className="border-2 border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#ededed]">
            {t.inquireCta}
          </a>
        </div>
      </header>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.4em]">{t.hero.eyebrow}</p>
          <h1 className="mt-10 text-[18vw] font-black leading-[0.85] tracking-[-0.04em] md:text-[14rem]">
            {t.hero.brand}
            <br />
            <span className="block text-black/30">{t.hero.brandSub}</span>
          </h1>
          <div className="mt-12 grid gap-6 border-t-2 border-black pt-10 md:grid-cols-[1fr_2fr]">
            <p className="text-xs font-bold uppercase tracking-widest">{t.hero.statementLabel}</p>
            <p className="text-xl leading-snug md:text-2xl">
              {t.hero.statement}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between border-b-2 border-black pb-6">
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">{t.selected.title}</h2>
            <span className="hidden text-xs font-bold uppercase tracking-widest md:block">{t.selected.years}</span>
          </div>
          <div className="mt-12 space-y-20">
            {t.projects.map((p, i) => (
              <article
                key={p.name}
                className={`grid gap-8 md:grid-cols-12 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <div className="relative aspect-[4/3] md:col-span-8 [direction:ltr]">
                  <Image src={p.image} alt={p.name} fill className="object-cover grayscale" />
                </div>
                <div className="md:col-span-4 [direction:ltr]">
                  <div className="border-t-2 border-black pt-4 text-xs font-bold uppercase tracking-widest">
                    {t.projectLabels.numberLabel} {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">{p.name}</h3>
                  <dl className="mt-8 space-y-2 text-sm">
                    <div className="flex justify-between border-b border-black/20 py-2">
                      <dt className="font-bold uppercase tracking-widest text-black/50">{t.projectLabels.place}</dt>
                      <dd>{p.place}</dd>
                    </div>
                    <div className="flex justify-between border-b border-black/20 py-2">
                      <dt className="font-bold uppercase tracking-widest text-black/50">{t.projectLabels.year}</dt>
                      <dd>{p.year}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-black bg-black text-[#ededed]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">{t.awardsTitle}</h2>
          <ul className="mt-12 divide-y divide-white/20 border-y border-white/20">
            {t.awards.map(([y, label]) => (
              <li key={label} className="grid grid-cols-[80px_1fr] gap-6 py-5 md:grid-cols-[120px_1fr]">
                <span className="font-mono text-sm">{y}</span>
                <span className="text-base md:text-lg">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em]">{t.studio.eyebrow}</p>
            <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              {t.studio.title[0]}
              <br />
              {t.studio.title[1]}
            </h2>
          </div>
          <div className="space-y-4 self-end text-sm leading-relaxed">
            <p>{t.studio.bodyA}</p>
            <p>{t.studio.bodyB}</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#ededed]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-4">
          <div className="text-3xl font-black tracking-tighter">ARCO/</div>
          {t.footer.offices.map((o) => (
            <div key={o.label} className="text-sm">
              <p className="font-bold uppercase tracking-widest">{o.label}</p>
              {o.lines.map((line, i) => (
                <p key={i} className={i === 0 ? "mt-2 text-black/60" : "text-black/60"}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t-2 border-black px-6 py-4 text-center font-mono text-[11px]">
          {t.footer.copyright}
        </div>
      </footer>
    </div>
  );
}
