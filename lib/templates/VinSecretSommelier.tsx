import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["CELLAR", "CLUB", "JOURNAL", "SOMMELIER"],
    eyebrow: "— OUR SOMMELIER",
    titleA: "Every bottle",
    titleB: "carries a story.",
    body: "Our buyer spends six months a year in Europe. We sit across the table from each winemaker, listen to what their year held, and choose the wine from there.",
    bullets: [
      "Boutique wines you won't find at retail",
      "Sommelier tasting notes in every shipment",
      "Climate-controlled 18°C delivery; replaced on damage",
    ],
    processEyebrow: "— HOW WE SOURCE",
    processTitle: "From vineyard to your door",
    steps: [
      { n: "01", title: "Visit", desc: "We travel to the winery, walk the vineyard, and meet the person behind the label." },
      { n: "02", title: "Taste", desc: "Every candidate is tasted blind, alongside the winemaker's own notes on the vintage." },
      { n: "03", title: "Select", desc: "Only what earns a place on the table with us makes it into a member's box." },
    ],
    quote: "“I don't buy a vintage. I buy the year someone lived through to make it.”",
    quoteBy: "— Head Sommelier, Vin Secret",
    footer: "© 2025 VIN SECRET — Licensed wine retailer NY",
  },
  ko: {
    nav: ["CELLAR", "CLUB", "JOURNAL", "SOMMELIER"],
    eyebrow: "— OUR SOMMELIER",
    titleA: "한 병에는,",
    titleB: "한 사람의 이야기가 있습니다.",
    body: "뱅 시크릿의 바이어는 1년 중 6개월을 유럽에 머뭅니다. 우리는 와이너리 주인과 직접 마주 앉아, 그가 지난 1년 동안 무엇을 견뎌냈는지를 듣고 와인을 고릅니다.",
    bullets: [
      "가게에 없는 부티크 와인 위주",
      "매달 소믈리에의 테이스팅 노트 동봉",
      "18°C 항온 배송, 파손 시 즉시 교체",
    ],
    processEyebrow: "— HOW WE SOURCE",
    processTitle: "포도밭에서 식탁까지",
    steps: [
      { n: "01", title: "방문", desc: "와이너리를 직접 찾아가 포도밭을 걷고, 라벨 뒤의 사람을 만납니다." },
      { n: "02", title: "테이스팅", desc: "모든 후보는 와인메이커의 빈티지 노트와 함께 블라인드로 테이스팅합니다." },
      { n: "03", title: "선정", desc: "우리 테이블에서 스스로 증명한 와인만이 회원의 박스에 담깁니다." },
    ],
    quote: "“빈티지를 사는 게 아닙니다. 그 한 해를 살아낸 사람의 시간을 사는 겁니다.”",
    quoteBy: "— 뱅 시크릿 수석 소믈리에",
    footer: "© 2025 VIN SECRET — 국세청 통신판매업 제2025-서울-XXXX호",
  },
} as const;

export default function VinSecretSommelier({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/vin-secret");
  const cellarPath = localePath(lang, "/portfolio/vin-secret/cellar");
  const clubPath = localePath(lang, "/portfolio/vin-secret/club");
  const journalPath = localePath(lang, "/portfolio/vin-secret/journal");
  const sommelierPath = localePath(lang, "/portfolio/vin-secret/sommelier");
  const navHrefs = [cellarPath, clubPath, journalPath, sommelierPath];

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
                className={i === 3 ? "text-[#d4a574]" : "transition hover:text-[#d4a574]"}
              >
                {n}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="text-[11px] tracking-[0.5em] text-[#d4a574]">{t.eyebrow}</p>
            <h1 className="mt-6 font-serif text-3xl leading-tight md:text-5xl break-keep text-balance">
              {t.titleA}
              <br className="hidden md:block" />
              <span className="italic text-[#d4a574]">{t.titleB}</span>
            </h1>
            <p className="mt-7 leading-relaxed text-[#c8b896] break-keep text-pretty">{t.body}</p>
            <ul className="mt-10 space-y-3 border-t border-[#3a1f25] pt-8 text-sm">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-4"><span className="text-[#d4a574]">◆</span> {b}</li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=1200&q=80&auto=format&fit=crop"
              alt="Sommelier"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#3a1f25] bg-[#23121a] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-[11px] tracking-[0.5em] text-[#d4a574]">{t.processEyebrow}</p>
          <h2 className="mt-3 text-center font-serif text-3xl break-keep text-balance md:text-4xl">{t.processTitle}</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {t.steps.map((s) => (
              <div key={s.n} className="text-center">
                <p className="font-serif text-3xl text-[#d4a574]">{s.n}</p>
                <h3 className="mt-4 font-serif text-xl break-keep text-balance">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c8b896] break-keep text-pretty">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-serif text-2xl italic leading-relaxed break-keep text-balance md:text-3xl">{t.quote}</p>
        <p className="mt-6 text-xs tracking-[0.3em] text-[#d4a574]">{t.quoteBy}</p>
      </section>

      <footer className="border-t border-[#3a1f25] py-10 text-center text-[10px] tracking-[0.4em] text-[#7a6a55] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
