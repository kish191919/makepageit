import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NovaStudioJournal from "@/lib/templates/NovaStudioJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "저널 | 노바 스튜디오",
  description:
    "최근 촬영의 비하인드와 현장 기록 — 메이크페이지가 제작한 Nova Studio 포토그래퍼 홈페이지 템플릿의 저널 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/nova-studio/journal",
      ko: "/ko/portfolio/nova-studio/journal",
      "x-default": "/portfolio/nova-studio/journal",
    },
  },
};

export default function NovaStudioJournalPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "노바 스튜디오", path: "/ko/portfolio/nova-studio" },
            { name: "저널", path: "/ko/portfolio/nova-studio/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <NovaStudioJournal lang="ko" />
    </>
  );
}
