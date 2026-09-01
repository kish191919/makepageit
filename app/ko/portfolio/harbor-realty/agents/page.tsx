import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtyAgents from "@/lib/templates/HarborRealtyAgents";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "에이전트 | 하버앤베일 부동산",
  description: "하버앤베일 부동산의 에이전트 소개 — 메이크페이지가 제작한 부동산 홈페이지 템플릿의 팀 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/agents",
      ko: "/ko/portfolio/harbor-realty/agents",
      "x-default": "/portfolio/harbor-realty/agents",
    },
  },
};

export default function HarborRealtyAgentsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "하버앤베일 부동산", path: "/ko/portfolio/harbor-realty" },
            { name: "에이전트", path: "/ko/portfolio/harbor-realty/agents" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtyAgents lang="ko" />
    </>
  );
}
