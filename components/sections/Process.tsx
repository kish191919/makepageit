import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    n: "01",
    title: "무료 상담 · 견적",
    body:
      "30분 통화 또는 미팅으로 사업의 목적, 타겟, 예산을 파악합니다. 적합한 패키지를 추천드려요.",
  },
  {
    n: "02",
    title: "기획 · 컨셉 시안",
    body:
      "사이트맵·와이어프레임·무드보드를 함께 검토합니다. 시작 전에 그림이 다 보이도록.",
  },
  {
    n: "03",
    title: "디자인 · 개발",
    body:
      "단계별로 디자인 컨펌을 받으며 진행합니다. 끝에 가서야 보여드리는 일은 없습니다.",
  },
  {
    n: "04",
    title: "검수 · 오픈",
    body:
      "테스트 배포 → 사장님 검수 → 정식 오픈. 도메인·SSL·검색엔진 등록까지 모두 처리합니다.",
  },
  {
    n: "05",
    title: "운영 · 유지보수",
    body:
      "오픈 후가 진짜 시작입니다. 콘텐츠 업로드, 기능 추가, 성능 점검을 전담 매니저가 도와드려요.",
  },
];

export default function Process() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          align="center"
          eyebrow="프로세스"
          title="투명한 5단계, 어디까지 진행됐는지 항상 보입니다"
          description="다음 회의 때 무엇을 보여드릴지, 다음 결제는 언제인지 — 모든 일정이 명확합니다."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-ink-200 bg-white p-6 transition hover:border-brand-600"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-brand-600">{s.n}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                  STEP
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink-900">{s.title}</h3>
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
