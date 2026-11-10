"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  o: number;
}

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compact = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize);

    const particles: Particle[] = [];
    const particleCount = compact
      ? Math.min(14, Math.floor((width * height) / 60000))
      : Math.min(70, Math.floor((width * height) / 24000));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    let lastFrame = 0;

    const draw = (time: number) => {
      if (document.hidden) return;
      if (compact && time - lastFrame < 50) {
        animId = requestAnimationFrame(draw);
        return;
      }
      lastFrame = time;
      ctx.clearRect(0, 0, width, height);
      const isDark =
        document.documentElement.getAttribute("data-theme") !== "light";
      const col = isDark ? "255,120,40" : "160,65,15";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${p.o})`;
        ctx.fill();

        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });

      for (let i = 0; !compact && i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${col},${0.07 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      if (!reduce) animId = requestAnimationFrame(draw);
    };

    const onVisibilityChange = () => {
      if (!reduce && !document.hidden) animId = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    if (!reduce && !document.hidden) animId = requestAnimationFrame(draw);
    else draw(0);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="particles-canvas" ref={canvasRef} />;
}
