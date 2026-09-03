import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalServices from "@/lib/templates/WillowbrookDentalServices";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "진료안내 | 윌로우브룩 치과",
  description: "윌로우브룩 치과의 일반·심미·인비절라인·당일 크라운·미백·응급 진료를 소개합니다. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/services",
      ko: "/ko/portfolio/willowbrook-dental/services",
      "x-default": "/portfolio/willowbrook-dental/services",
    },
  },
};

export default function WillowbrookDentalServicesPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "윌로우브룩 치과", path: "/ko/portfolio/willowbrook-dental" },
            { name: "진료안내", path: "/ko/portfolio/willowbrook-dental/services" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalServices lang="ko" />
    </>
  );
}
