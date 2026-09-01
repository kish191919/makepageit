import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthAdvisors from "@/lib/templates/MeridianWealthAdvisors";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "어드바이저 | 메리디안 자산관리",
  description: "메리디안 자산관리의 CFP®·CFA® 어드바이저를 소개합니다 — 메이크페이지가 제작한 자산관리 홈페이지 템플릿의 어드바이저 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/advisors",
      ko: "/ko/portfolio/meridian-wealth/advisors",
      "x-default": "/portfolio/meridian-wealth/advisors",
    },
  },
};

export default function MeridianWealthAdvisorsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "메리디안 자산관리", path: "/ko/portfolio/meridian-wealth" },
            { name: "어드바이저", path: "/ko/portfolio/meridian-wealth/advisors" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthAdvisors lang="ko" />
    </>
  );
}
