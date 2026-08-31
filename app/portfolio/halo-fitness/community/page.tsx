import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HaloFitnessCommunity from "@/lib/templates/HaloFitnessCommunity";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Community | HALO Fitness",
  description:
    "Real people, real streaks, real accountability — stories from the HALO community. A fitness app landing page template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/halo-fitness/community",
      ko: "/ko/portfolio/halo-fitness/community",
      "x-default": "/portfolio/halo-fitness/community",
    },
  },
};

export default function HaloFitnessCommunityPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Halo Fitness", path: "/portfolio/halo-fitness" },
            { name: "Community", path: "/portfolio/halo-fitness/community" },
          ])
        )}
      />
      <BackToPortfolio />
      <HaloFitnessCommunity lang="en" />
    </>
  );
}
