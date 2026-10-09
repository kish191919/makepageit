import type { Metadata } from "next";
import PrivacyView from "@/components/views/PrivacyView";
import { getDict, pageAlternates } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.legal.privacy.pageTitle,
  description: dict.legal.privacy.pageDescription,
  alternates: pageAlternates("en", "/privacy"),
};

export default function PrivacyPage() {
  return <PrivacyView lang="en" />;
}
