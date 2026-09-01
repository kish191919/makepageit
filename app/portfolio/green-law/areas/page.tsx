import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawAreas from "@/lib/templates/GreenLawAreas";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Practice Areas | Greene Law Group",
  description:
    "The six practice groups at Greene Law Group — a law firm homepage template practice-areas page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/areas",
      ko: "/ko/portfolio/green-law/areas",
      "x-default": "/portfolio/green-law/areas",
    },
  },
};

export default function GreenLawAreasPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Greene Law Group", path: "/portfolio/green-law" },
            { name: "Practice Areas", path: "/portfolio/green-law/areas" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawAreas lang="en" />
    </>
  );
}
