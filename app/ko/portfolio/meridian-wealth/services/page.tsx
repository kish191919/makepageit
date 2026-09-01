import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthServices from "@/lib/templates/MeridianWealthServices";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "서비스 | 메리디안 자산관리",
  description: "은퇴 설계부터 사업주 재무설계까지, 메리디안 자산관리가 제공하는 수수료 기반 서비스 — 메이크페이지가 제작한 자산관리 홈페이지 템플릿의 서비스 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/services",
      ko: "/ko/portfolio/meridian-wealth/services",
      "x-default": "/portfolio/meridian-wealth/services",
    },
  },
};

export default function MeridianWealthServicesPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "메리디안 자산관리", path: "/ko/portfolio/meridian-wealth" },
            { name: "서비스", path: "/ko/portfolio/meridian-wealth/services" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthServices lang="ko" />
    </>
  );
}
