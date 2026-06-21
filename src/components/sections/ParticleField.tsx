import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  isOrange: boolean;
}

interface ParticlePalette {
  blue: string;
  blueShadow: string;
  orange: string;
  orangeShadow: string;
  line: string;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -9999, y: -9999, active: false });
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const palette: ParticlePalette = theme === "light"
      ? {
          blue: "rgba(9, 79, 126, 0.7)",
          blueShadow: "rgba(8, 47, 73, 0.35)",
          orange: "rgba(190, 55, 10, 0.72)",
          orangeShadow: "rgba(190, 55, 10, 0.4)",
          line: "rgba(10, 14, 22, 0.30)",
        }
      : {
          blue: "rgba(56, 189, 248, 0.55)",
          blueShadow: "rgba(56, 189, 248, 0.35)",
          orange: "rgba(249, 115, 22, 0.55)",
          orangeShadow: "rgba(249, 115, 22, 0.6)",
          line: "rgba(226, 232, 240, 0.22)",
        };

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(180, Math.floor((width * height) / 6000));
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: 0.1 + Math.random() * 0.2,
        r: 0.6 + Math.random() * 1.6,
        isOrange: Math.random() < 0.18,
      }));
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => { mouseRef.current.active = false; };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;

      // update + draw points
      for (const p of particles) {
        if (mActive) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            const d = Math.sqrt(d2) || 1;
            const force = (1 - d / 120) * 0.6;
            p.vx += (dx / d) * force * 0.15;
            p.vy += (dy / d) * force * 0.15;
          }
        }
        p.vx *= 0.97;
        p.vy = p.vy * 0.97 + 0.005;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y > height + 10) { p.y = -10; p.x = Math.random() * width; }
        if (p.y < -20) p.y = height + 10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (p.isOrange) {
          ctx.fillStyle = palette.orange;
          ctx.shadowColor = palette.orangeShadow;
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = palette.blue;
          ctx.shadowColor = palette.blueShadow;
          ctx.shadowBlur = 4;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 110 * 110) {
            const alpha = (1 - Math.sqrt(d2) / 110) * 0.25;
            ctx.strokeStyle = palette.line.replace("0.22", String(alpha));
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full"
    />
  );
}
