import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicTreatments from "@/lib/templates/LumiereClinicTreatments";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Treatments | Lumière Skin Clinic",
  description:
    "Signature dermatology treatments — Hydrating Boost, Laser Toning, Lift & Contour, and Acne Care. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/treatments",
      ko: "/ko/portfolio/lumiere-clinic/treatments",
      "x-default": "/portfolio/lumiere-clinic/treatments",
    },
  },
};

export default function LumiereClinicTreatmentsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Lumière Skin Clinic", path: "/portfolio/lumiere-clinic" },
            { name: "Treatments", path: "/portfolio/lumiere-clinic/treatments" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicTreatments lang="en" />
    </>
  );
}
