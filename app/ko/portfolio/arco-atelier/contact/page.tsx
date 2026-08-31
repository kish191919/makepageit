import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import ArcoAtelierContact from "@/lib/templates/ArcoAtelierContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact | 아르코 아틀리에",
  description: "아르코 아틀리에에 문의하세요 — 오피스 정보와 프로젝트 문의 폼. 메이크페이지가 제작한 건축 사무소 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/arco-atelier/contact",
      ko: "/ko/portfolio/arco-atelier/contact",
      "x-default": "/portfolio/arco-atelier/contact",
    },
  },
};

export default function ArcoAtelierContactPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "아르코 아틀리에", path: "/ko/portfolio/arco-atelier" },
            { name: "Contact", path: "/ko/portfolio/arco-atelier/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <ArcoAtelierContact lang="ko" />
    </>
  );
}
