import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { left: "DR.", right: "SLIM" },
    cta: "☎ Free 1:1 Call",
    hero: {
      tag: "🔥 April only — 80% off intake visit",
      titleAccent: "Lose 25 lbs in 12 weeks",
      titleA: "without rebound,",
      titleB: "for good.",
      bullets: [
        "✅ Validated across 12,400 patient cases",
        "✅ 1:1 with the medical director, weekly",
        "✅ Real-food meal coaching — no starving",
      ],
      cardTitle: "📋 30-second free assessment",
      placeholders: { name: "Full name", phone: "Phone (last 4)" },
      submit: "Send",
      note: "* A care manager will text within 1 minute.",
      badge1: "Top-rated Wellness · NYC",
      badge2: "Avg. -25 lbs ↓",
    },
    stats: [
      { v: "-25 lbs", l: "Avg. loss (3 mo)" },
      { v: "98.2%", l: "Would return" },
      { v: "12,400+", l: "Cases handled" },
      { v: "4.9★", l: "Google rating" },
    ],
    resultsTitleA: "Real",
    resultsTitleB: " patient results",
    resultsNote: "Only consented cases shown (faces blurred)",
    weekResults: "result",
    beforeAfter: [
      { name: "K., 30s, professional", weeks: "8 weeks", drop: "-20 lbs", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=900&q=80&auto=format&fit=crop" },
      { name: "P., 40s, parent of two", weeks: "12 weeks", drop: "-32 lbs", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80&auto=format&fit=crop" },
      { name: "J., 20s, student", weeks: "6 weeks", drop: "-15 lbs", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80&auto=format&fit=crop" },
    ],
    reviewsTitle: "Real reviews",
    reviews: [
      { name: "L. (32, Brooklyn)", text: "Lost 20 lbs in 8 weeks. The meal plan was livable, not punishing." },
      { name: "P. (29, Queens)", text: "The director sat with me weekly. That's what made it stick." },
      { name: "J. (45, Hoboken)", text: "Zero rebound. Maintaining for a year now!" },
    ],
    faqsTitle: "Frequently asked",
    faqs: [
      { q: "Is this a drug-only program?", a: "No. 70% is meal and activity coaching; appetite support is used selectively, when warranted." },
      { q: "How much is the intake?", a: "First visit + body composition + 1:1 consult is bundled at $19." },
      { q: "Can I do this remotely?", a: "Yes — monthly in-person plus a virtual coaching track is available." },
    ],
    bottomCta: {
      title: "This year, actually lose it.",
      body: "April: only 50 free consults a week.",
      button: "Request a Free Call →",
    },
    footer: "Licensed wellness clinic NYC · Dr. Slim Wellness · Director: Dr. K.",
  },
  ko: {
    brand: { left: "DR.", right: "SLIM" },
    cta: "☎ 무료 상담 1:1",
    hero: {
      tag: "🔥 4월 한정 — 초진 80% 할인",
      titleAccent: "3개월 -12kg",
      titleA: "요요 없이 만든",
      titleB: "체질 다이어트.",
      bullets: [
        "✅ 12,400명 임상 데이터로 검증",
        "✅ 1:1 원장 직접 진료 + 매주 면담",
        "✅ 굶지 않는 한식 식단 코칭",
      ],
      cardTitle: "📋 30초 무료 체질 진단",
      placeholders: { name: "성함", phone: "연락처 뒷자리" },
      submit: "진단 받기",
      note: "* 1분 안에 매니저가 카톡으로 연락드립니다.",
      badge1: "네이버 다이어트 1위",
      badge2: "평균 -12.4kg ↓",
    },
    stats: [
      { v: "-12.4kg", l: "평균 감량 (3개월)" },
      { v: "98.2%", l: "재방문 의사" },
      { v: "12,400+", l: "누적 케이스" },
      { v: "4.9★", l: "네이버 평점" },
    ],
    resultsTitleA: "실제 환자",
    resultsTitleB: "의 변화",
    resultsNote: "동의받은 케이스만 노출됩니다 (모자이크 처리)",
    weekResults: "결과",
    beforeAfter: [
      { name: "30대 직장인 K님", weeks: "8주", drop: "-9.2kg", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=900&q=80&auto=format&fit=crop" },
      { name: "40대 주부 P님", weeks: "12주", drop: "-14.8kg", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80&auto=format&fit=crop" },
      { name: "20대 학생 J님", weeks: "6주", drop: "-7.1kg", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80&auto=format&fit=crop" },
    ],
    reviewsTitle: "실제 후기",
    reviews: [
      { name: "이○○ (32세, 강남구)", text: "8주 만에 9kg 빠졌어요. 식단도 강박 없이 가능했습니다." },
      { name: "박○○ (29세, 송파구)", text: "원장님이 직접 매주 면담해주셔서 진짜 든든했어요." },
      { name: "정○○ (45세, 마포구)", text: "요요 한 번도 없습니다. 1년째 유지 중!" },
    ],
    faqsTitle: "자주 묻는 질문",
    faqs: [
      { q: "약물 위주의 다이어트인가요?", a: "아닙니다. 식단·운동 코칭이 70%, 식욕 조절은 보조 수단으로만 사용합니다." },
      { q: "초진 비용은 얼마인가요?", a: "초진 + 체성분 + 1:1 상담 패키지가 19,800원으로 운영됩니다." },
      { q: "원거리도 가능한가요?", a: "월 1회 내원 + 비대면 코칭 프로그램이 별도로 있습니다." },
    ],
    bottomCta: {
      title: "올해는, 정말 빼봅시다.",
      body: "4월 무료 상담 일주일 단 50명 한정",
      button: "무료 상담 신청 →",
    },
    footer: "의료광고 사전심의필 제2025-1234호 · 닥터슬림 의원 · 대표원장 김OO",
  },
} as const;

export default function DrSlimClinic({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="text-xl font-black tracking-tight">
            {t.brand.left}<span className="text-[#0091ff]">{t.brand.right}</span>
          </div>
          <a className="rounded-full bg-[#0091ff] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#0091ff]/30">
            {t.cta}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#e7f4ff] via-white to-[#fff7e6]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.1fr_1fr] md:items-center md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ff5f5f]/10 px-3 py-1 text-xs font-bold text-[#ff5f5f]">
              {t.hero.tag}
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.15] md:text-6xl">
              <span className="rounded bg-yellow-200 px-1.5">{t.hero.titleAccent}</span>,
              <br />
              {t.hero.titleA}
              <br />
              {t.hero.titleB}
            </h1>
            <ul className="mt-6 space-y-2 text-sm text-slate-700 md:text-base">
              {t.hero.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-slate-100">
              <p className="text-sm font-bold">{t.hero.cardTitle}</p>
              <form className="mt-3 grid gap-2 sm:grid-cols-[1fr_120px_auto]">
                <input
                  placeholder={t.hero.placeholders.name}
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0091ff]"
                />
                <input
                  placeholder={t.hero.placeholders.phone}
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0091ff]"
                />
                <button className="rounded-lg bg-[#0091ff] px-5 py-3 text-sm font-bold text-white">
                  {t.hero.submit}
                </button>
              </form>
              <p className="mt-2 text-[11px] text-slate-400">{t.hero.note}</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-4 z-10 rotate-[-6deg] rounded-2xl bg-[#ff5f5f] px-4 py-2 text-xs font-bold text-white shadow-xl">
              {t.hero.badge1}
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop"
                alt="Dr. Slim"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rotate-[5deg] rounded-2xl bg-yellow-400 px-4 py-2 text-xs font-bold text-slate-900 shadow-xl">
              {t.hero.badge2}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-black text-[#0091ff] md:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-black md:text-4xl">
          <span className="text-[#0091ff]">{t.resultsTitleA}</span>{t.resultsTitleB}
        </h2>
        <p className="mt-3 text-center text-sm text-slate-500">{t.resultsNote}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.beforeAfter.map((b) => (
            <article key={b.name} className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-100">
              <div className="relative aspect-[4/3]">
                <Image src={b.img} alt={b.name} fill className="object-cover" />
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">
                  {b.weeks} {t.weekResults}
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold">{b.name}</p>
                <p className="mt-1 text-2xl font-black text-[#ff5f5f]">{b.drop}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">{t.reviewsTitle}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.reviews.map((r, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-amber-400">★★★★★</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">“{r.text}”</p>
                <p className="mt-5 text-xs font-semibold text-slate-500">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center text-3xl font-black md:text-4xl">{t.faqsTitle}</h2>
        <div className="mt-10 space-y-3">
          {t.faqs.map((f) => (
            <details key={f.q} className="rounded-2xl bg-slate-50 p-5 [&_summary]:cursor-pointer">
              <summary className="flex items-center justify-between font-bold">
                {f.q}
                <span className="text-[#0091ff]">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#0091ff] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black md:text-5xl">{t.bottomCta.title}</h2>
          <p className="mt-4 text-white/90">{t.bottomCta.body}</p>
          <a className="mt-8 inline-block rounded-full bg-white px-10 py-4 text-base font-black text-[#0091ff] shadow-2xl">
            {t.bottomCta.button}
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 py-6 text-center text-[11px] text-slate-400">
        {t.footer}
      </footer>
    </div>
  );
}
