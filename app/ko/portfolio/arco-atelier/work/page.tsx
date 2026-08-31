import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import ArcoAtelierWork from "@/lib/templates/ArcoAtelierWork";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Work | 아르코 아틀리에",
  description: "2019년부터 2024년까지, 아르코 아틀리에가 지은 건축물과 인테리어 — 메이크페이지가 제작한 건축 사무소 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/arco-atelier/work",
      ko: "/ko/portfolio/arco-atelier/work",
      "x-default": "/portfolio/arco-atelier/work",
    },
  },
};

export default function ArcoAtelierWorkPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "아르코 아틀리에", path: "/ko/portfolio/arco-atelier" },
            { name: "Work", path: "/ko/portfolio/arco-atelier/work" },
          ])
        )}
      />
      <BackToPortfolio />
      <ArcoAtelierWork lang="ko" />
    </>
  );
}
