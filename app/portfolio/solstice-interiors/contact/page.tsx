import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SolsticeInteriorsContact from "@/lib/templates/SolsticeInteriorsContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact | Solstice Interiors",
  description:
    "Start a project with Solstice Interiors — a residential design homepage template contact page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/solstice-interiors/contact",
      ko: "/ko/portfolio/solstice-interiors/contact",
      "x-default": "/portfolio/solstice-interiors/contact",
    },
  },
};

export default function SolsticeInteriorsContactPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Solstice Interiors", path: "/portfolio/solstice-interiors" },
            { name: "Contact", path: "/portfolio/solstice-interiors/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <SolsticeInteriorsContact lang="en" />
    </>
  );
}
