import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "브랜딩 사이트, 쇼핑몰, 랜딩페이지, 예약·멤버십, 리뉴얼·유지보수, 마케팅 운영까지 — 메이크페이지의 6가지 핵심 서비스.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="서비스"
        title="사장님 사업의 단계마다, 필요한 사이트를 만듭니다."
        description="아이디어만 있는 단계부터, 매출이 자라고 있는 단계까지. 그때그때 가장 적합한 도구를 제공합니다."
      />

      <section className="section">
        <div className="container-custom space-y-12">
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-600">
                  {s.icon}
                </span>
                <h2 className="mt-5 text-3xl font-bold text-ink-900 sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 lead">{s.summary}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-600" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary mt-8">
                  이 서비스 문의하기
                </Link>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 via-white to-accent-400/30">
                <div className="absolute inset-0 bg-hero-grid [background-size:18px_18px] opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl text-brand-600 sm:text-8xl">{s.icon}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
