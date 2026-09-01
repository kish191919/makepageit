import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthApproach from "@/lib/templates/MeridianWealthApproach";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Approach | Meridian Wealth Partners",
  description:
    "Fee-only, fiduciary, evidence-based investment philosophy and process — a wealth management homepage template approach page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/approach",
      ko: "/ko/portfolio/meridian-wealth/approach",
      "x-default": "/portfolio/meridian-wealth/approach",
    },
  },
};

export default function MeridianWealthApproachPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Meridian Wealth Partners", path: "/portfolio/meridian-wealth" },
            { name: "Our Approach", path: "/portfolio/meridian-wealth/approach" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthApproach lang="en" />
    </>
  );
}
