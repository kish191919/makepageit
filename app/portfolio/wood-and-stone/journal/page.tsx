import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WoodAndStoneJournal from "@/lib/templates/WoodAndStoneJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Journal | Wood & Stone",
  description:
    "Notes on wood, stone, linen, and brass — the material stories behind Wood & Stone, a furniture homepage template journal page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/wood-and-stone/journal",
      ko: "/ko/portfolio/wood-and-stone/journal",
      "x-default": "/portfolio/wood-and-stone/journal",
    },
  },
};

export default function WoodAndStoneJournalPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Wood & Stone", path: "/portfolio/wood-and-stone" },
            { name: "Journal", path: "/portfolio/wood-and-stone/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <WoodAndStoneJournal lang="en" />
    </>
  );
}
