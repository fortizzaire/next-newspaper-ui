"use client";

import { abril } from "@/app/fonts";
import { delay, motion } from "framer-motion";
import { Variants } from "framer-motion";

const sectionTitle: Variants = {
  hidden: { opacity: 0, y: 20, letterSpacing: "0.15em" },
  show: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.02em",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ruleLine: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const container: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const columnStagger: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface CVItemProps {
  title: string;
  org: string;
  year: string;
  desc: string;
  lists?: string[];
}

const CVItem = ({ title, org, year, desc, lists }: CVItemProps) => (
  <motion.div variants={item}>
    <div className="hover-lift space-y-3">
      <div className="flex justify-between items-start pt-2">
        <h4 className="font-serif font-bold text-md leading-tight cutout-headline">{title}</h4>
        <span className="italic text-sm text-gray-700">{year}</span>
      </div>

      <p className="italic text-sm text-gray-700">{org}</p>

      <p className="text-sm text-justify text-gray-900 leading-relaxed">{desc}</p>

      {lists && lists.length > 0 && (
        <ul className="list-disc pl-5 text-sm text-gray-900 space-y-1 mt-2 text-justify">
          {lists.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

export default function CVSection() {
  return (
    <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-5xl mx-auto px-6 pt-20 md:pt-15">
      <motion.h2 variants={sectionTitle} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className={`${abril.className} bg-[#efe4c8] text-center text-4xl md:text-5xl tracking-tight p-7 mb-3`}>
        CV HEADLINE
      </motion.h2>

      {/* Bottom Border */}
      <motion.div variants={ruleLine} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="border-t border-gray-400 origin-left" />

      {/* CV Grid */}
      <motion.div variants={columnStagger} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
        {/* WORK COLUMN */}
        <motion.div variants={container} className="space-y-10">
          {/* Header */}
          <motion.h3 variants={container} className={`${abril.className} text-center text-3xl md:text-4xl mb-4 bg-[#e1ddd3] py-4`}>
            Work
          </motion.h3>

          <CVItem
            title="Web Project Management"
            org="Dinas Lingkungan Hidup — Indonesia"
            year="2024–2025"
            desc="In associated with the Government Environmental Office in Tasikmalaya City, I collaborated with the crew to build a Web Based Green Spaces Management System, namely Siska Hayati, to map trees across town. This project aims to enhance data accuracy and provide the tree informations for wide audiences. Over 6.753 trees were recorded, spread across over 39 green spaces in Tasikmalaya."
          />

          <CVItem
            title="DevOps Intern"
            org="Bank BJB — Indonesia"
            year="2024–2025"
            desc="Initiated a sub-project of Continuous Integration using Jenkins Pipeline from the Gitlab Repositories to the On-Premise Services provided  by IBM App Connect Enterprise. The project was aimed for improving the server-checking by the pipeline to reduce failure during the  Continuous Deployment process. By implementing the time interval multi-server checking method in the pipeline, the process was  improved in error and time efficiency by 25%."
          />
        </motion.div>

        {/* EXPERIENCE COLUMN */}
        <motion.div variants={container} className="space-y-10">
          <motion.h3 variants={container} className={`${abril.className} text-center text-3xl md:text-4xl mb-4 bg-[#e1ddd3] py-4`}>
            Experience
          </motion.h3>

          <CVItem
            title="'Bank Air Kami v2' Research Member"
            org="Universitas Islam Indonesia"
            year="2023-2024"
            desc="Led by Mr Ari Sujarwo, we aimed to improve the data workflows and system infrastructures by integrating cybersecurity frameworks and IoT technologies, which lacked by the 'VERSION-1' system. The project offered a solution to water scarcity in rural communities in Terban, Yogyakarta, by providing water quality information and consumptions. My role was to:"
            lists={[
              "Build a proposed framework for cybersecurity measures, I implemented the CIA (Confidentiality, Integrity, Availability) Framework to enhance system reliability and security, leveraging tools like Snort IDS and Hashing methods for the countermeasures.",
              "As for data communication architecture, I utilized Node-RED for the MQTT workflows and management in IoT system.",
              "Working with a cross-functional team (Electrical Engineer, Web Developer, Scrum Master) to build a robust and solid infrastructure",
            ]}
          />

          <CVItem
            title="The 7th International Student Science Forum"
            org="Ho Chi Minh City, Vietnam"
            year="2023"
            desc="By the mission of expanding horizon, cultural exchange, and knowledge sharing, we presented our paper with the title of 'Automatic Tap Water for the Clean Sanitation' in front of 100+ vietnamese audiences and 50+ shortlisted-peers across Southeast Asia countries."
          />

          <CVItem
            title="Leader of Program Division"
            org="Gatotkaca Unisi — Indonesia"
            year="2023–2024"
            desc="While the technical development of Gatotkaca's 2nd electric vehicle was going on, I supported the non-technical aspect by working with the Marketing and Public Relation crew to:"
            lists={[
              "Developed a company website and profile for Gatotkaca Unisi which enhanced a company branding with an increase of members up to 20 people and 2 main sponsors for the Electric Vehicle development.",
              "Hired skilled division members in which increased the EV development with 10% less workflow.",
            ]}
          />
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="mt-20">
        <div className="border-t border-gray-400" />

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-3 gap-3">
          {/* Bars */}
          <div className="flex gap-px w-full md:w-auto">
            <div className="h-6 flex-1 md:w-40 bg-[#EB6161]" />
            <div className="h-6 flex-1 md:w-40 bg-[#EF7D7D]" />
            <div className="h-6 flex-1 md:w-40 bg-[#F39F9F]" />
          </div>

          {/* Tagline */}
          <p className={`${abril.className} italic text-center md:text-right text-sm md:text-base w-full md:w-auto`}>We work in the dark to serve the light.</p>
        </div>
      </div>
    </motion.section>
  );
}
