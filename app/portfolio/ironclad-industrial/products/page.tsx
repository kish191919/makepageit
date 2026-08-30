import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import IroncladIndustrialProducts from "@/lib/templates/IroncladIndustrialProducts";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Products | Ironclad Industrial Supply",
  description:
    "Precision-machined parts and assemblies from Ironclad Industrial Supply — a manufacturer homepage template products page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/ironclad-industrial/products",
      ko: "/ko/portfolio/ironclad-industrial/products",
      "x-default": "/portfolio/ironclad-industrial/products",
    },
  },
};

export default function IroncladIndustrialProductsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Ironclad Industrial Supply", path: "/portfolio/ironclad-industrial" },
            { name: "Products", path: "/portfolio/ironclad-industrial/products" },
          ])
        )}
      />
      <BackToPortfolio />
      <IroncladIndustrialProducts lang="en" />
    </>
  );
}
