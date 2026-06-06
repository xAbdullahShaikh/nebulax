"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectsSlider";
import { projects, ProjectType } from "@/components/data";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const tabs: Array<"All" | ProjectType> = ["All", "Chatbot", "Web App"];

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((project) => project.type === active), [active]);

  return (
    <main className="min-h-screen bg-nebula-bg">
      <Navbar />
      <section className="relative overflow-hidden pt-36 pb-16">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[110px]" />
        <div className="container-nebula relative text-center">
          <p className="section-label">Portfolio</p>
          <h1 className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-white md:text-7xl">Projects Portfolio</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-nebula-muted">A focused collection of AI automation, web platforms, and workflow systems designed for measurable business lift.</p>
          <div className="mt-10 inline-flex rounded-xl border border-white/[0.07] bg-white/[0.03] p-1">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActive(tab)} className={`rounded-lg px-5 py-2 text-sm font-bold transition ${active === tab ? "bg-nebula-blue text-white" : "text-slate-400 hover:text-white"}`}>{tab}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="container-nebula pb-24">
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => {
            const index = projects.findIndex((item) => item.title === project.title);
            return (
              <motion.div key={project.title} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.35 }}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
