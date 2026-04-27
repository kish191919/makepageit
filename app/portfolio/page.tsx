import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PortfolioFilterGrid from "@/components/sections/PortfolioFilterGrid";
import CTA from "@/components/sections/CTA";
import { portfolios } from "@/lib/data";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "메이크페이지가 제작한 브랜드 사이트, 쇼핑몰, 랜딩페이지, 예약 시스템 등 320여 건의 실제 사례.",
};

const categories = ["전체", "브랜딩 사이트", "쇼핑몰", "랜딩페이지", "예약 시스템", "포트폴리오"];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="포트폴리오"
        title="원하시는 스타일, 그대로 만들어 드립니다."
        description="아래 사례 중 마음에 드는 스타일이 있다면 말씀해 주세요. 비즈니스에 꼭 맞는 디자인과 기능으로 새롭게 구현해 드립니다."
        wide
      />

      <section className="section">
        <div className="container-custom">
          <PortfolioFilterGrid portfolios={portfolios} categories={categories} />
        </div>
      </section>

      <CTA />
    </>
  );
}
