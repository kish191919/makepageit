import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaiHotelDine from "@/lib/templates/MoaiHotelDine";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Dine | The Wayfarer Hotel & Resort",
  description:
    "Cellar dining, a chef's counter, and a cliffside terrace at the Wayfarer — a boutique hotel homepage template dine page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/moai-hotel/dine",
      ko: "/ko/portfolio/moai-hotel/dine",
      "x-default": "/portfolio/moai-hotel/dine",
    },
  },
};

export default function MoaiHotelDinePage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "The Wayfarer Hotel & Resort", path: "/portfolio/moai-hotel" },
            { name: "Dine", path: "/portfolio/moai-hotel/dine" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaiHotelDine lang="en" />
    </>
  );
}
