"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "DENVER HANIN WEEKLY",
    nav: { news: "News", directory: "Directory", culture: "Culture", columns: "Columns", advertise: "Advertise" },
    advertiseCta: "Advertise With Us",
    label: "ADVERTISE",
    title: "Put your business in front of Denver's Korean-American community",
    intro: "Directory listings, homepage banners, and sponsored articles — pick the package that fits your business.",
    packages: [
      { name: "Directory Listing", price: "$49/mo", desc: "Category placement with logo, blurb, and contact info.", featured: false },
      { name: "Homepage Banner", price: "$199/mo", desc: "Rotating banner on the homepage and news pages.", featured: true },
      { name: "Sponsored Article", price: "$349", desc: "A dedicated feature story written and placed by our editorial team.", featured: false },
    ],
    formLabel: "GET A QUOTE",
    formTitle: "Tell us about your business",
    form: {
      business: { label: "Business name", placeholder: "Namu Kitchen" },
      category: { label: "Category", placeholder: "Select a category" },
      contact: { label: "Contact (phone or email)", placeholder: "you@business.com" },
      pkg: { label: "Package", placeholder: "Select a package" },
      message: { label: "Message (optional)", placeholder: "Tell us a bit about what you're looking for" },
      submit: "Send Inquiry →",
    },
    categoryOptions: ["Legal & Immigration", "Health & Wellness", "Real Estate", "Restaurants & Cafés", "Home Services", "Professional Services", "Other"],
    packageOptions: ["Directory Listing", "Homepage Banner", "Sponsored Article"],
    note: "Our advertising team replies to every inquiry within two business days.",
    confirmation: {
      title: "Inquiry received",
      body: "Our advertising team will follow up by email or phone within two business days.",
      summaryLabel: "Your request",
      again: "Send another inquiry",
    },
    footer: {
      address: "Denver Hanin Weekly · Aurora, CO",
      legal: "© 2026 Denver Hanin Weekly. A portfolio template by MAKEPAGE — form is a non-functional demo.",
    },
  },
  ko: {
    brand: "덴버 한인 위클리",
    nav: { news: "뉴스", directory: "업소록", culture: "문화", columns: "칼럼", advertise: "광고문의" },
    advertiseCta: "광고 문의하기",
    label: "광고문의",
    title: "덴버 한인 커뮤니티에 우리 업체를 알려보세요",
    intro: "업소록 등재부터 홈페이지 배너, 스폰서 기사까지 — 우리 업체에 맞는 패키지를 선택하세요.",
    packages: [
      { name: "업소록 등재", price: "월 $49", desc: "로고, 소개문, 연락처와 함께 카테고리에 노출됩니다.", featured: false },
      { name: "홈페이지 배너", price: "월 $199", desc: "홈페이지와 뉴스 페이지에 순환 노출되는 배너 광고.", featured: true },
      { name: "스폰서 기사", price: "건당 $349", desc: "에디터팀이 직접 작성·게재하는 단독 기획 기사.", featured: false },
    ],
    formLabel: "견적 요청",
    formTitle: "업체 정보를 알려주세요",
    form: {
      business: { label: "업체명", placeholder: "나무 키친" },
      category: { label: "카테고리", placeholder: "카테고리를 선택하세요" },
      contact: { label: "연락처 (전화 또는 이메일)", placeholder: "you@business.com" },
      pkg: { label: "패키지", placeholder: "패키지를 선택하세요" },
      message: { label: "메시지 (선택)", placeholder: "원하시는 내용을 간단히 알려주세요" },
      submit: "문의 보내기 →",
    },
    categoryOptions: ["법률 & 이민", "건강 & 웰니스", "부동산", "음식점 & 카페", "홈서비스", "전문서비스", "기타"],
    packageOptions: ["업소록 등재", "홈페이지 배너", "스폰서 기사"],
    note: "광고팀이 영업일 기준 2일 이내에 모든 문의에 회신드립니다.",
    confirmation: {
      title: "문의가 접수되었습니다",
      body: "광고팀이 영업일 기준 2일 이내에 이메일 또는 전화로 연락드립니다.",
      summaryLabel: "문의 내용",
      again: "다른 문의 보내기",
    },
    footer: {
      address: "Denver Hanin Weekly · 콜로라도 오로라",
      legal: "© 2026 Denver Hanin Weekly. MAKEPAGE 포트폴리오 템플릿 — 해당 양식은 실제로 전송되지 않는 데모입니다.",
    },
  },
} as const;

const emptyValues = { business: "", category: "", contact: "", pkg: "", message: "" };

