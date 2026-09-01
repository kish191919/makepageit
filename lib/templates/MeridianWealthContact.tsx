"use client";

import { useState } from "react";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "MERIDIAN WEALTH PARTNERS", tag: "FEE-ONLY FIDUCIARY ADVISORS" },
    nav: { services: "Services", approach: "Our Approach", advisors: "Advisors", insights: "Insights", contact: "Contact" },
    bookCta: "Schedule a Consultation",
    eyebrow: "CONTACT",
    title: ["Let's talk about", "where you're headed."],
    body: "A complimentary 30-minute introductory call, with no obligation. We'll walk through your goals and outline how a fee-only relationship would work.",
    rows: [
      { label: "CALL", value: "(617) 555-0142" },
      { label: "EMAIL", value: "hello@meridianwealthpartners.com" },
      { label: "OFFICE", value: "225 Franklin Street, Suite 1800, Boston, MA 02110" },
    ],
    mapQuery: "225 Franklin Street, Boston, MA 02110",
    hoursLabel: "OFFICE HOURS",
    hours: [
      ["Mon – Thu", "8:30 AM – 5:30 PM"],
      ["Friday", "8:30 AM – 3:00 PM"],
      ["Sat – Sun", "Closed"],
    ] as [string, string][],
    processSection: { eyebrow: "WHAT HAPPENS NEXT", title: "From submission to a scheduled call" },
    process: [
      { step: "01", title: "Submit the form", desc: "Tell us a bit about your goals — no account statements or documents needed yet." },
      { step: "02", title: "An advisor reviews", desc: "The right advisor for your situation reads your submission personally, usually within a few hours." },
      { step: "03", title: "We schedule a call", desc: "You'll get an email to confirm a 30-minute introductory call, free of charge." },
    ],
    faqLabel: "FAQ",
    faq: [
      { q: "Is the introductory call really free?", a: "Yes — the first 30-minute call is complimentary, whether or not you become a client afterward." },
      { q: "Is there a minimum asset requirement?", a: "Most ongoing clients have $500K+ in investable assets, but we're happy to have an initial conversation regardless — we'll tell you honestly if we're not the right fit." },
      { q: "What should I bring to the call?", a: "Nothing is required. If you have recent account statements handy, they can help, but they aren't necessary to get started." },
    ],
    formTitle: "Schedule a Free Consultation",
    formNote: "An advisor will respond within one business day.",
    placeholders: {
      name: "Full name",
      phone: "Phone number",
      area: { default: "Area of interest", a1: "Retirement Planning", a2: "Investment Management", a3: "Estate Planning" },
      details: "Tell us about your goals",
    },
    consent: "I consent to Meridian Wealth Partners collecting and using the information above to respond to my inquiry.",
    submit: "Request Consultation",
    submitting: "Sending...",
    successTitle: "Request received.",
    successBody: "An advisor will respond within one business day. Need it sooner? Call (617) 555-0142.",
    footer: "© 2025 Meridian Wealth Partners.",
  },
  ko: {
    brand: { name: "메리디안 자산관리", tag: "수수료 기반 신의성실 자문사" },
    nav: { services: "서비스", approach: "운용 철학", advisors: "어드바이저", insights: "인사이트", contact: "상담 문의" },
    bookCta: "상담 예약",
    eyebrow: "CONTACT",
    title: ["지금의 자산이", "어디로 향할지, 함께 그려봅니다."],
    body: "30분 무료 초기 상담으로 목표를 함께 정리하고, 수수료 기반 자문 관계가 어떻게 이루어지는지 안내해 드립니다.",
    rows: [
      { label: "CALL", value: "02-XXX-XXXX" },
      { label: "EMAIL", value: "hello@meridianwealthpartners.com" },
      { label: "주소", value: "서울 강남구 테헤란로 ○○ 메리디안타워 18층" },
    ],
    mapQuery: "서울 강남구 테헤란로",
    hoursLabel: "운영시간",
    hours: [
      ["월 – 목", "08:30 – 17:30"],
      ["금요일", "08:30 – 15:00"],
      ["토 – 일", "휴무"],
    ] as [string, string][],
    processSection: { eyebrow: "WHAT HAPPENS NEXT", title: "신청부터 상담 확정까지" },
    process: [
      { step: "01", title: "신청서 제출", desc: "목표를 간단히 알려주세요 — 계좌 명세서나 서류는 아직 필요하지 않습니다." },
      { step: "02", title: "담당 어드바이저 검토", desc: "상황에 맞는 어드바이저가 직접 검토하며, 보통 몇 시간 이내에 확인합니다." },
      { step: "03", title: "상담 일정 확정", desc: "이메일로 30분 무료 초기 상담 일정을 확정해드립니다." },
    ],
    faqLabel: "자주 묻는 질문",
    faq: [
      { q: "초기 상담이 정말 무료인가요?", a: "네. 이후 고객으로 전환되는지와 관계없이 첫 30분 상담은 무료입니다." },
      { q: "최소 자산 요건이 있나요?", a: "대부분의 지속 고객은 투자 가능 자산 5억 원 이상을 보유하고 계시지만, 요건과 무관하게 초기 상담은 언제든 가능합니다 — 적합하지 않다면 솔직히 말씀드립니다." },
      { q: "상담 전에 준비할 것이 있나요?", a: "특별히 준비할 것은 없습니다. 최근 계좌 명세서가 있다면 도움이 되지만 필수는 아닙니다." },
    ],
    formTitle: "무료 상담 신청",
    formNote: "담당 어드바이저가 1영업일 이내 연락드립니다.",
    placeholders: {
      name: "성함",
      phone: "연락처",
      area: { default: "관심 분야 선택", a1: "은퇴 설계", a2: "투자운용", a3: "상속·유산 설계" },
      details: "재무 목표를 간단히 알려주세요",
    },
    consent: "개인정보 수집·이용에 동의합니다.",
    submit: "상담 신청하기",
    submitting: "접수 중...",
    successTitle: "상담 신청이 접수되었습니다",
    successBody: "담당 어드바이저가 1영업일 이내 연락드립니다. 급하신 경우 02-XXX-XXXX로 전화 주세요.",
    footer: "© 2025 메리디안 자산관리.",
  },
} as const;

