import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WoodAndStoneCollections from "@/lib/templates/WoodAndStoneCollections";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "컬렉션 | Wood & Stone",
  description: "Wood & Stone의 FOREST, QUARRY, CALM 컬렉션 — 메이크페이지가 제작한 가구 홈페이지 템플릿의 컬렉션 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/wood-and-stone/collections",
      ko: "/ko/portfolio/wood-and-stone/collections",
      "x-default": "/portfolio/wood-and-stone/collections",
    },
  },
};

export default function WoodAndStoneCollectionsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Wood & Stone", path: "/ko/portfolio/wood-and-stone" },
            { name: "컬렉션", path: "/ko/portfolio/wood-and-stone/collections" },
          ])
        )}
      />
      <BackToPortfolio />
      <WoodAndStoneCollections lang="ko" />
    </>
  );
}
