"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { detectLangFromPath, getDict, localePath, type Lang } from "@/lib/i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lang: Lang = detectLangFromPath(pathname);
  const dict = getDict(lang);

  if (/^\/(?:ko\/)?portfolio\/[^/]+$/.test(pathname ?? "")) return null;

  const nav = [
    { label: dict.nav.home, href: localePath(lang, "/") },
    { label: dict.nav.portfolio, href: localePath(lang, "/portfolio") },
    { label: dict.nav.pricing, href: localePath(lang, "/pricing") },
    { label: dict.nav.contact, href: localePath(lang, "/contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/60 bg-white/80 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between sm:h-20">
        <Link href={localePath(lang, "/")} className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-white">
            <span className="text-sm font-black">M</span>
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink-900">
            MAKE<span className="text-brand-600">PAGE</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 lg:gap-7">
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-ink-700 transition hover:text-brand-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div
            role="group"
            aria-label={dict.langSwitch.label}
            className="hidden lg:inline-flex items-center gap-0.5 rounded-full border border-ink-200/80 bg-ink-50/60 p-0.5 text-xs font-bold tracking-wide shadow-sm backdrop-blur"
          >
            <Link
              href={lang === "ko" ? pathname ?? "/ko" : swapLocaleInPath(pathname ?? "/", "en", "ko")}
              aria-label={dict.langSwitch.ko}
              aria-current={lang === "ko" ? "page" : undefined}
              className={`relative inline-flex items-center justify-center rounded-full px-3 py-1 transition ${
                lang === "ko"
                  ? "bg-ink-900 text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
                  : "text-ink-500 hover:text-ink-900"
              }`}
            >
              KO
            </Link>
            <Link
              href={lang === "en" ? pathname ?? "/" : swapLocaleInPath(pathname ?? "/", "ko", "en")}
              aria-label={dict.langSwitch.en}
              aria-current={lang === "en" ? "page" : undefined}
              className={`relative inline-flex items-center justify-center rounded-full px-3 py-1 transition ${
                lang === "en"
                  ? "bg-ink-900 text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
                  : "text-ink-500 hover:text-ink-900"
              }`}
            >
              EN
            </Link>
          </div>
          <Link
            href={localePath(lang, "/contact")}
            className="hidden btn-primary lg:inline-flex"
          >
            {dict.cta.quote}
          </Link>
          <button
            type="button"
            aria-label={dict.langSwitch.label}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200"
          >
            <span className="sr-only">menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-200 bg-white lg:hidden">
          <div className="container-custom flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-ink-800"
              >
                {item.label}
              </Link>
            ))}
            <div
              role="group"
              aria-label={dict.langSwitch.label}
              className="my-3 inline-flex items-center gap-0.5 self-start rounded-full border border-ink-200/80 bg-ink-50/60 p-0.5 text-sm font-bold tracking-wide"
            >
              <Link
                href={lang === "ko" ? pathname ?? "/ko" : swapLocaleInPath(pathname ?? "/", "en", "ko")}
                onClick={() => setOpen(false)}
                aria-current={lang === "ko" ? "page" : undefined}
                className={`inline-flex items-center justify-center rounded-full px-4 py-1.5 transition ${
                  lang === "ko"
                    ? "bg-ink-900 text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
                    : "text-ink-500"
                }`}
              >
                KO
              </Link>
              <Link
                href={lang === "en" ? pathname ?? "/" : swapLocaleInPath(pathname ?? "/", "ko", "en")}
                onClick={() => setOpen(false)}
                aria-current={lang === "en" ? "page" : undefined}
                className={`inline-flex items-center justify-center rounded-full px-4 py-1.5 transition ${
                  lang === "en"
                    ? "bg-ink-900 text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
                    : "text-ink-500"
                }`}
              >
                EN
              </Link>
            </div>
            <Link
              href={localePath(lang, "/contact")}
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              {dict.cta.quote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function swapLocaleInPath(pathname: string, from: Lang, to: Lang): string {
  if (from === to) return pathname;
  if (from === "ko") {
    if (pathname === "/ko") return "/";
    if (pathname.startsWith("/ko/")) return pathname.slice(3);
    return pathname;
  }
  // from === "en", to === "ko"
  if (pathname === "/") return "/ko";
  return `/ko${pathname}`;
}
