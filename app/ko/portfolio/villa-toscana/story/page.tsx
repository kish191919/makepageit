import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VillaToscanaStory from "@/lib/templates/VillaToscanaStory";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "우리의 이야기 | 빌라 토스카나",
  description: "빌라 토스카나의 14년 — 셰프와 연혁, 그리고 철학. 메이크페이지가 제작한 파인다이닝 홈페이지 템플릿의 스토리 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/villa-toscana/story",
      ko: "/ko/portfolio/villa-toscana/story",
      "x-default": "/portfolio/villa-toscana/story",
    },
  },
};

export default function VillaToscanaStoryPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "빌라 토스카나", path: "/ko/portfolio/villa-toscana" },
            { name: "스토리", path: "/ko/portfolio/villa-toscana/story" },
          ])
        )}
      />
      <BackToPortfolio />
      <VillaToscanaStory lang="ko" />
    </>
  );
}
