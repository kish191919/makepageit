import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawCases from "@/lib/templates/GreenLawCases";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Notable Cases | Greene Law Group",
  description:
    "Notable matters closed by Greene Law Group — a law firm homepage template case-results page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/cases",
      ko: "/ko/portfolio/green-law/cases",
      "x-default": "/portfolio/green-law/cases",
    },
  },
};

export default function GreenLawCasesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Greene Law Group", path: "/portfolio/green-law" },
            { name: "Notable Cases", path: "/portfolio/green-law/cases" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawCases lang="en" />
    </>
  );
}
