import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopAccessories from "@/lib/templates/AtelierShopAccessories";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Accessories | Atelier 22",
  description:
    "Hand-stitched totes, silk scarves, and wool berets — the Accessories collection from Atelier 22, an Atelier Shop homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/accessories",
      ko: "/ko/portfolio/atelier-shop/accessories",
      "x-default": "/portfolio/atelier-shop/accessories",
    },
  },
};

export default function AtelierShopAccessoriesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Atelier 22", path: "/portfolio/atelier-shop" },
            { name: "Accessories", path: "/portfolio/atelier-shop/accessories" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopAccessories lang="en" />
    </>
  );
}
