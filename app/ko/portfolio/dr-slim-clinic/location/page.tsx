import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DrSlimClinicLocation from "@/lib/templates/DrSlimClinicLocation";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "오시는길 | 닥터슬림 의원",
  description:
    "닥터슬림 의원의 주소, 진료시간, 오시는길과 30초 무료 체질 진단 신청. 메이크페이지가 제작한 Dr. Slim Clinic 홈페이지 템플릿의 오시는길 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/dr-slim-clinic/location",
      ko: "/ko/portfolio/dr-slim-clinic/location",
      "x-default": "/portfolio/dr-slim-clinic/location",
    },
  },
};

export default function DrSlimClinicLocationPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "닥터슬림 다이어트", path: "/ko/portfolio/dr-slim-clinic" },
            { name: "오시는길", path: "/ko/portfolio/dr-slim-clinic/location" },
          ])
        )}
      />
      <BackToPortfolio />
      <DrSlimClinicLocation lang="ko" />
    </>
  );
}
