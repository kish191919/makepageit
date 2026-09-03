import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninCulture from "@/lib/templates/DenverHaninCulture";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "문화 & 라이프스타일 | 덴버 한인 위클리",
  description: "덴버 한인 커뮤니티의 이벤트, 음식, 엔터테인먼트, 사람들의 이야기. 메이크페이지가 제작한 커뮤니티 포털 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/culture",
      ko: "/ko/portfolio/denver-hanin/culture",
      "x-default": "/portfolio/denver-hanin/culture",
    },
  },
};

export default function DenverHaninCulturePageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "덴버 한인 위클리", path: "/ko/portfolio/denver-hanin" },
            { name: "문화", path: "/ko/portfolio/denver-hanin/culture" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninCulture lang="ko" />
    </>
  );
}
