"use client";

import { useState } from "react";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "GREENE LAW", tag: "ATTORNEYS AT LAW" },
    nav: { areas: "Practice Areas", lawyers: "Attorneys", cases: "Notable Cases", insights: "Insights", visit: "Contact" },
    bookCta: "Book a Consult",
    eyebrow: "CONSULTATION",
    title: ["The fastest path", "is the right consult."],
    body: "A 30-minute initial consult, free of charge. We map the matter together — most cases get worse the longer they wait.",
    rows: [
      { label: "CALL", value: "(212) 555-0188" },
      { label: "EMAIL", value: "contact@greenelaw.com" },
      { label: "ADDRESS", value: "1290 Avenue of the Americas, 9th Fl, New York NY 10104" },
    ],
    mapQuery: "1290 Avenue of the Americas, New York, NY 10104",
    hoursLabel: "OFFICE HOURS",
    hours: [
      ["Mon – Fri", "9:00 AM – 6:30 PM"],
      ["Saturday", "By appointment"],
      ["Sunday", "Closed"],
    ] as [string, string][],
    processSection: { eyebrow: "WHAT HAPPENS NEXT", title: "From submission to a scheduled call" },
    process: [
      { step: "01", title: "Submit the form", desc: "Tell us what's happening in a few sentences — no case number or documents required yet." },
      { step: "02", title: "An attorney reviews", desc: "The right practice lead reads your submission personally, usually within a few hours." },
      { step: "03", title: "We schedule a call", desc: "You'll get a text or email to confirm a 30-minute consult, free of charge." },
    ],
    faqLabel: "FAQ",
    faq: [
      { q: "Is the initial consult really free?", a: "Yes — the first 30-minute call is free of charge, whether or not you retain us afterward." },
      { q: "Is what I share confidential?", a: "Yes. Attorney-client privilege applies from the first conversation, even before any engagement is signed." },
      { q: "What should I bring to the call?", a: "Nothing is required. If you have relevant documents — a contract, a notice, an agreement — having them nearby helps, but isn't necessary to get started." },
    ],
    formTitle: "Request a Consultation",
    formNote: "An attorney will follow up within 24 hours.",
    placeholders: {
      name: "Full name",
      phone: "Phone number",
      area: { default: "Select practice area", a1: "Corporate Counsel", a2: "Intellectual Property" },
      details: "Brief case overview",
    },
    consent: "I consent to Greene Law Group collecting and using the information above to respond to my inquiry. Records are kept for up to 1 year after the matter closes.",
    submit: "Submit Request",
    submitting: "Sending...",
    successTitle: "Request received.",
    successBody: "An attorney will follow up within 24 hours. Need it sooner? Call (212) 555-0188.",
    footer: "© 2025 Greene Law Group. Attorney advertising. NY Bar Attorney Advertising Review No. 2024-11087.",
  },
  ko: {
    brand: { name: "GREEN LAW", tag: "법률사무소" },
    nav: { areas: "업무 영역", lawyers: "구성원", cases: "주요 사례", insights: "인사이트", visit: "찾아오시는 길" },
    bookCta: "상담 예약",
    eyebrow: "CONSULTATION",
    title: ["가장 빠른 길은,", "가장 정확한 상담입니다."],
    body: "30분 무료 초기 상담을 통해 사건의 큰 흐름을 함께 정리합니다. 시간이 지나면 손해가 되는 사건이 많습니다.",
    rows: [
      { label: "CALL", value: "02-6952-4871" },
      { label: "EMAIL", value: "contact@greenlaw.kr" },
      { label: "ADDRESS", value: "서울 서초구 법원로 15, 정림빌딩 8층" },
    ],
    mapQuery: "서울 서초구 법원로 15",
    hoursLabel: "운영시간",
    hours: [
      ["평일", "09:00 – 18:30"],
      ["토요일", "사전 예약제"],
      ["일요일", "휴무"],
    ] as [string, string][],
    processSection: { eyebrow: "WHAT HAPPENS NEXT", title: "신청부터 상담 확정까지" },
    process: [
      { step: "01", title: "신청서 제출", desc: "몇 문장으로 현재 상황을 알려주세요 — 사건번호나 서류는 아직 필요하지 않습니다." },
      { step: "02", title: "담당 변호사 검토", desc: "해당 분야 담당 파트너가 직접 검토하며, 보통 몇 시간 이내에 확인합니다." },
      { step: "03", title: "상담 일정 확정", desc: "문자 또는 이메일로 30분 무료 상담 일정을 확정해드립니다." },
    ],
    faqLabel: "자주 묻는 질문",
    faq: [
      { q: "초기 상담이 정말 무료인가요?", a: "네. 이후 정식 수임 여부와 관계없이 첫 30분 상담은 무료입니다." },
      { q: "상담 내용은 비밀이 보장되나요?", a: "네. 정식 계약 전이라도 첫 상담부터 변호사-의뢰인 특권이 적용됩니다." },
      { q: "상담 전에 준비할 것이 있나요?", a: "특별히 준비할 것은 없습니다. 계약서, 통지서 등 관련 서류가 있다면 도움이 되지만 필수는 아닙니다." },
    ],
    formTitle: "상담 신청서",
    formNote: "담당 변호사가 24시간 내 연락드립니다.",
    placeholders: {
      name: "성함",
      phone: "연락처",
      area: { default: "사건 분야 선택", a1: "기업 자문", a2: "지식재산권" },
      details: "간단한 사건 개요",
    },
    consent: "개인정보 수집·이용에 동의합니다. (수집 항목: 성함, 연락처 / 보유기간: 상담 종료 후 1년)",
    submit: "상담 신청하기",
    submitting: "접수 중...",
    successTitle: "상담 신청이 접수되었습니다",
    successBody: "담당 변호사가 24시간 내 연락드립니다. 급하신 경우 02-6952-4871로 전화 주세요.",
    footer: "© 2025 그린 법률사무소. 변호사 광고 심의필. 대한변호사협회 광고심사 제2024-000123호.",
  },
} as const;

