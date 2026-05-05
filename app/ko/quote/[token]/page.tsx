import type { Metadata } from "next";
import { redirect } from "next/navigation";
import QuotePageView from "@/components/views/QuotePageView";
import QuotePageInvalidView from "@/components/views/QuotePageInvalidView";
import { verifyQuoteToken } from "@/lib/quote-token";

export const metadata: Metadata = {
  title: "견적서 · MAKEPAGE",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function QuotePageKo({ params }: { params: { token: string } }) {
  const verified = verifyQuoteToken(params.token);
  if (!verified) return <QuotePageInvalidView lang="ko" />;
  if (verified.lang === "en") {
    redirect(`/quote/${encodeURIComponent(params.token)}`);
  }
  return <QuotePageView lang="ko" token={params.token} quote={verified} />;
}
