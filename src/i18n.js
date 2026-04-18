import React from 'react'
import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import { languageDetector, languageDetectorOptions } from './lang-detector';
import en from "./locales/en.json"
import pt from "./locales/pt.json"
import es from "./locales/es.json"

const resources = {
    en: { translation: en },
    pt: { translation: pt },
    es: { translation: es },
};

i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
        detection: languageDetectorOptions,
        resources,
         // supportedLngs: ["pt", "en"],
        // lng: "pt", // fallback language is portuguese
        fallbackLng: ["en"],

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
