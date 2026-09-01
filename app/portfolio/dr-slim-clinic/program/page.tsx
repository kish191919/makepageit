import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DrSlimClinicProgram from "@/lib/templates/DrSlimClinicProgram";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Program | Contour Wellness Clinic",
  description:
    "Body composition analysis, weekly 1:1 director visits, real-food meal coaching, and a maintenance track. A Dr. Slim Clinic homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/dr-slim-clinic/program",
      ko: "/ko/portfolio/dr-slim-clinic/program",
      "x-default": "/portfolio/dr-slim-clinic/program",
    },
  },
};

export default function DrSlimClinicProgramPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Contour Wellness Clinic", path: "/portfolio/dr-slim-clinic" },
            { name: "Program", path: "/portfolio/dr-slim-clinic/program" },
          ])
        )}
      />
      <BackToPortfolio />
      <DrSlimClinicProgram lang="en" />
    </>
  );
}
