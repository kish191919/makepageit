import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MeridianWealthAdvisors from "@/lib/templates/MeridianWealthAdvisors";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Advisors | Meridian Wealth Partners",
  description:
    "Meet the CFP® and CFA® advisors at Meridian Wealth Partners — a wealth management homepage template advisors page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/meridian-wealth/advisors",
      ko: "/ko/portfolio/meridian-wealth/advisors",
      "x-default": "/portfolio/meridian-wealth/advisors",
    },
  },
};

export default function MeridianWealthAdvisorsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Meridian Wealth Partners", path: "/portfolio/meridian-wealth" },
            { name: "Advisors", path: "/portfolio/meridian-wealth/advisors" },
          ])
        )}
      />
      <BackToPortfolio />
      <MeridianWealthAdvisors lang="en" />
    </>
  );
}
