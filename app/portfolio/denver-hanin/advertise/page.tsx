import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DenverHaninAdvertise from "@/lib/templates/DenverHaninAdvertise";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Advertise | Denver Hanin Weekly",
  description:
    "Directory listings, homepage banners, and sponsored articles to put your business in front of Denver's Korean-American community. A portfolio community-portal template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/denver-hanin/advertise",
      ko: "/ko/portfolio/denver-hanin/advertise",
      "x-default": "/portfolio/denver-hanin/advertise",
    },
  },
};

export default function DenverHaninAdvertisePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Denver Hanin Weekly", path: "/portfolio/denver-hanin" },
            { name: "Advertise", path: "/portfolio/denver-hanin/advertise" },
          ])
        )}
      />
      <BackToPortfolio />
      <DenverHaninAdvertise lang="en" />
    </>
  );
}
