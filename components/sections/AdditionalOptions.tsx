import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const options = [
  {
    icon: "📄",
    title: "추가 페이지",
    price: "$50",
    unit: "/ 페이지",
    desc: "기본 패키지에 포함된 페이지 외 추가 시",
  },
  {
    icon: "📅",
    title: "예약 시스템 연동",
    price: "+$100",
    unit: "/ 일회성",
    desc: "캘린더·예약 폼·자동 알림 연동",
  },
  {
    icon: "💳",
    title: "결제 시스템 연동",
    price: "+$100",
    unit: "/ 일회성",
    desc: "Stripe·Toss 등 결제 게이트웨이 연동",
  },
];

export default function AdditionalOptions() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-3xl shadow-xl lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                alt="맞춤 옵션 협업 사진"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-600 shadow-lg backdrop-blur">
              맞춤 옵션
            </span>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="추가 옵션"
              title="필요한 만큼만 더하세요"
              description="기본 패키지로 부족하다면, 사업에 꼭 필요한 기능만 골라 추가할 수 있어요."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {options.map((o) => (
                <div
                  key={o.title}
                  className="rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-600 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-xl">
                    {o.icon}
                  </div>
                  <p className="mt-4 text-sm font-semibold text-ink-900">{o.title}</p>
                  <p className="mt-1 text-2xl font-extrabold text-brand-600">
                    {o.price}
                    <span className="ml-1 text-sm font-medium text-ink-500">{o.unit}</span>
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-500">{o.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-ink-500">
              정확한 견적은 무료 상담 후 안내해드려요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
