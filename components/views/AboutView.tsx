import PageHeader from "@/components/PageHeader";
import CTA from "@/components/sections/CTA";
import { getStats } from "@/lib/data";
import { getDict, type Lang } from "@/lib/i18n";

export default function AboutView({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const stats = getStats(lang);
  const { values, team, milestones } = dict.about;

  return (
    <>
      <PageHeader
        eyebrow={dict.about.headerEyebrow}
        title={dict.about.headerTitle}
        description={dict.about.headerDescription}
      />

      <section className="section">
        <div className="container-custom grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">{dict.about.promiseEyebrow}</p>
            <h2 className="mt-3 h-section">{dict.about.promiseTitle}</h2>
            <p className="mt-6 lead">{dict.about.promiseBody}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-ink-200 bg-white p-6 transition hover:border-brand-600"
              >
                <h3 className="text-lg font-bold text-ink-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-900 text-white">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-ink-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <p className="eyebrow">{dict.about.teamEyebrow}</p>
          <h2 className="mt-3 h-section">{dict.about.teamTitle}</h2>
          <p className="mt-5 max-w-2xl lead">{dict.about.teamBody}</p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-4 rounded-3xl border border-ink-200 bg-white p-6"
              >
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-brand-50 text-lg font-bold text-brand-600">
                  {m.name[0]}
                </div>
                <div>
                  <p className="text-base font-bold text-ink-900">{m.name}</p>
                  <p className="text-sm text-ink-500">
                    {m.role} · {m.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-custom">
          <p className="eyebrow">{dict.about.timelineEyebrow}</p>
          <h2 className="mt-3 h-section">{dict.about.timelineTitle}</h2>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {milestones.map((m) => (
              <li
                key={m.y}
                className="rounded-3xl border border-ink-200 bg-white p-6"
              >
                <p className="text-2xl font-extrabold text-brand-600">{m.y}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{m.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA lang={lang} />
    </>
  );
}
