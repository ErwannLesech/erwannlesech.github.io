"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/experiences"

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="02" title={t("experience.title")} />

        <div className="relative ml-3 border-l border-border pl-8 sm:ml-4 sm:pl-12">
          {experiences.map((exp, i) => {
            const bullets = t(`experience.items.${exp.id}.bullets`, {
              returnObjects: true,
            }) as string[]
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[42px] flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-primary sm:-left-[66px]">
                  <Briefcase className="h-3.5 w-3.5" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {t(`experience.items.${exp.id}.role`)}
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground">
                    {t(`experience.items.${exp.id}.dates`)}
                  </span>
                </div>
                <p className="mt-1 font-medium text-primary">
                  {t(`experience.items.${exp.id}.company`)}
                </p>

                <ul className="mt-4 space-y-2">
                  {bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
