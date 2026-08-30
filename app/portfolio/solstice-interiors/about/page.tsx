import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsAbout from "@/lib/templates/SolsticeInteriorsAbout";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About | Solstice Interiors",
  description:
    "The studio and story behind Solstice Interiors — a residential design homepage template about page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/about",
      ko: "/ko/portfolio/solstice-interiors/about",
      "x-default": "/portfolio/solstice-interiors/about",
    },
  },
};

export default function SolsticeInteriorsAboutPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Solstice Interiors", path: "/portfolio/solstice-interiors" },
            { name: "About", path: "/portfolio/solstice-interiors/about" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsAbout lang="en" />
    </>
  );
}
