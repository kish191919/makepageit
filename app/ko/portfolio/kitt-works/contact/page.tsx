import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import KittWorksContact from "@/lib/templates/KittWorksContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "문의하기 | kitt.works",
  description: "프로덕트 디자이너 Kitt에게 문의하세요. 메이크페이지가 제작한 포트폴리오 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/kitt-works/contact",
      ko: "/ko/portfolio/kitt-works/contact",
      "x-default": "/portfolio/kitt-works/contact",
    },
  },
};

export default function KittWorksContactPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "키트 웍스", path: "/ko/portfolio/kitt-works" },
            { name: "문의하기", path: "/ko/portfolio/kitt-works/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <KittWorksContact lang="ko" />
    </>
  );
}
