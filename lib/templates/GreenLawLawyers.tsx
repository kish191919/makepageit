"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "GREENE LAW", tag: "ATTORNEYS AT LAW" },
    nav: { areas: "Practice Areas", lawyers: "Attorneys", cases: "Notable Cases", insights: "Insights", visit: "Contact" },
    bookCta: "Book a Consult",
    eyebrow: "LAWYERS",
    title: "The team",
    intro: "Twelve senior attorneys, four practice leads shown here — every matter gets a partner, not a hand-off.",
    principles: [
      { title: "Partner-Led", desc: "A senior attorney owns your matter from the first call to the close — no hand-offs to associates you've never met." },
      { title: "Flat-Fee Options", desc: "Most engagements are scoped and quoted before work starts, so there are no billing surprises." },
      { title: "24-Hour Response", desc: "Every inquiry gets an attorney reply within one business day." },
    ],
    lawyers: [
      {
        name: "Jonathan Greene",
        role: "Managing Partner",
        credentials: "J.D., Harvard Law School · Admitted NY & NJ · 18 years practice",
        bio: "Leads the firm's corporate and M&A practice, having closed more than 300 financing and acquisition deals. Before founding Greene Law, he served as general counsel at two venture-backed startups, so he reads a term sheet the way a founder does — for what it actually costs later, not just what it says now. He still takes first calls himself.",
        focus: ["M&A", "Venture Financing", "Corporate Governance"],
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Sarah Cho",
        role: "Corporate · 12 yrs",
        credentials: "J.D., NYU School of Law · Admitted NY · 12 years practice",
        bio: "Structures financing rounds and M&A deals for founders who'd rather not learn deal terms the hard way. Sarah spent four years in-house at a fintech company before returning to practice, which shows in how she negotiates — she knows which clauses actually get enforced and which ones just get argued about. She has closed financings ranging from pre-seed notes to $80M Series C rounds.",
        focus: ["Corporate Finance", "M&A", "Investor Relations"],
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Daniel Park",
        role: "Litigation · 9 yrs",
        credentials: "J.D., Columbia Law School · Admitted NY & CT · 9 years practice",
        bio: "Tries commercial disputes to verdict rather than defaulting to settlement, and has argued before three state appellate courts. Daniel built his practice on the belief that a firm willing to go to trial gets better settlement terms in every other case — opposing counsel negotiates differently once they've seen him in court. He leads the firm's litigation team on contract disputes, injunctive relief, and judgment enforcement.",
        focus: ["Commercial Litigation", "Injunctions", "Enforcement"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Sofia Lee",
        role: "Employment & Antitrust · 7 yrs",
        credentials: "J.D., Fordham University School of Law · Admitted NY · 7 years practice",
        bio: "Rewrites employment agreements and advertising claims so they survive the next regulatory cycle, not just the current one. Sofia tracks state-by-state changes to non-compete and advertising-compliance law closely, and routinely flags exposure in agreements that were compliant when signed but no longer are. She also handles EEOC and labor-board matters when disputes do arise.",
        focus: ["Employment Law", "Advertising Compliance", "EEOC Defense"],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
      },
    ],
    cta: {
      title: "Want to work with a specific attorney?",
      body: "Tell us the matter and we'll match you with the right practice lead directly.",
      button: "Book a Consult",
    },
    footer: "© 2025 Greene Law Group. Attorney advertising. NY Bar Attorney Advertising Review No. 2024-11087.",
  },
  ko: {
    brand: { name: "GREEN LAW", tag: "법률사무소" },
    nav: { areas: "업무 영역", lawyers: "구성원", cases: "주요 사례", insights: "인사이트", visit: "찾아오시는 길" },
    bookCta: "상담 예약",
    eyebrow: "LAWYERS",
    title: "구성원",
    intro: "전문 변호사 12명 중 4명의 파트너를 소개합니다 — 모든 사건은 담당 파트너가 끝까지 책임집니다.",
    principles: [
      { title: "파트너 직접 수임", desc: "담당 파트너가 첫 상담부터 종결까지 직접 맡습니다 — 처음 보는 어소시에이트에게 넘기지 않습니다." },
      { title: "정액 수임료 옵션", desc: "대부분의 사건은 착수 전에 범위와 비용을 확정해, 예상치 못한 청구서가 없습니다." },
      { title: "24시간 내 회신", desc: "모든 문의는 영업일 기준 하루 안에 담당 변호사가 직접 답변드립니다." },
    ],
    lawyers: [
      {
        name: "한지훈 대표변호사",
        role: "대표변호사",
        credentials: "서울대학교 법학전문대학원 · 사법연수원 39기 · 경력 18년",
        bio: "기업 자문·M&A 실무를 총괄하며 300건 이상의 투자·인수 거래를 종결했습니다. 그린 법률사무소를 설립하기 전 벤처투자사 2곳에서 사내변호사로 근무한 경험 덕분에, 계약서를 창업자의 시각에서 — 지금 뭐라고 쓰여 있는지가 아니라 나중에 실제로 무엇을 부담하게 되는지로 — 읽습니다. 지금도 첫 상담은 직접 진행합니다.",
        focus: ["M&A", "벤처 투자", "기업 지배구조"],
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "조서린 변호사",
        role: "기업법무 · 12년차",
        credentials: "뉴욕대학교(NYU) 로스쿨 · 뉴욕주 변호사 · 경력 12년",
        bio: "투자 라운드와 M&A 딜 구조를 설계합니다. 핀테크 기업 사내변호사로 4년간 근무한 경험이 협상 방식에 그대로 드러나는데, 어떤 조항이 실제로 집행되고 어떤 조항이 협상용 문구에 그치는지 잘 압니다. 프리시드 노트부터 800억 원 규모 시리즈 C까지 다양한 규모의 투자 라운드를 종결했습니다.",
        focus: ["기업 금융", "M&A", "투자자 대응"],
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "윤재훈 변호사",
        role: "분쟁·소송 · 9년차",
        credentials: "고려대학교 법학전문대학원 · 사법연수원 41기 · 경력 9년",
        bio: "합의보다 판결까지 끌고 가는 소송 변호사로, 항소심에서도 다수 승소 경험이 있습니다. 재판까지 갈 수 있는 로펌이 다른 모든 사건의 합의 조건도 더 유리하게 만든다는 믿음으로 실무를 운영하며, 실제로 상대방 변호사도 법정에서 그를 마주한 뒤에는 협상 태도가 달라집니다. 계약 분쟁, 가처분, 판결 집행 관련 소송팀을 이끌고 있습니다.",
        focus: ["상사 소송", "가처분", "강제집행"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "임소연 변호사",
        role: "노동·공정거래 · 7년차",
        credentials: "포드햄대학교 로스쿨 · 뉴욕주 변호사 · 경력 7년",
        bio: "근로계약과 광고 표시 조항을 지금 당장이 아니라 다음 심사 주기까지 버티도록 다시 씁니다. 경업금지와 광고 컴플라이언스 관련 지역별 법 개정 동향을 꾸준히 추적하며, 서명 당시엔 적법했지만 지금은 그렇지 않은 조항을 먼저 짚어냅니다. 분쟁이 발생하면 노동위·EEOC 대응도 직접 맡습니다.",
        focus: ["노동법", "광고 컴플라이언스", "EEOC 대응"],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
      },
    ],
    cta: {
      title: "특정 변호사와 상담을 원하시나요?",
      body: "사건 내용을 알려주시면 담당 파트너를 바로 연결해드립니다.",
      button: "상담 예약하기",
    },
    footer: "© 2025 그린 법률사무소. 변호사 광고 심의필. 대한변호사협회 광고심사 제2024-000123호.",
  },
} as const;

