import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicDoctors from "@/lib/templates/LumiereClinicDoctors";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "의료진 | 루미에르 피부과",
  description: "루미에르 피부과 전문의를 소개합니다. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/doctors",
      ko: "/ko/portfolio/lumiere-clinic/doctors",
      "x-default": "/portfolio/lumiere-clinic/doctors",
    },
  },
};

export default function LumiereClinicDoctorsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "루미에르 피부과", path: "/ko/portfolio/lumiere-clinic" },
            { name: "의료진", path: "/ko/portfolio/lumiere-clinic/doctors" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicDoctors lang="ko" />
    </>
  );
}
