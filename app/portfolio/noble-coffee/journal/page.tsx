import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeJournal from "@/lib/templates/NobleCoffeeJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Journal | Noble Coffee Roasters",
  description:
    "Cupping notes, roast-curve experiments, and farm visits from Noble Coffee Roasters — a Noble Coffee homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/journal",
      ko: "/ko/portfolio/noble-coffee/journal",
      "x-default": "/portfolio/noble-coffee/journal",
    },
  },
};

export default function NobleCoffeeJournalPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Noble Coffee Roasters", path: "/portfolio/noble-coffee" },
            { name: "Journal", path: "/portfolio/noble-coffee/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeJournal lang="en" />
    </>
  );
}
