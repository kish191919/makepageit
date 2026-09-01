import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthContact from "@/lib/templates/MeridianWealthContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "상담 문의 | 메리디안 자산관리",
  description: "메리디안 자산관리와 30분 무료 상담을 예약하세요 — 메이크페이지가 제작한 자산관리 홈페이지 템플릿의 상담 문의 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/contact",
      ko: "/ko/portfolio/meridian-wealth/contact",
      "x-default": "/portfolio/meridian-wealth/contact",
    },
  },
};

export default function MeridianWealthContactPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "메리디안 자산관리", path: "/ko/portfolio/meridian-wealth" },
            { name: "상담 문의", path: "/ko/portfolio/meridian-wealth/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthContact lang="ko" />
    </>
  );
}
