import type { Metadata } from "next";
import PortfolioListView from "@/components/views/PortfolioListView";
import { getDict, pageAlternates } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.portfolio.pageTitle,
  description: dict.portfolio.pageDescription,
  alternates: pageAlternates("en", "/portfolio"),
};

export default function PortfolioPage() {
  return <PortfolioListView lang="en" />;
}
