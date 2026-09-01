import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import KittWorksAbout from "@/lib/templates/KittWorksAbout";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About | kade.works",
  description: "Product designer Kade — seven years, twelve companies, and a practice built around calm, useful interfaces. A portfolio homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/kitt-works/about",
      ko: "/ko/portfolio/kitt-works/about",
      "x-default": "/portfolio/kitt-works/about",
    },
  },
};

export default function KittWorksAboutPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Kitt Works", path: "/portfolio/kitt-works" },
            { name: "About", path: "/portfolio/kitt-works/about" },
          ])
        )}
      />
      <BackToPortfolio />
      <KittWorksAbout lang="en" />
    </>
  );
}
