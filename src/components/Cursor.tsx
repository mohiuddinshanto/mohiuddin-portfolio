"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    if (!cursor || !ring) return;
    document.body.classList.add("custom-cursor-enabled");

    let x = -100;
    let y = -100;
    let ringX = x;
    let ringY = y;
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const animate = () => {
      ringX += (x - ringX) * 0.14;
      ringY += (y - ringY) * 0.14;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      ring.classList.toggle("hovered", !!target?.closest("a, button, .gc, .tile, .skill-filter"));
    };
    const down = () => cursor.classList.add("clicked");
    const up = () => cursor.classList.remove("clicked");
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    frame = requestAnimationFrame(animate);
    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <><div className="cursor-dot" id="cursor" aria-hidden="true" /><div className="cursor-ring" id="cursorRing" aria-hidden="true" /></>;
}
