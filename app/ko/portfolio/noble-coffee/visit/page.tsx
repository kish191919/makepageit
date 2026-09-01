import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeVisit from "@/lib/templates/NobleCoffeeVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "매장 안내 | Noble Coffee Roasters",
  description:
    "주소, 영업시간, 방문 전 알아두면 좋은 정보 — 메이크페이지가 제작한 Noble Coffee 홈페이지 템플릿의 매장 안내 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/visit",
      ko: "/ko/portfolio/noble-coffee/visit",
      "x-default": "/portfolio/noble-coffee/visit",
    },
  },
};

export default function NobleCoffeeVisitPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Noble Coffee Roasters", path: "/ko/portfolio/noble-coffee" },
            { name: "매장 안내", path: "/ko/portfolio/noble-coffee/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeVisit lang="ko" />
    </>
  );
}
