import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { left: "Haru ", right: "Tutoring" },
    cta: "Get a Free Plan →",
    hero: {
      tag: "⚡ 3.2× ad conversion verified",
      titlePre: "Lift your reading score",
      titleAccent: "in a single semester.",
      titlePost: "",
      body: "Students who started below the 30th percentile reached the 80th in six months. Backed by results from 312 of our actual tutees.",
      offerTitle: "🎁 New-student offer",
      offerItems: [
        "✓ 50% off your first month",
        "✓ Free 1:1 diagnostic + study roadmap",
        "✓ One full-length practice SAT, on us",
      ],
      formPlaceholder: "Parent's phone number",
      formSubmit: "Request a Free Call",
      formNote: "* Your dedicated coach will call back within a minute.",
    },
    why: {
      title: ["Why ", "Haru?"],
      items: [
        { icon: "🎯", title: "SAT + School", desc: "A custom plan built from five years of test data" },
        { icon: "📈", title: "+220 pts on average", desc: "Real score gains across 312 enrolled students" },
        { icon: "👩‍🏫", title: "Capped at 1:6", desc: "Director-led classes — six students max" },
      ],
    },
    curriculum: {
      eyebrow: "Curriculum",
      title: "A semester-by-semester roadmap",
      steps: [
        { n: "01", t: "Diagnose", d: "1:1 placement + pinpoint weaknesses" },
        { n: "02", t: "Foundations", d: "Vocab and grammar essentials, mastered" },
        { n: "03", t: "Practice", d: "Two full timed sets every week" },
        { n: "04", t: "Top Tier", d: "Reading & inference at the 99th percentile" },
      ],
    },
    reviews: {
      title: "What parents say",
      items: [
        { name: "Parent · Stuyvesant HS, 9th grade", text: "Their reading score jumped from a 510 to a 670 in one semester." },
        { name: "Parent · Bronx Science, 10th grade", text: "More than the score — they actually learned to study on their own." },
        { name: "Parent · Brooklyn Tech, 11th grade", text: "Weekly progress reports made it easy to see what was working." },
      ],
    },
    faqsTitle: "Frequently asked",
    faqs: [
      { q: "What's the tuition?", a: "$420 per month for the regular cohort. Sibling enrollments get 10% off." },
      { q: "Is the placement test free?", a: "Yes — one free diagnostic, with a written report sent the same day." },
      { q: "Can my child join online?", a: "Live Zoom seats are open with the same curriculum and capacity." },
    ],
    bottomCta: {
      title: "Move your score by next semester.",
      body: "Free diagnostic seats are limited to 30 per week.",
      button: "Request a Free Call →",
    },
    footer: "© 2025 Haru Tutoring · NYC test-prep studio.",
  },
  ko: {
    brand: { left: "하루", right: "영어" },
    cta: "무료 상담 신청 →",
    hero: {
      tag: "⚡ 광고 전환율 3.2배 검증",
      titlePre: "영어 등급,",
      titleAccent: "한 학기 안에",
      titlePost: " 올립니다.",
      body: "모의고사 5등급 학생도 6개월 안에 2등급. 312명의 실제 데이터로 증명합니다.",
      offerTitle: "🎁 6월 신규 등록 혜택",
      offerItems: [
        "✓ 첫 달 수업료 50% 할인",
        "✓ 1:1 진단 상담 + 학습 로드맵 무료",
        "✓ 수능 기출 모의고사 무료 응시권",
      ],
      formPlaceholder: "학부모님 연락처",
      formSubmit: "무료 상담 신청",
      formNote: "* 1분 안에 담당 매니저가 연락드립니다.",
    },
    why: {
      title: ["왜 ", "하루영어인가?"],
      items: [
        { icon: "🎯", title: "수능·내신 동시", desc: "기출 데이터 5년치를 분석한 맞춤 커리큘럼" },
        { icon: "📈", title: "월 평균 1.4등급↑", desc: "재원생 312명 실제 성적 향상 데이터" },
        { icon: "👩‍🏫", title: "1:6 소수정예", desc: "원장이 직접 수업, 클래스당 6명까지만" },
      ],
    },
    curriculum: {
      eyebrow: "Curriculum",
      title: "한 학기 단위 단계별 로드맵",
      steps: [
        { n: "01", t: "진단", d: "1:1 레벨테스트 + 약점 분석" },
        { n: "02", t: "기초 다지기", d: "어휘·문법 빈출 표현 마스터" },
        { n: "03", t: "실전 적용", d: "기출/모의고사 주 2회 풀이" },
        { n: "04", t: "1등급 굳히기", d: "리스닝 + 빈칸 추론 집중" },
      ],
    },
    reviews: {
      title: "학부모님 후기",
      items: [
        { name: "수원외고 1학년 학부모", text: "1학기 만에 모의고사 등급이 5에서 2로 올랐어요." },
        { name: "동탄국제고 2학년 학부모", text: "스스로 공부하는 습관이 생겨 더 만족합니다." },
        { name: "수성중 3학년 학부모", text: "매주 학습 리포트가 와서 진행 상황이 한눈에 보여요." },
      ],
    },
    faqsTitle: "자주 묻는 질문",
    faqs: [
      { q: "수업료는 얼마인가요?", a: "정규반 기준 월 38만원. 형제 등록 시 10% 할인이 적용됩니다." },
      { q: "레벨테스트는 무료인가요?", a: "네, 1회 무료로 진행되며 결과지를 즉시 발송해드립니다." },
      { q: "온라인 수업도 가능한가요?", a: "원하시면 줌 라이브 수업으로 동일하게 참여할 수 있습니다." },
    ],
    bottomCta: {
      title: "지금 바로, 한 학기 후의 등급을 바꾸세요.",
      body: "무료 진단 상담은 일주일 단 30명 한정입니다.",
      button: "무료 상담 신청하기 →",
    },
    footer: "© 2025 하루영어학원. 등록 제2025-수원-XXX호.",
  },
} as const;

