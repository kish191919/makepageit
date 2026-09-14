import SectionHeading from "@/components/SectionHeading";
import { getStats } from "@/lib/data";
import { getDict, type Lang } from "@/lib/i18n";

const ACCENTS = [
  "from-brand-100 to-brand-50",
  "from-accent-400/20 to-accent-500/10",
  "from-brand-100 to-brand-50",
  "from-accent-400/20 to-accent-500/10",
];

function StatCard({ item, index }: { item: { title: string; desc: string }; index: number }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-4 shadow-[0_2px_4px_rgba(15,23,42,0.04),0_14px_32px_-12px_rgba(15,23,42,0.08)] sm:rounded-3xl sm:p-6">
      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${ACCENTS[index % ACCENTS.length]} blur-2xl`}
        aria-hidden
      />
      <div className="relative text-xl font-extrabold text-brand-600 sm:text-3xl">{item.title}</div>
      <p className="relative mt-1 text-xs leading-snug text-ink-500 sm:mt-2 sm:text-sm sm:leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
}

export default function WhyUs({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const trust = getStats(lang).slice(0, 2);
  const items = dict.whyUs.items;

  return (
    <section className="section border-t border-ink-100 bg-white">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {trust.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline gap-1.5 rounded-full border border-ink-100 bg-ink-50/70 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2"
            >
              <span className="text-lg font-extrabold text-brand-600 sm:text-3xl">{s.value}</span>
              <span className="text-xs font-medium text-ink-500 sm:text-sm">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <SectionHeading align="center" eyebrow={dict.whyUs.eyebrow} title={dict.whyUs.title} />
          <p className="lead mx-auto mt-3 hidden max-w-3xl break-keep whitespace-pre-line text-center sm:mt-5 sm:block">
            {dict.whyUs.description}
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
            <StatCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
