import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/sections/CTA";
import { reviews, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "제작 후기",
  description:
    "메이크페이지와 함께한 사장님들의 진짜 이야기. 매출·문의·운영시간이 어떻게 달라졌는지 확인해보세요.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="제작 후기"
        title="결과로 증명합니다."
        description="만족도 4.9 / 5, 재의뢰율 98%. 사장님들이 직접 들려주신 이야기."
      />

      <section className="border-b border-ink-200 bg-white py-12">
        <div className="container-custom grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2">
            {reviews.map((r) => (
              <article
                key={r.id}
                className="flex h-full flex-col rounded-3xl border border-ink-200 bg-white p-8"
              >
                <div className="flex gap-0.5 text-accent-500">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink-900">{r.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink-700">
                  “{r.body}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-ink-200 pt-5">
                  <Image
                    src={r.avatar}
                    alt={r.client}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base font-bold text-ink-900">{r.client}</p>
                    <p className="text-sm text-ink-500">{r.industry}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
