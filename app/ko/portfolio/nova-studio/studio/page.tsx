import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NovaStudioStudio from "@/lib/templates/NovaStudioStudio";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "스튜디오 | 노바 스튜디오",
  description:
    "6년째 촬영을 이어온 자연광 스튜디오와 무한 백 공간을 소개합니다 — 메이크페이지가 제작한 Nova Studio 포토그래퍼 홈페이지 템플릿의 스튜디오 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/nova-studio/studio",
      ko: "/ko/portfolio/nova-studio/studio",
      "x-default": "/portfolio/nova-studio/studio",
    },
  },
};

export default function NovaStudioStudioPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "노바 스튜디오", path: "/ko/portfolio/nova-studio" },
            { name: "스튜디오", path: "/ko/portfolio/nova-studio/studio" },
          ])
        )}
      />
      <BackToPortfolio />
      <NovaStudioStudio lang="ko" />
    </>
  );
}
