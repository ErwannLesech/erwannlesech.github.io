import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Section } from "@/components/SectionWrapper";
import { projects, type Project } from "@/data/projects";
import { useLang } from "@/lib/useLang";
import { cn } from "@/lib/utils";

const DOMAIN_COLOR: Record<Project["domain"], string> = {
  ai: "#7c3aed",
  data: "#0891b2",
  cloud: "#059669",
  devops: "#f59e0b",
  fullstack: "#f97316",
};

type Filter = "all" | Project["domain"];
const FILTERS: Filter[] = ["all", "ai", "data", "cloud", "devops", "fullstack"];

export function Projects() {
  const { t, pick } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.domain === filter)),
    [filter]
  );

  return (
    <Section id="projects" title={t("projects.title")}>
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-4 py-2 rounded-pill text-sm transition-all border",
              filter === f
                ? "text-white border-transparent"
                : "border-border-subtle text-text-secondary hover:text-text-primary hover:border-[var(--accent)]"
            )}
            style={filter === f ? { background: "var(--accent)" } : undefined}
          >
            {t(`projects.filters.${f}`)}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.button
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(p)}
              className="group relative text-left rounded-2xl bg-bg-card border border-border-subtle overflow-hidden p-6 hover:scale-[1.02] hover:shadow-[0_0_24px_var(--accent-glow)] hover:border-[var(--accent)] transition-all"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: DOMAIN_COLOR[p.domain] }}
              />
              <h3 className="text-lg font-semibold pr-4">{pick(p.title)}</h3>
              <p className="mt-2 text-sm text-text-secondary line-clamp-2">{pick(p.description)}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="text-mono text-xs px-2 py-0.5 rounded-md border border-border-subtle text-text-secondary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-2 text-text-secondary">
                  {p.github && <Github size={16} />}
                  {p.live && <ExternalLink size={16} />}
                </div>
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }}>
                  {t("projects.viewDetails")}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-card border border-border-subtle rounded-2xl max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className="inline-block mb-3 px-2 py-0.5 rounded-md text-mono text-xs uppercase"
                    style={{ background: `${DOMAIN_COLOR[open.domain]}22`, color: DOMAIN_COLOR[open.domain] }}
                  >
                    {open.domain}
                  </div>
                  <h3 className="text-2xl font-bold">{pick(open.title)}</h3>
                </div>
                <button onClick={() => setOpen(null)} aria-label="Close" className="text-text-secondary hover:text-text-primary">
                  <X />
                </button>
              </div>
              <p className="mt-4 text-text-secondary leading-relaxed">{pick(open.longDescription)}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {open.tags.map((tag) => (
                  <span key={tag} className="text-mono text-xs px-2.5 py-1 rounded-md border" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {open.github && (
                  <a href={open.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-border-subtle text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                )}
                {open.live && (
                  <a href={open.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-pill text-white text-sm" style={{ background: "var(--accent)" }}>
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
