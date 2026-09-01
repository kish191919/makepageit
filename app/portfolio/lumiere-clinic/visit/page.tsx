import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicVisit from "@/lib/templates/LumiereClinicVisit";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Visit | Lumière Skin Clinic",
  description: "Address, hours, and directions for Lumière Skin Clinic. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/visit",
      ko: "/ko/portfolio/lumiere-clinic/visit",
      "x-default": "/portfolio/lumiere-clinic/visit",
    },
  },
};

export default function LumiereClinicVisitPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Lumière Skin Clinic", path: "/portfolio/lumiere-clinic" },
            { name: "Visit", path: "/portfolio/lumiere-clinic/visit" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicVisit lang="en" />
    </>
  );
}
