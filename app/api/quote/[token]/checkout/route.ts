import { NextResponse } from "next/server";
import { verifyQuoteToken } from "@/lib/quote-token";
import {
  issueOneTimeQuoteInvoice,
  issueRecurringCheckoutLink,
} from "@/lib/admin-stripe";

export const runtime = "nodejs";

type Body = { cadence?: "one_time" | "monthly" | "yearly" };

export async function POST(
  request: Request,
  { params }: { params: { token: string } }
) {
  const verified = verifyQuoteToken(params.token);
  if (!verified) {
    return NextResponse.json({ error: "Invalid or expired quote" }, { status: 400 });
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const cadence = body.cadence;
  if (cadence !== "one_time" && cadence !== "monthly" && cadence !== "yearly") {
    return NextResponse.json({ error: "cadence must be one_time | monthly | yearly" }, { status: 400 });
  }
  if (!verified.cadences[cadence]) {
    return NextResponse.json(
      { error: "This payment option is not available on this quote" },
      { status: 400 }
    );
  }

  const description =
    verified.memo ||
    (verified.lineItems.length > 0
      ? verified.lineItems.map((li) => li.description).join(" + ")
      : "Quote payment");

  try {
    if (cadence === "one_time") {
      const cfg = verified.cadences.one_time!;
      const invoice = await issueOneTimeQuoteInvoice({
        customerId: verified.customerId,
        totalCents: cfg.totalCents,
        description,
        daysUntilDue: cfg.daysUntilDue,
        lang: verified.lang,
        currency: verified.currency,
      });
      if (!invoice.hosted_invoice_url) {
        return NextResponse.json(
          { error: "Stripe did not return a hosted invoice URL" },
          { status: 500 }
        );
      }
      return NextResponse.json({ url: invoice.hosted_invoice_url });
    }

    const interval = cadence === "monthly" ? "month" : "year";
    const cfg = verified.cadences[cadence]!;
    const session = await issueRecurringCheckoutLink({
      customerId: verified.customerId,
      lineItems: [
        {
          description,
          quantity: 1,
          unitAmount: cfg.totalCents,
        },
      ],
      interval,
      memo: verified.memo,
      lang: verified.lang,
      currency: verified.currency,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL" },
        { status: 500 }
      );
    }
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Quote checkout failed:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Checkout failed" },
      { status: 500 }
    );
  }
}
