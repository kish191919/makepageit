import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import BloomCosmeticsBodycare from "@/lib/templates/BloomCosmeticsBodycare";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Bodycare | BLOOM",
  description:
    "휘핑 바디 버터, 순한 스크럽, 무향 로션까지 리필 가능한 용기에 담았습니다. 메이크페이지가 제작한 블룸 코스메틱 홈페이지 템플릿의 Bodycare 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/bloom-cosmetics/bodycare",
      ko: "/ko/portfolio/bloom-cosmetics/bodycare",
      "x-default": "/portfolio/bloom-cosmetics/bodycare",
    },
  },
};

export default function BloomCosmeticsBodycarePageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "블룸 코스메틱", path: "/ko/portfolio/bloom-cosmetics" },
            { name: "Bodycare", path: "/ko/portfolio/bloom-cosmetics/bodycare" },
          ])
        )}
      />
      <BackToPortfolio />
      <BloomCosmeticsBodycare lang="ko" />
    </>
  );
}
