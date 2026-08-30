import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtyNeighborhoods from "@/lib/templates/HarborRealtyNeighborhoods";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Neighborhoods | Harbor & Vale Realty",
  description:
    "A guide to the coastal neighborhoods Harbor & Vale Realty covers — a real estate homepage template neighborhoods page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/neighborhoods",
      ko: "/ko/portfolio/harbor-realty/neighborhoods",
      "x-default": "/portfolio/harbor-realty/neighborhoods",
    },
  },
};

export default function HarborRealtyNeighborhoodsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Harbor & Vale Realty", path: "/portfolio/harbor-realty" },
            { name: "Neighborhoods", path: "/portfolio/harbor-realty/neighborhoods" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtyNeighborhoods lang="en" />
    </>
  );
}
