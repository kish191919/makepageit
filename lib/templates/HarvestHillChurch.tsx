import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    brand: "HARVEST HILL CHURCH",
    nav: { times: "Service Times", ministries: "Ministries", sermons: "Sermons", give: "Give", visit: "Plan a Visit" },
    visitCta: "Plan Your Visit",
    hero: {
      tag: "A COMMUNITY CHURCH · ALL WELCOME",
      title: ["Come as you are,"],
      titleAccent: "belong from day one",
      titleEnd: ".",
      body: "Harvest Hill is a family of all ages seeking to know God and love our neighbors well. Join us Sunday — no perfect attire, no perfect answers required.",
      ctaPrimary: "Plan Your Visit",
      ctaSecondary: "Watch Online",
      stats: [
        { value: "3", label: "Sunday services" },
        { value: "40+ yrs", label: "Serving this town" },
        { value: "12", label: "Weekly small groups" },
      ],
    },
    timesSection: { eyebrow: "SERVICE TIMES", title: "Join us this Sunday" },
    times: [
      { title: "Traditional Service", desc: "Hymns & communion", time: "9:00 AM · Sanctuary" },
      { title: "Contemporary Service", desc: "Full band worship", time: "10:45 AM · Main Hall" },
      { title: "Evening Gathering", desc: "Casual & discussion-based", time: "6:00 PM · Fellowship Hall" },
      { title: "Kids & Nursery", desc: "Ages 0–10, all services", time: "9:00 AM – 12:00 PM" },
    ],
    ministriesSection: { eyebrow: "MINISTRIES", title: "Find your place here" },
    ministries: [
      {
        name: "Harvest Kids",
        role: "Age-graded Bible teaching, birth through 5th grade",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Student Ministry",
        role: "Weekly gatherings for 6th–12th grade",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "Community Outreach",
        role: "Food pantry, shelter meals, and local partnerships",
        image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&q=80&auto=format&fit=crop",
      },
    ],
    give: {
      eyebrow: "GIVE",
      title: "Support the mission of Harvest Hill",
      body: "Your generosity funds ministries, outreach, and the day-to-day life of this church family.",
      fields: [
        { label: "Gift Type", value: "One-time ▾" },
        { label: "Amount", value: "$50" },
        { label: "Fund", value: "General Fund" },
        { label: "Payment", value: "Card ending ****" },
      ],
      submit: "Give Now →",
    },
    sermonsTitle: "Recent messages",
    sermons: [
      { rating: 5, text: "\"Rooted: Faith That Holds\" — Part 3 of our fall series on the parables.", who: "Pastor James Colton · Sep 21" },
      { rating: 5, text: "\"Rooted: Faith That Holds\" — Part 2, on prayer in ordinary days.", who: "Pastor James Colton · Sep 14" },
      { rating: 5, text: "\"Rooted: Faith That Holds\" — Series kickoff on what it means to belong.", who: "Pastor James Colton · Sep 7" },
    ],
    footer: { address: "760 Harvest Hill Rd, Asheville NC 28806 · (828) 555-0119", legal: "© 2026 Harvest Hill Church. All are welcome, always." },
  },
  ko: {
    brand: "HARVEST HILL CHURCH",
    nav: { times: "예배 시간", ministries: "사역 소개", sermons: "설교", give: "헌금", visit: "방문 안내" },
    visitCta: "방문 신청하기",
    hero: {
      tag: "지역 공동체 교회 · 누구나 환영",
      title: ["있는 모습 그대로,"],
      titleAccent: "처음부터 함께",
      titleEnd: "하는 교회입니다.",
      body: "하베스트힐은 하나님을 알아가고 이웃을 사랑하는 모든 세대의 공동체입니다. 완벽한 복장도, 완벽한 답도 필요 없습니다. 이번 주 함께 예배해요.",
      ctaPrimary: "방문 신청하기",
      ctaSecondary: "온라인 예배 보기",
      stats: [
        { value: "3부", label: "주일 예배" },
        { value: "40년+", label: "지역 섬김 역사" },
        { value: "12개", label: "주간 소그룹" },
      ],
    },
    timesSection: { eyebrow: "SERVICE TIMES", title: "이번 주일, 함께해요" },
    times: [
      { title: "전통 예배", desc: "찬송가 · 성찬식", time: "오전 9:00 · 본당" },
      { title: "찬양 예배", desc: "밴드 워십 중심", time: "오전 10:45 · 대예배실" },
      { title: "저녁 모임", desc: "편안한 분위기의 나눔", time: "오후 6:00 · 친교실" },
      { title: "유아 · 유치부", desc: "0~10세, 모든 예배 시간 운영", time: "오전 9:00 – 오후 12:00" },
    ],
    ministriesSection: { eyebrow: "MINISTRIES", title: "함께할 사역을 찾아보세요" },
    ministries: [
      {
        name: "하베스트 키즈",
        role: "영유아부터 초등부까지 연령별 성경 교육",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "청소년부",
        role: "중·고등부를 위한 주간 모임",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80&auto=format&fit=crop",
      },
      {
        name: "지역 섬김 사역",
        role: "푸드뱅크, 노숙인 급식, 지역 협력 사업",
        image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&q=80&auto=format&fit=crop",
      },
    ],
    give: {
      eyebrow: "GIVE",
      title: "하베스트힐의 사역을 후원해주세요",
      body: "여러분의 헌금은 사역과 섬김, 교회 공동체의 일상을 든든히 세웁니다.",
      fields: [
        { label: "헌금 유형", value: "일시 후원 ▾" },
        { label: "금액", value: "$50" },
        { label: "사용처", value: "일반 헌금" },
        { label: "결제 수단", value: "카드 (**** 끝자리)" },
      ],
      submit: "후원하기 →",
    },
    sermonsTitle: "최근 설교",
    sermons: [
      { rating: 5, text: "「뿌리: 흔들리지 않는 믿음」 3부 — 가을 비유 시리즈.", who: "제임스 콜튼 목사 · 9월 21일" },
      { rating: 5, text: "「뿌리: 흔들리지 않는 믿음」 2부 — 일상 속 기도에 관하여.", who: "제임스 콜튼 목사 · 9월 14일" },
      { rating: 5, text: "「뿌리: 흔들리지 않는 믿음」 시리즈 시작 — 소속됨의 의미.", who: "제임스 콜튼 목사 · 9월 7일" },
    ],
    footer: { address: "서울특별시 은평구 harvest로 ○○ · 02-000-0000", legal: "© 2026 Harvest Hill Church. 누구나, 언제나 환영합니다." },
  },
} as const;

