import type { Metadata } from "next";
import PortfolioListView from "@/components/views/PortfolioListView";
import { getDict } from "@/lib/i18n";

const dict = getDict("ko");

export const metadata: Metadata = {
  title: dict.portfolio.pageTitle,
  description: dict.portfolio.pageDescription,
  alternates: { languages: { en: "/portfolio", ko: "/ko/portfolio", "x-default": "/portfolio" } },
};

export default function PortfolioPageKo() {
  return <PortfolioListView lang="ko" />;
}
