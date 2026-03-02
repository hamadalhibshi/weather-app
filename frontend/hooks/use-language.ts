import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { i18n } = useTranslation();

  const isRTL = i18n.language?.startsWith("ar") ?? false;
  const currentLang = i18n.language?.startsWith("ar") ? "ar" : "en";

  const changeLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "ar" : "en");
  };

  return { isRTL, changeLanguage };
}
