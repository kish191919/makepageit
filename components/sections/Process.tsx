import SectionHeading from "@/components/SectionHeading";
import { getDict, type Lang } from "@/lib/i18n";

export default function Process({ lang }: { lang: Lang }) {
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

          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <article
                key={s.n}
                className="group relative flex flex-col rounded-3xl border border-ink-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
              >
                <div className="relative h-28 overflow-hidden rounded-2xl border border-ink-100 bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
                  <StepMockup index={i} />
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white shadow-sm shadow-brand-600/20">
                    {s.n}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                    STEP
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-ink-900 md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand-600">
                  {s.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {s.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-ink-100">
                  {s.meta.map((m, idx) => (
                    <span
                      key={m}
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                        idx === 0
                          ? "bg-brand-50 text-brand-700"
                          : "bg-ink-50 text-ink-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          idx === 0 ? "bg-brand-500" : "bg-ink-400"
                        }`}
                      />
                      {m}
                    </span>
                  ))}
                </div>
              </article>
            ))}
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
          className="text-brand-300"
        />
      </svg>
      <ConnectorArrow leftPercent="25%" tone="brand" />
      <ConnectorArrow leftPercent="50%" tone="brand" />
      <ConnectorArrow leftPercent="75%" tone="accent" />
    </div>
  );
}

function ConnectorArrow({
  leftPercent,
  tone,
}: {
  leftPercent: string;
  tone: "brand" | "accent";
}) {
  const color = tone === "accent" ? "text-accent-500" : "text-brand-400";
  return (
    <span
      className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 ${color}`}
      style={{ left: leftPercent }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="8" className="fill-white" />
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M6.5 5 L9.5 8 L6.5 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
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
      <circle cx="32" cy="31" r="4" className="fill-brand-300" />
      <rect x="42" y="27" width="50" height="3" rx="1.5" className="fill-ink-200" />
      <rect x="42" y="33" width="80" height="3" rx="1.5" className="fill-ink-100" />

      <rect x="100" y="56" width="120" height="26" rx="13" className="fill-brand-600" />
      <rect x="112" y="65" width="60" height="3" rx="1.5" className="fill-white/80" />
      <rect x="112" y="71" width="90" height="3" rx="1.5" className="fill-white/50" />

      <g transform="translate(190 18)">
        <circle cx="12" cy="12" r="12" className="fill-accent-500" />
        <path
          d="M12 7 L12 12 L15.5 14"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
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
      <rect x="156" y="76" width="52" height="18" rx="3" className="fill-brand-100" stroke="#6366F1" strokeWidth="1.2" />

      <g transform="translate(168 80)">
        <path
          d="M0 0 L0 14 L4 11 L7 18 L10 17 L7 10 L12 10 Z"
          className="fill-accent-500"
          stroke="white"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
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
        <path d="M11 10 L13 12 L17 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="24" y="8" width="28" height="4" rx="2" className="fill-brand-600/80" />
      </g>
      <g transform="translate(96 48)">
        <rect width="58" height="20" rx="10" className="fill-brand-50" />
        <circle cx="14" cy="10" r="6" className="fill-brand-600" />
        <path d="M11 10 L13 12 L17 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="24" y="8" width="28" height="4" rx="2" className="fill-brand-600/80" />
      </g>
      <g transform="translate(160 48)">
        <rect width="58" height="20" rx="10" className="fill-accent-500" />
        <circle cx="14" cy="10" r="6" className="fill-white" />
        <path d="M11 10 L13 12 L17 8" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
      <rect x="150" y="40" width="14" height="46" rx="2" className="fill-accent-500" />

      <path
        d="M48 78 L70 70 L92 74 L114 64 L136 58 L158 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="2 3"
        className="text-accent-500/60"
      />
      <circle cx="158" cy="50" r="2.5" className="fill-accent-500" />
    </svg>
  );
}
