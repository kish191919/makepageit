import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopLookbook from "@/lib/templates/AtelierShopLookbook";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "룩북 | Atelier 22",
  description:
    "In Bloom — 메이크페이지가 제작한 Atelier Shop 홈페이지 템플릿의 2026 봄·여름 룩북 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/lookbook",
      ko: "/ko/portfolio/atelier-shop/lookbook",
      "x-default": "/portfolio/atelier-shop/lookbook",
    },
  },
};

export default function AtelierShopLookbookPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Atelier 22", path: "/ko/portfolio/atelier-shop" },
            { name: "룩북", path: "/ko/portfolio/atelier-shop/lookbook" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopLookbook lang="ko" />
    </>
  );
}
