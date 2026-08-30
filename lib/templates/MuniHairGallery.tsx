import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: "MUSE ✦ HAIR",
    nav: ["Stylist", "Gallery", "Menu", "Booking"],
    eyebrow: "✦ GALLERY ✦",
    title: "Recent color & cuts",
    intro: "A look at what's been in Ava, Crystal, and Rio's chairs lately.",
    shots: [
      { by: "AVA", label: "Vivid pastel dip-dye", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&auto=format&fit=crop" },
      { by: "CRYSTAL", label: "Blunt bob, glass finish", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=900&q=80&auto=format&fit=crop" },
      { by: "RIO", label: "Textured perm, dandy", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=80&auto=format&fit=crop" },
      { by: "AVA", label: "Money-piece tone-down", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80&auto=format&fit=crop" },
      { by: "CRYSTAL", label: "Layered lob", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=900&q=80&auto=format&fit=crop" },
      { by: "RIO", label: "Two-block fade", img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "✦ MUSE HAIR · 8410 Melrose Pl, 3F, Los Angeles CA 90069 · (323) 555-0202 ✦",
  },
  ko: {
    brand: "MUNI ✦ HAIR",
    nav: ["Stylist", "Gallery", "Menu", "Booking"],
    eyebrow: "✦ GALLERY ✦",
    title: "최근 컬러 & 컷",
    intro: "무니, 크리스탈, 리오의 최근 시술 사진을 모았습니다.",
    shots: [
      { by: "MUNI", label: "비비드 파스텔 딥다이", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&auto=format&fit=crop" },
      { by: "CRYSTAL", label: "블런트 단발, 유광 마감", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=900&q=80&auto=format&fit=crop" },
      { by: "RIO", label: "텍스처 펌, 댄디 스타일", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=80&auto=format&fit=crop" },
      { by: "MUNI", label: "머니피스 톤다운", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80&auto=format&fit=crop" },
      { by: "CRYSTAL", label: "레이어드 롭", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=900&q=80&auto=format&fit=crop" },
      { by: "RIO", label: "투블럭 페이드", img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?w=900&q=80&auto=format&fit=crop" },
    ],
    footer: "✦ MUNI HAIR · 강남구 신사동 가로수길 22, 3F · 02 555 0202 ✦",
  },
} as const;

export default function MuniHairGallery({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/muni-hair");
  const galleryPath = localePath(lang, "/portfolio/muni-hair/gallery");
  const navHrefs = [`${home}#stylists`, galleryPath, `${home}#menu`, `${home}#booking`];

  return (
    <div className="min-h-screen bg-[#0d0a14] text-white">
      <header className="border-b border-white/10 bg-[#0d0a14]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="text-xl font-black italic tracking-tighter">
            <span className="bg-gradient-to-r from-[#c0c0ff] via-[#ff9ee5] to-[#a3ffd6] bg-clip-text text-transparent">
              {t.brand}
            </span>
          </Link>
          <nav className="hidden gap-7 text-xs font-bold uppercase tracking-widest text-white/70 md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 1 ? "text-[#ff9ee5]" : "transition hover:text-[#ff9ee5]"}
              >
                {n}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-mono text-xs uppercase tracking-[0.5em] text-[#a3ffd6]">{t.eyebrow}</h2>
        <h1 className="mt-3 text-center text-4xl font-black italic md:text-5xl break-keep text-balance">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm text-white/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {t.shots.map((shot, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-3xl bg-white/5">
              <Image
                src={shot.img}
                alt={shot.label}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-xs uppercase tracking-widest text-[#ff9ee5]">{shot.by}</p>
                <p className="mt-1 text-sm font-bold break-keep text-pretty">{shot.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center font-mono text-[11px] tracking-widest text-white/40 break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
