import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawVisit from "@/lib/templates/GreenLawVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "찾아오시는 길 | 그린 법률사무소",
  description: "그린 법률사무소 상담 신청 — 메이크페이지가 제작한 법률사무소 홈페이지 템플릿의 상담 신청 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/visit",
      ko: "/ko/portfolio/green-law/visit",
      "x-default": "/portfolio/green-law/visit",
    },
  },
};

export default function GreenLawVisitPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "그린 법률사무소", path: "/ko/portfolio/green-law" },
            { name: "찾아오시는 길", path: "/ko/portfolio/green-law/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawVisit lang="ko" />
    </>
  );
}
