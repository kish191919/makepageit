import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import JiniIllustrationShop from "@/lib/templates/JiniIllustrationShop";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "숍 | jini illustration",
  description: "일러스트레이터 지니의 프린트, 스티커 시트, 엽서 굿즈. 메이크페이지가 제작한 포트폴리오 홈페이지 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/jini-illustration/shop",
      ko: "/ko/portfolio/jini-illustration/shop",
      "x-default": "/portfolio/jini-illustration/shop",
    },
  },
};

export default function JiniIllustrationShopPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "지니 일러스트", path: "/ko/portfolio/jini-illustration" },
            { name: "숍", path: "/ko/portfolio/jini-illustration/shop" },
          ])
        )}
      />
      <BackToPortfolio />
      <JiniIllustrationShop lang="ko" />
    </>
  );
}
