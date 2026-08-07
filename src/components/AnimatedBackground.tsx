"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();

    // The seed from 21st.dev was 174074637
    // A simple hash function to generate static phases per blob
    const hash = (x: number) => {
      const s = Math.sin(x) * 43758.5453;
      return s - Math.floor(s);
    };

    // Give each blob static phases p and p2
    const p1 = hash(1) * 100;
    const p1_2 = hash(2) * 100;
    const p2 = hash(3) * 100;
    const p2_2 = hash(4) * 100;
    const p3 = hash(5) * 100;
    const p3_2 = hash(6) * 100;
    const p4 = hash(7) * 100;
    const p4_2 = hash(8) * 100;

    const baseConfig = [
      { bx: 66.94, by: 46.43, px: p1, py: p1_2, colors: "rgba(251, 233, 240, 1) 0%, rgba(251, 233, 240, 0.844) 19.02%, rgba(251, 233, 240, 0.5) 38.05%, rgba(251, 233, 240, 0.156) 57.07%, rgba(251, 233, 240, 0) 76.1%" },
      { bx: 34.69, by: 66.31, px: p2, py: p2_2, colors: "rgba(205, 231, 240, 1) 0%, rgba(205, 231, 240, 0.844) 12.73%, rgba(205, 231, 240, 0.5) 25.45%, rgba(205, 231, 240, 0.156) 38.18%, rgba(205, 231, 240, 0) 50.9%" },
      { bx: 48.93, by: 19.32, px: p3, py: p3_2, colors: "rgba(230, 214, 245, 1) 0%, rgba(230, 214, 245, 0.844) 16.75%, rgba(230, 214, 245, 0.5) 33.5%, rgba(230, 214, 245, 0.156) 50.25%, rgba(230, 214, 245, 0) 67%" },
      { bx: 80.23, by: 87.54, px: p4, py: p4_2, colors: "rgba(214, 240, 228, 1) 0%, rgba(214, 240, 228, 0.844) 10.28%, rgba(214, 240, 228, 0.5) 20.55%, rgba(214, 240, 228, 0.156) 30.83%, rgba(214, 240, 228, 0) 41.1%" },
    ];

    const amt = 0.40;
    const speedMultiplier = 1.00;

    const render = (now: number) => {
      const t = (now - startTime) / 1000;
      const ph = t * speedMultiplier;

      if (bgRef.current) {
        const gradients = baseConfig.map((blob) => {
          // (sin(ph * 0.55 + p) - sin(p)) * 14 * amt
          const dx = (Math.sin(ph * 0.55 + blob.px) - Math.sin(blob.px)) * 14 * amt;
          const dy = (Math.sin(ph * 0.43 + blob.py) - Math.sin(blob.py)) * 14 * amt;
          const x = blob.bx + dx;
          const y = blob.by + dy;
          return `radial-gradient(circle at ${x}% ${y}%, ${blob.colors})`;
        });

        // The background needs a base color and the SVG filter for the grain, followed by the radial gradients
        const bgImage = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.280'/></svg>"), ${gradients.join(", ")}`;
        
        bgRef.current.style.backgroundImage = bgImage;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        backgroundColor: "#FBE9F0",
        backgroundSize: "120px 120px, auto, auto, auto, auto",
        backgroundBlendMode: "overlay, normal, normal, normal, normal",
      }}
    />
  );
}