export default function HarvestHillChurch({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a4762f] text-xs font-bold text-white">H</span>
            <span className="text-base font-semibold tracking-wide">{t.brand}</span>
          </div>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <a href="#times" className="transition hover:text-[#a4762f]">{t.nav.times}</a>
            <a href="#ministries" className="transition hover:text-[#a4762f]">{t.nav.ministries}</a>
            <a href="#sermons" className="transition hover:text-[#a4762f]">{t.nav.sermons}</a>
            <a href="#give" className="transition hover:text-[#a4762f]">{t.nav.give}</a>
            <a href="#visit" className="transition hover:text-[#a4762f]">{t.nav.visit}</a>
          </nav>
          <a href="#visit" className="rounded-full bg-[#a4762f] px-5 py-2 text-xs font-semibold text-white">
            {t.visitCta}
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#faf5ec] via-white to-[#f5ede0]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-block rounded-full bg-[#a4762f]/10 px-3 py-1 text-xs font-semibold text-[#a4762f]">
              {t.hero.tag}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl break-keep text-balance">
              {t.hero.title[0]}<br className="hidden md:block" />
              <span className="text-[#a4762f]">{t.hero.titleAccent}</span>{t.hero.titleEnd}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 break-keep text-pretty">
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                {t.hero.ctaPrimary}
              </a>
              <a className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-6">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&q=80&auto=format&fit=crop"
              alt="Harvest Hill Church"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="times" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#a4762f]">{t.timesSection.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl break-keep text-balance">{t.timesSection.title}</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.times.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#a4762f] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf5ec] text-[#a4762f]">✦</div>
              <h3 className="mt-5 text-lg font-bold break-keep text-balance">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-500 break-keep text-pretty">{s.desc}</p>
              <p className="mt-6 text-sm font-semibold text-[#a4762f]">{s.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ministries" className="scroll-mt-24 bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#a4762f]">{t.ministriesSection.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl break-keep text-balance">{t.ministriesSection.title}</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.ministries.map((d) => (
              <div key={d.name} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image src={d.image} alt={d.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold break-keep text-balance">{d.name}</h3>
                  <p className="mt-1 text-sm text-slate-500 break-keep text-pretty">{d.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="give" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#a4762f] to-[#7c5a24] p-10 text-white md:p-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/70">{t.give.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl break-keep text-balance">{t.give.title}</h2>
          <p className="mt-3 max-w-md text-white/80 break-keep text-pretty">{t.give.body}</p>
          <div className="mt-10 grid gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur sm:grid-cols-2">
            {t.give.fields.map((f) => (
              <label key={f.label} className="block">
                <span className="text-xs text-white/70">{f.label}</span>
                <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">{f.value}</div>
              </label>
            ))}
          </div>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            {t.give.submit}
          </button>
        </div>
      </section>

      <section id="sermons" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24">
        <h2 className="text-2xl font-bold md:text-3xl break-keep text-balance">{t.sermonsTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.sermons.map((r, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm leading-relaxed text-slate-700 break-keep text-pretty">{r.text}</p>
              <p className="mt-5 text-xs text-slate-500">— {r.who}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="visit" className="scroll-mt-24 border-t border-slate-100 bg-slate-900 py-10 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-white">{t.brand}</div>
            <p className="mt-1 text-xs break-keep text-pretty">{t.footer.address}</p>
          </div>
          <p className="text-xs break-keep text-pretty">{t.footer.legal}</p>
        </div>
      </footer>
    </div>
  );
}
