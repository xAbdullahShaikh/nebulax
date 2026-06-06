import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { services } from "@/components/data";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-nebula-bg">
      <Navbar />
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04] [mask-image:radial-gradient(circle_at_top,black,transparent_70%)]" />
        <div className="container-nebula relative text-center">
          <p className="section-label">NebulaX Capabilities</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-normal text-white md:text-6xl">Our Services</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-nebula-muted">Specialized IT services for teams that want practical AI, resilient web products, connected systems, and performance marketing without slow enterprise theater.</p>
        </div>
      </section>
      <section className="container-nebula space-y-8 pb-24">
        {services.map((service, index) => (
          <article key={service.title} className="glass-card grid gap-8 rounded-2xl p-7 md:grid-cols-[0.78fr_1.22fr] md:p-10">
            <div>
              <div className="grid h-16 w-16 place-items-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-extrabold text-blue-100">{service.icon}</div>
              <p className="mt-8 text-6xl font-black tabular-nums text-blue-500/[0.12]">0{index + 1}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white md:text-4xl">{service.title}</h2>
              <p className="mt-5 leading-8 text-nebula-muted">{service.longDescription}</p>
              <Link href="/contact" className="mt-7 inline-flex rounded-lg bg-nebula-blue px-5 py-3 font-bold text-white shadow-glow transition hover:bg-blue-400">Get a Quote &rarr;</Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 text-slate-200">
                  <span className="mr-3 text-blue-300">•</span>{feature}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
      <CTA />
      <Footer />
    </main>
  );
}