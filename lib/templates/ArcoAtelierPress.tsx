import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["Work", "Practice", "Press", "Contact"],
    inquireCta: "Inquire",
    eyebrow: "Press",
    title: "Awards & press",
    intro: "A running record of the recognition and coverage Arco has received since 2009.",
    awardsTitle: "AWARDS",
    awards: [
      ["2024", "AIA New York Honor Award — Architecture"],
      ["2023", "AR Emerging Architecture, Shortlist"],
      ["2022", "Wallpaper* Design Award — Building of the Year"],
      ["2021", "Architectural Record — Design Vanguard"],
    ] as [string, string][],
    mentionsTitle: "IN THE PRESS",
    mentions: [
      {
        outlet: "Dezeen",
        date: "2024",
        quote: "House on the Slope treats the hillside as a collaborator rather than an obstacle — concrete stepped so gently into the grade that you forget where the land ends and the building begins.",
        image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1200&q=80&auto=format&fit=crop",
      },
      {
        outlet: "Architectural Digest",
        date: "2023",
        quote: "Arco's Concrete Library is the rare civic building that photographs exactly as it feels to stand in — heavy, quiet, and lit like a held breath.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80&auto=format&fit=crop",
      },
      {
        outlet: "ArchDaily",
        date: "2022",
        quote: "A twelve-person office that still hand-builds every study model — in an industry racing toward renderings, Arco's restraint reads almost radical.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      },
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
    eyebrow: "Press",
    title: "Awards & Press",
    intro: "2009년부터 지금까지 아르코가 받은 수상과 언론 보도를 기록합니다.",
    awardsTitle: "AWARDS",
    awards: [
      ["2024", "Korea Architecture Award — Gold"],
      ["2023", "AR Emerging Architecture, Shortlist"],
      ["2022", "Wallpaper* Design Award — Building of the Year"],
      ["2021", "Seoul Public Architecture Prize"],
    ] as [string, string][],
    mentionsTitle: "IN THE PRESS",
    mentions: [
      {
        outlet: "월간 SPACE",
        date: "2024",
        quote: "House on the Slope는 경사지를 장애물이 아니라 협력자로 다룬다. 콘크리트가 지형 속으로 너무나 자연스럽게 스며들어, 어디까지가 대지이고 어디부터가 건물인지 잊게 만든다.",
        image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1200&q=80&auto=format&fit=crop",
      },
      {
        outlet: "디자인하우스",
        date: "2023",
        quote: "아르코의 Concrete Library는 서 있을 때의 느낌이 사진 그대로 전해지는 드문 공공 건축이다 — 무겁고, 고요하며, 숨을 참은 듯한 조도로 채워져 있다.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80&auto=format&fit=crop",
      },
      {
        outlet: "매거진 B",
        date: "2022",
        quote: "12명의 사무소가 여전히 모든 스터디 모형을 손으로 만든다. 렌더링으로 질주하는 업계에서, 아르코의 절제는 거의 급진적으로 읽힌다.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
      },
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

export default function ArcoAtelierPress({ lang }: { lang: Lang }) {
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
              navPaths[i] === pressPath ? (
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

      <section className="border-b-2 border-black bg-black text-[#ededed]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em]">{t.awardsTitle}</h2>
          <ul className="mt-8 divide-y divide-white/20 border-y border-white/20">
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
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em]">{t.mentionsTitle}</h2>
          <div className="mt-10 space-y-16">
            {t.mentions.map((m) => (
              <article key={m.outlet} className="grid gap-8 border-t-2 border-black pt-10 md:grid-cols-12">
                <div className="relative aspect-[4/3] md:col-span-5">
                  <Image src={m.image} alt={m.outlet} fill className="object-cover grayscale" />
                </div>
                <div className="md:col-span-7 md:self-center">
                  <div className="flex items-baseline gap-4 text-xs font-bold uppercase tracking-widest">
                    <span>{m.outlet}</span>
                    <span className="font-mono text-black/50">{m.date}</span>
                  </div>
                  <p className="mt-4 text-xl leading-snug md:text-2xl break-keep text-pretty">“{m.quote}”</p>
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
