import Header from "./components/Header";
import IntroHero from "./components/IntroHero";
import ArticleSection from "./components/ArticleSection";
import ProjectsSection from "./components/ProjectSection";
import CVSection from "./components/CVSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <IntroHero />
      {/* <ArticleSection /> */}
      <ProjectsSection />
      <CVSection />
      <Footer />
    </main>
  );
}
