import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninNews from "@/lib/templates/DenverHaninNews";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "News | Denver Hanin Weekly",
  description:
    "Local business, policy, education, and community headlines from Denver's Korean-American community. A portfolio community-portal template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/news",
      ko: "/ko/portfolio/denver-hanin/news",
      "x-default": "/portfolio/denver-hanin/news",
    },
  },
};

export default function DenverHaninNewsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Denver Hanin Weekly", path: "/portfolio/denver-hanin" },
            { name: "News", path: "/portfolio/denver-hanin/news" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninNews lang="en" />
    </>
  );
}
