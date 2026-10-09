import type { Metadata } from "next";
import PricingView from "@/components/views/PricingView";
import { getDict, pageAlternates } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.pricing.pageTitle,
  description: dict.pricing.pageDescription,
  alternates: pageAlternates("en", "/pricing"),
};

export default function PricingPage() {
  return <PricingView lang="en" />;
}
