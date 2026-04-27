import Image from "next/image";

const products = [
  {
    name: "데일리 글로우 세럼",
    tag: "BEST",
    price: "32,000원",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "수분 가득 토너 200ml",
    tag: "NEW",
    price: "24,000원",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "벨벳 매트 립밤",
    tag: "리필",
    price: "18,000원",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "비건 클렌징 폼",
    tag: "VEGAN",
    price: "21,000원",
    image:
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=900&q=80&auto=format&fit=crop",
  },
];

const reviews = [
  { name: "지수님", text: "촉촉함이 다음 날까지 가요. 예민한 피부에 자극도 전혀 없어요." },
  { name: "보영님", text: "패키지가 진짜 너무 예뻐서 욕실이 카페가 됐어요." },
  { name: "수민님", text: "1주일만에 톤업된 게 보여요! 재구매 의사 100%" },
];

export default function BloomCosmetics() {
  return (
    <div className="min-h-screen bg-[#fff5f3] text-[#3a2530]">
      <header className="bg-[#fff5f3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            bloom<span className="text-[#ff8aa3]">·</span>
          </div>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            <a>Skincare</a>
            <a>Bodycare</a>
            <a>Lip</a>
            <a>Set</a>
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden text-xs text-[#7a5f6a] md:inline">로그인</a>
            <a className="rounded-full bg-[#ff8aa3] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-[#ff8aa3]/30">
              장바구니 (0)
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <span className="inline-block rounded-full bg-[#ffd6e0] px-3 py-1 text-[11px] font-bold text-[#c44569]">
              🌸 봄 신상 12% 할인 진행 중
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.1] md:text-7xl">
              피어나는 피부,
              <br />
              <span className="text-[#ff8aa3]">매일의 작은 의식.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-[#7a5f6a]">
              비건 인증 성분과 리필 가능한 패키지. 블룸은 피부와 지구를 동시에 위합니다.
            </p>
            <div className="mt-10 flex gap-3">
              <a className="rounded-full bg-[#ff8aa3] px-6 py-3 text-sm font-bold text-white">
                지금 쇼핑하기 →
              </a>
              <a className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#3a2530]">
                성분 가이드
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-[#ffd6e0]" />
            <div className="absolute -right-6 -bottom-4 h-40 w-40 rounded-full bg-[#ffe8b6]" />
            <div className="relative aspect-square overflow-hidden rounded-[3rem]">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80&auto=format&fit=crop"
                alt="Bloom cosmetics"
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
          <h2 className="text-3xl font-bold md:text-4xl">이번 주 인기</h2>
          <a className="text-sm font-medium text-[#c44569]">전체 보기 →</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.name}
              className="group rounded-3xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#ffe8e0]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#ff8aa3] px-2.5 py-0.5 text-[10px] font-bold text-white">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-5 px-2 text-base font-semibold">{p.name}</h3>
              <div className="mt-2 flex items-center justify-between px-2 pb-2">
                <span className="text-sm font-bold">{p.price}</span>
                <button className="rounded-full bg-[#ffd6e0] p-2 text-[#c44569]">＋</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-[3rem] bg-gradient-to-br from-[#ffd6e0] via-[#fff0e8] to-[#ffe8b6] px-6 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c44569]">Vegan · Cruelty Free</p>
        <h2 className="mt-5 text-4xl font-bold leading-snug md:text-5xl">
          지구도 피부도,
          <br />
          예쁜 선택을 합니다.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["🌱", "100% 비건 성분", "동물성 원료 0%, 영국 비건소사이어티 인증"],
            ["♻️", "리필 패키지", "본품 가격의 60%로 다회 사용"],
            ["🧪", "피부과 테스트", "민감 피부 패치 100% 무자극"],
          ].map(([icon, t, d]) => (
            <div key={t} className="rounded-3xl bg-white/70 p-6 backdrop-blur">
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-[#7a5f6a]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">고객의 진짜 후기</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="text-[#ff8aa3]">★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed text-[#3a2530]">“{r.text}”</p>
              <p className="mt-5 text-xs font-semibold text-[#c44569]">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-[#7a5f6a] md:flex-row">
          <div className="text-base font-bold text-[#3a2530]">bloom·</div>
          <div>© 2025 BLOOM Cosmetics. 사업자 110-22-XXXXX</div>
        </div>
      </footer>
    </div>
  );
}
