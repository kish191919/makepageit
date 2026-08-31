import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import BloomCosmeticsSets from "@/lib/templates/BloomCosmeticsSets";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Sets | BLOOM",
  description:
    "Our bestsellers, bundled together and priced to save. The Sets collection from Bloom Cosmetics, an Atelier Shop homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/bloom-cosmetics/sets",
      ko: "/ko/portfolio/bloom-cosmetics/sets",
      "x-default": "/portfolio/bloom-cosmetics/sets",
    },
  },
};

export default function BloomCosmeticsSetsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Bloom Cosmetics", path: "/portfolio/bloom-cosmetics" },
            { name: "Sets", path: "/portfolio/bloom-cosmetics/sets" },
          ])
        )}
      />
      <BackToPortfolio />
      <BloomCosmeticsSets lang="en" />
    </>
  );
}
