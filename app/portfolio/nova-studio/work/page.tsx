import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NovaStudioWork from "@/lib/templates/NovaStudioWork";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Full Portfolio | Nova Studio",
  description:
    "Weddings, families, brand campaigns, and editorials — the full archive from Nova Studio, a photographer homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/nova-studio/work",
      ko: "/ko/portfolio/nova-studio/work",
      "x-default": "/portfolio/nova-studio/work",
    },
  },
};

export default function NovaStudioWorkPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Nova Studio", path: "/portfolio/nova-studio" },
            { name: "Full Portfolio", path: "/portfolio/nova-studio/work" },
          ])
        )}
      />
      <BackToPortfolio />
      <NovaStudioWork lang="en" />
    </>
  );
}
