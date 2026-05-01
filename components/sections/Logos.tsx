import { getLogos } from "@/lib/data";
import { getDict, type Lang } from "@/lib/i18n";

export default function Logos({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const clients = getLogos(lang);

  return (
    <section className="border-y border-ink-200 bg-white py-10">
      <div className="container-custom">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-400">
          {dict.logos.eyebrow}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <div
              key={c}
              className="flex h-10 items-center justify-center text-sm font-semibold text-ink-400 transition hover:text-ink-700"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
