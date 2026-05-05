import Link from "next/link";
import { listCustomers } from "@/lib/admin-stripe";
import NewInvoiceForm from "./NewInvoiceForm";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function NewInvoicePage({
  searchParams,
}: {
  searchParams: { customer?: string };
}) {
  const recent = await listCustomers({ limit: 50 });
  const options = recent.data.map((c) => ({
    id: c.id,
    label: c.name ? `${c.name} <${c.email ?? "no email"}>` : (c.email ?? c.id),
  }));

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <Link href="/admin/invoices" className="text-xs text-slate-500 hover:text-slate-900">
          ← Invoices
        </Link>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">New invoice</h1>
        <p className="text-sm text-slate-500">
          Create a quote-based invoice. Stripe sends the payment link to the customer for one-time
          invoices; we email the checkout link for recurring ones.
        </p>
      </div>
      <NewInvoiceForm customerOptions={options} initialCustomerId={searchParams.customer} />
    </div>
  );
}
