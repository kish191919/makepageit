import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WoodAndStoneShop from "@/lib/templates/WoodAndStoneShop";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Shop | Wood & Stone",
  description:
    "The full FOREST, QUARRY, and CALM catalog from Wood & Stone — a furniture homepage template shop page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/wood-and-stone/shop",
      ko: "/ko/portfolio/wood-and-stone/shop",
      "x-default": "/portfolio/wood-and-stone/shop",
    },
  },
};

export default function WoodAndStoneShopPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Wood & Stone", path: "/portfolio/wood-and-stone" },
            { name: "Shop", path: "/portfolio/wood-and-stone/shop" },
          ])
        )}
      />
      <BackToPortfolio />
      <WoodAndStoneShop lang="en" />
    </>
  );
}
