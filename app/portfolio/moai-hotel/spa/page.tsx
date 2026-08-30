import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaiHotelSpa from "@/lib/templates/MoaiHotelSpa";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Spa | The Wayfarer Hotel & Resort",
  description:
    "Mediterranean-style spa treatments at the Wayfarer — a boutique hotel homepage template spa page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/moai-hotel/spa",
      ko: "/ko/portfolio/moai-hotel/spa",
      "x-default": "/portfolio/moai-hotel/spa",
    },
  },
};

export default function MoaiHotelSpaPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "The Wayfarer Hotel & Resort", path: "/portfolio/moai-hotel" },
            { name: "Spa", path: "/portfolio/moai-hotel/spa" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaiHotelSpa lang="en" />
    </>
  );
}
