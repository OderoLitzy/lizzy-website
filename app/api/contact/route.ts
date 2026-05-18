import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// TODO: The `from` address below requires a verified domain in the Resend dashboard.
// Visit https://resend.com/domains and verify "chake.org" (or another owned domain)
// before going to production. Without verification, Resend will reject the send.
const FROM_ADDRESS = "CHAKE Website <noreply@chake.org>";
const TO_ADDRESS = "kechangeambassadors@gmail.com";

export async function POST(req: NextRequest) {
  try {
    // ── Rate limiting (only when Upstash env vars are present) ──────────────
    if (process.env.UPSTASH_REDIS_REST_URL) {
      const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN ?? "",
      });

      const ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, "60 s"),
        analytics: false,
      });

      const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "anonymous";

      const { success } = await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          {
            success: false,
            error: "Too many requests. Please wait before submitting again.",
          },
          { status: 429 }
        );
      }
    }

    // ── Parse and validate body ──────────────────────────────────────────────
    const body = await req.json();
    const { formType, fields } = body as {
      formType: unknown;
      fields: unknown;
    };

    if (formType !== "enrollment" && formType !== "volunteer") {
      return NextResponse.json(
        { success: false, error: "Invalid formType. Must be 'enrollment' or 'volunteer'." },
        { status: 400 }
      );
    }

    if (!fields || typeof fields !== "object" || Array.isArray(fields)) {
      return NextResponse.json(
        { success: false, error: "Invalid payload: 'fields' must be a non-null object." },
        { status: 400 }
      );
    }

    const typedFormType = formType as "enrollment" | "volunteer";
    const typedFields = fields as Record<string, string>;

    // ── Build email content ──────────────────────────────────────────────────
    const subject =
      typedFormType === "enrollment"
        ? "New Training Enrollment"
        : "New Volunteer Expression of Interest";

    const fieldLines = Object.entries(typedFields)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    const bodyText = `${subject}\n\nForm: ${typedFormType}\n\n${fieldLines}`;

    // Always log to stdout so submissions appear in Vercel logs.
    console.log("[contact]", bodyText);

    // ── Send via Resend (only when API key is present) ───────────────────────
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { error } = await resend.emails.send({
        from: FROM_ADDRESS,
        to: TO_ADDRESS,
        subject,
        text: bodyText,
      });

      if (error) {
        console.error("[contact] Resend error:", error);
        return NextResponse.json(
          { success: false, error: "Failed to send email." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
