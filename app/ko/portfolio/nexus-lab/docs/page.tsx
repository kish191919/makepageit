import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NexusLabDocs from "@/lib/templates/NexusLabDocs";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "문서 | Nexus Lab",
  description: "Nexus Lab의 가이드와 API 레퍼런스 — 메이크페이지가 제작한 개발자 도구 홈페이지 템플릿의 문서 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/nexus-lab/docs",
      ko: "/ko/portfolio/nexus-lab/docs",
      "x-default": "/portfolio/nexus-lab/docs",
    },
  },
};

export default function NexusLabDocsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Nexus Lab", path: "/ko/portfolio/nexus-lab" },
            { name: "문서", path: "/ko/portfolio/nexus-lab/docs" },
          ])
        )}
      />
      <BackToPortfolio />
      <NexusLabDocs lang="ko" />
    </>
  );
}
