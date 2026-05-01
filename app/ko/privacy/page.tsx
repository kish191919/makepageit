import type { Metadata } from "next";
import PrivacyView from "@/components/views/PrivacyView";
import { getDict } from "@/lib/i18n";

const dict = getDict("ko");

export const metadata: Metadata = {
  title: dict.legal.privacy.pageTitle,
  description: dict.legal.privacy.pageDescription,
  alternates: { languages: { en: "/privacy", ko: "/ko/privacy", "x-default": "/privacy" } },
};

export default function PrivacyPageKo() {
  return <PrivacyView lang="ko" />;
}
