import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VillaToscanaMenu from "@/lib/templates/VillaToscanaMenu";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "테이스팅 메뉴 | 빌라 토스카나",
  description: "빌라 토스카나의 7코스 테이스팅 메뉴 전체 — 메이크페이지가 제작한 파인다이닝 홈페이지 템플릿의 메뉴 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/villa-toscana/menu",
      ko: "/ko/portfolio/villa-toscana/menu",
      "x-default": "/portfolio/villa-toscana/menu",
    },
  },
};

export default function VillaToscanaMenuPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "빌라 토스카나", path: "/ko/portfolio/villa-toscana" },
            { name: "메뉴", path: "/ko/portfolio/villa-toscana/menu" },
          ])
        )}
      />
      <BackToPortfolio />
      <VillaToscanaMenu lang="ko" />
    </>
  );
}
