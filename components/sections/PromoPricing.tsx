import Link from "next/link";
import CheckoutCanceledNotice from "@/components/CheckoutCanceledNotice";
import { BoltIcon, CheckIcon, ClockIcon, LockIcon, ShieldIcon, TagIcon } from "@/components/PricingIcons";
import { formatUsd, getPromoPlans, promoDiscountPercent, type PromoPlan } from "@/lib/data";
import { getDict, localePath, type Lang } from "@/lib/i18n";

function PlanCard({ plan, lang }: { plan: PromoPlan; lang: Lang }) {
  const dict = getDict(lang);
  const t = dict.promoPricing;
  const best = !!plan.best;
  const monthlySave = plan.regularMonthly - plan.monthly;

  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border transition duration-300 ${
        best
          ? "border-white/10 bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_25px_50px_-12px_rgba(0,0,0,0.6)]"
          : "border-brand-200 bg-white text-ink-900 shadow-[0_8px_24px_-14px_rgba(79,70,229,0.22)] hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_4px_8px_rgba(15,23,42,0.06),0_24px_48px_-16px_rgba(79,70,229,0.20)]"
      }`}
    >
      {best && plan.badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-5 py-1.5 text-sm font-bold uppercase tracking-[0.15em] text-brand-700 shadow-[0_4px_12px_rgba(0,0,0,0.18)] sm:text-base">
          {plan.badge}
        </span>
      )}

      <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6">
        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_4px_12px_-2px_rgba(234,88,12,0.55)] ring-1 ring-inset ring-white/40 sm:text-sm">
          <TagIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          {promoDiscountPercent(plan)}% OFF
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-7 sm:p-9">
        <h3
          className={`pr-24 text-2xl font-extrabold uppercase tracking-[0.15em] sm:pr-28 sm:text-3xl ${
            best ? "text-accent-400" : "text-brand-700"
          }`}
        >
          {plan.name}
        </h3>
        <p className={`mt-1 text-sm font-semibold ${best ? "text-white/70" : "text-ink-500"}`}>
          {plan.tagline}
        </p>

        <p className={`mt-6 break-keep text-base font-semibold ${best ? "text-white" : "text-ink-900"}`}>
          {plan.audience}
        </p>

        <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1.5">
          <span
            className={`text-xl font-semibold line-through decoration-2 sm:text-2xl ${
              best ? "text-white/55 decoration-accent-300" : "text-ink-400 decoration-accent-500"
            }`}
          >
            {formatUsd(plan.regularMonthly)}
          </span>
          <span className={`text-5xl font-extrabold tracking-tight sm:text-6xl ${best ? "text-white" : "text-ink-900"}`}>
            {formatUsd(plan.monthly)}
          </span>
          <span className={`text-base font-semibold ${best ? "text-white/80" : "text-ink-500"}`}>
            {t.perMonth}
          </span>
        </div>
        <p className={`mt-2 break-keep text-sm ${best ? "text-white/75" : "text-ink-500"}`}>{t.allInclusive}</p>
        <p
          className={`mt-1.5 flex items-center gap-1.5 break-keep text-xs font-semibold ${
            best ? "text-white/80" : "text-ink-700"
          }`}
        >
          <LockIcon className={`h-3.5 w-3.5 flex-none ${best ? "text-accent-300" : "text-accent-500"}`} />
          {t.contractNote(plan.contractMonths)} · {t.promo.rateLock}
        </p>
        <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white shadow-[0_2px_8px_-1px_rgba(234,88,12,0.5)] sm:text-sm">
          {t.saveLabel(formatUsd(monthlySave), formatUsd(monthlySave * 12))}
        </span>

        <div
          className={`mt-6 rounded-2xl border px-4 py-3.5 ${
            best ? "border-white/15 bg-white/10" : "border-ink-100 bg-ink-50"
          }`}
        >
          <p className={`text-xs font-bold uppercase tracking-wide ${best ? "text-white/70" : "text-brand-700"}`}>
            {t.includedTitle}
          </p>
          <ul className="mt-2.5 space-y-2 text-sm">
            <li className="flex items-baseline justify-between gap-3">
              <span className={best ? "text-white/90" : "text-ink-700"}>{t.setupFee}</span>
              <span className="whitespace-nowrap">
                <span className={`mr-1.5 line-through ${best ? "text-white/50" : "text-ink-400"}`}>
                  {formatUsd(plan.regularSetup)}
                </span>
                <span className={`font-bold ${best ? "text-white" : "text-brand-700"}`}>$0</span>
              </span>
            </li>
            {t.includedItems.map((item) => (
              <li key={item} className="flex items-baseline justify-between gap-3">
                <span className={best ? "text-white/90" : "text-ink-700"}>{item}</span>
                <span className={`whitespace-nowrap font-bold ${best ? "text-white" : "text-brand-700"}`}>
                  {t.includedValue}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-7 flex-1 space-y-4 text-sm">
          {plan.features.map((f) => {
            const label = typeof f === "string" ? f : f.text;
            const sub = typeof f === "string" ? undefined : f.sub;
            return (
              <li key={label} className={`flex items-start gap-2.5 leading-relaxed ${best ? "" : "text-ink-700"}`}>
                <span
                  className={`mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full ${
                    best ? "bg-white text-brand-600" : "bg-brand-600 text-white"
                  }`}
                >
                  <CheckIcon />
                </span>
                <span>
                  <span className="block font-medium">{label}</span>
                  {sub && (
                    <span className={`mt-0.5 block text-xs font-normal ${best ? "text-white/60" : "text-ink-400"}`}>
                      {sub}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>

        <Link
          href={localePath(lang, "/contact")}
          className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition sm:text-base ${
            best ? "bg-white text-brand-700 hover:bg-brand-50" : "bg-brand-900 text-white hover:bg-brand-700"
          }`}
        >
          {dict.pricing.quoteCta}
        </Link>
      </div>
    </article>
  );
}

