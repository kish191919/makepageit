import type { Metadata } from "next";
import PricingView from "@/components/views/PricingView";
import { getDict } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.pricing.pageTitle,
  description: dict.pricing.pageDescription,
  alternates: { languages: { en: "/pricing", ko: "/ko/pricing", "x-default": "/pricing" } },
};

export default function PricingPage() {
  return <PricingView lang="en" />;
}
