import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import IroncladIndustrialIndustries from "@/lib/templates/IroncladIndustrialIndustries";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "적용 산업 | 아이언클래드 산업",
  description: "항공우주, 방산, 중장비, 의료기기 분야를 아우르는 아이언클래드 산업의 생산 영역 — 메이크페이지가 제작한 제조업 홈페이지 템플릿의 적용 산업 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/ironclad-industrial/industries",
      ko: "/ko/portfolio/ironclad-industrial/industries",
      "x-default": "/portfolio/ironclad-industrial/industries",
    },
  },
};

export default function IroncladIndustrialIndustriesPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "아이언클래드 산업", path: "/ko/portfolio/ironclad-industrial" },
            { name: "적용 산업", path: "/ko/portfolio/ironclad-industrial/industries" },
          ])
        )}
      />
      <BackToPortfolio />
      <IroncladIndustrialIndustries lang="ko" />
    </>
  );
}
