import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsPortfolio from "@/lib/templates/SolsticeInteriorsPortfolio";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "포트폴리오 | 솔스티스 인테리어",
  description: "솔스티스 인테리어의 대표 프로젝트 모음 — 메이크페이지가 제작한 인테리어 디자인 홈페이지 템플릿의 포트폴리오 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/portfolio",
      ko: "/ko/portfolio/solstice-interiors/portfolio",
      "x-default": "/portfolio/solstice-interiors/portfolio",
    },
  },
};

export default function SolsticeInteriorsPortfolioPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "솔스티스 인테리어", path: "/ko/portfolio/solstice-interiors" },
            { name: "포트폴리오", path: "/ko/portfolio/solstice-interiors/portfolio" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsPortfolio lang="ko" />
    </>
  );
}
