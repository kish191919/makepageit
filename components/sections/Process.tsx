"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { getDict, type Lang } from "@/lib/i18n";

export default function Process({ lang }: { lang: Lang }) {
  const [allOpen, setAllOpen] = useState(false);
  const dict = getDict(lang);
  const steps = dict.process.steps;

  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-32 top-20 hidden h-[420px] w-[420px] rounded-full bg-brand-200 opacity-30 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -right-24 bottom-10 hidden h-[360px] w-[360px] rounded-full bg-accent-400 opacity-20 blur-3xl lg:block" />

      <div className="container-custom relative z-10">
        <SectionHeading
          align="center"
          eyebrow={dict.process.eyebrow}
          title={dict.process.title}
          description={dict.process.description}
        />

        <div className="relative mt-16">
          <ConnectorLine />

          <div className="relative -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[7.5vw] pb-4 scrollbar-hide sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:snap-none lg:grid-cols-4">
            {steps.map((s, i) => {
              return (
                <article
                  key={s.n}
                  onClick={() => setAllOpen((prev) => !prev)}
                  className="group relative flex w-[85vw] shrink-0 cursor-pointer snap-center flex-col overflow-hidden rounded-3xl border border-blue-500/60 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white shadow-[0_2px_4px_rgba(15,23,42,0.06),0_14px_32px_-12px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_4px_8px_rgba(15,23,42,0.06),0_24px_48px_-16px_rgba(37,99,235,0.50)] sm:w-[60%] sm:snap-start md:w-auto md:cursor-default"
                >
                  <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-300/40 blur-3xl" />
                  <span aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-accent-500/20 blur-3xl" />
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-2 select-none text-[140px] font-black leading-none tracking-tighter text-white/[0.07] translate-y-4">
                    {s.n}
                  </span>

                  <div className="relative z-10 flex flex-1 flex-col p-6">
                    <div className="relative h-28 overflow-hidden rounded-2xl border border-white/30 bg-white">
                      <StepMockup index={i} />
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-900 shadow-md shadow-blue-950/40">
                        {s.n}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                        STEP
                      </span>
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-white md:text-xl">
                        {s.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className={`md:hidden flex-none text-2xl leading-none text-white/90 transition-transform duration-200 ${allOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </div>

                    <div className={allOpen ? "flex flex-1 flex-col" : "hidden md:flex md:flex-1 md:flex-col"}>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {s.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/80">
                        {s.body}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/20">
                        {s.meta.map((m, idx) => (
                          <span
                            key={m}
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                              idx === 0
                                ? "bg-white/15 text-white"
                                : "bg-white/10 text-white/70"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                idx === 0 ? "bg-white" : "bg-white/50"
                              }`}
                            />
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectorLine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-14 z-0 hidden h-px lg:block"
    >
      <svg
        className="absolute inset-0 h-3 w-full -translate-y-1/2"
        viewBox="0 0 1200 12"
        preserveAspectRatio="none"
      >
        <line
          x1="40"
          y1="6"
          x2="1160"
          y2="6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 6"
          className="text-blue-300"
        />
      </svg>
    </div>
  );
}

function StepMockup({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <Mockup01 />;
    case 1:
      return <Mockup02 />;
    case 2:
      return <Mockup03 />;
    case 3:
      return <Mockup04 />;
    default:
      return null;
  }
}

function Mockup01() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 112"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="20" y="18" width="120" height="26" rx="13" className="fill-white" stroke="#E0E7FF" />
      <circle cx="32" cy="31" r="4" className="fill-brand-300">
        <animate attributeName="r" values="4;5;4" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.7;1" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <rect x="42" y="27" width="50" height="3" rx="1.5" className="fill-ink-200" />
      <rect x="42" y="33" width="80" height="3" rx="1.5" className="fill-ink-100" />

      <rect x="100" y="56" width="120" height="26" rx="13" className="fill-brand-600" />
      <rect x="112" y="65" width="60" height="3" rx="1.5" className="fill-white/80" />
      <rect x="112" y="71" width="90" height="3" rx="1.5" className="fill-white/50" />

      <g transform="translate(190 18)">
        <circle cx="12" cy="12" r="12" className="fill-accent-500" />
        <g>
          <path
            d="M12 7 L12 12 L15.5 14"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="6s"
            repeatCount="indefinite"
          />
        </g>
      </g>
    </svg>
  );
}

function Mockup02() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 112"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="20" y="14" width="200" height="86" rx="6" className="fill-white" stroke="#E0E7FF" />
      <rect x="20" y="14" width="200" height="14" rx="6" className="fill-ink-50" />
      <circle cx="28" cy="21" r="2" className="fill-ink-200" />
      <circle cx="35" cy="21" r="2" className="fill-ink-200" />
      <circle cx="42" cy="21" r="2" className="fill-ink-200" />
      <rect x="58" y="18" width="120" height="6" rx="3" className="fill-white" stroke="#E5E5E5" />

      <rect x="32" y="36" width="60" height="6" rx="2" className="fill-ink-200" />
      <rect x="32" y="48" width="176" height="22" rx="3" className="fill-brand-50" />
      <rect x="32" y="76" width="52" height="18" rx="3" className="fill-ink-100" />
      <rect x="94" y="76" width="52" height="18" rx="3" className="fill-ink-100" />
      <rect x="156" y="76" width="52" height="18" rx="3" className="fill-brand-100" stroke="#6366F1" strokeWidth="1.2">
        <animate attributeName="stroke-opacity" values="1;0.35;1" dur="2.4s" repeatCount="indefinite" />
      </rect>

      <g transform="translate(168 80)">
        <g>
          <path
            d="M0 0 L0 14 L4 11 L7 18 L10 17 L7 10 L12 10 Z"
            className="fill-accent-500"
            stroke="white"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-3; 0,0"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </g>
      </g>
    </svg>
  );
}

