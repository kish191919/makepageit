import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HaloFitnessPlans from "@/lib/templates/HaloFitnessPlans";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "요금제 | HALO Fitness",
  description:
    "Free, Plus, Pro — HALO 멤버십 요금제를 비교해보세요. 메이크페이지가 제작한 피트니스 앱 랜딩 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/halo-fitness/plans",
      ko: "/ko/portfolio/halo-fitness/plans",
      "x-default": "/portfolio/halo-fitness/plans",
    },
  },
};

export default function HaloFitnessPlansPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "헤일로 피트니스", path: "/ko/portfolio/halo-fitness" },
            { name: "요금제", path: "/ko/portfolio/halo-fitness/plans" },
          ])
        )}
      />
      <BackToPortfolio />
      <HaloFitnessPlans lang="ko" />
    </>
  );
}
