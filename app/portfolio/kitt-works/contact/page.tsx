import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import KittWorksContact from "@/lib/templates/KittWorksContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact | kade.works",
  description: "Get in touch with product designer Kade — a portfolio homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/kitt-works/contact",
      ko: "/ko/portfolio/kitt-works/contact",
      "x-default": "/portfolio/kitt-works/contact",
    },
  },
};

export default function KittWorksContactPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Kitt Works", path: "/portfolio/kitt-works" },
            { name: "Contact", path: "/portfolio/kitt-works/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <KittWorksContact lang="en" />
    </>
  );
}
