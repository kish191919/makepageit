import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="section bg-ink-50">
      <div className="container-custom">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="서비스"
            title="사장님 사업의 단계마다, 필요한 사이트를 만듭니다"
            description="작은 랜딩페이지부터 쇼핑몰까지. 320개 사이트를 만들며 쌓은 경험으로 가장 효율적인 구조를 제안합니다."
          />
          <Link href="/services" className="btn-outline self-start lg:self-auto">
            전체 서비스 보기
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-600 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl text-brand-600">
                {s.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-brand-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
