import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import NovaStudioStudio from "@/lib/templates/NovaStudioStudio";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Studio | Nova Studio",
  description:
    "A look inside the daylight studio and infinity cyc space where Nova Studio has been shooting for six years — a photographer homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/nova-studio/studio",
      ko: "/ko/portfolio/nova-studio/studio",
      "x-default": "/portfolio/nova-studio/studio",
    },
  },
};

export default function NovaStudioStudioPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Nova Studio", path: "/portfolio/nova-studio" },
            { name: "Studio", path: "/portfolio/nova-studio/studio" },
          ])
        )}
      />
      <BackToPortfolio />
      <NovaStudioStudio lang="en" />
    </>
  );
}
