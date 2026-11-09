import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Reviews from "@/components/sections/Reviews";
import Pricing from "@/components/sections/Pricing";
import PromoPricing from "@/components/sections/PromoPricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { getFaqs, getPlans, getPromoPlans, usesPromoPricing } from "@/lib/data";
import {
  faqPageSchema,
  jsonLdScriptProps,
  promoOfferCatalogSchema,
  serviceOfferCatalogSchema,
} from "@/lib/jsonld";
import type { Lang } from "@/lib/i18n";

export default function HomeView({ lang }: { lang: Lang }) {
  const faqs = getFaqs(lang);
  const promo = usesPromoPricing(lang);
  const offerCatalog = promo
    ? promoOfferCatalogSchema(getPromoPlans(lang), lang)
    : serviceOfferCatalogSchema(getPlans(lang), lang);

  return (
    <>
      <script {...jsonLdScriptProps(faqPageSchema(faqs))} />
      <script {...jsonLdScriptProps(offerCatalog)} />
      <Hero lang={lang} />
      <WhyUs lang={lang} />
      <Portfolio lang={lang} limit={6} />
      <Reviews lang={lang} />
      <Process lang={lang} />
      {promo ? <PromoPricing lang={lang} variant="home" /> : <Pricing lang={lang} eyebrowOnly />}
      <FAQ lang={lang} />
      <CTA lang={lang} />
    </>
  );
}
