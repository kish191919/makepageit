import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import GreenLawVisit from "@/lib/templates/GreenLawVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact | Greene Law Group",
  description:
    "Book a consultation with Greene Law Group — a law firm homepage template contact page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/green-law/visit",
      ko: "/ko/portfolio/green-law/visit",
      "x-default": "/portfolio/green-law/visit",
    },
  },
};

export default function GreenLawVisitPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Greene Law Group", path: "/portfolio/green-law" },
            { name: "Contact", path: "/portfolio/green-law/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <GreenLawVisit lang="en" />
    </>
  );
}
