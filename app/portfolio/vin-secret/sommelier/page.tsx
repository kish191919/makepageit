import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VinSecretSommelier from "@/lib/templates/VinSecretSommelier";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Sommelier | Vin Secret",
  description:
    "Our sourcing philosophy — how our sommelier picks each bottle, for Vin Secret, a wine club homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/vin-secret/sommelier",
      ko: "/ko/portfolio/vin-secret/sommelier",
      "x-default": "/portfolio/vin-secret/sommelier",
    },
  },
};

export default function VinSecretSommelierPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Vin Secret", path: "/portfolio/vin-secret" },
            { name: "Sommelier", path: "/portfolio/vin-secret/sommelier" },
          ])
        )}
      />
      <BackToPortfolio />
      <VinSecretSommelier lang="en" />
    </>
  );
}