function Mockup03() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 112"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="20" y="14" width="200" height="86" rx="6" className="fill-white" stroke="#E0E7FF" />
      <rect x="20" y="14" width="200" height="18" rx="6" className="fill-ink-50" />
      <circle cx="28" cy="23" r="2" className="fill-ink-200" />
      <circle cx="35" cy="23" r="2" className="fill-ink-200" />
      <circle cx="42" cy="23" r="2" className="fill-ink-200" />

      <rect x="56" y="18" width="148" height="10" rx="5" className="fill-white" stroke="#E5E5E5" />
      <g transform="translate(62 20)">
        <rect x="0" y="1.5" width="6" height="4.5" rx="0.8" className="fill-brand-600" />
        <path d="M1.2 1.5 V0.5 a1.8 1.8 0 0 1 3.6 0 V1.5" stroke="#4F46E5" strokeWidth="0.8" fill="none" />
      </g>
      <rect x="74" y="22" width="60" height="3" rx="1.5" className="fill-ink-400" />

      <g transform="translate(32 48)">
        <rect width="58" height="20" rx="10" className="fill-brand-50" />
        <circle cx="14" cy="10" r="6" className="fill-brand-600" />
        <path d="M11 10 L13 12 L17 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="stroke-dasharray" values="0 12;12 0;12 0;12 0" keyTimes="0;0.18;0.92;1" dur="3.6s" repeatCount="indefinite" />
        </path>
        <rect x="24" y="8" width="28" height="4" rx="2" className="fill-brand-600/80" />
      </g>
      <g transform="translate(96 48)">
        <rect width="58" height="20" rx="10" className="fill-brand-50" />
        <circle cx="14" cy="10" r="6" className="fill-brand-600" />
        <path d="M11 10 L13 12 L17 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="stroke-dasharray" values="0 12;0 12;12 0;12 0" keyTimes="0;0.32;0.5;1" dur="3.6s" repeatCount="indefinite" />
        </path>
        <rect x="24" y="8" width="28" height="4" rx="2" className="fill-brand-600/80" />
      </g>
      <g transform="translate(160 48)">
        <rect width="58" height="20" rx="10" className="fill-accent-500">
          <animate attributeName="opacity" values="1;0.7;1" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <circle cx="14" cy="10" r="6" className="fill-white" />
        <path d="M11 10 L13 12 L17 8" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="stroke-dasharray" values="0 12;0 12;12 0;12 0" keyTimes="0;0.6;0.78;1" dur="3.6s" repeatCount="indefinite" />
        </path>
        <rect x="24" y="8" width="28" height="4" rx="2" className="fill-white/90" />
      </g>

      <rect x="32" y="78" width="120" height="3" rx="1.5" className="fill-ink-200" />
      <rect x="32" y="86" width="80" height="3" rx="1.5" className="fill-ink-100" />
    </svg>
  );
}

function Mockup04() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 112"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="20" y="14" width="200" height="86" rx="6" className="fill-white" stroke="#E0E7FF" />

      <rect x="32" y="26" width="50" height="4" rx="2" className="fill-ink-300" />
      <rect x="32" y="34" width="32" height="3" rx="1.5" className="fill-ink-100" />

      <g transform="translate(150 24)">
        <rect width="56" height="18" rx="9" className="fill-brand-50" />
        <path d="M8 12 L12 8 L16 10 L22 5" stroke="#4F46E5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="28" y="7" width="22" height="4" rx="2" className="fill-brand-700" />
      </g>

      <line x1="32" y1="86" x2="208" y2="86" stroke="#E5E5E5" strokeWidth="1" />

      <rect x="40" y="68" width="14" height="18" rx="2" className="fill-brand-200" />
      <rect x="62" y="60" width="14" height="26" rx="2" className="fill-brand-300" />
      <rect x="84" y="64" width="14" height="22" rx="2" className="fill-brand-400" />
      <rect x="106" y="54" width="14" height="32" rx="2" className="fill-brand-500" />
      <rect x="128" y="48" width="14" height="38" rx="2" className="fill-brand-600" />
      <rect x="150" y="40" width="14" height="46" rx="2" className="fill-accent-500">
        <animate attributeName="height" values="46;52;46" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="y" values="40;34;40" dur="2.6s" repeatCount="indefinite" />
      </rect>

      <path
        d="M48 78 L70 70 L92 74 L114 64 L136 58 L158 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="2 3"
        className="text-accent-500/60"
      >
        <animate attributeName="stroke-dashoffset" values="0;-10" dur="1.4s" repeatCount="indefinite" />
      </path>
      <circle cx="158" cy="50" r="2.5" className="fill-accent-500">
        <animate attributeName="r" values="2.5;4;2.5" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.6;1" dur="2.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
