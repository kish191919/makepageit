import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicBooking from "@/lib/templates/LumiereClinicBooking";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "예약 | 루미에르 피부과",
  description: "1분이면 끝나는 루미에르 피부과 온라인 예약. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/booking",
      ko: "/ko/portfolio/lumiere-clinic/booking",
      "x-default": "/portfolio/lumiere-clinic/booking",
    },
  },
};

export default function LumiereClinicBookingPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "루미에르 피부과", path: "/ko/portfolio/lumiere-clinic" },
            { name: "예약", path: "/ko/portfolio/lumiere-clinic/booking" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicBooking lang="ko" />
    </>
  );
}
