import Stripe from "stripe";

let cachedClient: Stripe | null = null;

export function getStripe(): Stripe {
  if (cachedClient) return cachedClient;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  cachedClient = new Stripe(key);
  return cachedClient;
}

export type PlanId = "portfolio-lite" | "portfolio-pro";

type PlanPriceConfig = {
  setup: string | undefined;
  monthly: string | undefined;
  domainFirstYear: string | undefined;
  domainRenewal: string | undefined;
};

export function getPlanPrices(planId: PlanId): PlanPriceConfig {
  if (planId === "portfolio-lite") {
    return {
      setup: process.env.STRIPE_PRICE_LITE_SETUP,
      monthly: process.env.STRIPE_PRICE_LITE_MONTHLY,
      domainFirstYear: process.env.STRIPE_PRICE_LITE_DOMAIN_FIRST_YEAR,
      domainRenewal: process.env.STRIPE_PRICE_LITE_DOMAIN_RENEWAL,
    };
  }
  return {
    setup: process.env.STRIPE_PRICE_PRO_SETUP,
    monthly: process.env.STRIPE_PRICE_PRO_MONTHLY,
    domainFirstYear: process.env.STRIPE_PRICE_PRO_DOMAIN_FIRST_YEAR,
    domainRenewal: process.env.STRIPE_PRICE_PRO_DOMAIN_RENEWAL,
  };
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
}
