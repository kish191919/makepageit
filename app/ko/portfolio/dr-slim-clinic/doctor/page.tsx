import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DrSlimClinicDoctor from "@/lib/templates/DrSlimClinicDoctor";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "원장 소개 | 닥터슬림 의원",
  description:
    "매주 1:1 진료 원칙을 지키는 닥터슬림 의원 대표원장을 소개합니다. 메이크페이지가 제작한 Dr. Slim Clinic 홈페이지 템플릿의 원장 소개 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/dr-slim-clinic/doctor",
      ko: "/ko/portfolio/dr-slim-clinic/doctor",
      "x-default": "/portfolio/dr-slim-clinic/doctor",
    },
  },
};

export default function DrSlimClinicDoctorPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "닥터슬림 다이어트", path: "/ko/portfolio/dr-slim-clinic" },
            { name: "원장 소개", path: "/ko/portfolio/dr-slim-clinic/doctor" },
          ])
        )}
      />
      <BackToPortfolio />
      <DrSlimClinicDoctor lang="ko" />
    </>
  );
}
