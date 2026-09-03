import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninNews from "@/lib/templates/DenverHaninNews";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "뉴스 | 덴버 한인 위클리",
  description: "덴버 한인 커뮤니티의 지역경제, 정책, 교육, 커뮤니티 헤드라인. 메이크페이지가 제작한 커뮤니티 포털 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/news",
      ko: "/ko/portfolio/denver-hanin/news",
      "x-default": "/portfolio/denver-hanin/news",
    },
  },
};

export default function DenverHaninNewsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "덴버 한인 위클리", path: "/ko/portfolio/denver-hanin" },
            { name: "뉴스", path: "/ko/portfolio/denver-hanin/news" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninNews lang="ko" />
    </>
  );
}
