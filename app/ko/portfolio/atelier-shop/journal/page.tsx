import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopJournal from "@/lib/templates/AtelierShopJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "저널 | Atelier 22",
  description:
    "패턴 초안, 원단 소싱 여정, 장인들의 이야기 — 메이크페이지가 제작한 Atelier Shop 홈페이지 템플릿의 저널 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/journal",
      ko: "/ko/portfolio/atelier-shop/journal",
      "x-default": "/portfolio/atelier-shop/journal",
    },
  },
};

export default function AtelierShopJournalPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Atelier 22", path: "/ko/portfolio/atelier-shop" },
            { name: "저널", path: "/ko/portfolio/atelier-shop/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopJournal lang="ko" />
    </>
  );
}
