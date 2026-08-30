import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NexusLabChangelog from "@/lib/templates/NexusLabChangelog";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "릴리스 기록 | Nexus Lab",
  description: "Nexus Lab의 모든 릴리스 기록 — 메이크페이지가 제작한 개발자 도구 홈페이지 템플릿의 체인지로그 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/nexus-lab/changelog",
      ko: "/ko/portfolio/nexus-lab/changelog",
      "x-default": "/portfolio/nexus-lab/changelog",
    },
  },
};

export default function NexusLabChangelogPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Nexus Lab", path: "/ko/portfolio/nexus-lab" },
            { name: "릴리스 기록", path: "/ko/portfolio/nexus-lab/changelog" },
          ])
        )}
      />
      <BackToPortfolio />
      <NexusLabChangelog lang="ko" />
    </>
  );
}
