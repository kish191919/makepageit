import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import BloomCosmeticsBodycare from "@/lib/templates/BloomCosmeticsBodycare";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Bodycare | BLOOM",
  description:
    "Whipped body butters, gentle scrubs, and fragrance-free lotions in refillable jars. The Bodycare collection from Bloom Cosmetics, an Atelier Shop homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/bloom-cosmetics/bodycare",
      ko: "/ko/portfolio/bloom-cosmetics/bodycare",
      "x-default": "/portfolio/bloom-cosmetics/bodycare",
    },
  },
};

export default function BloomCosmeticsBodycarePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Bloom Cosmetics", path: "/portfolio/bloom-cosmetics" },
            { name: "Bodycare", path: "/portfolio/bloom-cosmetics/bodycare" },
          ])
        )}
      />
      <BackToPortfolio />
      <BloomCosmeticsBodycare lang="en" />
    </>
  );
}
