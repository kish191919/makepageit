import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";
import { getDict } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.contact.pageTitle,
  description: dict.contact.pageDescription,
  alternates: { languages: { en: "/contact", ko: "/ko/contact", "x-default": "/contact" } },
};

export default function ContactPage() {
  return <ContactView lang="en" />;
}
