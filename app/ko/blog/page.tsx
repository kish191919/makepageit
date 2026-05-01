import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "블로그",
  description:
    "사장님께 도움 되는 홈페이지·SEO·디지털 마케팅 인사이트. 메이크페이지가 정리한 실전 가이드.",
  alternates: { languages: { ko: "/ko/blog" } },
};

const categories = ["전체", "비즈니스", "기획", "SEO", "사례", "가이드", "운영"];

export default function BlogPage() {
  const [feature, ...rest] = posts;
  return (
    <>
      <PageHeader
        eyebrow="블로그"
        title="사장님이 가장 먼저 알아야 할 것들."
        description="홈페이지 제작, SEO, 마케팅 — 320개 사이트를 만들며 검증된 인사이트를 정기적으로 발행합니다."
      />

      <section className="section">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  i === 0
                    ? "bg-ink-900 text-white"
                    : "border border-ink-200 text-ink-700 hover:border-ink-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {feature && (
            <Link
              href={`/ko/blog/${feature.slug}`}
              className="mt-12 grid overflow-hidden rounded-[32px] border border-ink-200 bg-white transition hover:border-brand-600 lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <Image
                  src={feature.cover}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 self-start">
                  {feature.category}
                </span>
                <h2 className="mt-5 text-2xl font-bold text-ink-900 sm:text-3xl">
                  {feature.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-500">
                  {feature.excerpt}
                </p>
                <p className="mt-6 text-sm text-ink-400">
                  {feature.date} · {feature.readingTime} 분량
                </p>
              </div>
            </Link>
          )}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/ko/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {p.category}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-500">{p.excerpt}</p>
                  <p className="mt-5 text-xs text-ink-400">
                    {p.date} · {p.readingTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
