import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VillaToscanaWine from "@/lib/templates/VillaToscanaWine";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Wine List | Villa Toscana",
  description:
    "320 labels and their pairings at Villa Toscana — a fine-dining homepage template wine list page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/villa-toscana/wine",
      ko: "/ko/portfolio/villa-toscana/wine",
      "x-default": "/portfolio/villa-toscana/wine",
    },
  },
};

export default function VillaToscanaWinePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Villa Toscana", path: "/portfolio/villa-toscana" },
            { name: "Wine", path: "/portfolio/villa-toscana/wine" },
          ])
        )}
      />
      <BackToPortfolio />
      <VillaToscanaWine lang="en" />
    </>
  );
}