export default function HaruAcademy({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="bg-white text-slate-900">
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-black tracking-tight">
            {t.brand.left}<span className="text-[#ff5e3a]">{t.brand.right}</span>
          </div>
          <a className="rounded-full bg-[#ff5e3a] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[#ff5e3a]/30">
            {t.cta}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7f3] via-white to-[#ffece4]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
          <div>
            <span className="inline-block rounded-full bg-[#ff5e3a]/10 px-3 py-1 text-xs font-bold text-[#ff5e3a]">
              {t.hero.tag}
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.15] md:text-6xl">
              {t.hero.titlePre}<br />
              <span className="text-[#ff5e3a]">{t.hero.titleAccent}</span>{t.hero.titlePost}
            </h1>
            <p className="mt-5 max-w-md text-lg text-slate-600">
              {t.hero.body}
            </p>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-100">
              <p className="text-sm font-bold">{t.hero.offerTitle}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                {t.hero.offerItems.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <form className="mt-5 flex flex-col gap-2 sm:flex-row">
                <input
                  placeholder={t.hero.formPlaceholder}
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#ff5e3a]"
                />
                <button className="rounded-lg bg-[#ff5e3a] px-6 py-3 text-sm font-bold text-white">
                  {t.hero.formSubmit}
                </button>
              </form>
              <p className="mt-3 text-[11px] text-slate-400">{t.hero.formNote}</p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop"
              alt="Haru Tutoring"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            {t.why.title[0]}<span className="text-[#ff5e3a]">{t.why.title[1]}</span>
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.why.items.map((b) => (
              <div key={b.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="text-4xl">{b.icon}</div>
                <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-10 text-white md:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5e3a]">{t.curriculum.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">{t.curriculum.title}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {t.curriculum.steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="text-2xl font-black text-[#ff5e3a]">{s.n}</div>
                <div className="mt-3 font-bold">{s.t}</div>
                <p className="mt-1 text-xs text-white/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-black md:text-4xl">{t.reviews.title}</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.reviews.items.map((r, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-[#ff5e3a]">★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">“{r.text}”</p>
              <p className="mt-5 text-xs font-semibold text-slate-500">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">{t.faqsTitle}</h2>
          <div className="mt-10 space-y-3">
            {t.faqs.map((f) => (
              <details key={f.q} className="rounded-2xl bg-white p-5 ring-1 ring-slate-100 [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between font-bold">
                  {f.q}
                  <span className="text-[#ff5e3a]">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ff5e3a] py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black md:text-5xl">{t.bottomCta.title}</h2>
          <p className="mt-4 text-white/80">{t.bottomCta.body}</p>
          <a className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-base font-bold text-[#ff5e3a] shadow-2xl">
            {t.bottomCta.button}
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 text-center text-xs text-slate-400">
        {t.footer}
      </footer>
    </div>
  );
}
