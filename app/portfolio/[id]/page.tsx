import type { Metadata } from "next";
import PortfolioTemplateView from "@/components/views/PortfolioTemplateView";
import { getPortfolios } from "@/lib/data";
import { getDict } from "@/lib/i18n";
import { breadcrumbSchema, jsonLdScriptProps, portfolioCaseSchema } from "@/lib/jsonld";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return getPortfolios("en").map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const item = getPortfolios("en").find((p) => p.id === params.id);
  const dict = getDict("en");
  if (!item) return { title: dict.notFoundTemplate };
  const tagLine = item.tags.length ? ` — ${item.tags.join(", ")}` : "";
  return {
    title: `${item.client} (${item.category}) | Web design case study`,
    description: `${item.client} ${item.category.toLowerCase()} case study by MAKEPAGE. ${item.description}${tagLine}.`,
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

export default function PortfolioTemplatePage({ params }: { params: Params }) {
  const item = getPortfolios("en").find((p) => p.id === params.id);
  return (
    <>
      {item && (
        <>
          <script {...jsonLdScriptProps(portfolioCaseSchema(item, "en"))} />
          <script
            {...jsonLdScriptProps(
              breadcrumbSchema([
                { name: "Home", path: "/" },
                { name: "Work", path: "/portfolio" },
                { name: item.client, path: `/portfolio/${item.id}` },
              ])
            )}
          />
        </>
      )}
      <PortfolioTemplateView lang="en" id={params.id} />
    </>
  );
}
