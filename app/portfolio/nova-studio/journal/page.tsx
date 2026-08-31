import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NovaStudioJournal from "@/lib/templates/NovaStudioJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Journal | Nova Studio",
  description:
    "Field notes and behind-the-scenes from recent shoots — the journal from Nova Studio, a photographer homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/nova-studio/journal",
      ko: "/ko/portfolio/nova-studio/journal",
      "x-default": "/portfolio/nova-studio/journal",
    },
  },
};

export default function NovaStudioJournalPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Nova Studio", path: "/portfolio/nova-studio" },
            { name: "Journal", path: "/portfolio/nova-studio/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <NovaStudioJournal lang="en" />
    </>
  );
}
