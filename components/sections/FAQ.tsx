"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getFaqs } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

export default function FAQ({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState<number | null>(0);
  const dict = getDict(lang);
  const faqs = getFaqs(lang);

  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40">
      <div className="pointer-events-none absolute -right-40 bottom-0 hidden h-[500px] w-[500px] rounded-full bg-brand-200 opacity-25 blur-3xl lg:block" />

      <div className="container-custom relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow={dict.faq.eyebrow}
              title={dict.faq.title}
              description={dict.faq.description}
            />

            <div className="mt-8 rounded-2xl bg-brand-600 p-6 text-white shadow-lg">
              <p className="text-base font-bold">{dict.faq.moreQuestions.title}</p>
              <p className="mt-1 text-sm text-brand-50/90">
                {dict.faq.moreQuestions.body}
              </p>
              <Link
                href={localePath(lang, "/contact")}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-accent-500 hover:text-white"
              >
                {dict.faq.moreQuestions.cta}
              </Link>
            </div>
          </div>

          <div className="divide-y divide-ink-200 rounded-3xl border border-ink-200 bg-white">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="block w-full px-6 py-5 text-left transition hover:bg-ink-50 sm:px-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-bold text-ink-900 sm:text-lg">
                      Q. {f.q}
                    </h3>
                    <span
                      className={`flex-none text-xl text-brand-600 transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                      {f.a}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
