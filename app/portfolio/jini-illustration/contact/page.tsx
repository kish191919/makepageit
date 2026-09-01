import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import JiniIllustrationContact from "@/lib/templates/JiniIllustrationContact";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact | Jenna Cole Illustration",
  description: "Get in touch with illustrator Jenna Cole about a commission. A portfolio homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/jini-illustration/contact",
      ko: "/ko/portfolio/jini-illustration/contact",
      "x-default": "/portfolio/jini-illustration/contact",
    },
  },
};

export default function JiniIllustrationContactPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Jenna Cole Illustration", path: "/portfolio/jini-illustration" },
            { name: "Contact", path: "/portfolio/jini-illustration/contact" },
          ])
        )}
      />
      <BackToPortfolio />
      <JiniIllustrationContact lang="en" />
    </>
  );
}
