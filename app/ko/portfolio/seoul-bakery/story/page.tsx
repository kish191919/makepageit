import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SeoulBakeryStory from "@/lib/templates/SeoulBakeryStory";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "스토리 | 서울 베이커리",
  description: "20년, 오븐 하나 — 서울 베이커리의 이야기. 메이크페이지가 제작한 Seoul Bakery 홈페이지 템플릿의 스토리 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/seoul-bakery/story",
      ko: "/ko/portfolio/seoul-bakery/story",
      "x-default": "/portfolio/seoul-bakery/story",
    },
  },
};

export default function SeoulBakeryStoryPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "서울 베이커리", path: "/ko/portfolio/seoul-bakery" },
            { name: "스토리", path: "/ko/portfolio/seoul-bakery/story" },
          ])
        )}
      />
      <BackToPortfolio />
      <SeoulBakeryStory lang="ko" />
    </>
  );
}
