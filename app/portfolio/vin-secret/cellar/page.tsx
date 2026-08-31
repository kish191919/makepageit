import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VinSecretCellar from "@/lib/templates/VinSecretCellar";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Cellar | Vin Secret",
  description:
    "This month's curated selection — six boutique wines picked by our sommelier for Vin Secret, a wine club homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/vin-secret/cellar",
      ko: "/ko/portfolio/vin-secret/cellar",
      "x-default": "/portfolio/vin-secret/cellar",
    },
  },
};

export default function VinSecretCellarPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Vin Secret", path: "/portfolio/vin-secret" },
            { name: "Cellar", path: "/portfolio/vin-secret/cellar" },
          ])
        )}
      />
      <BackToPortfolio />
      <VinSecretCellar lang="en" />
    </>
  );
}
