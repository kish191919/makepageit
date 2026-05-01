"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { detectLangFromPath, getDict, localePath } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname();
  const lang = detectLangFromPath(pathname);
  const dict = getDict(lang);

  if (/^\/(?:ko\/)?portfolio\/[^/]+$/.test(pathname ?? "")) return null;

  const year = new Date().getFullYear();
  const servicesLinks = [
    { label: dict.nav.home, href: localePath(lang, "/") },
    { label: dict.nav.services, href: localePath(lang, "/services") },
    { label: dict.nav.portfolio, href: localePath(lang, "/portfolio") },
    { label: dict.nav.pricing, href: localePath(lang, "/pricing") },
    { label: dict.nav.reviews, href: localePath(lang, "/reviews") },
  ];
  const companyLinks = [
    { label: dict.nav.about, href: localePath(lang, "/about") },
    { label: dict.nav.contact, href: localePath(lang, "/contact") },
    { label: dict.nav.blog, href: "/ko/blog" },
  ];
  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="container-custom py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href={localePath(lang, "/")} className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-white text-sm font-black">
                M
              </span>
              <span className="text-lg font-extrabold tracking-tight text-ink-900">
                MAKE<span className="text-brand-600">PAGE</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              {dict.footer.description}
            </p>
            <p className="mt-6 text-sm text-ink-500">{dict.footer.businessHours}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink-900">{dict.nav.services}</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              {servicesLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-brand-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink-900">{dict.nav.about}</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-brand-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink-900">{dict.footer.contactHeading}</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneIntl}`} className="hover:text-brand-600">
                  {dict.footer.phoneLabel}
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. {dict.footer.rights}
          </p>
          <div className="flex gap-5">
            <Link href={localePath(lang, "/privacy")} className="hover:text-brand-600">
              {dict.footer.privacy}
            </Link>
            <Link href={localePath(lang, "/terms")} className="hover:text-brand-600">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
