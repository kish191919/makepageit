import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtySell from "@/lib/templates/HarborRealtySell";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Sell With Us | Harbor & Vale Realty",
  description:
    "How Harbor & Vale Realty sells your home — a real estate homepage template selling-process page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/sell",
      ko: "/ko/portfolio/harbor-realty/sell",
      "x-default": "/portfolio/harbor-realty/sell",
    },
  },
};

export default function HarborRealtySellPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Harbor & Vale Realty", path: "/portfolio/harbor-realty" },
            { name: "Sell With Us", path: "/portfolio/harbor-realty/sell" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtySell lang="en" />
    </>
  );
}
