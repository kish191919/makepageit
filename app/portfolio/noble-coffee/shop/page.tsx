import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeShop from "@/lib/templates/NobleCoffeeShop";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Shop | Noble Coffee Roasters",
  description:
    "Whole bean coffee, roasted to order and shipped fresh — a Noble Coffee homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/shop",
      ko: "/ko/portfolio/noble-coffee/shop",
      "x-default": "/portfolio/noble-coffee/shop",
    },
  },
};

export default function NobleCoffeeShopPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Noble Coffee Roasters", path: "/portfolio/noble-coffee" },
            { name: "Shop", path: "/portfolio/noble-coffee/shop" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeShop lang="en" />
    </>
  );
}
