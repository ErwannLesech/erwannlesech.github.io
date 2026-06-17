"use client"

import { useTranslation } from "react-i18next"

import { STORAGE_KEY, type Language } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = (i18n.language?.slice(0, 2) as Language) ?? "fr"

  const setLang = (lang: Language) => {
    i18n.changeLanguage(lang)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang)
    }
  }

  return (
    <div
      className="flex items-center rounded-md border border-border p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      {(["fr", "en"] as Language[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLang(lang)}
          aria-pressed={current === lang}
          className={cn(
            "rounded-sm px-2 py-1 uppercase transition-colors",
            current === lang
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
