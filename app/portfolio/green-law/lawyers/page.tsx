import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawLawyers from "@/lib/templates/GreenLawLawyers";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Attorneys | Greene Law Group",
  description:
    "Meet the attorneys of Greene Law Group — a law firm homepage template team page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/lawyers",
      ko: "/ko/portfolio/green-law/lawyers",
      "x-default": "/portfolio/green-law/lawyers",
    },
  },
};

export default function GreenLawLawyersPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Greene Law Group", path: "/portfolio/green-law" },
            { name: "Attorneys", path: "/portfolio/green-law/lawyers" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawLawyers lang="en" />
    </>
  );
}
