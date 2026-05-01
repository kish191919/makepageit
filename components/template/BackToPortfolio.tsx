"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { detectLangFromPath, getDict, localePath } from "@/lib/i18n";

export default function BackToPortfolio() {
  const pathname = usePathname();
  const lang = detectLangFromPath(pathname);
  const dict = getDict(lang);

  return (
    <div className="fixed left-4 top-4 z-[100] sm:left-6 sm:top-6">
      <Link
        href={localePath(lang, "/portfolio")}
        className="flex items-center gap-2 rounded-full bg-ink-900/85 px-4 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-ink-900 sm:text-sm"
      >
        <span aria-hidden>←</span>
        <span className="hidden sm:inline">{dict.backToPortfolio.long}</span>
        <span className="sm:hidden">{dict.backToPortfolio.short}</span>
      </Link>
    </div>
  );
}
