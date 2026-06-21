import { useTranslation } from "react-i18next";

export function useLang() {
  const { i18n, t } = useTranslation();
  const lang = (i18n.language?.startsWith("en") ? "en" : "fr") as "fr" | "en";
  const pick = <T,>(obj: { fr: T; en: T }): T => obj[lang];
  return { lang, t, pick };
}
