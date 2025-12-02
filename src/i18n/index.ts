import en from "./locales/en";
import zhHant from "./locales/zh-Hant";

export type Locale = "en" | "zh-Hant";

export const locales: Record<Locale, typeof en> = {
  en,
  "zh-Hant": zhHant,
};

export const defaultLocale: Locale = "zh-Hant";

export type Translations = typeof en;
