import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninDirectory from "@/lib/templates/DenverHaninDirectory";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "업소록 | 덴버 한인 위클리",
  description: "덴버 메트로 지역의 한인 운영 및 한인 대상 업체를 카테고리별로 정리한 업소록. 메이크페이지가 제작한 커뮤니티 포털 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/directory",
      ko: "/ko/portfolio/denver-hanin/directory",
      "x-default": "/portfolio/denver-hanin/directory",
    },
  },
};

export default function DenverHaninDirectoryPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "덴버 한인 위클리", path: "/ko/portfolio/denver-hanin" },
            { name: "업소록", path: "/ko/portfolio/denver-hanin/directory" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninDirectory lang="ko" />
    </>
  );
}
