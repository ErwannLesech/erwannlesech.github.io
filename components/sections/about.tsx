"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

import { SectionHeading } from "@/components/section-heading"
import { skills } from "@/data/skills"
import { projects } from "@/data/projects"
import { publications } from "@/data/publications"

export function About() {
  const { t } = useTranslation()

  const stats = [
    { value: "3+", label: t("about.stats.experience") },
    { value: `${projects.length}`, label: t("about.stats.projects") },
    { value: `${publications.length}`, label: t("about.stats.publications") },
    { value: `${skills.length}`, label: t("about.stats.stack") },
  ]

  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="01" title={t("about.title")} />
        <div className="grid gap-12 md:grid-cols-[260px_1fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-48 md:mx-0 md:w-full"
          >
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-primary/10 blur-xl" aria-hidden />
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/profile.png"
                alt="Portrait of Erwann Lesech"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              {t("about.bio")}
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <div className="font-mono text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
