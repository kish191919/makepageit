import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninCulture from "@/lib/templates/DenverHaninCulture";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Culture & Lifestyle | Denver Hanin Weekly",
  description:
    "Events, food, entertainment, and the people shaping Korean-American life in Denver. A portfolio community-portal template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/culture",
      ko: "/ko/portfolio/denver-hanin/culture",
      "x-default": "/portfolio/denver-hanin/culture",
    },
  },
};

export default function DenverHaninCulturePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Denver Hanin Weekly", path: "/portfolio/denver-hanin" },
            { name: "Culture", path: "/portfolio/denver-hanin/culture" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninCulture lang="en" />
    </>
  );
}
