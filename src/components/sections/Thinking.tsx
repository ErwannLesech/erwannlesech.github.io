import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Section } from "@/components/SectionWrapper";
import { publications, type Publication } from "@/data/publications";
import { testimonials } from "@/data/testimonials";
import { useLang } from "@/lib/useLang";

const TYPE_COLOR: Record<Publication["type"], string> = {
  Article: "#38bdf8",
  Rapport: "#f97316",
  "Réflexion IA": "#7c3aed",
  Research: "#059669",
};

export function Thinking() {
  const { t, pick } = useLang();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 10000);
    return () => clearInterval(id);
  }, [paused]);

  const len = testimonials.length;
  const left = (idx - 1 + len) % len;
  const right = (idx + 1) % len;

  return (
    <Section id="thinking" title={t("thinking.title")} subtitle={t("thinking.subtitle")}>
      <div className="grid md:grid-cols-2 gap-5">
        {publications.map((p, i) => {
          const c = TYPE_COLOR[p.type];
          return (
            <motion.a
              key={p.id}
              href={p.url ?? "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="block rounded-2xl border border-border-subtle bg-bg-card p-6 hover:scale-[1.01] hover:shadow-[0_0_24px_var(--accent-glow)] hover:border-[var(--accent)] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="px-2.5 py-0.5 rounded-md text-mono text-xs uppercase"
                  style={{ background: `${c}22`, color: c }}
                >
                  {p.type}
                </span>
                <span className="text-mono text-xs text-text-secondary">{p.date}</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug">{pick(p.title)}</h3>
              <p className="mt-2 text-sm text-text-secondary line-clamp-2">{pick(p.abstract)}</p>
              <span className="inline-block mt-4 text-sm" style={{ color: "var(--accent)" }}>
                {t("thinking.read")}
              </span>
            </motion.a>
          );
        })}
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-semibold mb-8">{t("thinking.recommendations")}</h3>
        <div
          className="relative h-[320px] overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[
            { i: left, offset: -1 },
            { i: idx, offset: 0 },
            { i: right, offset: 1 },
          ].map(({ i, offset }) => {
            const tst = testimonials[i];
            const isCenter = offset === 0;
            return (
              <motion.div
                key={`${i}-${offset}`}
                initial={false}
                animate={{
                  x: `calc(${offset * 50}% - 50%)`,
                  scale: isCenter ? 1 : 0.85,
                  opacity: isCenter ? 1 : 0.45,
                  zIndex: isCenter ? 2 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-0 left-1/2 w-[50%]"
              >
                <div
                  className={`rounded-2xl border bg-bg-card p-8 relative ${
                    isCenter ? "border-[var(--accent)] shadow-[0_0_32px_var(--accent-glow)]" : "border-border-subtle"
                  }`}
                >
                  <Quote size={48} style={{ color: "var(--accent)" }} className="opacity-80" />
                  <p className="mt-4 italic text-text-primary leading-relaxed line-clamp-4">
                    {pick(tst.quote)}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="size-12 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center text-mono text-sm font-semibold" style={{ color: "var(--accent)" }}>
                      {tst.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{tst.name}</p>
                      <span className="inline-block mt-0.5 px-2 py-0.5 rounded-pill text-xs border border-border-subtle text-text-secondary">
                        {pick(tst.relationship)}
                      </span>
                    </div>
                  </div>
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
