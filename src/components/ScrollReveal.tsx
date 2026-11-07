"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Hero entry animation
    const heroContent = document.getElementById("hero-content");
    if (heroContent) {
      heroContent.style.opacity = "0";
      heroContent.style.transform = "translateY(30px)";
      heroContent.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      setTimeout(() => {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "none";
      }, 100);
    }

    // Scroll reveal observer
    const revealEls = document.querySelectorAll(".reveal, .stagger");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealEls.forEach((el) => observer.observe(el));

    // Highlight text observer
    const hlEls = document.querySelectorAll(".section-title .hl");
    const hlObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );

    hlEls.forEach((el) => hlObserver.observe(el));

    return () => {
      observer.disconnect();
      hlObserver.disconnect();
    };
  }, []);

  return null;
}
