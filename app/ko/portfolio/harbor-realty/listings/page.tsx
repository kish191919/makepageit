import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtyListings from "@/lib/templates/HarborRealtyListings";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "매물 | 하버앤베일 부동산",
  description: "하버앤베일 부동산의 모든 활성 매물 — 메이크페이지가 제작한 부동산 홈페이지 템플릿의 매물 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/listings",
      ko: "/ko/portfolio/harbor-realty/listings",
      "x-default": "/portfolio/harbor-realty/listings",
    },
  },
};

export default function HarborRealtyListingsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "하버앤베일 부동산", path: "/ko/portfolio/harbor-realty" },
            { name: "매물", path: "/ko/portfolio/harbor-realty/listings" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtyListings lang="ko" />
    </>
  );
}
