import type { Metadata } from "next";
import ServicesView from "@/components/views/ServicesView";
import { getDict } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.services.pageTitle,
  description: dict.services.pageDescription,
  alternates: { languages: { en: "/services", ko: "/ko/services", "x-default": "/services" } },
};

export default function ServicesPage() {
  return <ServicesView lang="en" />;
}
