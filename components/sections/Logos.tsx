const clients = [
  "노블 커피",
  "루미에르",
  "아뜰리에 22",
  "하루 영어",
  "모아 필라테스",
  "그린 법률",
  "서울 베이커리",
  "노바 스튜디오",
];

export default function Logos() {
  return (
    <section className="border-y border-ink-200 bg-white py-10">
      <div className="container-custom">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-400">
          이런 사장님들이 메이크페이지를 선택했습니다
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <div
              key={c}
              className="flex h-10 items-center justify-center text-sm font-semibold text-ink-400 transition hover:text-ink-700"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
