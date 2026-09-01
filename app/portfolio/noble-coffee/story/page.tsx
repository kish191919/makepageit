import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeStory from "@/lib/templates/NobleCoffeeStory";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Story | Noble Coffee Roasters",
  description:
    "The farms, the timeline, and the people behind Noble Coffee Roasters — a Noble Coffee homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/story",
      ko: "/ko/portfolio/noble-coffee/story",
      "x-default": "/portfolio/noble-coffee/story",
    },
  },
};

export default function NobleCoffeeStoryPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Noble Coffee Roasters", path: "/portfolio/noble-coffee" },
            { name: "Story", path: "/portfolio/noble-coffee/story" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeStory lang="en" />
    </>
  );
}
