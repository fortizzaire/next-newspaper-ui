"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects/index";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import Header from "@/app/components/Header";

const listContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-40">
      <Header />

      {/* Volume label */}
      <motion.p variants={listItem} initial="hidden" whileInView="show" viewport={{ once: true }} className="uppercase tracking-widest text-xs text-gray-600 mb-2">
        Archive — Vol. I
      </motion.p>

      {/* Page title */}
      <motion.h1 variants={listItem} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-serif text-4xl md:text-5xl mb-6">
        Selected Work & Experiments
      </motion.h1>

      <div className="mb-10">
        <div className="border-t border-gray-400 mb-2" />
        {/* <div className="h-4 w-full bg-[#efe4c8]" /> */}
      </div>

      {/* Project list with stagger animation */}
      <motion.div variants={listContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex flex-col divide-y divide-gray-300">
        {projects.map((p, i) => (
          <motion.div key={i} variants={listItem} className="py-10">
            <Link href={`/projects/${p.slug}`} className="hover-lift group flex flex-col md:flex-row items-start gap-6">
              {/* Image */}
              <div className="w-full md:w-1/3 bg-gray-200 overflow-hidden border border-[#b8b1a4] mix-blend-multiply opacity-95">
                <Image src={p.img} alt={p.title} width={400} height={300} className="newsprint-soft object-cover w-full h-48 md:h-40 transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>

              {/* Text */}
              <div className="flex-1 space-y-3">
                <h3 className="font-serif font-bold text-center text-lg md:text-xl leading-tight">{p.title}</h3>

                <div className="relative flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-gray-700 font-serif py-1">
                  <div className="h-[1px] flex-1 bg-gray-400 opacity-60" />
                  <span className="px-2 italic font-normal">
                    Circa {p.year} • {p.cat}
                  </span>
                  <div className="h-[1px] flex-1 bg-gray-400 opacity-60" />
                </div>

                {/* <div className="border-t border-gray-300 w-full my-1" /> */}

                <p className="text-sm text-gray-800 leading-relaxed text-justify">{p.desc}</p>
                <p className="italic text-sm text-gray-500 mt-4 text-center">Read the full case study</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer border + exit link */}
      <div className="mt-20">
        <div className="h-4 w-full bg-[#e1ddd3] opacity-80" />
        <div className="border-t border-gray-400 mt-2" />
      </div>
      <div className="flex justify-between mt-5">
        <Link href="/" className="order-first inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-60 transition-all">
          <ArrowLeft size={15} strokeWidth={1.6} />
          Exit Archive
        </Link>
        <span className="order-last uppercase tracking-widest text-sm">Vol. I</span>
      </div>
    </section>
  );
}
