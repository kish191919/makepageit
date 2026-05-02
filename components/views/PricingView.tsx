import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/sections/Pricing";
import { getDict, type Lang } from "@/lib/i18n";

export default function PricingView({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const compare = dict.pricing.compare;
  const [titleFirst, titleSecond] = dict.pricingPlans.headerTitle.split(/\.\s+/);

  return (
    <>
      <PageHeader
        eyebrow={dict.pricingPlans.eyebrow}
        title={
          <>
            {titleFirst}.<br className="md:hidden" /> {titleSecond}
          </>
        }
        description={dict.pricingPlans.headerDescription}
      />

      <Pricing lang={lang} hideHeading />

      <section className="section bg-ink-50">
        <div className="container-custom">
          <p className="eyebrow">{compare.eyebrow}</p>
          <h2 className="mt-3 h-section">{compare.title}</h2>

          {(() => {
            const yearTotalLabel = lang === "en" ? "First-year total" : "1년 총 예상비용";
            const packages = [
              { key: "lite" as const, label: compare.headers.lite },
              { key: "pro" as const, label: compare.headers.pro },
            ];

            return (
              <>
                <div className="mt-10 space-y-6 md:hidden">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.key}
                      className="overflow-hidden rounded-3xl border border-ink-200 bg-white"
                    >
                      <div className="border-b border-ink-200 bg-ink-50 px-5 py-4">
                        <h3 className="text-sm font-semibold text-ink-900">{pkg.label}</h3>
                      </div>
                      <div>
                        {compare.rows.map((row) => {
                          const isYearTotal = row.item === yearTotalLabel;
                          const isSub = row.isSub;
                          return (
                            <div
                              key={row.item}
                              className={`flex items-start justify-between gap-4 border-b border-ink-100 px-5 py-3 text-sm last:border-0 ${
                                isYearTotal ? "bg-brand-50/60" : ""
                              } ${isSub ? "bg-ink-50/40" : ""}`}
                            >
                              <span
                                className={`${isSub ? "pl-6" : ""} ${
                                  isYearTotal
                                    ? "font-bold text-brand-700"
                                    : isSub
                                    ? "font-normal text-ink-700"
                                    : "font-semibold text-ink-900"
                                }`}
                              >
                                {row.item}
                              </span>
                              <span
                                className={`text-right ${
                                  isYearTotal
                                    ? "font-bold text-brand-700"
                                    : isSub
                                    ? "text-ink-800"
                                    : "text-ink-700"
                                }`}
                              >
                                {row[pkg.key]}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 hidden rounded-3xl border border-ink-200 bg-white md:block">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-ink-200 bg-ink-50 text-left text-ink-700">
                        <th className="px-6 py-4 font-semibold">{compare.headers.item}</th>
                        <th className="px-6 py-4 font-semibold">{compare.headers.lite}</th>
                        <th className="px-6 py-4 font-semibold">{compare.headers.pro}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compare.rows.map((row) => {
                        const isYearTotal = row.item === yearTotalLabel;
                        const isSub = row.isSub;
                        return (
                          <tr
                            key={row.item}
                            className={`border-b border-ink-100 last:border-0 ${
                              isYearTotal ? "bg-brand-50/60" : ""
                            } ${isSub ? "bg-ink-50/40" : ""}`}
                          >
                            <td
                              className={`py-4 ${
                                isSub ? "pl-12 pr-6 font-medium text-ink-800" : "px-6 font-semibold text-ink-900"
                              } ${isYearTotal ? "text-brand-700" : ""}`}
                            >
                              {row.item}
                            </td>
                            <td
                              className={`px-6 py-4 ${
                                isYearTotal
                                  ? "font-bold text-brand-700"
                                  : isSub
                                  ? "text-ink-800"
                                  : "text-ink-700"
                              }`}
                            >
                              {row.lite}
                            </td>
                            <td
                              className={`px-6 py-4 ${
                                isYearTotal
                                  ? "font-bold text-brand-700"
                                  : isSub
                                  ? "text-ink-800"
                                  : "text-ink-700"
                              }`}
                            >
                              {row.pro}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            );
          })()}
        </div>
      </section>
    </>
  );
}
