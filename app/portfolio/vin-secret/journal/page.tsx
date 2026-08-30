import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VinSecretJournal from "@/lib/templates/VinSecretJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Journal | Vin Secret",
  description:
    "Dispatches from the buying trip — vineyard visits and tasting notes from Vin Secret, a wine club homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/vin-secret/journal",
      ko: "/ko/portfolio/vin-secret/journal",
      "x-default": "/portfolio/vin-secret/journal",
    },
  },
};

export default function VinSecretJournalPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Vin Secret", path: "/portfolio/vin-secret" },
            { name: "Journal", path: "/portfolio/vin-secret/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <VinSecretJournal lang="en" />
    </>
  );
}