export default function GreenLawLawyers({ lang }: { lang: Lang }) {
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
            <Link href={navPaths.lawyers} className="text-[#0b1a2a]">{t.nav.lawyers}</Link>
            <Link href={navPaths.insights} className="transition hover:text-[#0b1a2a]">{t.nav.insights}</Link>
            <Link href={navPaths.visit} className="transition hover:text-[#0b1a2a]">{t.nav.visit}</Link>
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
              <Link href={navPaths.lawyers} onClick={() => setOpen(false)} className="py-2 text-[#0b1a2a]">{t.nav.lawyers}</Link>
              <Link href={navPaths.insights} onClick={() => setOpen(false)} className="py-2">{t.nav.insights}</Link>
              <Link href={navPaths.visit} onClick={() => setOpen(false)} className="py-2">{t.nav.visit}</Link>
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

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-[#0b1a2a]/10 sm:grid-cols-3">
          {t.principles.map((p) => (
            <div key={p.title} className="bg-white p-6">
              <h2 className="font-serif text-lg break-keep text-balance">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 sm:grid-cols-2">
          {t.lawyers.map((l) => (
            <div key={l.name} className="flex gap-6">
              <div className="relative aspect-[3/4] w-32 shrink-0 overflow-hidden bg-[#0b1a2a]/5">
                <Image src={l.image} alt={l.name} fill className="object-cover grayscale" />
              </div>
              <div>
                <h2 className="font-serif text-xl break-keep text-balance">{l.name}</h2>
                <p className="mt-1 text-xs font-semibold text-[#7c8c47]">{l.role}</p>
                <p className="mt-1 text-[11px] text-[#0b1a2a]/50 break-keep text-pretty">{l.credentials}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#0b1a2a]/70 break-keep text-pretty">{l.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {l.focus.map((f) => (
                    <span key={f} className="rounded-full bg-[#f5f4ee] px-3 py-1 text-[11px] font-medium text-[#0b1a2a]/70">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-sm bg-[#0b1a2a] px-8 py-14 text-center text-white md:px-16">
          <h2 className="font-serif text-2xl md:text-3xl break-keep text-balance">{t.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70 break-keep text-pretty">{t.cta.body}</p>
          <Link
            href={navPaths.visit}
            className="mt-8 inline-block rounded-sm bg-white px-7 py-3.5 text-xs font-semibold tracking-widest text-[#0b1a2a] transition hover:bg-white/90"
          >
            {t.cta.button}
          </Link>
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
