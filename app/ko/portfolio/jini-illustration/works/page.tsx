import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import JiniIllustrationWorks from "@/lib/templates/JiniIllustrationWorks";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "작업 모음 | jini illustration",
  description: "지니 일러스트의 최근 의뢰 작업 — 단행본 표지, 패키지, 에디토리얼. 메이크페이지가 제작한 포트폴리오 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/jini-illustration/works",
      ko: "/ko/portfolio/jini-illustration/works",
      "x-default": "/portfolio/jini-illustration/works",
    },
  },
};

export default function JiniIllustrationWorksPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "지니 일러스트", path: "/ko/portfolio/jini-illustration" },
            { name: "작업 모음", path: "/ko/portfolio/jini-illustration/works" },
          ])
        )}
      />
      <BackToPortfolio />
      <JiniIllustrationWorks lang="ko" />
    </>
  );
}
