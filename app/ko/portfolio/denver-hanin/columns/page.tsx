import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninColumns from "@/lib/templates/DenverHaninColumns";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "칼럼 | 덴버 한인 위클리",
  description: "지역 업주, 전문가, 오랜 주민들이 전하는 오피니언과 전문가 시각. 메이크페이지가 제작한 커뮤니티 포털 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/columns",
      ko: "/ko/portfolio/denver-hanin/columns",
      "x-default": "/portfolio/denver-hanin/columns",
    },
  },
};

export default function DenverHaninColumnsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "덴버 한인 위클리", path: "/ko/portfolio/denver-hanin" },
            { name: "칼럼", path: "/ko/portfolio/denver-hanin/columns" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninColumns lang="ko" />
    </>
  );
}
