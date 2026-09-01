import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtyAgents from "@/lib/templates/HarborRealtyAgents";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Agents | Harbor & Vale Realty",
  description:
    "Meet the agents at Harbor & Vale Realty — a real estate homepage template team page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/agents",
      ko: "/ko/portfolio/harbor-realty/agents",
      "x-default": "/portfolio/harbor-realty/agents",
    },
  },
};

export default function HarborRealtyAgentsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Harbor & Vale Realty", path: "/portfolio/harbor-realty" },
            { name: "Agents", path: "/portfolio/harbor-realty/agents" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtyAgents lang="en" />
    </>
  );
}
