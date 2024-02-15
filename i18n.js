import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./src/locales/en/common.json";
import esCommon from "./src/locales/es/common.json";

import enCollections from "./src/locales/en/collections.json";
import esCollections from "./src/locales/es/collections.json";

import enAbout from "./src/locales/en/about.json";
import esAbout from "./src/locales/es/about.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      collections: enCollections,
      about: enAbout,
    },
    es: {
      common: esCommon,
      collections: esCollections,
      about: esAbout
    },
  },
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
