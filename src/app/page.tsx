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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://mohiuddinshanto.epicoptimize.com";
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohiuddin Shanto",
  url: siteUrl,
  image: siteUrl ? `${siteUrl}/assets/Mohiuddin%20Shanto%20Github%20Profile.png` : undefined,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack and MERN stack developer based in Dhaka, Bangladesh, building web applications with Next.js, React, Node.js, Express, and MongoDB.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://github.com/mohiuddinshanto",
    "https://www.linkedin.com/in/mohiuddin-shanto/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
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
