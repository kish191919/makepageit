import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { plans } from "@/lib/data";

export default function Pricing() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-ink-50 to-white">
      <div className="pointer-events-none absolute -right-32 top-24 hidden h-[400px] w-[400px] rounded-full bg-accent-400 opacity-20 blur-3xl md:block" />
      <div className="pointer-events-none absolute -left-32 bottom-16 hidden h-[420px] w-[420px] rounded-full bg-brand-200 opacity-30 blur-3xl md:block" />

      <div className="container-custom relative z-10">
        <SectionHeading
          align="center"
          eyebrow="가격 안내"
          title={
            <>
              명확한 일회성 + 월 구독,
              <br />
              1년 비용까지 한눈에
            </>
          }
          description={
            <>
              모든 패키지는 도메인·호스팅·기본 SEO·SSL·모바일 반응형을 포함합니다.
              <br />
              비상업 개인은 호스팅·DB가 무료입니다.
            </>
          }
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <article
              key={p.id}
              className={`relative flex flex-col rounded-3xl border p-8 transition ${
                p.best
                  ? "border-ink-900 bg-ink-900 text-white shadow-2xl lg:scale-[1.03]"
                  : "border-ink-200 bg-white text-ink-900 hover:border-brand-600"
              }`}
            >
              {p.best && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  {p.badge ?? "BEST CHOICE"}
                </span>
              )}
              <h3
                className={`text-sm font-bold uppercase tracking-[0.25em] ${
                  p.best ? "text-accent-400" : "text-brand-600"
                }`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-2 text-xs font-semibold uppercase tracking-wider ${
                  p.best ? "text-ink-300" : "text-ink-400"
                }`}
              >
                {p.audience}
              </p>
              <p
                className={`mt-3 text-sm ${p.best ? "text-ink-200" : "text-ink-500"}`}
              >
                {p.description}
              </p>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold sm:text-5xl">
                    {p.pricing.oneTime}
                  </span>
                  <span
                    className={`text-sm ${p.best ? "text-ink-200" : "text-ink-500"}`}
                  >
                    {p.pricing.oneTimeNote}
                  </span>
                </div>
                <div
                  className={`mt-3 space-y-1 text-sm ${
                    p.best ? "text-ink-200" : "text-ink-600"
                  }`}
                >
                  <p>
                    <span className="font-semibold">+ {p.pricing.monthly} / 월</span>
                    <span className={p.best ? "text-ink-300" : "text-ink-500"}>
                      {" "}· {p.pricing.monthlyNote}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">+ {p.pricing.annual} / 년</span>
                    <span className={p.best ? "text-ink-300" : "text-ink-500"}>
                      {" "}· {p.pricing.annualNote}
                    </span>
                  </p>
                </div>
              </div>

              <div
                className={`mt-5 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold ${
                  p.best
                    ? "bg-accent-500/20 text-white ring-1 ring-accent-400"
                    : "bg-brand-50 text-ink-900 ring-1 ring-brand-100"
                }`}
              >
                <span className={p.best ? "text-ink-200" : "text-ink-600"}>
                  📊 1년 총 예상비용
                </span>
                <span
                  className={`text-lg font-extrabold ${
                    p.best ? "text-accent-400" : "text-brand-600"
                  }`}
                >
                  {p.pricing.yearTotal}
                </span>
              </div>

              <div
                className={`mt-2 flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm ${
                  p.best
                    ? "bg-white/5 text-ink-200 ring-1 ring-white/10"
                    : "bg-brand-50/60 text-ink-600 ring-1 ring-brand-100/70"
                }`}
              >
                <span>📈 2년차부터 매년 예상비용</span>
                <span
                  className={`text-base font-bold ${
                    p.best ? "text-accent-400" : "text-brand-600"
                  }`}
                >
                  {p.pricing.yearlyAfter}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full ${
                        p.best ? "bg-accent-500 text-white" : "bg-brand-100 text-brand-600"
                      }`}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                  p.best
                    ? "bg-white text-ink-900 hover:bg-accent-500 hover:text-white"
                    : "bg-ink-900 text-white hover:bg-brand-600"
                }`}
              >
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
