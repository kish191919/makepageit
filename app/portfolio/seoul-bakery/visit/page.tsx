import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SeoulBakeryVisit from "@/lib/templates/SeoulBakeryVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Visit Us | Sunrise Bakery Co.",
  description:
    "Store hours, address, and directions — visit Sunrise Bakery Co., a Seoul Bakery homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/seoul-bakery/visit",
      ko: "/ko/portfolio/seoul-bakery/visit",
      "x-default": "/portfolio/seoul-bakery/visit",
    },
  },
};

export default function SeoulBakeryVisitPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Sunrise Bakery Co.", path: "/portfolio/seoul-bakery" },
            { name: "Visit", path: "/portfolio/seoul-bakery/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <SeoulBakeryVisit lang="en" />
    </>
  );
}
