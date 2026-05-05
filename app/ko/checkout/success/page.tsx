import type { Metadata } from "next";
import CheckoutSuccessView from "@/components/views/CheckoutSuccessView";
import { getReceiptUrlForSession } from "@/lib/checkout-receipt";
import { getDict } from "@/lib/i18n";

const dict = getDict("ko");

export const metadata: Metadata = {
  title: dict.pricing.successTitle,
  robots: { index: false, follow: false },
};

export default async function CheckoutSuccessPageKo({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const receiptUrl = searchParams.session_id
    ? await getReceiptUrlForSession(searchParams.session_id)
    : null;
  return <CheckoutSuccessView lang="ko" receiptUrl={receiptUrl} />;
}
