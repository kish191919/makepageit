import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VinSecretClub from "@/lib/templates/VinSecretClub";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Club | Vin Secret",
  description:
    "Join the club — membership plans, how it works, and FAQs for Vin Secret, a wine club homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/vin-secret/club",
      ko: "/ko/portfolio/vin-secret/club",
      "x-default": "/portfolio/vin-secret/club",
    },
  },
};

export default function VinSecretClubPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Vin Secret", path: "/portfolio/vin-secret" },
            { name: "Club", path: "/portfolio/vin-secret/club" },
          ])
        )}
      />
      <BackToPortfolio />
      <VinSecretClub lang="en" />
    </>
  );
}
