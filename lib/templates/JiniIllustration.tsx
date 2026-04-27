import Image from "next/image";

const works = [
  {
    title: "북적북적 도서관",
    client: "창비 어린이",
    year: "2024",
    color: "#ffd166",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "여름 한 조각",
    client: "마쓰무라 카페 패키지",
    year: "2024",
    color: "#ef476f",
    img: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "달과 고양이",
    client: "월간 디자인",
    year: "2023",
    color: "#06d6a0",
    img: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "도시의 새들",
    client: "서울시 캠페인",
    year: "2023",
    color: "#118ab2",
    img: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=900&q=80&auto=format&fit=crop",
  },
];

const services = [
  ["📖", "단행본 표지", "동화·에세이·소설 표지 일러스트"],
  ["☕", "패키지", "카페·식품 라벨 및 패키지"],
  ["🗞️", "에디토리얼", "잡지·신문 1컷 일러스트"],
  ["🎨", "캐릭터", "브랜드 캐릭터 디자인"],
];

export default function JiniIllustration() {
  return (
    <div
      className="min-h-screen text-[#3a2e2a]"
      style={{
        backgroundColor: "#fff8ec",
        backgroundImage:
          "radial-gradient(#e9dec5 1px, transparent 1px), radial-gradient(#e9dec5 1px, #fff8ec 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <header className="border-b-2 border-dashed border-[#3a2e2a]/20 bg-[#fff8ec]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-2xl font-black tracking-tight">
            <span>🖍️</span> jini
            <span className="text-[#ef476f]">.</span>
          </div>
          <nav className="hidden gap-6 text-sm font-bold md:flex">
            <a className="rounded-full bg-[#ffd166] px-3 py-1">works</a>
            <a>about</a>
            <a>shop</a>
            <a>contact</a>
          </nav>
          <a className="rounded-full bg-[#3a2e2a] px-5 py-2 text-xs font-bold text-[#fff8ec]">
            의뢰하기 ✏️
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-block rotate-[-2deg] rounded-full bg-[#06d6a0] px-3 py-1 text-xs font-bold text-white">
              ✦ 일러스트레이터 / 에세이스트
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] md:text-7xl">
              하루 한 장,
              <br />
              <span className="bg-[#ffd166] px-2">조금 다정한 그림</span>을
              <br />
              그립니다.
            </h1>
            <p className="mt-6 max-w-md text-base text-[#5b4a44]">
              지난 8년간 단행본 42권, 카페 / 브랜드 패키지 60건, 에디토리얼 200컷. 손으로 그려서 디지털로 옮깁니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-[#ef476f] px-6 py-3 text-sm font-bold text-white">
                포트폴리오 보기 →
              </a>
              <a className="rounded-full border-2 border-[#3a2e2a] bg-white px-6 py-3 text-sm font-bold">
                숍 (굿즈)
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-72 w-72 rotate-[-6deg] rounded-3xl bg-[#ffd166]" />
            <div className="absolute right-0 bottom-0 h-40 w-40 rotate-[8deg] rounded-3xl bg-[#06d6a0]" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-[#3a2e2a] shadow-[8px_8px_0_#3a2e2a]">
              <Image
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80&auto=format&fit=crop"
                alt="Jini illustration"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-black md:text-4xl">최근 작업 ✨</h2>
          <a className="text-sm font-bold underline">전체 보기 →</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {works.map((w) => (
            <article
              key={w.title}
              className="overflow-hidden rounded-3xl border-4 border-[#3a2e2a] bg-white shadow-[6px_6px_0_#3a2e2a] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#3a2e2a]"
            >
              <div className="relative aspect-[4/3]" style={{ backgroundColor: w.color }}>
                <Image src={w.img} alt={w.title} fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="flex items-center justify-between border-t-4 border-[#3a2e2a] bg-[#fff8ec] p-5">
                <div>
                  <h3 className="text-xl font-black">{w.title}</h3>
                  <p className="mt-1 text-sm text-[#5b4a44]">{w.client}</p>
                </div>
                <span className="rounded-full bg-[#3a2e2a] px-3 py-1 text-xs font-bold text-white">
                  {w.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-black md:text-4xl">이런 작업을 해요</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {services.map(([icon, t, d]) => (
            <div
              key={t}
              className="rounded-3xl border-4 border-[#3a2e2a] bg-white p-6 text-center shadow-[4px_4px_0_#3a2e2a]"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-4 text-base font-black">{t}</h3>
              <p className="mt-2 text-xs text-[#5b4a44]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="rotate-[-1deg] rounded-3xl border-4 border-[#3a2e2a] bg-[#ef476f] p-10 text-center text-white shadow-[10px_10px_0_#3a2e2a]">
          <h2 className="text-3xl font-black md:text-4xl">의뢰는 메일로 받아요!</h2>
          <p className="mt-3 text-white/90">분기별로 6건만 받습니다. 1주일 안에 회신드려요.</p>
          <a className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-black text-[#ef476f]">
            jini@illustration.kr ✉️
          </a>
        </div>
      </section>

      <footer className="border-t-2 border-dashed border-[#3a2e2a]/20 py-8 text-center text-xs text-[#5b4a44]">
        © 2025 jini illustration · 손으로 그려서, 다정하게 보냅니다 🌱
      </footer>
    </div>
  );
}
