import ReactNative from "react-native";
import I18n from "react-native-i18n";

// Import all locales
import en from "./en.json";
import kk from "./kk.json";
import ru from "./ru.json";

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  kk,
  en,
  ru
};
I18n.defaultLocale = "ru";
const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL =
  currentLocale.indexOf("en") === 0 ||
  currentLocale.indexOf("kk") === 0 ||
  currentLocale.indexOf("ru") === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;