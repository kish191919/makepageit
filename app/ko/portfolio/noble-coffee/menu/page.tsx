import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeMenu from "@/lib/templates/NobleCoffeeMenu";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "메뉴 | Noble Coffee Roasters",
  description:
    "싱글 오리진 필터 커피, 에스프레소 바, 아침 베이커리 — 메이크페이지가 제작한 Noble Coffee 홈페이지 템플릿의 메뉴 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/menu",
      ko: "/ko/portfolio/noble-coffee/menu",
      "x-default": "/portfolio/noble-coffee/menu",
    },
  },
};

export default function NobleCoffeeMenuPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Noble Coffee Roasters", path: "/ko/portfolio/noble-coffee" },
            { name: "메뉴", path: "/ko/portfolio/noble-coffee/menu" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeMenu lang="ko" />
    </>
  );
}
