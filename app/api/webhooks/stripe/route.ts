import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getStripe, getSiteUrl, getPlanPrices, type PlanId } from "@/lib/stripe";
import { getDict, type Lang } from "@/lib/i18n";
import { formatAmount, escapeHtml as escape } from "@/lib/email-helpers";
import type Stripe from "stripe";

export const runtime = "nodejs";

const FROM = "MAKEPAGE <noreply@makepageit.com>";
const TO = process.env.CONTACT_TO_EMAIL ?? "admin@cloudmasterit.com";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const rawBody = await request.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "invalid signature";
    console.error("Stripe webhook signature failed:", msg);
    return NextResponse.json({ error: `Webhook Error: ${msg}` }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      try {
        await createDomainRenewalSubscription(session);
      } catch (err) {
        console.error("Failed to create domain renewal subscription:", err);
      }
      await Promise.all([notifyAdmin(session), notifyCustomer(session)]);
    } else if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object as Stripe.Subscription;
      await notifySubscriptionCanceled(subscription);
    } else if (event.type === "invoice.paid") {
      await notifyInvoicePaid(event.data.object as Stripe.Invoice);
    } else if (event.type === "invoice.payment_failed") {
      await notifyInvoicePaymentFailed(event.data.object as Stripe.Invoice);
    }
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Stripe webhook handler error:", err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }
}

async function createDomainRenewalSubscription(session: Stripe.Checkout.Session) {
  if (session.metadata?.includeDomain !== "true") return;

  const customerId =
    typeof session.customer === "string" ? session.customer : session.customer?.id;
  if (!customerId) return;

  const planId = session.metadata?.planId as PlanId | undefined;
  if (planId !== "portfolio-lite" && planId !== "portfolio-pro") return;

  const prices = getPlanPrices(planId);
  if (!prices.domainRenewal) return;

  const lang = session.metadata?.lang === "ko" ? "ko" : "en";
  const oneYearFromNow = Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60;

  const stripe = getStripe();
  await stripe.subscriptions.create(
    {
      customer: customerId,
      items: [{ price: prices.domainRenewal }],
      billing_cycle_anchor: oneYearFromNow,
      proration_behavior: "none",
      metadata: { planId, lang, type: "domain-renewal" },
    },
    { idempotencyKey: `domain-renewal-${session.id}` }
  );
}

