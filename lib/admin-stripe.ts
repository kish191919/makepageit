import type Stripe from "stripe";
import { getStripe, getSiteUrl } from "@/lib/stripe";
import type { Lang } from "@/lib/i18n";

export type LineItemInput = {
  description: string;
  quantity: number;
  unitAmount: number;
};

export type Cadence = "one_time" | "monthly" | "yearly";

export type CustomerMetadata = Record<string, string>;

const DEFAULT_CURRENCY = "usd";

export async function createCustomer(input: {
  email: string;
  name?: string;
  phone?: string;
  metadata?: CustomerMetadata;
}): Promise<Stripe.Customer> {
  const stripe = getStripe();
  return stripe.customers.create({
    email: input.email,
    name: input.name,
    phone: input.phone,
    metadata: input.metadata ?? {},
  });
}

export async function updateCustomer(
  id: string,
  patch: { email?: string; name?: string; phone?: string; metadata?: CustomerMetadata }
): Promise<Stripe.Customer> {
  const stripe = getStripe();
  return stripe.customers.update(id, {
    email: patch.email,
    name: patch.name,
    phone: patch.phone,
    metadata: patch.metadata,
  });
}

export async function listCustomers(opts: {
  limit?: number;
  starting_after?: string;
  email?: string;
}): Promise<Stripe.ApiList<Stripe.Customer>> {
  const stripe = getStripe();
  return stripe.customers.list({
    limit: opts.limit ?? 25,
    starting_after: opts.starting_after,
    email: opts.email,
  });
}

export async function getCustomerWithHistory(id: string): Promise<{
  customer: Stripe.Customer;
  invoices: Stripe.Invoice[];
  subscriptions: Stripe.Subscription[];
}> {
  const stripe = getStripe();
  const [customer, invoices, subscriptions] = await Promise.all([
    stripe.customers.retrieve(id),
    stripe.invoices.list({ customer: id, limit: 50 }),
    stripe.subscriptions.list({ customer: id, limit: 50, status: "all" }),
  ]);
  if ("deleted" in customer && customer.deleted) {
    throw new Error("Customer was deleted");
  }
  return {
    customer: customer as Stripe.Customer,
    invoices: invoices.data,
    subscriptions: subscriptions.data,
  };
}

export async function listAllInvoices(opts: {
  limit?: number;
  starting_after?: string;
  status?: Stripe.InvoiceListParams.Status;
}): Promise<Stripe.ApiList<Stripe.Invoice>> {
  const stripe = getStripe();
  return stripe.invoices.list({
    limit: opts.limit ?? 25,
    starting_after: opts.starting_after,
    status: opts.status,
  });
}

export async function issueOneTimeInvoice(input: {
  customerId: string;
  lineItems: LineItemInput[];
  daysUntilDue: number;
  memo?: string;
  lang: Lang;
  currency?: string;
}): Promise<Stripe.Invoice> {
  const stripe = getStripe();
  const currency = input.currency ?? DEFAULT_CURRENCY;

  const draft = await stripe.invoices.create({
    customer: input.customerId,
    collection_method: "send_invoice",
    days_until_due: input.daysUntilDue,
    pending_invoice_items_behavior: "exclude",
    description: input.memo,
    metadata: { lang: input.lang, source: "admin-quote" },
    auto_advance: false,
  });

  for (const item of input.lineItems) {
    const description =
      item.quantity > 1 ? `${item.description} × ${item.quantity}` : item.description;
    await stripe.invoiceItems.create({
      customer: input.customerId,
      invoice: draft.id,
      currency,
      amount: item.unitAmount * item.quantity,
      description,
    });
  }

  const finalized = await stripe.invoices.finalizeInvoice(draft.id, {
    auto_advance: false,
  });
  return stripe.invoices.sendInvoice(finalized.id);
}

export async function issueRecurringCheckoutLink(input: {
  customerId: string;
  lineItems: LineItemInput[];
  interval: "month" | "year";
  memo?: string;
  lang: Lang;
  currency?: string;
}): Promise<Stripe.Checkout.Session> {
  const stripe = getStripe();
  const currency = input.currency ?? DEFAULT_CURRENCY;
  const successPath = input.lang === "ko" ? "/ko/pricing?status=success" : "/pricing?status=success";
  const cancelPath = input.lang === "ko" ? "/ko/pricing?status=canceled" : "/pricing?status=canceled";

  return stripe.checkout.sessions.create({
    mode: "subscription",
    customer: input.customerId,
    line_items: input.lineItems.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency,
        unit_amount: item.unitAmount,
        recurring: { interval: input.interval },
        product_data: { name: item.description },
      },
    })),
    success_url: `${getSiteUrl()}${successPath}`,
    cancel_url: `${getSiteUrl()}${cancelPath}`,
    metadata: {
      lang: input.lang,
      source: "admin-quote",
      cadence: input.interval,
      memo: input.memo ?? "",
    },
    subscription_data: {
      metadata: {
        lang: input.lang,
        source: "admin-quote",
        cadence: input.interval,
      },
    },
  });
}
