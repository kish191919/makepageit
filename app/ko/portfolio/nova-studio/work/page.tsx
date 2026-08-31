import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NovaStudioWork from "@/lib/templates/NovaStudioWork";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "전체 작업물 | 노바 스튜디오",
  description:
    "웨딩, 가족, 브랜드 캠페인, 에디토리얼까지 — 메이크페이지가 제작한 Nova Studio 포토그래퍼 홈페이지 템플릿의 전체 작업물 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/nova-studio/work",
      ko: "/ko/portfolio/nova-studio/work",
      "x-default": "/portfolio/nova-studio/work",
    },
  },
};

export default function NovaStudioWorkPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "노바 스튜디오", path: "/ko/portfolio/nova-studio" },
            { name: "전체 작업물", path: "/ko/portfolio/nova-studio/work" },
          ])
        )}
      />
      <BackToPortfolio />
      <NovaStudioWork lang="ko" />
    </>
  );
}
