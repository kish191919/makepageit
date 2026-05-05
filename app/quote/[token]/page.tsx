import type { Metadata } from "next";
import { redirect } from "next/navigation";
import QuotePageView from "@/components/views/QuotePageView";
import QuotePageInvalidView from "@/components/views/QuotePageInvalidView";
import { verifyQuoteToken } from "@/lib/quote-token";

export const metadata: Metadata = {
  title: "Quote · MAKEPAGE",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function QuotePageEn({ params }: { params: { token: string } }) {
  const verified = verifyQuoteToken(params.token);
  if (!verified) return <QuotePageInvalidView lang="en" />;
  if (verified.lang === "ko") {
    redirect(`/ko/quote/${encodeURIComponent(params.token)}`);
  }
  return <QuotePageView lang="en" token={params.token} quote={verified} />;
}