export default function GreenLawVisit({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/green-law");
  const navPaths = {
    areas: localePath(lang, "/portfolio/green-law/areas"),
    cases: localePath(lang, "/portfolio/green-law/cases"),
    lawyers: localePath(lang, "/portfolio/green-law/lawyers"),
    insights: localePath(lang, "/portfolio/green-law/insights"),
    visit: localePath(lang, "/portfolio/green-law/visit"),
  } as const;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleConsultSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <div className="bg-white text-[#0b1a2a]">
      <header ref={ref} className="border-b border-[#0b1a2a]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0b1a2a] font-serif text-sm text-white">
              GL
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#0b1a2a]/60">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#0b1a2a]/80 md:flex">
            <Link href={navPaths.areas} className="transition hover:text-[#0b1a2a]">{t.nav.areas}</Link>
            <Link href={navPaths.cases} className="transition hover:text-[#0b1a2a]">{t.nav.cases}</Link>
            <Link href={navPaths.lawyers} className="transition hover:text-[#0b1a2a]">{t.nav.lawyers}</Link>
            <Link href={navPaths.insights} className="transition hover:text-[#0b1a2a]">{t.nav.insights}</Link>
            <Link href={navPaths.visit} className="text-[#0b1a2a]">{t.nav.visit}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={navPaths.visit}
              className="rounded-sm bg-[#0b1a2a] px-5 py-2.5 text-xs font-semibold tracking-widest text-white transition hover:bg-[#152a42]"
            >
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#0b1a2a]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#0b1a2a]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#0b1a2a]/80">
              <Link href={navPaths.areas} onClick={() => setOpen(false)} className="py-2">{t.nav.areas}</Link>
              <Link href={navPaths.cases} onClick={() => setOpen(false)} className="py-2">{t.nav.cases}</Link>
              <Link href={navPaths.lawyers} onClick={() => setOpen(false)} className="py-2">{t.nav.lawyers}</Link>
              <Link href={navPaths.insights} onClick={() => setOpen(false)} className="py-2">{t.nav.insights}</Link>
              <Link href={navPaths.visit} onClick={() => setOpen(false)} className="py-2 text-[#0b1a2a]">{t.nav.visit}</Link>
            </nav>
            <Link
              href={navPaths.visit}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-sm bg-[#0b1a2a] px-5 py-2.5 text-xs font-semibold tracking-widest text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.eyebrow}</p>
            <h1 className="mt-3 font-serif text-3xl leading-tight md:text-5xl break-keep text-balance">
              {t.title[0]}<br className="hidden md:block" />{t.title[1]}
            </h1>
            <p className="mt-6 leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">
              {t.body}
            </p>
            <dl className="mt-10 space-y-3 border-t border-[#0b1a2a]/10 pt-8 text-sm">
              {t.rows.map((r) => (
                <div key={r.label} className="flex gap-6">
                  <dt className="w-24 font-semibold tracking-widest text-[#0b1a2a]/60">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
              <div className="flex gap-6">
                <dt className="w-24 font-semibold tracking-widest text-[#0b1a2a]/60">{t.hoursLabel}</dt>
                <dd>
                  {t.hours.map(([day, time]) => (
                    <div key={day} className="flex justify-between gap-8">
                      <span className="text-[#0b1a2a]/70">{day}</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-8 aspect-video overflow-hidden rounded-sm border border-[#0b1a2a]/10">
              <iframe
                title={t.rows[2].value}
                src={`https://www.google.com/maps?q=${encodeURIComponent(t.mapQuery)}&output=embed`}
                className="h-full w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          {submitted ? (
            <div className="rounded-sm bg-[#0b1a2a] p-10 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c8c47] text-xl">✓</div>
              <h2 className="mt-6 font-serif text-2xl break-keep text-balance">{t.successTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 break-keep text-pretty">{t.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleConsultSubmit} className="rounded-sm bg-[#0b1a2a] p-10 text-white">
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
                  name="area"
                  defaultValue=""
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none"
                >
                  <option value="" disabled className="text-[#0b1a2a]">{t.placeholders.area.default}</option>
                  <option className="text-[#0b1a2a]">{t.placeholders.area.a1}</option>
                  <option className="text-[#0b1a2a]">{t.placeholders.area.a2}</option>
                </select>
                <textarea
                  required
                  rows={3}
                  name="details"
                  placeholder={t.placeholders.details}
                  className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none"
                />
              </div>
              <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-white/60">
                <input required type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 border-white/30 bg-transparent" />
                <span>{t.consent}</span>
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="mt-8 w-full bg-white py-3.5 text-xs font-semibold tracking-[0.3em] text-[#0b1a2a] transition hover:bg-white/90 disabled:cursor-wait disabled:opacity-70"
              >
                {submitting ? t.submitting : t.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="bg-[#f5f4ee] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.processSection.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl break-keep text-balance">{t.processSection.title}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {t.process.map((p) => (
              <div key={p.step}>
                <div className="font-serif text-3xl text-[#7c8c47]">{p.step}</div>
                <h3 className="mt-3 font-serif text-lg break-keep text-balance">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.faqLabel}</p>
        <div className="mt-8 divide-y divide-[#0b1a2a]/10 border-t border-[#0b1a2a]/10">
          {t.faq.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="font-serif text-lg break-keep text-balance">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#0b1a2a]/10 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#0b1a2a]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#0b1a2a]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
