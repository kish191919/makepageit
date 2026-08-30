import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawInsights from "@/lib/templates/GreenLawInsights";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Insights | Greene Law Group",
  description:
    "Plain-language legal explainers from Greene Law Group — a law firm homepage template insights page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/insights",
      ko: "/ko/portfolio/green-law/insights",
      "x-default": "/portfolio/green-law/insights",
    },
  },
};

export default function GreenLawInsightsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Greene Law Group", path: "/portfolio/green-law" },
            { name: "Insights", path: "/portfolio/green-law/insights" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawInsights lang="en" />
    </>
  );
}
