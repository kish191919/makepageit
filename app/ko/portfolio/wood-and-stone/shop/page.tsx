import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WoodAndStoneShop from "@/lib/templates/WoodAndStoneShop";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "샵 | Wood & Stone",
  description: "Wood & Stone의 FOREST, QUARRY, CALM 전체 컬렉션 — 메이크페이지가 제작한 가구 홈페이지 템플릿의 샵 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/wood-and-stone/shop",
      ko: "/ko/portfolio/wood-and-stone/shop",
      "x-default": "/portfolio/wood-and-stone/shop",
    },
  },
};

export default function WoodAndStoneShopPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Wood & Stone", path: "/ko/portfolio/wood-and-stone" },
            { name: "샵", path: "/ko/portfolio/wood-and-stone/shop" },
          ])
        )}
      />
      <BackToPortfolio />
      <WoodAndStoneShop lang="ko" />
    </>
  );
}
