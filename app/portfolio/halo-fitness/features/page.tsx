import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HaloFitnessFeatures from "@/lib/templates/HaloFitnessFeatures";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Features | HALO Fitness",
  description:
    "AI Coach, heart · sleep · recovery tracking, and the 30-day challenge — the core features of HALO, a fitness app landing page template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/halo-fitness/features",
      ko: "/ko/portfolio/halo-fitness/features",
      "x-default": "/portfolio/halo-fitness/features",
    },
  },
};

export default function HaloFitnessFeaturesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Halo Fitness", path: "/portfolio/halo-fitness" },
            { name: "Features", path: "/portfolio/halo-fitness/features" },
          ])
        )}
      />
      <BackToPortfolio />
      <HaloFitnessFeatures lang="en" />
    </>
  );
}
