import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VillaToscanaWine from "@/lib/templates/VillaToscanaWine";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "와인 리스트 | 빌라 토스카나",
  description: "빌라 토스카나의 320종 와인과 페어링 — 메이크페이지가 제작한 파인다이닝 홈페이지 템플릿의 와인 리스트 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/villa-toscana/wine",
      ko: "/ko/portfolio/villa-toscana/wine",
      "x-default": "/portfolio/villa-toscana/wine",
    },
  },
};

export default function VillaToscanaWinePageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "빌라 토스카나", path: "/ko/portfolio/villa-toscana" },
            { name: "와인", path: "/ko/portfolio/villa-toscana/wine" },
          ])
        )}
      />
      <BackToPortfolio />
      <VillaToscanaWine lang="ko" />
    </>
  );
}
