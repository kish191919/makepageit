import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalServices from "@/lib/templates/WillowbrookDentalServices";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Services | Willowbrook Dental Care",
  description:
    "General, cosmetic, Invisalign, same-day crowns, whitening, and emergency dental services at Willowbrook Dental Care. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/services",
      ko: "/ko/portfolio/willowbrook-dental/services",
      "x-default": "/portfolio/willowbrook-dental/services",
    },
  },
};

export default function WillowbrookDentalServicesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Willowbrook Dental Care", path: "/portfolio/willowbrook-dental" },
            { name: "Services", path: "/portfolio/willowbrook-dental/services" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalServices lang="en" />
    </>
  );
}
