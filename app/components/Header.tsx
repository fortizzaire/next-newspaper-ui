"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { abril } from "@/app/fonts";

export default function Header() {
  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div className="bg-[#faf7f2] w-full max-w-5xl">
        {/* Row 1: Title + Logo */}
        <div className="flex items-center justify-between py-4 px-6">
          <h1 className={`${abril.className} font-serif font-black text-4xl md:text-5xl tracking-tight w-full text-center md:w-auto md:text-left`}>Fortizzaire Press</h1>

          {/* Logo (center on mobile, right on desktop) */}
          <div className="hidden md:block">
            <Image src="/ft.png" alt="Fortizzaire Logo" width={42} height={42} className="object-contain" />
          </div>
        </div>

        {/* Row 1 Border */}
        <div className="border-b border-black-300" />

        {/* Row 2: Subtitle + Links */}
        <div className="hidden md:flex items-center justify-between py-1 px-6 text-xs md:text-sm font-semibold">
          <span>Information Technology, Web Developer, Designer</span>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.linkedin.com/in/nindyarayhan/" className="hover:underline">
              LinkedIn ↗
            </a>
            <a href="https://github.com/fortizzaire" className="hover:underline">
              Github ↗
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="hidden md:flex border-b border-black-300" />
      </div>
    </motion.header>
  );
}
