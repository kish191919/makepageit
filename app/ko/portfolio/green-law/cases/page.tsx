import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawCases from "@/lib/templates/GreenLawCases";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "주요 사례 | 그린 법률사무소",
  description: "그린 법률사무소가 마무리한 주요 사건들 — 메이크페이지가 제작한 법률사무소 홈페이지 템플릿의 사례 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/cases",
      ko: "/ko/portfolio/green-law/cases",
      "x-default": "/portfolio/green-law/cases",
    },
  },
};

export default function GreenLawCasesPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "그린 법률사무소", path: "/ko/portfolio/green-law" },
            { name: "주요 사례", path: "/ko/portfolio/green-law/cases" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawCases lang="ko" />
    </>
  );
}
