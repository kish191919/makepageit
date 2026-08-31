import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SeoulBakeryStory from "@/lib/templates/SeoulBakeryStory";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Story | Sunrise Bakery Co.",
  description:
    "Twenty years, one oven — the story behind Sunrise Bakery Co., a Seoul Bakery homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/seoul-bakery/story",
      ko: "/ko/portfolio/seoul-bakery/story",
      "x-default": "/portfolio/seoul-bakery/story",
    },
  },
};

export default function SeoulBakeryStoryPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Sunrise Bakery Co.", path: "/portfolio/seoul-bakery" },
            { name: "Story", path: "/portfolio/seoul-bakery/story" },
          ])
        )}
      />
      <BackToPortfolio />
      <SeoulBakeryStory lang="en" />
    </>
  );
}
