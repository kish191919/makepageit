import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Reviews from "@/components/sections/Reviews";
import Pricing from "@/components/sections/Pricing";
import AdditionalOptions from "@/components/sections/AdditionalOptions";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { getFaqs, getPlans } from "@/lib/data";
import { faqPageSchema, jsonLdScriptProps, serviceOfferCatalogSchema } from "@/lib/jsonld";
import type { Lang } from "@/lib/i18n";

export default function HomeView({ lang }: { lang: Lang }) {
  const faqs = getFaqs(lang);
  const plans = getPlans(lang);

  return (
    <>
      <script {...jsonLdScriptProps(faqPageSchema(faqs))} />
      <script {...jsonLdScriptProps(serviceOfferCatalogSchema(plans, lang))} />
      <Hero lang={lang} />
      <WhyUs lang={lang} />
      <Portfolio lang={lang} limit={6} />
      <Reviews lang={lang} />
      <Process lang={lang} />
      <Pricing lang={lang} />
      <AdditionalOptions lang={lang} />
      <FAQ lang={lang} />
      <CTA lang={lang} />
    </>
  );
}
