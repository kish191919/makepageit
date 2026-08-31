import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VinSecretSommelier from "@/lib/templates/VinSecretSommelier";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "소믈리에 | Vin Secret",
  description: "소싱 철학 — 소믈리에가 와인을 고르는 방식. 메이크페이지가 제작한 Vin Secret 와인 클럽 홈페이지 템플릿의 소믈리에 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/vin-secret/sommelier",
      ko: "/ko/portfolio/vin-secret/sommelier",
      "x-default": "/portfolio/vin-secret/sommelier",
    },
  },
};

export default function VinSecretSommelierPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Vin Secret", path: "/ko/portfolio/vin-secret" },
            { name: "소믈리에", path: "/ko/portfolio/vin-secret/sommelier" },
          ])
        )}
      />
      <BackToPortfolio />
      <VinSecretSommelier lang="ko" />
    </>
  );
}
