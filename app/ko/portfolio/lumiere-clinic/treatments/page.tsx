import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicTreatments from "@/lib/templates/LumiereClinicTreatments";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "시술안내 | 루미에르 피부과",
  description: "정확한 진단 위에 설계된 루미에르 피부과의 시그니처 시술 안내. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/treatments",
      ko: "/ko/portfolio/lumiere-clinic/treatments",
      "x-default": "/portfolio/lumiere-clinic/treatments",
    },
  },
};

export default function LumiereClinicTreatmentsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "루미에르 피부과", path: "/ko/portfolio/lumiere-clinic" },
            { name: "시술안내", path: "/ko/portfolio/lumiere-clinic/treatments" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicTreatments lang="ko" />
    </>
  );
}
