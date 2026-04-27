import Image from "next/image";

const wines = [
  {
    name: "Château Lavigne 2018",
    region: "Bordeaux, France",
    notes: "블랙커런트 · 시더 · 가죽",
    price: "₩ 145,000",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Allegro Brunello 2017",
    region: "Tuscany, Italy",
    notes: "체리 · 담배잎 · 흙",
    price: "₩ 198,000",
    image:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Rias Albariño 2022",
    region: "Galicia, Spain",
    notes: "복숭아 · 미네랄 · 시트러스",
    price: "₩ 68,000",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=900&q=80&auto=format&fit=crop",
  },
];

const plans = [
  { tier: "DISCOVER", count: "월 2병", price: "59,000원", desc: "처음 와인을 알아가는 분께" },
  { tier: "CONNOISSEUR", count: "월 4병", price: "129,000원", desc: "취향이 또렷한 애호가용", best: true },
  { tier: "RESERVE", count: "월 6병 한정 큐레이션", price: "299,000원", desc: "셀러를 채우는 컬렉터" },
];

export default function VinSecret() {
  return (
    <div className="min-h-screen bg-[#1a0d10] text-[#f3e7d7]">
      <header className="border-b border-[#3a1f25] bg-[#1a0d10]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="font-serif text-xl italic tracking-wide text-[#d4a574]">
            Vin Secret
          </div>
          <nav className="hidden gap-8 text-xs tracking-[0.3em] text-[#c8b896] md:flex">
            <a>CELLAR</a>
            <a>CLUB</a>
            <a>JOURNAL</a>
            <a>SOMMELIER</a>
          </nav>
          <a className="border border-[#d4a574] px-5 py-2 text-xs tracking-[0.3em] text-[#d4a574]">
            JOIN CLUB
          </a>
        </div>
      </header>

      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=2000&q=80&auto=format&fit=crop"
          alt="Vin Secret cellar"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#1a0d10]/60 to-[#1a0d10]" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16">
          <p className="text-[11px] tracking-[0.5em] text-[#d4a574]">— PRIVATE WINE CLUB</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.1] md:text-7xl">
            소믈리에가 매달
            <br />
            <span className="italic text-[#d4a574]">집으로 보내는 한 병</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-[#c8b896]">
            국내에 들어오지 않은 부티크 와이너리만을 큐레이션합니다. 회원만이 마시는, 가게에 없는 와인을 만나보세요.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="text-[11px] tracking-[0.5em] text-[#d4a574]">— OUR PROMISE</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight">
              한 병에는,
              <br />
              한 사람의 이야기가 있습니다.
            </h2>
            <p className="mt-7 leading-relaxed text-[#c8b896]">
              뱅 시크릿의 바이어는 1년 중 6개월을 유럽에 머뭅니다. 우리는 와이너리 주인과 직접 마주 앉아, 그가 지난 1년 동안 무엇을 견뎌냈는지를 듣고 와인을 고릅니다.
            </p>
            <ul className="mt-10 space-y-3 border-t border-[#3a1f25] pt-8 text-sm">
              <li className="flex gap-4"><span className="text-[#d4a574]">◆</span> 가게에 없는 부티크 와인 위주</li>
              <li className="flex gap-4"><span className="text-[#d4a574]">◆</span> 매달 소믈리에의 테이스팅 노트 동봉</li>
              <li className="flex gap-4"><span className="text-[#d4a574]">◆</span> 18°C 항온 배송, 파손 시 즉시 교체</li>
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=1200&q=80&auto=format&fit=crop"
              alt="Sommelier"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#3a1f25] bg-[#23121a] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[11px] tracking-[0.5em] text-[#d4a574]">— THIS MONTH</p>
          <h2 className="mt-3 font-serif text-4xl">4월의 셀러</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {wines.map((w) => (
              <article key={w.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#3a1f25]">
                  <Image src={w.image} alt={w.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-6 font-serif text-xl">{w.name}</h3>
                <p className="mt-2 text-[11px] tracking-widest text-[#d4a574]">{w.region}</p>
                <p className="mt-3 text-sm text-[#c8b896]">{w.notes}</p>
                <p className="mt-5 text-sm tracking-widest">{w.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-center text-[11px] tracking-[0.5em] text-[#d4a574]">— MEMBERSHIP</p>
        <h2 className="mt-3 text-center font-serif text-4xl">정기 클럽 플랜</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.tier}
              className={`rounded-sm border p-8 ${
                p.best
                  ? "border-[#d4a574] bg-[#23121a] shadow-2xl shadow-[#d4a574]/10"
                  : "border-[#3a1f25] bg-transparent"
              }`}
            >
              {p.best && (
                <span className="inline-block bg-[#d4a574] px-2 py-0.5 text-[10px] tracking-widest text-[#1a0d10]">
                  MOST CHOSEN
                </span>
              )}
              <h3 className="mt-5 font-serif text-2xl tracking-widest">{p.tier}</h3>
              <p className="mt-2 text-xs text-[#c8b896]">{p.count}</p>
              <p className="mt-7 font-serif text-3xl text-[#d4a574]">{p.price}<span className="ml-1 text-xs text-[#c8b896]">/월</span></p>
              <p className="mt-5 text-sm text-[#c8b896]">{p.desc}</p>
              <a className="mt-10 block border border-[#d4a574] py-3 text-center text-xs tracking-[0.3em] text-[#d4a574]">
                START
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#3a1f25] py-10 text-center text-[10px] tracking-[0.4em] text-[#7a6a55]">
        © 2025 VIN SECRET — 국세청 통신판매업 제2025-서울-XXXX호
      </footer>
    </div>
  );
}
