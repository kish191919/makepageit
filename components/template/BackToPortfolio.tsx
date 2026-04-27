import Link from "next/link";

export default function BackToPortfolio() {
  return (
    <div className="fixed left-4 top-4 z-[100] sm:left-6 sm:top-6">
      <Link
        href="/portfolio"
        className="flex items-center gap-2 rounded-full bg-ink-900/85 px-4 py-2.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-ink-900 sm:text-sm"
      >
        <span aria-hidden>←</span>
        <span className="hidden sm:inline">메이크페이지 포트폴리오로 돌아가기</span>
        <span className="sm:hidden">돌아가기</span>
      </Link>
    </div>
  );
}
