import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SeoulBakeryVisit from "@/lib/templates/SeoulBakeryVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "매장 안내 | 서울 베이커리",
  description: "매장 운영시간, 주소, 오시는 길 안내 — 메이크페이지가 제작한 Seoul Bakery 홈페이지 템플릿의 매장 안내 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/seoul-bakery/visit",
      ko: "/ko/portfolio/seoul-bakery/visit",
      "x-default": "/portfolio/seoul-bakery/visit",
    },
  },
};

export default function SeoulBakeryVisitPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "서울 베이커리", path: "/ko/portfolio/seoul-bakery" },
            { name: "매장 안내", path: "/ko/portfolio/seoul-bakery/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <SeoulBakeryVisit lang="ko" />
    </>
  );
}
