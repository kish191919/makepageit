import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HaloFitnessCommunity from "@/lib/templates/HaloFitnessCommunity";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "커뮤니티 | HALO Fitness",
  description:
    "진짜 사람들, 진짜 스트릭, 진짜 서로의 응원 — HALO 커뮤니티의 이야기. 메이크페이지가 제작한 피트니스 앱 랜딩 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/halo-fitness/community",
      ko: "/ko/portfolio/halo-fitness/community",
      "x-default": "/portfolio/halo-fitness/community",
    },
  },
};

export default function HaloFitnessCommunityPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "헤일로 피트니스", path: "/ko/portfolio/halo-fitness" },
            { name: "커뮤니티", path: "/ko/portfolio/halo-fitness/community" },
          ])
        )}
      />
      <BackToPortfolio />
      <HaloFitnessCommunity lang="ko" />
    </>
  );
}
