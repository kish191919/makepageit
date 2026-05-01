import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";
import { getDict } from "@/lib/i18n";

const dict = getDict("ko");

export const metadata: Metadata = {
  title: dict.about.pageTitle,
  description: dict.about.pageDescription,
  alternates: { languages: { en: "/about", ko: "/ko/about", "x-default": "/about" } },
};

export default function AboutPageKo() {
  return <AboutView lang="ko" />;
}
