"use client";

import { submitContact } from "@/app/actions/contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { company } from "@/components/data";
import Image from "next/image";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending} className="mt-2 w-full rounded-lg bg-[#0f1f5c] px-6 py-4 text-sm font-extrabold tracking-wide text-white transition hover:bg-[#172c7d] disabled:cursor-not-allowed disabled:opacity-70">{pending ? "SENDING..." : "SEND MESSAGE"}</button>;
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContact, { ok: false, message: "" });

  return (
    <main className="min-h-screen bg-[#edf2f7] text-slate-900">
      <Navbar />
      <section className="container-nebula grid min-h-screen gap-12 pt-32 pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <div className="mb-7 grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-slate-950 shadow-xl shadow-slate-300/60">
            <Image src="/stackpointer-logo.png" alt="Stackpointer Labs brand mark" width={80} height={80} className="h-full w-full object-cover" />
          </div>
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">Contact Us</span>
          <h1 className="mt-7 font-contact text-5xl font-extrabold leading-[0.95] tracking-normal text-[#0f1f5c] md:text-7xl">LET&apos;S BUILD THE FUTURE TOGETHER</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Bring us the challenge. We&apos;ll bring product thinking, intelligent automation, and the engineering discipline to launch it cleanly.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h2 className="text-xl font-bold text-[#0f1f5c]">Office Location</h2>
              <p className="mt-3 leading-7 text-slate-600">{company.address}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0f1f5c]">Get In Touch</h2>
              <p className="mt-3 leading-7 text-slate-600">
                <a href={company.phoneHref} className="font-semibold text-[#0f1f5c] hover:text-blue-700">{company.phone}</a><br />
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 hover:text-emerald-600">WhatsApp Stackpointer Labs</a><br />
                {company.email}
              </p>
            </div>
            <div className="grid gap-3 rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm sm:col-span-2 lg:col-span-1">
              <h2 className="text-xl font-bold text-[#0f1f5c]">Leadership</h2>
              <p className="text-slate-600"><span className="font-semibold text-slate-900">CEO:</span> {company.ceo}</p>
              <p className="text-slate-600"><span className="font-semibold text-slate-900">CTO:</span> {company.cto}</p>
            </div>
          </div>
        </div>
        <form action={formAction} className="rounded-xl bg-white p-6 shadow-2xl shadow-slate-300/60 md:p-8">
          <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-bold text-slate-700">Name<input name="name" className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label>
            <label className="text-sm font-bold text-slate-700">Email<input name="email" type="email" className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label>
          </div>
          <label className="mt-5 block text-sm font-bold text-slate-700">Subject<input name="subject" className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label>
          <label className="mt-5 block text-sm font-bold text-slate-700">Message<textarea name="message" rows={6} className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label>
          <SubmitButton />
          <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="mt-3 flex w-full items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-4 text-sm font-extrabold tracking-wide text-emerald-700 transition hover:bg-emerald-100">CHAT ON WHATSAPP</a>
          {state.message && <p className={`mt-4 text-sm font-semibold ${state.ok ? "text-emerald-600" : "text-red-600"}`}>{state.message}</p>}
        </form>
      </section>
      <Footer />
    </main>
  );
}
