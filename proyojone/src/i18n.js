import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from '../public/locales/en/translation.json';
import bnTranslation from '../public/locales/bn/translation.json';
import deTranslation from '../public/locales/de/translation.json';
import frTranslation from '../public/locales/fr/translation.json';
import ptTranslation from '../public/locales/pt/translation.json';
import { useState } from "react";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enTranslation
  },
  bn: {
    translation: bnTranslation
  },
  de: {
    translation: deTranslation
  },
  fr: {
    translation: frTranslation
  },
  pt: {
    translation: ptTranslation
  }
};

const getLanguageFromSession = () => {
  const sessionlang = localStorage.getItem("language");
  if (!sessionlang) {
    localStorage.setItem("language", "en");
    return "en";
  }
  return sessionlang;
};

const sessionlang = getLanguageFromSession();
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: sessionlang, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: sessionlang,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;