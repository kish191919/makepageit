import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawLawyers from "@/lib/templates/GreenLawLawyers";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "구성원 | 그린 법률사무소",
  description: "그린 법률사무소의 변호사를 소개합니다 — 메이크페이지가 제작한 법률사무소 홈페이지 템플릿의 구성원 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/lawyers",
      ko: "/ko/portfolio/green-law/lawyers",
      "x-default": "/portfolio/green-law/lawyers",
    },
  },
};

export default function GreenLawLawyersPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "그린 법률사무소", path: "/ko/portfolio/green-law" },
            { name: "구성원", path: "/ko/portfolio/green-law/lawyers" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawLawyers lang="ko" />
    </>
  );
}
