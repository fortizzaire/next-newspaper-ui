"use client";
import Image from "next/image";
import { abril } from "@/app/fonts";
import { delay, motion } from "framer-motion";

// Animation Variants for Hero Section
const container = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 2.0,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const photo = {
  hidden: { opacity: 0, scale: 1.0, y: 100 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.8, ease: "easeOut" },
  },
};

// Animation Variants for Divider Section
const dividerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.8 },
  },
};

const dividerLine = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const barItem = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const tagline = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function IntroSection() {
  const headline = "FARKHAN NINDYARAYHAN DHANENDRA";

  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 md:pt-24">
      {/* Full Width Title */}

      <motion.h2 className="ink-press text-center italic text-3xl md:text-5xl tracking-tight py-7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.05 * headline.length,
            delay: 0.1,
            ease: "linear",
            repeat: 0,
            opacity: { repeatType: "loop" },
          }}
        >
          {headline.split("").map((char, i) => (
            <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </motion.h2>

      <motion.div variants={container} initial="hidden" animate="show" className="md:flex flex-col md:flex-row gap-8 md:gap-10 items-start">
        {/* Photo */}
        <motion.div variants={photo} className="relative w-full md:w-1/3 float-image-mobile group">
          <Image src="/soqo.png" alt="Portrait" width={400} height={500} className="object-cover w-full h-auto" loading="eager" />
          {/* Hover caption */}
          <div
            className="
              absolute inset-0 
              bg-black/0 group-hover:bg-black/35 
              transition-all duration-500 ease-out
            "
          />

          <div
            className="
              absolute bottom-3 left-3 right-3
              opacity-0 group-hover:opacity-100
              transition-all duration-500 ease-out
              text-xs md:text-sm leading-snug
              font-serif italic text-[#f4f1e2]
            "
          >
            “Wanting to have Alan Ritchson physique, and classy af like Steve Jobs.”
          </div>
        </motion.div>

        {/* Bio */}
        <div className="w-full md:w-2/3 text-sm text-justify md:text-[15px] leading-relaxed text-gray-900">
          <motion.p variants={item} className="mb-4">
            <span className="dropcap">R</span>ecent Computer Science graduate with strong interests in Front-end Web, Mobile, and UI/UX Design. I also design posters, social media, and stuff using Adobe Creative. Throughout my study at
            Universitas Islam Indonesia, I adept to collaborate with interdisciplinary teams to build and participate in IT and non-IT initiatives which impact local communities.
          </motion.p>

          <motion.p variants={item} className="mb-4">
            I am currently exploring the intersection of IT and real-world applications, particularly in areas such as IoT, deep learning, and AI. I am seeking opportunities to collaborate on developing IoT and AI integrated software to map
            green spaces in urban areas. The goal is to enhance urban green landscapes by monitoring air quality and forecasting effective greening strategies to help combat air pollution.
          </motion.p>

          <motion.p variants={item}>In my spare time, I enjoy playing games, watching movies, and exercising at the gym.</motion.p>
        </div>
      </motion.div>

      <motion.div className="mt-12" variants={dividerContainer} initial="hidden" animate="show">
        {/* Top Border Line */}
        <motion.div className="border-t border-gray-400 origin-left" variants={dividerLine} />

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-3 gap-3">
          {/* Bars */}
          <div className="flex gap-[1px] w-full md:w-auto">
            <motion.div variants={barItem} className="h-6 flex-1 md:w-40 bg-[#EB6161]" />
            <motion.div variants={barItem} className="h-6 flex-1 md:w-40 bg-[#EF7D7D]" />
            <motion.div variants={barItem} className="h-6 flex-1 md:w-40 bg-[#F39F9F]" />
          </div>

          {/* Tagline */}
          <motion.p variants={tagline} className={`${abril.className} italic text-center md:text-right text-sm md:text-base w-full md:w-auto`}>
            7 years designing and 3 years building apps.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
