"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects/index";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import Header from "@/app/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-40">
      <Header />

      {/* Volume label */}
      <motion.p variants={fadeUp} initial="hidden" animate="show" className="uppercase tracking-widest text-xs text-gray-600 mb-2">
        Archive — Vol. I
      </motion.p>

      {/* Page title */}
      <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="font-serif text-4xl md:text-5xl mb-6">
        Selected Work & Experiments
      </motion.h1>

      <div className="border-t border-gray-400 mb-10" />

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 space-y-8">
        {projects.map((p, i) => (
          <motion.div key={i} variants={fadeUp} initial="hidden" animate="show" className="space-y-3">
            <Link href={`/projects/${p.slug}`}>
              <h3 className="font-serif font-bold text-center text-xl py-5 mb-3 bg-[#efe4c8]">{p.title}</h3>
              <div className="w-full h-48 bg-gray-200 overflow-hidden border border-[#b8b1a4] shadow-[0_0_1px_0_rgba(0,0,0,0.25)]">
                <Image src={p.img} alt={p.title} width={500} height={300} className="newsprint-soft object-cover w-full h-full" />
              </div>

              <motion.div variants={fadeUp} className="relative flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-gray-700 font-serif py-4">
                <div className="h-[1px] flex-1 bg-gray-400 opacity-60" />
                <span className="px-2 italic font-normal">
                  {p.year} • {p.cat}
                </span>
                <div className="h-[1px] flex-1 bg-gray-400 opacity-60" />
              </motion.div>

              <p className="text-sm text-gray-800 leading-relaxed text-justify">{p.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-gray-400 mt-20" />

      <Link href="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mt-8 hover:opacity-60 transition-all">
        <ArrowLeft size={15} strokeWidth={1.6}></ArrowLeft>
        Exit Archive
      </Link>
    </section>
  );
}
