import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeStory from "@/lib/templates/NobleCoffeeStory";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "브랜드 스토리 | Noble Coffee Roasters",
  description:
    "농장, 타임라인, 그리고 사람들 — 메이크페이지가 제작한 Noble Coffee 홈페이지 템플릿의 스토리 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/story",
      ko: "/ko/portfolio/noble-coffee/story",
      "x-default": "/portfolio/noble-coffee/story",
    },
  },
};

export default function NobleCoffeeStoryPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Noble Coffee Roasters", path: "/ko/portfolio/noble-coffee" },
            { name: "스토리", path: "/ko/portfolio/noble-coffee/story" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeStory lang="ko" />
    </>
  );
}
