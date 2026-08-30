import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthInsights from "@/lib/templates/MeridianWealthInsights";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Insights | Meridian Wealth Partners",
  description:
    "Fee-only planning notes from Meridian Wealth Partners — a wealth management homepage template insights page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/insights",
      ko: "/ko/portfolio/meridian-wealth/insights",
      "x-default": "/portfolio/meridian-wealth/insights",
    },
  },
};

export default function MeridianWealthInsightsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Meridian Wealth Partners", path: "/portfolio/meridian-wealth" },
            { name: "Insights", path: "/portfolio/meridian-wealth/insights" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthInsights lang="en" />
    </>
  );
}
