"use client";

import Image from "next/image";
import Link from "next/link";
import { localePath, type Lang } from "@/lib/i18n";
import { useMobileNav } from "@/lib/useMobileNav";
import { MenuIcon } from "@/components/MenuIcon";

const copy = {
  en: {
    nav: { work: "Work", services: "Services", studio: "Studio", journal: "Journal" },
    bookCta: "Book",
    eyebrow: "Studio",
    titleA: "Light",
    titleB: "becomes record,",
    titleC: "in this room.",
    body: "A fourth-floor walk-up where afternoon light lingers longest. Two rooms — daylight and infinity cyc — where we've been making photographs for six years.",
    equipmentTitle: "In the room",
    equipment: [
      { label: "Daylight studio", desc: "18ft north-facing window, the softest light in the building from 11am to 4pm." },
      { label: "Infinity cyc", desc: "White seamless cove, 4 strobe heads, ready for product and portrait work." },
      { label: "Client lounge", desc: "A quiet corner for pre-shoot consults and wardrobe changes." },
      { label: "Full kit", desc: "Medium format + full-frame bodies, prime lenses, continuous and strobe lighting." },
    ],
    founderEyebrow: "Behind the camera",
    founderTitle: "Shot by one person, every time.",
    founderBody: "Nova Studio is a one-photographer operation by design — every booking, every edit, every frame passes through the same hands. That's the whole promise: consistency, from the first email to the final print.",
    footer: { copyright: "© 2025 Nova Studio · Brooklyn", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
  ko: {
    nav: { work: "Work", services: "Services", studio: "Studio", journal: "Journal" },
    bookCta: "Book",
    eyebrow: "Studio",
    titleA: "빛이",
    titleB: "기록이 되는",
    titleC: "공간.",
    body: "성수동 끝, 햇빛이 가장 오래 머무는 4층. 자연광 스튜디오와 무한 백, 두 개의 공간에서 6년째 사진을 찍습니다.",
    equipmentTitle: "스튜디오 안",
    equipment: [
      { label: "자연광 스튜디오", desc: "북향 대형 창, 오전 11시부터 오후 4시까지 가장 부드러운 빛이 들어옵니다." },
      { label: "무한 백", desc: "화이트 시임리스 배경과 4개의 스트로보, 제품·인물 촬영에 최적화되어 있습니다." },
      { label: "클라이언트 라운지", desc: "촬영 전 상담과 의상 교체를 위한 조용한 공간입니다." },
      { label: "촬영 장비", desc: "중형/풀프레임 바디, 단렌즈, 지속광과 스트로보 조명을 모두 보유하고 있습니다." },
    ],
    founderEyebrow: "카메라 뒤에서",
    founderTitle: "언제나 한 사람이 촬영합니다.",
    founderBody: "노바 스튜디오는 처음부터 1인 체제로 운영됩니다 — 모든 예약, 보정, 한 컷 한 컷이 같은 손을 거칩니다. 첫 문의 메일부터 마지막 인화까지, 한결같음이 저희의 유일한 약속입니다.",
    footer: { copyright: "© 2025 Nova Studio · Seoul", links: { instagram: "Instagram", vimeo: "Vimeo", mail: "Mail" } },
  },
} as const;

export default function NovaStudioStudio({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { open, setOpen, ref } = useMobileNav<HTMLElement>();
  const home = localePath(lang, "/portfolio/nova-studio");
  const workPath = localePath(lang, "/portfolio/nova-studio/work");
  const servicesPath = localePath(lang, "/portfolio/nova-studio/services");
  const journalPath = localePath(lang, "/portfolio/nova-studio/journal");

  return (
    <div className="bg-black text-white">
      <header ref={ref} className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href={home} className="text-2xl font-light tracking-[0.5em]">NOVA</Link>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.3em] text-white/80 md:flex">
            <Link href={workPath} className="transition hover:text-white/60">{t.nav.work}</Link>
            <Link href={servicesPath} className="transition hover:text-white/60">{t.nav.services}</Link>
            <span className="border-b border-white pb-1 text-white">{t.nav.studio}</span>
            <Link href={journalPath} className="transition hover:text-white/60">{t.nav.journal}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={`${home}#booking`} className="hidden rounded-none border-b-2 border-white pb-1 text-xs uppercase tracking-[0.3em] sm:inline-block">
              {t.bookCta}
            </Link>
            <button
              type="button"
              aria-label="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center border border-white/30 text-white md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-white/80">
              <Link href={workPath} onClick={() => setOpen(false)} className="py-2">{t.nav.work}</Link>
              <Link href={servicesPath} onClick={() => setOpen(false)} className="py-2">{t.nav.services}</Link>
              <span className="py-2 text-white">{t.nav.studio}</span>
              <Link href={journalPath} onClick={() => setOpen(false)} className="py-2">{t.nav.journal}</Link>
            </nav>
            <Link
              href={`${home}#booking`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-none border-b-2 border-white pb-1 text-xs uppercase tracking-[0.3em]"
            >
              {t.bookCta}
            </Link>
          </div>
        )}
      </header>

      <section className="bg-white py-24 text-black">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/50">{t.eyebrow}</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight md:text-6xl break-keep text-balance">
              {t.titleA}<br className="hidden md:block" />
              <span className="italic">{t.titleB}</span><br className="hidden md:block" />{t.titleC}
            </h1>
            <p className="mt-6 leading-relaxed text-black/70 break-keep text-pretty">{t.body}</p>
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl break-keep text-balance">{t.equipmentTitle}</h2>
          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
            {t.equipment.map((e) => (
              <div key={e.label} className="bg-black p-8">
                <h3 className="font-serif text-xl break-keep text-balance">{e.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 break-keep text-pretty">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1000&q=80&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t.founderEyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight break-keep text-balance md:text-4xl">{t.founderTitle}</h2>
            <p className="mt-6 leading-relaxed text-white/60 break-keep text-pretty">{t.founderBody}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs uppercase tracking-[0.3em] text-white/40 md:flex-row">
          <Link href={home} className="text-base font-light tracking-[0.5em] text-white/80">NOVA</Link>
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
