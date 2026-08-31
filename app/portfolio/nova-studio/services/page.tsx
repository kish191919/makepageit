import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NovaStudioServices from "@/lib/templates/NovaStudioServices";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Services & Pricing | Nova Studio",
  description:
    "Wedding, family, brand, and editorial photography packages with full pricing and process — from Nova Studio, a photographer homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/nova-studio/services",
      ko: "/ko/portfolio/nova-studio/services",
      "x-default": "/portfolio/nova-studio/services",
    },
  },
};

export default function NovaStudioServicesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Nova Studio", path: "/portfolio/nova-studio" },
            { name: "Services & Pricing", path: "/portfolio/nova-studio/services" },
          ])
        )}
      />
      <BackToPortfolio />
      <NovaStudioServices lang="en" />
    </>
  );
}
