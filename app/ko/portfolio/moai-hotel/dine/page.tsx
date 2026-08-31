import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaiHotelDine from "@/lib/templates/MoaiHotelDine";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "다이닝 | 모아이 호텔 앤 리조트",
  description: "모아이 호텔의 셀러 다이닝, 셰프스 카운터, 절벽 테라스 — 메이크페이지가 제작한 부티크 호텔 홈페이지 템플릿의 다이닝 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/moai-hotel/dine",
      ko: "/ko/portfolio/moai-hotel/dine",
      "x-default": "/portfolio/moai-hotel/dine",
    },
  },
};

export default function MoaiHotelDinePageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "모아이 호텔 앤 리조트", path: "/ko/portfolio/moai-hotel" },
            { name: "다이닝", path: "/ko/portfolio/moai-hotel/dine" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaiHotelDine lang="ko" />
    </>
  );
}
