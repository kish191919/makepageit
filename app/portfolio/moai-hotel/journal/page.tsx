import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import MoaiHotelJournal from "@/lib/templates/MoaiHotelJournal";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Journal | The Wayfarer Hotel & Resort",
  description:
    "Field notes from the cliff — seasonal rituals and stories from the Wayfarer, a boutique hotel homepage template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/moai-hotel/journal",
      ko: "/ko/portfolio/moai-hotel/journal",
      "x-default": "/portfolio/moai-hotel/journal",
    },
  },
};

export default function MoaiHotelJournalPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "The Wayfarer Hotel & Resort", path: "/portfolio/moai-hotel" },
            { name: "Journal", path: "/portfolio/moai-hotel/journal" },
          ])
        )}
      />
      <BackToPortfolio />
      <MoaiHotelJournal lang="en" />
    </>
  );
}
