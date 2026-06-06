"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { projects } from "./data";
import { fadeUp, stagger } from "./motion";

function MockPreview({ index, theme }: { index: number; theme: string }) {
  const isChat = index === 0 || index === 2 || index === 4;
  const color = theme === "purple" ? "bg-purple-400" : theme === "green" ? "bg-emerald-400" : theme === "amber" ? "bg-amber-300" : "bg-blue-400";
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-4">
      {isChat ? (
        <div className="w-full max-w-[230px] rounded-xl border border-white/[0.08] bg-slate-950/80 p-3 shadow-2xl">
          <div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-yellow-400" /><span className="h-2 w-2 rounded-full bg-green-400" /></div>
          <div className="space-y-2 text-[10px] font-medium leading-4">
            <div className="w-4/5 rounded-lg bg-white/[0.08] p-2.5 text-slate-300">Can you check my order status?</div>
            <div className={`ml-auto w-4/5 rounded-lg ${color} p-2.5 text-slate-950`}>Absolutely. Your delivery arrives tomorrow.</div>
            <div className="w-3/5 rounded-lg bg-white/[0.08] p-2.5 text-slate-300">Send me updates.</div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[260px] rounded-xl border border-white/[0.08] bg-slate-950/80 p-3 shadow-2xl">
          <div className="mb-3 h-2.5 w-24 rounded-full bg-white/[0.12]" />
          <div className="grid grid-cols-3 gap-2.5">
            <div className={`col-span-2 h-20 rounded-lg ${color}/80`} />
            <div className="h-20 rounded-lg bg-white/[0.08]" />
            <div className="h-12 rounded-lg bg-white/[0.08]" />
            <div className="col-span-2 h-12 rounded-lg bg-white/[0.08]" />
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-nebula-card transition duration-300 hover:-translate-y-1 hover:border-blue-400/70">
      <div className="relative aspect-[16/9] max-h-[210px] overflow-hidden">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-blue-500 px-3 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-white">{project.type}</span>
        <MockPreview index={index} theme={project.theme} />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold leading-snug tracking-normal text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-nebula-muted">{project.meta}</p>
      </div>
    </article>
  );
}

export default function ProjectsSlider() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const visible = 3;
  const max = Math.max(projects.length - visible, 0);
  const desktopOffset = useMemo(() => Math.min(current, max), [current, max]);

  useEffect(() => {
    if (!hovered) return;
    const timer = setInterval(() => setCurrent((value) => (value + 1) % projects.length), 1500);
    return () => clearInterval(timer);
  }, [hovered]);

  return (
    <section id="projects" className="overflow-hidden py-24">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="container-nebula">
        <motion.p variants={fadeUp} className="section-label">Our Work</motion.p>
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white md:text-5xl">Recent Projects</motion.h2>
          <motion.div variants={fadeUp} className="flex gap-3">
            <button aria-label="Previous project" onClick={() => setCurrent((value) => (value - 1 + projects.length) % projects.length)} className="grid h-11 w-11 place-items-center rounded-lg border border-white/[0.1] text-lg font-semibold text-white transition hover:border-blue-400">&larr;</button>
            <button aria-label="Next project" onClick={() => setCurrent((value) => (value + 1) % projects.length)} className="grid h-11 w-11 place-items-center rounded-lg border border-white/[0.1] text-lg font-semibold text-white transition hover:border-blue-400">&rarr;</button>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="mt-10 overflow-hidden rounded-2xl">
          <div className="hidden gap-5 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:flex" style={{ transform: `translateX(calc(-${desktopOffset} * (33.333% + 14px)))` }}>
            {projects.map((project, index) => <div key={project.title} className="min-w-[calc(33.333%-14px)]"><ProjectCard project={project} index={index} /></div>)}
          </div>
          <div className="md:hidden">
            <ProjectCard project={projects[current]} index={current} />
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-3">
          <span className="text-xs font-medium text-slate-500">Hover carousel to move</span>
          <div className="flex gap-2">
            {projects.map((project, index) => <button key={project.title} aria-label={`Go to ${project.title}`} onClick={() => setCurrent(index)} className={`h-2 rounded-full bg-blue-400 transition-all ${current === index ? "w-8" : "w-2 opacity-40"}`} />)}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}