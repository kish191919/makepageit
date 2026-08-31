import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopLookbook from "@/lib/templates/AtelierShopLookbook";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Lookbook | Atelier 22",
  description:
    "In Bloom — the Spring/Summer 2026 lookbook from Atelier 22, an Atelier Shop homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/lookbook",
      ko: "/ko/portfolio/atelier-shop/lookbook",
      "x-default": "/portfolio/atelier-shop/lookbook",
    },
  },
};

export default function AtelierShopLookbookPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Atelier 22", path: "/portfolio/atelier-shop" },
            { name: "Lookbook", path: "/portfolio/atelier-shop/lookbook" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopLookbook lang="en" />
    </>
  );
}
