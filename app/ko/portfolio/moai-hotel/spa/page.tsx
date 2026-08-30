import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaiHotelSpa from "@/lib/templates/MoaiHotelSpa";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "스파 | 모아이 호텔 앤 리조트",
  description: "모아이 호텔의 지중해식 스파 트리트먼트 — 메이크페이지가 제작한 부티크 호텔 홈페이지 템플릿의 스파 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/moai-hotel/spa",
      ko: "/ko/portfolio/moai-hotel/spa",
      "x-default": "/portfolio/moai-hotel/spa",
    },
  },
};

export default function MoaiHotelSpaPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "모아이 호텔 앤 리조트", path: "/ko/portfolio/moai-hotel" },
            { name: "스파", path: "/ko/portfolio/moai-hotel/spa" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaiHotelSpa lang="ko" />
    </>
  );
}
