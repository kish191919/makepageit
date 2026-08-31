import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import ArcoAtelierContact from "@/lib/templates/ArcoAtelierContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact | Arco Atelier",
  description: "Get in touch with Arco Atelier — offices, inquiries, and project contact form. An architecture homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/arco-atelier/contact",
      ko: "/ko/portfolio/arco-atelier/contact",
      "x-default": "/portfolio/arco-atelier/contact",
    },
  },
};

export default function ArcoAtelierContactPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Arco Atelier", path: "/portfolio/arco-atelier" },
            { name: "Contact", path: "/portfolio/arco-atelier/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <ArcoAtelierContact lang="en" />
    </>
  );
}
