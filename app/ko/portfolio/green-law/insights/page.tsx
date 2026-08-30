import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawInsights from "@/lib/templates/GreenLawInsights";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "인사이트 | 그린 법률사무소",
  description: "그린 법률사무소가 전하는 쉬운 법률 설명 — 메이크페이지가 제작한 법률사무소 홈페이지 템플릿의 인사이트 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/insights",
      ko: "/ko/portfolio/green-law/insights",
      "x-default": "/portfolio/green-law/insights",
    },
  },
};

export default function GreenLawInsightsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "그린 법률사무소", path: "/ko/portfolio/green-law" },
            { name: "인사이트", path: "/ko/portfolio/green-law/insights" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawInsights lang="ko" />
    </>
  );
}
