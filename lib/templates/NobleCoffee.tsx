import Image from "next/image";

const menu = [
  {
    name: "에티오피아 예가체프",
    notes: "자스민 · 베르가못 · 레몬",
    price: "8,500원",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "콜롬비아 핑크 버번",
    notes: "복숭아 · 흑설탕 · 다크초콜릿",
    price: "9,500원",
    image:
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "케냐 AA 키암부",
    notes: "블랙커런트 · 와인 · 캐러멜",
    price: "8,800원",
    image:
      "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=900&q=80&auto=format&fit=crop",
  },
];

export default function NobleCoffee() {
  return (
    <div className="bg-[#f6f1ea] text-[#2a221a]">
      <header className="border-b border-[#e7ddcc] bg-[#f6f1ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-lg font-serif tracking-[0.4em]">NOBLE</div>
          <nav className="hidden gap-8 text-xs font-medium tracking-[0.2em] text-[#5b4b39] md:flex">
            <a>STORY</a>
            <a>COFFEE</a>
            <a>VISIT</a>
            <a>JOURNAL</a>
          </nav>
          <a className="rounded-full border border-[#2a221a] px-4 py-2 text-xs tracking-widest">
            ONLINE SHOP
          </a>
        </div>
      </header>

      <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80&auto=format&fit=crop"
          alt="Noble Coffee Roasters"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20 text-white">
          <p className="text-xs tracking-[0.4em]">SINCE 2018 · SEOUL</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            한 잔의 정직한 커피,<br />그 자리에서 로스팅합니다.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80">
            매주 화요일 새벽, 산지에서 갓 도착한 생두를 직접 로스팅합니다. 일주일 안에 마시는 커피만 우리는 노블이라 부릅니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=80&auto=format&fit=crop"
              alt="Roastery"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-[#7a6850]">OUR STORY</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              우리는 커피의<br />‘처음’을 다룹니다.
            </h2>
            <p className="mt-6 leading-relaxed text-[#5b4b39]">
              과테말라의 산타바바라 농장, 에티오피아의 예가체프 코지. 우리가 마시는 한 잔이 어떤 손에서 시작되었는지를 매년 직접 확인합니다.
              로스팅 프로파일은 매 시즌 다시 설계되고, 카페에서 우리는 그 차이를 손님과 함께 마십니다.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#e7ddcc] pt-8 text-center">
              <div>
                <div className="font-serif text-3xl">12</div>
                <div className="mt-1 text-xs tracking-widest text-[#7a6850]">FARMS</div>
              </div>
              <div>
                <div className="font-serif text-3xl">7DAYS</div>
                <div className="mt-1 text-xs tracking-widest text-[#7a6850]">FRESH</div>
              </div>
              <div>
                <div className="font-serif text-3xl">2018</div>
                <div className="mt-1 text-xs tracking-widest text-[#7a6850]">EST.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ece2d2] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.4em] text-[#7a6850]">THIS WEEK</p>
              <h2 className="mt-3 font-serif text-4xl">시즌 싱글 오리진</h2>
            </div>
            <a className="hidden text-xs tracking-widest underline md:inline">VIEW ALL →</a>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {menu.map((m) => (
              <article key={m.name} className="group">
                <div className="relative aspect-square overflow-hidden bg-[#d9cdb8]">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl">{m.name}</h3>
                <p className="mt-2 text-sm text-[#7a6850]">{m.notes}</p>
                <p className="mt-3 text-sm tracking-widest">{m.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.4em] text-[#7a6850]">VISIT US</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">성수동 본점</h2>
            <p className="mt-6 leading-relaxed text-[#5b4b39]">
              로스터리 + 카페가 한 공간에 있는 본점에서, 갓 볶은 원두의 향을 그대로 마실 수 있습니다.
            </p>
            <dl className="mt-10 space-y-4 border-t border-[#e7ddcc] pt-8 text-sm">
              <div className="flex gap-6">
                <dt className="w-20 tracking-widest text-[#7a6850]">ADDRESS</dt>
                <dd>서울 성동구 성수이로 22길 14, 1층</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-20 tracking-widest text-[#7a6850]">HOURS</dt>
                <dd>매일 08:00 — 21:00 (월요일 휴무)</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-20 tracking-widest text-[#7a6850]">CALL</dt>
                <dd>02 555 8888</dd>
              </div>
            </dl>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80&auto=format&fit=crop"
              alt="Cafe interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e7ddcc] bg-[#2a221a] py-12 text-[#d9cdb8]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div className="text-lg font-serif tracking-[0.4em] text-white">NOBLE</div>
          <p className="text-xs tracking-widest text-[#9c8a6f]">© 2025 NOBLE COFFEE ROASTERS</p>
        </div>
      </footer>
    </div>
  );
}
