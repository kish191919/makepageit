import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import KittWorksAbout from "@/lib/templates/KittWorksAbout";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "소개 | kitt.works",
  description: "프로덕트 디자이너 Kitt — 7년, 12개 회사, 그리고 조용하고 쓸모 있는 인터페이스를 만드는 작업. 메이크페이지가 제작한 포트폴리오 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/kitt-works/about",
      ko: "/ko/portfolio/kitt-works/about",
      "x-default": "/portfolio/kitt-works/about",
    },
  },
};

export default function KittWorksAboutPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "키트 웍스", path: "/ko/portfolio/kitt-works" },
            { name: "소개", path: "/ko/portfolio/kitt-works/about" },
          ])
        )}
      />
      <BackToPortfolio />
      <KittWorksAbout lang="ko" />
    </>
  );
}
