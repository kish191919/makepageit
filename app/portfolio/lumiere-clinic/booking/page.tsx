import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import LumiereClinicBooking from "@/lib/templates/LumiereClinicBooking";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Booking | Lumière Skin Clinic",
  description:
    "Book your visit online in under a minute — pick a treatment, time, and provider. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/lumiere-clinic/booking",
      ko: "/ko/portfolio/lumiere-clinic/booking",
      "x-default": "/portfolio/lumiere-clinic/booking",
    },
  },
};

export default function LumiereClinicBookingPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Lumière Skin Clinic", path: "/portfolio/lumiere-clinic" },
            { name: "Booking", path: "/portfolio/lumiere-clinic/booking" },
          ])
        )}
      />
      <BackToPortfolio />
      <LumiereClinicBooking lang="en" />
    </>
  );
}
