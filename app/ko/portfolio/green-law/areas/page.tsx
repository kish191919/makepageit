import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawAreas from "@/lib/templates/GreenLawAreas";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "업무 영역 | 그린 법률사무소",
  description: "그린 법률사무소의 6개 전문 분야 — 메이크페이지가 제작한 법률사무소 홈페이지 템플릿의 업무 영역 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/areas",
      ko: "/ko/portfolio/green-law/areas",
      "x-default": "/portfolio/green-law/areas",
    },
  },
};

export default function GreenLawAreasPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "그린 법률사무소", path: "/ko/portfolio/green-law" },
            { name: "업무 영역", path: "/ko/portfolio/green-law/areas" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawAreas lang="ko" />
    </>
  );
}
