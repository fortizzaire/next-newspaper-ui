"use client";

import Image from "next/image";
import Link from "next/link";
import { abril } from "@/app/fonts";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { projects } from "@/app/data/projects/index";
import { ArrowUpRight } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sectionTitle: Variants = {
  hidden: { opacity: 0, y: 20, letterSpacing: "0.15em" },
  show: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.02em",
    transition: { duration: 0.8, ease: "easeOut", delay: 3.2 },
  },
};

const ruleLine: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 3.2 },
  },
};

export default function ProjectsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-15">
      <motion.h2 variants={sectionTitle} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className={`${abril.className} bg-[#efe4c8] text-center text-4xl md:text-5xl tracking-tight p-7 mb-3`}>
        PROJECT HEADLINE
      </motion.h2>

      {/* Bottom Border */}
      <motion.div variants={ruleLine} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="border-t border-gray-400 origin-left" />

      {/* Grid wrapper */}
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="columns-1 md:columns-2 gap-8 space-y-8 mt-10 relative">
        {/* Middle Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-400"></div>

        {projects.slice(0, 6).map((p, i) => (
          <Link key={i} href={`/projects/${p.slug}`} prefetch className="break-inside-avoid-column block group hover-lift">
            {/* Card */}
            <motion.div variants={card} className="flex flex-col space-y-3 pb-2">
              <div className="w-full h-40 md:h-44 bg-gray-200 overflow-hidden border border-[#b8b1a4] shadow-[0_0_1px_0_rgba(0,0,0,0.25)]">
                <Image src={p.img} alt={p.title} width={500} height={300} className="newsprint-soft object-cover w-full h-full p-[1px] group-hover:scale-[1.01] transition-all duration-300" />
              </div>

              <motion.h3 variants={fadeUp} className="font-serif font-bold text-[1.22rem] leading-[1.15] cutout-headline pt-3 pb-2">
                {p.title.split("").map((char, i) => (
                  <span key={i} style={{ display: "inline-block" }} className="char">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </motion.h3>

              <motion.p variants={fadeUp} className="text-sm text-gray-800 leading-relaxed text-justify">
                {p.desc}
              </motion.p>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="pt-8">
        <motion.div variants={fadeUp} className="relative flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-gray-700 font-serif mt-2 mb-12">
          <div className="h-[1px] flex-1 bg-gray-400 opacity-60" />
          <span className="px-2 italic font-normal">Maximum limit index</span>
          <div className="h-[1px] flex-1 bg-gray-400 opacity-60" />
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4">
          {/* Left Col */}
          <div className="col-span-2 md:col-span-3">
            {/* <p className="uppercase tracking-widest text-xs text-gray-600 mb-2">Archive — Vol. I</p> */}
            <h3 className="ink-press italic uppercase text-3xl md:text-4xl leading-tight mb-3">More Work & Experiments</h3>
            <p className="italic text-sm mb-6">Browse the full archive of case studies, prototypes, and digital experiments.</p>
            <Link href="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-gray-700 pb-1 hover:opacity-60 transition-all">
              Enter the Archive
              <ArrowUpRight size={15} strokeWidth={1.6} className="translate-y-[1px]"></ArrowUpRight>
            </Link>
          </div>
          {/* Right col (image) */}
          <div className="col-span-1 place-items-center">
            <Image src="/vintage-person.png" alt="euweuh" height={150} width={150} className="opacity-80"></Image>
          </div>
        </div>
      </motion.div>

      <div className="mt-16">
        <div className="border-t border-gray-400" />

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-3 gap-3">
          {/* Bars */}
          <div className="flex gap-[1px] w-full md:w-auto">
            <div className="h-6 flex-1 md:w-40 bg-[#EB6161]" />
            <div className="h-6 flex-1 md:w-40 bg-[#EF7D7D]" />
            <div className="h-6 flex-1 md:w-40 bg-[#F39F9F]" />
          </div>

          {/* Tagline */}
          <p className={`${abril.className} italic text-center md:text-right text-sm md:text-base w-full md:w-auto`}>Creativity is contagious, pass it on. (Albert Einstein)</p>
        </div>
      </div>
    </section>
  );
}
