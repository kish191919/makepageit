import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopNewIn from "@/lib/templates/AtelierShopNewIn";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "New In | Atelier 22",
  description:
    "이번 주에 도착한 신상품 — 코트, 니트, 액세서리까지. 메이크페이지가 제작한 Atelier Shop 홈페이지 템플릿의 New In 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/new-in",
      ko: "/ko/portfolio/atelier-shop/new-in",
      "x-default": "/portfolio/atelier-shop/new-in",
    },
  },
};

export default function AtelierShopNewInPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Atelier 22", path: "/ko/portfolio/atelier-shop" },
            { name: "New In", path: "/ko/portfolio/atelier-shop/new-in" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopNewIn lang="ko" />
    </>
  );
}
