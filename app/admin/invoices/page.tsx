import Link from "next/link";
import { listAllInvoices } from "@/lib/admin-stripe";
import { formatAmount } from "@/lib/email-helpers";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const FILTERS: { value: string; label: string }[] = [
  { value: "", label: "All" },
  { value: "open", label: "Open" },
  { value: "paid", label: "Paid" },
  { value: "uncollectible", label: "Uncollectible" },
  { value: "void", label: "Void" },
  { value: "draft", label: "Draft" },
];

export default async function InvoicesPage({
  searchParams,
}: {
  searchParams: { status?: string; cursor?: string };
}) {
  const status = (searchParams.status || undefined) as
    | "open"
    | "paid"
    | "uncollectible"
    | "void"
    | "draft"
    | undefined;

  const list = await listAllInvoices({
    status,
    starting_after: searchParams.cursor || undefined,
    limit: 25,
  });

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Invoices</h1>
        <Link
          href="/admin/invoices/new"
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          New invoice
        </Link>
      </header>

      <nav className="flex gap-2 text-sm">
        {FILTERS.map((f) => {
          const active = (searchParams.status ?? "") === f.value;
          const href = f.value ? `/admin/invoices?status=${f.value}` : "/admin/invoices";
          return (
            <Link
              key={f.value || "all"}
              href={href}
              className={
                active
                  ? "rounded-md bg-slate-900 text-white px-3 py-1.5"
                  : "rounded-md border border-slate-300 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50"
              }
            >
              {f.label}
            </Link>
          );
        })}
      </nav>

      <div className="rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Number</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Amount</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {list.data.map((inv) => (
              <tr key={inv.id}>
                <td className="px-4 py-3 font-mono text-slate-900">{inv.number ?? inv.id}</td>
                <td className="px-4 py-3 text-slate-700">{inv.customer_email ?? "—"}</td>
                <td className="px-4 py-3 text-slate-500">
                  {new Date(inv.created * 1000).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-xs uppercase tracking-wide text-slate-600">
                  {inv.status}
                </td>
                <td className="px-4 py-3 text-right font-mono text-slate-900">
                  {formatAmount(inv.amount_due ?? inv.total ?? 0, inv.currency)}
                </td>
                <td className="px-4 py-3 text-right">
                  {inv.hosted_invoice_url && (
                    <a
                      href={inv.hosted_invoice_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-700 hover:text-slate-900 font-medium"
                    >
                      Open →
                    </a>
                  )}
                </td>
              </tr>
            ))}
            {list.data.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-500">
                  No invoices.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {list.has_more && list.data.length > 0 && (
        <div className="flex justify-end">
          <Link
            href={`/admin/invoices?cursor=${list.data[list.data.length - 1].id}${status ? `&status=${status}` : ""}`}
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Next page →
          </Link>
        </div>
      )}
    </div>
  );
}
