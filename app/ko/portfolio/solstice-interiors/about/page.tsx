import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsAbout from "@/lib/templates/SolsticeInteriorsAbout";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "소개 | 솔스티스 인테리어",
  description: "솔스티스 인테리어 스튜디오 소개 — 메이크페이지가 제작한 인테리어 디자인 홈페이지 템플릿의 소개 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/about",
      ko: "/ko/portfolio/solstice-interiors/about",
      "x-default": "/portfolio/solstice-interiors/about",
    },
  },
};

export default function SolsticeInteriorsAboutPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "솔스티스 인테리어", path: "/ko/portfolio/solstice-interiors" },
            { name: "소개", path: "/ko/portfolio/solstice-interiors/about" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsAbout lang="ko" />
    </>
  );
}
