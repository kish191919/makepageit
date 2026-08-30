import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NexusLabDocs from "@/lib/templates/NexusLabDocs";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Docs | Nexus Lab",
  description:
    "Guides and API reference for Nexus Lab — a developer-tool homepage template docs page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/nexus-lab/docs",
      ko: "/ko/portfolio/nexus-lab/docs",
      "x-default": "/portfolio/nexus-lab/docs",
    },
  },
};

export default function NexusLabDocsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Nexus Lab", path: "/portfolio/nexus-lab" },
            { name: "Docs", path: "/portfolio/nexus-lab/docs" },
          ])
        )}
      />
      <BackToPortfolio />
      <NexusLabDocs lang="en" />
    </>
  );
}
