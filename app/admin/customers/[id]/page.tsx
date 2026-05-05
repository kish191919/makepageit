import Link from "next/link";
import { notFound } from "next/navigation";
import { getCustomerWithHistory } from "@/lib/admin-stripe";
import { formatAmount } from "@/lib/email-helpers";
import MetadataEditor from "./MetadataEditor";
import SubscriptionActions from "./SubscriptionActions";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function CustomerDetailPage({ params }: { params: { id: string } }) {
  let data;
  try {
    data = await getCustomerWithHistory(params.id);
  } catch {
    notFound();
  }

  const { customer, invoices, subscriptions } = data;

  return (
    <div className="space-y-8 max-w-4xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <Link href="/admin/customers" className="text-xs text-slate-500 hover:text-slate-900">
            ← Customers
          </Link>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            {customer.name ?? customer.email ?? customer.id}
          </h1>
          <p className="text-sm text-slate-500">{customer.email}</p>
        </div>
        <Link
          href={`/admin/invoices/new?customer=${customer.id}`}
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          New invoice
        </Link>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900">Profile</h2>
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-slate-500">Stripe ID</dt>
            <dd className="font-mono text-slate-900">{customer.id}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Phone</dt>
            <dd className="text-slate-900">{customer.phone ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Created</dt>
            <dd className="text-slate-900">
              {new Date(customer.created * 1000).toLocaleString()}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Currency</dt>
            <dd className="text-slate-900">{customer.currency?.toUpperCase() ?? "USD"}</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900">Metadata</h2>
        <MetadataEditor
          customerId={customer.id}
          initial={(customer.metadata ?? {}) as Record<string, string>}
        />
      </section>

      <section className="rounded-lg border border-slate-200 bg-white">
        <header className="border-b border-slate-200 px-5 py-3">
          <h2 className="text-sm font-semibold text-slate-900">
            Invoices ({invoices.length})
          </h2>
        </header>
        <ul className="divide-y divide-slate-100">
          {invoices.map((inv) => (
            <li
              key={inv.id}
              className="px-5 py-3 flex items-center justify-between gap-4 text-sm"
            >
              <div className="min-w-0">
                <p className="font-medium text-slate-900 truncate">{inv.number ?? inv.id}</p>
                <p className="text-xs text-slate-500">
                  {new Date(inv.created * 1000).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wide text-slate-500">
                  {inv.status}
                </span>
                <span className="font-mono text-slate-900">
                  {formatAmount(inv.amount_due ?? inv.total ?? 0, inv.currency)}
                </span>
                {inv.hosted_invoice_url && (
                  <a
                    href={inv.hosted_invoice_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 hover:text-slate-900 font-medium"
                  >
                    View →
                  </a>
                )}
              </div>
            </li>
          ))}
          {invoices.length === 0 && (
            <li className="px-5 py-6 text-sm text-slate-500">No invoices yet.</li>
          )}
        </ul>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white">
        <header className="border-b border-slate-200 px-5 py-3">
          <h2 className="text-sm font-semibold text-slate-900">
            Subscriptions ({subscriptions.length})
          </h2>
        </header>
        <ul className="divide-y divide-slate-100">
          {subscriptions.map((sub) => (
            <li
              key={sub.id}
              className="px-5 py-3 flex items-center justify-between gap-4 text-sm"
            >
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900 truncate">{sub.id}</p>
                <p className="text-xs text-slate-500">
                  {sub.items.data
                    .map((it) => `${it.price.nickname ?? it.price.id} × ${it.quantity ?? 1}`)
                    .join(", ")}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs uppercase tracking-wide text-slate-500">
                  {sub.status}
                </span>
                <SubscriptionActions
                  subscriptionId={sub.id}
                  status={sub.status}
                  cancelAtPeriodEnd={sub.cancel_at_period_end}
                  currentPeriodEnd={sub.items.data[0]?.current_period_end ?? 0}
                />
              </div>
            </li>
          ))}
          {subscriptions.length === 0 && (
            <li className="px-5 py-6 text-sm text-slate-500">No subscriptions.</li>
          )}
        </ul>
      </section>
    </div>
  );
}
