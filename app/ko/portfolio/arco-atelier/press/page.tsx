import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import ArcoAtelierPress from "@/lib/templates/ArcoAtelierPress";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Press | 아르코 아틀리에",
  description: "2009년부터 지금까지, 아르코 아틀리에가 받은 수상과 언론 보도 — 메이크페이지가 제작한 건축 사무소 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/arco-atelier/press",
      ko: "/ko/portfolio/arco-atelier/press",
      "x-default": "/portfolio/arco-atelier/press",
    },
  },
};

export default function ArcoAtelierPressPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "아르코 아틀리에", path: "/ko/portfolio/arco-atelier" },
            { name: "Press", path: "/ko/portfolio/arco-atelier/press" },
          ])
        )}
      />
      <BackToPortfolio />
      <ArcoAtelierPress lang="ko" />
    </>
  );
}
