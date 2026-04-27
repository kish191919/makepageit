"use client";

import { useState } from "react";

const services = [
  "브랜딩 사이트",
  "쇼핑몰 / 커머스",
  "랜딩페이지",
  "리뉴얼 / 유지보수",
  "예약 / 멤버십",
  "마케팅 운영",
  "잘 모르겠어요 (상담 필요)",
];

const budgets = [
  "100만원 이하",
  "100~300만원",
  "300~500만원",
  "500~1,000만원",
  "1,000만원 이상",
  "협의 가능",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // 데모: 실제 운영시 API 라우트(/api/contact) 또는 Formspree·Resend 연동으로 교체
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-ink-200 bg-white p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-500">
          ✓
        </div>
        <h3 className="mt-5 text-2xl font-bold text-ink-900">
          문의가 접수되었습니다
        </h3>
        <p className="mt-3 text-base text-ink-500">
          영업일 기준 24시간 이내에 담당 매니저가 연락드립니다.
          <br />
          급하신 경우 205-734-9654로 전화 주세요.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-3xl border border-ink-200 bg-white p-6 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="이름 / 회사" name="name" placeholder="홍길동 / 메이크페이지" required />
        <Field
          label="연락 가능한 번호"
          name="phone"
          type="tel"
          placeholder="010-0000-0000"
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="이메일"
          name="email"
          type="email"
          placeholder="hello@example.com"
          required
        />
        <Field label="업종" name="industry" placeholder="예: 카페, 학원, 쇼핑몰" />
      </div>

      <Select label="문의 유형" name="service" options={services} required />
      <Select label="예상 예산" name="budget" options={budgets} required />

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-ink-700"
        >
          요청사항
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="만들고자 하는 사이트의 목적, 참고 사이트, 일정 등을 자유롭게 적어주세요."
          className="mt-2 w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm leading-relaxed text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-500">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-ink-200 text-brand-600 focus:ring-brand-600" />
        <span>
          개인정보 수집·이용에 동의합니다. (수집 항목: 이름, 연락처, 이메일 / 보유기간: 상담 종료 후 1년)
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full disabled:cursor-wait disabled:opacity-60"
      >
        {submitting ? "접수 중..." : "무료 견적 요청하기 →"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink-700">
        {label}
        {required && <span className="ml-1 text-accent-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink-700">
        {label}
        {required && <span className="ml-1 text-accent-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
      >
        <option value="" disabled>
          선택해주세요
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
