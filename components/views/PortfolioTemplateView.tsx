import { notFound } from "next/navigation";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import { getPortfolios } from "@/lib/data";
import { templates } from "@/lib/templates";
import { type Lang } from "@/lib/i18n";
import {
  breadcrumbSchema,
  jsonLdScriptProps,
  portfolioCaseSchema,
} from "@/lib/jsonld";

export default function PortfolioTemplateView({ lang, id }: { lang: Lang; id: string }) {
  const items = getPortfolios(lang);
  const item = items.find((p) => p.id === id);
  const Template = templates[id];
  if (!item || !Template) notFound();

  const portfolioRoot = lang === "ko" ? "/ko/portfolio" : "/portfolio";
  const homeRoot = lang === "ko" ? "/ko" : "/";
  const ldData = [
    portfolioCaseSchema(item, lang),
    breadcrumbSchema([
      { name: lang === "ko" ? "홈" : "Home", path: homeRoot },
      { name: lang === "ko" ? "포트폴리오" : "Work", path: portfolioRoot },
      { name: item.client, path: `${portfolioRoot}/${item.id}` },
    ]),
  ];

  return (
    <>
      <script {...jsonLdScriptProps(ldData)} />
      <BackToPortfolio />

      <Template lang={lang} />
    </>
  );
}
