import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsPortfolio from "@/lib/templates/SolsticeInteriorsPortfolio";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Portfolio | Solstice Interiors",
  description:
    "Selected residential design projects from Solstice Interiors — a residential design homepage template portfolio page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/portfolio",
      ko: "/ko/portfolio/solstice-interiors/portfolio",
      "x-default": "/portfolio/solstice-interiors/portfolio",
    },
  },
};

export default function SolsticeInteriorsPortfolioPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Solstice Interiors", path: "/portfolio/solstice-interiors" },
            { name: "Portfolio", path: "/portfolio/solstice-interiors/portfolio" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsPortfolio lang="en" />
    </>
  );
}
