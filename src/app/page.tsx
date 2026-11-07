import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import ParticlesCanvas from "@/components/ParticlesCanvas";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WordPressDemos from "@/components/WordPressDemos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Effects3D from "@/components/Effects3D";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <ParticlesCanvas />
      <BackgroundOrbs />
      <Navbar />

      <main className="content-wrap">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <WordPressDemos />
        <Contact />
        <Footer />
      </main>

      <Effects3D />
      <ScrollReveal />
    </>
  );
}
