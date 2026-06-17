"use client"

import { motion } from "framer-motion"

import { useTranslation } from "react-i18next"
import {
  domainColors,
  domainLabelKeys,
  skills,
  type Skill,
} from "@/data/skills"
import { projects } from "@/data/projects"
import { experiences } from "@/data/experiences"
import { Badge } from "@/components/ui/badge"

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function SkillPanel({
  skillId,
  defaultTitle,
  defaultText,
  compact = false,
}: {
  skillId: string | null
  defaultTitle: string
  defaultText: string
  compact?: boolean
}) {
  const { t } = useTranslation()
  const skill: Skill | undefined = skills.find((s) => s.id === skillId)

  if (!skill) {
    return (
      <div className="flex h-full flex-col justify-center rounded-lg border border-border bg-card/60 p-6 backdrop-blur">
        <h3 className="text-lg font-semibold">{defaultTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {defaultText}
        </p>
      </div>
    )
  }

  const color = domainColors[skill.domain]
  const linkedProjects = projects.filter((p) =>
    skill.linkedProjects.includes(p.id)
  )
  const linkedExperiences = experiences.filter((e) =>
    skill.linkedExperiences.includes(e.id)
  )

  return (
    <motion.div
      key={skill.id}
      initial={{ opacity: 0, x: compact ? 0 : -16, y: compact ? 12 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex h-full flex-col rounded-lg border border-border bg-card/80 p-6 backdrop-blur"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-bold">{skill.label}</h3>
        <span
          className="rounded-md px-2.5 py-1 text-xs font-semibold"
          style={{ backgroundColor: `${color}26`, color }}
        >
          {t(domainLabelKeys[skill.domain])}
        </span>
      </div>

      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {t("skills.my_link")}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {t(`skills.items.${skill.id}.desc`)}
      </p>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="text-muted-foreground">
            {t("skills.proficiency")}
          </span>
          <span style={{ color }}>{skill.proficiency}%</span>
        </div>
        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-surface">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>

      {(linkedProjects.length > 0 || linkedExperiences.length > 0) && (
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t("hero.linked_label")}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {linkedExperiences.map((e) => (
              <button key={e.id} onClick={() => scrollToSection("experience")}>
                <Badge
                  variant="sky"
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  {t(`experience.items.${e.id}.company`)}
                </Badge>
              </button>
            ))}
            {linkedProjects.map((p) => (
              <button key={p.id} onClick={() => scrollToSection("projects")}>
                <Badge className="cursor-pointer transition-transform hover:scale-105">
                  {t(`projects.items.${p.id}.title`)}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
