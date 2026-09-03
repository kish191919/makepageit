"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: "DENVER HANIN WEEKLY",
    nav: { news: "News", directory: "Directory", culture: "Culture", columns: "Columns", advertise: "Advertise" },
    advertiseCta: "Advertise With Us",
    label: "BUSINESS DIRECTORY",
    title: "Find a trusted local business",
    intro: "A categorized directory of Korean-American-owned and Korean-American-serving businesses across the Denver metro.",
    getListed: "Own a business? Get listed →",
    categories: [
      {
        name: "Legal & Immigration",
        listings: [
          { name: "Rocky Peak Immigration Law", blurb: "Family and employment-based immigration counsel.", contact: "(720) 555-0114 · Aurora, CO" },
          { name: "Aurora Legal Partners", blurb: "Business formation and contract review for local shop owners.", contact: "(720) 555-0182 · Aurora, CO" },
        ],
      },
      {
        name: "Health & Wellness",
        listings: [
          { name: "Front Range Family Dental", blurb: "Bilingual dental care for the whole family.", contact: "(303) 555-0147 · Centennial, CO" },
          { name: "Golden Aspen Acupuncture & Spa", blurb: "Traditional wellness therapies in a modern studio.", contact: "(303) 555-0163 · Denver, CO" },
        ],
      },
      {
        name: "Real Estate",
        listings: [
          { name: "Mile High Realty Partners", blurb: "Buying, selling, and relocating across the Denver metro.", contact: "(720) 555-0129 · Denver, CO" },
          { name: "Cherry Creek Home Group", blurb: "Boutique brokerage specializing in first-time buyers.", contact: "(303) 555-0198 · Denver, CO" },
        ],
      },
      {
        name: "Restaurants & Cafés",
        listings: [
          { name: "Namu Kitchen", blurb: "Modern Korean plates with a Rocky Mountain twist.", contact: "(720) 555-0155 · Aurora, CO" },
          { name: "Maple & Barley Café", blurb: "Neighborhood coffee shop and bakery.", contact: "(303) 555-0171 · Centennial, CO" },
        ],
      },
      {
        name: "Home Services",
        listings: [
          { name: "Peak Moving & Storage", blurb: "Local and cross-country moving for Korean-American families.", contact: "(720) 555-0136 · Aurora, CO" },
          { name: "Summit Home Renovations", blurb: "Kitchen and bath remodeling, licensed and insured.", contact: "(303) 555-0189 · Denver, CO" },
        ],
      },
      {
        name: "Professional Services",
        listings: [
          { name: "Evergreen Tax & Accounting", blurb: "Small business bookkeeping and tax filing.", contact: "(720) 555-0142 · Denver, CO" },
          { name: "Bridgepoint Insurance Group", blurb: "Auto, home, and business insurance in English and Korean.", contact: "(303) 555-0177 · Aurora, CO" },
        ],
      },
    ],
    footer: {
      address: "Denver Hanin Weekly · Aurora, CO",
      legal: "© 2026 Denver Hanin Weekly. A portfolio template by MAKEPAGE — fictional listings for demonstration only.",
    },
  },
  ko: {
    brand: "덴버 한인 위클리",
    nav: { news: "뉴스", directory: "업소록", culture: "문화", columns: "칼럼", advertise: "광고문의" },
    advertiseCta: "광고 문의하기",
    label: "업소록",
    title: "믿을 수 있는 지역 업체 찾기",
    intro: "덴버 메트로 지역의 한인 운영 및 한인 대상 업체를 카테고리별로 정리했습니다.",
    getListed: "업체 등록을 원하시나요? 광고문의 →",
    categories: [
      {
        name: "법률 & 이민",
        listings: [
          { name: "락피크 이민법률사무소", blurb: "가족·취업 이민 전문 법률 상담.", contact: "(720) 555-0114 · 오로라" },
          { name: "오로라 리걸 파트너스", blurb: "사업자 등록과 계약서 검토를 돕는 법률 서비스.", contact: "(720) 555-0182 · 오로라" },
        ],
      },
      {
        name: "건강 & 웰니스",
        listings: [
          { name: "프론트레인지 패밀리 덴탈", blurb: "온 가족을 위한 이중언어 치과 진료.", contact: "(303) 555-0147 · 센테니얼" },
          { name: "골든아스펜 한방 & 스파", blurb: "모던한 공간에서 만나는 전통 웰니스 케어.", contact: "(303) 555-0163 · 덴버" },
        ],
      },
      {
        name: "부동산",
        listings: [
          { name: "마일하이 부동산 파트너스", blurb: "덴버 메트로 지역 매매·이주 전문.", contact: "(720) 555-0129 · 덴버" },
          { name: "체리크릭 홈그룹", blurb: "첫 주택구매자를 위한 부티크 중개사.", contact: "(303) 555-0198 · 덴버" },
        ],
      },
      {
        name: "음식점 & 카페",
        listings: [
          { name: "나무 키친", blurb: "로키마운틴 감성을 더한 모던 한식.", contact: "(720) 555-0155 · 오로라" },
          { name: "메이플 & 발리 카페", blurb: "동네 사랑방 같은 커피 & 베이커리.", contact: "(303) 555-0171 · 센테니얼" },
        ],
      },
      {
        name: "홈서비스",
        listings: [
          { name: "피크 이사 & 보관 서비스", blurb: "한인 가정을 위한 지역·장거리 이사 서비스.", contact: "(720) 555-0136 · 오로라" },
          { name: "서밋 홈 리노베이션", blurb: "주방·욕실 리모델링, 정식 면허 보유.", contact: "(303) 555-0189 · 덴버" },
        ],
      },
      {
        name: "전문서비스",
        listings: [
          { name: "에버그린 세무회계", blurb: "소상공인 장부 관리 및 세무 신고.", contact: "(720) 555-0142 · 덴버" },
          { name: "브릿지포인트 보험그룹", blurb: "자동차·주택·사업자 보험, 영어·한국어 상담 가능.", contact: "(303) 555-0177 · 오로라" },
        ],
      },
    ],
    footer: {
      address: "Denver Hanin Weekly · 콜로라도 오로라",
      legal: "© 2026 Denver Hanin Weekly. MAKEPAGE 포트폴리오 템플릿 — 실제 업체가 아닌 가상의 예시입니다.",
    },
  },
} as const;

