"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type MetaRow = { key: string; value: string };

export default function NewCustomerForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<MetaRow[]>([{ key: "", value: "" }]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const metadata: Record<string, string> = {};
    for (const row of meta) {
      const k = row.key.trim();
      if (k) metadata[k] = row.value;
    }
    try {
      const res = await fetch("/api/admin/customers", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: fd.get("email"),
          name: fd.get("name"),
          phone: fd.get("phone"),
          metadata,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      const { id } = await res.json();
      router.push(`/admin/customers/${id}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create customer");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
      <Field label="Email" name="email" type="email" required />
      <Field label="Name" name="name" />
      <Field label="Phone" name="phone" />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">Metadata</label>
        {meta.map((row, i) => (
          <div key={i} className="flex gap-2">
            <input
              placeholder="key"
              value={row.key}
              onChange={(e) =>
                setMeta((m) => m.map((r, idx) => (idx === i ? { ...r, key: e.target.value } : r)))
              }
              className="w-1/3 rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="value"
              value={row.value}
              onChange={(e) =>
                setMeta((m) => m.map((r, idx) => (idx === i ? { ...r, value: e.target.value } : r)))
              }
              className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => setMeta((m) => m.filter((_, idx) => idx !== i))}
              className="rounded-md px-2 text-slate-400 hover:text-red-600"
              aria-label="Remove"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setMeta((m) => [...m, { key: "", value: "" }])}
          className="text-xs font-medium text-slate-600 hover:text-slate-900"
        >
          + Add field
        </button>
      </div>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 disabled:opacity-60"
      >
        {submitting ? "Creating..." : "Create customer"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
      />
    </div>
  );
}
