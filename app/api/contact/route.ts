import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = "MAKEPAGE <noreply@makepageit.com>";
const TO = process.env.CONTACT_TO_EMAIL ?? "admin@cloudmasterit.com";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, phone, email, industry, service, budget, message, lang } = body ?? {};
    const isEn = lang !== "ko";

    if (!name || !phone || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: isEn ? "Some required fields are missing." : "필수 항목이 누락되었습니다." },
        { status: 400 }
      );
    }

    const labels = isEn
      ? {
          heading: "New quote inquiry",
          name: "Name / Company",
          phone: "Phone",
          email: "Email",
          industry: "Industry",
          service: "Project type",
          budget: "Budget",
          message: "Project details",
        }
      : {
          heading: "새 견적 문의가 도착했습니다",
          name: "이름 / 회사",
          phone: "연락처",
          email: "이메일",
          industry: "업종",
          service: "문의 유형",
          budget: "예상 예산",
          message: "요청사항",
        };

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #111827; border-bottom: 2px solid #4f46e5; padding-bottom: 12px;">
          ${labels.heading}
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">${labels.name}</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${escape(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">${labels.phone}</td><td style="padding: 8px 0; color: #111827;">${escape(phone)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">${labels.email}</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">${labels.industry}</td><td style="padding: 8px 0; color: #111827;">${escape(industry || "-")}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">${labels.service}</td><td style="padding: 8px 0; color: #111827;">${escape(service)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b7280;">${labels.budget}</td><td style="padding: 8px 0; color: #111827;">${escape(budget)}</td></tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f9fafb; border-radius: 8px;">
          <div style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">${labels.message}</div>
          <div style="color: #111827; white-space: pre-wrap;">${escape(message)}</div>
        </div>
        <div style="margin-top: 24px; color: #9ca3af; font-size: 12px;">
          Locale: ${isEn ? "en" : "ko"}
        </div>
      </div>
    `;

    const subjectPrefix = isEn ? "[MAKEPAGE inquiry]" : "[MAKEPAGE 문의]";

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `${subjectPrefix} ${name} - ${service}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: isEn ? "Failed to send email." : "메일 발송 실패" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
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
