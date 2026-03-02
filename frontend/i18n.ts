import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const defaultNS = "translation";
const LANG_KEY = "@language";

const resources = {
  en: { [defaultNS]: en },
  ar: { [defaultNS]: ar },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  defaultNS,
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

// Load saved language and persist on change
AsyncStorage.getItem(LANG_KEY).then((saved) => {
  if (saved === "en" || saved === "ar") {
    i18n.changeLanguage(saved);
  }
});
i18n.on("languageChanged", (lng) => {
  AsyncStorage.setItem(LANG_KEY, lng);
});

export default i18n;
