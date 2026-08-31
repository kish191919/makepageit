import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaPilatesMembership from "@/lib/templates/MoaPilatesMembership";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Membership | FORM & FLOW PILATES",
  description:
    "Compare 1:1 Private, Group Reformer, and Morning Mat pricing and pick a plan that fits how often you train. A Moa Pilates homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/moa-pilates/membership",
      ko: "/ko/portfolio/moa-pilates/membership",
      "x-default": "/portfolio/moa-pilates/membership",
    },
  },
};

export default function MoaPilatesMembershipPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "FORM & FLOW PILATES", path: "/portfolio/moa-pilates" },
            { name: "Membership", path: "/portfolio/moa-pilates/membership" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaPilatesMembership lang="en" />
    </>
  );
}
