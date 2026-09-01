import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicReviews from "@/lib/templates/LumiereClinicReviews";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Reviews | Lumière Skin Clinic",
  description: "Real patient reviews for Lumière Skin Clinic. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/reviews",
      ko: "/ko/portfolio/lumiere-clinic/reviews",
      "x-default": "/portfolio/lumiere-clinic/reviews",
    },
  },
};

export default function LumiereClinicReviewsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Lumière Skin Clinic", path: "/portfolio/lumiere-clinic" },
            { name: "Reviews", path: "/portfolio/lumiere-clinic/reviews" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicReviews lang="en" />
    </>
  );
}
