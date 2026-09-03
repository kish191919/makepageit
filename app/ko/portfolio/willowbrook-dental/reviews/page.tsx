import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalReviews from "@/lib/templates/WillowbrookDentalReviews";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "후기 | 윌로우브룩 치과",
  description: "윌로우브룩 치과 실제 환자 후기입니다. 메이크페이지가 제작한 예약 시스템 포트폴리오 템플릿입니다.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/reviews",
      ko: "/ko/portfolio/willowbrook-dental/reviews",
      "x-default": "/portfolio/willowbrook-dental/reviews",
    },
  },
};

export default function WillowbrookDentalReviewsPageKo() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "홈", path: "/ko" },
            { name: "포트폴리오", path: "/ko/portfolio" },
            { name: "윌로우브룩 치과", path: "/ko/portfolio/willowbrook-dental" },
            { name: "후기", path: "/ko/portfolio/willowbrook-dental/reviews" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalReviews lang="ko" />
    </>
  );
}
