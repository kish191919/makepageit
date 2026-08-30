import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthInsights from "@/lib/templates/MeridianWealthInsights";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "인사이트 | 메리디안 자산관리",
  description: "메리디안 자산관리가 전하는 수수료 기반 플래닝 노트 — 메이크페이지가 제작한 자산관리 홈페이지 템플릿의 인사이트 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/insights",
      ko: "/ko/portfolio/meridian-wealth/insights",
      "x-default": "/portfolio/meridian-wealth/insights",
    },
  },
};

export default function MeridianWealthInsightsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "메리디안 자산관리", path: "/ko/portfolio/meridian-wealth" },
            { name: "인사이트", path: "/ko/portfolio/meridian-wealth/insights" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthInsights lang="ko" />
    </>
  );
}
