import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicReviews from "@/lib/templates/LumiereClinicReviews";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "후기 | 루미에르 피부과",
  description: "루미에르 피부과 실제 환자 후기. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/reviews",
      ko: "/ko/portfolio/lumiere-clinic/reviews",
      "x-default": "/portfolio/lumiere-clinic/reviews",
    },
  },
};

export default function LumiereClinicReviewsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "루미에르 피부과", path: "/ko/portfolio/lumiere-clinic" },
            { name: "후기", path: "/ko/portfolio/lumiere-clinic/reviews" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicReviews lang="ko" />
    </>
  );
}
