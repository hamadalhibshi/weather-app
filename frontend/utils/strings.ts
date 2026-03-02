import { TFunction } from "i18next";

export const getDayTranslation = (day: string, t: TFunction) => {
  switch (day) {
    case "today":
      return t("utils.days.today");
    case "sunday":
      return t("utils.days.sunday");
    case "monday":
      return t("utils.days.monday");
    case "tuesday":
      return t("utils.days.tuesday");
    case "wednesday":
      return t("utils.days.wednesday");
    case "thursday":
      return t("utils.days.thursday");
    case "friday":
      return t("utils.days.friday");
    case "saturday":
      return t("utils.days.saturday");
    default:
      return day;
  }
};

export const getConditionTranslation = (condition: string, t: TFunction) => {
  switch (condition) {
    case "partly cloudy":
      return t("utils.conditions.partlyCloudy");
    case "sunny":
      return t("utils.conditions.sunny");
    case "cloudy":
      return t("utils.conditions.cloudy");
    case "night":
      return t("utils.conditions.night");
    case "nightPartlyCloudy":
      return t("utils.conditions.nightPartlyCloudy");
    case "clear":
      return t("utils.conditions.clear");
    case "rain":
      return t("utils.conditions.rain");
    default:
      return condition;
  }
};