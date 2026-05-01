import { notFound } from "next/navigation";
import BackToPortfolio from "@/components/template/BackToPortfolio";
import { getPortfolios } from "@/lib/data";
import { templates } from "@/lib/templates";
import type { Lang } from "@/lib/i18n";

export default function PortfolioTemplateView({ lang, id }: { lang: Lang; id: string }) {
  const item = getPortfolios(lang).find((p) => p.id === id);
  const Template = templates[id];
  if (!item || !Template) notFound();

  return (
    <>
      <BackToPortfolio />
      <Template lang={lang} />
    </>
  );
}
