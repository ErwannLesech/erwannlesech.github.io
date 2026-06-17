"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { FileText, Newspaper, BrainCircuit, ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { publications, type PublicationType } from "@/data/publications"

const typeIcon: Record<PublicationType, typeof FileText> = {
  report: FileText,
  article: Newspaper,
  reflection: BrainCircuit,
}

function formatDate(date: string, locale: string) {
  const [year, month] = date.split("-")
  return new Date(Number(year), Number(month) - 1).toLocaleDateString(
    locale === "fr" ? "fr-FR" : "en-US",
    { month: "long", year: "numeric" },
  )
}

export function Publications() {
  const { t, i18n } = useTranslation()

  return (
    <section id="publications" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="05" title={t("publications.title")} />

        <div className="grid gap-5 sm:grid-cols-2">
          {publications.map((pub, i) => {
            const Icon = typeIcon[pub.type]
            return (
              <motion.a
                key={pub.id}
                href={pub.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <Badge variant="secondary">{t(`publications.types.${pub.type}`)}</Badge>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-foreground">
                  {t(`publications.items.${pub.id}.title`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(`publications.items.${pub.id}.abstract`)}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {formatDate(pub.date, i18n.language)}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary">
                    {t("publications.read")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
