import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtyNeighborhoods from "@/lib/templates/HarborRealtyNeighborhoods";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "지역 안내 | 하버앤베일 부동산",
  description: "하버앤베일 부동산이 담당하는 해안가 지역 가이드 — 메이크페이지가 제작한 부동산 홈페이지 템플릿의 지역 안내 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/neighborhoods",
      ko: "/ko/portfolio/harbor-realty/neighborhoods",
      "x-default": "/portfolio/harbor-realty/neighborhoods",
    },
  },
};

export default function HarborRealtyNeighborhoodsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "하버앤베일 부동산", path: "/ko/portfolio/harbor-realty" },
            { name: "지역 안내", path: "/ko/portfolio/harbor-realty/neighborhoods" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtyNeighborhoods lang="ko" />
    </>
  );
}
