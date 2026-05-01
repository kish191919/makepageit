import type { Metadata } from "next";
import PortfolioTemplateView from "@/components/views/PortfolioTemplateView";
import { getPortfolios } from "@/lib/data";
import { getDict } from "@/lib/i18n";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return getPortfolios("ko").map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const item = getPortfolios("ko").find((p) => p.id === params.id);
  const dict = getDict("ko");
  if (!item) return { title: dict.notFoundTemplate };
  return {
    title: `${item.client} — 템플릿 미리보기`,
    description: item.description,
    alternates: {
      languages: {
        en: `/portfolio/${item.id}`,
        ko: `/ko/portfolio/${item.id}`,
        "x-default": `/portfolio/${item.id}`,
      },
    },
  };
}

export default function PortfolioTemplatePageKo({ params }: { params: Params }) {
  return <PortfolioTemplateView lang="ko" id={params.id} />;
}
