import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthServices from "@/lib/templates/MeridianWealthServices";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Services | Meridian Wealth Partners",
  description:
    "Fee-only retirement, investment, estate, tax, insurance, and business-owner planning services — a wealth management homepage template services page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/services",
      ko: "/ko/portfolio/meridian-wealth/services",
      "x-default": "/portfolio/meridian-wealth/services",
    },
  },
};

export default function MeridianWealthServicesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Meridian Wealth Partners", path: "/portfolio/meridian-wealth" },
            { name: "Services", path: "/portfolio/meridian-wealth/services" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthServices lang="en" />
    </>
  );
}
