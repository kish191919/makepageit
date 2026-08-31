import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import AtelierShopJournal from "@/lib/templates/AtelierShopJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Journal | Atelier 22",
  description:
    "Pattern drafts, fabric sourcing trips, and maker profiles from Atelier 22 — an Atelier Shop homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/atelier-shop/journal",
      ko: "/ko/portfolio/atelier-shop/journal",
      "x-default": "/portfolio/atelier-shop/journal",
    },
  },
};

export default function AtelierShopJournalPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Atelier 22", path: "/portfolio/atelier-shop" },
            { name: "Journal", path: "/portfolio/atelier-shop/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <AtelierShopJournal lang="en" />
    </>
  );
}
