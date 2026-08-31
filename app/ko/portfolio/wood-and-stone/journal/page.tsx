import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WoodAndStoneJournal from "@/lib/templates/WoodAndStoneJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "저널 | Wood & Stone",
  description: "나무, 돌, 리넨, 황동에 관한 기록 — 메이크페이지가 제작한 가구 홈페이지 템플릿의 저널 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/wood-and-stone/journal",
      ko: "/ko/portfolio/wood-and-stone/journal",
      "x-default": "/portfolio/wood-and-stone/journal",
    },
  },
};

export default function WoodAndStoneJournalPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Wood & Stone", path: "/ko/portfolio/wood-and-stone" },
            { name: "저널", path: "/ko/portfolio/wood-and-stone/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <WoodAndStoneJournal lang="ko" />
    </>
  );
}
