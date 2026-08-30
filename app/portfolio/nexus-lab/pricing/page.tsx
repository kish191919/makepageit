import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NexusLabPricing from "@/lib/templates/NexusLabPricing";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Pricing | Nexus Lab",
  description:
    "Hobby, Team, and Enterprise plans for Nexus Lab — a developer-tool homepage template pricing page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/nexus-lab/pricing",
      ko: "/ko/portfolio/nexus-lab/pricing",
      "x-default": "/portfolio/nexus-lab/pricing",
    },
  },
};

export default function NexusLabPricingPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Nexus Lab", path: "/portfolio/nexus-lab" },
            { name: "Pricing", path: "/portfolio/nexus-lab/pricing" },
          ])
        )}
      />
      <BackToPortfolio />
      <NexusLabPricing lang="en" />
    </>
  );
}
