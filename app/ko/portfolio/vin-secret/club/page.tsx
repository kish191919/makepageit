import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VinSecretClub from "@/lib/templates/VinSecretClub";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "클럽 | Vin Secret",
  description: "정기 클럽 가입 — 멤버십 플랜, 이용 방법, FAQ. 메이크페이지가 제작한 Vin Secret 와인 클럽 홈페이지 템플릿의 클럽 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/vin-secret/club",
      ko: "/ko/portfolio/vin-secret/club",
      "x-default": "/portfolio/vin-secret/club",
    },
  },
};

export default function VinSecretClubPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "Vin Secret", path: "/ko/portfolio/vin-secret" },
            { name: "클럽", path: "/ko/portfolio/vin-secret/club" },
          ])
        )}
      />
      <BackToPortfolio />
      <VinSecretClub lang="ko" />
    </>
  );
}
