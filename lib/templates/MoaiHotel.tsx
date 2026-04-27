import Image from "next/image";

const rooms = [
  {
    name: "Ocean Suite",
    size: "82㎡ · King",
    price: "₩ 580,000",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Pool Villa",
    size: "146㎡ · 개별 풀",
    price: "₩ 1,180,000",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Cliff Pavilion",
    size: "210㎡ · 절벽 전망",
    price: "₩ 1,890,000",
    image:
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200&q=80&auto=format&fit=crop",
  },
];

const amenities = [
  ["01", "Infinity Pool", "절벽 끝의 수평선 일체형 풀"],
  ["02", "Mediterranean Spa", "지중해식 오일 트리트먼트"],
  ["03", "Cellar Dining", "350종 와인 셀러 다이닝"],
  ["04", "Private Yacht", "전용 요트 일몰 크루즈"],
];

export default function MoaiHotel() {
  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f0e9d6]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="font-serif text-xl tracking-[0.5em] text-[#d4af37]">MOAI</div>
          <nav className="hidden gap-10 text-[11px] font-medium tracking-[0.3em] md:flex">
            <a>STAY</a>
            <a>DINE</a>
            <a>SPA</a>
            <a>JOURNAL</a>
          </nav>
          <a className="border border-[#d4af37] px-5 py-2 text-[11px] tracking-[0.3em] text-[#d4af37]">
            RESERVE
          </a>
        </div>
      </header>

      <section className="relative h-[100vh] min-h-[640px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=2000&q=80&auto=format&fit=crop"
          alt="Moai Hotel & Resort"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-center">
          <p className="text-[11px] tracking-[0.5em] text-[#d4af37]">SINCE 1987 · JEJU</p>
          <h1 className="mt-8 font-serif text-6xl leading-[1.05] tracking-tight md:text-8xl">
            바다와 절벽 사이,
            <br />
            <span className="italic text-[#d4af37]">고요한 사치</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            제주 남단, 바다로 떨어지는 절벽 위에 자리한 28개의 객실. 38년째 같은 자리에서, 단 하나의 풍경을 손님께 드립니다.
          </p>
          <a className="mx-auto mt-12 inline-block bg-[#d4af37] px-10 py-4 text-xs tracking-[0.3em] text-black">
            예약 가능일 보기
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[11px] tracking-[0.4em] text-[#d4af37]">— OUR PHILOSOPHY</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              머무는 동안,
              <br />
              세상이 멀어집니다.
            </h2>
            <p className="mt-8 leading-relaxed text-[#c9bfa6]">
              모아이는 호텔이 아니라 ‘머무는 시간’입니다. 객실 하나에 단 한 팀의 손님만을 위한 매니저가 배정되며, 도착부터 출발까지 외부 세상과의 모든 접점을 대신해 드립니다.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6 border-y border-[#d4af37]/30 py-8">
              <div>
                <div className="font-serif text-3xl text-[#d4af37]">28</div>
                <div className="mt-2 text-[10px] tracking-widest text-[#9b9277]">SUITES</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-[#d4af37]">1:1</div>
                <div className="mt-2 text-[10px] tracking-widest text-[#9b9277]">BUTLER</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-[#d4af37]">38Y</div>
                <div className="mt-2 text-[10px] tracking-widest text-[#9b9277]">LEGACY</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80&auto=format&fit=crop"
              alt="Moai interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#d4af37]/20 bg-[#15130f] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] tracking-[0.4em] text-[#d4af37]">— ROOMS</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">머무실 곳</h2>
            </div>
            <a className="hidden text-[11px] tracking-[0.3em] text-[#d4af37] md:inline">VIEW ALL →</a>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {rooms.map((r) => (
              <article key={r.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl">{r.name}</h3>
                <p className="mt-2 text-xs tracking-widest text-[#9b9277]">{r.size}</p>
                <p className="mt-4 text-sm tracking-widest text-[#d4af37]">FROM {r.price} / NIGHT</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-[11px] tracking-[0.4em] text-[#d4af37]">— EXPERIENCES</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">시간을 다루는 방식</h2>
        <div className="mt-14 grid gap-px bg-[#d4af37]/20 md:grid-cols-2">
          {amenities.map(([n, t, d]) => (
            <div key={t} className="bg-[#0d0c0a] p-10">
              <div className="font-serif text-sm text-[#d4af37]">{n}</div>
              <h3 className="mt-4 font-serif text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c9bfa6]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#15130f] py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[11px] tracking-[0.4em] text-[#d4af37]">— RESERVE</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            오직 28개의 객실,
            <br />
            오직 한 분의 손님께.
          </h2>
          <a className="mt-12 inline-block bg-[#d4af37] px-12 py-4 text-xs tracking-[0.4em] text-black">
            CONCIERGE 1644 — 0028
          </a>
        </div>
      </section>

      <footer className="border-t border-[#d4af37]/20 py-10 text-center text-[10px] tracking-[0.4em] text-[#9b9277]">
        © 2025 MOAI HOTEL &amp; RESORT — JEJU, KOREA
      </footer>
    </div>
  );
}
