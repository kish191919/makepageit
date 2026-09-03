import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalTeam from "@/lib/templates/WillowbrookDentalTeam";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "의료진 | 윌로우브룩 치과",
  description: "윌로우브룩 치과의 가족·심미치료 전담 의료진을 소개합니다. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/team",
      ko: "/ko/portfolio/willowbrook-dental/team",
      "x-default": "/portfolio/willowbrook-dental/team",
    },
  },
};

export default function WillowbrookDentalTeamPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "윌로우브룩 치과", path: "/ko/portfolio/willowbrook-dental" },
            { name: "의료진", path: "/ko/portfolio/willowbrook-dental/team" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalTeam lang="ko" />
    </>
  );
}
