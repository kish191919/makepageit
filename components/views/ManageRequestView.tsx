"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { getDict, type Lang } from "@/lib/i18n";

export default function ManageRequestView({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "").trim();

    try {
      const res = await fetch("/api/manage/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lang }),
      });
      if (!res.ok) throw new Error(dict.manage.requestError);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.manage.requestError);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow={dict.manage.requestEyebrow}
        title={dict.manage.requestTitle}
        description={dict.manage.requestBody}
      />

      <section className="section">
        <div className="container-custom max-w-xl">
          {sent ? (
            <div className="rounded-3xl border border-ink-200 bg-white p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-500">
                ✓
              </div>
              <h2 className="mt-5 text-2xl font-bold text-ink-900">{dict.manage.linkSentTitle}</h2>
              <p className="mt-3 text-base text-ink-500">{dict.manage.linkSentBody}</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-6 rounded-3xl border border-ink-200 bg-white p-6 sm:p-10"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-ink-900">
                  {dict.manage.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={dict.manage.emailPlaceholder}
                  className="mt-2 block w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              {error && (
                <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
              >
                {submitting ? dict.manage.submitting : dict.manage.submitCta}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
