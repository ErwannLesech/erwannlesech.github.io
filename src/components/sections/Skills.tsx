import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Section } from "@/components/SectionWrapper";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { skills, type Skill, type SkillDomain } from "@/data/skills";
import { useMounted } from "@/hooks/use-mounted";
import { useLang } from "@/lib/useLang";
import { cn } from "@/lib/utils";
import { CLUSTER_COLOR } from "./skillsConstants";
import { SkillsGraph } from "./SkillsGraph";

const FILTERS: ("all" | SkillDomain)[] = ["all", ...new Set(skills.map((s) => s.domain))];

type LinkedItem = {
  id: string;
  type: "project" | "experience";
  label: string;
};

export function Skills() {
  const { t, pick } = useLang();
  const mounted = useMounted();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const [hovered, setHovered] = useState<Skill | null>(null);
  const [pinned, setPinned] = useState<Skill | null>(null);
  const [isGraphHovered, setIsGraphHovered] = useState(false);
  const displayed = pinned ?? hovered;

  const linkedItems = useMemo<LinkedItem[]>(() => {
    if (!displayed) return [];

    const projectItems = displayed.linkedProjects
      .map((projectId) => projects.find((p) => p.id === projectId))
      .filter((p): p is (typeof projects)[number] => Boolean(p))
      .map((p) => ({
        id: p.id,
        type: "project" as const,
        label: pick(p.title),
      }));

    const experienceItems = displayed.linkedExperiences
      .map((experienceId) => experiences.find((e) => e.id === experienceId))
      .filter((e): e is (typeof experiences)[number] => Boolean(e))
      .map((e) => ({
        id: e.id,
        type: "experience" as const,
        label: e.company,
      }));

    return [...projectItems, ...experienceItems].slice(0, 5);
  }, [displayed, pick]);

  const openLinkedItem = (item: LinkedItem) => {
    const sectionId = item.type === "project" ? "projects" : "experience";
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("portfolio:navigate-to-item", {
          detail: { type: item.type, id: item.id },
        })
      );
    }, 350);
  };

  return (
    <Section id="skills" title={t("skills.title")} subtitle={t("skills.description")}>
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
        <div>
          <div className="text-xs uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-[var(--accent)]"></div>
            {t("skills.graphInfo")}
          </div>
          <div
            className="relative h-[480px] rounded-2xl border border-border-subtle bg-bg-secondary/40 overflow-hidden"
            onPointerEnter={() => setIsGraphHovered(true)}
            onPointerLeave={() => setIsGraphHovered(false)}
          >
            {mounted ? (
              <SkillsGraph
                filter={filter}
                selectedId={displayed?.id ?? null}
                focusedId={pinned?.id ?? null}
                motionScale={displayed ? 0.33 : isGraphHovered ? 0.66 : 1.25}
                onHover={setHovered}
                onPin={(s) => setPinned((prev) => (prev?.id === s.id ? null : s))}
                onReset={() => {
                  setHovered(null);
                  setPinned(null);
                }}
              />
            ) : null}
          </div>
      </div>

        <div className="min-h-[420px] flex">
          <AnimatePresence mode="wait">
            {!displayed ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-dashed border-border-subtle bg-bg-secondary/30 p-6 w-full self-center flex items-center justify-center text-center text-text-secondary"
              >
                <span>{t("skills.prompt")}</span>
              </motion.div>
            ) : (
              <motion.div
                key={displayed.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border-subtle bg-bg-card p-6 w-full self-center"
              >
                <div className="flex items-start gap-4">
                  <div className="size-16 rounded-xl bg-bg-secondary border border-border-subtle flex items-center justify-center shrink-0">
                    <img src={displayed.logo} alt={displayed.label} width={40} height={40} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{displayed.label}</h3>
                    <span
                      className="inline-block mt-1.5 px-2.5 py-0.5 rounded-pill text-xs"
                      style={{
                        background: `${CLUSTER_COLOR[displayed.domain]}22`,
                        color: CLUSTER_COLOR[displayed.domain],
                      }}
                    >
                      {t(`skills.filters.${displayed.domain}`)}
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-text-secondary leading-relaxed">{pick(displayed.description)}</p>

                {linkedItems.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-wider text-text-secondary mb-2">{t("skills.usedIn")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {linkedItems.map((item) => (
                        <button
                          key={`${item.type}-${item.id}`}
                          onClick={() => openLinkedItem(item)}
                          className="text-mono text-xs px-2.5 py-1 rounded-md border border-border-subtle hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                        >
                          {item.label}
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
