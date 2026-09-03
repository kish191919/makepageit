import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalBooking from "@/lib/templates/WillowbrookDentalBooking";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "예약 | 윌로우브룩 치과",
  description: "진료 항목과 원하는 시간, 담당의를 선택해 1분 안에 온라인 예약을 완료하세요. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/booking",
      ko: "/ko/portfolio/willowbrook-dental/booking",
      "x-default": "/portfolio/willowbrook-dental/booking",
    },
  },
};

export default function WillowbrookDentalBookingPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "윌로우브룩 치과", path: "/ko/portfolio/willowbrook-dental" },
            { name: "예약", path: "/ko/portfolio/willowbrook-dental/booking" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalBooking lang="ko" />
    </>
  );
}
