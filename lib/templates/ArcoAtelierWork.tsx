import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["Work", "Practice", "Press", "Contact"],
    inquireCta: "Inquire",
    eyebrow: "Work",
    title: "Selected work, 2019 — 2024",
    intro:
      "Twenty-six buildings, twelve architects, one office. Below is a longer view of the projects that define how Arco builds.",
    projectLabels: { place: "Place", year: "Year", numberLabel: "No." },
    projects: [
      { name: "House on the Slope", place: "Hudson Valley, NY", year: "2024", image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1400&q=80&auto=format&fit=crop" },
      { name: "Concrete Library", place: "Austin, TX", year: "2023", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format&fit=crop" },
      { name: "Black Pavilion", place: "Joshua Tree, CA", year: "2023", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop" },
      { name: "Half-Buried House", place: "Catskills, NY", year: "2022", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1400&q=80&auto=format&fit=crop" },
      { name: "Chapel of Ash", place: "Marfa, TX", year: "2021", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80&auto=format&fit=crop" },
      { name: "The Long Table House", place: "Sonoma, CA", year: "2020", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80&auto=format&fit=crop" },
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
    eyebrow: "Work",
    title: "Selected Work, 2019 — 2024",
    intro: "26개의 건물, 12명의 건축가, 하나의 사무소. 아르코가 짓는 방식을 보여주는 프로젝트를 더 넓게 소개합니다.",
    projectLabels: { place: "Place", year: "Year", numberLabel: "No." },
    projects: [
      { name: "House on the Slope", place: "Yangpyeong, KR", year: "2024", image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1400&q=80&auto=format&fit=crop" },
      { name: "Concrete Library", place: "Daegu, KR", year: "2023", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format&fit=crop" },
      { name: "Black Pavilion", place: "Jeju, KR", year: "2023", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop" },
      { name: "Half-Buried House", place: "Pyeongchang, KR", year: "2022", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1400&q=80&auto=format&fit=crop" },
      { name: "Chapel of Ash", place: "Gyeongju, KR", year: "2021", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80&auto=format&fit=crop" },
      { name: "The Long Table House", place: "Yangyang, KR", year: "2020", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80&auto=format&fit=crop" },
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

export default function ArcoAtelierWork({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/arco-atelier");
  const workPath = localePath(lang, "/portfolio/arco-atelier/work");
  const practicePath = localePath(lang, "/portfolio/arco-atelier/practice");
  const pressPath = localePath(lang, "/portfolio/arco-atelier/press");
  const contactPath = localePath(lang, "/portfolio/arco-atelier/contact");
  const navPaths = [workPath, practicePath, pressPath, contactPath];

  return (
    <div className="min-h-screen bg-[#ededed] text-black">
      <header className="border-b-2 border-black bg-[#ededed]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href={home} className="text-2xl font-black tracking-tighter">ARCO/</Link>
          <nav className="hidden gap-10 text-xs font-bold uppercase tracking-widest md:flex">
            {t.nav.map((n, i) =>
              navPaths[i] === workPath ? (
                <Link key={n} href={navPaths[i]} className="underline underline-offset-4">{n}</Link>
              ) : (
                <Link key={n} href={navPaths[i]}>{n}</Link>
              )
            )}
          </nav>
          <Link href={contactPath} className="border-2 border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#ededed]">
            {t.inquireCta}
          </Link>
        </div>
      </header>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.4em]">{t.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight md:text-7xl break-keep text-balance">
            {t.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg break-keep text-pretty">{t.intro}</p>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="space-y-20">
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
                  <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl break-keep text-balance">{p.name}</h3>
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
