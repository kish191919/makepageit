import Image from "next/image";

const stylists = [
  {
    name: "MUNI",
    role: "Founder · Color Director",
    spec: "비비드 컬러 / 톤다운",
    img: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "CRYSTAL",
    role: "Senior Designer",
    spec: "단발 / 레이어드 컷",
    img: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "RIO",
    role: "Designer",
    spec: "남성 매직펌 / 댄디",
    img: "https://i.pravatar.cc/300?img=12",
  },
];

const menus = [
  ["CUT", "트렌디 컷", "45,000원~"],
  ["COLOR", "비비드 / 톤다운", "120,000원~"],
  ["PERM", "C컬 · S컬 · 매직", "98,000원~"],
  ["CARE", "본드 트리트먼트", "55,000원~"],
];

const slots = ["11:00", "12:30", "14:00", "15:30", "17:00", "18:30"];

export default function MuniHair() {
  return (
    <div className="min-h-screen bg-[#0d0a14] text-white">
      <header className="border-b border-white/10 bg-[#0d0a14]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-black italic tracking-tighter">
            <span className="bg-gradient-to-r from-[#c0c0ff] via-[#ff9ee5] to-[#a3ffd6] bg-clip-text text-transparent">
              MUNI ✦ HAIR
            </span>
          </div>
          <nav className="hidden gap-7 text-xs font-bold uppercase tracking-widest text-white/70 md:flex">
            <a>Stylist</a>
            <a>Gallery</a>
            <a>Menu</a>
            <a>Booking</a>
          </nav>
          <a className="rounded-full bg-gradient-to-r from-[#c0c0ff] via-[#ff9ee5] to-[#a3ffd6] px-4 py-2 text-xs font-bold text-[#0d0a14]">
            Book ☆
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #c0c0ff66, transparent 40%), radial-gradient(circle at 80% 30%, #ff9ee566, transparent 40%), radial-gradient(circle at 50% 90%, #a3ffd666, transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:py-28">
          <div>
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-[11px] tracking-widest backdrop-blur">
              ★ Y2K SALON SINCE 2002
            </span>
            <h1 className="mt-7 text-5xl font-black italic leading-[1] tracking-tighter md:text-7xl">
              Hair is your
              <br />
              <span className="bg-gradient-to-r from-[#c0c0ff] via-[#ff9ee5] to-[#a3ffd6] bg-clip-text text-transparent">
                main accessory.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-base text-white/70">
              비비드 컬러 전문 살롱. 강남에서 22년, 셀럽 헤어를 만들어온 무니의 시그니처 컬러를 경험해보세요.
            </p>
            <div className="mt-10 flex gap-3">
              <a className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0d0a14]">
                ☆ 오늘 예약 가능
              </a>
              <a className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold">
                갤러리 보기
              </a>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[3rem] border-4 border-white/20 shadow-2xl shadow-[#ff9ee5]/30">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80&auto=format&fit=crop"
              alt="Muni Hair"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-mono text-xs uppercase tracking-[0.5em] text-[#a3ffd6]">
          ✦ STYLISTS ✦
        </h2>
        <h3 className="mt-3 text-center text-4xl font-black italic md:text-5xl">3인의 디자이너</h3>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stylists.map((s) => (
            <article key={s.name} className="rounded-3xl bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src={s.img} alt={s.name} fill className="object-cover" />
              </div>
              <h4 className="mt-5 text-2xl font-black italic">{s.name}</h4>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#ff9ee5]">{s.role}</p>
              <p className="mt-3 text-sm text-white/70">{s.spec}</p>
              <button className="mt-5 w-full rounded-full border border-white/20 py-2.5 text-xs font-bold tracking-widest hover:border-[#ff9ee5]">
                ☆ 디자이너 예약
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#c0c0ff]/10 via-[#ff9ee5]/10 to-[#a3ffd6]/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-black italic md:text-5xl">메뉴 &amp; 가격</h2>
          <ul className="mx-auto mt-12 max-w-2xl divide-y divide-white/10 border-y border-white/10">
            {menus.map(([k, t, p]) => (
              <li key={t} className="grid grid-cols-[80px_1fr_auto] items-center gap-4 py-4 text-sm md:grid-cols-[120px_1fr_auto]">
                <span className="font-mono text-xs tracking-widest text-[#a3ffd6]">{k}</span>
                <span>{t}</span>
                <span className="font-bold">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center font-mono text-xs uppercase tracking-[0.5em] text-[#a3ffd6]">
          ✦ INSTANT BOOKING ✦
        </h2>
        <h3 className="mt-3 text-center text-4xl font-black italic">오늘 자리 있어요</h3>
        <div className="mt-10 rounded-3xl bg-white/5 p-6 backdrop-blur">
          <p className="font-mono text-xs tracking-widest text-white/60">SUN · APR 27</p>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {slots.map((s) => (
              <button
                key={s}
                className="rounded-full border border-white/30 py-3 text-sm font-bold transition hover:border-[#ff9ee5] hover:bg-[#ff9ee5]/10"
              >
                {s}
              </button>
            ))}
          </div>
          <button className="mt-6 w-full rounded-full bg-gradient-to-r from-[#c0c0ff] via-[#ff9ee5] to-[#a3ffd6] py-3.5 text-sm font-black text-[#0d0a14]">
            ☆ 카톡으로 예약 확정
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center font-mono text-[11px] tracking-widest text-white/40">
        ✦ MUNI HAIR · 강남구 신사동 가로수길 22, 3F · 02 555 0202 ✦
      </footer>
    </div>
  );
}
