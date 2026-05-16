import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, fields } = body as {
      formType: "enrollment" | "volunteer";
      fields: Record<string, string>;
    };

    if (!formType || !fields) {
      return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
    }

    const subject =
      formType === "enrollment"
        ? "New Training Enrollment Application"
        : "New Volunteer Expression of Interest";

    const fieldLines = Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    const body_text = `${subject}\n\nForm: ${formType}\n\n${fieldLines}`;

    // In production: send via Nodemailer + Gmail SMTP using GMAIL_APP_PASSWORD env var.
    // For now, log to stdout (Vercel logs) so submissions are visible during development.
    console.log("[contact]", body_text);

    // Nodemailer integration (enabled when GMAIL_APP_PASSWORD is set):
    if (process.env.GMAIL_APP_PASSWORD) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "kechangeambassadors@gmail.com",
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });
      await transporter.sendMail({
        from: "kechangeambassadors@gmail.com",
        to: "kechangeambassadors@gmail.com",
        subject,
        text: body_text,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
