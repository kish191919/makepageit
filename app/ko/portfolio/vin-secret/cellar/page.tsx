import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VinSecretCellar from "@/lib/templates/VinSecretCellar";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "셀러 | Vin Secret",
  description: "이번 달 큐레이션 — 소믈리에가 고른 여섯 병, 메이크페이지가 제작한 Vin Secret 와인 클럽 홈페이지 템플릿의 셀러 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/vin-secret/cellar",
      ko: "/ko/portfolio/vin-secret/cellar",
      "x-default": "/portfolio/vin-secret/cellar",
    },
  },
};

export default function VinSecretCellarPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Vin Secret", path: "/ko/portfolio/vin-secret" },
            { name: "셀러", path: "/ko/portfolio/vin-secret/cellar" },
          ])
        )}
      />
      <BackToPortfolio />
      <VinSecretCellar lang="ko" />
    </>
  );
}
