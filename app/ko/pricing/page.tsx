import type { Metadata } from "next";
import PricingView from "@/components/views/PricingView";
import { getDict, pageAlternates } from "@/lib/i18n";

const dict = getDict("ko");

export const metadata: Metadata = {
  title: dict.pricing.pageTitle,
  description: dict.pricing.pageDescription,
  alternates: pageAlternates("ko", "/pricing"),
};

export default function PricingPageKo() {
  return <PricingView lang="ko" />;
}
