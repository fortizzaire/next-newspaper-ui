const kibou = {
  slug: "kibou-no-hikari",
  title: "Kibou No Hikari - AI powered CV builder",
  year: "2025",
  role: "Initiator",
  summary: "An AI-powered CV Builder that helps users create or optimize CVs based on their career goals.",
  heroImg: "/images/kibounohikari.png",
  body: [
    { type: "heading", content: "Background" },
    {
      type: "paragraph",
      content:
        "I've seen lots of fellows writing irrelevant CV with the application requirements, either in stating their prior experience, or in expressing their intention, let alone writing it in professional CV layout. Moreover, they write one CV for numerous application. Because I believe, every job market in every industry and country has its own unique requirements, whether in how they expressing goals towards their career, stating their prior experiences and skills, and writing professionally.",
    },
    { type: "heading", content: "MVP" },
    {
      type: "paragraph",
      content:
        "Regarding this problem, I am thrilled to cultivate this idea into realization, by creating tools to build an extra-ordinary CV Builder with AI assistance, with a Japanese-style UI touch so you could be motivated to beautify your CV as beautiful as Japan, hehe. Here's the MVP (Minimum Viable Product) for this idea:",
    },
    {
      type: "list-mvp",
      items: [
        "Landing Page (Presentation of the product)",
        "CV Builder Page with goal selection page (e.g Tech in Singapore, Hospitality in Dubai)",
        "Input CV form OR textbox (create from scratch or transform existing CV)",
        "AI transformation",
        "Template preview",
        "PDF download",
      ],
    },
    { type: "heading", content: "Cost for MVP Setup" },
    {
      type: "list-cost-mvp",
      items: [
        "Frontend & Hosting (Next.js + Vercel): FREE",
        "Database (Supabase): FREE",
        "AI API (OpenAI GPT-4-turbo): ~$5-$10 total (100 users test)",
        "Domain (Optional): $0-$15/year",
        "Design (Figma + Tailwind): FREE",
        "PDF Generation (react-pdf/Puppeteer): FREE",
      ],
    },
    {
      type: "paragraph",
      content: "Total MVP budget: $5-$25 (Rp75k-Rp400k).",
    },
    { type: "heading", content: "What's Next?" },
    {
      type: "paragraph",
      content:
        "Essay builder for University Admissions (USA, Europe, SEA, etc.), scholarships (LPDP, AAS, Fulbright, Erasmus, DAAD, MEXT, etc.), and Fellowships (YSEALI, MUN, etc). Peer review by professionals based on user's career determination.",
    },
    { type: "list", items: ["CV Builder with AI Assistant", "Optimized with your country and industry goal's CV", "Transform your existing CV into optimized one"] },
  ],
  links: {
    code: "https://www.figma.com/proto/xl1caXIJB4LSSZBxCDMCSq/UI-Designer-team-library?page-id=2316%3A2&node-id=2317-4&viewport=599%2C213%2C0.36&t=JRrMKtplKZWQyakq-1&scaling=contain&content-scaling=fixed&starting-point-node-id=2317%3A4",
  },
} as const;

export default kibou;
