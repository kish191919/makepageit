import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaiHotelJournal from "@/lib/templates/MoaiHotelJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "저널 | 모아이 호텔 앤 리조트",
  description: "절벽에서 보내는 기록 — 메이크페이지가 제작한 모아이 부티크 호텔 홈페이지 템플릿의 저널 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/moai-hotel/journal",
      ko: "/ko/portfolio/moai-hotel/journal",
      "x-default": "/portfolio/moai-hotel/journal",
    },
  },
};

export default function MoaiHotelJournalPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "모아이 호텔 앤 리조트", path: "/ko/portfolio/moai-hotel" },
            { name: "저널", path: "/ko/portfolio/moai-hotel/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaiHotelJournal lang="ko" />
    </>
  );
}
