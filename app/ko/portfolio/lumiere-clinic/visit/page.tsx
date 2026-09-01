import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicVisit from "@/lib/templates/LumiereClinicVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "오시는 길 | 루미에르 피부과",
  description: "루미에르 피부과 위치, 진료시간, 오시는 방법 안내. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/visit",
      ko: "/ko/portfolio/lumiere-clinic/visit",
      "x-default": "/portfolio/lumiere-clinic/visit",
    },
  },
};

export default function LumiereClinicVisitPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "루미에르 피부과", path: "/ko/portfolio/lumiere-clinic" },
            { name: "오시는 길", path: "/ko/portfolio/lumiere-clinic/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicVisit lang="ko" />
    </>
  );
}
