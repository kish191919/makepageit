import type { Metadata } from "next";
import PricingView from "@/components/views/PricingView";
import PromoPricingView from "@/components/views/PromoPricingView";
import { usesPromoPricing } from "@/lib/data";
import { getDict, pageAlternates } from "@/lib/i18n";

const dict = getDict("en");
const promo = usesPromoPricing("en");

export const metadata: Metadata = {
  title: dict.pricing.pageTitle,
  description: promo ? dict.promoPricing.pageDescription : dict.pricing.pageDescription,
  alternates: pageAlternates("en", "/pricing"),
};

export default function PricingPage() {
  return promo ? <PromoPricingView lang="en" /> : <PricingView lang="en" />;
}
