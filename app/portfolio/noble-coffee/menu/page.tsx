import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeMenu from "@/lib/templates/NobleCoffeeMenu";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Menu | Noble Coffee Roasters",
  description:
    "Single-origin filter coffee, an espresso bar, and morning bakery from Noble Coffee Roasters — a Noble Coffee homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/menu",
      ko: "/ko/portfolio/noble-coffee/menu",
      "x-default": "/portfolio/noble-coffee/menu",
    },
  },
};

export default function NobleCoffeeMenuPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Noble Coffee Roasters", path: "/portfolio/noble-coffee" },
            { name: "Menu", path: "/portfolio/noble-coffee/menu" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeMenu lang="en" />
    </>
  );
}
