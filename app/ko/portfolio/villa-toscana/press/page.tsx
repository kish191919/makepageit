import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VillaToscanaPress from "@/lib/templates/VillaToscanaPress";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "언론 보도 | 빌라 토스카나",
  description: "2011년 개업 이후 빌라 토스카나에 대한 언론 및 가이드북 보도 — 메이크페이지가 제작한 파인다이닝 홈페이지 템플릿의 언론 보도 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/villa-toscana/press",
      ko: "/ko/portfolio/villa-toscana/press",
      "x-default": "/portfolio/villa-toscana/press",
    },
  },
};

export default function VillaToscanaPressPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "빌라 토스카나", path: "/ko/portfolio/villa-toscana" },
            { name: "언론 보도", path: "/ko/portfolio/villa-toscana/press" },
          ])
        )}
      />
      <BackToPortfolio />
      <VillaToscanaPress lang="ko" />
    </>
  );
}
