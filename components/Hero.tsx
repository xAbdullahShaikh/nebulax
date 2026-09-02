"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { company } from "./data";
import { fadeUp } from "./motion";

const stats = [
  { value: "12+", label: "Projects" },
  { value: "100%", label: "Satisfaction" },
  { value: "3x", label: "Faster" },
  { value: "24/7", label: "Support" }
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.055] [mask-image:radial-gradient(circle_at_50%_36%,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-[42%] h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/18 blur-[120px]" />
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }} className="container-nebula relative z-10 text-center">
        <motion.div variants={fadeUp} className="mx-auto mb-5 grid h-20 w-20 place-items-center overflow-hidden rounded-full border border-blue-300/20 bg-white/[0.03] shadow-[0_0_42px_rgba(59,130,246,0.22)]">
          <Image src="/stackpointer-logo.png" alt="Stackpointer Labs brand mark" width={80} height={80} className="h-full w-full object-cover" priority />
        </motion.div>
        <motion.div variants={fadeUp} className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/[0.08] px-4 py-2 text-[13px] font-medium text-blue-100 shadow-[0_0_24px_rgba(59,130,246,0.12)]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-nebula-blue" /> Now Accepting Clients - 2025
        </motion.div>
        <motion.h1 variants={fadeUp} className="mx-auto max-w-6xl font-heading text-[clamp(3.2rem,7.2vw,6.7rem)] font-bold leading-[0.9] tracking-[-0.02em] text-white">
          Build Smarter.<br />
          <span className="gradient-text">Scale Faster.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-3xl text-balance text-lg leading-8 text-slate-300 md:text-xl">
          Stackpointer Labs builds AI chatbots, web platforms, integrations, and digital marketing campaigns that help businesses automate, grow, and launch with confidence.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-lg bg-nebula-blue px-6 text-[15px] font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-400">Start a Project &rarr;</Link>
          <Link href={company.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-lg border border-emerald-400/35 bg-emerald-400/[0.08] px-6 text-[15px] font-bold text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-300/70 hover:bg-emerald-400/[0.14]">WhatsApp Us</Link>
          <Link href="#projects" className="inline-flex min-h-12 items-center rounded-lg border border-white/[0.12] bg-white/[0.02] px-6 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:border-blue-400/70 hover:bg-white/[0.05]">View Our Work</Link>
        </motion.div>
        <motion.div variants={fadeUp} className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 text-left md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-5 py-4 backdrop-blur-md">
              <div className="font-heading text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
