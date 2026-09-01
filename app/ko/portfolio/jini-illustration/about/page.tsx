import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import JiniIllustrationAbout from "@/lib/templates/JiniIllustrationAbout";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "소개 | jini illustration",
  description: "일러스트레이터 겸 에세이스트 지니 — 8년간 손으로 그려온 단행본 표지, 패키지, 에디토리얼. 메이크페이지가 제작한 포트폴리오 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/jini-illustration/about",
      ko: "/ko/portfolio/jini-illustration/about",
      "x-default": "/portfolio/jini-illustration/about",
    },
  },
};

export default function JiniIllustrationAboutPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "지니 일러스트", path: "/ko/portfolio/jini-illustration" },
            { name: "소개", path: "/ko/portfolio/jini-illustration/about" },
          ])
        )}
      />
      <BackToPortfolio />
      <JiniIllustrationAbout lang="ko" />
    </>
  );
}
