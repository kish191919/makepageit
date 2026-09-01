import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DrSlimClinicProgram from "@/lib/templates/DrSlimClinicProgram";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "프로그램 안내 | 닥터슬림 의원",
  description:
    "체성분 정밀 분석, 매주 1:1 원장 진료, 굶지 않는 한식 식단 코칭, 요요 방지 유지관리까지. 메이크페이지가 제작한 Dr. Slim Clinic 홈페이지 템플릿의 프로그램 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/dr-slim-clinic/program",
      ko: "/ko/portfolio/dr-slim-clinic/program",
      "x-default": "/portfolio/dr-slim-clinic/program",
    },
  },
};

export default function DrSlimClinicProgramPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "닥터슬림 다이어트", path: "/ko/portfolio/dr-slim-clinic" },
            { name: "프로그램", path: "/ko/portfolio/dr-slim-clinic/program" },
          ])
        )}
      />
      <BackToPortfolio />
      <DrSlimClinicProgram lang="ko" />
    </>
  );
}
