import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HaloFitnessFeatures from "@/lib/templates/HaloFitnessFeatures";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "기능 | HALO Fitness",
  description:
    "AI 코치, 심박·수면·회복 트래킹, 30일 챌린지 — 메이크페이지가 제작한 피트니스 앱 랜딩 템플릿 HALO의 핵심 기능 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/halo-fitness/features",
      ko: "/ko/portfolio/halo-fitness/features",
      "x-default": "/portfolio/halo-fitness/features",
    },
  },
};

export default function HaloFitnessFeaturesPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "헤일로 피트니스", path: "/ko/portfolio/halo-fitness" },
            { name: "기능", path: "/ko/portfolio/halo-fitness/features" },
          ])
        )}
      />
      <BackToPortfolio />
      <HaloFitnessFeatures lang="ko" />
    </>
  );
}
