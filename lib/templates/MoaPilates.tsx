import Image from "next/image";

const programs = [
  {
    title: "그룹 리포머",
    duration: "50분",
    desc: "최대 6인 소수정예 리포머 클래스. 자세 교정과 코어 강화에 최적.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "1:1 프라이빗",
    duration: "50분",
    desc: "개인 체형·통증에 맞춘 완전 맞춤 수업. 전담 강사 배정.",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "모닝 매트",
    duration: "40분",
    desc: "출근 전 6시 30분, 하루를 가볍게 시작하는 매트 클래스.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=80&auto=format&fit=crop",
  },
];

const trainers = [
  {
    name: "Yuna",
    role: "원장 · 8년차",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Soo",
    role: "리포머 전담 · 6년차",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Hana",
    role: "재활 전문 · 7년차",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop",
  },
];

const plans = [
  { name: "1:1 프라이빗", price: "10회 / 95만원", features: ["전담 강사", "개인 일정 우선 예약", "상담 + 진단 무료"] },
  { name: "그룹 리포머", price: "월 정기 / 28만원", features: ["주 2회 무제한", "노쇼 1회 면제", "강사 자유 선택"], highlight: true },
  { name: "모닝 매트", price: "10회 / 18만원", features: ["평일 06:30/07:30", "사용 기한 6개월", "친구 1회 동반 무료"] },
];

export default function MoaPilates() {
  return (
    <div className="bg-[#0e0d0c] text-white">
      <header className="border-b border-white/10 bg-[#0e0d0c]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold tracking-[0.3em]">MOA</div>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-white/70 md:flex">
            <a>Programs</a>
            <a>Trainers</a>
            <a>Membership</a>
            <a>Studio</a>
          </nav>
          <a className="rounded-full border border-white px-5 py-2 text-xs uppercase tracking-widest">
            Book a Class
          </a>
        </div>
      </header>

      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1800&q=80&auto=format&fit=crop"
          alt="Moa Pilates"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-[#0e0d0c]/40 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">SEONGSU · SINCE 2021</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-light leading-[1.05] md:text-7xl">
            Move quietly,<br />
            <span className="italic font-serif">stand stronger.</span>
          </h1>
          <p className="mt-6 max-w-md text-white/70">
            성수의 작은 골목, 6인 정원 스튜디오. 매일 같은 자리에서 한 사람의 자세가 달라집니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Programs</p>
            <h2 className="mt-3 text-4xl font-light md:text-5xl">3가지 클래스</h2>
          </div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="group overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="text-xl">{p.title}</h3>
                <span className="text-xs uppercase tracking-widest text-white/50">{p.duration}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 text-[#0e0d0c]">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-black/50">Trainers</p>
          <h2 className="mt-3 text-4xl font-light md:text-5xl">우리의 강사들</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trainers.map((t) => (
              <div key={t.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-black/5">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-2xl">{t.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-black/50">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-white/50">Membership</p>
        <h2 className="mt-3 text-center text-4xl font-light md:text-5xl">필요한 만큼만, 정직하게.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-8 ring-1 ${
                p.highlight ? "bg-white text-[#0e0d0c] ring-transparent" : "bg-white/[0.04] ring-white/10"
              }`}
            >
              <h3 className="text-lg uppercase tracking-widest">{p.name}</h3>
              <p className="mt-6 text-3xl font-light">{p.price}</p>
              <ul className={`mt-8 space-y-2 text-sm ${p.highlight ? "text-black/70" : "text-white/70"}`}>
                {p.features.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
              <a
                className={`mt-10 block rounded-full px-5 py-3 text-center text-xs uppercase tracking-widest ${
                  p.highlight
                    ? "bg-[#0e0d0c] text-white"
                    : "border border-white/30"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0e0d0c] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-light md:text-5xl">첫 수업, 무료입니다.</h2>
          <p className="mt-4 text-white/60">한 번의 1:1 진단으로 어떤 클래스가 맞을지 함께 정해드립니다.</p>
          <a className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0e0d0c]">
            무료 체험 예약 →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-xs uppercase tracking-widest text-white/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <div className="font-bold text-white/80 tracking-[0.3em]">MOA PILATES</div>
          <div>© 2025 MOA · Seoul Seongsu</div>
        </div>
      </footer>
    </div>
  );
}
