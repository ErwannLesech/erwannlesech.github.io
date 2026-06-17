"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "@/locales/en.json"
import fr from "@/locales/fr.json"

export const LANGUAGES = ["fr", "en"] as const
export type Language = (typeof LANGUAGES)[number]
export const STORAGE_KEY = "portfolio-lang"

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "fr"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "fr" || stored === "en") return stored
  const browser = window.navigator.language.slice(0, 2)
  return browser === "en" ? "en" : "fr"
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: getInitialLanguage(),
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
    returnObjects: true,
  })
}

export default i18n
