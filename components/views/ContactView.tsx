import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export default function ContactView({ lang }: { lang: Lang }) {
  const dict = getDict(lang);

  const contactInfo = [
    { label: dict.contact.info.email, value: site.email, href: `mailto:${site.email}` },
    { label: dict.contact.info.phone, value: site.phone, href: `tel:${site.phoneIntl}` },
  ];

  return (
    <>
      <PageHeader
        eyebrow={dict.contact.headerEyebrow}
        title={dict.contact.headerTitle}
        description={dict.contact.headerDescription}
      />

      <section className="section">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">{dict.contact.directContactTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {dict.contact.directContactBody}
              </p>
            </div>

            <ul className="divide-y divide-ink-200 rounded-3xl border border-ink-200 bg-white">
              {contactInfo.map((c) => (
                <li key={c.label} className="px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                    {c.label}
                  </p>
                  <a
                    href={c.href}
                    className="mt-1 block text-base font-bold text-ink-900 hover:text-brand-600"
                  >
                    {c.value}
                  </a>
                </li>
              ))}
            </ul>

            <div className="rounded-3xl bg-ink-900 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                {dict.contact.recommendedTitle}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-200">
                {dict.contact.recommended.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </aside>

          <ContactForm lang={lang} />
        </div>
      </section>
    </>
  );
}
