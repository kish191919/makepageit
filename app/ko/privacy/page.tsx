import type { Metadata } from "next";
import PrivacyView from "@/components/views/PrivacyView";
import { getDict, pageAlternates } from "@/lib/i18n";

const dict = getDict("ko");

export const metadata: Metadata = {
  title: dict.legal.privacy.pageTitle,
  description: dict.legal.privacy.pageDescription,
  alternates: pageAlternates("ko", "/privacy"),
};

export default function PrivacyPageKo() {
  return <PrivacyView lang="ko" />;
}
