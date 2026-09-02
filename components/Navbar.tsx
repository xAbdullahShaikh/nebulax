"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Services", href: "/services", home: "#services" },
  { label: "Projects", href: "/projects", home: "#projects" },
  { label: "Process", href: "/#process", home: "#process" }
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Stackpointer Labs home">
      <Image src="/stackpointer-logo.png" alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" priority />
      <span className="flex items-center gap-2">
        <span className="relative h-10 w-[172px] overflow-hidden">
          <Image src="/stackpointer-wordmark.png" alt="Stackpointer" width={500} height={500} className="absolute left-1/2 top-1/2 w-[226px] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-[1.75] contrast-125 drop-shadow-[0_0_8px_rgba(45,212,191,0.28)]" priority />
        </span>
        <span className="relative top-[3px] font-heading text-sm font-bold leading-none uppercase tracking-[0.16em] text-cyan-100 drop-shadow-[0_0_8px_rgba(45,212,191,0.3)]">Labs</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 40], ["rgba(6,8,16,0.72)", "rgba(6,8,16,0.96)"]);
  const isHome = pathname === "/";

  return (
    <motion.header style={{ backgroundColor: bg }} className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] backdrop-blur-xl">
      <nav className="container-nebula flex h-[76px] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={isHome ? link.home : link.href} className="text-[15px] font-semibold text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-lg bg-nebula-blue px-5 text-[15px] font-bold text-white shadow-[0_0_28px_rgba(59,130,246,0.26)] transition hover:bg-blue-400">
            Get in Touch
          </Link>
        </div>
        <button onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.09] md:hidden" aria-label="Toggle menu">
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </nav>
      {open && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/[0.07] bg-nebula-bg/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.label} onClick={() => setOpen(false)} href={isHome ? link.home : link.href} className="text-slate-200">
                {link.label}
              </Link>
            ))}
            <Link onClick={() => setOpen(false)} href="/contact" className="rounded-lg bg-nebula-blue px-5 py-3 text-center text-sm font-bold text-white">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
