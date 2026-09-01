import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeShop from "@/lib/templates/NobleCoffeeShop";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "온라인 스토어 | Noble Coffee Roasters",
  description:
    "주문 즉시 로스팅해 신선하게 발송하는 원두 — 메이크페이지가 제작한 Noble Coffee 홈페이지 템플릿의 온라인 스토어 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/shop",
      ko: "/ko/portfolio/noble-coffee/shop",
      "x-default": "/portfolio/noble-coffee/shop",
    },
  },
};

export default function NobleCoffeeShopPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Noble Coffee Roasters", path: "/ko/portfolio/noble-coffee" },
            { name: "온라인 스토어", path: "/ko/portfolio/noble-coffee/shop" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeShop lang="ko" />
    </>
  );
}
