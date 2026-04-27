"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export default function Footer() {
  const pathname = usePathname();
  if (/^\/portfolio\/[^/]+$/.test(pathname ?? "")) return null;
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="container-custom py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-white text-sm font-black">
                M
              </span>
              <span className="text-lg font-extrabold tracking-tight text-ink-900">
                MAKE<span className="text-brand-600">PAGE</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              {site.description}
            </p>
            <p className="mt-6 text-sm text-ink-500">{site.businessHours}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink-900">연락처</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-brand-600">
                  대표 {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-brand-600">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-brand-600">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
