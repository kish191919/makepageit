import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "가격안내",
  description:
    "Portfolio Lite, Portfolio Pro, Business Starter — 메이크페이지의 투명한 3가지 번들. 일회성 비용과 월 구독 모두 한눈에.",
};

const compare = [
  { item: "추천 대상", lite: "비상업 개인", pro: "프리랜서·강사" },
  { item: "홈페이지 제작비용 (일회성)", lite: "$299", pro: "$449" },
  { item: "호스팅 + DB + 유지보수 (월비용)", lite: "$15", pro: "$65" },
  { item: "└ 호스팅", lite: "무료 (비상업용)", pro: "$20/월 포함", isSub: true },
  { item: "└ 데이터베이스", lite: "무료 (비상업용)", pro: "$25/월 포함", isSub: true },
  { item: "└ 유지보수", lite: "$15/월 포함", pro: "$20/월 포함", isSub: true },
  { item: "연 도메인", lite: "$15", pro: "$15" },
  { item: "1년 총 예상비용", lite: "$494", pro: "$1,244" },
  { item: "2년차부터 매년 예상비용", lite: "$195", pro: "$795" },
  { item: "페이지 수", lite: "3페이지", pro: "5페이지" },
  { item: "모바일 반응형", lite: "✓", pro: "✓" },
  { item: "기본 SEO", lite: "✓", pro: "✓" },
  { item: "로그인·게시판·사진첩", lite: "—", pro: "2개 무료 추가" },
  { item: "추가 페이지", lite: "$50/페이지", pro: "$50/페이지" },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="가격 안내"
        title="숨겨진 비용 없이, 명확한 패키지."
        description="패키지 선택이 어려우시다면 무료 상담을 신청해주세요. 사장님 비즈니스에 맞는 옵션을 함께 정하겠습니다."
      />

      <Pricing />

      <section className="section bg-ink-50">
        <div className="container-custom">
          <p className="eyebrow">상세 비교</p>
          <h2 className="mt-3 h-section">패키지 한눈에 비교하기</h2>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-ink-200 bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-ink-200 bg-ink-50 text-left text-ink-700">
                  <th className="px-6 py-4 font-semibold">항목</th>
                  <th className="px-6 py-4 font-semibold">PORTFOLIO LITE</th>
                  <th className="px-6 py-4 font-semibold">PORTFOLIO PRO</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => {
                  const isYearTotal = row.item === "1년 총 예상비용";
                  const isSub = "isSub" in row && row.isSub;
                  return (
                    <tr
                      key={row.item}
                      className={`border-b border-ink-100 last:border-0 ${
                        isYearTotal ? "bg-brand-50/60" : ""
                      } ${isSub ? "bg-ink-50/40" : ""}`}
                    >
                      <td
                        className={`py-4 ${isSub ? "pl-12 pr-6 font-medium text-ink-800" : "px-6 font-semibold text-ink-900"} ${
                          isYearTotal ? "text-brand-700" : ""
                        }`}
                      >
                        {row.item}
                      </td>
                      <td
                        className={`px-6 py-4 ${
                          isYearTotal ? "font-bold text-brand-700" : isSub ? "text-ink-800" : "text-ink-700"
                        }`}
                      >
                        {row.lite}
                      </td>
                      <td
                        className={`px-6 py-4 ${
                          isYearTotal ? "font-bold text-brand-700" : isSub ? "text-ink-800" : "text-ink-700"
                        }`}
                      >
                        {row.pro}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
