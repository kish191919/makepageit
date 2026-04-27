import Image from "next/image";

const areas = [
  { title: "기업 자문", desc: "스타트업 · 중견기업 상시 법률 자문, M&A, 투자계약 검토." },
  { title: "지식재산권", desc: "특허·상표 분쟁, 라이선스 계약, IP 포트폴리오 관리." },
  { title: "노동·인사", desc: "근로계약, 해고·징계, 노동위 사건, 부당해고 구제." },
  { title: "분쟁·소송", desc: "민사·상사 소송, 가압류·가처분, 강제집행." },
  { title: "공정거래", desc: "표시광고, 하도급, 가맹사업 분쟁 대응." },
  { title: "형사", desc: "기업 형사, 경제범죄, 수사 단계 변호." },
];

const lawyers = [
  {
    name: "한지훈 대표변호사",
    role: "사법연수원 39기 · 서울대 법대",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "조서린 변호사",
    role: "기업법무 · 12년차",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "윤재훈 변호사",
    role: "분쟁·소송 · 9년차",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "임소연 변호사",
    role: "노동·공정거래 · 7년차",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
  },
];

export default function GreenLaw() {
  return (
    <div className="bg-white text-[#0b1a2a]">
      <header className="border-b border-[#0b1a2a]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#0b1a2a] font-serif text-base text-white">G</span>
            <div>
              <div className="font-serif text-lg leading-none tracking-wide">GREEN LAW</div>
              <div className="mt-0.5 text-[10px] tracking-[0.3em] text-[#0b1a2a]/60">법률사무소</div>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm font-medium text-[#0b1a2a]/80 md:flex">
            <a>업무 영역</a>
            <a>구성원</a>
            <a>주요 사례</a>
            <a>인사이트</a>
            <a>찾아오시는 길</a>
          </nav>
          <a className="rounded-sm bg-[#0b1a2a] px-5 py-2.5 text-xs font-semibold tracking-widest text-white">
            상담 예약
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f4ee]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center md:py-32">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">SINCE 2009</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.15] md:text-6xl">
              결과로 신뢰를<br />증명합니다.
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-[#0b1a2a]/70">
              그린 법률사무소는 16년간 1,200여 건의 기업·개인 사건을 다뤄온 변호사들이 모인 부티크 로펌입니다. 우리는 이기는 법보다 잃지 않는 법을 먼저 봅니다.
            </p>
            <div className="mt-10 flex gap-4">
              <a className="rounded-sm bg-[#0b1a2a] px-7 py-3.5 text-sm font-semibold text-white">
                상담 예약하기
              </a>
              <a className="rounded-sm border border-[#0b1a2a] px-7 py-3.5 text-sm font-semibold">
                업무 영역 보기
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80&auto=format&fit=crop"
              alt="Green Law"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0b1a2a] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-4">
          {[
            { v: "1,200+", l: "누적 사건" },
            { v: "16년", l: "평균 경력" },
            { v: "98%", l: "재의뢰율" },
            { v: "12명", l: "전문 변호사" },
          ].map((s) => (
            <div key={s.l} className="border-l border-white/20 pl-6">
              <div className="font-serif text-4xl">{s.v}</div>
              <div className="mt-2 text-xs tracking-[0.3em] text-white/60">{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">PRACTICE AREAS</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">업무 영역</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-[#0b1a2a]/10 md:grid-cols-3">
          {areas.map((a) => (
            <div key={a.title} className="bg-white p-8 transition hover:bg-[#f5f4ee]">
              <h3 className="font-serif text-2xl">{a.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#0b1a2a]/70">{a.desc}</p>
              <div className="mt-6 text-xs font-semibold tracking-widest text-[#7c8c47]">VIEW MORE →</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f4ee] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">LAWYERS</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">구성원</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {lawyers.map((l) => (
              <div key={l.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0b1a2a]/5">
                  <Image src={l.image} alt={l.name} fill className="object-cover grayscale" />
                </div>
                <h3 className="mt-5 font-serif text-xl">{l.name}</h3>
                <p className="mt-1 text-xs text-[#0b1a2a]/60">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#7c8c47]">CONSULTATION</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              가장 빠른 길은,<br />가장 정확한 상담입니다.
            </h2>
            <p className="mt-6 leading-relaxed text-[#0b1a2a]/70">
              30분 무료 초기 상담을 통해 사건의 큰 흐름을 함께 정리합니다. 시간이 지나면 손해가 되는 사건이 많습니다.
            </p>
            <dl className="mt-10 space-y-3 border-t border-[#0b1a2a]/10 pt-8 text-sm">
              <div className="flex gap-6">
                <dt className="w-24 font-semibold tracking-widest text-[#0b1a2a]/60">CALL</dt>
                <dd>02-XXX-XXXX</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-24 font-semibold tracking-widest text-[#0b1a2a]/60">EMAIL</dt>
                <dd>contact@greenlaw.kr</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-24 font-semibold tracking-widest text-[#0b1a2a]/60">ADDRESS</dt>
                <dd>서울 서초구 법원로 ○○ 그린빌딩 9층</dd>
              </div>
            </dl>
          </div>
          <form className="rounded-sm bg-[#0b1a2a] p-10 text-white">
            <h3 className="font-serif text-2xl">상담 신청서</h3>
            <p className="mt-2 text-xs text-white/60">담당 변호사가 24시간 내 연락드립니다.</p>
            <div className="mt-8 space-y-4">
              <input placeholder="성함" className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none" />
              <input placeholder="연락처" className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none" />
              <select className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm text-white/70 outline-none">
                <option className="text-[#0b1a2a]">사건 분야 선택</option>
                <option className="text-[#0b1a2a]">기업 자문</option>
                <option className="text-[#0b1a2a]">지식재산권</option>
              </select>
              <textarea rows={3} placeholder="간단한 사건 개요" className="w-full rounded-none border-b border-white/30 bg-transparent py-3 text-sm placeholder:text-white/50 outline-none" />
            </div>
            <button className="mt-8 w-full bg-white py-3.5 text-xs font-semibold tracking-[0.3em] text-[#0b1a2a]">
              상담 신청하기
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#0b1a2a]/10 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-[#0b1a2a]/50 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-sm tracking-wide text-[#0b1a2a]">GREEN LAW</div>
          <div>© 2025 그린 법률사무소. 변호사 광고 심의필.</div>
        </div>
      </footer>
    </div>
  );
}
