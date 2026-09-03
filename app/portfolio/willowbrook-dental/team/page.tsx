import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalTeam from "@/lib/templates/WillowbrookDentalTeam";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Team | Willowbrook Dental Care",
  description:
    "Meet the family and cosmetic dentists behind Willowbrook Dental Care. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/team",
      ko: "/ko/portfolio/willowbrook-dental/team",
      "x-default": "/portfolio/willowbrook-dental/team",
    },
  },
};

export default function WillowbrookDentalTeamPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Willowbrook Dental Care", path: "/portfolio/willowbrook-dental" },
            { name: "Our Team", path: "/portfolio/willowbrook-dental/team" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalTeam lang="en" />
    </>
  );
}
