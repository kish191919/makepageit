import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtyListings from "@/lib/templates/HarborRealtyListings";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Listings | Harbor & Vale Realty",
  description:
    "Every active listing from Harbor & Vale Realty — a real estate homepage template listings page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/listings",
      ko: "/ko/portfolio/harbor-realty/listings",
      "x-default": "/portfolio/harbor-realty/listings",
    },
  },
};

export default function HarborRealtyListingsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Harbor & Vale Realty", path: "/portfolio/harbor-realty" },
            { name: "Listings", path: "/portfolio/harbor-realty/listings" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtyListings lang="en" />
    </>
  );
}
