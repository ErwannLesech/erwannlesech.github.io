import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, FileText, Github, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/SectionWrapper";
import { projects, type Project } from "@/data/projects";
import { useLang } from "@/lib/useLang";
import { cn } from "@/lib/utils";
import { Publications } from "./Publications";

const DOMAIN_COLOR: Record<Project["domain"], string> = {
  agentic_ai: "#7c3aed",
  ml_research: "#0891b2",
  data_science: "#059669",
  backend_cloud: "#f59e0b",
  systems_devops: "#f97316",
  product: "#ef4444",
};

type Filter = "all" | Project["domain"];
const FILTERS: Filter[] = ["all", ...new Set(projects.map((p) => p.domain))];

export function Projects() {
  const { t, pick } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [visible, setVisible] = useState<Project[]>(projects);
  const [isFiltering, setIsFiltering] = useState(false);
  const [open, setOpen] = useState<Project | null>(null);
  const filterTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<{ type?: string; id?: string }>;
      const itemType = customEvent.detail?.type;
      const itemId = customEvent.detail?.id;

      if (itemType !== "project" || !itemId) return;

      const found = projects.find((project) => project.id === itemId);
      if (found) {
        setOpen(found);
      }
    };

    window.addEventListener("portfolio:navigate-to-item", onNavigate);
    return () => window.removeEventListener("portfolio:navigate-to-item", onNavigate);
  }, []);

  useEffect(() => {
    return () => {
      if (filterTimeoutRef.current !== null) {
        window.clearTimeout(filterTimeoutRef.current);
      }
    };
  }, []);

  const handleFilterChange = (nextFilter: Filter) => {
    if (nextFilter === filter || isFiltering) return;

    setIsFiltering(true);

    filterTimeoutRef.current = window.setTimeout(() => {
      const nextVisible =
        nextFilter === "all" ? projects : projects.filter((project) => project.domain === nextFilter);

      setFilter(nextFilter);
      setVisible(nextVisible);

      // Let React commit the new list before fading it back in.
      requestAnimationFrame(() => setIsFiltering(false));
    }, 170);
  };

  return (
    <Section id="projects" title={t("projects.title")}>
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => handleFilterChange(f)}
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

      <motion.div
        initial={false}
        animate={{ opacity: isFiltering ? 0 : 1 }}
        transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
      >
        <div key={filter} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, index) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.2) }}
              onClick={() => setOpen(p)}
              className="group relative text-left rounded-2xl bg-bg-card border border-border-subtle overflow-hidden p-6 hover:scale-[1.02] hover:shadow-[0_0_24px_var(--accent-glow)] hover:border-[var(--accent)] transition-all"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: DOMAIN_COLOR[p.domain] }}
              />
              <h3 className="text-lg font-semibold pr-4">{pick(p.title)}</h3>
              <p className="mt-2 text-sm text-text-secondary line-clamp-3">{pick(p.description)}</p>
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
                  {p.report && <FileText size={16} />}
                </div>
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }}>
                  {t("projects.viewDetails")}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
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
                    {t(`projects.filters.${open.domain}`)}
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
                {open.report && (
                  <a href={open.report} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-border-subtle text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                    <FileText size={14} /> Report
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-16" id="publications">
        <Publications embedded />
      </div>
    </Section>
  );
}
