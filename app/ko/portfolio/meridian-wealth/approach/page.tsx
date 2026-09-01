import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthApproach from "@/lib/templates/MeridianWealthApproach";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "운용 철학 | 메리디안 자산관리",
  description: "수수료 기반, 신의성실, 근거 기반 투자 철학과 프로세스 — 메이크페이지가 제작한 자산관리 홈페이지 템플릿의 운용 철학 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/approach",
      ko: "/ko/portfolio/meridian-wealth/approach",
      "x-default": "/portfolio/meridian-wealth/approach",
    },
  },
};

export default function MeridianWealthApproachPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "메리디안 자산관리", path: "/ko/portfolio/meridian-wealth" },
            { name: "운용 철학", path: "/ko/portfolio/meridian-wealth/approach" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthApproach lang="ko" />
    </>
  );
}
