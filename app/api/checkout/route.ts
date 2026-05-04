import { NextResponse } from "next/server";
import { getStripe, getPlanPrices, getSiteUrl, type PlanId } from "@/lib/stripe";

type CreateParams = Parameters<ReturnType<typeof getStripe>["checkout"]["sessions"]["create"]>[0];
type LineItem = NonNullable<CreateParams>["line_items"] extends (infer T)[] | undefined ? T : never;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const planId = body?.planId as PlanId | undefined;
    const lang = body?.lang === "ko" ? "ko" : "en";
    const isEn = lang === "en";

    const includeMonthly = body?.options?.monthly !== false;
    const includeDomain = body?.options?.domain !== false;

    if (planId !== "portfolio-lite" && planId !== "portfolio-pro") {
      return NextResponse.json(
        { error: isEn ? "Invalid plan." : "잘못된 플랜입니다." },
        { status: 400 }
      );
    }

    const prices = getPlanPrices(planId);
    if (!prices.setup) {
      return NextResponse.json(
        {
          error: isEn
            ? "Checkout is not configured for this plan yet."
            : "이 플랜의 결제가 아직 설정되지 않았습니다.",
        },
        { status: 503 }
      );
    }
    if (includeMonthly && !prices.monthly) {
      return NextResponse.json(
        {
          error: isEn
            ? "Monthly maintenance price is not configured."
            : "월 유지보수 가격이 설정되지 않았습니다.",
        },
        { status: 503 }
      );
    }
    if (includeDomain && !prices.domainFirstYear) {
      return NextResponse.json(
        {
          error: isEn
            ? "Domain price is not configured."
            : "도메인 가격이 설정되지 않았습니다.",
        },
        { status: 503 }
      );
    }

    const stripe = getStripe();
    const siteUrl = getSiteUrl();
    const localePath = isEn ? "" : "/ko";

    const lineItems: LineItem[] = [{ price: prices.setup, quantity: 1 }];
    if (includeMonthly) lineItems.push({ price: prices.monthly!, quantity: 1 });
    if (includeDomain) lineItems.push({ price: prices.domainFirstYear!, quantity: 1 });

    const subscriptionDescription =
      planId === "portfolio-lite" ? "Portfolio Lite" : "Portfolio Pro";
    const oneTimeDescription =
      planId === "portfolio-lite" ? "Portfolio Lite (build only)" : "Portfolio Pro (build only)";

    const baseParams = {
      line_items: lineItems,
      allow_promotion_codes: true,
      billing_address_collection: "required" as const,
      automatic_tax: { enabled: true },
      tax_id_collection: { enabled: true },
      success_url: `${siteUrl}${localePath}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}${localePath}/pricing?canceled=1`,
      metadata: {
        planId,
        lang,
        includeMonthly: String(includeMonthly),
        includeDomain: String(includeDomain),
      },
    };

    // subscription mode requires at least one recurring price; payment mode handles
    // the one-shot bundle and still creates a Customer for future invoicing.
    const session = includeMonthly
      ? await stripe.checkout.sessions.create({
          ...baseParams,
          mode: "subscription",
          subscription_data: {
            description: subscriptionDescription,
            metadata: { planId },
          },
        })
      : await stripe.checkout.sessions.create({
          ...baseParams,
          mode: "payment",
          customer_creation: "always",
          payment_intent_data: {
            description: oneTimeDescription,
            metadata: { planId },
          },
        });

    if (!session.url) {
      return NextResponse.json(
        { error: isEn ? "Failed to create checkout session." : "결제 세션 생성 실패" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