async function notifyAdmin(session: Stripe.Checkout.Session) {
  if (!process.env.RESEND_API_KEY) return;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const planId = (session.metadata?.planId as string) ?? "unknown";
  const lang = session.metadata?.lang === "ko" ? "ko" : "en";
  const customerEmail =
    session.customer_details?.email ?? session.customer_email ?? "(no email)";
  const customerName = session.customer_details?.name ?? "(no name)";
  const amountTotal =
    session.amount_total != null ? formatAmount(session.amount_total, session.currency) : "-";
  const emailMailboxes = Number(session.metadata?.emailMailboxes ?? 0) || 0;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #111827; border-bottom: 2px solid #4f46e5; padding-bottom: 12px;">
        New Stripe checkout completed
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Plan</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${escape(planId)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6b7280;">Customer</td><td style="padding: 8px 0; color: #111827;">${escape(customerName)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${escape(customerEmail)}">${escape(customerEmail)}</a></td></tr>
        ${emailMailboxes > 0 ? `<tr><td style="padding: 8px 0; color: #6b7280;">Mailboxes</td><td style="padding: 8px 0; color: #111827;">${emailMailboxes} × $60/yr — provision Microsoft 365 mailboxes</td></tr>` : ""}
        <tr><td style="padding: 8px 0; color: #6b7280;">First invoice total</td><td style="padding: 8px 0; color: #111827;">${escape(amountTotal)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6b7280;">Session ID</td><td style="padding: 8px 0; color: #111827; font-family: monospace; font-size: 12px;">${escape(session.id)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6b7280;">Locale</td><td style="padding: 8px 0; color: #111827;">${escape(lang)}</td></tr>
      </table>
      <p style="margin-top: 24px; color: #6b7280; font-size: 13px;">
        Open the session in the
        <a href="https://dashboard.stripe.com/payments/${escape(session.id)}">Stripe Dashboard</a>
        for full details.
      </p>
    </div>
  `;

  await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `[MAKEPAGE] New ${planId} subscription — ${customerName}`,
    html,
  });
}

async function notifyCustomer(session: Stripe.Checkout.Session) {
  if (!process.env.RESEND_API_KEY) return;
  const customerEmail = session.customer_details?.email ?? session.customer_email;
  if (!customerEmail) return;

  const lang: Lang = session.metadata?.lang === "ko" ? "ko" : "en";
  const dict = getDict(lang);
  const planId = (session.metadata?.planId as string) ?? "";
  const planLabel =
    planId === "portfolio-pro"
      ? "Portfolio Pro"
      : planId === "portfolio-lite"
        ? "Portfolio Lite"
        : planId;
  const amountTotal =
    session.amount_total != null ? formatAmount(session.amount_total, session.currency) : "-";
  const managePath = lang === "ko" ? "/ko/manage" : "/manage";
  const manageUrl = `${getSiteUrl()}${managePath}`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px;">
      <h2 style="color: #111827; margin: 0 0 16px;">${escape(dict.manage.customerEmailHeading)}</h2>
      <p style="color: #374151; line-height: 1.6; margin: 0 0 24px;">${escape(dict.manage.customerEmailIntro)}</p>
      <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
        ${planLabel ? `<tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Plan</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${escape(planLabel)}</td></tr>` : ""}
        <tr><td style="padding: 8px 0; color: #6b7280;">Total</td><td style="padding: 8px 0; color: #111827;">${escape(amountTotal)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6b7280;">Receipt ID</td><td style="padding: 8px 0; color: #111827; font-family: monospace; font-size: 12px;">${escape(session.id)}</td></tr>
      </table>
      <p style="color: #374151; line-height: 1.6; margin: 24px 0 16px;">${escape(dict.manage.customerEmailManageNote)}</p>
      <p style="margin: 16px 0 32px;">
        <a href="${escape(manageUrl)}" style="display: inline-block; background: #111827; color: #fff; text-decoration: none; padding: 12px 22px; border-radius: 9999px; font-weight: 600;">
          ${escape(dict.manage.customerEmailManageCta)}
        </a>
      </p>
      <p style="color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 16px; line-height: 1.6;">${escape(dict.manage.customerEmailFooter)}</p>
    </div>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: FROM,
    to: customerEmail,
    subject: dict.manage.customerEmailSubject,
    html,
  });
}

async function notifySubscriptionCanceled(subscription: Stripe.Subscription) {
  if (!process.env.RESEND_API_KEY) return;

  const stripe = getStripe();
  const customerId =
    typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id;
  const customer = await stripe.customers.retrieve(customerId);
  if (customer.deleted) return;
  const customerEmail = customer.email;
  if (!customerEmail) return;

  const lang: Lang =
    (subscription.metadata?.lang as Lang | undefined) === "ko" ? "ko" : "en";
  const dict = getDict(lang);
  const planId = (subscription.metadata?.planId as string) ?? "";

  const resend = new Resend(process.env.RESEND_API_KEY);

  const customerHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px;">
      <h2 style="color: #111827; margin: 0 0 16px;">${escape(dict.manage.cancelEmailHeading)}</h2>
      <p style="color: #374151; line-height: 1.6;">${escape(dict.manage.cancelEmailBody)}</p>
      <p style="color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 32px; line-height: 1.6;">${escape(dict.manage.emailFooter)}</p>
    </div>
  `;

  await Promise.all([
    resend.emails.send({
      from: FROM,
      to: customerEmail,
      subject: dict.manage.cancelEmailSubject,
      html: customerHtml,
    }),
    resend.emails.send({
      from: FROM,
      to: TO,
      subject: `[MAKEPAGE] Subscription canceled — ${customerEmail}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #111827; border-bottom: 2px solid #ef4444; padding-bottom: 12px;">Subscription canceled</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Customer</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${escape(customerEmail)}">${escape(customerEmail)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Plan</td><td style="padding: 8px 0; color: #111827;">${escape(planId || "(unknown)")}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Subscription ID</td><td style="padding: 8px 0; color: #111827; font-family: monospace; font-size: 12px;">${escape(subscription.id)}</td></tr>
          </table>
        </div>
      `,
    }),
  ]);
}

async function notifyInvoicePaid(invoice: Stripe.Invoice) {
  if (!process.env.RESEND_API_KEY) return;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const amount = formatAmount(invoice.amount_paid ?? invoice.amount_due ?? 0, invoice.currency);
  const customerEmail = invoice.customer_email ?? "(no email)";
  const number = invoice.number ?? invoice.id;
  const memo = (invoice.metadata?.memo as string | undefined) ?? invoice.description ?? "";

  await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `[MAKEPAGE] Invoice paid — ${number} (${amount})`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #111827; border-bottom: 2px solid #10b981; padding-bottom: 12px;">Invoice paid</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Invoice</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${escape(number)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Customer</td><td style="padding: 8px 0; color: #111827;">${escape(customerEmail)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Amount</td><td style="padding: 8px 0; color: #111827;">${escape(amount)}</td></tr>
          ${memo ? `<tr><td style="padding: 8px 0; color: #6b7280;">Memo</td><td style="padding: 8px 0; color: #111827;">${escape(memo)}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; color: #6b7280;">Source</td><td style="padding: 8px 0; color: #111827;">${escape((invoice.metadata?.source as string | undefined) ?? "stripe")}</td></tr>
        </table>
      </div>
    `,
  });
}

async function notifyInvoicePaymentFailed(invoice: Stripe.Invoice) {
  if (!process.env.RESEND_API_KEY) return;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const amount = formatAmount(invoice.amount_due ?? 0, invoice.currency);
  const customerEmail = invoice.customer_email ?? "(no email)";
  const number = invoice.number ?? invoice.id;

  await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `[MAKEPAGE] Invoice payment failed — ${number}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #111827; border-bottom: 2px solid #ef4444; padding-bottom: 12px;">Invoice payment failed</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Invoice</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${escape(number)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Customer</td><td style="padding: 8px 0; color: #111827;">${escape(customerEmail)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">Amount due</td><td style="padding: 8px 0; color: #111827;">${escape(amount)}</td></tr>
          ${invoice.hosted_invoice_url ? `<tr><td style="padding: 8px 0; color: #6b7280;">Hosted</td><td style="padding: 8px 0;"><a href="${escape(invoice.hosted_invoice_url)}">Open invoice</a></td></tr>` : ""}
        </table>
        <p style="margin-top: 16px; color: #6b7280; font-size: 13px;">Customer should retry payment from the hosted invoice page above.</p>
      </div>
    `,
  });
}
