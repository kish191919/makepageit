import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      <div
        aria-hidden
        className="absolute inset-0 bg-hero-grid [background-size:24px_24px] opacity-60"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full bg-brand-200 opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full bg-accent-400/30 blur-3xl"
      />

      <div className="relative z-10 container-custom pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="h-display">
            사장님은 <span className="text-brand-600">사업만</span> 하세요.
            <br />
            홈페이지는 <span className="underline decoration-accent-500 decoration-[6px] underline-offset-4">메이크페이지</span>가 만듭니다.
          </h1>

          <p className="mt-7 text-base leading-relaxed text-ink-500 sm:text-lg">
            기획·디자인·개발·운영을 한 팀에서. 평균 2주 안에 사장님 비즈니스에 꼭 맞는
            <br className="hidden sm:block" />
            홈페이지를 오픈해드립니다. 무료 상담은 언제나 환영입니다.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              무료 견적받기 →
            </Link>
            <Link href="/portfolio" className="btn-outline">
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
