import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicDoctors from "@/lib/templates/LumiereClinicDoctors";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Doctors | Lumière Skin Clinic",
  description:
    "Meet the board-certified dermatologists behind Lumière Skin Clinic. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/doctors",
      ko: "/ko/portfolio/lumiere-clinic/doctors",
      "x-default": "/portfolio/lumiere-clinic/doctors",
    },
  },
};

export default function LumiereClinicDoctorsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Lumière Skin Clinic", path: "/portfolio/lumiere-clinic" },
            { name: "Doctors", path: "/portfolio/lumiere-clinic/doctors" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicDoctors lang="en" />
    </>
  );
}
