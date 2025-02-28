"use client";

import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const isServer = typeof window === "undefined";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "hu",
    supportedLngs: ["hu", "en", "hr"],
    interpolation: { escapeValue: false, },
    backend: { loadPath: isServer ? "" : "/locales/{{lng}}/common.json", },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
  });

export default i18n;
