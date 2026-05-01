import type { Metadata } from "next";
import ReviewsView from "@/components/views/ReviewsView";
import { getDict } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.reviews.pageTitle,
  description: dict.reviews.pageDescription,
  alternates: { languages: { en: "/reviews", ko: "/ko/reviews", "x-default": "/reviews" } },
};

export default function ReviewsPage() {
  return <ReviewsView lang="en" />;
}
