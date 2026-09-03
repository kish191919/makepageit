import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalReviews from "@/lib/templates/WillowbrookDentalReviews";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Reviews | Willowbrook Dental Care",
  description: "Real patient reviews for Willowbrook Dental Care. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/reviews",
      ko: "/ko/portfolio/willowbrook-dental/reviews",
      "x-default": "/portfolio/willowbrook-dental/reviews",
    },
  },
};

export default function WillowbrookDentalReviewsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Willowbrook Dental Care", path: "/portfolio/willowbrook-dental" },
            { name: "Reviews", path: "/portfolio/willowbrook-dental/reviews" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalReviews lang="en" />
    </>
  );
}
