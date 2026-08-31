import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NovaStudioServices from "@/lib/templates/NovaStudioServices";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "촬영 안내 및 가격 | 노바 스튜디오",
  description:
    "웨딩, 가족, 브랜드, 에디토리얼 촬영 패키지와 가격, 진행 순서까지 — 메이크페이지가 제작한 Nova Studio 포토그래퍼 홈페이지 템플릿의 서비스 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/nova-studio/services",
      ko: "/ko/portfolio/nova-studio/services",
      "x-default": "/portfolio/nova-studio/services",
    },
  },
};

export default function NovaStudioServicesPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "노바 스튜디오", path: "/ko/portfolio/nova-studio" },
            { name: "촬영 안내", path: "/ko/portfolio/nova-studio/services" },
          ])
        )}
      />
      <BackToPortfolio />
      <NovaStudioServices lang="ko" />
    </>
  );
}
