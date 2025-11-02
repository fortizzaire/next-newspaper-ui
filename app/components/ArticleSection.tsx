"use client";
import { motion } from "framer-motion";
import { abril } from "@/app/fonts";

export default function ArticleSection() {
  const articleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-30 md:py-15">
      <h2 className={`${abril.className} bg-[#f5edc9] text-center text-4xl md:text-5xl tracking-tight p-7 mb-3`}>PROJECT HEADLINE</h2>
      {/* Bottom Border */}
      <div className="border-t border-gray-400" />

      <div className="space-y-10 py-10">
        {[1, 2, 3].map((item) => (
          <motion.article key={item} variants={articleVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="border-b pb-12">
            <h2 className="ink-press text-4xl font-semibold mb-4">Editorial Story {item}</h2>
            <p className="text-lg font-light max-w-2xl leading-relaxed">A long-form section like NYTimes. Scroll reveals paragraphs, creating a narrative rhythm. Each block animates into view to mimic premium editorial storytelling.</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
