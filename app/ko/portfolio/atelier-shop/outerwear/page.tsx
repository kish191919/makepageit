import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopOuterwear from "@/lib/templates/AtelierShopOuterwear";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "아우터 | Atelier 22",
  description:
    "리넨 랩 코트, 울 헤링본 코트, 퀼팅 필드 재킷 — 메이크페이지가 제작한 Atelier Shop 홈페이지 템플릿의 아우터 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/outerwear",
      ko: "/ko/portfolio/atelier-shop/outerwear",
      "x-default": "/portfolio/atelier-shop/outerwear",
    },
  },
};

export default function AtelierShopOuterwearPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Atelier 22", path: "/ko/portfolio/atelier-shop" },
            { name: "아우터", path: "/ko/portfolio/atelier-shop/outerwear" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopOuterwear lang="ko" />
    </>
  );
}
