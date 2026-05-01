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
  const tagLine = item.tags.length ? ` 주요 키워드: ${item.tags.join(", ")}.` : "";
  return {
    title: `${item.client} (${item.category}) | 메이크페이지 홈페이지 제작 사례`,
    description: `${item.client}의 ${item.category} 홈페이지 제작 사례. ${item.description}${tagLine}`,
    alternates: {
      languages: {
        en: `/portfolio/${item.id}`,
        ko: `/ko/portfolio/${item.id}`,
        "x-default": `/portfolio/${item.id}`,
      },
    },
    openGraph: {
      title: `${item.client} — ${item.category}`,
      description: item.description,
      images: [item.image],
      type: "article",
    },
  };
}

export default function PortfolioTemplatePageKo({ params }: { params: Params }) {
  return <PortfolioTemplateView lang="ko" id={params.id} />;
}
