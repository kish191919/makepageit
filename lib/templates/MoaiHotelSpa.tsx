import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: "WAYFARER",
    nav: ["STAY", "DINE", "SPA", "JOURNAL"],
    reserveCta: "RESERVE",
    eyebrow: "— SPA",
    title: "Treatments built around the cliffside",
    intro: "Mediterranean-style bodywork using oils pressed in the region, in rooms that open onto the same view as the suites above.",
    treatments: [
      {
        name: "Cliffside Oil Massage",
        length: "75 min",
        desc: "A full-body treatment using warmed Mediterranean oils, finished with a scalp ritual drawn from the region's coastal traditions.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Salt Stone Therapy",
        length: "60 min",
        desc: "Locally sourced salt stones, warmed and worked into the shoulders and back — a favorite after a day on the cliffs.",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Ocean Air Facial",
        length: "45 min",
        desc: "A restorative facial formulated for skin that's spent the day in salt air and sun, using cold-pressed regional botanicals.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 THE WAYFARER HOTEL & RESORT — BIG SUR, CALIFORNIA",
  },
  ko: {
    brand: "MOAI",
    nav: ["STAY", "DINE", "SPA", "JOURNAL"],
    reserveCta: "RESERVE",
    eyebrow: "— SPA",
    title: "절벽을 따라 설계된 트리트먼트",
    intro: "지역에서 압착한 오일을 사용하는 지중해식 바디 케어를, 위층 객실과 같은 풍경이 펼쳐지는 공간에서 경험하세요.",
    treatments: [
      {
        name: "절벽 오일 마사지",
        length: "75분",
        desc: "따뜻하게 데운 지중해식 오일을 사용한 전신 트리트먼트로, 지역 해안 전통에서 비롯된 두피 케어로 마무리합니다.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "솔트 스톤 테라피",
        length: "60분",
        desc: "현지에서 채취한 소금 스톤을 데워 어깨와 등에 사용하는 트리트먼트로, 절벽에서 하루를 보낸 후 특히 인기 있습니다.",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "오션 에어 페이셜",
        length: "45분",
        desc: "온종일 바닷바람과 햇빛에 노출된 피부를 위한 리스토어 페이셜로, 냉압착한 지역 식물 원료를 사용합니다.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 MOAI HOTEL & RESORT — JEJU, KOREA",
  },
} as const;

export default function MoaiHotelSpa({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/moai-hotel");
  const spaPath = localePath(lang, "/portfolio/moai-hotel/spa");
  const journalPath = localePath(lang, "/portfolio/moai-hotel/journal");
  const navHrefs = [`${home}#rooms`, `${home}#experiences`, spaPath, journalPath];

  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f0e9d6]">
      <header className="border-b border-[#d4af37]/20 bg-[#0d0c0a]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href={home} className="font-serif text-xl tracking-[0.5em] text-[#d4af37]">
            {t.brand}
          </Link>
          <nav className="hidden gap-10 text-[11px] font-medium tracking-[0.3em] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 2 ? "text-[#d4af37]" : "transition hover:text-[#d4af37]"}
              >
                {n}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-[11px] tracking-[0.4em] text-[#d4af37]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#c9bfa6] break-keep text-pretty md:text-base">
          {t.intro}
        </p>

        <div className="mt-16 grid gap-16 border-t border-[#d4af37]/20 pt-16">
          {t.treatments.map((tr) => (
            <article key={tr.name} className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={tr.image} alt={tr.name} fill className="object-cover" />
              </div>
              <div>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-serif text-2xl break-keep text-balance">{tr.name}</h2>
                  <span className="text-[11px] tracking-widest text-[#d4af37]">{tr.length}</span>
                </div>
                <p className="mt-4 leading-relaxed text-[#c9bfa6] break-keep text-pretty">{tr.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d4af37]/20 py-10 text-center text-[10px] tracking-[0.4em] text-[#9b9277] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
