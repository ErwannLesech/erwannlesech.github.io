import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { Section } from "@/components/SectionWrapper";
import { experiences } from "@/data/experiences";
import { useLang } from "@/lib/useLang";

function TimelineItem({ exp, idx, total, progress }: any) {
  const { pick } = useLang();
  const start = idx / total;
  const end = (idx + 1) / total;
  const active = useTransform(progress, (v: number) => (v >= start ? 1 : 0));

  return (
    <div className="relative pl-12 pb-16 last:pb-0">
      <motion.div
        className="absolute left-[14px] top-2 size-4 rounded-full -translate-x-1/2 border-2"
        style={{
          background: "var(--bg-primary)",
          borderColor: useTransform(active, (a) => (a ? "var(--accent)" : "var(--border-subtle)")),
          boxShadow: useTransform(active, (a) => (a ? "0 0 16px var(--accent-glow)" : "none")),
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border-subtle bg-bg-card p-6 hover:border-[var(--accent)] hover:shadow-[0_0_24px_var(--accent-glow)] transition-all"
      >
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center text-mono text-sm shrink-0" style={{ color: "var(--accent)" }}>
            {exp.company[0]}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{pick(exp.role)}</h3>
              <span className="text-mono text-xs text-text-secondary">{exp.dates}</span>
            </div>
            <p className="text-sm text-text-secondary mt-1">{exp.company}</p>
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-text-secondary">
              <MapPin size={12} /> {exp.location} {exp.flag}
            </div>
            <ul className="mt-4 space-y-2">
              {exp.bullets.map((b: any, i: number) => (
                <li key={i} className="text-sm text-text-secondary flex gap-2">
                  <span style={{ color: "var(--accent)" }}>—</span>
                  <span>{pick(b)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-mono text-xs px-2.5 py-1 rounded-md border"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Experience() {
  const { t, pick } = useLang();
  const pros = experiences.filter((e) => e.type === "pro");
  const edus = experiences.filter((e) => e.type === "academic");

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="experience" title={t("experience.title")}>
      <div ref={containerRef} className="relative">
        <div className="absolute left-[14px] top-2 bottom-2 w-px bg-border-subtle" />
        <motion.div
          className="absolute left-[14px] top-2 w-px origin-top"
          style={{ height: lineHeight, background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)" }}
        />
        {pros.map((exp, i) => (
          <TimelineItem key={exp.id} exp={exp} idx={i} total={pros.length} progress={scrollYProgress} />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6">{t("experience.education")}</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {edus.map((e) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border border-border-subtle bg-bg-card p-6 hover:border-[var(--accent)] hover:shadow-[0_0_24px_var(--accent-glow)] transition-all"
            >
              <div className="absolute top-4 right-4 flex flex-col items-center gap-1 px-2 py-1.5 rounded-md border border-border-subtle bg-bg-secondary">
                <span className="text-mono text-[10px] font-semibold">{e.country}</span>
                <span className="text-base leading-none">{e.flag}</span>
              </div>
              <div className="size-12 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center text-mono text-sm" style={{ color: "var(--accent)" }}>
                {e.company[0]}
              </div>
              <h4 className="mt-4 text-base font-semibold pr-12">{pick(e.role)}</h4>
              <p className="text-sm text-text-secondary mt-1">{e.company}</p>
              <p className="text-mono text-xs text-text-secondary mt-1">{e.dates}</p>
              {e.honors && (
                <p className="mt-3 text-sm text-text-secondary">{pick(e.honors)}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
