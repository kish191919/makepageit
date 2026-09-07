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
    <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-[0_2px_4px_rgba(15,23,42,0.04),0_14px_32px_-12px_rgba(15,23,42,0.08)]">
      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${ACCENTS[index % ACCENTS.length]} blur-2xl`}
        aria-hidden
      />
      <div className="relative text-2xl font-extrabold text-brand-600 sm:text-3xl">{item.title}</div>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{item.desc}</p>
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
        <div className="flex flex-wrap items-center justify-center gap-3">
          {trust.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline gap-2 rounded-full border border-ink-100 bg-ink-50/70 px-4 py-2"
            >
              <span className="text-2xl font-extrabold text-brand-600 sm:text-3xl">{s.value}</span>
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

        <div className="mx-auto mt-12 hidden max-w-5xl gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <StatCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <div
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:hidden [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item, index) => (
            <div key={item.title} className="shrink-0 basis-[80%] snap-center">
              <StatCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
