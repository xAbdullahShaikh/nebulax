"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import { services } from "./data";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="container-nebula">
        <motion.p variants={fadeUp} className="section-label">What We Build</motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white md:text-5xl">Services Built for Scale</motion.h2>
        <motion.div variants={fadeUp} className="mt-12 grid overflow-hidden rounded-2xl border border-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article key={service.title} className="group relative min-h-[360px] border-white/[0.07] bg-nebula-card/70 p-7 transition hover:bg-slate-800/80 md:border-l md:[&:nth-child(2n+1)]:border-l-0 lg:[&:nth-child(2n+1)]:border-l lg:first:border-l-0">
              <div className="absolute left-0 top-0 h-44 w-44 -translate-x-16 -translate-y-16 rounded-full bg-nebula-blue/0 blur-3xl transition group-hover:bg-nebula-blue/20" />
              <div className="relative z-10">
                <div className="grid h-[52px] w-[52px] place-items-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-[13px] font-extrabold tracking-normal text-blue-200">{service.icon}</div>
                <h3 className="mt-7 text-[1.28rem] font-semibold leading-snug tracking-normal text-white">{service.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-nebula-muted">{service.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-slate-400">{tag}</span>)}
                </div>
                <span className="absolute right-6 top-6 text-5xl font-black tabular-nums text-white/[0.035]">0{index + 1}</span>
              </div>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}