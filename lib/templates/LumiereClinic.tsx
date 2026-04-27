import Image from "next/image";

const treatments = [
  { title: "스킨 부스터", desc: "수분·결 회복", price: "30분 / 22만원~" },
  { title: "레이저 토닝", desc: "잡티·색소 케어", price: "20분 / 18만원~" },
  { title: "리프팅", desc: "탄력·윤곽 개선", price: "40분 / 80만원~" },
  { title: "여드름 케어", desc: "트러블 진정", price: "30분 / 12만원~" },
];

const doctors = [
  {
    name: "이수진 원장",
    role: "대표원장 · 피부과 전문의",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "박민호 원장",
    role: "레이저 시술 전담의",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "정유나 원장",
    role: "리프팅 · 윤곽 전담의",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop",
  },
];

const reviews = [
  { rating: 5, text: "예약부터 진료까지 너무 깔끔했어요. 결과도 만족스럽습니다.", who: "30대 여성 · 스킨부스터" },
  { rating: 5, text: "친절하게 상담해주시고 무리한 시술 권유가 없어 신뢰가 갑니다.", who: "40대 여성 · 리프팅" },
  { rating: 5, text: "노쇼 알림톡까지 자동으로 와서 일정 관리가 편했어요.", who: "20대 여성 · 토닝" },
];

export default function LumiereClinic() {
  return (
    <div className="bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9b6b4d] text-xs font-bold text-white">L</span>
            <span className="text-base font-semibold tracking-wide">LUMIÈRE CLINIC</span>
          </div>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            <a>시술안내</a>
            <a>의료진</a>
            <a>예약</a>
            <a>후기</a>
            <a>오시는 길</a>
          </nav>
          <a className="rounded-full bg-[#9b6b4d] px-5 py-2 text-xs font-semibold text-white">
            예약하기
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#f9f3ee] via-white to-[#f5ebe2]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-block rounded-full bg-[#9b6b4d]/10 px-3 py-1 text-xs font-semibold text-[#9b6b4d]">
              피부과 전문의 진료
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              빛나는 피부의 시작,<br />
              <span className="text-[#9b6b4d]">루미에르</span>에서.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              개인 피부 진단 후 1:1로 설계되는 맞춤 시술. 무리한 권유 없이, 결과로 증명합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                온라인 예약
              </a>
              <a className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold">
                무료 피부 진단
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-6">
              <div>
                <div className="text-2xl font-bold">14년</div>
                <div className="mt-1 text-xs text-slate-500">전문의 경력</div>
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="mt-1 text-xs text-slate-500">재진료율</div>
              </div>
              <div>
                <div className="text-2xl font-bold">3,200+</div>
                <div className="mt-1 text-xs text-slate-500">월 평균 진료</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop"
              alt="Clinic"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#9b6b4d]">TREATMENTS</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">시그니처 시술</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#9b6b4d] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f9f3ee] text-[#9b6b4d]">✦</div>
              <h3 className="mt-5 text-lg font-bold">{t.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{t.desc}</p>
              <p className="mt-6 text-sm font-semibold text-[#9b6b4d]">{t.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#9b6b4d]">DOCTORS</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">의료진 소개</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {doctors.map((d) => (
              <div key={d.name} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image src={d.image} alt={d.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{d.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{d.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#9b6b4d] to-[#7a4f35] p-10 text-white md:p-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/70">ONLINE BOOKING</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">간편한 온라인 예약</h2>
          <p className="mt-3 max-w-md text-white/80">시술 선택부터 결제까지 1분이면 완료됩니다.</p>
          <div className="mt-10 grid gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur sm:grid-cols-2">
            <label className="block">
              <span className="text-xs text-white/70">희망 시술</span>
              <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">스킨 부스터 ▾</div>
            </label>
            <label className="block">
              <span className="text-xs text-white/70">희망 일시</span>
              <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">2025-08-12 (화) 14:30</div>
            </label>
            <label className="block">
              <span className="text-xs text-white/70">담당 의료진</span>
              <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">이수진 원장</div>
            </label>
            <label className="block">
              <span className="text-xs text-white/70">연락처</span>
              <div className="mt-2 rounded-lg bg-white/20 px-4 py-3 text-sm">010-****-****</div>
            </label>
          </div>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            예약 확정하기 →
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl font-bold md:text-3xl">실제 환자 후기</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-[#f0a04b]">{"★".repeat(r.rating)}</div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">“{r.text}”</p>
              <p className="mt-5 text-xs text-slate-500">— {r.who}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-slate-900 py-10 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-white">LUMIÈRE CLINIC</div>
            <p className="mt-1 text-xs">서울특별시 강남구 테헤란로 ○○○ · 02-000-0000</p>
          </div>
          <p className="text-xs">© 2025 Lumière Clinic. 의료광고심의필 제2025-XXXXXX호</p>
        </div>
      </footer>
    </div>
  );
}
