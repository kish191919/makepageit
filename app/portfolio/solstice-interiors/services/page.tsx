import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsServices from "@/lib/templates/SolsticeInteriorsServices";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Services | Solstice Interiors",
  description:
    "Design services and pricing from Solstice Interiors — a residential design homepage template services page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/services",
      ko: "/ko/portfolio/solstice-interiors/services",
      "x-default": "/portfolio/solstice-interiors/services",
    },
  },
};

export default function SolsticeInteriorsServicesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Solstice Interiors", path: "/portfolio/solstice-interiors" },
            { name: "Services", path: "/portfolio/solstice-interiors/services" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsServices lang="en" />
    </>
  );
}
