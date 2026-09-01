import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import DrSlimClinicDoctor from "@/lib/templates/DrSlimClinicDoctor";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Director | Contour Wellness Clinic",
  description:
    "Meet the medical director behind Contour Wellness Clinic's weekly 1:1 weight-loss program. A Dr. Slim Clinic homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/dr-slim-clinic/doctor",
      ko: "/ko/portfolio/dr-slim-clinic/doctor",
      "x-default": "/portfolio/dr-slim-clinic/doctor",
    },
  },
};

export default function DrSlimClinicDoctorPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Contour Wellness Clinic", path: "/portfolio/dr-slim-clinic" },
            { name: "Our Director", path: "/portfolio/dr-slim-clinic/doctor" },
          ])
        )}
      />
      <BackToPortfolio />
      <DrSlimClinicDoctor lang="en" />
    </>
  );
}
