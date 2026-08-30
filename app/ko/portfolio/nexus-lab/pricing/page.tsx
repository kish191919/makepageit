import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NexusLabPricing from "@/lib/templates/NexusLabPricing";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "가격 | Nexus Lab",
  description: "Nexus Lab의 Hobby, Team, Enterprise 요금제 — 메이크페이지가 제작한 개발자 도구 홈페이지 템플릿의 가격 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/nexus-lab/pricing",
      ko: "/ko/portfolio/nexus-lab/pricing",
      "x-default": "/portfolio/nexus-lab/pricing",
    },
  },
};

export default function NexusLabPricingPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Nexus Lab", path: "/ko/portfolio/nexus-lab" },
            { name: "가격", path: "/ko/portfolio/nexus-lab/pricing" },
          ])
        )}
      />
      <BackToPortfolio />
      <NexusLabPricing lang="ko" />
    </>
  );
}
