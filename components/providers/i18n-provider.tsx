"use client"

import { useEffect, useState } from "react"
import { I18nextProvider } from "react-i18next"

import i18n from "@/lib/i18n"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Avoid hydration mismatch: render children only after mount so the
  // localStorage-derived language is applied consistently.
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
