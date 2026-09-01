import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsContact from "@/lib/templates/SolsticeInteriorsContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "문의 | 솔스티스 인테리어",
  description: "솔스티스 인테리어에 프로젝트를 문의하세요 — 메이크페이지가 제작한 인테리어 디자인 홈페이지 템플릿의 문의 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/contact",
      ko: "/ko/portfolio/solstice-interiors/contact",
      "x-default": "/portfolio/solstice-interiors/contact",
    },
  },
};

export default function SolsticeInteriorsContactPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "솔스티스 인테리어", path: "/ko/portfolio/solstice-interiors" },
            { name: "문의", path: "/ko/portfolio/solstice-interiors/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsContact lang="ko" />
    </>
  );
}
