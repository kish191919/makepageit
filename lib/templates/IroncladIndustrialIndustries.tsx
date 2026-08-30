import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: { name: "IRONCLAD", tag: "INDUSTRIAL SUPPLY" },
    nav: { capabilities: "Capabilities", products: "Products", certifications: "Certifications", industries: "Industries", contact: "Contact" },
    quoteCta: "Request a Quote",
    eyebrow: "INDUSTRIES",
    title: "Who we build for",
    intro: "Four sectors where a missed tolerance or a late shipment isn't an inconvenience — it's a program delay.",
    industries: [
      {
        name: "Aerospace",
        desc: "AS9100D-compliant parts for structural and avionics assemblies, with full first-article inspection and material traceability on every lot.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Defense",
        desc: "ITAR-registered production for mission-critical components, from prototype runs through multi-year production contracts.",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Heavy Equipment OEMs",
        desc: "Structural brackets, weldments, and machined housings built to the duty cycles of off-road and industrial equipment.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Medical & Precision Devices",
        desc: "Tight-tolerance machining and CMM-verified inspection for components that go into regulated medical and lab equipment.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 Ironclad Industrial Supply. All rights reserved.",
  },
  ko: {
    brand: { name: "IRONCLAD", tag: "아이언클래드 산업" },
    nav: { capabilities: "생산 역량", products: "제품", certifications: "인증", industries: "적용 산업", contact: "문의" },
    quoteCta: "견적 요청",
    eyebrow: "INDUSTRIES",
    title: "우리가 함께하는 산업",
    intro: "공차 하나, 납기 하루가 곧 프로그램 지연으로 이어지는 네 개 산업 분야입니다.",
    industries: [
      {
        name: "항공우주",
        desc: "AS9100D 기준을 충족하는 구조·항공전자 부품을 생산하며, 모든 로트에 초도품 검사와 재료 이력 추적을 적용합니다.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "방산",
        desc: "ITAR 등록 생산 라인에서 시제품부터 다년간의 양산 계약까지, 핵심 부품을 책임지고 제작합니다.",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "중장비 OEM",
        desc: "오프로드·산업용 장비의 가혹한 듀티 사이클을 견디는 구조용 브래킷, 용접 조립품, 가공 하우징을 제작합니다.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "의료·정밀 기기",
        desc: "규제 대상 의료·실험 장비에 들어가는 부품을 위해, 정밀 공차 가공과 CMM 검증 검사를 수행합니다.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    footer: "© 2025 아이언클래드 산업. All rights reserved.",
  },
} as const;

export default function IroncladIndustrialIndustries({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const home = localePath(lang, "/portfolio/ironclad-industrial");
  const productsPath = localePath(lang, "/portfolio/ironclad-industrial/products");
  const industriesPath = localePath(lang, "/portfolio/ironclad-industrial/industries");

  return (
    <div className="bg-[#23272e] text-[#f2f1ec]">
      <header className="border-b border-white/10 bg-[#1b1e24]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href={home} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[#ff6a13] font-black text-base text-[#1b1e24]">
              I
            </span>
            <div>
              <div className="font-black text-lg uppercase leading-none tracking-tight">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-white/50">{t.brand.tag}</div>
            </div>
          </Link>
          <nav className="hidden gap-7 text-sm font-semibold uppercase tracking-wide text-white/70 md:flex">
            <Link href={`${home}#capabilities`} className="transition hover:text-[#ff6a13]">{t.nav.capabilities}</Link>
            <Link href={productsPath} className="transition hover:text-[#ff6a13]">{t.nav.products}</Link>
            <Link href={`${home}#certifications`} className="transition hover:text-[#ff6a13]">{t.nav.certifications}</Link>
            <Link href={industriesPath} className="text-[#ff6a13]">{t.nav.industries}</Link>
            <Link href={`${home}#contact`} className="transition hover:text-[#ff6a13]">{t.nav.contact}</Link>
          </nav>
          <Link
            href={`${home}#contact`}
            className="hidden bg-[#ff6a13] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1b1e24] sm:inline-block"
          >
            {t.quoteCta}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6a13]">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-black uppercase leading-tight tracking-tight text-4xl md:text-5xl break-keep text-balance">
          {t.title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-white/70 break-keep text-pretty">{t.intro}</p>

        <div className="mt-16 grid gap-16 border-t border-white/10 pt-16">
          {t.industries.map((ind) => (
            <article key={ind.name} className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                <Image src={ind.image} alt={ind.name} fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-black uppercase tracking-tight text-2xl break-keep text-balance">{ind.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70 break-keep text-pretty">{ind.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#1b1e24] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div className="font-black uppercase tracking-tight text-sm text-white">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
