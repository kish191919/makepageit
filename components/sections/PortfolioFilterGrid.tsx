"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Portfolio } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
  portfolios: Portfolio[];
  categories: string[];
};

export default function PortfolioFilterGrid({ lang, portfolios, categories }: Props) {
  const dict = getDict(lang);
  const allLabel = categories[0];
  const [selected, setSelected] = useState<string>(allLabel);

  const filtered =
    selected === allLabel
      ? portfolios
      : portfolios.filter((p) => p.category === selected);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const active = selected === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setSelected(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-ink-900 text-white"
                  : "border border-ink-200 text-ink-700 hover:border-ink-900"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={localePath(lang, `/portfolio/${p.id}`)}
            className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
              <Image
                src={p.image}
                alt={p.client}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 opacity-0 transition group-hover:bg-ink-900/40 group-hover:opacity-100">
                <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink-900 shadow-lg">
                  {dict.portfolio.viewTemplate}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {p.category}
                </span>
                <span className="text-xs text-ink-400">{p.year}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink-900">{p.client}</h3>
              <p className="mt-1 text-sm text-ink-500">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-ink-200 px-2 py-0.5 text-[11px] text-ink-500"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-ink-500">{dict.portfolio.nondisclosed}</p>
    </>
  );
}
