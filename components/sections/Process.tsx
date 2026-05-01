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

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-ink-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-600 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-brand-600">{s.n}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                    STEP
                  </span>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-xl">
                  {s.icon}
                </div>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-600">{s.subtitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.body}</p>
              {i < steps.length - 1 && (
                <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-ink-200 lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
