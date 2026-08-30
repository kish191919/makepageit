import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import VillaToscanaPress from "@/lib/templates/VillaToscanaPress";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Press | Villa Toscana",
  description:
    "Critic and guide mentions of Villa Toscana since 2011 — a fine-dining homepage template press page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/villa-toscana/press",
      ko: "/ko/portfolio/villa-toscana/press",
      "x-default": "/portfolio/villa-toscana/press",
    },
  },
};

export default function VillaToscanaPressPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Villa Toscana", path: "/portfolio/villa-toscana" },
            { name: "Press", path: "/portfolio/villa-toscana/press" },
          ])
        )}
      />
      <BackToPortfolio />
      <VillaToscanaPress lang="en" />
    </>
  );
}
