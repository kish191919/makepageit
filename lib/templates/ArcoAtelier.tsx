import Image from "next/image";

const projects = [
  {
    name: "House on the Slope",
    place: "Yangpyeong, KR",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1400&q=80&auto=format&fit=crop",
  },
  {
    name: "Concrete Library",
    place: "Daegu, KR",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format&fit=crop",
  },
  {
    name: "Black Pavilion",
    place: "Jeju, KR",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop",
  },
];

const awards = [
  ["2024", "Korea Architecture Award — Gold"],
  ["2023", "AR Emerging Architecture, Shortlist"],
  ["2022", "Wallpaper* Design Award — Building of the Year"],
  ["2021", "Seoul Public Architecture Prize"],
];

export default function ArcoAtelier() {
  return (
    <div className="min-h-screen bg-[#ededed] text-black">
      <header className="border-b-2 border-black bg-[#ededed]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black tracking-tighter">ARCO/</div>
          <nav className="hidden gap-10 text-xs font-bold uppercase tracking-widest md:flex">
            <a>Work</a>
            <a>Practice</a>
            <a>Press</a>
            <a>Contact</a>
          </nav>
          <a className="border-2 border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#ededed]">
            Inquire
          </a>
        </div>
      </header>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.4em]">Est. 2009 — Seoul · Daegu</p>
          <h1 className="mt-10 text-[18vw] font-black leading-[0.85] tracking-[-0.04em] md:text-[14rem]">
            ARCO
            <br />
            <span className="block text-black/30">ATELIER</span>
          </h1>
          <div className="mt-12 grid gap-6 border-t-2 border-black pt-10 md:grid-cols-[1fr_2fr]">
            <p className="text-xs font-bold uppercase tracking-widest">Statement</p>
            <p className="text-xl leading-snug md:text-2xl">
              건축은 풍경을 자르는 일이 아니라 풍경의 일부가 되는 일입니다. 우리는 콘크리트와 빛, 그림자와 시간을 다루는 사무소입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between border-b-2 border-black pb-6">
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">SELECTED WORK</h2>
            <span className="hidden text-xs font-bold uppercase tracking-widest md:block">2021 — 2024</span>
          </div>
          <div className="mt-12 space-y-20">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`grid gap-8 md:grid-cols-12 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <div className="relative aspect-[4/3] md:col-span-8 [direction:ltr]">
                  <Image src={p.image} alt={p.name} fill className="object-cover grayscale" />
                </div>
                <div className="md:col-span-4 [direction:ltr]">
                  <div className="border-t-2 border-black pt-4 text-xs font-bold uppercase tracking-widest">
                    No. {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">{p.name}</h3>
                  <dl className="mt-8 space-y-2 text-sm">
                    <div className="flex justify-between border-b border-black/20 py-2">
                      <dt className="font-bold uppercase tracking-widest text-black/50">Place</dt>
                      <dd>{p.place}</dd>
                    </div>
                    <div className="flex justify-between border-b border-black/20 py-2">
                      <dt className="font-bold uppercase tracking-widest text-black/50">Year</dt>
                      <dd>{p.year}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-black bg-black text-[#ededed]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">AWARDS &amp; PRESS</h2>
          <ul className="mt-12 divide-y divide-white/20 border-y border-white/20">
            {awards.map(([y, t]) => (
              <li key={t} className="grid grid-cols-[80px_1fr] gap-6 py-5 md:grid-cols-[120px_1fr]">
                <span className="font-mono text-sm">{y}</span>
                <span className="text-base md:text-lg">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em]">Studio</p>
            <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              짓는 것은
              <br />
              생각하는 것이다.
            </h2>
          </div>
          <div className="space-y-4 self-end text-sm leading-relaxed">
            <p>
              아르코는 12명의 건축가와 4명의 인테리어 디자이너로 구성된 작은 사무소입니다. 우리는 1년에 6개 이상의 프로젝트를 받지 않습니다.
            </p>
            <p>
              모든 도면은 사무소 안에서, 모든 모형은 사무소 안에서 손으로 만들어집니다. 아르코는 그렇게 시간을 다루는 곳입니다.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#ededed]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-4">
          <div className="text-3xl font-black tracking-tighter">ARCO/</div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-widest">Seoul Office</p>
            <p className="mt-2 text-black/60">서울 종로구 자하문로 67, 3F</p>
            <p className="text-black/60">+82 2 555 0099</p>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-widest">Daegu Office</p>
            <p className="mt-2 text-black/60">대구 중구 동덕로 188</p>
            <p className="text-black/60">+82 53 555 0099</p>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-widest">Inquiries</p>
            <p className="mt-2 text-black/60">studio@arco.kr</p>
          </div>
        </div>
        <div className="border-t-2 border-black px-6 py-4 text-center font-mono text-[11px]">
          © 2025 ARCO ATELIER — All works are copyright of the firm.
        </div>
      </footer>
    </div>
  );
}
