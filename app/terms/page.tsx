import type { Metadata } from "next";
import TermsView from "@/components/views/TermsView";
import { getDict } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.legal.terms.pageTitle,
  description: dict.legal.terms.pageDescription,
  alternates: { languages: { en: "/terms", ko: "/ko/terms", "x-default": "/terms" } },
};

export default function TermsPage() {
  return <TermsView lang="en" />;
}
