import type { NextRequest } from "next/server";

// Rate limiting: simple in-memory store (use Redis/Vercel KV in production)
const submissions = new Map<string, number[]>();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const times = (submissions.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );
  if (times.length >= LIMIT) return true;
  submissions.set(ip, [...times, now]);
  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot check
  if (body.website) {
    return Response.json({ success: true }); // silently discard
  }

  // Server-side validation
  const { name, email, message, consent } = body;
  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    !message.trim() ||
    !consent
  ) {
    return Response.json({ error: "Invalid form data." }, { status: 422 });
  }

  // TODO: Configure email delivery
  // Example with Resend:
  //   import { Resend } from 'resend'
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.emails.send({
  //     from: 'noreply@yourpractice.com',
  //     to: process.env.CONTACT_EMAIL!,
  //     subject: `New consultation request from ${name}`,
  //     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  //   })

  console.log("[Contact form submission]", {
    name,
    email,
    service: body.service,
    contactMethod: body.contactMethod,
    message,
  });

  return Response.json({ success: true });
}
