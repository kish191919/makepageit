import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import BloomCosmeticsSets from "@/lib/templates/BloomCosmeticsSets";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Set | BLOOM",
  description:
    "인기 제품을 세트로 구성해 더 알뜰한 가격에. 메이크페이지가 제작한 블룸 코스메틱 홈페이지 템플릿의 Set 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/bloom-cosmetics/sets",
      ko: "/ko/portfolio/bloom-cosmetics/sets",
      "x-default": "/portfolio/bloom-cosmetics/sets",
    },
  },
};

export default function BloomCosmeticsSetsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "블룸 코스메틱", path: "/ko/portfolio/bloom-cosmetics" },
            { name: "Set", path: "/ko/portfolio/bloom-cosmetics/sets" },
          ])
        )}
      />
      <BackToPortfolio />
      <BloomCosmeticsSets lang="ko" />
    </>
  );
}
