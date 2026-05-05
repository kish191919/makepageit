import { getStripe } from "@/lib/stripe";

export async function getReceiptUrlForSession(sessionId: string): Promise<string | null> {
  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["invoice", "payment_intent.latest_charge"],
    });

    if (session.mode === "subscription" && session.invoice && typeof session.invoice !== "string") {
      return session.invoice.hosted_invoice_url ?? null;
    }

    if (
      session.mode === "payment" &&
      session.payment_intent &&
      typeof session.payment_intent !== "string"
    ) {
      const charge = session.payment_intent.latest_charge;
      if (charge && typeof charge !== "string") return charge.receipt_url ?? null;
    }

    return null;
  } catch (err) {
    console.error("getReceiptUrlForSession failed:", err);
    return null;
  }
}
