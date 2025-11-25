import siska from "@/app/data/projects/siska-hayati";
import monash from "@/app/data/projects/monash-uni";
import kibou from "@/app/data/projects/kibou-no-hikari";
import centragov from "./centra-gov";

export const projects = [
  {
    slug: "kibou-no-hikari",
    title: "Kibou No Hikari",
    year: "2025",
    desc: "An AI-powered CV Builder that helps users create or optimize CVs based on their career goals.",
    cat: "Fullstack Web",
    img: "/images/kibounohikari.png",
  },
  {
    slug: "siska-hayati",
    title: "Siska Hayati",
    year: "2024",
    desc: "Accommodating trees and green spaces data in town as a part of the government's digitalization program. Siska Hayati is not an ordinary CRUD project, is an educational platform for early-student to recognize tree's type and details, by scanning the unique QR code respectively.",
    cat: "Fullstack Web",
    img: "/images/siska.png",
  },
  {
    slug: "centra-gov",
    title: "CentraGOV",
    year: "2023",
    desc: "A self-initiated UI design for accommodate all the government services in a single platform. Inspired by the Estonian e-government concept where they digitalized most of their services and bureaucracy.",
    cat: "UI Design",
    img: "/images/centraGOV.png",
  },
  {
    slug: "monash-uni",
    title: "Monash University",
    year: "2026",
    desc: "The universe has told me that I'll be here in July 2026, pursuing master with LPDP scholarship and student accommodation stipend. Oh yes, I'll gracefully accept every part of the story that god has written on me.",
    cat: "Manifesto",
    img: "/images/monash.jpg",
  },
  {
    slug: "sunflower",
    title: "I love sunflower...",
    year: "2036",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    cat: "Folklore",
    img: "/images/sun.jpg",
  },
  {
    slug: "designer-guide",
    title: "Designer Guide",
    year: "2036",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
    cat: "Case Study",
    img: "/images/ohto.jpg",
  },
  {
    slug: "john-lang",
    title: "John Lang",
    year: "2036",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo culpa magnam, aliquam natus ipsa illo atque adipisci veniam id consectetur! Quia ipsam officia tenetur exercitationem iste minus, repudiandae reiciendis voluptates, soluta quaerat aut vitae, tempora voluptatem accusantium dignissimos? Fugit facere est nemo. Consequatur, reprehenderit! Iusto?",
    cat: "Case Study",
    img: "/images/john.png",
  },
];

export const projectMap: Record<string, any> = {
  [siska.slug]: siska,
  [monash.slug]: monash,
  [kibou.slug]: kibou,
  [centragov.slug]: centragov,
};
