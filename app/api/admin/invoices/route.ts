import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  issueOneTimeInvoice,
  issueRecurringCheckoutLink,
  type Cadence,
  type LineItemInput,
} from "@/lib/admin-stripe";
import { getStripe, getSiteUrl } from "@/lib/stripe";
import { renderInvoiceLinkEmail } from "@/lib/emails/invoice-link";
import { renderQuoteLinkEmail } from "@/lib/emails/quote-link";
import { signQuoteToken, type QuoteCadences } from "@/lib/quote-token";

export const runtime = "nodejs";

const FROM = "MAKEPAGE <noreply@makepageit.com>";
const DEFAULT_CURRENCY = "usd";

type SingleBody = {
  mode?: "single";
  customerId?: string;
  cadence?: Cadence;
  lang?: "en" | "ko";
  daysUntilDue?: number;
  memo?: string;
  lineItems?: Array<{ description?: string; quantity?: number; unitAmount?: number }>;
};

type QuoteBody = {
  mode: "quote";
  customerId?: string;
  lang?: "en" | "ko";
  memo?: string;
  lineItems?: Array<{ description?: string; cadence?: string }>;
  cadences?: {
    one_time?: { totalCents?: number; daysUntilDue?: number };
    monthly?: { totalCents?: number };
    yearly?: { totalCents?: number };
  };
};

type Body = SingleBody | QuoteBody;

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const lang = body.lang === "ko" ? "ko" : "en";
  const customerId = body.customerId;
  if (!customerId) return NextResponse.json({ error: "customerId is required" }, { status: 400 });

  if (body.mode === "quote") {
    return handleQuote({ ...body, customerId, lang });
  }
  return handleSingle({ ...(body as SingleBody), customerId, lang });
}

async function handleSingle(body: SingleBody & { customerId: string; lang: "en" | "ko" }) {
  const cadence = body.cadence;
  if (cadence !== "one_time" && cadence !== "monthly" && cadence !== "yearly") {
    return NextResponse.json({ error: "cadence must be one_time | monthly | yearly" }, { status: 400 });
  }

  const lineItems: LineItemInput[] = (body.lineItems ?? [])
    .filter(
      (it) =>
        typeof it.description === "string" &&
        it.description.trim().length > 0 &&
        Number.isFinite(it.quantity) &&
        Number.isFinite(it.unitAmount) &&
        (it.unitAmount as number) > 0
    )
    .map((it) => ({
      description: (it.description as string).trim(),
      quantity: Math.max(1, Math.floor(it.quantity as number)),
      unitAmount: Math.round(it.unitAmount as number),
    }));

  if (lineItems.length === 0) {
    return NextResponse.json({ error: "At least one valid line item is required" }, { status: 400 });
  }

  try {
    if (cadence === "one_time") {
      const days = Math.min(60, Math.max(1, Math.floor(body.daysUntilDue ?? 7)));
      const invoice = await issueOneTimeInvoice({
        customerId: body.customerId,
        lineItems,
        daysUntilDue: days,
        memo: body.memo,
        lang: body.lang,
      });
      return NextResponse.json({
        kind: "one_time",
        invoiceId: invoice.id,
        hostedUrl: invoice.hosted_invoice_url ?? null,
        number: invoice.number ?? null,
      });
    }

    const interval = cadence === "monthly" ? "month" : "year";
    const session = await issueRecurringCheckoutLink({
      customerId: body.customerId,
      lineItems,
      interval,
      memo: body.memo,
      lang: body.lang,
    });

    let emailSent = false;
    if (session.url) {
      emailSent = await sendCheckoutEmail({
        customerId: body.customerId,
        url: session.url,
        lineItems,
        interval,
        lang: body.lang,
        memo: body.memo,
      });
    }

    return NextResponse.json({
      kind: "subscription",
      checkoutUrl: session.url,
      emailSent,
    });
  } catch (err) {
    console.error("Admin invoice issue failed:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to issue invoice" },
      { status: 500 }
    );
  }
}

