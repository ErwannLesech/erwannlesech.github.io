"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SkillPanel } from "@/components/skill-panel"

const SkillsGraph = dynamic(
  () => import("@/components/skills-graph").then((m) => m.SkillsGraph),
  {
    ssr: false,
    loading: () => (
      <div className="flex aspect-square w-full max-w-[500px] items-center justify-center rounded-lg border border-border bg-card/40">
        <span className="text-sm text-muted-foreground">Loading graph…</span>
      </div>
    ),
  }
)

export function Hero() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const activeSkill = hovered ?? selected

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[10%] bottom-1/4 h-[300px] w-[300px] rounded-full bg-sky/10 blur-[120px]"
      />

      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* Left: intro + skill panel */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm font-medium text-primary">
              {t("hero.greeting")}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl text-balance">
              {t("hero.name")}
            </h1>
            <p className="mt-2 text-xl font-semibold text-sky md:text-2xl">
              {t("hero.title")}
            </p>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed text-pretty">
              {t("hero.tagline")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            <Button size="lg" onClick={() => scrollTo("projects")}>
              {t("hero.cta_projects")}
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/cv.pdf" download>
                <Download className="h-4 w-4" />
                {t("hero.cta_cv")}
              </a>
            </Button>
          </motion.div>

          {/* Skill detail panel appears to the LEFT of the canvas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="min-h-[220px]"
          >
            <SkillPanel
              skillId={activeSkill}
              defaultTitle={t("hero.panel_default_title")}
              defaultText={t("hero.panel_default_text")}
            />
          </motion.div>
        </div>

        {/* Right: 3D graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <SkillsGraph
            selected={selected}
            onSelect={setSelected}
            onHover={setHovered}
            className="aspect-square w-full max-w-[500px] cursor-grab touch-none"
          />
          <p className="mt-2 text-center text-xs text-muted-foreground">
            {t("hero.graph_hint")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
