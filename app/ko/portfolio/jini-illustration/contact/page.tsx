import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import JiniIllustrationContact from "@/lib/templates/JiniIllustrationContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "문의하기 | jini illustration",
  description: "일러스트레이터 지니에게 의뢰를 문의하세요. 메이크페이지가 제작한 포트폴리오 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/jini-illustration/contact",
      ko: "/ko/portfolio/jini-illustration/contact",
      "x-default": "/portfolio/jini-illustration/contact",
    },
  },
};

export default function JiniIllustrationContactPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "지니 일러스트", path: "/ko/portfolio/jini-illustration" },
            { name: "문의하기", path: "/ko/portfolio/jini-illustration/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <JiniIllustrationContact lang="ko" />
    </>
  );
}
