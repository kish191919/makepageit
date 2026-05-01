import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    nav: { work: "Work", services: "Services", studio: "Studio", journal: "Journal" },
    bookCta: "Book",
    hero: {
      eyebrow: "Photographer · Brooklyn",
      tagline: "The most honest light, kept for as long as possible.",
    },
    selected: { eyebrow: "Selected Work", years: "2024 — 2025" },
    studio: {
      eyebrow: "Studio",
      titleA: "Light",
      titleB: "becomes record,",
      titleC: "in this room.",
      body: "A fourth-floor walk-up where afternoon light lingers longest. Two rooms — daylight and infinity cyc — where we've been making photographs for six years.",
    },
    servicesSection: { eyebrow: "Services", title: "What we shoot" },
    services: [
      { title: "Wedding", desc: "Full ceremony + 100 edited frames", price: "from $2,400" },
      { title: "Family", desc: "1 hour, studio or location", price: "from $480" },
      { title: "Brand", desc: "Headshots, products, lookbooks", price: "from $720" },
      { title: "Editorial", desc: "Fashion · magazine concepts", price: "from $1,200" },
    ],
    serviceFromLabel: "From",
    booking: {
      eyebrow: "Booking",
      title: "Let's make something.",
      body: "Send us a date and a concept — we reply within 24 hours.",
      placeholders: { name: "Name", email: "Email", type: "Shoot type", date: "Preferred date", message: "References or message" },
      submit: "Send Inquiry →",
    },
    footer: { copyright: "© 2025 Nova Studio · Brooklyn", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
  ko: {
    nav: { work: "Work", services: "Services", studio: "Studio", journal: "Journal" },
    bookCta: "Book",
    hero: {
      eyebrow: "Photographer · Seoul",
      tagline: "한 컷에 담을 수 있는 가장 정직한 빛을, 가장 오래 남도록.",
    },
    selected: { eyebrow: "Selected Work", years: "2024 — 2025" },
    studio: {
      eyebrow: "Studio",
      titleA: "빛이",
      titleB: "기록이 되는",
      titleC: "공간.",
      body: "성수동 끝, 햇빛이 가장 오래 머무는 4층. 자연광 스튜디오와 무한 백, 두 개의 공간에서 6년째 사진을 찍습니다.",
    },
    servicesSection: { eyebrow: "Services", title: "촬영 안내" },
    services: [
      { title: "Wedding", desc: "본식 + 데이터 100컷", price: "1,200,000~" },
      { title: "Family", desc: "스튜디오 / 야외 1시간", price: "380,000~" },
      { title: "Brand", desc: "프로필 / 상품 / 룩북", price: "550,000~" },
      { title: "Editorial", desc: "패션 · 매거진 컨셉", price: "880,000~" },
    ],
    serviceFromLabel: "From",
    booking: {
      eyebrow: "Booking",
      title: "함께 작업해요.",
      body: "촬영 일정과 컨셉을 알려주시면 24시간 내 답장드립니다.",
      placeholders: { name: "이름", email: "이메일", type: "촬영 종류", date: "희망 일자", message: "레퍼런스 또는 메시지" },
      submit: "Send Inquiry →",
    },
    footer: { copyright: "© 2025 Nova Studio · Seoul", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
} as const;

const gallery = [
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=80&auto=format&fit=crop", aspect: "aspect-[4/5]" },
];

export default function NovaStudio({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="bg-black text-white">
      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-light tracking-[0.5em]">NOVA</div>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.3em] text-white/80 md:flex">
            <a>{t.nav.work}</a>
            <a>{t.nav.services}</a>
            <a>{t.nav.studio}</a>
            <a>{t.nav.journal}</a>
          </nav>
          <a className="rounded-none border-b-2 border-white pb-1 text-xs uppercase tracking-[0.3em]">
            {t.bookCta}
          </a>
        </div>
      </header>

      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=2000&q=85&auto=format&fit=crop"
          alt="Nova Studio"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl flex-col px-6 pb-20">
          <p className="text-xs uppercase tracking-[0.5em] text-white/70">{t.hero.eyebrow}</p>
          <h1 className="mt-6 text-6xl font-light leading-[0.95] md:text-[8rem]">
            NOVA<span className="italic font-serif">.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm text-white/70">
            {t.hero.tagline}
          </p>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t.selected.eyebrow}</p>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">{t.selected.years}</span>
          </div>
          <div className="mt-12 columns-2 gap-3 md:columns-4">
            {gallery.map((g, i) => (
              <div key={i} className={`relative mb-3 overflow-hidden ${g.aspect} break-inside-avoid`}>
                <Image src={g.src} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-black">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/50">{t.studio.eyebrow}</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">
              {t.studio.titleA}<br />
              <span className="italic">{t.studio.titleB}</span><br />{t.studio.titleC}
            </h2>
            <p className="mt-6 leading-relaxed text-black/70">
              {t.studio.body}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1554080353-321e452ccf19?w=900&q=80&auto=format&fit=crop" alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] translate-y-12 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=900&q=80&auto=format&fit=crop" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-white/50">{t.servicesSection.eyebrow}</p>
          <h2 className="mt-3 text-center font-serif text-5xl">{t.servicesSection.title}</h2>
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.map((s) => (
              <div key={s.title} className="bg-black p-8 transition hover:bg-white/5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-white/40">{t.serviceFromLabel}</span>
                </div>
                <p className="mt-4 text-sm text-white/60">{s.desc}</p>
                <p className="mt-8 text-lg">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-none border border-white/20 p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t.booking.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl">{t.booking.title}</h2>
            <p className="mt-3 text-sm text-white/60">
              {t.booking.body}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <input placeholder={t.booking.placeholders.name} className="border-b border-white/30 bg-transparent pb-3 text-sm placeholder:text-white/40 outline-none" />
              <input placeholder={t.booking.placeholders.email} className="border-b border-white/30 bg-transparent pb-3 text-sm placeholder:text-white/40 outline-none" />
              <input placeholder={t.booking.placeholders.type} className="border-b border-white/30 bg-transparent pb-3 text-sm placeholder:text-white/40 outline-none" />
              <input placeholder={t.booking.placeholders.date} className="border-b border-white/30 bg-transparent pb-3 text-sm placeholder:text-white/40 outline-none" />
            </div>
            <textarea rows={3} placeholder={t.booking.placeholders.message} className="mt-6 w-full border-b border-white/30 bg-transparent pb-3 text-sm placeholder:text-white/40 outline-none" />
            <button className="mt-10 w-full rounded-none border border-white py-4 text-xs uppercase tracking-[0.4em] transition hover:bg-white hover:text-black">
              {t.booking.submit}
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs uppercase tracking-[0.3em] text-white/40 md:flex-row">
          <div className="text-base font-light tracking-[0.5em] text-white/80">NOVA</div>
          <div>{t.footer.copyright}</div>
          <div className="flex gap-5">
            <a>{t.footer.links.instagram}</a>
            <a>{t.footer.links.vimeo}</a>
            <a>{t.footer.links.mail}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
