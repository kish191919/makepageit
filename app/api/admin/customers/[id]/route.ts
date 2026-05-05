import { NextResponse } from "next/server";
import { getCustomerWithHistory, updateCustomer } from "@/lib/admin-stripe";

export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await getCustomerWithHistory(params.id);
    return NextResponse.json({
      customer: {
        id: data.customer.id,
        email: data.customer.email,
        name: data.customer.name,
        phone: data.customer.phone,
        metadata: data.customer.metadata,
      },
      invoiceCount: data.invoices.length,
      subscriptionCount: data.subscriptions.length,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  let body: {
    email?: string;
    name?: string;
    phone?: string;
    metadata?: Record<string, string>;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  try {
    const customer = await updateCustomer(params.id, body);
    return NextResponse.json({ id: customer.id });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed" },
      { status: 500 }
    );
  }
}
