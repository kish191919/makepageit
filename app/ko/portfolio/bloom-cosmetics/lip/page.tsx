import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import BloomCosmeticsLip from "@/lib/templates/BloomCosmeticsLip";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Lip | BLOOM",
  description:
    "건조한 왁스 대신 영양 오일로 만든 벨벳 밤, 틴트, 글로스. 메이크페이지가 제작한 블룸 코스메틱 홈페이지 템플릿의 Lip 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/bloom-cosmetics/lip",
      ko: "/ko/portfolio/bloom-cosmetics/lip",
      "x-default": "/portfolio/bloom-cosmetics/lip",
    },
  },
};

export default function BloomCosmeticsLipPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "블룸 코스메틱", path: "/ko/portfolio/bloom-cosmetics" },
            { name: "Lip", path: "/ko/portfolio/bloom-cosmetics/lip" },
          ])
        )}
      />
      <BackToPortfolio />
      <BloomCosmeticsLip lang="ko" />
    </>
  );
}
