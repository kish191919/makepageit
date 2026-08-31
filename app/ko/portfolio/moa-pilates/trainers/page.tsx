import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaPilatesTrainers from "@/lib/templates/MoaPilatesTrainers";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "트레이너 | MOA PILATES",
  description:
    "원장, 리포머 전담, 재활 전문 강사까지 — MOA의 모든 수업을 이끄는 강사진을 소개합니다. 메이크페이지가 제작한 Moa Pilates 홈페이지 템플릿의 트레이너 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/moa-pilates/trainers",
      ko: "/ko/portfolio/moa-pilates/trainers",
      "x-default": "/portfolio/moa-pilates/trainers",
    },
  },
};

export default function MoaPilatesTrainersPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "MOA PILATES", path: "/ko/portfolio/moa-pilates" },
            { name: "트레이너", path: "/ko/portfolio/moa-pilates/trainers" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaPilatesTrainers lang="ko" />
    </>
  );
}
