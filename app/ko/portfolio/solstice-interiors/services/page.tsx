import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsServices from "@/lib/templates/SolsticeInteriorsServices";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "서비스 | 솔스티스 인테리어",
  description: "솔스티스 인테리어의 디자인 서비스와 비용 안내 — 메이크페이지가 제작한 인테리어 디자인 홈페이지 템플릿의 서비스 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/services",
      ko: "/ko/portfolio/solstice-interiors/services",
      "x-default": "/portfolio/solstice-interiors/services",
    },
  },
};

export default function SolsticeInteriorsServicesPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "솔스티스 인테리어", path: "/ko/portfolio/solstice-interiors" },
            { name: "서비스", path: "/ko/portfolio/solstice-interiors/services" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsServices lang="ko" />
    </>
  );
}
