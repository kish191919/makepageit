import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import JiniIllustrationAbout from "@/lib/templates/JiniIllustrationAbout";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About | Jenna Cole Illustration",
  description:
    "Illustrator and essayist Jenna Cole — eight years of hand-drawn book covers, packaging, and editorial art. A portfolio homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/jini-illustration/about",
      ko: "/ko/portfolio/jini-illustration/about",
      "x-default": "/portfolio/jini-illustration/about",
    },
  },
};

export default function JiniIllustrationAboutPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Jenna Cole Illustration", path: "/portfolio/jini-illustration" },
            { name: "About", path: "/portfolio/jini-illustration/about" },
          ])
        )}
      />
      <BackToPortfolio />
      <JiniIllustrationAbout lang="en" />
    </>
  );
}
