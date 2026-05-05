import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  issueOneTimeInvoice,
  issueRecurringCheckoutLink,
  type Cadence,
  type LineItemInput,
} from "@/lib/admin-stripe";
import { getStripe } from "@/lib/stripe";
import { renderInvoiceLinkEmail } from "@/lib/emails/invoice-link";

export const runtime = "nodejs";

const FROM = "MAKEPAGE <noreply@makepageit.com>";
const DEFAULT_CURRENCY = "usd";

type Body = {
  customerId?: string;
  cadence?: Cadence;
  lang?: "en" | "ko";
  daysUntilDue?: number;
  memo?: string;
  lineItems?: Array<{ description?: string; quantity?: number; unitAmount?: number }>;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const customerId = body.customerId;
  const cadence = body.cadence;
  const lang = body.lang === "ko" ? "ko" : "en";
  if (!customerId) return NextResponse.json({ error: "customerId is required" }, { status: 400 });
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
        customerId,
        lineItems,
        daysUntilDue: days,
        memo: body.memo,
        lang,
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
      customerId,
      lineItems,
      interval,
      memo: body.memo,
      lang,
    });

    let emailSent = false;
    if (session.url) {
      emailSent = await sendCheckoutEmail({
        customerId,
        url: session.url,
        lineItems,
        interval,
        lang,
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
  const stripe = getStripe();
  const customer = await stripe.customers.retrieve(input.customerId);
  if ("deleted" in customer && customer.deleted) return false;
  const email = (customer as { email?: string | null }).email;
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