export default function MeridianWealthContact({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/meridian-wealth");
  const navPaths = {
    services: localePath(lang, "/portfolio/meridian-wealth/services"),
    approach: localePath(lang, "/portfolio/meridian-wealth/approach"),
    advisors: localePath(lang, "/portfolio/meridian-wealth/advisors"),
    insights: localePath(lang, "/portfolio/meridian-wealth/insights"),
    contact: localePath(lang, "/portfolio/meridian-wealth/contact"),
  } as const;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <div className="bg-[#f7f6f2] text-[#1a2332]">
      <header ref={ref} className="border-b border-[#1a2332]/10 bg-[#f7f6f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2332] text-base font-semibold text-[#c99a3b]">M</span>
            <div>
              <div className="text-base font-semibold leading-none tracking-tight">{t.brand.name}</div>
              <div className="mt-1 text-[10px] tracking-[0.25em] text-[#1a2332]/50">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-[#1a2332]/75 md:flex">
            <Link href={navPaths.services} className="transition hover:text-[#c99a3b]">{t.nav.services}</Link>
            <Link href={navPaths.approach} className="transition hover:text-[#c99a3b]">{t.nav.approach}</Link>
            <Link href={navPaths.advisors} className="transition hover:text-[#c99a3b]">{t.nav.advisors}</Link>
            <Link href={navPaths.insights} className="transition hover:text-[#c99a3b]">{t.nav.insights}</Link>
            <Link href={navPaths.contact} className="text-[#c99a3b]">{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={navPaths.contact} className="hidden rounded-full bg-[#1a2332] px-5 py-2.5 text-xs font-semibold tracking-wide text-white sm:inline-block">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2332]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#1a2332]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#1a2332]/75">
              <Link href={navPaths.services} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <Link href={navPaths.approach} onClick={() => setOpen(false)} className="py-2">{t.nav.approach}</Link>
              <Link href={navPaths.advisors} onClick={() => setOpen(false)} className="py-2">{t.nav.advisors}</Link>
              <Link href={navPaths.insights} onClick={() => setOpen(false)} className="py-2">{t.nav.insights}</Link>
              <Link href={navPaths.contact} onClick={() => setOpen(false)} className="py-2 text-[#c99a3b]">{t.nav.contact}</Link>
            </nav>
            <Link
              href={navPaths.contact}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#1a2332] px-5 py-2.5 text-xs font-semibold tracking-wide text-white"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl break-keep text-balance">
              {t.title[0]} <br className="hidden md:block" />{t.title[1]}
            </h1>
            <p className="mt-6 leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{t.body}</p>
            <dl className="mt-10 space-y-3 border-t border-[#1a2332]/10 pt-8 text-sm">
              {t.rows.map((r) => (
                <div key={r.label} className="flex gap-6">
                  <dt className="w-24 font-semibold tracking-widest text-[#1a2332]/60">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
              <div className="flex gap-6">
                <dt className="w-24 font-semibold tracking-widest text-[#1a2332]/60">{t.hoursLabel}</dt>
                <dd>
                  {t.hours.map(([day, time]) => (
                    <div key={day} className="flex justify-between gap-8">
                      <span className="text-[#1a2332]/70">{day}</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-8 aspect-video overflow-hidden rounded-sm border border-[#1a2332]/10">
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
            <div className="rounded-sm bg-[#1a2332] p-10 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c99a3b] text-xl text-[#1a2332]">✓</div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight break-keep text-balance">{t.successTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 break-keep text-pretty">{t.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-sm bg-[#1a2332] p-6 text-white sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight break-keep text-balance">{t.formTitle}</h2>
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
                  <option value="" disabled className="text-[#1a2332]">{t.placeholders.area.default}</option>
                  <option className="text-[#1a2332]">{t.placeholders.area.a1}</option>
                  <option className="text-[#1a2332]">{t.placeholders.area.a2}</option>
                  <option className="text-[#1a2332]">{t.placeholders.area.a3}</option>
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
                className="mt-8 w-full bg-[#c99a3b] py-3.5 text-xs font-semibold tracking-[0.3em] text-[#1a2332] transition disabled:cursor-wait disabled:opacity-70"
              >
                {submitting ? t.submitting : t.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.processSection.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl break-keep text-balance">{t.processSection.title}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {t.process.map((p) => (
              <div key={p.step}>
                <div className="text-3xl font-semibold tracking-tight text-[#c99a3b]">{p.step}</div>
                <h3 className="mt-3 text-lg font-semibold tracking-tight break-keep text-balance">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c99a3b]">{t.faqLabel}</p>
        <div className="mt-8 divide-y divide-[#1a2332]/10 border-t border-[#1a2332]/10">
          {t.faq.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="text-lg font-semibold tracking-tight break-keep text-balance">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1a2332]/70 break-keep text-pretty">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#1a2332]/10 bg-[#f7f6f2] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#1a2332]/50 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold tracking-tight text-[#1a2332]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
