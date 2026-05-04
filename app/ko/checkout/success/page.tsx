import type { Metadata } from "next";
import CheckoutSuccessView from "@/components/views/CheckoutSuccessView";
import { getDict } from "@/lib/i18n";

const dict = getDict("ko");

export const metadata: Metadata = {
  title: dict.pricing.successTitle,
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPageKo() {
  return <CheckoutSuccessView lang="ko" />;
}
