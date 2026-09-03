import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalVisit from "@/lib/templates/WillowbrookDentalVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "오시는 길 | 윌로우브룩 치과",
  description: "윌로우브룩 치과 위치, 진료시간, 오시는 방법을 안내합니다. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/visit",
      ko: "/ko/portfolio/willowbrook-dental/visit",
      "x-default": "/portfolio/willowbrook-dental/visit",
    },
  },
};

export default function WillowbrookDentalVisitPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "윌로우브룩 치과", path: "/ko/portfolio/willowbrook-dental" },
            { name: "오시는 길", path: "/ko/portfolio/willowbrook-dental/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalVisit lang="ko" />
    </>
  );
}
