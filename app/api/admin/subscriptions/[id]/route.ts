import { NextResponse } from "next/server";
import { setSubscriptionCancelAtPeriodEnd } from "@/lib/admin-stripe";

export const runtime = "nodejs";

type Body = { action?: "cancel_at_period_end" | "resume" };

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const action = body.action;
  if (action !== "cancel_at_period_end" && action !== "resume") {
    return NextResponse.json(
      { error: "action must be cancel_at_period_end | resume" },
      { status: 400 }
    );
  }

  try {
    const sub = await setSubscriptionCancelAtPeriodEnd(
      params.id,
      action === "cancel_at_period_end"
    );
    return NextResponse.json({
      id: sub.id,
      cancel_at_period_end: sub.cancel_at_period_end,
      current_period_end: sub.items.data[0]?.current_period_end ?? null,
      status: sub.status,
    });
  } catch (err) {
    console.error("Subscription update failed:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed" },
      { status: 500 }
    );
  }
}
