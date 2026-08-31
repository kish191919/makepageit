import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopOuterwear from "@/lib/templates/AtelierShopOuterwear";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Outerwear | Atelier 22",
  description:
    "Linen wrap coats, wool herringbone coats, and quilted field jackets — the Outerwear collection from Atelier 22, an Atelier Shop homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/outerwear",
      ko: "/ko/portfolio/atelier-shop/outerwear",
      "x-default": "/portfolio/atelier-shop/outerwear",
    },
  },
};

export default function AtelierShopOuterwearPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Atelier 22", path: "/portfolio/atelier-shop" },
            { name: "Outerwear", path: "/portfolio/atelier-shop/outerwear" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopOuterwear lang="en" />
    </>
  );
}
