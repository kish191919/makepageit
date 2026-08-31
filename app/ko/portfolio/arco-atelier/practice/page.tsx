import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import ArcoAtelierPractice from "@/lib/templates/ArcoAtelierPractice";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Practice | 아르코 아틀리에",
  description: "적은 프로젝트와 온전한 집중으로 일하는 12명의 건축 사무소, 아르코 아틀리에 — 메이크페이지가 제작한 건축 사무소 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/arco-atelier/practice",
      ko: "/ko/portfolio/arco-atelier/practice",
      "x-default": "/portfolio/arco-atelier/practice",
    },
  },
};

export default function ArcoAtelierPracticePageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "아르코 아틀리에", path: "/ko/portfolio/arco-atelier" },
            { name: "Practice", path: "/ko/portfolio/arco-atelier/practice" },
          ])
        )}
      />
      <BackToPortfolio />
      <ArcoAtelierPractice lang="ko" />
    </>
  );
}
