import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "../locales/fr.json";
import en from "../locales/en.json";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        fr: { translation: fr },
        en: { translation: en },
      },
      lng: "fr",
      fallbackLng: "fr",
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export function setLang(lang: "fr" | "en") {
  i18n.changeLanguage(lang);
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lang);
  }
}

export function hydrateLangFromStorage() {
  if (typeof window === "undefined") return;
  const stored = localStorage.getItem("lang");
  if (stored === "fr" || stored === "en") {
    if (i18n.language !== stored) i18n.changeLanguage(stored);
  }
}

export default i18n;
