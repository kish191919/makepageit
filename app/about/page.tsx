import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/sections/CTA";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "메이크페이지는 사장님의 사업이 빛나는 홈페이지를 만드는 한국형 웹 에이전시입니다.",
};

const values = [
  {
    title: "사장님 시간을 아낍니다",
    body:
      "한 번의 미팅에서 결정되도록 충분히 준비합니다. 의사결정에 필요한 옵션과 근거를 미리 정리해드려요.",
  },
  {
    title: "결과로 증명합니다",
    body:
      "예쁜 사이트가 아니라 매출과 문의가 늘어나는 사이트를 만드는 것이 우리 KPI입니다.",
  },
  {
    title: "오픈 후가 진짜 시작",
    body:
      "납품으로 끝나는 작업이 아니라, 사장님 사업이 자라는 동안 함께하는 파트너가 되겠습니다.",
  },
  {
    title: "투명한 가격, 투명한 일정",
    body:
      "패키지·일정·결제 시점이 모두 명문화됩니다. '추가 비용 청구'는 없습니다.",
  },
];

const team = [
  { name: "김지훈", role: "대표 / 기획 디렉터", years: "12년차" },
  { name: "박서연", role: "디자인 리드", years: "9년차" },
  { name: "이도현", role: "프론트엔드 리드", years: "8년차" },
  { name: "정유진", role: "백엔드 / DevOps", years: "10년차" },
  { name: "최민호", role: "운영 매니저", years: "6년차" },
  { name: "강하영", role: "마케팅 매니저", years: "5년차" },
];

const milestones = [
  { y: "2022", t: "메이크페이지 설립, 첫 고객 5팀" },
  { y: "2023", t: "누적 100개 사이트 제작 돌파" },
  { y: "2024", t: "쇼핑몰·예약 시스템 자체 솔루션 런칭" },
  { y: "2025", t: "누적 320개 · 만족도 4.9 / 5 달성" },
  { y: "2026", t: "AI 기반 빠른 시안 베타 오픈" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="회사 소개"
        title="홈페이지가 사업을 키우는 도구가 되도록."
        description="메이크페이지는 디자인 회사이자 마케팅 파트너입니다. 320개 사장님의 첫 디지털 매장을 함께 만들었습니다."
      />

      <section className="section">
        <div className="container-custom grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">우리의 약속</p>
            <h2 className="mt-3 h-section">사장님의 시간이 가장 비싸다는 걸 압니다</h2>
            <p className="mt-6 lead">
              사장님은 자신의 사업을 가장 잘 아는 사람입니다. 우리는 그 지식을 디지털로
              옮기는 역할을 합니다. 회의가 아니라 결과로, 시안이 아니라 매출로 증명합니다.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-ink-200 bg-white p-6 transition hover:border-brand-600"
              >
                <h3 className="text-lg font-bold text-ink-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-900 text-white">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-ink-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <p className="eyebrow">팀</p>
          <h2 className="mt-3 h-section">기획·디자인·개발이 한 팀입니다</h2>
          <p className="mt-5 max-w-2xl lead">
            '대행사 → 외주 디자이너 → 외주 개발자'로 흩어지면 사장님 의도가 깨집니다.
            우리는 한 사무실, 한 슬랙, 한 책임자에서 끝까지 갑니다.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-4 rounded-3xl border border-ink-200 bg-white p-6"
              >
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-brand-50 text-lg font-bold text-brand-600">
                  {m.name[0]}
                </div>
                <div>
                  <p className="text-base font-bold text-ink-900">{m.name}</p>
                  <p className="text-sm text-ink-500">
                    {m.role} · {m.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-custom">
          <p className="eyebrow">발자취</p>
          <h2 className="mt-3 h-section">우리가 걸어온 길</h2>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {milestones.map((m) => (
              <li
                key={m.y}
                className="rounded-3xl border border-ink-200 bg-white p-6"
              >
                <p className="text-2xl font-extrabold text-brand-600">{m.y}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{m.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
