import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VillaToscanaMenu from "@/lib/templates/VillaToscanaMenu";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Tasting Menu | Villa Toscana",
  description:
    "The complete seven-course tasting menu at Villa Toscana — a fine-dining homepage template menu page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/villa-toscana/menu",
      ko: "/ko/portfolio/villa-toscana/menu",
      "x-default": "/portfolio/villa-toscana/menu",
    },
  },
};

export default function VillaToscanaMenuPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Villa Toscana", path: "/portfolio/villa-toscana" },
            { name: "Menu", path: "/portfolio/villa-toscana/menu" },
          ])
        )}
      />
      <BackToPortfolio />
      <VillaToscanaMenu lang="en" />
    </>
  );
}
