import Image from "next/image";

const works = [
  {
    no: "01",
    name: "Toss Securities — Onboarding",
    cat: "Product · UX",
    year: "2024",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    no: "02",
    name: "Kakao Mobility — Driver App",
    cat: "Mobile · Service",
    year: "2024",
    img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80&auto=format&fit=crop",
  },
  {
    no: "03",
    name: "Coupang — Internal Console",
    cat: "Enterprise · DS",
    year: "2023",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    no: "04",
    name: "Riot Games — Patch Notes",
    cat: "Editorial · Web",
    year: "2023",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop",
  },
];

const services = [
  ["UX Research", "Interview · Diary Study · Synthesis"],
  ["Product Design", "Flow · UI · Component System"],
  ["Design Systems", "Token · Documentation · Governance"],
  ["Prototyping", "Figma · Framer · ProtoPie"],
];

export default function KittWorks() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="font-mono text-sm">kitt.works</div>
          <nav className="hidden gap-8 font-mono text-xs text-neutral-500 md:flex">
            <a>index</a>
            <a>work</a>
            <a>about</a>
            <a>contact</a>
          </nav>
          <a className="font-mono text-xs underline decoration-dotted underline-offset-4">
            hello@kitt.works
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="font-mono text-xs text-neutral-500 md:col-span-3">
            01 — INDEX <br />
            <span className="text-neutral-400">Seoul / 2017 — Now</span>
          </p>
          <div className="md:col-span-9">
            <h1 className="text-4xl leading-[1.15] tracking-tight md:text-6xl">
              <span className="text-neutral-400">Kitt is a product designer</span> focused on calm, useful interfaces for everyday tools.
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-600">
              지난 7년 동안 토스, 카카오, 쿠팡, Riot Games 등 12개 회사와 일했습니다. 인터페이스가 <em>‘조용히’</em> 잘 작동하도록 만드는 일을 합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-neutral-200 md:grid-cols-4">
          {[
            ["12", "Companies"],
            ["48", "Shipped products"],
            ["7y", "Practice"],
            ["1", "Person studio"],
          ].map(([v, l]) => (
            <div key={l} className="bg-white px-6 py-10">
              <div className="font-mono text-3xl">{v}</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="font-mono text-xs text-neutral-500 md:col-span-3">02 — SELECTED WORK</p>
          <div className="md:col-span-9">
            <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
              {works.map((w) => (
                <li key={w.no} className="group grid grid-cols-[40px_1fr_auto] items-center gap-6 py-6">
                  <span className="font-mono text-xs text-neutral-400">{w.no}</span>
                  <div>
                    <div className="text-lg">{w.name}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                      {w.cat}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">{w.year} →</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {works.slice(0, 2).map((w) => (
                <div key={w.no} className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image src={w.img} alt={w.name} fill className="object-cover grayscale transition duration-500 hover:grayscale-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12">
          <p className="font-mono text-xs text-neutral-500 md:col-span-3">03 — SERVICES</p>
          <div className="md:col-span-9">
            <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
              {services.map(([k, v]) => (
                <li key={k} className="grid grid-cols-[180px_1fr] gap-6 py-5 text-sm">
                  <span className="font-mono uppercase tracking-widest text-neutral-500">{k}</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="font-mono text-xs text-neutral-500 md:col-span-3">04 — CONTACT</p>
          <div className="md:col-span-9">
            <h2 className="text-3xl leading-tight md:text-5xl">
              지금 진행 중인 의뢰는 <span className="text-neutral-400">2건.</span>
              <br />
              하반기 1자리 받습니다.
            </h2>
            <div className="mt-10 grid gap-4 md:max-w-md">
              <a className="border border-neutral-900 px-5 py-3 text-center font-mono text-xs uppercase tracking-widest">
                hello@kitt.works
              </a>
              <a className="border border-neutral-300 px-5 py-3 text-center font-mono text-xs uppercase tracking-widest text-neutral-600">
                Schedule a 30-min call →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 font-mono text-[11px] text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>kitt.works · last updated 2025-04-27</div>
          <div className="flex gap-5">
            <a>read.cv</a>
            <a>are.na</a>
            <a>linkedin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
