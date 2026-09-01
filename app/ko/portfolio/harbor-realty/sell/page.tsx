import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtySell from "@/lib/templates/HarborRealtySell";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "매도 상담 | 하버앤베일 부동산",
  description: "하버앤베일 부동산의 매도 프로세스 안내 — 메이크페이지가 제작한 부동산 홈페이지 템플릿의 매도 상담 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/sell",
      ko: "/ko/portfolio/harbor-realty/sell",
      "x-default": "/portfolio/harbor-realty/sell",
    },
  },
};

export default function HarborRealtySellPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "하버앤베일 부동산", path: "/ko/portfolio/harbor-realty" },
            { name: "매도 상담", path: "/ko/portfolio/harbor-realty/sell" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtySell lang="ko" />
    </>
  );
}
