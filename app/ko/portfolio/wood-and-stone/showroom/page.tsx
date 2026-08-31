import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WoodAndStoneShowroom from "@/lib/templates/WoodAndStoneShowroom";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "쇼룸 | Wood & Stone",
  description: "Wood & Stone 쇼룸 방문 안내 — 메이크페이지가 제작한 가구 홈페이지 템플릿의 쇼룸 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/wood-and-stone/showroom",
      ko: "/ko/portfolio/wood-and-stone/showroom",
      "x-default": "/portfolio/wood-and-stone/showroom",
    },
  },
};

export default function WoodAndStoneShowroomPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Wood & Stone", path: "/ko/portfolio/wood-and-stone" },
            { name: "쇼룸", path: "/ko/portfolio/wood-and-stone/showroom" },
          ])
        )}
      />
      <BackToPortfolio />
      <WoodAndStoneShowroom lang="ko" />
    </>
  );
}
