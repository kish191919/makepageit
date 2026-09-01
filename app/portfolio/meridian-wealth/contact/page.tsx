import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthContact from "@/lib/templates/MeridianWealthContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact | Meridian Wealth Partners",
  description:
    "Schedule a free 30-minute consultation with Meridian Wealth Partners — a wealth management homepage template contact page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/contact",
      ko: "/ko/portfolio/meridian-wealth/contact",
      "x-default": "/portfolio/meridian-wealth/contact",
    },
  },
};

export default function MeridianWealthContactPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Meridian Wealth Partners", path: "/portfolio/meridian-wealth" },
            { name: "Contact", path: "/portfolio/meridian-wealth/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthContact lang="en" />
    </>
  );
}
