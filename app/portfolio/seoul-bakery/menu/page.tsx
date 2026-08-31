import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SeoulBakeryMenu from "@/lib/templates/SeoulBakeryMenu";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Full Menu | Sunrise Bakery Co.",
  description:
    "Breads, pastries, and cakes baked fresh daily — the full menu from Sunrise Bakery Co., a Seoul Bakery homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/seoul-bakery/menu",
      ko: "/ko/portfolio/seoul-bakery/menu",
      "x-default": "/portfolio/seoul-bakery/menu",
    },
  },
};

export default function SeoulBakeryMenuPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Sunrise Bakery Co.", path: "/portfolio/seoul-bakery" },
            { name: "Full Menu", path: "/portfolio/seoul-bakery/menu" },
          ])
        )}
      />
      <BackToPortfolio />
      <SeoulBakeryMenu lang="en" />
    </>
  );
}
