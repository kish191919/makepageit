"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    brand: { name: "Solstice Interiors", tag: "RESIDENTIAL DESIGN STUDIO" },
    nav: { portfolio: "Portfolio", services: "Services", process: "Process", about: "About", contact: "Contact" },
    bookCta: "Book a Design Consult",
    hero: {
      eyebrow: "RESIDENTIAL INTERIOR DESIGN",
      title: ["Houses become homes", "that tell your story."],
      body: "Solstice Interiors is a full-service design and remodeling studio for homeowners who want their space to feel considered, warm, and unmistakably theirs — from a single sunlit corner to a whole-house renovation.",
      ctaPrimary: "Book a Consult",
      ctaSecondary: "View Portfolio",
      servicesLink: "Explore our services",
    },
    gallerySection: { eyebrow: "FEATURED PROJECTS", title: "Recent transformations", viewAll: "View full portfolio" },
    projects: [
      {
        name: "The Cedar Park Kitchen",
        desc: "A dated galley kitchen opened into a warm, sociable heart of the home.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "A Sunlit Reading Nook",
        desc: "A wasted stair landing turned into the most-used seat in the house.",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "The Lakeview Primary Suite",
        desc: "A calm, textural retreat built around morning light and quiet materials.",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "The Elm Street Living Room",
        desc: "Layered vintage and custom pieces around a fireplace the family actually gathers at.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    processSection: { eyebrow: "PROCESS", title: "How a project comes together", viewAll: "See our full process" },
    process: [
      { n: "01", title: "Discover", desc: "We walk your home, listen to how you actually live, and set a scope and budget together." },
      { n: "02", title: "Design", desc: "Concept boards, floor plans, and 3D renders — refined with you until every room feels right." },
      { n: "03", title: "Source", desc: "We source furnishings, fixtures, and materials, and manage trades and installation start to finish." },
      { n: "04", title: "Reveal", desc: "Styling day: the final layer of art, textiles, and objects that make the space feel finished." },
    ],
    consult: {
      eyebrow: "START A PROJECT",
      title: ["Let's talk about", "your space."],
      body: "Every project starts with a short conversation about how you live and what isn't working yet. We'll follow up within two business days with next steps.",
      rows: [
        { label: "CALL", value: "(512) 555-0173" },
        { label: "EMAIL", value: "hello@solsticeinteriors.com" },
        { label: "STUDIO", value: "1804 Barton Springs Rd, Studio 3, Austin TX 78704" },
      ],
      formTitle: "Start Your Project",
      formNote: "Tell us a little about your home — a designer will reach out to schedule your consult.",
      placeholders: {
        name: "Full name",
        phone: "Phone number",
        type: { default: "Project type", t1: "Full Home", t2: "Single Room", t3: "New Construction" },
        budget: { default: "Budget range", b1: "$25k – $75k", b2: "$75k – $150k", b3: "$150k+" },
        message: "Tell us about your space and goals",
      },
      submit: "Request Your Consult",
    },
    footer: "© 2025 Solstice Interiors. All rights reserved.",
  },
  ko: {
    brand: { name: "솔스티스 인테리어", tag: "레지덴셜 디자인 스튜디오" },
    nav: { portfolio: "포트폴리오", services: "서비스", process: "프로세스", about: "소개", contact: "문의" },
    bookCta: "디자인 상담 예약",
    hero: {
      eyebrow: "RESIDENTIAL INTERIOR DESIGN",
      title: ["집이 온전히", "당신의 이야기가 되도록."],
      body: "솔스티스 인테리어는 공간이 근사해 보이는 것을 넘어, 그 안에 사는 사람의 이야기를 담기를 바라는 분들을 위한 종합 인테리어·리모델링 스튜디오입니다. 햇살 드는 작은 구석부터 집 전체 리모델링까지 함께합니다.",
      ctaPrimary: "상담 예약하기",
      ctaSecondary: "포트폴리오 보기",
      servicesLink: "서비스 살펴보기",
    },
    gallerySection: { eyebrow: "FEATURED PROJECTS", title: "최근 프로젝트", viewAll: "전체 포트폴리오 보기" },
    projects: [
      {
        name: "시더파크의 주방",
        desc: "답답했던 일자형 주방을, 가족이 자연스레 모이는 온기 있는 공간으로.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "볕이 드는 독서 코너",
        desc: "버려져 있던 계단참을, 집에서 가장 사랑받는 자리로 바꿨습니다.",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "레이크뷰 안방",
        desc: "아침 햇살과 차분한 소재만으로 완성한 조용한 휴식의 공간.",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "엘름 스트리트 거실",
        desc: "빈티지 가구와 맞춤 제작 가구를 겹겹이 더해, 온 가족이 벽난로 앞에 진짜로 모이는 거실로.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    processSection: { eyebrow: "PROCESS", title: "프로젝트는 이렇게 진행됩니다", viewAll: "전체 프로세스 보기" },
    process: [
      { n: "01", title: "발견", desc: "댁을 직접 둘러보고 실제 생활 방식을 들으며, 함께 범위와 예산을 정합니다." },
      { n: "02", title: "디자인", desc: "컨셉 보드, 평면도, 3D 렌더링을 통해 모든 공간이 마음에 들 때까지 함께 다듬습니다." },
      { n: "03", title: "소싱", desc: "가구·조명·마감재를 소싱하고, 시공부터 설치까지 전 과정을 책임지고 관리합니다." },
      { n: "04", title: "완성", desc: "마지막 스타일링 데이가 되면, 소품과 아트, 텍스타일로 공간에 완성의 숨결을 더합니다." },
    ],
    consult: {
      eyebrow: "START A PROJECT",
      title: ["당신의 공간에 대해", "이야기 나눠요."],
      body: "모든 프로젝트는 지금 어떻게 지내고 계신지, 무엇이 아직 아쉬운지에 대한 짧은 대화에서 시작합니다. 영업일 기준 2일 이내에 다음 단계를 안내드립니다.",
      rows: [
        { label: "CALL", value: "(512) 555-0173" },
        { label: "EMAIL", value: "hello@solsticeinteriors.com" },
        { label: "STUDIO", value: "1804 Barton Springs Rd, Studio 3, Austin TX 78704" },
      ],
      formTitle: "프로젝트 시작하기",
      formNote: "지금 살고 계신 공간에 대해 간단히 알려주시면, 디자이너가 상담 일정을 잡기 위해 연락드립니다.",
      placeholders: {
        name: "성함",
        phone: "연락처",
        type: { default: "프로젝트 유형", t1: "집 전체", t2: "단일 공간", t3: "신축" },
        budget: { default: "예산 범위", b1: "$25k – $75k", b2: "$75k – $150k", b3: "$150k 이상" },
        message: "공간과 원하시는 방향을 알려주세요",
      },
      submit: "상담 신청하기",
    },
    footer: "© 2025 솔스티스 인테리어. All rights reserved.",
  },
} as const;

export default function SolsticeInteriors({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const portfolioPath = localePath(lang, "/portfolio/solstice-interiors/portfolio");
  const servicesPath = localePath(lang, "/portfolio/solstice-interiors/services");
  const processPath = localePath(lang, "/portfolio/solstice-interiors/process");
  const aboutPath = localePath(lang, "/portfolio/solstice-interiors/about");
  const contactPath = localePath(lang, "/portfolio/solstice-interiors/contact");
  const navItems = [
    { label: t.nav.portfolio, href: portfolioPath },
    { label: t.nav.services, href: servicesPath },
    { label: t.nav.process, href: processPath },
    { label: t.nav.about, href: aboutPath },
    { label: t.nav.contact, href: contactPath },
  ];
  return (
    <div className="bg-[#f7f0e6] text-[#2b241d]">
      <header ref={ref} className="border-b border-[#2b241d]/10 bg-[#f7f0e6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c1652f] font-serif text-base text-white">
              S
            </span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">{t.brand.name}</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#2b241d]/50">{t.brand.tag}</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-medium text-[#2b241d]/75 md:flex">
            <Link href={portfolioPath} className="transition hover:text-[#c1652f]">{t.nav.portfolio}</Link>
            <Link href={servicesPath} className="transition hover:text-[#c1652f]">{t.nav.services}</Link>
            <Link href={processPath} className="transition hover:text-[#c1652f]">{t.nav.process}</Link>
            <Link href={aboutPath} className="transition hover:text-[#c1652f]">{t.nav.about}</Link>
            <Link href={contactPath} className="transition hover:text-[#c1652f]">{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={contactPath} className="hidden rounded-full bg-[#c1652f] px-5 py-2.5 text-xs font-semibold tracking-wide text-white sm:inline-block">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2b241d]/20 md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-[#2b241d]/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#2b241d]/75">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="py-2">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href={contactPath} onClick={() => setOpen(false)} className="mt-3 inline-block rounded-full bg-[#c1652f] px-5 py-2.5 text-xs font-semibold tracking-wide text-white">
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section id="services" className="relative scroll-mt-24 overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:items-center md:py-28">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c1652f]">{t.hero.eyebrow}</p>
            <h1 className="mt-6 font-serif text-4xl leading-[1.15] md:text-6xl break-keep text-balance">
              {t.hero.title[0]}
              <br className="hidden md:block" />
              {t.hero.title[1]}
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{t.hero.body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={contactPath} className="rounded-full bg-[#c1652f] px-7 py-3.5 text-sm font-semibold text-white">
                {t.hero.ctaPrimary}
              </Link>
              <Link href={portfolioPath} className="rounded-full border border-[#2b241d]/30 px-7 py-3.5 text-sm font-semibold">
                {t.hero.ctaSecondary}
              </Link>
            </div>
            <Link href={servicesPath} className="mt-6 inline-block text-sm font-semibold text-[#c1652f] hover:underline">
              {t.hero.servicesLink} →
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80&auto=format&fit=crop"
              alt={t.brand.name}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c1652f]">{t.gallerySection.eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl break-keep text-balance">{t.gallerySection.title}</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-6">
          <a className="group relative col-span-6 aspect-[16/10] overflow-hidden rounded-2xl md:col-span-4 md:aspect-auto">
            <Image
              src={t.projects[0].image}
              alt={t.projects[0].name}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
            <div className="absolute bottom-0 left-0 p-5 text-white sm:p-7">
              <h3 className="font-serif text-xl sm:text-2xl break-keep text-balance">{t.projects[0].name}</h3>
              <p className="mt-1 text-sm text-white/80 break-keep text-pretty">{t.projects[0].desc}</p>
            </div>
          </a>
          <a className="group relative col-span-6 aspect-[4/5] overflow-hidden rounded-2xl md:col-span-2">
            <Image
              src={t.projects[1].image}
              alt={t.projects[1].name}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
            <div className="absolute bottom-0 left-0 p-4 text-white sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl break-keep text-balance">{t.projects[1].name}</h3>
              <p className="mt-1 text-sm text-white/80 break-keep text-pretty">{t.projects[1].desc}</p>
            </div>
          </a>
          <a className="group relative col-span-6 aspect-[4/5] overflow-hidden rounded-2xl md:col-span-2">
            <Image
              src={t.projects[2].image}
              alt={t.projects[2].name}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
            <div className="absolute bottom-0 left-0 p-4 text-white sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl break-keep text-balance">{t.projects[2].name}</h3>
              <p className="mt-1 text-sm text-white/80 break-keep text-pretty">{t.projects[2].desc}</p>
            </div>
          </a>
          <a className="group relative col-span-6 aspect-[16/10] overflow-hidden rounded-2xl md:col-span-4 md:aspect-auto">
            <Image
              src={t.projects[3].image}
              alt={t.projects[3].name}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
            <div className="absolute bottom-0 left-0 p-5 text-white sm:p-7">
              <h3 className="font-serif text-xl sm:text-2xl break-keep text-balance">{t.projects[3].name}</h3>
              <p className="mt-1 text-sm text-white/80 break-keep text-pretty">{t.projects[3].desc}</p>
            </div>
          </a>
        </div>
        <Link href={portfolioPath} className="mt-10 inline-block text-sm font-semibold text-[#c1652f] hover:underline">
          {t.gallerySection.viewAll} →
        </Link>
      </section>

      <section id="process" className="scroll-mt-24 bg-[#efe4d2] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c1652f]">{t.processSection.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl break-keep text-balance">{t.processSection.title}</h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map((p) => (
              <div key={p.n} className="border-t border-[#2b241d]/15 pt-6">
                <div className="font-serif text-3xl text-[#c1652f]">{p.n}</div>
                <h3 className="mt-4 font-serif text-xl break-keep text-balance">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{p.desc}</p>
              </div>
            ))}
          </div>
          <Link href={processPath} className="mt-10 inline-block text-sm font-semibold text-[#c1652f] hover:underline">
            {t.processSection.viewAll} →
          </Link>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c1652f]">{t.consult.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl break-keep text-balance">
              {t.consult.title[0]}
              <br className="hidden md:block" />
              {t.consult.title[1]}
            </h2>
            <p className="mt-6 leading-relaxed text-[#2b241d]/70 break-keep text-pretty">{t.consult.body}</p>
            <dl className="mt-10 space-y-3 border-t border-[#2b241d]/10 pt-8 text-sm">
              {t.consult.rows.map((r) => (
                <div key={r.label} className="flex gap-6">
                  <dt className="w-20 font-semibold tracking-widest text-[#2b241d]/50">{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <form className="rounded-2xl bg-[#c1652f] p-6 text-white sm:p-10">
            <h3 className="font-serif text-2xl break-keep text-balance">{t.consult.formTitle}</h3>
            <p className="mt-2 text-xs text-white/70 break-keep text-pretty">{t.consult.formNote}</p>
            <div className="mt-8 space-y-4">
              <input
                placeholder={t.consult.placeholders.name}
                className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/60 outline-none"
              />
              <input
                placeholder={t.consult.placeholders.phone}
                className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/60 outline-none"
              />
              <select className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/80 outline-none">
                <option className="text-[#2b241d]">{t.consult.placeholders.type.default}</option>
                <option className="text-[#2b241d]">{t.consult.placeholders.type.t1}</option>
                <option className="text-[#2b241d]">{t.consult.placeholders.type.t2}</option>
                <option className="text-[#2b241d]">{t.consult.placeholders.type.t3}</option>
              </select>
              <select className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/80 outline-none">
                <option className="text-[#2b241d]">{t.consult.placeholders.budget.default}</option>
                <option className="text-[#2b241d]">{t.consult.placeholders.budget.b1}</option>
                <option className="text-[#2b241d]">{t.consult.placeholders.budget.b2}</option>
                <option className="text-[#2b241d]">{t.consult.placeholders.budget.b3}</option>
              </select>
              <textarea
                rows={3}
                placeholder={t.consult.placeholders.message}
                className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/60 outline-none"
              />
            </div>
            <button className="mt-8 w-full rounded-full bg-white py-3.5 text-xs font-semibold tracking-[0.3em] text-[#c1652f]">
              {t.consult.submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#2b241d]/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#2b241d]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#2b241d]">{t.brand.name}</div>
          <div className="break-keep text-pretty">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
