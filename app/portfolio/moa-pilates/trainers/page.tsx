import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaPilatesTrainers from "@/lib/templates/MoaPilatesTrainers";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Trainers | FORM & FLOW PILATES",
  description:
    "Meet the founder, reformer lead, and rehab specialist behind every class at FORM & FLOW. A Moa Pilates homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/moa-pilates/trainers",
      ko: "/ko/portfolio/moa-pilates/trainers",
      "x-default": "/portfolio/moa-pilates/trainers",
    },
  },
};

export default function MoaPilatesTrainersPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "FORM & FLOW PILATES", path: "/portfolio/moa-pilates" },
            { name: "Trainers", path: "/portfolio/moa-pilates/trainers" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaPilatesTrainers lang="en" />
    </>
  );
}
