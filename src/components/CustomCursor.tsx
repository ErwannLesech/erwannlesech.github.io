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
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
      style={{
        background: "var(--accent)",
        boxShadow: "0 0 16px var(--accent-glow)",
      }}
      animate={{
        x: pos.x - (hover ? 16 : 6),
        y: pos.y - (hover ? 16 : 6),
        width: hover ? 32 : 12,
        height: hover ? 32 : 12,
        opacity: hover ? 0.6 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
    />
  );
}
