"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getDict, localePath, type Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
  token: string | null;
  email: string | null;
};

export default function ManageDashboardView({ lang, token, email }: Props) {
  const dict = getDict(lang);

  if (!token || !email) {
    return (
      <>
        <PageHeader
          eyebrow={dict.manage.requestEyebrow}
          title={dict.manage.invalidTokenTitle}
          description={dict.manage.invalidTokenBody}
        />
        <section className="section">
          <div className="container-custom max-w-xl text-center">
            <Link
              href={localePath(lang, "/manage")}
              className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {dict.manage.invalidTokenCta}
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={dict.manage.dashboardEyebrow}
        title={dict.manage.dashboardTitle}
        description={dict.manage.dashboardBody(email)}
      />
      <section className="section">
        <div className="container-custom grid max-w-4xl gap-6 md:grid-cols-2">
          <SubscriptionCard lang={lang} token={token} dict={dict} />
          <DomainCard lang={lang} token={token} dict={dict} />
        </div>
      </section>
    </>
  );
}

function SubscriptionCard({
  lang,
  token,
  dict,
}: {
  lang: Lang;
  token: string;
  dict: ReturnType<typeof getDict>;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function openPortal() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/manage/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, lang }),
      });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok || !data.url) throw new Error(data.error || dict.manage.portalError);
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.manage.portalError);
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col rounded-3xl border border-ink-200 bg-white p-6 sm:p-8">
      <h3 className="text-xl font-bold text-ink-900">{dict.manage.subscriptionCardTitle}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
        {dict.manage.subscriptionCardBody}
      </p>
      {error && (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}
      <button
        type="button"
        onClick={openPortal}
        disabled={loading}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? dict.manage.subscriptionCardLoading : dict.manage.subscriptionCardCta}
      </button>
    </div>
  );
}

function DomainCard({
  lang,
  token,
  dict,
}: {
  lang: Lang;
  token: string;
  dict: ReturnType<typeof getDict>;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const note = String(new FormData(e.currentTarget).get("note") ?? "");
    try {
      const res = await fetch("/api/manage/domain-cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, lang, note }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || dict.manage.domainError);
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.manage.domainError);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-ink-200 bg-white p-6 text-center sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-500">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink-900">{dict.manage.domainSentTitle}</h3>
        <p className="mt-2 text-sm text-ink-500">{dict.manage.domainSentBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col rounded-3xl border border-ink-200 bg-white p-6 sm:p-8"
    >
      <h3 className="text-xl font-bold text-ink-900">{dict.manage.domainCardTitle}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{dict.manage.domainCardBody}</p>
      <textarea
        name="note"
        rows={3}
        placeholder={dict.manage.domainNotePlaceholder}
        className="mt-4 block w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
      {error && (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex items-center justify-center rounded-full border border-ink-900 bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-ink-50 disabled:opacity-60"
      >
        {submitting ? dict.manage.domainSubmitting : dict.manage.domainCardCta}
      </button>
    </form>
  );
}
