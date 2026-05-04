import { NextResponse } from "next/server";
import { getStripe, getSiteUrl } from "@/lib/stripe";
import { verifyToken } from "@/lib/manage-token";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const lang = body?.lang === "ko" ? "ko" : "en";
    const isEn = lang === "en";

    const verified = verifyToken(body?.token);
    if (!verified) {
      return NextResponse.json(
        { error: isEn ? "Invalid or expired link." : "유효하지 않거나 만료된 링크입니다." },
        { status: 401 }
      );
    }

    const stripe = getStripe();
    const customers = await stripe.customers.list({ email: verified.email, limit: 1 });
    const customer = customers.data[0];
    if (!customer) {
      return NextResponse.json(
        { error: isEn ? "No matching account found." : "일치하는 계정을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    const returnPath = isEn ? "/manage" : "/ko/manage";
    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `${getSiteUrl()}${returnPath}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Manage portal error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
