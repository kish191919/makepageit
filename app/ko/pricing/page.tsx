import type { Metadata } from "next";
import PricingView from "@/components/views/PricingView";
import PromoPricingView from "@/components/views/PromoPricingView";
import { usesPromoPricing } from "@/lib/data";
import { getDict, pageAlternates } from "@/lib/i18n";

const dict = getDict("ko");
const promo = usesPromoPricing("ko");

export const metadata: Metadata = {
  title: dict.pricing.pageTitle,
  description: promo ? dict.promoPricing.pageDescription : dict.pricing.pageDescription,
  alternates: pageAlternates("ko", "/pricing"),
};

export default function PricingPageKo() {
  return promo ? <PromoPricingView lang="ko" /> : <PricingView lang="ko" />;
}
