import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaPilatesMembership from "@/lib/templates/MoaPilatesMembership";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "멤버십 | MOA PILATES",
  description:
    "1:1 프라이빗, 그룹 리포머, 모닝 매트 요금을 비교하고 나에게 맞는 멤버십을 선택하세요. 메이크페이지가 제작한 Moa Pilates 홈페이지 템플릿의 멤버십 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/moa-pilates/membership",
      ko: "/ko/portfolio/moa-pilates/membership",
      "x-default": "/portfolio/moa-pilates/membership",
    },
  },
};

export default function MoaPilatesMembershipPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "MOA PILATES", path: "/ko/portfolio/moa-pilates" },
            { name: "멤버십", path: "/ko/portfolio/moa-pilates/membership" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaPilatesMembership lang="ko" />
    </>
  );
}
