import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import BloomCosmeticsSkincare from "@/lib/templates/BloomCosmeticsSkincare";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Skincare | BLOOM",
  description:
    "Vegan-certified serums, toners, and creams in refillable packaging. The Skincare collection from Bloom Cosmetics, an Atelier Shop homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/bloom-cosmetics/skincare",
      ko: "/ko/portfolio/bloom-cosmetics/skincare",
      "x-default": "/portfolio/bloom-cosmetics/skincare",
    },
  },
};

export default function BloomCosmeticsSkincarePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Bloom Cosmetics", path: "/portfolio/bloom-cosmetics" },
            { name: "Skincare", path: "/portfolio/bloom-cosmetics/skincare" },
          ])
        )}
      />
      <BackToPortfolio />
      <BloomCosmeticsSkincare lang="en" />
    </>
  );
}
