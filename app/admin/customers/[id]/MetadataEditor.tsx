"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Row = { key: string; value: string };

export default function MetadataEditor({
  customerId,
  initial,
}: {
  customerId: string;
  initial: Record<string, string>;
}) {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>(() => {
    const entries = Object.entries(initial);
    return entries.length > 0 ? entries.map(([k, v]) => ({ key: k, value: v })) : [{ key: "", value: "" }];
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  async function onSave() {
    setError(null);
    setSaving(true);
    const metadata: Record<string, string> = {};
    for (const row of rows) {
      const k = row.key.trim();
      if (k) metadata[k] = row.value;
    }
    try {
      const res = await fetch(`/api/admin/customers/${customerId}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ metadata }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      setSavedAt(new Date().toLocaleTimeString());
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-2">
      {rows.map((row, i) => (
        <div key={i} className="flex gap-2">
          <input
            placeholder="key"
            value={row.key}
            onChange={(e) =>
              setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, key: e.target.value } : r)))
            }
            className="w-1/3 rounded-md border border-slate-300 px-3 py-2 text-sm font-mono"
          />
          <input
            placeholder="value"
            value={row.value}
            onChange={(e) =>
              setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, value: e.target.value } : r)))
            }
            className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={() => setRows((rs) => rs.filter((_, idx) => idx !== i))}
            className="rounded-md px-2 text-slate-400 hover:text-red-600"
            aria-label="Remove"
          >
            ✕
          </button>
        </div>
      ))}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => setRows((rs) => [...rs, { key: "", value: "" }])}
          className="text-xs font-medium text-slate-600 hover:text-slate-900"
        >
          + Add field
        </button>
        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          className="ml-auto rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save metadata"}
        </button>
        {savedAt && <span className="text-xs text-emerald-600">Saved at {savedAt}</span>}
      </div>
      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}
    </div>
  );
}
