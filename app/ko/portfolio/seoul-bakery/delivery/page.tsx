import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SeoulBakeryDelivery from "@/lib/templates/SeoulBakeryDelivery";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "당일배송 | 서울 베이커리",
  description: "다음 날 아침 배송 과정, 배송 가능 지역, 배송비 안내 — 메이크페이지가 제작한 Seoul Bakery 홈페이지 템플릿의 당일배송 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/seoul-bakery/delivery",
      ko: "/ko/portfolio/seoul-bakery/delivery",
      "x-default": "/portfolio/seoul-bakery/delivery",
    },
  },
};

export default function SeoulBakeryDeliveryPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "서울 베이커리", path: "/ko/portfolio/seoul-bakery" },
            { name: "당일배송", path: "/ko/portfolio/seoul-bakery/delivery" },
          ])
        )}
      />
      <BackToPortfolio />
      <SeoulBakeryDelivery lang="ko" />
    </>
  );
}
