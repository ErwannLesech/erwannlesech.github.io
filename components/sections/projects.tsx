"use client"

import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { projects, type ProjectDomain } from "@/data/projects"
import { cn } from "@/lib/utils"

const FILTERS: Array<"all" | ProjectDomain> = ["all", "ml", "data", "cloud", "devops"]

export function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<"all" | ProjectDomain>("all")
  const [active, setActive] = useState<string | null>(null)

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.domain === filter)),
    [filter],
  )

  const activeProject = projects.find((p) => p.id === active)

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" title={t("projects.title")} />

        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {t(`projects.filters.${f}`)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActive(project.id)}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/50"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <Badge variant="secondary" className="capitalize">
                    {t(`projects.filters.${project.domain}`)}
                  </Badge>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t(`projects.items.${project.id}.title`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(`projects.items.${project.id}.description`)}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-lg">
          {activeProject && (
            <>
              <DialogHeader>
                <Badge variant="secondary" className="mb-1 w-fit">
                  {t(`projects.filters.${activeProject.domain}`)}
                </Badge>
                <DialogTitle>{t(`projects.items.${activeProject.id}.title`)}</DialogTitle>
                <DialogDescription className="leading-relaxed">
                  {t(`projects.items.${activeProject.id}.details`)}
                </DialogDescription>
              </DialogHeader>

              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {t("projects.tech")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                {activeProject.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={activeProject.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {t("projects.github")}
                    </a>
                  </Button>
                )}
                {activeProject.live && (
                  <Button asChild size="sm">
                    <a href={activeProject.live} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("projects.live")}
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
