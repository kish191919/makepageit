import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HaloFitnessPlans from "@/lib/templates/HaloFitnessPlans";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Plans | HALO Fitness",
  description:
    "Free, Plus, and Pro — compare HALO's membership tiers. A fitness app landing page template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/halo-fitness/plans",
      ko: "/ko/portfolio/halo-fitness/plans",
      "x-default": "/portfolio/halo-fitness/plans",
    },
  },
};

export default function HaloFitnessPlansPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Halo Fitness", path: "/portfolio/halo-fitness" },
            { name: "Plans", path: "/portfolio/halo-fitness/plans" },
          ])
        )}
      />
      <BackToPortfolio />
      <HaloFitnessPlans lang="en" />
    </>
  );
}
