import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import IroncladIndustrialProducts from "@/lib/templates/IroncladIndustrialProducts";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "제품 | 아이언클래드 산업",
  description: "아이언클래드 산업의 정밀 가공 부품과 조립품 — 메이크페이지가 제작한 제조업 홈페이지 템플릿의 제품 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/ironclad-industrial/products",
      ko: "/ko/portfolio/ironclad-industrial/products",
      "x-default": "/portfolio/ironclad-industrial/products",
    },
  },
};

export default function IroncladIndustrialProductsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "아이언클래드 산업", path: "/ko/portfolio/ironclad-industrial" },
            { name: "제품", path: "/ko/portfolio/ironclad-industrial/products" },
          ])
        )}
      />
      <BackToPortfolio />
      <IroncladIndustrialProducts lang="ko" />
    </>
  );
}
