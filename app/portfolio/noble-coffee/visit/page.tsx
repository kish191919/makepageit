import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NobleCoffeeVisit from "@/lib/templates/NobleCoffeeVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Visit Us | Noble Coffee Roasters",
  description:
    "Address, hours, and everything you need to know before you visit Noble Coffee Roasters — a Noble Coffee homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/noble-coffee/visit",
      ko: "/ko/portfolio/noble-coffee/visit",
      "x-default": "/portfolio/noble-coffee/visit",
    },
  },
};

export default function NobleCoffeeVisitPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Noble Coffee Roasters", path: "/portfolio/noble-coffee" },
            { name: "Visit", path: "/portfolio/noble-coffee/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <NobleCoffeeVisit lang="en" />
    </>
  );
}
