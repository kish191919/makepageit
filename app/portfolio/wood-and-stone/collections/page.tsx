import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WoodAndStoneCollections from "@/lib/templates/WoodAndStoneCollections";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Collections | Wood & Stone",
  description:
    "The FOREST, QUARRY, and CALM collections from Wood & Stone — a furniture homepage template collections page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/wood-and-stone/collections",
      ko: "/ko/portfolio/wood-and-stone/collections",
      "x-default": "/portfolio/wood-and-stone/collections",
    },
  },
};

export default function WoodAndStoneCollectionsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Wood & Stone", path: "/portfolio/wood-and-stone" },
            { name: "Collections", path: "/portfolio/wood-and-stone/collections" },
          ])
        )}
      />
      <BackToPortfolio />
      <WoodAndStoneCollections lang="en" />
    </>
  );
}
