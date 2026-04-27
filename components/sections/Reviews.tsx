import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { reviews } from "@/lib/data";

export default function Reviews({ limit = 3 }: { limit?: number }) {
  const items = reviews.slice(0, limit);
  return (
    <section className="section bg-ink-50">
      <div className="container-custom">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="제작 후기"
            title="결과로 증명합니다"
            description="설문 평균 4.9 / 5. 사장님들이 직접 들려주신 이야기."
          />
          <Link href="/reviews" className="btn-outline self-start lg:self-auto">
            모든 후기 보기
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((r) => (
            <article
              key={r.id}
              className="flex h-full flex-col rounded-3xl border border-ink-200 bg-white p-7"
            >
              <div className="flex gap-0.5 text-accent-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink-900">{r.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                “{r.body}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-200 pt-5">
                <Image
                  src={r.avatar}
                  alt={r.client}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-ink-900">{r.client}</p>
                  <p className="text-xs text-ink-500">{r.industry}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
