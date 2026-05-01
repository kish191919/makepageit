import PageHeader from "@/components/PageHeader";
import PortfolioFilterGrid from "@/components/sections/PortfolioFilterGrid";
import CTA from "@/components/sections/CTA";
import { getPortfolios } from "@/lib/data";
import { getDict, type Lang } from "@/lib/i18n";

export default function PortfolioListView({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const portfolios = getPortfolios(lang);
  const categories = dict.portfolio.filterCategories;

  return (
    <>
      <PageHeader
        eyebrow={dict.portfolio.eyebrow}
        title={dict.portfolio.title}
        description={dict.portfolio.description}
        wide
      />

      <section className="section">
        <div className="container-custom">
          <PortfolioFilterGrid lang={lang} portfolios={portfolios} categories={categories} />
        </div>
      </section>

      <CTA lang={lang} />
    </>
  );
}
