import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NexusLabChangelog from "@/lib/templates/NexusLabChangelog";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Changelog | Nexus Lab",
  description:
    "Every Nexus Lab release, in order — a developer-tool homepage template changelog page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/nexus-lab/changelog",
      ko: "/ko/portfolio/nexus-lab/changelog",
      "x-default": "/portfolio/nexus-lab/changelog",
    },
  },
};

export default function NexusLabChangelogPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Nexus Lab", path: "/portfolio/nexus-lab" },
            { name: "Changelog", path: "/portfolio/nexus-lab/changelog" },
          ])
        )}
      />
      <BackToPortfolio />
      <NexusLabChangelog lang="en" />
    </>
  );
}
