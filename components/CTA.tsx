"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { fadeUp } from "./motion";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSuccess(true);
    setEmail("");
  }

  return (
    <section id="contact-cta" className="relative py-24">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} className="container-nebula relative">
        <div className="glass-card mx-auto max-w-4xl rounded-2xl border-blue-400/20 p-8 text-center md:p-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">Let&apos;s turn your idea into reality</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-nebula-muted md:text-base">Tell us where you want to go. We&apos;ll map the fastest path from first prototype to polished launch.</p>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="you@company.com" className="min-h-12 flex-1 rounded-lg border border-white/[0.1] bg-nebula-bg px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30" />
            <button className="rounded-lg bg-nebula-blue px-6 py-3 text-[15px] font-bold text-white shadow-glow transition hover:bg-blue-400">Get Started &rarr;</button>
          </form>
          {success && <p className="mt-5 font-semibold text-blue-200">✓ We&apos;ll be in touch soon!</p>}
        </div>
      </motion.div>
    </section>
  );
}