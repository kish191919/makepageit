"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  if (/^\/portfolio\/[^/]+$/.test(pathname ?? "")) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/60 bg-white/80 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-white">
            <span className="text-sm font-black">M</span>
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink-900">
            MAKE<span className="text-brand-600">PAGE</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 lg:gap-7">
          <nav className="hidden items-center gap-7 lg:flex">
            {site.nav.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-ink-700 transition hover:text-brand-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="hidden btn-primary lg:inline-flex">
            무료 견적받기
          </Link>
          <button
            type="button"
            aria-label="메뉴 열기"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200"
          >
            <span className="sr-only">메뉴</span>
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
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-ink-800"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              무료 견적받기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