export default function PromoPricing({
  lang,
  variant = "page",
}: {
  lang: Lang;
  /** "home" adds the section eyebrow and a link to the full pricing page. */
  variant?: "page" | "home";
}) {
  const dict = getDict(lang);
  const t = dict.promoPricing;
  const plans = getPromoPlans(lang);
  const maxPercent = Math.max(...plans.map(promoDiscountPercent));

  return (
    <section className="section relative overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-grid opacity-40 [background-size:26px_26px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black,transparent)]" />
      </div>
      <div className="container-custom relative z-10">
        {variant === "page" && <CheckoutCanceledNotice message={dict.pricing.canceledNotice} />}
        {variant === "home" && (
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            {t.eyebrow}
          </p>
        )}

        <div className={`mx-auto max-w-4xl ${variant === "home" ? "mt-6" : ""}`}>
          <div className="rounded-3xl border border-white/10 bg-ink-800 px-6 py-8 text-center sm:px-10 sm:py-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-accent-400 ring-1 ring-inset ring-accent-500/30 sm:text-sm">
              <TagIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              {t.promo.badge}
            </span>
            <p className="mt-4 break-keep text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.promo.headline.pre}
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              <span className="text-accent-400">{t.promo.headline.highlight(maxPercent)}</span>
            </p>
            <p className="mt-3 whitespace-pre-line break-keep text-base text-white/60 sm:whitespace-normal sm:text-lg">
              {t.promo.sub}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {[
                { Icon: BoltIcon, text: t.promo.setupFree },
                { Icon: ShieldIcon, text: t.promo.noHiddenFees },
                { Icon: LockIcon, text: t.promo.rateLock },
                { Icon: ClockIcon, text: t.promo.deadline },
              ].map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink-700 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-inset ring-white/10 sm:text-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-accent-400" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-12 md:grid-cols-2 md:gap-6">
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} lang={lang} />
          ))}
        </div>

        {variant === "home" && (
          <div className="mt-10 text-center">
            <Link
              href={localePath(lang, "/pricing")}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              {t.seeDetails}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
