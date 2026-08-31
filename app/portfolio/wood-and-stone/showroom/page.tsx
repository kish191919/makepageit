import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WoodAndStoneShowroom from "@/lib/templates/WoodAndStoneShowroom";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Showroom | Wood & Stone",
  description:
    "Visit the Wood & Stone showroom — address, hours, and contact details on a furniture homepage template showroom page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/wood-and-stone/showroom",
      ko: "/ko/portfolio/wood-and-stone/showroom",
      "x-default": "/portfolio/wood-and-stone/showroom",
    },
  },
};

export default function WoodAndStoneShowroomPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Wood & Stone", path: "/portfolio/wood-and-stone" },
            { name: "Showroom", path: "/portfolio/wood-and-stone/showroom" },
          ])
        )}
      />
      <BackToPortfolio />
      <WoodAndStoneShowroom lang="en" />
    </>
  );
}