async function handleQuote(body: QuoteBody & { customerId: string; lang: "en" | "ko" }) {
  const lineItems = (body.lineItems ?? [])
    .filter((it) => typeof it.description === "string" && (it.description as string).trim().length > 0)
    .map((it) => {
      const c = it.cadence;
      const cadence: "one_time" | "monthly" | "yearly" | undefined =
        c === "one_time" || c === "monthly" || c === "yearly" ? c : undefined;
      return cadence
        ? { description: (it.description as string).trim(), cadence }
        : { description: (it.description as string).trim() };
    });

  if (lineItems.length === 0) {
    return NextResponse.json(
      { error: "At least one line item description is required" },
      { status: 400 }
    );
  }

  const cadences: QuoteCadences = {};
  const c = body.cadences ?? {};
  if (c.one_time && Number.isFinite(c.one_time.totalCents) && (c.one_time.totalCents as number) > 0) {
    cadences.one_time = {
      totalCents: Math.round(c.one_time.totalCents as number),
      daysUntilDue: Math.min(60, Math.max(1, Math.floor(c.one_time.daysUntilDue ?? 7))),
    };
  }
  if (c.monthly && Number.isFinite(c.monthly.totalCents) && (c.monthly.totalCents as number) > 0) {
    cadences.monthly = { totalCents: Math.round(c.monthly.totalCents as number) };
  }
  if (c.yearly && Number.isFinite(c.yearly.totalCents) && (c.yearly.totalCents as number) > 0) {
    cadences.yearly = { totalCents: Math.round(c.yearly.totalCents as number) };
  }
  if (!cadences.one_time && !cadences.monthly && !cadences.yearly) {
    return NextResponse.json(
      { error: "Enable at least one cadence with totalCents > 0" },
      { status: 400 }
    );
  }

  const enabledCadences = new Set(Object.keys(cadences));
  const orphan = lineItems.find(
    (it): it is { description: string; cadence: "one_time" | "monthly" | "yearly" } =>
      "cadence" in it && it.cadence !== undefined && !enabledCadences.has(it.cadence)
  );
  if (orphan) {
    return NextResponse.json(
      {
        error: `Line "${orphan.description}" is assigned to ${orphan.cadence} but that cadence is not enabled`,
      },
      { status: 400 }
    );
  }

  try {
    const token = signQuoteToken({
      customerId: body.customerId,
      lang: body.lang,
      currency: DEFAULT_CURRENCY,
      lineItems,
      cadences,
      memo: body.memo,
    });

    const path = body.lang === "ko" ? `/ko/quote/${token}` : `/quote/${token}`;
    const quoteUrl = `${getSiteUrl()}${path}`;

    const emailSent = await sendQuoteEmail({
      customerId: body.customerId,
      url: quoteUrl,
      lineItems,
      cadences,
      lang: body.lang,
      memo: body.memo,
    });

    return NextResponse.json({ kind: "quote", quoteUrl, emailSent });
  } catch (err) {
    console.error("Quote issue failed:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to issue quote" },
      { status: 500 }
    );
  }
}

async function sendCheckoutEmail(input: {
  customerId: string;
  url: string;
  lineItems: LineItemInput[];
  interval: "month" | "year";
  lang: "en" | "ko";
  memo?: string;
}): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping checkout email");
    return false;
  }
  const email = await getCustomerEmail(input.customerId);
  if (!email) return false;

  const { subject, html } = renderInvoiceLinkEmail({
    lang: input.lang,
    url: input.url,
    lineItems: input.lineItems,
    interval: input.interval,
    currency: DEFAULT_CURRENCY,
    memo: input.memo,
  });

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({ from: FROM, to: email, subject, html });
  return true;
}

async function sendQuoteEmail(input: {
  customerId: string;
  url: string;
  lineItems: { description: string; cadence?: "one_time" | "monthly" | "yearly" }[];
  cadences: QuoteCadences;
  lang: "en" | "ko";
  memo?: string;
}): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping quote email");
    return false;
  }
  const email = await getCustomerEmail(input.customerId);
  if (!email) return false;

  const { subject, html } = renderQuoteLinkEmail({
    lang: input.lang,
    url: input.url,
    lineItems: input.lineItems,
    cadences: input.cadences,
    currency: DEFAULT_CURRENCY,
    memo: input.memo,
  });

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({ from: FROM, to: email, subject, html });
  return true;
}

async function getCustomerEmail(customerId: string): Promise<string | null> {
  const stripe = getStripe();
  const customer = await stripe.customers.retrieve(customerId);
  if ("deleted" in customer && customer.deleted) return null;
  const email = (customer as { email?: string | null }).email;
  return email || null;
}
