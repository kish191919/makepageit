import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/sections/CTA";
import { portfolios } from "@/lib/data";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "메이크페이지가 제작한 브랜드 사이트, 쇼핑몰, 랜딩페이지, 예약 시스템 등 320여 건의 실제 사례.",
};

const categories = ["전체", "브랜딩 사이트", "쇼핑몰", "랜딩페이지", "예약 시스템", "포트폴리오"];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="포트폴리오"
        title="원하시는 스타일, 그대로 만들어 드립니다."
        description="아래 사례 중 마음에 드는 스타일이 있다면 말씀해 주세요. 비즈니스에 꼭 맞는 디자인과 기능으로 새롭게 구현해 드립니다."
        wide
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolios.map((p) => (
              <Link
                key={p.id}
                href={`/portfolio/${p.id}`}
                className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                  <Image
                    src={p.image}
                    alt={p.client}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 opacity-0 transition group-hover:bg-ink-900/40 group-hover:opacity-100">
                    <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink-900 shadow-lg">
                      템플릿 보기 →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {p.category}
                    </span>
                    <span className="text-xs text-ink-400">{p.year}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink-900">{p.client}</h3>
                  <p className="mt-1 text-sm text-ink-500">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-ink-200 px-2 py-0.5 text-[11px] text-ink-500"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-ink-500">
            * 이 페이지에는 일부 사례만 노출되며, 비공개 NDA 프로젝트는 별도 상담 시 안내해드립니다.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
