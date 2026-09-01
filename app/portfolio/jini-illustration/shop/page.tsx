import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import JiniIllustrationShop from "@/lib/templates/JiniIllustrationShop";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Shop | Jenna Cole Illustration",
  description:
    "Prints, sticker sheets, and postcards from illustrator Jenna Cole's studio. A portfolio homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/jini-illustration/shop",
      ko: "/ko/portfolio/jini-illustration/shop",
      "x-default": "/portfolio/jini-illustration/shop",
    },
  },
};

export default function JiniIllustrationShopPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Jenna Cole Illustration", path: "/portfolio/jini-illustration" },
            { name: "Shop", path: "/portfolio/jini-illustration/shop" },
          ])
        )}
      />
      <BackToPortfolio />
      <JiniIllustrationShop lang="en" />
    </>
  );
}