export default function DenverHaninAdvertise({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/denver-hanin");
  const [values, setValues] = useState(emptyValues);
  const [submitted, setSubmitted] = useState(false);
  const navPaths = {
    news: localePath(lang, "/portfolio/denver-hanin/news"),
    directory: localePath(lang, "/portfolio/denver-hanin/directory"),
    culture: localePath(lang, "/portfolio/denver-hanin/culture"),
    columns: localePath(lang, "/portfolio/denver-hanin/columns"),
    advertise: localePath(lang, "/portfolio/denver-hanin/advertise"),
  } as const;

  function handleChange<K extends keyof typeof emptyValues>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#faf8f5] text-slate-900">
      <header ref={ref} className="sticky top-0 z-30 border-b border-slate-200 bg-[#faf8f5]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={home} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16233f] text-xs font-bold text-white">D</span>
            <span className="text-sm font-bold tracking-wide">{t.brand}</span>
          </Link>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <Link href={navPaths.news} className="transition hover:text-[#16233f]">{t.nav.news}</Link>
            <Link href={navPaths.directory} className="transition hover:text-[#16233f]">{t.nav.directory}</Link>
            <Link href={navPaths.culture} className="transition hover:text-[#16233f]">{t.nav.culture}</Link>
            <Link href={navPaths.columns} className="transition hover:text-[#16233f]">{t.nav.columns}</Link>
            <Link href={navPaths.advertise} className="font-semibold text-[#16233f]">{t.nav.advertise}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={navPaths.advertise} className="hidden rounded-full bg-[#d98e3f] px-5 py-2 text-xs font-semibold text-white sm:inline-block">
              {t.advertiseCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-200 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm text-slate-600">
              <Link href={navPaths.news} onClick={() => setOpen(false)} className="py-2">{t.nav.news}</Link>
              <Link href={navPaths.directory} onClick={() => setOpen(false)} className="py-2">{t.nav.directory}</Link>
              <Link href={navPaths.culture} onClick={() => setOpen(false)} className="py-2">{t.nav.culture}</Link>
              <Link href={navPaths.columns} onClick={() => setOpen(false)} className="py-2">{t.nav.columns}</Link>
              <Link href={navPaths.advertise} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#16233f]">{t.nav.advertise}</Link>
            </nav>
            <Link
              href={navPaths.advertise}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-full bg-[#d98e3f] px-5 py-2 text-xs font-semibold text-white"
            >
              {t.advertiseCta}
            </Link>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#d98e3f]">{t.label}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl break-keep text-balance">{t.title}</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 break-keep text-pretty">{t.intro}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.packages.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? "rounded-2xl border-2 border-[#d98e3f] bg-white p-6"
                  : "rounded-2xl border border-slate-200 bg-white p-6"
              }
            >
              {p.featured && (
                <span className="mb-3 inline-block rounded-full bg-[#d98e3f]/10 px-3 py-1 text-[10px] font-semibold text-[#d98e3f]">
                  {lang === "ko" ? "인기" : "Most popular"}
                </span>
              )}
              <p className="text-sm font-bold break-keep text-balance">{p.name}</p>
              <p className="mt-2 text-2xl font-bold text-[#16233f]">{p.price}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500 break-keep text-pretty">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#d98e3f]">{t.formLabel}</p>
        <h2 className="mt-3 text-2xl font-bold md:text-3xl break-keep text-balance">{t.formTitle}</h2>

        <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#16233f] to-[#0d1526] p-8 text-white md:p-12">
          {submitted ? (
            <div>
              <h3 className="text-2xl font-bold break-keep text-balance">{t.confirmation.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 break-keep text-pretty">{t.confirmation.body}</p>
              <dl className="mt-6 space-y-3 rounded-2xl bg-white/10 p-5 text-sm">
                <p className="text-xs font-semibold tracking-[0.2em] text-white/60">{t.confirmation.summaryLabel}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <dt className="text-white/70">{t.form.business.label}</dt>
                  <dd className="font-medium">{values.business}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-white/70">{t.form.category.label}</dt>
                  <dd className="font-medium">{values.category}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-white/70">{t.form.contact.label}</dt>
                  <dd className="font-medium">{values.contact}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-white/70">{t.form.pkg.label}</dt>
                  <dd className="font-medium">{values.pkg}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setValues(emptyValues);
                }}
                className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
              >
                {t.confirmation.again}
              </button>
            </div>
          ) : (
            <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
              <label className="block sm:col-span-2">
                <span className="text-xs text-white/70">{t.form.business.label}</span>
                <input
                  type="text"
                  required
                  value={values.business}
                  onChange={(e) => handleChange("business", e.target.value)}
                  placeholder={t.form.business.placeholder}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-xs text-white/70">{t.form.category.label}</span>
                <select
                  required
                  value={values.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white outline-none [&>option]:text-slate-900"
                >
                  <option value="" disabled>{t.form.category.placeholder}</option>
                  {t.categoryOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs text-white/70">{t.form.pkg.label}</span>
                <select
                  required
                  value={values.pkg}
                  onChange={(e) => handleChange("pkg", e.target.value)}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white outline-none [&>option]:text-slate-900"
                >
                  <option value="" disabled>{t.form.pkg.placeholder}</option>
                  {t.packageOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs text-white/70">{t.form.contact.label}</span>
                <input
                  type="text"
                  required
                  value={values.contact}
                  onChange={(e) => handleChange("contact", e.target.value)}
                  placeholder={t.form.contact.placeholder}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs text-white/70">{t.form.message.label}</span>
                <textarea
                  rows={3}
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder={t.form.message.placeholder}
                  className="mt-2 w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
                />
              </label>
              <button
                type="submit"
                className="mt-2 w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 sm:col-span-2"
              >
                {t.form.submit}
              </button>
            </form>
          )}
          <p className="mt-5 text-xs text-white/70 break-keep text-pretty">{t.note}</p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10 text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-slate-900">{t.brand}</div>
            <p className="mt-1 text-xs break-keep text-pretty">{t.footer.address}</p>
          </div>
          <p className="text-xs break-keep text-pretty">{t.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
