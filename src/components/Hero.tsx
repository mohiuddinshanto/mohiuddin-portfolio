"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { heroStats } from "@/data/portfolioData";

const PHRASES = [
  "MERN Stack Developer",
  "Next.js Developer",
  "React.js Builder",
  "Node.js & Express APIs",
  "MongoDB Database Design",
  "TypeScript Enthusiast",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentWord = PHRASES[phraseIndex];
      if (!isDeleting) {
        charIndex++;
        setDisplayText(currentWord.slice(0, charIndex));
        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 1400);
          return;
        }
      } else {
        charIndex--;
        setDisplayText(currentWord.slice(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % PHRASES.length;
        }
      }
      timeoutId = setTimeout(type, isDeleting ? 55 : 95);
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  // Stats Counter Animation
  useEffect(() => {
    let started = false;

    const checkStats = () => {
      if (started || !statsRef.current) return;
      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        started = true;
        heroStats.forEach((stat, idx) => {
          let count = 0;
          const target = stat.count;
          const step = Math.ceil(target / 40);
          const interval = setInterval(() => {
            count = Math.min(count + step, target);
            setCounts((prev) => {
              const updated = [...prev];
              updated[idx] = count;
              return updated;
            });
            if (count >= target) clearInterval(interval);
          }, 35);
        });
      }
    };

    window.addEventListener("scroll", checkStats, { passive: true });
    checkStats();

    return () => window.removeEventListener("scroll", checkStats);
  }, []);

  // Hero Card Tilt
  useEffect(() => {
    const card = heroCardRef.current;
    if (!card) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer || reduce) return;

    let cx = 0;
    let cy = 0;
    let ptrX = 0;
    let ptrY = 0;
    let animId: number;

    const onPointerMove = (e: PointerEvent) => {
      ptrX = e.clientX / window.innerWidth - 0.5;
      ptrY = e.clientY / window.innerHeight - 0.5;
    };

    const loop = () => {
      cx += (ptrX - cx) * 0.08;
      cy += (ptrY - cy) * 0.08;
      card.style.setProperty("--hrx", `${(-cy * 14).toFixed(2)}deg`);
      card.style.setProperty("--hry", `${(cx * 14).toFixed(2)}deg`);
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    loop();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content" id="hero-content">
            <div className="hero-badge">
              <span className="dot" />
              MERN Stack Developer · Next.js · React · Dhaka, BD
            </div>
            <h1 className="hero-title">
              Mohiuddin<br />
              <span className="name-accent">Shanto</span>
            </h1>
            <div className="hero-typewriter">
              <span>{displayText}</span>
              <span className="typewriter-cursor" />
            </div>
            <p className="hero-subtitle">
              I build <strong>full-stack web applications</strong> with React, Next.js, Node.js, Express.js &amp; MongoDB — from UI design to REST APIs and database architecture, with secure authentication and deployment on Vercel.
            </p>
            <div className="hero-cta">
              <a
                href="/assets/Mohiuddin_Shanto_Full-Stack_Resume.pdf"
                id="resumeBtn"
                className="btn-primary"
                download
              >
                <i className="fas fa-download" /> Download Resume
              </a>
              <a
                href="https://github.com/mohiuddinshanto"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <i className="fab fa-github" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohiuddin-shanto/"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
            </div>
            <div className="hero-stats" ref={statsRef}>
              {heroStats.map((stat, idx) => (
                <div key={stat.label} className="stat">
                  <span className="stat-num">{counts[idx]}+</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" id="heroVisual">
            <div className="hero-card glass-card" id="heroCard" ref={heroCardRef}>
              <div style={{ position: "relative", width: 140, height: 140, margin: "0 auto 18px", borderRadius: "50%", overflow: "hidden", border: "3px solid var(--accent)" }}>
                <Image
                  src="/assets/hero.png"
                  alt="Mohiuddin Shanto, portfolio portrait"
                  width={586}
                  height={735}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <h3>MERN Stack Developer</h3>
              <p>
                <i className="fas fa-map-marker-alt" /> Dhaka, Bangladesh
              </p>
              <div className="status-pill">
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "var(--accent)",
                    borderRadius: "50%",
                    boxShadow: "0 0 6px var(--accent)",
                  }}
                />
                Open for freelance
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
