"use client";

import { useEffect } from "react";

export default function Effects3D() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer || reduce) return;

    const TILT: [string, number][] = [
      [".mt", 9],
      [".pc", 7],
      [".ei", 6],
      [".gc:not(.mt):not(.pc):not(.ei)", 4],
    ];

    const selector = TILT.map((t) => t[0]).join(",");
    const maxFor = (el: HTMLElement) => {
      const found = TILT.find((t) => el.matches(t[0]));
      return found ? found[1] : 4;
    };

    let active: HTMLElement | null = null;
    let lastEvt: PointerEvent | null = null;
    let queued = false;

    const release = (el: HTMLElement | null) => {
      if (!el) return;
      el.style.rotate = "";
      el.classList.remove("tilting");
    };

    const engage = (el: HTMLElement) => {
      if (!el.querySelector(":scope > .glare")) {
        const g = document.createElement("span");
        g.className = "glare";
        g.setAttribute("aria-hidden", "true");
        el.appendChild(g);
      }
      el.classList.add("tilting");
    };

    const update = () => {
      queued = false;
      if (!active || !lastEvt) return;
      const r = active.getBoundingClientRect();
      const px = (lastEvt.clientX - r.left) / r.width;
      const py = (lastEvt.clientY - r.top) / r.height;
      const nx = (px - 0.5) * 2;
      const ny = (py - 0.5) * 2;
      const angle = Math.min(1, Math.hypot(nx, ny)) * maxFor(active);
      active.style.rotate = `${-ny} ${nx} 0 ${angle.toFixed(2)}deg`;
      active.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
      active.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = e.target as HTMLElement | null;
      const el = target?.closest ? (target.closest(selector) as HTMLElement | null) : null;
      if (el !== active) {
        release(active);
        active = el;
        if (el) engage(el);
      }
      if (active) {
        lastEvt = e;
        if (!queued) {
          queued = true;
          requestAnimationFrame(update);
        }
      }
    };

    const onMouseLeave = () => {
      release(active);
      active = null;
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      release(active);
    };
  }, []);

  return null;
}
