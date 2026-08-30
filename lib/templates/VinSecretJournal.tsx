import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["CELLAR", "CLUB", "JOURNAL", "SOMMELIER"],
    eyebrow: "— JOURNAL",
    title: "Dispatches from the buying trip",
    intro: "Notes from the road, the tasting table, and the winemakers we keep coming back to.",
    posts: [
      {
        date: "MAR 2025",
        title: "Why This Year's Brunello Made the Cut",
        excerpt:
          "Allegro's 2017 almost didn't ship — a difficult vintage, the winemaker warned us. Three tastings later, we understood why he was proud of it anyway.",
        image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "JAN 2025",
        title: "A Week in Galicia, Chasing Albariño",
        excerpt:
          "The Rias vineyards sit close enough to the Atlantic to taste it in the glass. We left with six cases and a lot of opinions about granite soil.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "NOV 2024",
        title: "The Bordeaux Négociant Who Says No More Than Yes",
        excerpt:
          "Most of what we're offered never makes the club. Here's what it took for Château Lavigne to get past our buyer's very short list.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 VIN SECRET — Licensed wine retailer NY",
  },
  ko: {
    nav: ["CELLAR", "CLUB", "JOURNAL", "SOMMELIER"],
    eyebrow: "— JOURNAL",
    title: "바잉 트립에서 보내는 기록",
    intro: "출장길, 테이스팅 테이블, 그리고 계속 다시 찾게 되는 와인메이커들의 이야기.",
    posts: [
      {
        date: "2025.03",
        title: "올해 브루넬로를 고른 이유",
        excerpt:
          "알레그로의 2017년 빈티지는 하마터면 리스트에서 빠질 뻔했습니다. 힘든 해였다고 와인메이커 스스로도 말했으니까요. 세 번의 테이스팅 끝에, 그가 왜 그럼에도 이 와인을 자랑스러워하는지 이해했습니다.",
        image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "2025.01",
        title: "알바리뇨를 좇아 떠난 갈리시아 일주일",
        excerpt:
          "리아스 지역의 포도밭은 대서양이 잔에서 느껴질 만큼 바다와 가깝습니다. 여섯 케이스와, 화강암 토양에 대한 수많은 의견을 안고 돌아왔습니다.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80&auto=format&fit=crop",
      },
      {
        date: "2024.11",
        title: "예스보다 노가 많은 보르도 네고시앙",
        excerpt:
          "우리에게 제안되는 와인 대부분은 클럽에 오르지 못합니다. 샤토 라비뉴가 바이어의 짧은 리스트를 통과하기까지 무엇이 필요했는지 기록했습니다.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 VIN SECRET — 국세청 통신판매업 제2025-서울-XXXX호",
  },
} as const;

export default function VinSecretJournal({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/vin-secret");
  const journalPath = localePath(lang, "/portfolio/vin-secret/journal");
  const navHrefs = [`${home}#cellar`, `${home}#club`, journalPath, `${home}#sommelier`];

  return (
    <div className="min-h-screen bg-[#1a0d10] text-[#f3e7d7]">
      <header className="border-b border-[#3a1f25] bg-[#1a0d10]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="font-serif text-xl italic tracking-wide text-[#d4a574]">
            Vin Secret
          </Link>
          <nav className="hidden gap-8 text-xs tracking-[0.3em] text-[#c8b896] md:flex">
            {t.nav.map((n, i) => (
              <Link
                key={n}
                href={navHrefs[i]}
                className={i === 2 ? "text-[#d4a574]" : "transition hover:text-[#d4a574]"}
              >
                {n}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-[11px] tracking-[0.5em] text-[#d4a574]">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl text-base text-[#c8b896] break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-16 border-t border-[#3a1f25] pt-16">
          {t.posts.map((post) => (
            <article key={post.title} className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <p className="text-[11px] tracking-widest text-[#d4a574]">{post.date}</p>
                <h2 className="mt-4 font-serif text-2xl leading-snug md:text-3xl break-keep text-balance">
                  {post.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[#c8b896] break-keep text-pretty">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#3a1f25] py-10 text-center text-[10px] tracking-[0.4em] text-[#7a6a55] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
