import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninColumns from "@/lib/templates/DenverHaninColumns";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Columns | Denver Hanin Weekly",
  description:
    "Opinion and expert perspectives from local business owners, professionals, and long-time residents. A portfolio community-portal template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/columns",
      ko: "/ko/portfolio/denver-hanin/columns",
      "x-default": "/portfolio/denver-hanin/columns",
    },
  },
};

export default function DenverHaninColumnsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Denver Hanin Weekly", path: "/portfolio/denver-hanin" },
            { name: "Columns", path: "/portfolio/denver-hanin/columns" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninColumns lang="en" />
    </>
  );
}
