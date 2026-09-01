import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import HarborRealtyContact from "@/lib/templates/HarborRealtyContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact | Harbor & Vale Realty",
  description:
    "Request a free home valuation or schedule a tour with Harbor & Vale Realty — a real estate homepage template contact page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/harbor-realty/contact",
      ko: "/ko/portfolio/harbor-realty/contact",
      "x-default": "/portfolio/harbor-realty/contact",
    },
  },
};

export default function HarborRealtyContactPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Harbor & Vale Realty", path: "/portfolio/harbor-realty" },
            { name: "Contact", path: "/portfolio/harbor-realty/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <HarborRealtyContact lang="en" />
    </>
  );
}
