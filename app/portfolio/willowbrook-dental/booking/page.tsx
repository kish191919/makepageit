import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import WillowbrookDentalBooking from "@/lib/templates/WillowbrookDentalBooking";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Booking | Willowbrook Dental Care",
  description:
    "Book your visit online in under a minute — pick a service, time, and dentist. A portfolio booking-site template by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/willowbrook-dental/booking",
      ko: "/ko/portfolio/willowbrook-dental/booking",
      "x-default": "/portfolio/willowbrook-dental/booking",
    },
  },
};

export default function WillowbrookDentalBookingPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Willowbrook Dental Care", path: "/portfolio/willowbrook-dental" },
            { name: "Booking", path: "/portfolio/willowbrook-dental/booking" },
          ])
        )}
      />
      <BackToPortfolio />
      <WillowbrookDentalBooking lang="en" />
    </>
  );
}
