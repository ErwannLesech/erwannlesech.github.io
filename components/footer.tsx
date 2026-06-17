"use client"

import { useTranslation } from "react-i18next"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Erwann Lesech. {t("footer.rights")}
        </p>
        <p className="text-xs text-muted-foreground">{t("footer.built")}</p>
        <div className="flex gap-4">
          <a href="https://github.com/ErwannLesech" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/erwann-lesech" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:erwann.lesech@example.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
