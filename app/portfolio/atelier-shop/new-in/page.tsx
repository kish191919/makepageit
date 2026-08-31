import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopNewIn from "@/lib/templates/AtelierShopNewIn";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "New In | Atelier 22",
  description:
    "This week's arrivals — coats, knits, and accessories fresh off the workroom table. The New In collection from Atelier 22, an Atelier Shop homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/new-in",
      ko: "/ko/portfolio/atelier-shop/new-in",
      "x-default": "/portfolio/atelier-shop/new-in",
    },
  },
};

export default function AtelierShopNewInPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Atelier 22", path: "/portfolio/atelier-shop" },
            { name: "New In", path: "/portfolio/atelier-shop/new-in" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopNewIn lang="en" />
    </>
  );
}
