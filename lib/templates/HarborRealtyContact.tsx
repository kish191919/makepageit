"use client";

import { useState } from "react";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "HARBOR & VALE", tag: "REALTY" },
    nav: { listings: "Listings", neighborhoods: "Neighborhoods", sell: "Sell With Us", agents: "Agents", contact: "Contact" },
    bookCta: "Schedule a Showing",
    eyebrow: "GET IN TOUCH",
    title: ["Curious what your", "home is worth?"],
    body: "Request a complimentary valuation or schedule a private tour — our team typically responds within a few hours.",
    rows: [
      { label: "CALL", value: "(203) 555-0142" },
      { label: "EMAIL", value: "hello@harborandvale.com" },
      { label: "OFFICE", value: "48 Harbor Street, Suite 2, Millbrook Harbor, CT 06355" },
    ],
    mapQuery: "48 Harbor Street, Millbrook Harbor, CT 06355",
    formTitle: "Request a Free Home Valuation",
    formNote: "An agent will follow up within one business day.",
    placeholders: {
      name: "Full name",
      phone: "Phone number",
      interest: { default: "I'm interested in...", buying: "Buying", selling: "Selling", both: "Both" },
      message: "Tell us about your home or your search",
    },
    submit: "Request Valuation",
    submitting: "Sending...",
    successTitle: "Request received.",
    successBody: "An agent will follow up within one business day. Need it sooner? Call (203) 555-0142.",
    footer: "© 2025 Harbor & Vale Realty. Equal Housing Opportunity.",
  },
  ko: {
    brand: { name: "하버앤베일", tag: "부동산" },
    nav: { listings: "매물", neighborhoods: "지역 안내", sell: "매도 상담", agents: "에이전트", contact: "문의" },
    bookCta: "쇼잉 예약하기",
    eyebrow: "문의하기",
    title: ["내 집의 가치가", "궁금하신가요?"],
    body: "무료 가치평가를 요청하거나 프라이빗 투어를 예약해보세요. 대부분 몇 시간 내로 답변드립니다.",
    rows: [
      { label: "CALL", value: "(203) 555-0142" },
      { label: "EMAIL", value: "hello@harborandvale.com" },
      { label: "OFFICE", value: "48 Harbor Street, Suite 2, Millbrook Harbor, CT 06355" },
    ],
    mapQuery: "48 Harbor Street, Millbrook Harbor, CT 06355",
    formTitle: "무료 가치평가 신청",
    formNote: "영업일 기준 1일 이내 에이전트가 연락드립니다.",
    placeholders: {
      name: "성함",
      phone: "연락처",
      interest: { default: "희망 사항을 선택하세요", buying: "매수", selling: "매도", both: "매수·매도 모두" },
      message: "보유하신 매물 또는 찾으시는 조건을 알려주세요",
    },
    submit: "가치평가 신청하기",
    submitting: "접수 중...",
    successTitle: "가치평가 신청이 접수되었습니다",
    successBody: "영업일 기준 1일 이내 에이전트가 연락드립니다. 급하신 경우 (203) 555-0142로 전화 주세요.",
    footer: "© 2025 하버앤베일 부동산. Equal Housing Opportunity.",
  },
} as const;

