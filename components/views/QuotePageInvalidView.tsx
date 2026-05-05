import Link from "next/link";
import type { Lang } from "@/lib/i18n";

const strings = {
  en: {
    title: "This quote link is invalid or has expired",
    body: "Quote links are valid for 30 days. Please contact us and we'll send you a fresh link.",
    cta: "Contact us",
    contactPath: "/contact",
  },
  ko: {
    title: "유효하지 않거나 만료된 견적서 링크입니다",
    body: "견적 링크는 30일간 유효합니다. 문의 주시면 새 링크를 보내드리겠습니다.",
    cta: "문의하기",
    contactPath: "/ko/contact",
  },
} as const;

export default function QuotePageInvalidView({ lang }: { lang: Lang }) {
  const t = strings[lang];
  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <div className="mx-auto max-w-md px-6 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">{t.title}</h1>
        <p className="mt-3 text-base text-slate-600">{t.body}</p>
        <Link
          href={t.contactPath}
          className="mt-6 inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
        >
          {t.cta}
        </Link>
      </div>
    </main>
  );
}
