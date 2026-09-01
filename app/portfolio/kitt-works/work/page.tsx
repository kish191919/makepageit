import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import KittWorksWork from "@/lib/templates/KittWorksWork";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Selected Work | kade.works",
  description:
    "A closer look at four recent product design projects — Stripe, Lyft, Linear, and Riot Games — a portfolio homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/kitt-works/work",
      ko: "/ko/portfolio/kitt-works/work",
      "x-default": "/portfolio/kitt-works/work",
    },
  },
};

export default function KittWorksWorkPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Kitt Works", path: "/portfolio/kitt-works" },
            { name: "Work", path: "/portfolio/kitt-works/work" },
          ])
        )}
      />
      <BackToPortfolio />
      <KittWorksWork lang="en" />
    </>
  );
}
