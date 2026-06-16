"use server";

import { Resend } from "resend";

export type ContactState = { ok: boolean; message: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(_previousState: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !subject || !message) {
    return { ok: false, message: "Please complete every field before sending." };
  }

  try {
    const toEmails = process.env.CONTACT_TO_EMAIL
      ? [process.env.CONTACT_TO_EMAIL]
      : ["sarmad_shaikh2003@yahoo.com", "abdullahshaikh085@gmail.com"];

    const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@nebulaxsolutions.com.au";

    await resend.emails.send({
      from: `NebulaX Solutions <${fromEmail}>`,
      to: toEmails,
      replyTo: email,
      subject: `New Inquiry from ${name} — Nebulax Solutions`,
      html: `
        <h2>New Inquiry — Nebulax Solutions</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return { ok: true, message: "Message sent successfully. We'll be in touch soon!" };
  } catch (error: any) {
    console.error("Resend contact submission error:", error);
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
