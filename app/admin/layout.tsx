import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · MAKEPAGE",
  robots: { index: false, follow: false },
};

const NAV: { href: string; label: string }[] = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/customers", label: "Customers" },
  { href: "/admin/invoices", label: "Invoices" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-56 bg-slate-900 text-slate-200 flex flex-col">
        <div className="px-5 py-5 border-b border-slate-800">
          <Link href="/admin" className="text-base font-semibold text-white">
            MAKEPAGE Admin
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-sm hover:bg-slate-800 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-5 py-4 border-t border-slate-800 text-xs text-slate-500">
          Internal use only
        </div>
      </aside>
      <main className="flex-1 min-w-0 px-8 py-8">{children}</main>
    </div>
  );
}