export default function HarborRealtyContact({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/harbor-realty");
  const navPaths = {
    listings: localePath(lang, "/portfolio/harbor-realty/listings"),
    neighborhoods: localePath(lang, "/portfolio/harbor-realty/neighborhoods"),
    sell: localePath(lang, "/portfolio/harbor-realty/sell"),
    agents: localePath(lang, "/portfolio/harbor-realty/agents"),
    contact: localePath(lang, "/portfolio/harbor-realty/contact"),
  } as const;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleValuationSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <div className="bg-[#faf7f2] text-[#1c3829]">
      <header ref={ref} className="border-b border-[#1c3829]/10 bg-[#faf7f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c3829] font-serif text-base text-[#faf7f2]">
              H
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#1c3829]/60">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#1c3829]/80 md:flex">
            <Link href={navPaths.listings}>{t.nav.listings}</Link>
            <Link href={navPaths.neighborhoods}>{t.nav.neighborhoods}</Link>
            <Link href={navPaths.sell}>{t.nav.sell}</Link>
            <Link href={navPaths.agents}>{t.nav.agents}</Link>
            <Link href={navPaths.contact} className="font-semibold">{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={navPaths.contact}
              className="hidden rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white sm:inline-block"
            >
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1c3829]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#1c3829]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#1c3829]/80">
              <Link href={navPaths.listings} onClick={() => setOpen(false)} className="py-2">{t.nav.listings}</Link>
              <Link href={navPaths.neighborhoods} onClick={() => setOpen(false)} className="py-2">{t.nav.neighborhoods}</Link>
              <Link href={navPaths.sell} onClick={() => setOpen(false)} className="py-2">{t.nav.sell}</Link>
              <Link href={navPaths.agents} onClick={() => setOpen(false)} className="py-2">{t.nav.agents}</Link>
              <Link href={navPaths.contact} onClick={() => setOpen(false)} className="py-2 font-semibold">{t.nav.contact}</Link>
            </nav>
            <Link
              href={navPaths.contact}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#b08d57] px-5 py-2.5 text-xs font-semibold tracking-widest text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#b08d57]">{t.eyebrow}</p>
            <h1 className="mt-3 font-serif text-3xl leading-tight md:text-5xl break-keep text-balance">
              {t.title[0]}
              <br className="hidden md:block" />
              {t.title[1]}
            </h1>
            <p className="mt-6 leading-relaxed text-[#1c3829]/70 break-keep text-pretty">{t.body}</p>
            <dl className="mt-10 space-y-3 border-t border-[#1c3829]/10 pt-8 text-sm">
              {t.rows.map((r) => (
                <div key={r.label} className="flex gap-6">
                  <dt className="w-24 font-semibold tracking-widest text-[#1c3829]/60">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 aspect-video overflow-hidden rounded-sm border border-[#1c3829]/10">
              <iframe
                title={t.rows[2].value}
                src={`https://www.google.com/maps?q=${encodeURIComponent(t.mapQuery)}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          {submitted ? (
            <div className="rounded-sm bg-[#1c3829] p-6 text-white sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b08d57] text-xl">✓</div>
              <h2 className="mt-6 font-serif text-2xl break-keep text-balance">{t.successTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 break-keep text-pretty">{t.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleValuationSubmit} className="rounded-sm bg-[#1c3829] p-6 text-white sm:p-10">
              <h2 className="font-serif text-2xl break-keep text-balance">{t.formTitle}</h2>
              <p className="mt-2 text-xs text-white/60 break-keep text-pretty">{t.formNote}</p>
              <div className="mt-8 space-y-4">
                <input
                  required
                  name="name"
                  placeholder={t.placeholders.name}
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder={t.placeholders.phone}
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
                />
                <select
                  required
                  name="interest"
                  defaultValue=""
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none"
                >
                  <option value="" disabled className="text-[#1c3829]">{t.placeholders.interest.default}</option>
                  <option className="text-[#1c3829]">{t.placeholders.interest.buying}</option>
                  <option className="text-[#1c3829]">{t.placeholders.interest.selling}</option>
                  <option className="text-[#1c3829]">{t.placeholders.interest.both}</option>
                </select>
                <textarea
                  required
                  rows={3}
                  name="message"
                  placeholder={t.placeholders.message}
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full bg-[#b08d57] py-3.5 text-xs font-semibold tracking-[0.3em] text-white disabled:cursor-wait disabled:opacity-70"
              >
                {submitting ? t.submitting : t.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-[#1c3829]/10 bg-[#faf7f2] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#1c3829]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#1c3829]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
