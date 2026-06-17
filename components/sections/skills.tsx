"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { useTranslation } from "react-i18next"

import { SectionHeading } from "@/components/section-heading"
import { SkillPanel } from "@/components/skill-panel"
import { skills, domainColors, type SkillDomain } from "@/data/skills"
import { cn } from "@/lib/utils"

const SkillsGraph = dynamic(
  () => import("@/components/skills-graph").then((m) => m.SkillsGraph),
  { ssr: false },
)

const DOMAIN_FILTERS: Array<"all" | SkillDomain> = [
  "all",
  "ml",
  "data",
  "cloud",
  "devops",
  "languages",
  "frameworks",
]

export function Skills() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [domain, setDomain] = useState<"all" | SkillDomain>("all")

  const activeId = hovered ?? selected

  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" title={t("skills.title")} subtitle={t("skills.subtitle")} />

        <div className="mb-8 flex flex-wrap gap-2">
          {DOMAIN_FILTERS.map((f) => {
            const isActive = domain === f
            const color = f === "all" ? undefined : domainColors[f]
            return (
              <button
                key={f}
                onClick={() => setDomain(f)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {color && (
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} aria-hidden />
                )}
                {t(`skills.filters.${f}`)}
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="relative h-[420px] overflow-hidden rounded-2xl border border-border bg-card/50 sm:h-[520px]">
            <SkillsGraph
              selected={selected}
              onSelect={setSelected}
              onHover={setHovered}
              highlightDomain={domain === "all" ? null : domain}
            />
          </div>

          <SkillPanel
            skillId={activeId}
            defaultTitle={t("hero.panel_default_title")}
            defaultText={t("hero.panel_default_text")}
          />
        </div>
      </div>
    </section>
  )
}
