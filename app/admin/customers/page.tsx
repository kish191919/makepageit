import Link from "next/link";
import { listCustomers } from "@/lib/admin-stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function CustomersPage({
  searchParams,
}: {
  searchParams: { email?: string; cursor?: string };
}) {
  const list = await listCustomers({
    email: searchParams.email || undefined,
    starting_after: searchParams.cursor || undefined,
    limit: 25,
  });

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Customers</h1>
        <Link
          href="/admin/customers/new"
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          New customer
        </Link>
      </header>

      <form className="flex gap-2" action="/admin/customers">
        <input
          type="email"
          name="email"
          defaultValue={searchParams.email ?? ""}
          placeholder="Search by exact email"
          className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Search
        </button>
      </form>

      <div className="rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {list.data.map((c) => (
              <tr key={c.id}>
                <td className="px-4 py-3 font-medium text-slate-900">{c.name ?? "—"}</td>
                <td className="px-4 py-3 text-slate-700">{c.email ?? "—"}</td>
                <td className="px-4 py-3 text-slate-500">
                  {new Date(c.created * 1000).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/customers/${c.id}`}
                    className="text-slate-700 hover:text-slate-900 font-medium"
                  >
                    Open →
                  </Link>
                </td>
              </tr>
            ))}
            {list.data.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-500">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {list.has_more && list.data.length > 0 && (
        <div className="flex justify-end">
          <Link
            href={`/admin/customers?cursor=${list.data[list.data.length - 1].id}`}
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Next page →
          </Link>
        </div>
      )}
    </div>
  );
}
