"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export default function ContactForm({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), lang };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || dict.contact.form.errorGeneric);
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.contact.form.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-ink-200 bg-white p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-500">
          ✓
        </div>
        <h3 className="mt-5 text-2xl font-bold text-ink-900">
          {dict.contact.form.successTitle}
        </h3>
        <p className="mt-3 text-base text-ink-500">
          {dict.contact.form.successBody(site.phone)}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-3xl border border-ink-200 bg-white p-6 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label={dict.contact.form.labels.name}
          name="name"
          placeholder={dict.contact.form.placeholders.name}
          required
        />
        <Field
          label={dict.contact.form.labels.phone}
          name="phone"
          type="tel"
          placeholder={dict.contact.form.placeholders.phone}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label={dict.contact.form.labels.email}
          name="email"
          type="email"
          placeholder={dict.contact.form.placeholders.email}
          required
        />
        <Field
          label={dict.contact.form.labels.industry}
          name="industry"
          placeholder={dict.contact.form.placeholders.industry}
        />
      </div>

      <Select
        label={dict.contact.form.labels.service}
        name="service"
        options={dict.contact.form.services}
        required
        prompt={dict.contact.form.selectPrompt}
      />
      <Select
        label={dict.contact.form.labels.budget}
        name="budget"
        options={dict.contact.form.budgets}
        required
        prompt={dict.contact.form.selectPrompt}
      />

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-ink-700"
        >
          {dict.contact.form.labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={dict.contact.form.placeholders.message}
          className="mt-2 w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm leading-relaxed text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-500">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-ink-200 text-brand-600 focus:ring-brand-600"
        />
        <span>{dict.contact.form.consent}</span>
      </label>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full disabled:cursor-wait disabled:opacity-60"
      >
        {submitting ? dict.contact.form.submitting : dict.contact.form.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink-700">
        {label}
        {required && <span className="ml-1 text-accent-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
  prompt,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  prompt: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink-700">
        {label}
        {required && <span className="ml-1 text-accent-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
      >
        <option value="" disabled>
          {prompt}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
