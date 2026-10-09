import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";
import { getDict, pageAlternates } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.contact.pageTitle,
  description: dict.contact.pageDescription,
  alternates: pageAlternates("en", "/contact"),
};

export default function ContactPage() {
  return <ContactView lang="en" />;
}
