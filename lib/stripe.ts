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
  emailAnnual: string | undefined;
  extraPage: string | undefined;
  booking: string | undefined;
  payment: string | undefined;
};

export function getPlanPrices(planId: PlanId): PlanPriceConfig {
  const sharedAddons = {
    extraPage: process.env.STRIPE_PRICE_EXTRA_PAGE,
    booking: process.env.STRIPE_PRICE_BOOKING,
    payment: process.env.STRIPE_PRICE_PAYMENT,
  };
  if (planId === "portfolio-lite") {
    return {
      setup: process.env.STRIPE_PRICE_LITE_SETUP,
      monthly: process.env.STRIPE_PRICE_LITE_MONTHLY,
      domainFirstYear: process.env.STRIPE_PRICE_LITE_DOMAIN_FIRST_YEAR,
      domainRenewal: process.env.STRIPE_PRICE_LITE_DOMAIN_RENEWAL,
      emailAnnual: process.env.STRIPE_PRICE_LITE_EMAIL_ANNUAL,
      ...sharedAddons,
    };
  }
  return {
    setup: process.env.STRIPE_PRICE_PRO_SETUP,
    monthly: process.env.STRIPE_PRICE_PRO_MONTHLY,
    domainFirstYear: process.env.STRIPE_PRICE_PRO_DOMAIN_FIRST_YEAR,
    domainRenewal: process.env.STRIPE_PRICE_PRO_DOMAIN_RENEWAL,
    emailAnnual: process.env.STRIPE_PRICE_PRO_EMAIL_ANNUAL,
    ...sharedAddons,
  };
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
}
