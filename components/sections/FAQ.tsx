"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section bg-white">
      <div className="container-custom max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="자주 묻는 질문"
          title="궁금하신 점, 미리 답해드릴게요"
        />

        <div className="mt-12 divide-y divide-ink-200 rounded-3xl border border-ink-200">
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
    </section>
  );
}
