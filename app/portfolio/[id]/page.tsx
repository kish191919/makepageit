import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import { portfolios } from "@/lib/data";
import { templates } from "@/lib/templates";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return portfolios.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const item = portfolios.find((p) => p.id === params.id);
  if (!item) return { title: "포트폴리오 템플릿" };
  return {
    title: `${item.client} — 템플릿 미리보기`,
    description: item.description,
  };
}

export default function PortfolioTemplatePage({ params }: { params: Params }) {
  const item = portfolios.find((p) => p.id === params.id);
  const Template = templates[params.id];
  if (!item || !Template) notFound();

  return (
    <>
      <BackToPortfolio />
      <Template />
    </>
  );
}
