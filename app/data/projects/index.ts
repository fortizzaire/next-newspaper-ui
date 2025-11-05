import siska from "@/app/data/projects/siska-hayati";

export const projects = [
  {
    slug: "siska-hayati",
    title: "Projek Paling Spesial",
    year: "2036",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint pariatur laudantium similique nobis magnam non maiores ab voluptas est adipisci voluptatibus nam eum corporis temporibus modi natus quaerat molestias quos nostrum aliquid a quia, odit enim. Corporis quidem soluta earum est, animi delectus eveniet, voluptate architecto id dicta facilis obcaecati. Facilis numquam tempore animi iure nulla laudantium modi pariatur architecto.",
    cat: "Fullstack Web",
    img: "/images/nytimes.jpg",
  },
  {
    slug: "oh-dude",
    title: "Ohh.. Dude!",
    year: "2036",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint pariatur laudantium similique nobis magnam non maiores ab voluptas est adipisci voluptatibus nam eum corporis temporibus modi natus quaerat molestias quos nostrum aliquid a quia, odit enim. Corporis quidem soluta earum est, animi delectus eveniet, voluptate architecto id dicta facilis obcaecati. Facilis numquam tempore animi iure nulla laudantium modi pariatur architecto.",
    cat: "Crime Scene",
    img: "/images/dude.jpg",
  },
  {
    slug: "monash-uni",
    title: "Monash University",
    year: "2036",
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
};
