import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import IroncladIndustrialIndustries from "@/lib/templates/IroncladIndustrialIndustries";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Industries | Ironclad Industrial Supply",
  description:
    "Aerospace, defense, heavy equipment, and medical device manufacturing served by Ironclad Industrial Supply — a manufacturer homepage template industries page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/ironclad-industrial/industries",
      ko: "/ko/portfolio/ironclad-industrial/industries",
      "x-default": "/portfolio/ironclad-industrial/industries",
    },
  },
};

export default function IroncladIndustrialIndustriesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Ironclad Industrial Supply", path: "/portfolio/ironclad-industrial" },
            { name: "Industries", path: "/portfolio/ironclad-industrial/industries" },
          ])
        )}
      />
      <BackToPortfolio />
      <IroncladIndustrialIndustries lang="en" />
    </>
  );
}
