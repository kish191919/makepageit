import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VinSecretJournal from "@/lib/templates/VinSecretJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "저널 | Vin Secret",
  description: "바잉 트립과 테이스팅 노트 — 메이크페이지가 제작한 Vin Secret 와인 클럽 홈페이지 템플릿의 저널 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/vin-secret/journal",
      ko: "/ko/portfolio/vin-secret/journal",
      "x-default": "/portfolio/vin-secret/journal",
    },
  },
};

export default function VinSecretJournalPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Vin Secret", path: "/ko/portfolio/vin-secret" },
            { name: "저널", path: "/ko/portfolio/vin-secret/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <VinSecretJournal lang="ko" />
    </>
  );
}
