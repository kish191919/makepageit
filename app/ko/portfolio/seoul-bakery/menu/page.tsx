import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SeoulBakeryMenu from "@/lib/templates/SeoulBakeryMenu";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "전체 메뉴 | 서울 베이커리",
  description: "매일 새벽 구워내는 빵과 페이스트리, 케이크 — 메이크페이지가 제작한 Seoul Bakery 홈페이지 템플릿의 전체 메뉴 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/seoul-bakery/menu",
      ko: "/ko/portfolio/seoul-bakery/menu",
      "x-default": "/portfolio/seoul-bakery/menu",
    },
  },
};

export default function SeoulBakeryMenuPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "서울 베이커리", path: "/ko/portfolio/seoul-bakery" },
            { name: "전체 메뉴", path: "/ko/portfolio/seoul-bakery/menu" },
          ])
        )}
      />
      <BackToPortfolio />
      <SeoulBakeryMenu lang="ko" />
    </>
  );
}
