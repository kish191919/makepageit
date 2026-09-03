import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninDirectory from "@/lib/templates/DenverHaninDirectory";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Business Directory | Denver Hanin Weekly",
  description:
    "A categorized directory of Korean-American-owned and Korean-American-serving businesses across the Denver metro. A portfolio community-portal template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/directory",
      ko: "/ko/portfolio/denver-hanin/directory",
      "x-default": "/portfolio/denver-hanin/directory",
    },
  },
};

export default function DenverHaninDirectoryPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Denver Hanin Weekly", path: "/portfolio/denver-hanin" },
            { name: "Directory", path: "/portfolio/denver-hanin/directory" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninDirectory lang="en" />
    </>
  );
}
