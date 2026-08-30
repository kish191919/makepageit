import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeJournal from "@/lib/templates/NobleCoffeeJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "저널 | Noble Coffee Roasters",
  description:
    "커핑 노트, 로스팅 커브 실험, 농장 방문기 — 메이크페이지가 제작한 Noble Coffee 홈페이지 템플릿의 저널 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/journal",
      ko: "/ko/portfolio/noble-coffee/journal",
      "x-default": "/portfolio/noble-coffee/journal",
    },
  },
};

export default function NobleCoffeeJournalPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Noble Coffee Roasters", path: "/ko/portfolio/noble-coffee" },
            { name: "저널", path: "/ko/portfolio/noble-coffee/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeJournal lang="ko" />
    </>
  );
}