export default function DenverHaninDirectory({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/denver-hanin");
  const navPaths = {
    news: localePath(lang, "/portfolio/denver-hanin/news"),
    directory: localePath(lang, "/portfolio/denver-hanin/directory"),
    culture: localePath(lang, "/portfolio/denver-hanin/culture"),
    columns: localePath(lang, "/portfolio/denver-hanin/columns"),
    advertise: localePath(lang, "/portfolio/denver-hanin/advertise"),
  } as const;

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
            <Link href={navPaths.directory} className="font-semibold text-[#16233f]">{t.nav.directory}</Link>
            <Link href={navPaths.culture} className="transition hover:text-[#16233f]">{t.nav.culture}</Link>
            <Link href={navPaths.columns} className="transition hover:text-[#16233f]">{t.nav.columns}</Link>
            <Link href={navPaths.advertise} className="transition hover:text-[#16233f]">{t.nav.advertise}</Link>
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
              <Link href={navPaths.directory} onClick={() => setOpen(false)} className="py-2 font-semibold text-[#16233f]">{t.nav.directory}</Link>
              <Link href={navPaths.culture} onClick={() => setOpen(false)} className="py-2">{t.nav.culture}</Link>
              <Link href={navPaths.columns} onClick={() => setOpen(false)} className="py-2">{t.nav.columns}</Link>
              <Link href={navPaths.advertise} onClick={() => setOpen(false)} className="py-2">{t.nav.advertise}</Link>
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#d98e3f]">{t.label}</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl break-keep text-balance">{t.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 break-keep text-pretty">{t.intro}</p>
          </div>
          <Link href={navPaths.advertise} className="text-sm font-semibold text-[#16233f] hover:underline">
            {t.getListed}
          </Link>
        </div>

        <div className="mt-12 grid gap-1 border-b border-slate-200 pb-2 sm:hidden" />

        <div className="mt-4 space-y-12">
          {t.categories.map((cat) => (
            <div key={cat.name} id={cat.name} className="scroll-mt-24">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16233f] text-xs font-bold text-white">
                  {cat.name.charAt(0)}
                </span>
                <h2 className="text-lg font-bold break-keep text-balance">{cat.name}</h2>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {cat.listings.map((l) => (
                  <div key={l.name} className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-bold break-keep text-balance">{l.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 break-keep text-pretty">{l.blurb}</p>
                    <p className="mt-3 text-xs text-slate-400">{l.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
