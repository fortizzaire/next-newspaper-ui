"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { abril } from "@/app/fonts";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="relative bg-[#f4efe2] mt-15 pt-5 pb-12 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top text */}
        <p className="italic text-md leading-relaxed mb-3">
          If you are interested in collaborating with me, hit me up at{" "}
          <a href="mailto:nindyarayhan@gmail.com" className="font-bold underline hover:opacity-70">
            nindyarayhan@gmail.com
          </a>
        </p>

        {/* First divider */}
        <div className="border-t border-black-400" />

        {/* Social links row */}
        <div className="flex flex-wrap items-center gap-4 text-sm py-2">
          {[
            { name: "LinkedIn", url: "https://www.linkedin.com/in/nindyarayhan/" },
            { name: "Github", url: "https://github.com/fortizzaire" },
            { name: "Instagram", url: "https://www.instagram.com/farrkhnd/" },
            { name: "Spotify", url: "https://open.spotify.com/user/justforhappygaming?si=84ad734ff65b4fd1" },
          ].map((s, i) => (
            <Link key={i} href={s.url} className="hover:underline inline-flex items-center gap-1 font-semibold">
              {s.name} <ArrowUpRight size={12} strokeWidth={1.6} className="translate-y-px" />
            </Link>
          ))}
        </div>

        {/* Second divider */}
        <div className="border-t border-black-400" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-6">
          {/* Logo & copyright */}
          <div className="flex items-center gap-3">
            <Image src="/ft.png" alt="brand logo" width={32} height={32} className="object-contain" />

            <p className={`${abril.className} text-xl md:text-3xl`}>© 2025 Farkhan Nindyarayhan</p>
          </div>

          {/* Barcode image */}
          <Image src="/images/barcode-sun.png" alt="barcode" width={160} height={40} className="object-contain opacity-90" />
        </div>
      </div>
    </motion.footer>
  );
}
