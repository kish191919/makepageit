import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import BloomCosmeticsSkincare from "@/lib/templates/BloomCosmeticsSkincare";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Skincare | BLOOM",
  description:
    "비건 인증 세럼, 토너, 크림을 리필 가능한 패키지로 만났습니다. 메이크페이지가 제작한 블룸 코스메틱 홈페이지 템플릿의 Skincare 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/bloom-cosmetics/skincare",
      ko: "/ko/portfolio/bloom-cosmetics/skincare",
      "x-default": "/portfolio/bloom-cosmetics/skincare",
    },
  },
};

export default function BloomCosmeticsSkincarePageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "블룸 코스메틱", path: "/ko/portfolio/bloom-cosmetics" },
            { name: "Skincare", path: "/ko/portfolio/bloom-cosmetics/skincare" },
          ])
        )}
      />
      <BackToPortfolio />
      <BloomCosmeticsSkincare lang="ko" />
    </>
  );
}
