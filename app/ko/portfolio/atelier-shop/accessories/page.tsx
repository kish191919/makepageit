import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopAccessories from "@/lib/templates/AtelierShopAccessories";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "액세서리 | Atelier 22",
  description:
    "핸드 스티치 토트백, 실크 스카프, 울 베레모 — 메이크페이지가 제작한 Atelier Shop 홈페이지 템플릿의 액세서리 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/accessories",
      ko: "/ko/portfolio/atelier-shop/accessories",
      "x-default": "/portfolio/atelier-shop/accessories",
    },
  },
};

export default function AtelierShopAccessoriesPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Atelier 22", path: "/ko/portfolio/atelier-shop" },
            { name: "액세서리", path: "/ko/portfolio/atelier-shop/accessories" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopAccessories lang="ko" />
    </>
  );
}
