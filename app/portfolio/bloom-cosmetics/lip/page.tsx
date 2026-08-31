import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import BloomCosmeticsLip from "@/lib/templates/BloomCosmeticsLip";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Lip | BLOOM",
  description:
    "Velvet balms, tints, and glosses made with nourishing oils. The Lip collection from Bloom Cosmetics, an Atelier Shop homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/bloom-cosmetics/lip",
      ko: "/ko/portfolio/bloom-cosmetics/lip",
      "x-default": "/portfolio/bloom-cosmetics/lip",
    },
  },
};

export default function BloomCosmeticsLipPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Bloom Cosmetics", path: "/portfolio/bloom-cosmetics" },
            { name: "Lip", path: "/portfolio/bloom-cosmetics/lip" },
          ])
        )}
      />
      <BackToPortfolio />
      <BloomCosmeticsLip lang="en" />
    </>
  );
}
