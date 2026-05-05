import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { formatAmount } from "@/lib/email-helpers";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function loadStats() {
  const stripe = getStripe();
  const [recent, openInvoices] = await Promise.all([
    stripe.invoices.list({ limit: 5 }),
    stripe.invoices.list({ status: "open", limit: 100 }),
  ]);
  const outstandingCents = openInvoices.data.reduce((sum, inv) => sum + (inv.amount_due ?? 0), 0);
  const outstandingCurrency = openInvoices.data[0]?.currency ?? "usd";
  return { recent: recent.data, outstandingCents, outstandingCurrency };
}

export default async function AdminDashboard() {
  let stats: Awaited<ReturnType<typeof loadStats>> | null = null;
  let error: string | null = null;
  try {
    stats = await loadStats();
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load Stripe data";
  }

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <Link
          href="/admin/invoices/new"
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          New invoice
        </Link>
      </header>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {stats && (
        <>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">Open invoices</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {formatAmount(stats.outstandingCents, stats.outstandingCurrency)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">Recent invoices</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{stats.recent.length}</p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white">
            <header className="border-b border-slate-200 px-5 py-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">Recent invoices</h2>
              <Link href="/admin/invoices" className="text-xs text-slate-600 hover:text-slate-900">
                View all →
              </Link>
            </header>
            <ul className="divide-y divide-slate-100">
              {stats.recent.map((inv) => (
                <li key={inv.id} className="px-5 py-3 flex items-center justify-between text-sm">
                  <div className="min-w-0">
                    <p className="font-medium text-slate-900 truncate">
                      {inv.number ?? inv.id} ·{" "}
                      <span className="text-slate-500">{inv.customer_email ?? "—"}</span>
                    </p>
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
                  </div>
                </li>
              ))}
              {stats.recent.length === 0 && (
                <li className="px-5 py-6 text-sm text-slate-500">No invoices yet.</li>
              )}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
