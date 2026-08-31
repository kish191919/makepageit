import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import ArcoAtelierWork from "@/lib/templates/ArcoAtelierWork";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Work | Arco Atelier",
  description: "Selected buildings and interiors by Arco Atelier, 2019 — 2024 — an architecture homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/arco-atelier/work",
      ko: "/ko/portfolio/arco-atelier/work",
      "x-default": "/portfolio/arco-atelier/work",
    },
  },
};

export default function ArcoAtelierWorkPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Arco Atelier", path: "/portfolio/arco-atelier" },
            { name: "Work", path: "/portfolio/arco-atelier/work" },
          ])
        )}
      />
      <BackToPortfolio />
      <ArcoAtelierWork lang="en" />
    </>
  );
}
