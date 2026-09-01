import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import JiniIllustrationWorks from "@/lib/templates/JiniIllustrationWorks";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Selected Work | Jenna Cole Illustration",
  description:
    "A closer look at recent illustration commissions — book covers, packaging, and editorial art by Jenna Cole. A portfolio homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/jini-illustration/works",
      ko: "/ko/portfolio/jini-illustration/works",
      "x-default": "/portfolio/jini-illustration/works",
    },
  },
};

export default function JiniIllustrationWorksPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Jenna Cole Illustration", path: "/portfolio/jini-illustration" },
            { name: "Works", path: "/portfolio/jini-illustration/works" },
          ])
        )}
      />
      <BackToPortfolio />
      <JiniIllustrationWorks lang="en" />
    </>
  );
}
