import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaPilatesPrograms from "@/lib/templates/MoaPilatesPrograms";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "프로그램 | MOA PILATES",
  description:
    "그룹 리포머, 1:1 프라이빗, 모닝 매트 — 성수의 부티크 필라테스 스튜디오 MOA의 세 가지 클래스. 메이크페이지가 제작한 Moa Pilates 홈페이지 템플릿의 프로그램 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/moa-pilates/programs",
      ko: "/ko/portfolio/moa-pilates/programs",
      "x-default": "/portfolio/moa-pilates/programs",
    },
  },
};

export default function MoaPilatesProgramsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "MOA PILATES", path: "/ko/portfolio/moa-pilates" },
            { name: "프로그램", path: "/ko/portfolio/moa-pilates/programs" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaPilatesPrograms lang="ko" />
    </>
  );
}
