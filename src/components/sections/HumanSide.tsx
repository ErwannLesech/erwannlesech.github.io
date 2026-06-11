import { AnimatePresence, motion } from "framer-motion";
import { ChefHat, Gamepad2, Music, Plane, Waves, Bike, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Section } from "@/components/SectionWrapper";
import { passions } from "@/data/passions";
import { testimonials } from "@/data/testimonials";
import { useLang } from "@/lib/useLang";

const ICONS = {
  swim: Waves,
  moto: Bike,
  plane: Plane,
  chef: ChefHat,
  gamepad: Gamepad2,
  music: Music,
};

export function HumanSide() {
  const { t, pick } = useLang();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 10000);
    return () => clearInterval(id);
  }, [paused]);

  const len = testimonials.length;

  const getRelativeOffset = (itemIndex: number) => {
    let diff = itemIndex - idx;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  };

  return (
    <Section
      id="humanly"
      title={t("humanly.title")}
      subtitle={t("humanly.subtitle")}
      fullHeight={false}
      className="min-h-screen"
    >
      {/* Passions */}
      <div className="mb-16">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold">{t("passions.title")}</h3>
          <p className="mt-2 text-text-secondary">{t("passions.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {passions.map((p, i) => {
            const Icon = ICONS[p.icon];
            const color = p.accent === "orange" ? "var(--accent)" : "var(--sky)";
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] },
                }}
                className="group relative aspect-[3/2] rounded-2xl border border-border-subtle bg-[linear-gradient(180deg,color-mix(in_oklab,var(--bg-card)_94%,white_6%)_0%,var(--bg-card)_100%)] p-6 overflow-hidden transition-[transform,border-color,box-shadow] duration-650 ease-[cubic-bezier(0.22,1,0.36,1)] hover:duration-180 hover:border-[color:color-mix(in_oklab,var(--accent)_72%,white_28%)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.36),0_0_32px_var(--accent-glow)]"
                style={{ color }}
              >
                <div className="relative h-full flex flex-col">
                  <Icon size={28} className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:scale-115 group-hover:-rotate-6" style={{ color }} />
                  <h3 className="mt-5 text-base font-semibold text-text-primary transition-colors duration-300 group-hover:text-white">{pick(p.label)}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed transition-colors duration-300 group-hover:text-white/78">{pick(p.description)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Recommendations/Testimonials */}
      <div>
        <h3 className="text-2xl font-semibold mb-8">{t("humanly.recommendations")}</h3>
        <div
          className="relative h-[320px] overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {testimonials.map((tst, i) => {
            const offset = getRelativeOffset(i);
            const isCenter = offset === 0;
            const isNeighbor = Math.abs(offset) === 1;
            const isVisible = len <= 3 ? true : isCenter || isNeighbor;

            return (
              <motion.div
                key={tst.id}
                initial={false}
                animate={{
                  x: `calc(${offset * 50}% - 50%)`,
                  scale: isCenter ? 1 : isNeighbor ? 0.85 : 0.75,
                  opacity: isCenter ? 1 : isNeighbor ? 0.45 : 0,
                  zIndex: isCenter ? 3 : isNeighbor ? 2 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-0 left-1/2 w-[50%]"
                style={{ pointerEvents: isVisible ? "auto" : "none" }}
              >
                <div
                  onClick={() => !isCenter && setIdx(i)}
                  className={`rounded-2xl border bg-bg-card p-8 relative transition-all ${
                    isCenter ? "border-[var(--accent)] shadow-[0_0_32px_var(--accent-glow)]" : "border-border-subtle"
                  } ${!isCenter ? "cursor-pointer hover:border-[var(--accent)] hover:shadow-[0_0_24px_var(--accent-glow)]" : ""}`}
                >
                  <Quote size={30} style={{ color: "var(--accent)" }} className="opacity-80" />
                  <motion.div
                    key={`content-${i}`}
                    initial={isCenter ? { opacity: 0 } : false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <p className="mt-4 italic text-text-primary leading-relaxed line-clamp-5">
                      {pick(tst.quote)}
                    </p>
                  </motion.div>
                  <motion.div
                    key={`author-${i}`}
                    initial={isCenter ? { opacity: 0 } : false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                    className="mt-6 flex items-center gap-3"
                  >
                    <div className="size-12 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center text-mono text-sm font-semibold" style={{ color: "var(--accent)" }}>
                      {tst.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{tst.name}</p>
                      <span className="inline-block mt-0.5 px-2 py-0.5 rounded-pill text-xs border border-border-subtle text-text-secondary">
                        {pick(tst.relationship)}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => setIdx((i) => (i - 1 + len) % len)}
            aria-label="Previous"
            className="size-9 rounded-full border border-border-subtle flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to ${i + 1}`}
                className="size-2 rounded-full transition-all"
                style={{ background: i === idx ? "var(--accent)" : "var(--border-subtle)", width: i === idx ? 20 : 8 }}
              />
            ))}
          </div>
          <button
            onClick={() => setIdx((i) => (i + 1) % len)}
            aria-label="Next"
            className="size-9 rounded-full border border-border-subtle flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </Section>
  );
}
