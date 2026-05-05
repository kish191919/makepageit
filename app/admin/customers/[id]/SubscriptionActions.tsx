"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  subscriptionId: string;
  status: string;
  cancelAtPeriodEnd: boolean;
  currentPeriodEnd: number;
};

const TERMINAL_STATUSES = new Set([
  "canceled",
  "incomplete_expired",
  "ended",
]);

export default function SubscriptionActions({
  subscriptionId,
  status,
  cancelAtPeriodEnd,
  currentPeriodEnd,
}: Props) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (TERMINAL_STATUSES.has(status)) return null;

  const periodEndDate = new Date(currentPeriodEnd * 1000).toLocaleDateString();

  async function run(action: "cancel_at_period_end" | "resume", confirmMsg: string) {
    if (!window.confirm(confirmMsg)) return;
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch(`/api/admin/subscriptions/${subscriptionId}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `HTTP ${res.status}`);
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (cancelAtPeriodEnd) {
    return (
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-amber-700 font-medium">
          Canceling on {periodEndDate}
        </span>
        <button
          type="button"
          disabled={submitting}
          onClick={() =>
            run(
              "resume",
              `Resume this subscription? It will continue billing on ${periodEndDate}.`
            )
          }
          className="rounded-md border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
        >
          {submitting ? "…" : "Resume"}
        </button>
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        disabled={submitting}
        onClick={() =>
          run(
            "cancel_at_period_end",
            `Cancel this subscription at period end (${periodEndDate})? The customer keeps access until then and won't be charged again.`
          )
        }
        className="rounded-md border border-red-200 bg-white px-3 py-1 text-xs font-medium text-red-700 hover:bg-red-50 disabled:opacity-60"
      >
        {submitting ? "…" : "Cancel at period end"}
      </button>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
