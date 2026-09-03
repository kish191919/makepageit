import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalVisit from "@/lib/templates/WillowbrookDentalVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Visit | Willowbrook Dental Care",
  description: "Address, hours, and directions for Willowbrook Dental Care. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/visit",
      ko: "/ko/portfolio/willowbrook-dental/visit",
      "x-default": "/portfolio/willowbrook-dental/visit",
    },
  },
};

export default function WillowbrookDentalVisitPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Willowbrook Dental Care", path: "/portfolio/willowbrook-dental" },
            { name: "Visit", path: "/portfolio/willowbrook-dental/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalVisit lang="en" />
    </>
  );
}
