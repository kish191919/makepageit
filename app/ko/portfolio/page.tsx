import type { Metadata } from "next";
import PortfolioListView from "@/components/views/PortfolioListView";
import { getDict, pageAlternates } from "@/lib/i18n";

const dict = getDict("ko");

export const metadata: Metadata = {
  title: dict.portfolio.pageTitle,
  description: dict.portfolio.pageDescription,
  alternates: pageAlternates("ko", "/portfolio"),
};

export default function PortfolioPageKo() {
  return <PortfolioListView lang="ko" />;
}
