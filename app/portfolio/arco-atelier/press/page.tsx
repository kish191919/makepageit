import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import ArcoAtelierPress from "@/lib/templates/ArcoAtelierPress";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Press | Arco Atelier",
  description: "Awards and press coverage of Arco Atelier since 2009 — an architecture homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/arco-atelier/press",
      ko: "/ko/portfolio/arco-atelier/press",
      "x-default": "/portfolio/arco-atelier/press",
    },
  },
};

export default function ArcoAtelierPressPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Arco Atelier", path: "/portfolio/arco-atelier" },
            { name: "Press", path: "/portfolio/arco-atelier/press" },
          ])
        )}
      />
      <BackToPortfolio />
      <ArcoAtelierPress lang="en" />
    </>
  );
}
