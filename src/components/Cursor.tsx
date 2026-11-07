"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx - 7}px`;
      cursor.style.top = `${my - 7}px`;
    };

    const animateRing = () => {
      rx += (mx - rx - 21) * 0.12;
      ry += (my - ry - 21) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      animId = requestAnimationFrame(animateRing);
    };

    const onMouseDown = () => cursor.classList.add("clicked");
    const onMouseUp = () => cursor.classList.remove("clicked");

    const onMouseEnterTarget = () => ring.classList.add("hovered");
    const onMouseLeaveTarget = () => ring.classList.remove("hovered");

    const attachHoverListeners = () => {
      const interactables = document.querySelectorAll(
        "a, button, .glass-card, .project-card, .wp-card, .edu-item, .chip, .skill-chip"
      );
      interactables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterTarget);
        el.addEventListener("mouseleave", onMouseLeaveTarget);
      });
      return interactables;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    animId = requestAnimationFrame(animateRing);

    const elements = attachHoverListeners();
    const interval = setInterval(() => {
      attachHoverListeners();
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animId);
      clearInterval(interval);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterTarget);
        el.removeEventListener("mouseleave", onMouseLeaveTarget);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} id="cursor" />
      <div className="cursor-ring" ref={ringRef} id="cursorRing" />
    </>
  );
}
