import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninAdvertise from "@/lib/templates/DenverHaninAdvertise";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "광고문의 | 덴버 한인 위클리",
  description: "업소록 등재, 홈페이지 배너, 스폰서 기사로 덴버 한인 커뮤니티에 업체를 알려보세요. 메이크페이지가 제작한 커뮤니티 포털 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/advertise",
      ko: "/ko/portfolio/denver-hanin/advertise",
      "x-default": "/portfolio/denver-hanin/advertise",
    },
  },
};

export default function DenverHaninAdvertisePageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "덴버 한인 위클리", path: "/ko/portfolio/denver-hanin" },
            { name: "광고문의", path: "/ko/portfolio/denver-hanin/advertise" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninAdvertise lang="ko" />
    </>
  );
}
