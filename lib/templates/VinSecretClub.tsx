import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: ["CELLAR", "CLUB", "JOURNAL", "SOMMELIER"],
    eyebrow: "— MEMBERSHIP",
    title: "Join the club",
    intro:
      "One curated shipment a month, chosen by our sommelier from wineries you won't find at retail. Pause, skip, or cancel anytime.",
    stepsEyebrow: "— HOW IT WORKS",
    steps: [
      { n: "01", title: "Sommelier selects", desc: "Our buyer tastes through the month's finds and picks what earns a place in the box." },
      { n: "02", title: "Delivered monthly", desc: "Climate-controlled shipping at 18°C, replaced immediately on any damage." },
      { n: "03", title: "Taste & fine-tune", desc: "Rate what you drink — the next box leans toward what you actually loved." },
    ],
    membershipSection: { eyebrow: "— MEMBERSHIP", title: "Club plans" },
    plans: [
      { tier: "DISCOVER", count: "2 bottles / month", price: "$55", desc: "For those just getting acquainted" },
      { tier: "CONNOISSEUR", count: "4 bottles / month", price: "$120", desc: "For the discerning palate", best: true },
      { tier: "RESERVE", count: "6 limited bottles / month", price: "$280", desc: "For the cellar collector" },
    ],
    perMonthSuffix: "/ month",
    bestBadge: "MOST CHOSEN",
    startCta: "START",
    faqEyebrow: "— FAQ",
    faqs: [
      { q: "Can I cancel anytime?", a: "Yes — pause or cancel from your account before the next billing date, no penalty." },
      { q: "Where do you ship?", a: "All 50 states, via licensed carriers, in climate-controlled packaging." },
      { q: "Can I gift a membership?", a: "Yes — gift subscriptions run 3, 6, or 12 months and start with a welcome card." },
    ],
    footer: "© 2025 VIN SECRET — Licensed wine retailer NY",
  },
  ko: {
    nav: ["CELLAR", "CLUB", "JOURNAL", "SOMMELIER"],
    eyebrow: "— MEMBERSHIP",
    title: "정기 클럽에 가입하세요",
    intro:
      "매달 소믈리에가 고른 한 상자, 가게에서 만날 수 없는 와이너리의 와인을 집으로 보내드립니다. 언제든 일시정지·해지 가능합니다.",
    stepsEyebrow: "— HOW IT WORKS",
    steps: [
      { n: "01", title: "소믈리에가 고릅니다", desc: "바이어가 이번 달 발굴한 와인을 직접 테이스팅하고 박스에 담길 와인을 선정합니다." },
      { n: "02", title: "매달 집으로 배송", desc: "18°C 항온 배송, 파손 시 즉시 재배송해 드립니다." },
      { n: "03", title: "취향을 맞춰갑니다", desc: "마신 와인을 평가해 주시면, 다음 박스는 그 취향에 더 가까워집니다." },
    ],
    membershipSection: { eyebrow: "— MEMBERSHIP", title: "정기 클럽 플랜" },
    plans: [
      { tier: "DISCOVER", count: "월 2병", price: "59,000원", desc: "처음 와인을 알아가는 분께" },
      { tier: "CONNOISSEUR", count: "월 4병", price: "129,000원", desc: "취향이 또렷한 애호가용", best: true },
      { tier: "RESERVE", count: "월 6병 한정 큐레이션", price: "299,000원", desc: "셀러를 채우는 컬렉터" },
    ],
    perMonthSuffix: "/월",
    bestBadge: "MOST CHOSEN",
    startCta: "START",
    faqEyebrow: "— FAQ",
    faqs: [
      { q: "언제든 해지할 수 있나요?", a: "네 — 다음 결제일 전에 마이페이지에서 일시정지·해지하실 수 있으며, 위약금은 없습니다." },
      { q: "배송 지역은 어디까지인가요?", a: "전국 어디든 항온 포장으로 배송해 드립니다." },
      { q: "선물용 구독도 가능한가요?", a: "네 — 3개월·6개월·12개월 선물 구독이 있으며, 웰컴 카드와 함께 시작됩니다." },
    ],
    footer: "© 2025 VIN SECRET — 국세청 통신판매업 제2025-서울-XXXX호",
  },
} as const;

export default function VinSecretClub({ lang }: { lang: Lang }) {
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
                className={i === 1 ? "text-[#d4a574]" : "transition hover:text-[#d4a574]"}
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
      </section>

      <section className="border-y border-[#3a1f25] bg-[#23121a] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-[11px] tracking-[0.5em] text-[#d4a574]">{t.stepsEyebrow}</p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
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

      <section id="club" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <p className="text-center text-[11px] tracking-[0.5em] text-[#d4a574]">{t.membershipSection.eyebrow}</p>
        <h2 className="mt-3 text-center font-serif text-4xl break-keep text-balance">{t.membershipSection.title}</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.plans.map((p) => {
            const best = "best" in p && p.best;
            return (
              <article
                key={p.tier}
                className={`rounded-sm border p-8 ${
                  best
                    ? "border-[#d4a574] bg-[#23121a] shadow-2xl shadow-[#d4a574]/10"
                    : "border-[#3a1f25] bg-transparent"
                }`}
              >
                {best && (
                  <span className="inline-block bg-[#d4a574] px-2 py-0.5 text-[10px] tracking-widest text-[#1a0d10]">
                    {t.bestBadge}
                  </span>
                )}
                <h3 className="mt-5 font-serif text-2xl tracking-wide break-keep text-balance">{p.tier}</h3>
                <p className="mt-2 text-xs text-[#c8b896]">{p.count}</p>
                <p className="mt-7 font-serif text-3xl text-[#d4a574]">{p.price}<span className="ml-1 text-xs text-[#c8b896]">{t.perMonthSuffix}</span></p>
                <p className="mt-5 text-sm text-[#c8b896] break-keep text-pretty">{p.desc}</p>
                <a className="mt-10 block border border-[#d4a574] py-3 text-center text-xs tracking-[0.3em] text-[#d4a574]">
                  {t.startCta}
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[#3a1f25] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-center text-[11px] tracking-[0.5em] text-[#d4a574]">{t.faqEyebrow}</p>
          <div className="mt-10 space-y-8">
            {t.faqs.map((f) => (
              <div key={f.q} className="border-b border-[#3a1f25] pb-8">
                <h3 className="font-serif text-lg break-keep text-balance">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c8b896] break-keep text-pretty">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#3a1f25] py-10 text-center text-[10px] tracking-[0.4em] text-[#7a6a55] break-keep text-pretty">
        {t.footer}
      </footer>
    </div>
  );
}
