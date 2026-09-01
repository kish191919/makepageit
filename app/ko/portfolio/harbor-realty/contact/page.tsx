import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtyContact from "@/lib/templates/HarborRealtyContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "문의 | 하버앤베일 부동산",
  description: "하버앤베일 부동산에 무료 가치평가나 투어를 요청하세요 — 메이크페이지가 제작한 부동산 홈페이지 템플릿의 문의 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/contact",
      ko: "/ko/portfolio/harbor-realty/contact",
      "x-default": "/portfolio/harbor-realty/contact",
    },
  },
};

export default function HarborRealtyContactPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "하버앤베일 부동산", path: "/ko/portfolio/harbor-realty" },
            { name: "문의", path: "/ko/portfolio/harbor-realty/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtyContact lang="ko" />
    </>
  );
}
