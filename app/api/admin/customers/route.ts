import { NextResponse } from "next/server";
import { createCustomer, listCustomers } from "@/lib/admin-stripe";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email") ?? undefined;
  const cursor = url.searchParams.get("cursor") ?? undefined;
  try {
    const list = await listCustomers({ email, starting_after: cursor });
    return NextResponse.json({
      data: list.data.map((c) => ({
        id: c.id,
        email: c.email,
        name: c.name,
        created: c.created,
      })),
      has_more: list.has_more,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
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
  if (!body.email || typeof body.email !== "string") {
    return NextResponse.json({ error: "email is required" }, { status: 400 });
  }
  try {
    const customer = await createCustomer({
      email: body.email,
      name: body.name,
      phone: body.phone,
      metadata: body.metadata,
    });
    return NextResponse.json({ id: customer.id }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed" },
      { status: 500 }
    );
  }
}
