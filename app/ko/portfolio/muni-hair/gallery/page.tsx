import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MuniHairGallery from "@/lib/templates/MuniHairGallery";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "갤러리 | 무니 헤어",
  description: "무니, 크리스탈, 리오의 최근 컬러 & 컷 — 메이크페이지가 제작한 무니 헤어 홈페이지 템플릿의 갤러리 페이지입니다.",
  alternates: {
    languages: {
      en: "/portfolio/muni-hair/gallery",
      ko: "/ko/portfolio/muni-hair/gallery",
      "x-default": "/portfolio/muni-hair/gallery",
    },
  },
};

export default function MuniHairGalleryPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "무니 헤어", path: "/ko/portfolio/muni-hair" },
            { name: "갤러리", path: "/ko/portfolio/muni-hair/gallery" },
          ])
        )}
      />
      <BackToPortfolio />
      <MuniHairGallery lang="ko" />
    </>
  );
}
