import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VillaToscanaStory from "@/lib/templates/VillaToscanaStory";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Story | Villa Toscana",
  description:
    "Fourteen years of Villa Toscana — the chef, the timeline, and the philosophy behind a fine-dining homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/villa-toscana/story",
      ko: "/ko/portfolio/villa-toscana/story",
      "x-default": "/portfolio/villa-toscana/story",
    },
  },
};

export default function VillaToscanaStoryPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Villa Toscana", path: "/portfolio/villa-toscana" },
            { name: "Story", path: "/portfolio/villa-toscana/story" },
          ])
        )}
      />
      <BackToPortfolio />
      <VillaToscanaStory lang="en" />
    </>
  );
}
