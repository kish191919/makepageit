import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsProcess from "@/lib/templates/SolsticeInteriorsProcess";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "프로세스 | 솔스티스 인테리어",
  description: "솔스티스 인테리어의 프로젝트 진행 과정 — 메이크페이지가 제작한 인테리어 디자인 홈페이지 템플릿의 프로세스 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/process",
      ko: "/ko/portfolio/solstice-interiors/process",
      "x-default": "/portfolio/solstice-interiors/process",
    },
  },
};

export default function SolsticeInteriorsProcessPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "솔스티스 인테리어", path: "/ko/portfolio/solstice-interiors" },
            { name: "프로세스", path: "/ko/portfolio/solstice-interiors/process" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsProcess lang="ko" />
    </>
  );
}
