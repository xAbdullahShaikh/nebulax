"use server";

export type ContactState = { ok: boolean; message: string };

export async function submitContact(_previousState: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !subject || !message) {
    return { ok: false, message: "Please complete every field before sending." };
  }

  console.log("NebulaX contact submission", { name, email, subject, message });
  return { ok: true, message: "Message sent successfully. We'll be in touch soon!" };
}
