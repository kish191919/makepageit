import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaPilatesPrograms from "@/lib/templates/MoaPilatesPrograms";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Programs | FORM & FLOW PILATES",
  description:
    "Group Reformer, 1:1 Private, and Morning Mat — the three class formats at FORM & FLOW, a boutique pilates studio in Williamsburg. A Moa Pilates homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/moa-pilates/programs",
      ko: "/ko/portfolio/moa-pilates/programs",
      "x-default": "/portfolio/moa-pilates/programs",
    },
  },
};

export default function MoaPilatesProgramsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "FORM & FLOW PILATES", path: "/portfolio/moa-pilates" },
            { name: "Programs", path: "/portfolio/moa-pilates/programs" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaPilatesPrograms lang="en" />
    </>
  );
}
