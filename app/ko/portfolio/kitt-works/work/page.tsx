import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import KittWorksWork from "@/lib/templates/KittWorksWork";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "작업 | kitt.works",
  description: "스트라이프, 리프트, 리니어, 라이엇게임즈 등 최근 프로덕트 디자인 프로젝트를 소개합니다. 메이크페이지가 제작한 포트폴리오 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/kitt-works/work",
      ko: "/ko/portfolio/kitt-works/work",
      "x-default": "/portfolio/kitt-works/work",
    },
  },
};

export default function KittWorksWorkPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "키트 웍스", path: "/ko/portfolio/kitt-works" },
            { name: "작업", path: "/ko/portfolio/kitt-works/work" },
          ])
        )}
      />
      <BackToPortfolio />
      <KittWorksWork lang="ko" />
    </>
  );
}
