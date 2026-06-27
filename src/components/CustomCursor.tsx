import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-custom");
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [role=button], input, textarea, [data-cursor=hover]"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("cursor-custom");
    };
  }, [reduced]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <motion.div
        className="h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference"
        style={{
          background: "var(--accent)",
          boxShadow: "0 0 16px var(--accent-glow)",
        }}
        animate={{
          scale: hover ? 2.667 : 1,
          opacity: hover ? 0.6 : 1,
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
      />
    </div>
  );
}
