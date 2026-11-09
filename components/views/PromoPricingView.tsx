import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import PromoPricing from "@/components/sections/PromoPricing";
import { formatUsd, getPromoPlans } from "@/lib/data";
import { getDict, type Lang } from "@/lib/i18n";

type Cell = { value: string; strike?: string };
type Row = { label: string; cells: Cell[]; highlight?: boolean };

function CellValue({ cell, highlight }: { cell: Cell; highlight?: boolean }) {
  return (
    <>
      {cell.strike && (
        <span className="mr-2 whitespace-nowrap font-medium text-ink-400 line-through decoration-accent-500">
          {cell.strike}
        </span>
      )}
      <span className={highlight ? "whitespace-nowrap font-bold text-brand-700" : ""}>{cell.value}</span>
    </>
  );
}

export default function PromoPricingView({ lang }: { lang: Lang }) {
  const t = getDict(lang).promoPricing;
  const plans = getPromoPlans(lang);
  const lowestMonthly = formatUsd(Math.min(...plans.map((p) => p.monthly)));
  const c = t.compare;

  const rows: Row[] = [
    { label: c.labels.audience, cells: plans.map((p) => ({ value: p.audience })) },
    {
      label: c.labels.monthly,
      cells: plans.map((p) => ({
        value: `${formatUsd(p.monthly)}${t.perMonth}`,
        strike: formatUsd(p.regularMonthly),
      })),
      highlight: true,
    },
    {
      label: c.labels.setup,
      cells: plans.map((p) => ({ value: "$0", strike: formatUsd(p.regularSetup) })),
    },
    {
      label: c.labels.afterPromo,
      cells: plans.map((p) => ({ value: c.afterPromoValue(`${formatUsd(p.monthly)}${t.perMonth}`) })),
    },
    {
      label: c.labels.contract,
      cells: plans.map((p) => ({ value: c.contractValue(p.contractMonths) })),
    },
    ...c.rows.map((r) => ({ label: r.item, cells: r.values.map((value) => ({ value })) })),
    {
      label: c.labels.yearTotal,
      cells: plans.map((p) => ({
        value: formatUsd(p.monthly * 12),
        strike: formatUsd(p.regularMonthly * 12),
      })),
      highlight: true,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t.header.eyebrow}
        title={
          <>
            {t.header.titleLine1}
            <br />
            {t.header.titleLine2(lowestMonthly)}
          </>
        }
        description={t.header.description}
      />

      <PromoPricing lang={lang} />

      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading eyebrow={t.allIn.eyebrow} title={t.allIn.title} description={t.allIn.description} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.allIn.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-200/70 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_8px_20px_-12px_rgba(15,23,42,0.10)] sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-xl ring-1 ring-brand-100/60">
                  {item.icon}
                </div>
                <p className="mt-4 text-base font-semibold text-ink-900">{item.title}</p>
                <p className="mt-1.5 break-keep text-sm leading-relaxed text-ink-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-ink-100 bg-ink-50">
        <div className="container-custom">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="mt-3 h-section">{c.title}</h2>

          {/* Mobile: one card per plan */}
          <div className="mt-10 space-y-6 md:hidden">
            {plans.map((plan, i) => (
              <div key={plan.id} className="overflow-hidden rounded-3xl border border-ink-200 bg-white">
                <div className="border-b border-ink-200 bg-ink-50 px-5 py-4">
                  <h3 className="text-sm font-semibold text-ink-900">
                    {plan.name} <span className="font-normal text-ink-500">· {plan.tagline}</span>
                  </h3>
                </div>
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-start justify-between gap-4 border-b border-ink-100 px-5 py-3 text-sm last:border-0 ${
                      row.highlight ? "bg-brand-50/60" : ""
                    }`}
                  >
                    <span
                      className={`min-w-0 flex-1 break-keep font-semibold ${
                        row.highlight ? "text-brand-700" : "text-ink-900"
                      }`}
                    >
                      {row.label}
                    </span>
                    <span className="min-w-0 flex-1 break-keep text-right text-ink-700">
                      <CellValue cell={row.cells[i]} highlight={row.highlight} />
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop: comparison table */}
          <div className="mt-10 hidden overflow-hidden rounded-3xl border border-ink-200 bg-white md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink-200 bg-ink-50 text-left text-ink-700">
                  <th className="px-6 py-4 font-semibold">{c.itemHeader}</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="px-6 py-4 font-semibold">
                      {plan.name} <span className="font-normal text-ink-500">· {plan.tagline}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.label}
                    className={`border-b border-ink-100 last:border-0 ${row.highlight ? "bg-brand-50/60" : ""}`}
                  >
                    <td className={`px-6 py-4 font-semibold ${row.highlight ? "text-brand-700" : "text-ink-900"}`}>
                      {row.label}
                    </td>
                    {row.cells.map((cell, i) => (
                      <td key={plans[i].id} className="px-6 py-4 text-ink-700">
                        <CellValue cell={cell} highlight={row.highlight} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-6 space-y-1 text-xs leading-relaxed text-ink-500 sm:text-sm">
            {c.notes.map((note) => (
              <li key={note} className="break-keep">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA lang={lang} />
    </>
  );
}
