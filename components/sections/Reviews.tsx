import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { getReviews, type Review } from "@/lib/data";
import { getDict, type Lang } from "@/lib/i18n";

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-hidden className="text-accent-500">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink-200">
      <Stars rating={review.rating} />
      <p className="mt-3 text-base font-bold text-ink-900">{review.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{review.body}</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-ink-100">
          <Image src={review.avatar} alt={review.client} fill sizes="40px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">{review.client}</p>
          <p className="text-xs text-ink-500">{review.industry}</p>
        </div>
      </div>
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

        <div className="mt-11 hidden gap-6 sm:grid sm:grid-cols-3">
          {items.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>

        <div className="mt-11 overflow-hidden sm:hidden">
          <div className="flex w-max animate-marquee-ltr gap-6 motion-reduce:animate-none">
            {[...items, ...items].map((r, i) => (
              <div key={`${r.id}-${i}`} className="w-72 shrink-0">
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
