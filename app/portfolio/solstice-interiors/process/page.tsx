import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsProcess from "@/lib/templates/SolsticeInteriorsProcess";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Process | Solstice Interiors",
  description:
    "How a project comes together at Solstice Interiors — a residential design homepage template process page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/process",
      ko: "/ko/portfolio/solstice-interiors/process",
      "x-default": "/portfolio/solstice-interiors/process",
    },
  },
};

export default function SolsticeInteriorsProcessPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Solstice Interiors", path: "/portfolio/solstice-interiors" },
            { name: "Process", path: "/portfolio/solstice-interiors/process" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsProcess lang="en" />
    </>
  );
}
