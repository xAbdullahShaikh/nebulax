"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";

const steps = [
  ["Discovery Call", "Learn your business goals in a focused 30-min session"],
  ["Proposal & Scope", "Detailed scope, timeline, fixed-price quote in 48 hours"],
  ["Design & Build", "Short sprints with weekly progress updates"],
  ["Launch & Support", "Deploy, monitor, and ongoing support"]
];

export default function Process() {
  return (
    <section id="process" className="bg-nebula-surface py-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="container-nebula">
        <motion.p variants={fadeUp} className="section-label">How We Work</motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white md:text-5xl">From Idea to Launch</motion.h2>
        <motion.div variants={fadeUp} className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map(([title, description], index) => (
            <article key={title} className="rounded-2xl border border-white/[0.07] bg-nebula-bg p-6">
              <div className="text-5xl font-black tabular-nums text-blue-500/[0.12]">0{index + 1}</div>
              <h3 className="mt-8 text-xl font-semibold leading-snug tracking-normal text-white">{title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-nebula-muted">{description}</p>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}