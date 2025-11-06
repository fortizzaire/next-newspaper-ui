import Link from "next/link";
import { notFound } from "next/navigation";
import { projectMap } from "@/app/data/projects/index";
import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import Header from "@/app/components/Header";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const project = projectMap[slug];
  if (!project) return notFound();

  return (
    <section className="max-w-5xl mx-auto px-6 py-35">
      <Header />

      {/* Title and Image */}
      <p className="uppercase tracking-widest text-xs text-gray-600 mb-2">Case Study — Vol. I</p>
      <h1 className="font-serif text-4xl md:text-5xl mb-4">{project.title}</h1>
      <p className="italic text-gray-700 mb-8">
        {project.year} • {project.role}
      </p>
      <img src={project.heroImg} alt={project.title} className="w-full mb-8" />

      {/* Grid Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative pt-2">
        {/* Middle Divider */}
        <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-gray-400"></div>
        {/* Col 1: Description */}
        <div className="space-y-10 col-span-2">
          <h2 className="font-serif text-2xl mb-2">Summary</h2>
          <p className="text-md text-justify leading-relaxed mb-10">{project.summary}</p>

          {project.body.map((block: any, i: number) => {
            if (block.type === "heading")
              return (
                <h2 key={i} className="font-serif text-2xl mt-10 mb-2">
                  {block.content}
                </h2>
              );
            if (block.type === "paragraph")
              return (
                <p key={i} className="mb-4 leading-relaxed text-justify">
                  {block.content}
                </p>
              );
            return null;
          })}
        </div>
        {/* Col 2: Features and Links */}
        <div className="space-y-10 col-span-1">
          <h2 className="font-serif text-2xl mb-2">Key Features</h2>
          {project.body.map((block: any, i: number) => {
            if (block.type === "list")
              return (
                <ul key={i} className="list-disc pl-6 mb-4 text-md">
                  {block.items.map((item: string, j: number) => (
                    <li key={j} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            return null;
          })}

          <a href={project.links.code} className="inline-flex items-center gap-2 mt-10 border-b border-gray-800 pb-1 text-xs uppercase tracking-wider">
            View Code Repository
            <ArrowUpRight size={15} strokeWidth={1.6} className="translate-y-[1px]"></ArrowUpRight>
          </a>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-20" />

      <Link href="/projects" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mt-8 hover:opacity-60 transition-all">
        <ArrowLeft size={15} strokeWidth={1.6}></ArrowLeft>
        Exit Case Study
      </Link>
    </section>
  );
}
