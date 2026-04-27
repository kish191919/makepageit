type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  wide?: boolean;
};

export default function PageHeader({ eyebrow, title, description, wide }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 bg-ink-50">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-hero-grid [background-size:24px_24px] opacity-50"
      />
      <div className="container-custom py-16 sm:py-24">
        <div className={wide ? "max-w-3xl lg:max-w-none" : "max-w-3xl"}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className={`mt-3 h-display break-keep ${wide ? "lg:whitespace-nowrap" : ""}`}>
            {title}
          </h1>
          {description && (
            <p className={`mt-6 lead break-keep ${wide ? "lg:whitespace-nowrap" : ""}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
