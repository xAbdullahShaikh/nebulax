"use server";

import { Resend } from "resend";

export type ContactState = { ok: boolean; message: string };

const defaultRecipients = ["abdullahshaikh085@gmail.com", "sarmadalishaikh@gmail.com"];

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

function getRecipients() {
  const configuredRecipients = process.env.CONTACT_TO_EMAIL
    ?.split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  return configuredRecipients?.length ? configuredRecipients : defaultRecipients;
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  };
  return value.replace(/[&<>'"]/g, (character) => entities[character]);
}

export async function submitContact(_previousState: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const website = String(formData.get("website") || "").trim();

  // This field is visually hidden from people. Bots commonly populate every input.
  // Return a generic success response so they cannot use it to probe the form.
  if (website) {
    return { ok: true, message: "Message sent successfully. We'll be in touch soon!" };
  }

  if (!name || !email || !subject || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please complete every field before sending." };
  }

  if (name.length > 100 || email.length > 254 || subject.length > 200 || message.length > 5000) {
    return { ok: false, message: "Please shorten your message and try again." };
  }

  try {
    const resend = getResend();
    const toEmails = getRecipients();

    const fromEmail = process.env.CONTACT_FROM_EMAIL || "info@stackpointerlabs.com.au";

    const { error } = await resend.emails.send({
      from: `Stackpointer Labs <${fromEmail}>`,
      to: toEmails,
      replyTo: email,
      subject: `New Inquiry from ${name} — Stackpointer Labs`,
      html: `
        <h2>New Inquiry — Stackpointer Labs</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { ok: true, message: "Message sent successfully. We'll be in touch soon!" };
  } catch (error: any) {
    console.error("Resend contact submission error:", error);
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
