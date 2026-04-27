import Link from "next/link";

export default function CTA() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[32px] bg-ink-900 px-8 py-16 text-center sm:px-16 sm:py-24">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-600 opacity-30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500 opacity-30 blur-3xl"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-400">
            무료 상담
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            오늘 상담, 다음 주에 첫 시안.
            <br />
            지금 시작하세요.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-ink-200 sm:text-lg">
            견적과 일정은 30분 통화로 충분합니다. 부담 없이 문의 남겨주세요.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:bg-accent-500 hover:text-white sm:text-base"
            >
              무료 견적받기 →
            </Link>
            <a
              href="tel:+12057349654"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              205-734-9654 전화 상담
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
