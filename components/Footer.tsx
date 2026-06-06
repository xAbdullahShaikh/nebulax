import Image from "next/image";
import Link from "next/link";
import { company } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-nebula-surface py-10">
      <div className="container-nebula grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
        <div className="flex gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-white/[0.08] bg-black">
            <Image src="/nebula.png" alt="NebulaX brand mark" width={48} height={48} className="h-full w-full object-cover" />
          </div>
          <div>
            <Link href="/" className="font-heading text-xl font-extrabold tracking-tight text-white">Nebula<span className="gradient-text">X</span></Link>
            <p className="mt-2 text-sm text-nebula-muted">© 2025 NebulaX Solutions. Intelligent IT Services.</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">CEO: {company.ceo}<br />CTO: {company.cto}</p>
          </div>
        </div>
        <div className="text-sm leading-7 text-slate-400">
          <p className="font-semibold text-white">Contact</p>
          <a href={company.phoneHref} className="block hover:text-white">{company.phone}</a>
          <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="block text-emerald-300 hover:text-emerald-200">WhatsApp NebulaX</a>
          <p>{company.address}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-300 md:justify-end">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/#process" className="hover:text-white">Process</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}