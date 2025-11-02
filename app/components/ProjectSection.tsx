"use client";
import Image from "next/image";
import Link from "next/link";
import { abril } from "@/app/fonts";
import { delay, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sectionTitle = {
  hidden: { opacity: 0, y: 20, letterSpacing: "0.15em" },
  show: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.02em",
    transition: { duration: 0.8, ease: "easeOut", delay: 3.2 },
  },
};

const ruleLine = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 3.2 },
  },
};

const projects = [
  {
    title: "Projek Paling Spesial",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint pariatur laudantium similique nobis magnam non maiores ab voluptas est adipisci voluptatibus nam eum corporis temporibus modi natus quaerat molestias quos nostrum aliquid a quia, odit enim. Corporis quidem soluta earum est, animi delectus eveniet, voluptate architecto id dicta facilis obcaecati. Facilis numquam tempore animi iure nulla laudantium modi pariatur architecto.",
    cat: "Fullstack Web",
    img: "/images/Siska.jpg",
    href: "/projects/project-1",
  },
  {
    title: "Ohh.. Dude!",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint pariatur laudantium similique nobis magnam non maiores ab voluptas est adipisci voluptatibus nam eum corporis temporibus modi natus quaerat molestias quos nostrum aliquid a quia, odit enim. Corporis quidem soluta earum est, animi delectus eveniet, voluptate architecto id dicta facilis obcaecati. Facilis numquam tempore animi iure nulla laudantium modi pariatur architecto.",
    cat: "Crime Scene",
    img: "/images/dude.jpg",
    href: "/projects/project-2",
  },
  {
    title: "Monash University",
    desc: "The universe has told me that I'll be here in July 2026, pursuing master with LPDP scholarship and student accommodation stipend. Oh yes, I'll gracefully accept every part of the story that god has written on me.",
    cat: "Manifesto",
    img: "/images/monash.jpg",
    href: "/projects/project-3",
  },
  {
    title: "I love sunflower...",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    cat: "Folklore",
    img: "/images/sun.jpg",
    href: "/projects/project-4",
  },
  {
    title: "Designer Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    cat: "Case Study",
    img: "/images/1.jpg",
    href: "/projects/project-4",
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-15">
      <motion.h2 variants={sectionTitle} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className={`${abril.className} bg-[#f5edc9] text-center text-4xl md:text-5xl tracking-tight p-7 mb-3`}>
        PROJECT HEADLINE
      </motion.h2>

      {/* Bottom Border */}
      <motion.div variants={ruleLine} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="border-t border-gray-400 origin-left" />

      {/* Grid wrapper */}
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-10 relative mt-10">
        {/* Middle Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-400"></div>

        {projects.map((p, i) => (
          <Link key={i} href={p.href} className="block group">
            {/* Card */}
            <motion.div variants={card} className="flex flex-col space-y-2 pb-2">
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <Image src={p.img} alt={p.title} width={500} height={300} className="newsprint-soft object-cover w-full h-full group-hover:scale-[1.02] transition-all duration-300" />
              </div>

              <motion.div variants={fadeUp} className="relative flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-gray-700 m-2 font-serif">
                <div className="h-[1px] flex-1 bg-gray-400 opacity-60" />
                <span className="px-2 italic font-normal">Featured Project • {p.cat}</span>
                <div className="h-[1px] flex-1 bg-gray-400 opacity-60" />
              </motion.div>

              <motion.h3 variants={fadeUp} className="font-serif font-bold text-xl leading-tight cutout-headline py-1">
                {p.title.split("").map((char, i) => (
                  <span key={i} style={{ display: "inline-block" }} className="char">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </motion.h3>

              <motion.p variants={fadeUp} className="text-sm text-gray-800 leading-relaxed text-justify">
                {p.desc}
              </motion.p>

              {/* underline */}
              {/* <div className="border-b border-black w-full mt-2"></div> */}
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <div className="mt-20">
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
