import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/SectionWrapper";
import { type Skill, type SkillDomain } from "@/data/skills";
import { useMounted } from "@/hooks/use-mounted";
import { useLang } from "@/lib/useLang";
import { cn } from "@/lib/utils";
import { CLUSTER_COLOR, SkillsGraph } from "./SkillsGraph";

const FILTERS: ("all" | SkillDomain)[] = ["all", "fullstack", "ai", "data", "tools", "platforms"];

const DOMAIN_LABEL: Record<SkillDomain, string> = {
  fullstack: "Full Stack",
  ai: "AI / ML",
  data: "Data Eng",
  tools: "Tools",
  platforms: "Platforms",
};

export function Skills() {
  const { t, pick } = useLang();
  const mounted = useMounted();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const [selected, setSelected] = useState<Skill | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="skills" title={t("skills.title")}>
      <div className="flex flex-wrap gap-2 mb-8">
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
            {t(`skills.filters.${f}`)}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[55fr_45fr] gap-8 items-center">
        <div className="relative h-[480px] rounded-2xl border border-border-subtle bg-bg-secondary/40 overflow-hidden">
          {mounted ? (
            <SkillsGraph
              filter={filter}
              selectedId={selected?.id ?? null}
              onHover={setSelected}
            />
          ) : null}
        </div>

        <div className="min-h-[420px] flex">
          <AnimatePresence mode="wait">
            {!selected ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 text-text-secondary self-center"
              >
                <motion.span animate={{ x: [0, -6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowLeft />
                </motion.span>
                <span>{t("skills.prompt")}</span>
              </motion.div>
            ) : (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border-subtle bg-bg-card p-6 w-full self-center"
              >
                <div className="flex items-start gap-4">
                  <div className="size-16 rounded-xl bg-bg-secondary border border-border-subtle flex items-center justify-center shrink-0">
                    <img src={selected.logo} alt={selected.label} width={40} height={40} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{selected.label}</h3>
                    <span
                      className="inline-block mt-1.5 px-2.5 py-0.5 rounded-pill text-xs"
                      style={{
                        background: `${CLUSTER_COLOR[selected.domain]}22`,
                        color: CLUSTER_COLOR[selected.domain],
                      }}
                    >
                      {DOMAIN_LABEL[selected.domain]}
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-text-secondary leading-relaxed">{pick(selected.description)}</p>

                {(selected.linkedProjects.length > 0 || selected.linkedExperiences.length > 0) && (
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-wider text-text-secondary mb-2">{t("skills.usedIn")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.linkedProjects.map((id) => (
                        <button
                          key={id}
                          onClick={() => scrollTo("projects")}
                          className="text-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                        >
                          {id}
                        </button>
                      ))}
                      {selected.linkedExperiences.map((id) => (
                        <button
                          key={id}
                          onClick={() => scrollTo("experience")}
                          className="text-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                        >
                          {id}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
