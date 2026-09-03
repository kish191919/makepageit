import SectionHeading from "@/components/SectionHeading";
import { getStats } from "@/lib/data";
import { getDict, type Lang } from "@/lib/i18n";

export default function WhyUs({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const trust = getStats(lang).slice(0, 2);
  const items = dict.whyUs.items;

  return (
    <section className="section border-t border-ink-100 bg-white">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trust.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-ink-900 sm:text-3xl">{s.value}</span>
              <span className="text-sm font-medium text-ink-500">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <SectionHeading
            align="center"
            eyebrow={dict.whyUs.eyebrow}
            title={dict.whyUs.title}
            description={dict.whyUs.description}
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-ink-100 bg-ink-50/60 p-6 shadow-[0_2px_4px_rgba(15,23,42,0.04),0_14px_32px_-12px_rgba(15,23,42,0.08)]"
            >
              <div className="text-2xl font-extrabold text-brand-600 sm:text-3xl">{item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
