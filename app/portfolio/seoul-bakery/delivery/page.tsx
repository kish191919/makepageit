import type { Metadata } from "next";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import SeoulBakeryDelivery from "@/lib/templates/SeoulBakeryDelivery";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Same-Day Delivery | Sunrise Bakery Co.",
  description:
    "How next-morning delivery works, delivery zones, and pricing — from Sunrise Bakery Co., a Seoul Bakery homepage template page by MAKEPAGE.",
  alternates: {
    languages: {
      en: "/portfolio/seoul-bakery/delivery",
      ko: "/ko/portfolio/seoul-bakery/delivery",
      "x-default": "/portfolio/seoul-bakery/delivery",
    },
  },
};

export default function SeoulBakeryDeliveryPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/portfolio" },
            { name: "Sunrise Bakery Co.", path: "/portfolio/seoul-bakery" },
            { name: "Same-Day Delivery", path: "/portfolio/seoul-bakery/delivery" },
          ])
        )}
      />
      <BackToPortfolio />
      <SeoulBakeryDelivery lang="en" />
    </>
  );
}
