import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import ArcoAtelierPractice from "@/lib/templates/ArcoAtelierPractice";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Practice | Arco Atelier",
  description: "How Arco Atelier works — a twelve-architect practice built on fewer projects and full attention. An architecture homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/arco-atelier/practice",
      ko: "/ko/portfolio/arco-atelier/practice",
      "x-default": "/portfolio/arco-atelier/practice",
    },
  },
};

export default function ArcoAtelierPracticePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Arco Atelier", path: "/portfolio/arco-atelier" },
            { name: "Practice", path: "/portfolio/arco-atelier/practice" },
          ])
        )}
      />
      <BackToPortfolio />
      <ArcoAtelierPractice lang="en" />
    </>
  );
}
