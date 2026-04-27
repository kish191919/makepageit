import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    n: "01",
    icon: "📞",
    title: "무료 상담 · 견적",
    subtitle: "30분 무료 통화",
    body: "목적·타겟·예산 파악 후 패키지 추천",
  },
  {
    n: "02",
    icon: "✏️",
    title: "기획 · 디자인",
    subtitle: "단계별 컨펌",
    body: "사이트맵·와이어프레임·시안 순차 확인",
  },
  {
    n: "03",
    icon: "🚀",
    title: "검수 · 오픈",
    subtitle: "테스트 → 정식 오픈",
    body: "도메인·SSL·검색엔진 등록까지 일괄",
  },
  {
    n: "04",
    icon: "🛟",
    title: "운영 · 유지보수",
    subtitle: "전담 매니저 케어",
    body: "콘텐츠·기능 추가·성능 점검 지원",
  },
];

export default function Process() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-32 top-20 hidden h-[420px] w-[420px] rounded-full bg-brand-200 opacity-30 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -right-24 bottom-10 hidden h-[360px] w-[360px] rounded-full bg-accent-400 opacity-20 blur-3xl lg:block" />

      <div className="container-custom relative z-10">
        <SectionHeading
          align="center"
          eyebrow="프로세스"
          title="투명한 4단계, 어디까지 진행됐는지 항상 보입니다"
          description="다음 회의 때 무엇을 보여드릴지, 다음 결제는 언제인지 — 모든 일정이 명확합니다."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-ink-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-600 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-brand-600">{s.n}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                    STEP
                  </span>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-xl">
                  {s.icon}
                </div>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-600">{s.subtitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.body}</p>
              {i < steps.length - 1 && (
                <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-ink-200 lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
