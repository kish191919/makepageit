import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DrSlimClinicLocation from "@/lib/templates/DrSlimClinicLocation";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Visit Us | Contour Wellness Clinic",
  description:
    "Address, hours, and directions for Contour Wellness Clinic, plus a free 30-second assessment form. A Dr. Slim Clinic homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/dr-slim-clinic/location",
      ko: "/ko/portfolio/dr-slim-clinic/location",
      "x-default": "/portfolio/dr-slim-clinic/location",
    },
  },
};

export default function DrSlimClinicLocationPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Contour Wellness Clinic", path: "/portfolio/dr-slim-clinic" },
            { name: "Visit Us", path: "/portfolio/dr-slim-clinic/location" },
          ])
        )}
      />
      <BackToPortfolio />
      <DrSlimClinicLocation lang="en" />
    </>
  );
}
