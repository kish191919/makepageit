import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "MAKEPAGE <noreply@makepageit.com>";
const TO = process.env.CONTACT_TO_EMAIL ?? "admin@cloudmasterit.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, industry, service, budget, message } = body ?? {};

    if (!name || !phone || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: "필수 항목이 누락되었습니다." },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #111827; border-bottom: 2px solid #4f46e5; padding-bottom: 12px;">
          새 견적 문의가 도착했습니다
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 120px;">이름 / 회사</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${escape(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">연락처</td><td style="padding: 8px 0; color: #111827;">${escape(phone)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">이메일</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">업종</td><td style="padding: 8px 0; color: #111827;">${escape(industry || "-")}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">문의 유형</td><td style="padding: 8px 0; color: #111827;">${escape(service)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">예상 예산</td><td style="padding: 8px 0; color: #111827;">${escape(budget)}</td></tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f9fafb; border-radius: 8px;">
          <div style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">요청사항</div>
          <div style="color: #111827; white-space: pre-wrap;">${escape(message)}</div>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[MAKEPAGE 문의] ${name} - ${service}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "메일 발송 실패" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}

function escape(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
