import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { getReviews } from "@/lib/data";
import { getDict, type Lang } from "@/lib/i18n";

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-hidden className="text-accent-500">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
}

export default function Reviews({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const items = getReviews(lang).slice(0, 6);

  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading
          align="center"
          eyebrow={dict.reviews.eyebrow}
          title={dict.reviews.title}
          description={dict.reviews.description}
        />

        <div className="mt-11 grid gap-6 sm:grid-cols-3">
          {items.map((r) => (
            <div key={r.id} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink-200">
              <Stars rating={r.rating} />
              <p className="mt-3 text-base font-bold text-ink-900">{r.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{r.body}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-ink-100">
                  <Image src={r.avatar} alt={r.client} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{r.client}</p>
                  <p className="text-xs text-ink-500">{r.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
